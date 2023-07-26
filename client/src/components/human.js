import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";


function Model(props) {
    const { scene } = useGLTF("/HumanModel.glb");
    return <primitive object={scene} {...props} />
  }

function Human(){

    return(
        
    <Canvas dpr={[1,2]} shadows camera={{ fov: 45 }} style={{"position": "absolute", width: "100%", height: "100%"}}>
      <color attach="background" args={["#888888"]} />
      <PresentationControls speed={2} global zoom={1} polar={[-0.1, Math.PI / 4]}>
        <Stage environment={"sunset"}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>

    );

}

export default Human;