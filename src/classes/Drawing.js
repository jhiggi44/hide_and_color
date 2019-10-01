import Colors from './Colors';
import Task from './Task';

class Drawing {
    constructor(pattern, targets) {
        this.pattern = pattern;
        this.targets = targets;
        this.tasks = [];
        this.completed = [];
        this.colors = new Colors().easy;
    }
    isComplete() {
        return this.tasks.length === 0;
    }
    generateTasks(numOfTasks) {
        for(let i = 0; i < numOfTasks; i++) {
            let randomTarget = this.targets[Math.floor(Math.random()*this.targets.length)];
            let randomColor = this.colors[Math.floor(Math.random()*this.colors.length)].name;
            this.tasks.push(new Task(randomTarget, randomColor));
        }
    }
    getNextTask() {
        return this.isComplete() ? "You've completed all the tasks!" : this.tasks[0].getTaskMsg(this.pattern);
    }
    hasCompletedNextTask(target, color) {
        if (this.isComplete())
            return true;
        if (target === this.tasks[0].target && color === this.tasks[0].color) {
            this.completed.push(this.tasks.shift());
            return true;
        }
        return false;     
    }
}

export default Drawing;