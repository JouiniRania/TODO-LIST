import "bootstrap/dist/css/bootstrap.min.css"; 
import React from "react";
import './style.css' 
class Modal extends React.Component{
  
  state = { todo : "", todoList: []}

  deleteTodo(index){
    const array = this.state.todoList;
    array.splice(index,1);
    this.setState({
      todoList : array 
    });
  }
 
  render(){
    return (
      <div className="App">
        <header className="todolist" style={{ margin: 20 }}>
        <div>
        <input className="col-2" placeholder="add your todo" type="text"
          onChange={(event)=>{this.setState({todo:event.target.value})}}></input>
          <button class="btn btn-outline-secondary" style={{ margin: 100}} onClick = {()=>{
            this.setState({todoList : [...this.state.todoList,...[this.state.todo]],todo : ""})
          }}>add Todo
          </button>
        </div>  

          {this.state.todoList.map((todo,index)=>
              <button key={index} class="btn btn-outline-secondary" style={{ margin: 20}} onClick={this.deleteTodo.bind(this,index)}>
              <h2>{todo}</h2> 
                Delete Todo
              </button>
            )}
        </header>
        
      </div>
    );
  }
}
export default Modal;