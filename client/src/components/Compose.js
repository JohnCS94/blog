import React, { useState } from 'react';

const Compose = () => {
    const [titleText, setTitleText] = useState();
    const [bodyText, setBodyText] = useState();

    const handleTitleText = (e) => {
        const newValue = e.target.value;
        setTitleText(newValue);
    }

    const handleBodyText = (e) => {
        const newValue = e.target.value;
        setBodyText(newValue);
    }

    const post = async () => {
        await fetch("/api/compose", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                post: {
                    title: titleText,
                    body: bodyText
                }
            })
        })
    }

    return (
        <div class="content-body">
            <h1>Compose</h1>
            <input
                type="text"
                value={titleText}
                onChange={handleTitleText} />
            <textarea
                type="text"
                value={bodyText}
                onChange={handleBodyText} />
            <button
                onClick={post}>
                Publish
            </button>
        </div>
    )
}

export default Compose;