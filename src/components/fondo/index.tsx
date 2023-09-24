import React from "react";

type fondoProps = {
    img:string;
    alto:string;
    ancho:string;
}

export const Fondo: React.FC <fondoProps> = ({img, alto, ancho}) =>{
    return (
        <div
            style={{
                position:"absolute",
                top:0,
                left: 0,
                background: `url(${img})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:"cover",
                width: ancho,
                height: alto,
            }}
        >
        </div>
    )
}