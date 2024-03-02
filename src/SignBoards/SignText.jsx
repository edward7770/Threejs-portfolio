import React from "react";
import { extend } from '@react-three/fiber';
import { TextGeometry  } from 'three/examples/jsm/geometries/TextGeometry';

extend({ TextGeometry })

const SignText = ({ scale, position, font, text }) => {
  return (
    <>
      <mesh scale={scale} rotation={[0, Math.PI, 0]} position={position}>
        <textGeometry
          attach="geometry"
          args={[text, { font, size: 1, height: 0.1 }]}
        />
        <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
    </>
  );
};

export default SignText;
