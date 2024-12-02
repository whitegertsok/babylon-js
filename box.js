import * as BABYLON from 'babylonjs';
export function createBox(scene) {
    const box = BABYLON.MeshBuilder.CreateBox("box", {}, scene); //scene is optional and defaults to the current scene
    box.position.y = 3;
    return box;
}