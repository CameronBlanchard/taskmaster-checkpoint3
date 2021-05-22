import { generateId } from "../Utils/generateId.js"


export default class Task{
  constructor(id, listid, name, checked){
    this.id = id || generateId()
    this.listid = listid
    this.name = name
    this.checked = checked

  }
}