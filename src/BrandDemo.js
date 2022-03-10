import React from 'react';
import {LightLogo} from "./Brand";
import MuiContainer from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import {Box} from "@mui/material";
import Button from "@mui/material/Button";

export default function BrandDemo() {
    return (
        <MuiContainer sx={{p: 2}} component="main" maxWidth="md">
            <Box maxWidth={256} sx={{mb: "2rem", mt: "1rem"}}>
                <LightLogo/>
            </Box>

            <Paper sx={{p: 4}}>
                <h1>Hello, Brand!</h1>
                <h2>Hello, Brand!</h2>
                <h3>Hello, Brand!</h3>
                <h4>Hello, Brand!</h4>
                <h5>Hello, Brand!</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minus, necessitatibus! Aliquam,
                    cum magnam nemo nobis quos ratione. Assumenda beatae dolores ipsam laboriosam optio quia tempora, ut
                    voluptate voluptates. Reprehenderit?</p>

                <Paper elevation={16} sx={{p: 4}}>
                    <h2>Button Elements</h2>
                    <Button variant={"outlined"}>Hi</Button>

                    <h2><Button>Article Link</Button></h2>
                </Paper>

            </Paper>
        </MuiContainer>

    )
}