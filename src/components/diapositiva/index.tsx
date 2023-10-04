import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Code } from '../code';
import './index.css';

type diapo ={
    titulo?:string | null;
    texto?:string | null;
    codigo?:string| null;
    img?:string | null;
}

export const Diapositiva:React.FC <diapo> = ({titulo, texto, codigo, img}) =>{
    const [code, setCode] = useState<JSX.Element>(<></>);
    const [explicacion, setExplicacion] = useState(false);

    const colocarCodigo = () =>{
        if(codigo !== null && codigo !== undefined){
            const tmp =(
                <Code 
                    codigo={codigo}
                    lenguaje='python'
                />
            );
            setCode((prev)=> prev = tmp);
            setExplicacion((prev)=> prev = true);
        }
    }

    const quitarCodigo = () => {
        setCode((prev)=> prev = <></>);
        setExplicacion((prev)=> prev = false);
    }

    return (
        <div
            className='ctn'
        >
            <Grid >
                <Grid 
                    item 
                    xs={10}
                >
                    <Card>
                        { img !== undefined && img!==null && <CardMedia
                                                    component="img"
                                                    width="100%"
                                                    height="auto"
                                                    image={img}
                                                    alt="Img"
                                                />
                        }
                        <CardContent
                            className='contenedor'
                        >
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
                            <div>
                                {code}
                            </div>
                            {codigo !== undefined  &&<Box>
                                                        <div
                                                            className={explicacion ? 'desaparece':'normal'}
                                                        >
                                                            <Button
                                                                onClick={colocarCodigo}
                                                            >
                                                                Ver Ejemplo
                                                            </Button>
                                                        </div>
                                                        <div
                                                            className={explicacion ? 'normal':'desaparece'}
                                                        >
                                                            <Button 
                                                                onClick={quitarCodigo}
                                                            >
                                                                Ocultar Ejemplo
                                                            </Button>
                                                        </div>
                                                    </Box>
                            }     
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}