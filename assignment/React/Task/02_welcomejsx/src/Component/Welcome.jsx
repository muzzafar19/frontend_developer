import React from 'react'

export default function Welcome() {
    const topic = 'JSX';
    const description = `${topic} allows us to write HTML elements in JavaScript and place them in the DOM .`;
    return (
        <div>
            <h1>Welcome to {topic}</h1>
            <p>{description}</p>
        </div>
    )
}
