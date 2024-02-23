import { Box } from "@mui/material";
import React from "react";
import Title from "../components/MainPage/Title";
import APICatalogCardBody from "../components/MainPage/APICatalog/APICatalogCardBody";
import APICatalogSearchField from "../components/MainPage/APICatalog/APICatalogSearchField";

export default function APICatalogue() {
	return (
		<Box className="body-content">
			<Box className="fxg-wrapper">
				<Title titleText="API Catalog" />
				<APICatalogSearchField/>
				<Box className="titleToBodySeperator"></Box>
				<APICatalogCardBody />
			</Box>
		</Box>
	);
}
