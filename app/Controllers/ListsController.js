import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";


function _draw() {
  console.log('drawing your list')
  let lists = ProxyState.lists
  let listElem = document.getElementById("lists")
  let template = ''

  lists.forEach(list => {
    let tasks = ProxyState.tasks.filter(task => task.listId == list.id)
    template +=`
    <form id="lists onsubmit="app.tasksController.addTask(event, '${list.id}')"">
            <div class="col- lg-3">
                <div class="card m-1" style="width: 16rem;">
                    <div class="card-header bg-warning text-center">${list.name}</div>
                    <p>task Name</p>
                    <input type="text" placeholder="Add Task...." minlength="3" maxlength="50">
                    <button>Create</button>
                </div>
            </div>
        </form>
    `
  

  })     
  listElem.innerHTML = template
}


export default class ListsController {

  constructor() {

    //console.log('controller linked')
    ProxyState.on('lists', _draw)
    ProxyState.on('tasks', _draw)
    
  }
  addList(event){
    event.preventDefault()
    console.log(event)
    let form = event.target
    let formData = {
      name: form.name.value
    }
    listsService.addList(formData)
    form.reset()
  }

}


