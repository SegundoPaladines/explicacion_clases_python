import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type codeProps = {
    codigo:string;
    lenguaje:string;
}

export const Code:React.FC<codeProps> = ({codigo, lenguaje}) =>{
    
    const [code, setCode] = useState('');
    const [caracaterActual, setCaracterActual] = useState(0);

    useEffect(()=>{
        const intervalo = setInterval(()=>{
            if(caracaterActual < codigo.length){
                setCode((prev)=> prev += codigo[caracaterActual]);
                setCaracterActual((prev) => prev += 1);
            }else{
                clearInterval(intervalo);
            }
        },20);

        return () => clearInterval(intervalo);
    }, [code, caracaterActual]);
    
    return (
        <SyntaxHighlighter language={lenguaje} style={atomDark}>
              {code}
        </SyntaxHighlighter>
    )
}