import React,{Component} from 'react'
import $ from "jquery";
import ReactDOM from "react-dom";
import TodoHeader from "./components/todoHeader.jsx";
import TodoMain from "./components/todoMain.jsx";
import TodoFooter from "./components/todoFooter.jsx";
import "./components/todo.css";

export default class App extends Component{ //定义组件
	constructor(props){ //定义App类的构造函数
		super(props);//调用父类的构造函数
	}
	render(){
		return(
			<div className="todo-wrap">
                <TodoHeader/>
                <TodoMain/>
                <TodoFooter/>
            </div>
		)
	}
}
ReactDOM.render(<App/>,document.getElementById('app'));