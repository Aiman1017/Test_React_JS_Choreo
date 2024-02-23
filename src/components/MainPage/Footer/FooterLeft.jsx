import { Box } from "@mui/material";
import React from "react";
import { Col } from "react-bootstrap"

export default function FooterLeft() {
	return (
		<Box>
			<ul className="listStyleNoDot">
				<li>
					<p>
						Are you an existing Web Services or FedEx Ship Manager Server Customer? If so, you can
						still access the{" "}
						<a title="DRC" href="https://www.fedex.com/en-us/developer.html">
							Developer Resource Center
						</a>
						.
					</p>
				</li>
				<li>© FedEx Corporate Services Inc. All rights reserved.</li>
			</ul>
		</Box>
	);
}
