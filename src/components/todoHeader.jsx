import React,{Component} from 'react'
import $ from "jquery";
import ReactDOM from "react-dom";

export default class TodoHeader extends Component{
	render(){
		return(
			<div className="todo-header" >
				<input type="text" placeholder="请输入内容,按回车确认"/>
			</div>
		)
	}
}