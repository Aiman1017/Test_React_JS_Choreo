import { Box } from "@mui/material";
import React from "react";
import { Col } from "react-bootstrap";

export default function FooterRight() {
	return (
		<Box>
			<Box className="list-links">
				<ul>
					<li>
						<a
							href="https://www.fedex.com/en-us/integration.html"
							aria-label="Intergration Solutions"
						>
							Intergration Solutions
						</a>
					</li>
					<li>
						<a href="https://www.fedex.com/en-us/integration/support.html" aria-label="Support">
							Support
						</a>
					</li>
					<li>
						<a href="https://www.fedex.com/en-us/home.html" aria-label="FedEx.com">
							FedEx.com
						</a>
					</li>
					<li>
						<a href="https://www.fedex.com/en-us/terms-of-use.html" aria-label="Terms Of Use">
							Terms of Use
						</a>
					</li>
					<li>
						<a href="https://www.fedex.com/en-us/trust-center.html" aria-label="Security & Privacy">
							Security & Privacy
						</a>
					</li>
				</ul>
			</Box>
			<Box>hhhh</Box>
		</Box>
	);
}
