import { Box } from "@mui/material";
import React from "react";
import { Button, Col } from "react-bootstrap";

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
			<Box className="country-dropdown">
				<ul>
					<a>
						<li>
							<img src="https://developer.fedex.com/api/content/dam/fedex-com/irc/leftnav/globe.png" />
						</li>
						<li className="country-val">United States</li>
					</a>
					<li className="footer-country-locale">
						<Box sx={{ float: "none" }} className="dropdown fxg-bootstrap-dropdown">
							<button
								className="dropdown-toggle"
								type="button"
								id="dropdownMenu"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="true"
								aria-label="Please select language from below drop down"
							>
								English
								<span className="fxg-icon"></span>
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenu" id="lang-selctor">
								<li>
									<a href="https://developer.fedex.com/api/en-us/catalog.html" target="_self">
										English
									</a>
								</li>

								<li>
									<a href="https://developer.fedex.com/api/es-us/catalog.html" target="_self">
										Spanish
									</a>
								</li>
							</ul>
						</Box>
					</li>
				</ul>
			</Box>
		</Box>
	);
}
