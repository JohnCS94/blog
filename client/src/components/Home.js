import React, { useState, useEffect } from 'react';

function Home() {
    const [text, setText] = useState('');

    useEffect(async () => {
        await fetch("/api/home", {
            method: "GET"
        })
            .then(response => response.json())
            .then(response => {
                setText(response);
            })
    });

    return (
        <div class="content-body">
            <h1>Home</h1>
            <p>{text}</p>
        </div>
    )
}

export default Home;