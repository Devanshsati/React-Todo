// eslint-disable-next-line
import React from "react";
import {Todoitem} from "./Todoitem";

export const Todos= (props) =>{

	let set={
		margin: "5% 0 0 10%",
		minHeight: "50vh"
	}

	return(
		<div style={set}>
			<h2 className="my-3">TODO-LIST</h2>
			{props.todos.length===0?"No TODO to display":
			props.todos.map((todo)=>{
				return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
			})}

		</div>
		)
}
