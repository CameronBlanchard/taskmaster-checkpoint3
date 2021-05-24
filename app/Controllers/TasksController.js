import { tasksService } from "../Services/TasksService.js";
export default class TasksController{
  constructor(){
  }

  addTask(event, listId){
    event.preventDefault()
    let form = event.target
    let nextTask = {
      name: form.name.value,
      listId: listId
      }
      tasksService.addTask(nextTask)
      console.log('add task', nextTask);
      form.reset()
  }
}
