import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import ParticleSystem from './ParticleSystem';
import { useHandTracking } from '../hooks/useHandTracking';
import { Box, IconButton, Typography } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';

export default function ParticleScene() {
  const [preset, setPreset] = useState('sphere');
  const [color, setColor] = useState('#3C2F2F');
  const [showVideo, setShowVideo] = useState(false);
  const { tension, isDetecting, videoRef } = useHandTracking();

  // Cycle presets periodically or based on interaction
  useEffect(() => {
    const presets = ['sphere', 'heart', 'flower', 'saturn'];
    let current = 0;
    const interval = setInterval(() => {
      current = (current + 1) % presets.length;
      setPreset(presets[current]);
    }, 10000); // Change every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 30], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: 'auto' }}
      >
        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <ParticleSystem preset={preset} tension={tension} color={color} />
          </Float>
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      {/* Hand Tracking UI Overlay (Optional/Subtle) */}
      <Box sx={{ 
        position: 'absolute', 
        bottom: 20, 
        right: 20, 
        zIndex: 10, 
        pointerEvents: 'auto',
        textAlign: 'right'
      }}>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          style={{
            width: '120px',
            height: '90px',
            borderRadius: '8px',
            border: '2px solid rgba(60, 47, 47, 0.3)',
            display: showVideo ? 'block' : 'none',
            marginBottom: '8px'
          }}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
          {isDetecting && (
            <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 600 }}>
              HANDS DETECTED
            </Typography>
          )}
          <IconButton 
            size="small" 
            onClick={() => setShowVideo(!showVideo)}
            sx={{ bgcolor: 'rgba(255,255,255,0.7)', '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}
          >
            {showVideo ? <VideocamOffIcon fontSize="small" /> : <VideocamIcon fontSize="small" />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
