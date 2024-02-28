export abstract class Emploee {
    salary: number;
    tasks: string[] = [];

    private currentWorkerIndex = 0;

    constructor(public name: string, public age: number) {}

    work(): void {
        console.log(this.tasks[this.currentWorkerIndex]);
        this.currentWorkerIndex =
            (this.currentWorkerIndex + 1) % this.tasks.length;
    }
    collectSalary(): void {
        console.log(`${this.name} received ${this.calcSalary()}.`);
    }
    protected abstract calcSalary();
}

export class Junior extends Emploee {
    tasks: string[] = [`${this.name} is working on a single task.`];
    calcSalary(): number {
        return this.salary;
    }
}
export class Senior extends Emploee {
    tasks: string[] = [
        `${this.name} is working on a compicated task.`,
        `${this.name} is taking time off work.`,
        `${this.name} is supervising junior workers.`,
    ];
    calcSalary(): number {
        return this.salary;
    }
}
export class Manager extends Emploee {
    divident: number;
    tasks: string[] = [
        `${this.name} is scheduled a meeting.`,
        `${this.name} is preparing quarterly report.`,
    ];
    calcSalary(): number {
        return this.salary;
    }
}
