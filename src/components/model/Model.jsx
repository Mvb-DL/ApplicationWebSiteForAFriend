import React, { useRef, useImperativeHandle } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Model = React.forwardRef((props, ref) => {

  const { camera } = useThree();

  camera.position.set(2.5, 1.5, 1.4); // Ändern Sie die Werte entsprechend Ihren Anforderungen
  camera.lookAt(1, 1, 1);

  const { scene } = useGLTF("src/assets/images/coin_6.glb");
  scene.scale.set(0.3, 0.2, 0.2);

  useImperativeHandle(ref, () => ({
    // Expose the Three.js object or any other methods/properties if needed
    object: scene,
  }));

  return <primitive object={scene} />;
});

const OrbitControlsWrapper = () => {
  const { camera, gl } = useThree();
  const controls = useRef(new OrbitControls(camera, gl.domElement));

  useFrame(() => {
    controls.current.update();
  });

  return null;
};

const AutoRotateModel = () => {
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current && modelRef.current.object) {
      modelRef.current.object.rotation.y += 0.005; // Adjust the rotation speed as needed
    }
  });

  return <Model ref={modelRef} />;
};

export { Model, AutoRotateModel };


const GLBViewer = () => {

 


  return (
    <div className="big-five resume-block">
      <div className="container" style={{ textAlign: "center" }}>
        <div className="big-content">
          <div className='canva' >
            <Canvas>
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <directionalLight position={[-25, -0, -0]} intensity={1} />
              <AutoRotateModel />
              <OrbitControlsWrapper />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GLBViewer;


