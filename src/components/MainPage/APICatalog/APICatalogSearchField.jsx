import { Box } from "@mui/material";
import React from "react";

export default function APICatalogSearchField() {
	return (
		<Box display={"flex"} className="inputGroup">
			<Box id="search-input">
				<img
					src="https://developer.fedex.com/api/content/dam/fedex-com/irc/common/search.png"
					alt="Search icon"
				/>
				<input id="searchBox" className="searchBar" type="text" placeholder="Search APIs..." />
				<Box className="search-filters">
					<span className="search-filter-title">Filters :</span>
					<ul>
						<li>API</li>
						<li>Webhook</li>
					</ul>
				</Box>
			</Box>
		</Box>
	);
}
