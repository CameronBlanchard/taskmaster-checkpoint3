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
    <form onsubmit="app.tasksController.addTask(event, '${list.id}')">
                <div class="col- lg-3">
                    <div class="card m-1" style="width: 16rem;">
                        <div id="tasks" class="card-header bg-warning text-center">${list.name}</div>
                      
                        <div class="form-group">
                            
                            <input class="form-control" placeholder="Enter task" type="text" id="task" required />
                        </div>
                      
                        <button type="submit">Create</button>
                    </div>
                </div>
            </form>
    `
    

      tasks.forEach(task =>{
        let template1 = ''
        console.log(task);
        let taskElem = document.getElementById('tasks')
         template1 += `
         
        `
        console.log('tasks from loop',tasks);
        console.log('template1', template1);
        taskElem.innerHTML= template1
      })
             
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


