import React from "react";
import { Box, Typography } from "@mui/material";

export default function Title(props) {
    return (
        <Box className="section">
            <Typography variant="h1" className="titleFont titleTextCenter titleMargins">{ props.titleText}</Typography>
        </Box>
    )
}