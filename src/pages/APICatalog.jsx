import { Box } from "@mui/material";
import React from "react";
import { Button, Row } from "react-bootstrap";
import APICard from "../components/MainPage/APICatalog/APICard";

export default function APICatalogue() {
	const apiCatalogItems = [
		{
			imgLink:
				"https://developer.fedex.com/api/content/dam/fedex-com/irc/apis/authorization_gray_lg.svg",
			apiCardTitle: "API Authorization",
			apiCardContent:
				"Leverage the FedEx OAuth 2.0 token authentication method to authorize the application and authenticate API requests.",
			overViewLink: "NULL",
			docsLink: "docsLink",
		},
		{
			imgLink:
				"https://developer.fedex.com/api/content/dam/fedex-com/irc/apis/authorization_gray_lg.svg",
			apiCardTitle: "Address Validation API",
			apiCardContent: "Validate recipient addresses.",
			overViewLink: "NULL",
			docsLink: "docsLink",
		},
		{
			imgLink:
				"https://developer.fedex.com/api/content/dam/fedex-com/irc/apis/authorization_gray_lg.svg",
			apiCardTitle: "FedEx Locations Search API",
			apiCardContent:
				"Find the addresses of the nearest FedEx package pickup and dropoff locations.",
			overViewLink: "NULL",
			docsLink: "docsLink",
		},
		{
			imgLink: "NULL",
			apiCardTitle: "Freight LTL API",
			apiCardContent:
				"Get rate estimates, process shipments and manage pickups for FedEx Freight® LTL shipments.",
			overViewLink: "NULL",
			docsLink: "docsLink",
		},
		{
			imgLink: "NULL",
			apiCardTitle: "Global Trade API",
			apiCardContent: "Get regulatory documents and advisories for your shipments.",
			overViewLink: "NULL",
			docsLink: "docsLink",
		},
		{
			imgLink: "NULL",
			apiCardTitle: "Ground End of Day Close API",
			apiCardContent:
				"Reconcile shipping information for your FedEx Ground® shipments and print various reports.",
			overViewLink: "NULL",
			docsLink: "docsLink",
		},
		{
			imgLink: "NULL",
			apiCardTitle: "Open Ship API",
			apiCardContent:
				"Create and enter information for a shipment as it is received throughout the day.",
			overViewLink: "NULL",
			docsLink: "docsLink",
		},
	];

	return (
		<Box className="body-content">
			<Box className="fxg-wrapper">
				<Box className="section">
					<h1 className="titleFont titleTextCenter titleMargins">API Catalog</h1>
				</Box>
				<Box display={"flex"} className="inputGroup">
					<input type="text" placeholder="Search APIs..." />
					<p sx={{ px: "10px" }}>Filters</p>
					<Button sx={{ margin: "10px" }}>API</Button>
					<Button>Webhook</Button>
				</Box>
				<Box className="titleToBodySeperator"></Box>
				<section>
					<Row key="CardRow ">
						{apiCatalogItems.map((items, i) => {
							return (
								<APICard
									key={`APICardItems${i}`}
									imgLink={items.imgLink}
									docsLink={items.docsLink}
									overViewLink={items.overViewLink}
									apiCardContent={items.apiCardContent}
									apiCardTitle={items.apiCardTitle}
								/>
							);
						})}
					</Row>
				</section>
			</Box>
		</Box>
	);
}
