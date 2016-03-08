"use strict";
let jibo = require('jibo');

let Status = jibo.bt.Status;
let Behavior = jibo.bt.Behavior;

class DebugBehavior extends Behavior {
    constructor(options) {
        super(options);
        this.text = options.text;
        this.status = Status.INVALID;
    }
    start() {
        this.status = Status.SUCCEEDED;
        console.log(this.text);
        return true;
    }
    stop() {

    }
    update() {
        return this.status;
    }
};

jibo.bt.register("DebugBehavior", "project",DebugBehavior);

module.exports = DebugBehavior;
