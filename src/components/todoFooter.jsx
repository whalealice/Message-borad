import React,{Component} from 'react'
import $ from "jquery";
import ReactDOM from "react-dom";

export default class TodoFooter extends Component{
	render(){
		return(
			<div className="todo-footer">
	            <label>
	                <input type="checkbox" />全选
	            </label>
	            <span><span className="text-success">已完成</span> / 全部</span>
	            <button className="btn btn-danger">清除已完成任务</button>
            </div>
		)
	}
}