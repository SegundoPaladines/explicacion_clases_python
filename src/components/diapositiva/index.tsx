import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

type diapo ={
    titulo?:string | null;
    texto?:string | null;
    codigo?:string | null;
    img?:string | null;
}

export const Diapositiva:React.FC <diapo> = ({titulo, texto, codigo, img}) =>{
    return (
        <Grid>
            <Grid item xs={10}>
                <Card>
                    <CardActionArea>
                        { img !== undefined && img!==null && <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image={img}
                                                    alt="green iguana"
                                                />
                        }
                        <CardContent>
                            { titulo !== undefined && <Typography 
                                                            gutterBottom 
                                                            variant="h5" 
                                                            component="div"
                                                        >
                                                            {titulo}
                                                       </Typography>

                            }
                            { texto !== undefined && <Typography 
                                                        variant="body2" 
                                                        color="text.secondary"
                                                    >
                                                        {texto}
                                                    </Typography>
                                
                            }
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    );
}