import { createBox } from "./box";
import { createGround } from "./ground";
import { createScene } from "./scene";
import * as BABYLON from 'babylonjs';
var canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);
let box = createBox(scene);
let scene = createScene(engine, canvas, box);
createGround(scene);

const speed = 0.1;
const inputMap = {};
scene.actionManager = new BABYLON.ActionManager(scene);
// События нажатия клавиш
scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, (evt) => {
    inputMap[evt.sourceEvent.key] = true;
}));
scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, (evt) => {
    inputMap[evt.sourceEvent.key] = false;
}));
scene.onBeforeRenderObservable.add(() => {
    if (inputMap["ArrowUp"]) {
        box.position.z -= speed; // Движение вперед
    }
    if (inputMap["ArrowDown"]) {
        box.position.z += speed; // Движение назад
    }
    if (inputMap["ArrowLeft"]) {
        box.position.x -= speed; // Движение влево
    }
    if (inputMap["ArrowRight"]) {
        box.position.x += speed; // Движение вправо
    }
})

window.addEventListener('resize', function () {
    engine.resize();
});







engine.runRenderLoop(() => { scene.render(); });