import React from "react";
import { useGLTF } from "@react-three/drei";

const Avatar = (props) => {
  const model = useGLTF("/avatar.glb");
  return (
    <mesh {...props} rotation={[6.3, 7.1, 0]}>
      <primitive object={model.scene} />
    </mesh>
  );
};

export default Avatar;
