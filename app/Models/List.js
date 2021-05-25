
import { generateId } from "../Utils/generateId.js"


export default class List{
  constructor({id, name, color}){
    this.id = id || generateId()
    this.name = name
    this.color = color
  }
}