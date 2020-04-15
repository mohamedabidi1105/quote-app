import React from 'react'

const QuoteCard = ({character}) => {
    return (
        <div>
            <h1>Simpson's Quote</h1>
            <img src={character.image}
            alt={character.character}/>
            <p><strong>{character.character}</strong></p>
            <p>"{character.quote}"</p>
        </div>
    )
}

export default QuoteCard