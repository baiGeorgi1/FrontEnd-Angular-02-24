"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = exports.Senior = exports.Junior = exports.Emploee = void 0;
class Emploee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.tasks = [];
        this.currentWorkerIndex = 0;
    }
    work() {
        console.log(this.tasks[this.currentWorkerIndex]);
        this.currentWorkerIndex =
            (this.currentWorkerIndex + 1) % this.tasks.length;
    }
    collectSalary() { }
}
exports.Emploee = Emploee;
class Junior extends Emploee {
    constructor() {
        super(...arguments);
        this.tasks = [`${this.name} is working on a single task.`];
    }
}
exports.Junior = Junior;
class Senior extends Emploee {
    constructor() {
        super(...arguments);
        this.tasks = [
            `${this.name} is working on a compicated task.`,
            `${this.name} is taking time off work.`,
            `${this.name} is supervising junior workers.`,
        ];
    }
}
exports.Senior = Senior;
class Manager extends Emploee {
    constructor() {
        super(...arguments);
        this.tasks = [
            `${this.name} is scheduled a meeting.`,
            `${this.name} is preparing quarterly report.`,
        ];
    }
}
exports.Manager = Manager;
//# sourceMappingURL=emploee.js.map