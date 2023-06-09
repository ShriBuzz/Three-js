/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: MightyPinecone (https://sketchfab.com/Mighty.Pinecone)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/turtle-kaiju-f8fbbd4a2f05416288e4f7836ec61a11
title: Turtle Kaiju
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/model-turtle-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh castShadow receiveShadow geometry={nodes.Turtle_01_Default001_0.geometry} material={materials['Default.001']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model-turtle-transformed.glb')
