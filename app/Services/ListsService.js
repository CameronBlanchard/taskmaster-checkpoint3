
import{ ProxyState } from "../AppState.js"
import List from"../Models/List.js"
import { saveState }from'../Utils/LocalStorage.js'


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
}



export const listsService = new ListsService()