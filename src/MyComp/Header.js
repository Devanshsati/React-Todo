// eslint-disable-next-line
import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export default function Header(props){
	let side={
		margin: "0 0 0 75%"
	}
	let head={
		color:"white",
		background:"black",
		margin: "0 2%",
		padding: "0 1%",
		border: "2px dotted white"
	}
	return(
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link className="navbar-brand" to="/" style={head}>{props.title}</Link>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="row navbar-nav mr-auto" style={side}>
						<li className="col nav-item active">
							<Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
						</li>
						<li className="col nav-item">
							<Link className="nav-link" to="/Todo">Add</Link>
						</li>
						<li className="col nav-item">
							<Link className="nav-link" to="/about">About</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}
Header.defaultProps={
	title: "YourTitle here"
}

Header.propTypes = {
  title: PropTypes.string
};
