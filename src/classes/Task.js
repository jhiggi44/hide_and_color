class Task {
    constructor(target, color) {
        this.target = target;
        this.color = color;
        this.isCompleted = false;

    }
    markComplete() {
        this.isCompleted = true;
    }
    getTaskMsg(pattern) {
        return `Color the ${pattern}'s ${this.target} ${this.color}.`;
    }
    isCompleted() {
        return this.isCompleted;
    }
}

export default Task;