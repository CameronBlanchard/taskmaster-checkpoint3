
import { generateId } from "../Utils/generateId.js"


export default class List{
  constructor({id, name}){
    this.id = id || generateId()
    this.name = name
  }
}