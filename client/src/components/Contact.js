import React, { useState, useEffect } from 'react';

function Contact() {
    const [text, setText] = useState('');

    useEffect(async () => {
        await fetch("/api/contact", {
            method: "GET"
        })
            .then(response => response.json())
            .then(response => {
                setText(response);
            })
    });

    return (
        <div class="content-body">
            <h1>Contact</h1>
            <p>{text}</p>
        </div>
    )
}

export default Contact;