import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';

import { Canvas, useFrame } from 'react-three-fiber';

const SpinningMesh = ({ position, args, color }) => {
  const mesh = useRef(null);

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh position={position} ref={mesh} castShadow>
      <boxBufferGeometry attach='geometry' args={args} />
      <meshBasicMaterial attach='material' color={color || 'pink'} />
    </mesh>
  );
};

function Boxes() {
  return (
    <>
      <Canvas
        camera={{ position: [-5, 2, 10], fov: 60 }}
        id='three-screen'
        shadows
      >
        {/* <PerspectiveCamera makeDefault position={[0, -10, 0]} /> */}
        <OrbitControls />
        <ambientLight args={['red', 1]} position={[-10, 1, 0]} />
        <directionalLight position={[0, 10, -1]} intensity={1.5} castShadow />
        {/* <pointLight
          args={['#ffffff', 0.25]}
          position={[-10, 0, 0]}
          intensity={1}
        />
        <pointLight position={[0, -10, 0]} intensity={1.5} color='#ffffff' /> */}

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <meshStandardMaterial attach='material' color='#fff' />
            <shadowMaterial attach='material' color={'white'} />
          </mesh>
        </group>

        <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} color='lightblue' />
        <SpinningMesh position={[-2, 1, -5]} />
        <SpinningMesh position={[5, 1, -2]} color='lightgreen' />
      </Canvas>
    </>
  );
}

export default Boxes;
