import react from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import "./style.css";
import CounterComponent from "./components/CounterComponent";

const App = () => {
  return (
    <div className="todo-container">
      <CounterComponent/>
    <Header text="Todo App"/>
    <TodoItem text="code"/>
    <TodoItem text="play"/>
    <TodoItem text="study"/>
    <TodoItem text="sleep again"/>
    <TodoItem text="eat"/>
    <Button/>
    </div>
  )
  
};
export default App;