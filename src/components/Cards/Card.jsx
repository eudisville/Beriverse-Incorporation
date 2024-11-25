import React from 'react'

const Card = ({ background, children }) => {
    const cardStyle = {
            background: `url(${background})`,
            color: 'white',
            padding: '20px',
            height: '450px',
            width:'1350px',
            margin: '10px',
            borderRadius: '20px',
    }

    return (
        <div>
            <div style={cardStyle}>
                {children}
            </div>
        </div>
    )
}

export default Card;