'use client';
import {Canvas } from "@react-three/fiber";
import {useGLTF ,OrbitControls,Environment } from "@react-three/drei";
import {Suspense} from 'react';
import React from "react";


function GlobeViewer({url = "Models/Globe.glb"} : {url ?: string}) {
    const {scene} = useGLTF(url);
    return <primitive object={scene} scale={1} position={[0, 0, 0]} />;
}

function SceneGlobe(){
    return (
        <div className="h-96 w-96 z-10">
            <Canvas camera={{position: [50,20,-15],fov:45}}>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[1,2,2]} intensity={1.5}/>
                
                <Suspense>
                    <GlobeViewer/>
                </Suspense>
                <OrbitControls enableZoom={true}/>
                <Environment preset="studio"/>
            </Canvas>
        </div>
    );    
}
useGLTF.preload("Models/Globe.glb");
export {SceneGlobe};