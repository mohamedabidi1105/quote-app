import React, { Component } from 'react'

const QuoteCard = ({character}) => {
    return (
        <div>
            <h1>Simpson's Quote</h1>
            <img>{character.image}</img>
            <p>{character.character}</p>
            <p>{character.quote}</p>
        </div>
    )
}

export default QuoteCard