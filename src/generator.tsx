import React from 'react'

export const Generator = () => {
    return (
        <div className="wrapper">
            <header>
                <Button text="Regenerate" onClick={() => console.log('regenerate')} />
                <Button text="Copy" onClick={() => console.log('copy')} />
            </header>
        </div>
    )
}

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}
