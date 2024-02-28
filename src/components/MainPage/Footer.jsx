import React from "react";
import FooterLeft from "./Footer/FooterLeft";
import FooterRight from "./Footer/FooterRight";
import { Container, Col, Row } from "react-bootstrap";

export default function Footer() {
	return (
		<footer>
			<Container>
				<Row>
					<Col sm={6}>
						<FooterLeft />
					</Col>
					<Col sm={6}>
						<FooterRight />
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
