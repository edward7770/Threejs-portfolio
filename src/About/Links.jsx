import React from "react";
import { extend } from '@react-three/fiber';
import { TextGeometry  } from 'three/examples/jsm/geometries/TextGeometry';

extend({ TextGeometry })

const Links = ({ font }) => {
  const z = 83;
  const x = -0.5;
  const z_sub = 8;
  const text_angle = [Math.PI / 2 - Math.PI / 8, Math.PI, 0];
  return (
    <>
      <mesh rotation={[0, Math.PI, 0]} position={[x + 2, 0.01, 90]}>
        <textGeometry
          attach="geometry"
          args={["Links", { font, size: 3, height: 1 }]}
        />
        <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
      <group>
        <mesh rotation={text_angle} position={[x, 0.1, z]}>
          <textGeometry
            attach="geometry"
            args={["Facebook", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={text_angle} position={[x, 0.1, z - z_sub]}>
          <textGeometry
            attach="geometry"
            args={["Twitter", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={text_angle} position={[x, 0.1, z - z_sub * 2]}>
          <textGeometry
            attach="geometry"
            args={["Whatsapp", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={text_angle} position={[x, 0.1, z - z_sub * 3]}>
          <textGeometry
            attach="geometry"
            args={["LinkedIn", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={text_angle} position={[x, 0.1, z - z_sub * 4]}>
          <textGeometry
            attach="geometry"
            args={["Github", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
      </group>
    </>
  );
};

export default Links;
