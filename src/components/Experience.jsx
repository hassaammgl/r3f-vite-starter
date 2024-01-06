import { OrbitControls } from "@react-three/drei";
import Avatar from "../assets/models/MYAvatar";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <Avatar position={[0, -1, 0]} />
    </>
  );
};
