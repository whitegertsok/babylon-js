import * as BABYLON from 'babylonjs';
export function createScene(engine, canvas, box) {
    const scene = new BABYLON.Scene(engine);
    const camera = new BABYLON.FreeCamera("camera1",
        new BABYLON.Vector3(0, 5, -10),
        scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    // Attaches the camera to the canvas
    camera.attachControl(canvas, true);
    camera.lockedTarget = box;
    // Creates a light, aiming 0,1,0
    const light = new BABYLON.HemisphericLight("light",
        new BABYLON.Vector3(0, 1, 0),
        scene);
    // Dim the light a small amount 0 - 1
    light.intensity = 0.7;
    return scene;
}