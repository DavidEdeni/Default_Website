import { useEffect, useRef, useState, useCallback } from 'react';

// Note: MediaPipe Hands and Camera are typically loaded via scripts or specific npm packages.
// The original code used imports from '@mediapipe/hands' and '@mediapipe/camera_utils'.
// In a Vite environment, we might need to handle these as global or use the npm packages.
// Since we installed the packages, we'll try importing.

export function useHandTracking() {
  const [landmarks, setLandmarks] = useState(null);
  const [tension, setTension] = useState(0);
  const [isDetecting, setIsDetecting] = useState(false);
  const videoRef = useRef(null);
  const handsRef = useRef(null);

  const onResults = useCallback((results) => {
    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
      setIsDetecting(true);
      const handLandmarks = results.multiHandLandmarks[0];
      setLandmarks(handLandmarks);

      // Calculate tension: Avg distance of finger tips (4,8,12,16,20) to wrist (0)
      const wrist = handLandmarks[0];
      const fingerTips = [4, 8, 12, 16, 20];
      let totalDist = 0;

      fingerTips.forEach((idx) => {
        const tip = handLandmarks[idx];
        const dist = Math.sqrt(
          Math.pow(tip.x - wrist.x, 2) +
          Math.pow(tip.y - wrist.y, 2) +
          Math.pow(tip.z - wrist.z, 2)
        );
        totalDist += dist;
      });

      const avgDist = totalDist / 5;
      // Heuristic: 0.15 (closed) to 0.4 (open)
      const minOpen = 0.15;
      const maxOpen = 0.4;
      let normalized = (avgDist - minOpen) / (maxOpen - minOpen);
      normalized = Math.max(0, Math.min(1, normalized));
      
      setTension(1.0 - normalized); // 1.0 = closed/tension, 0.0 = open/relaxed
    } else {
      setIsDetecting(false);
      setTension((prev) => prev * 0.9); // Smoothly decay tension
    }
  }, []);

  useEffect(() => {
    let hands;
    let camera;

    const initMediaPipe = async () => {
      // Import MediaPipe components dynamically to avoid SSR or early execution issues
      const { Hands } = await import('@mediapipe/hands');
      const cameraUtils = await import('@mediapipe/camera_utils');
      const Camera = cameraUtils.Camera;

      if (!videoRef.current) return;

      hands = new Hands({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
      });

      hands.setOptions({
        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
      });

      hands.onResults(onResults);
      handsRef.current = hands;

      camera = new Camera(videoRef.current, {
        onFrame: async () => {
          if (handsRef.current && videoRef.current) {
            await handsRef.current.send({ image: videoRef.current });
          }
        },
        width: 320,
        height: 240,
      });

      camera.start().catch(console.error);
    };

    initMediaPipe();

    return () => {
      if (camera) camera.stop();
      if (hands) hands.close();
    };
  }, [onResults]);

  return { landmarks, tension, isDetecting, videoRef };
}
