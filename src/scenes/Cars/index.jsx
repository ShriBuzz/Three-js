import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import Three from './components/three';

const Cars = () => {
  return (
    <Canvas id='three-screen' shadows>
      <Suspense fallback={null}>
        <Three />
      </Suspense>
    </Canvas>
  );
};

export default Cars;
