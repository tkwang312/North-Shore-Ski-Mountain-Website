import {useRef} from 'react'

import planeScene from '../assets/3d/plane.glb';
import { useGLTF, useAnimations } from '@react-three/drei';

// spread props so we can directly pass to mesh
const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {

  }, [actions, isRotating])

  return (
    <mesh {...props}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane