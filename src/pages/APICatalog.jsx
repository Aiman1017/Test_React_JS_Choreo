import { Box, Paper } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import { Button } from "react-bootstrap";

export default function APICatalogue() {
	const theme = useTheme();
	return (
        <Box className="body-content">
            <div className="fxg-wrapper">
                <div className="">
				    <h1 className="titleFont titleMargins">API Catalog</h1>
                </div>
			<div className="inputGroup">
				<p>Filters</p>
				<Button>API</Button>
				<Button>Webhook</Button>
                </div>
            </div>
		</Box>
	);
}
