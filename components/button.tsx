import React, { MouseEventHandler } from "react"
import { text } from "stream/consumers"

const Button = (props: { text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | 
    React.ReactFragment | React.ReactPortal | null | undefined, onClick: MouseEventHandler<HTMLButtonElement>, className: string }) =>{
    return(
        <button className={props.className} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button