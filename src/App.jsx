import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Body from "./components/MainPage/Body";
import Footer from "./components/MainPage/Footer";
import NavBar from "./components/MainPage/NavBar";
import SideBar from "./components/MainPage/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@emotion/react";
import { fedExTheme } from "./assets/theme";

function App() {
	return (
		<ThemeProvider theme={fedExTheme}>
			<Container className="mainBodyContainer" fluid>
				<Row >
					<Col lg={2}>
						<SideBar />
					</Col>
					<Col lg={12} >
						<Body />
					</Col>
				</Row>
			</Container>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
