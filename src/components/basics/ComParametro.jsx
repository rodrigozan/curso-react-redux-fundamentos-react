import React from "react";

export default function ComParametro(params) {
    const sub = params.subtitle
    return (
        <div>
            <h2>{params.title}</h2>
            <h3>{sub}</h3>
        </div>
    )
}