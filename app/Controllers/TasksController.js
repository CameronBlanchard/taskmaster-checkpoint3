import { tasksService } from "../Services/TasksService.js";
export default class TasksController{
  constructor(){
  }

  addTask(event, list){
    event.preventDefault()
    let form = event.target
    let nextTask = {
      name: form.name.value,
      listId: list.id
      }
      tasksService.addTask(nextTask)
      console.log('add task', nextTask);
      form.reset()
  }
}
