import React from "react";
import APICard from "./APICard"
import { apiCatalogItems } from "../../../assets/Temporary/APICatalogueTempData";
import { Row } from "react-bootstrap";

export default function APICatalogCardBody() {
	return (
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
	);
}
