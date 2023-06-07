import React, { useEffect } from 'react';

import {
  Decal,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import gsap from 'gsap';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { useFrame, useLoader } from 'react-three-fiber';

import Mug from './mug';
import Turtle from './turtle';

import { angleToRadians } from '../../utils';

import texture from './texture.jpg';
import texture2 from './texture2.jpg';
import texture3 from './texture3.jpg';
import texture4 from './texture4.png';
import dogTexture from './dog.jpg';

const Three = () => {
  const orbitControlRef = React.useRef(null);
  const timeline = gsap.timeline();
  const timeline2 = gsap.timeline();
  const meshBox = React.useRef(null);
  const meshSphere = React.useRef(null);
  const meshSphere2 = React.useRef(null);
  const colormap = useLoader(TextureLoader, texture);
  const colormap2 = useLoader(TextureLoader, texture2);
  const colormap3 = useLoader(TextureLoader, texture3);
  const colormap4 = useLoader(TextureLoader, texture4);

  useFrame((state) => {
    const { x, y } = state.mouse;
    // orbitControlRef.current.setAzimuthalAngle(-x * angleToRadians(45));
    // orbitControlRef.current.setPolarAngle((y + 1) * angleToRadians(45));
    // orbitControlRef.current.update();
  });

  useEffect(() => {
    if (!!meshSphere.current) {
      timeline.to(meshSphere.current.position, {
        duration: 2,
        x: 1,
        ease: 'power2.out',
      });
      timeline.to(
        meshSphere.current.position,
        {
          duration: 1.5,
          y: 0.5,
          ease: 'bounce.out',
        },
        '<'
      );
      timeline.to(
        meshSphere.current.rotation,
        {
          duration: 1.8,
          z: -Math.PI * 2,
          ease: 'power2.out',
        },
        '<'
      );
    }
  }, [meshSphere.current]);

  useEffect(() => {
    if (!!meshSphere2.current) {
      timeline2.to(meshSphere2.current.position, {
        duration: 2,
        x: 1,
        ease: 'power2.out',
      });
      timeline2.to(
        meshSphere2.current.position,
        {
          duration: 1.5,
          y: 0.3,
          ease: 'bounce.out',
        },
        '<'
      );
      timeline2.to(
        meshSphere2.current.rotation,
        {
          duration: 1.8,
          z: Math.PI * 2,
          ease: 'power2.out',
        },
        '<'
      );
    }
  }),
    [meshSphere2.current];

  // useFrame(
  //   () => (meshBox.current.rotation.y = meshBox.current.rotation.y += 0.01)
  // );

  // useFrame(
  //   () =>
  //     (meshSphere.current.rotation.x = meshSphere.current.rotation.y += 0.01)
  // );

  return (
    <>
      <PerspectiveCamera makeDefault position={[-2.2, 1, 5]} />
      <OrbitControls
        ref={orbitControlRef}
        minPolarAngle={angleToRadians(40)}
        maxPolarAngle={angleToRadians(80)}
      />

      {/* Ball */}
      <mesh
        position={[-2, 2, 0]}
        ref={meshSphere}
        castShadow
        onClick={() => timeline.restart()}
      >
        <sphereGeometry attach='geometry' args={[0.5, 32, 32]} />
        <meshStandardMaterial
          attach='material'
          color='#ffffff'
          map={colormap}
          metalness={0.5}
          roughness={0.4}
        />
      </mesh>

      <mesh position={[3, 2, 2]} ref={meshSphere2} castShadow>
        <sphereGeometry attach='geometry' args={[0.3, 32, 32]} />
        <meshStandardMaterial
          attach='material'
          color='#ffffff'
          map={colormap2}
          metalness={0.5}
          roughness={0.4}
        />
      </mesh>

      <Mug position={[-0.6, 0, -1]} texture={dogTexture} />

      <Mug position={[-0.6, 0, 1]} texture={texture3} />

      <Turtle />

      {/* box */}
      {/* <mesh position={[0, 1, -2.2]} ref={meshBox} castShadow>
        <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
        <meshStandardMaterial
          attach='material'
          color='#ffffff'
          map={colormap3}
          metalness={0.7}
          roughness={0.4}
        />
      </mesh> */}

      {/* floor */}
      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color='lightblue' />
        {/* <shadowMaterial attach='material' color={'white'} /> */}
      </mesh>
      <ambientLight args={['#ffffff', 0.4]} />

      <spotLight args={['#ffffff', 1]} position={[-3, 2, 0]} castShadow />
      {/* <pointLight args={['#ffffff', 0.5]} position={[3, 2, 0]} castShadow /> */}

      {/* Environment */}
      <Environment background>
        <mesh>
          <sphereGeometry attach='geometry' args={[50, 100, 100]} />
          <meshBasicMaterial side={THREE.BackSide} color='pink' />
        </mesh>
      </Environment>
    </>
  );
};

export default Three;
