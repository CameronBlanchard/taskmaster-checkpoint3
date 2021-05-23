import { generateId } from "../Utils/generateId.js"


export default class Task{
  constructor({id, listId, name, checked}){
    this.id = id || generateId()
    this.listId =listId
    this.name = name
    this.checked = checked

  }
}