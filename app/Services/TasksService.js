import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";


class TasksService{
  addTask(formData){
    console.log("task at service", formData)
    ProxyState.tasks = [...ProxyState.tasks, new Task(formData)] 
    console.log('All tasks', ProxyState.tasks)
  }
}


export const tasksService = new TasksService()