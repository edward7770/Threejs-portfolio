import React from "react";
import { extend } from '@react-three/fiber';
import { TextGeometry  } from 'three/examples/jsm/geometries/TextGeometry';

extend({ TextGeometry })

const Education = ({ font }) => {
  return (
    <>
      <mesh rotation={[0, Math.PI, 0]} position={[40, 0.5, 90]}>
        <textGeometry 
          attach="geometry"
          args={["Education", { font, size: 3, height: 1 }]}
        />
        <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
      <group>
        <mesh
          rotation={[Math.PI / 2 - Math.PI / 8, Math.PI, 0]}
          position={[35, 0.1, 84]}
        >
          <textGeometry 
            attach="geometry"
            args={["Boulder, CO", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[37, 0.1, 81]}>
          <textGeometry 
            attach="geometry"
            args={[
              "April 2013 - March 2017",
              { font, size: 1, height: 0.1 },
            ]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
      </group>
      <group>
        <mesh
          rotation={[Math.PI / 2 - Math.PI / 8, Math.PI, 0]}
          position={[40, 0.1, 72]}
        >
          <textGeometry 
            attach="geometry"
            args={[
              "University of Colorado Boulder",
              { font, size: 1, height: 0.1 },
            ]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[37, 0.1, 69]}>
          <textGeometry 
            attach="geometry"
            args={["Bachelor's Degree in", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[37, 0.1, 66]}>
          <textGeometry 
            attach="geometry"
            args={["Computer Science", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
      </group>
    </>
  );
};

export default Education;
