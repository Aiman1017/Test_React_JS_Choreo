import { Box, Typography, Paper } from "@mui/material";
import { useTheme } from "@emotion/react";
import React from "react";
import { Button, Col } from "react-bootstrap";

export default function APICard(props) {
	const theme = useTheme();
	return (
		<Col md={4} className="fxg-row-eq-height">
            <Paper className="catalogue-Card-Content" sx={{position: "relative"}}>
				<img src={props.imgLink} className="apiCardImg"></img>
				<Typography sx={{ color: theme.palette.text.secondary, fontSize: "25px", lineHeight:"1.2", mt: "20px", mb: "20px" }} variant="h4">
						{props.apiCardTitle}
					</Typography>
				<Box className="apiCardTextHolder" sx={{mb: "10px"}}>
					<Typography sx={{ color: theme.palette.text.secondary }} variant="p">
						{props.apiCardContent}
					</Typography>
				</Box>
				<Box className="overviewDocsBox">
					<ul className="cardOverviewDocsUL">
						<li>
							<a href={props.overViewLink}>OVERVIEW</a>
						</li>
						<li>
							<a href={props.docsLink}>DOCS</a>
						</li>
					</ul>
				</Box>
			</Paper>
		</Col>
	);
}
