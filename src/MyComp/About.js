// eslint-disable-next-line
import React from "react";

export const About= () =>{
	let set={
		margin: "5% 0 0 10%",
		minHeight: "50vh",
		width: "80%"
	}
	return(
		<div style={set}>
			<h1 class="py-2">About TodoList</h1>
			<ul>
				<li><h4>This is for web based viewing only</h4></li>
				<li><h4>Not very much mobile friendly</h4></li>
				<li><h4>Temporary save of list is here (after refresh or reopen list will be cleared)</h4></li>
			</ul>
		</div>
	)
}
