import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
    tasks: TaskModel[];
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activetask: TaskModel | null;
    currentCycle: number;
    config: {
        workTime: number;
        shortBreaktime: number;
        longBreakTime: number;
    }
}