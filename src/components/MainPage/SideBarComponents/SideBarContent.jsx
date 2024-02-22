import { Typography } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";

export default function SideBarContent(props) {
    let content = props.content;
    
	return content.buttonLink ? (
		<a href={content.buttonLink}>
            <Typography variant={content.textVariant} sx={{ fontWeight: content.fontWeight ? content.fontWeight : "normal" } } >{content.textContent}</Typography>
		</a>
	) : (
		<Typography variant={content.textVariant} sx={{ fontWeight: content.fontWeight ? content.fontWeight : "normal" } } >{content.textContent}</Typography>
	);
}
