import { useState } from 'react'
import './App.css'
import { Counter } from './component/Counter';
import { Todo } from './component/Todo';
import {   TodosInput } from './component/TodoInput';

function App() {

 
  return (
    <div className="App">
    <Counter/>
    <hr/>
   
    
    <br/>
    <Todo/>
    </div>
  )
}
export default App;





 

