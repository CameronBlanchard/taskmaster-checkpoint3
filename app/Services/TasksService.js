import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";


class TasksService{
  addTask(nextTask){
    console.log("task at service", nextTask)
    ProxyState.tasks = [...ProxyState.tasks, new Task(nextTask)] 
    console.log('All tasks', ProxyState.tasks)
  }
  deleteTask(id){
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != t.id)
  }
}


export const tasksService = new TasksService()