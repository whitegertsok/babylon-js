import * as BABYLON from 'babylonjs';
export function createGround(scene) {
    const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 10, height: 10}, scene); //scene is optional and defaults to the current scene
    return ground;
}