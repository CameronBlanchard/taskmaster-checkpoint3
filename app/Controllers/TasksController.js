import { tasksService } from "../Services/TasksService.js";
export default class TasksController{
  constructor(){
  }

  addTask(event, list){
    event.preventDefault()
    let form = event.target
    let formData = {
      name: form.name.value,
      listId: list.id
      }
      tasksService.addTask(formData)
      console.log('add task', formData);
  }
}
