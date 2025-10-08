import type { TaskStateModel } from "../../modelos/TaskStateModel";

export const initialTaskState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    activetask: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        shortBreaktime: 5,
        longBreakTime: 15
    }
}