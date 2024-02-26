import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

import islandScene from '../assets/3d/mountain.glb';

const MountainIsland = ({isRotating, setIsRotating, setCurrentStage, ...props}) => {
  const islandRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  //how fast it moves when u scroll
  const dampingFactor = 0.95;

  //mouse click
  const handlePointerDown = (e) => {
    //mouse click will only do what it does in this func
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  }

  //mouse release
  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }

  //mouse moving
  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      const delta = (clientX - lastX.current) / viewport.width;
      
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  //move with key presses
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft'){
      if(!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.01 * Math.PI;
    } else if (e.key === 'ArrowRight'){
      if(!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.01 * Math.PI;
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
      setIsRotating(false);
    }
  }


  useEffect(() => {
    const canvas = gl.domElement;
    //action listeners to make the movements work
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      //use canvas because action is performed on canvas not the rom
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('keydown', handleKeyDown);
    }

  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  //from react-three.fiber makes it work for every frame
  useFrame(() => {
    if (!isRotating){
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current < 0.001)) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current.rotation.y;
        
      //keeps the rotation in the range [0, 2pi] as it is a circular rotation. 
      const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      // console.log(normalizedRotation);

      switch (true) {
        case normalizedRotation >= 4.93 && normalizedRotation <= 5.25:
          setCurrentStage(4);
          break; 
        case normalizedRotation >= 0.35 && normalizedRotation <= 1.25:
          setCurrentStage(3);
          break; 
        case normalizedRotation >= 1.9 && normalizedRotation <= 2.35:
          setCurrentStage(2);
          break; 
        case normalizedRotation >= 3 && normalizedRotation <= 4:
          setCurrentStage(1);
          break; 
        default:
          setCurrentStage(null);
      }
    }
  })
  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group16_pCube26_brwen_0.geometry}
        material={materials.brwen}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group16_pCube26_dbrown_0.geometry}
        material={materials.dbrown}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group16_pCube26_smoke_0.geometry}
        material={materials.smoke}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group16_pCube26_phong8_0.geometry}
        material={materials.phong8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group16_pCube26_brown_0.geometry}
        material={materials.brown}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group16_pCube26_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group16_pCube26_darkbrown_0.geometry}
        material={materials.darkbrown}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group16_pCube26_GreyE_0.geometry}
        material={materials.GreyE}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group16_pCube26_Grassgreen_0.geometry}
        material={materials.Grassgreen}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group16_pCube26_Sand_0.geometry}
        material={materials.Sand}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group16_pCube26_Snow_0.geometry}
        material={materials.Snow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group16_pCube26_Waterblue_0.geometry}
        material={materials.Waterblue}
      />
    </a.group>
  );
}

export default MountainIsland;


