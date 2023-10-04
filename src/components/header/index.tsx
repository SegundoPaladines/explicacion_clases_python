import { Box, Grid, Typography, Divider } from '@mui/material';
import { AnimatedText } from '../textoAnimado';
import { useEffect, useState } from 'react';

type headerProps = {
    title:string;
    descripton:string;
    element?:React.ReactNode | null;
}

export const HeaderComponent: React.FC<headerProps> = ({title, descripton, element}) =>{
    const [textos, setTextos] = useState<JSX.Element[]>([]);
    const [textoActual, setTextoActual] = useState(0);

    const elements = [
        <Grid item >
            <Typography>
                <AnimatedText 
                    text={descripton}
                />
            </Typography>
        </Grid>,
        element !== undefined && <Grid item ></Grid>
    ]

    useEffect(()=>{
        const intervalo = setInterval(()=>{
            if(textoActual < elements.length){
                const tmpel = elements[textoActual] || <></>;
                setTextos((prev) => [...prev, tmpel]);
                setTextoActual((prev) => prev +=1);
            }else{
                clearInterval(intervalo)
            }
        }, 1000);

        return ()=> {
            clearInterval(intervalo);
        }
    });

    return (
        <div
            style={{
                width:"100%",
            }}
        >
            <Box
                sx={{
                    width:"100%",
                    height: "350px"
                }}
            >
                <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        width:"100%",
                        height:"100%"
                    }}
                >
                    <Grid 
                        item
                        xs={10}
                        key="key-prop-container"
                    >
                        <Grid 
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                                width:"100%",
                                height:"100%",
                            }}
                        >
                            <Grid item >
                                <Typography variant="h2">
                                    <AnimatedText 
                                        text={title}
                                        time={150}
                                    />
                                </Typography>
                            </Grid>
                            {textos}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
        </div>
    );
}