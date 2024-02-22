import React from "react";
import { Box } from "@mui/material";
import SideBarContent from "./SideBarContent";

export default function SideBarBox(props){
    return (
        <Box sx={{pt: props.top ? props.top : "5px", pb: props.bottom ? props.bottom : "5px"}}>
            <SideBarContent content={props.content}/>
        </Box>
    )
}