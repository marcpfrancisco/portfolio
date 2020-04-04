import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

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
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
						<Nav.Link href="/works">Works</Nav.Link>
						<Nav.Link href="/blog">Blog</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
