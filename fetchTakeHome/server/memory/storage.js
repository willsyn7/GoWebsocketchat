
import { v4 as uuidv4 } from 'uuid';

const storage = {};

const add = (reciept) =>{
    const id = uuidv4();
    storage[id]= reciept;
    return id; 
}
const get = (id) =>{
    return storage[id]
    
}
const getAll = () =>{
    return Object.values(storage)
    
}

export  { add, get, getAll };
