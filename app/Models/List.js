
import { generateId } from "../Utils/generateId.js"


export default class List{
  constructor(name, id){
    this.id = id || generateId()
    this.name = name
  }
}