import { useTheme } from "@emotion/react";
import { Box, Paper, Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import React from "react";
import SideBarBox from "./SideBarComponents/SideBarBox";

export default function SideBar() {
	const theme = useTheme();
	return (
		<Paper className="sideBar sideBar-Content" sx={{ backgroundColor: theme.palette.primary.main }}>
            <Box className="sideBarContent sidebarNav">
                <SideBarBox content={{ textVariant:"h3", buttonLink: null, textContent: "Title Here" }} />
                <SideBarBox content={{ textVariant:"p", buttonLink: null, textContent: "Developer Portal" }} />
                <SideBarBox top= "40px"content={{ textVariant: "p", buttonLink: "/SignIn", textContent: "Sign Up or Log In" }} />
            </Box>
				<hr className="sideBarHR" />
            <Box className="sideBarContent sidebarNav ">
                <SideBarBox content={{ textVariant:"h5", buttonLink: null, textContent: "Menu", fontWeight: "bold" }} />
                <SideBarBox content={{ textVariant:"p", buttonLink: "/Getting-Started", textContent: "Getting Started" }} />
                <SideBarBox content={{ textVariant:"p", buttonLink: "/API-Catalog", textContent: "API Catalog" }} />
                <SideBarBox content={{ textVariant:"p", buttonLink: "/Guides", textContent: "Guides" }} />
                <SideBarBox content={{ textVariant:"p", buttonLink: "/Announcments", textContent: "Announcements" }} />
                <SideBarBox content={{ textVariant:"p", buttonLink: "/API-Certification", textContent: "API Certification" }} />
                <SideBarBox content={{ textVariant:"p", buttonLink: "/Support", textContent: "Support" }} />
                </Box>
				<hr className="sideBarHR" />
            <Box className="sideBarContent sidebarNav">
                <SideBarBox bottom="15px" content={{ textVariant: "p", buttonLink: null, textContent: "Other Products" }} />
                <ul className="listStyleNoDot">
                    <li><SideBarBox content={{ textVariant:"p", buttonLink: "/Guides", textContent: "FedEX Web Services®", fontWeight: "bold" }} /></li>
                    <li><SideBarBox content={{ textVariant:"p", buttonLink: "/Guides", textContent: "FedEX Ship Manager® Server", fontWeight: "bold" }} /></li>
                </ul>
			</Box>
		</Paper>
	);
}
