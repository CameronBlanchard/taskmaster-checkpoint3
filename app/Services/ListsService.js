
import{ ProxyState } from "../AppState.js"
import List from"../Models/List.js"
import { loadState, saveState }from'../Utils/LocalStorage.js'


class ListsService{
    constructor(){
    console.log('list service connect')
    ProxyState.on('lists', saveState)
    ProxyState.on('tasks', saveState)
    
  }

  addList(formData){
    ProxyState.lists = [...ProxyState.lists, new List(formData)]
    console.log("this is your list", ProxyState.lists)
  }
  deleteList(id){
    console.log('lllll');
    ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
  }
} 

  


export const listsService = new ListsService()