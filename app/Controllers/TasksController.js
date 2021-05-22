import { tasksService } from "../Services/TasksService.js";
export default class TasksController{
  constructor(){
  }

  addTask(event, list){
    event.preventDefault()
    let form = event.target
    let formData = {
      name: form.name.value,
      list: list
    }
    tasksService.addTask(formData)
  }
}
