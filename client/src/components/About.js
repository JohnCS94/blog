import React, { useState, useEffect } from 'react';

function About() {
    const [text, setText] = useState('');

    useEffect(async () => {
        await fetch("/api/about", {
            method: "GET"
        })
            .then(response => response.json())
            .then(response => {
                setText(response);
            })
    });

    return (
        <div class="content-body">
            <h1>About</h1>
            <p>{text}</p>
        </div>
    )
}

export default About;