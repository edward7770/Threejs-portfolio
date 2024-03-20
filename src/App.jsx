import "./App.css";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Body";
import Lights from "./Setup/Lights";
import { Loader, Preload, Stars } from "@react-three/drei";
import ReactMark from './ReactMark';

const App = () => {
  return (
    <div id="cover">
      <div id="selector">
        <ReactMark />
        {/* <div id="welcome">
          <div>
            <h1
              style={{
                fontSize: "45px",
                fontWeight: "500",
                marginBottom: "50px",
              }}
            >
              Hello, I'm <span>Vinay Matta.</span>
            </h1>
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "500",
                marginBottom: "50px",
              }}
            >
              I'm a full-stack Web Developer.
            </h2>
          </div>
          {window.innerWidth > 767 ? (
            <div>
              <p>Click to play</p>
              <p style={{ textAlign: "center", marginTop: "50px" }}>
                Move: WASD
                <br />
                Jump: SPACE
                <br />
                Look: MOUSE
                <br />
                Sprint: Left Shift
                <br />
                Fly: F
              </p>
            </div>
          ) : (
            <div>
              <p>Sorry!</p>
              <p>This website does not support mobile devices yet.</p>
            </div>
          )}
        </div> */}
        <div
          className="absolute inset-0 max-w-7xl mx-auto sm:px-16 px-6 items-start gap-5"
          id="welcome"
        >
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-60 h-40 violet-gradient' />
          </div>

          <div>
            <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white">
              Hi, I'm <span className='text-[#915EFF]'>Edward Thomas</span>
            </h1>
            <p className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-2 text-white-100">
              Welcome To My World!
              {/* interfaces and web applications */}
            </p>
          </div>
          <div className="absolute flex" style={{ bottom: '100px' }}>
            <p className="text-white font-black md:text-[40px] sm:text-[30px] xs:text-[30px] text-[20px] mt-2 text-white-100">Click Here</p>
            <div id="arrowAnim">
              <div class="arrowSliding">
                <div class="arrow"></div>
              </div>
              <div class="arrowSliding delay1">
                <div class="arrow"></div>
              </div>
              <div class="arrowSliding delay2">
                <div class="arrow"></div>
              </div>
              <div class="arrowSliding delay3">
                <div class="arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        style={{
          height: "95vh",
          width: "100vw",
          backgroundColor: "black",
        }}
        camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 5, 25] }}
        id="canvas"
      // shadows
      >
        <fog attach="fog" args={["#0d1a26", 70, 120]} />

        <Suspense fallback={null}>
          <Scene />
          <Preload all />
        </Suspense>
        <Stars
          radius={160}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />

        <Lights />
      </Canvas>
      <div className="controls">
        <span>WASD - Move</span>
        <span>Shift - Sprint</span>
        <span>Space - Jump</span>
        <span>F - Fly and Land</span>
        <span>Mouse - Look Around</span>
      </div>
      <Loader
        containerStyles={{
          background:
            "radial-gradient(circle farthest-corner at center top,#071021,#19324a)",
        }} // Flex layout styles
        innerStyles={{
          backgroundColor: "salmon",
          width: "50vw",
        }} // Inner container styles
        barStyles={{
          backgroundColor: "lightgreen",
        }} // Loading-bar styles
        dataInterpolation={(p) => `Loading ${Math.round(p)}%`}
        initialState={(active) => active}
        dataStyles={{
          color: "#fafafa",
          fontSize: "25px",
          fontFamily: "Raleway",
          fontWeight: "500",
        }}
      />
    </div>
  );
};

export default App;
