// eslint-disable-next-line
import React, {useState} from "react";

export const AddTodo = (props) => {

	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");

	const submit=(e)=>{
		e.preventDefault();
		if(!title||!desc){
			alert("Title or Discription can't be blank");
		}
		else{
			props.addTodo(title,desc);
			setTitle("");
			setDesc("");
		}
	}
	let set={
		margin: "5% 0 0 10%",
		minHeight: "50vh"
	}
	let wide={
		width: "50%"
	}

	return (
		<div style={set}>
			<h3>Add a Todo</h3>
			<form onSubmit={submit}>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">Todo Title</label>
					<input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" style={wide} aria-describedby="emailHelp"/>
				</div>
				<div className="mb-3">
					<label htmlFor="desc" className="form-label">Todo Discription</label>
					<input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" style={wide}/>
				</div>
				<button type="submit" className="btn btn-primary">Add Todo</button>
			</form>
		</div>
	)
}
