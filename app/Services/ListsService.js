
import{ ProxyState } from "../AppState.js"
import List from"../Models/List.js"


class ListsService{
    constructor(){
    console.log('service connect')
    
  }

  addList(formData){
    ProxyState.lists = [...ProxyState.lists, new List(formData)]
    console.log("this is your list", ProxyState.lists)
  }
}



export const listsService = new ListsService()