import { AppBar, Box, Toolbar, Container, Grid, Button, Typography } from "@mui/material";
import React from "react";

export const NavBar: React.FC <{}> = () => {
    return (
        <Box sx={{
            flexGrow:1,
        }}>
            <AppBar sx={{
                position:'fixed',
                background: 'rgba(0, 0, 0, 0.1)',
            }}
            >
                <Toolbar>
                    <Container>
                        <Grid 
                            container
                            direction='row'
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Grid item>
                                <Typography fontSize={24}>Segundo Paladines</Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined"
                                onClick={()=>{
                                    window.location.href = 'https://SegundoPaladines.github.io';
                                }}>
                                    Presentation Page</Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
}