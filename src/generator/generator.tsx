import React, {useState} from 'react'
import ReactSlider from 'react-slider'
import './generator.css'


export const Generator = () => {

    const [password, setPassword] = useState('')
    const [chars, setChars] = useState(16)

    const generatePassword = (length: number) => {
        const randomString = require('randomstring')
        setPassword(randomString.generate(length))
    }

    return (
        <div className="wrapper">
            <h2>Password Generator</h2>
            <header>
                <Button text="Regenerate" onClick={() => generatePassword(chars)} />
                <Button text="Copy" onClick={() => {
                    navigator.clipboard.writeText(password)
                    console.log("Copied! ", password)
                }} />
                <span className="copy-note"></span>
            </header>
            <div className="password">{password}</div>
            <section className="settings">
                <div className="characters">
                    <p>Characters</p>
                    <ReactSlider
                        className="slider"
                        thumbClassName="pointer"
                        trackClassName="track"
                        pearling
                        value={chars}
                        min={16}
                        max={32}
                        onChange={(value) => setChars(value)}
                    />
                <p>{chars}</p>
                </div>
        </section>
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
