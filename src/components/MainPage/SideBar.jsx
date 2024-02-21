import { useTheme } from "@emotion/react"
import { Paper, Typography } from "@mui/material"
import { Button } from "react-bootstrap";
import React from "react"

export default function SideBar() {
    const theme = useTheme();
    return (
        <Paper className="sideBar sideBar-Content" sx={{ backgroundColor:theme.palette.primary.main}}>
            <Typography className="sideBarContent" variant="h3" sx={{color:theme.palette.text.primary}}>Title Here</Typography>
            <Typography className="sideBarContent" variant="p">Developer Portal</Typography>
            <Button className="sideBarContent" href="/SignIn"><Typography variant="p">Sign Up or Log In</Typography></Button>
            <div  className="sideBarContent">
                <hr />
            </div >
            <Typography className="sideBarContent" sx={{fontWeight: 'bold'}} variant="p">Menu</Typography>
            <Button variant="link" href="/Getting-Started"><Typography variant="p">Getting Started</Typography></Button>
            <Button sx={{display: "block"}} href="/API-Catalog"><Typography variant="p">API Catalog</Typography></Button>
            <Button href="/Guides"><Typography variant="p">Guides</Typography></Button>
            <Button href="/Announcments"><Typography variant="p">Announcements</Typography></Button>
            <Button href="/API-Certification"><Typography variant="p">API Certification</Typography></Button>
            <Button href="/Support"><Typography variant="p">Support</Typography></Button>
            <hr  className="sideBarHR"/>
            <Typography className="sideBarContent" variant="p">Other Products</Typography>
            <Button href="/Guides"><Typography variant="p">FedEX Web Services®</Typography></Button>
            <Button href="/Guides"><Typography variant="p">FedEX Ship Manager® Server</Typography></Button>
        </Paper>
    )
}