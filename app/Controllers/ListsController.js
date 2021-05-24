import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState } from '../Utils/LocalStorage.js'



function _draw() {
  console.log('drawing your list')
  let lists = ProxyState.lists
  let color = document.getElementById("color")
  let listElem = document.getElementById("lists")
  console.log(color);
  let template = ''

  lists.forEach(list => {
    let tasks = ProxyState.tasks.filter(task => task.listId == list.id)
    let taskTotal = 0
    template += `
    <form  onsubmit="app.tasksController.addTask(event, '${list.id}')"
                <div class="col- lg-3 m-2 ">
                    <div class="card m-3" style="width: 16rem;">
                        <div id="tasks" class="card-title row   text-center" style="background-color: ${color};"><div class="col-12">${list.name}<button onclick="app.listsController.deleteList()"></button> </div>
                        </div> 
                        <div class="row"><div class="col-12">Tasks: ${taskTotal}</div>
                        </div>
                        <div id ="tasks" class="form-group">`

    tasks.forEach(task => {
      console.log('for each', task);
      taskTotal++
      template += `                           
                            <div><p>${task.name}</p></div>`
    })

    template += `   
                            <input name="name" class="form-control" minlength="3" maxlength="50" placeholder="Enter task" type="text" id="task" required />
                        </div>
                      
                        <button type="submit">Create</button>
                    </div>
                </div>
            </form>`



  })
  listElem.innerHTML = template
}


export default class ListsController {

  constructor() {
    console.log('controller linked')
    ProxyState.on('lists', _draw)
    ProxyState.on('tasks', _draw)
    loadState()

  }
  addList(event) {
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



 
