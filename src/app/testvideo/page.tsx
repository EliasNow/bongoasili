import React from 'react';
import VideoBackground from '@/components/video/VideoBackground'; // Adjust the import path based on your project structure

const TestVideoPage = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <VideoBackground />
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 2, color: '#fff', padding: '20px' }}>
        <h1>Welcome to the Test Video Page</h1>
        <p>videoooo.</p>
      </div>
    </div>
  );
};

export default TestVideoPage;