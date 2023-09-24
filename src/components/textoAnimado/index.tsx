import React, { useState, useEffect } from 'react';

type Text={
    text:string;
    time?:number| null;
    variant?:string | null;
}

export const AnimatedText:React.FC<Text> = ({text, variant, time}) =>{
    const [texto, setTexto] = useState('');
    const [charActual, setCharActual] = useState(0);

    const tiempo = time || 50;

    useEffect(() => {
        const intervalo2 = setInterval(()=>{
            if(charActual < text.length){
                setTexto((pvr) => pvr += text[charActual]);
                setCharActual((pvr) => pvr += 1);
            }else{
                clearInterval(intervalo2);
            }
        }, tiempo);
        return () => clearInterval(intervalo2);
    }, [texto, charActual]);

    switch(variant){
        case "h1":
            return ( <h1>{texto}</h1> );
        case "h2":
            return ( <h1>{texto}</h1> );
        case "h3":
            return ( <h1>{texto}</h1> );
        case "h4":
            return ( <h1>{texto}</h1> );
        default:
            return ( <p>{texto}</p> );
    }
}