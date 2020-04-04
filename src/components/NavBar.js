import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<Navbar
			collapseOnSelect
			className="top-nav"
			expand="lg"
			bg="dark"
			variant="dark"
		>
			<Container>
				<Link to="/">
					<Navbar.Brand>MP</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Link className="nav-link" to="/">
							Home
						</Link>
						<Link className="nav-link" to="/about">
							About
						</Link>
						<Link className="nav-link" to="/blog">
							Blog
						</Link>
						<Link className="nav-link" to="/works">
							Works
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
