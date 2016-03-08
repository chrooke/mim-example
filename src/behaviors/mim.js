"use strict";

let path = require('path');
let jibo = require('jibo');

let Status = jibo.bt.Status;
let Behavior = jibo.bt.Behavior;

let blackboard = {};

class Mim extends Behavior {
    constructor(options) {
        super(options);
        this.getConfig = options.getConfig;
        this.onStatus = options.onStatus;
        this.onResults = options.onResults;
        this.status = Status.INVALID;
    }
    start() {
        this.status = Status.IN_PROGRESS;

        this.root = jibo.bt.create('./mim-bt', {
            blackboard: blackboard,
            notepad: {config: this.getConfig(), onStatus: this.onStatus, onResults: this.onResults}
        });

        return this.root.start();
    }
    stop() {

    }
    update() {
        this.root.update();
        return this.root.status
    }
};

jibo.bt.register("Mim", "project",Mim);

module.exports = Mim;
