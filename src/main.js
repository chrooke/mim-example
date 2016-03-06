"use strict";

let jibo = require ('jibo');
let path = require ('path');
let GuiManager = require ('./mim/debug-gui-manager');
let MimManager = require ('./mim/mim-manager');

let Status, factory = jibo.bt.Status;

let root = null;

let blackboard = {};
let notepad = {};

function start() {
    root = jibo.bt.create('../behaviors/main', {
        blackboard: blackboard,
        notepad: notepad
    });
        console.log('done create root');
    root.start();
        console.log('start root');
    window.requestAnimationFrame(update);
}

function update() {
    if (root.status !== Status.IN_PROGRESS) {
        console.log(`BehaviorTree Exited with status: ${root.status}`);
    } else {
        root.update();
        window.requestAnimationFrame(update);
    }
}


jibo.init(function() {
  console.log('Setup');

  require('./behaviors/debug-behavior');
  require('./behaviors/mim');
  require('./behaviors/mim-gui');
  let eyeElement = document.getElementById('eye');
  jibo.visualize.createRobotRenderer(eyeElement, jibo.visualize.DisplayType.EYE);

  let ui_div = document.getElementById('ui');
  GuiManager.init(ui_div);
  MimManager.init();
  MimManager.setGuiManager(GuiManager);

  start();
});
