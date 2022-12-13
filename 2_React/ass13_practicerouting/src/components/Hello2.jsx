import React from 'react'

const Hello2 = ({str,tc,bc}) => {
    return (
        <div>
            <h1 style={{backgroundColor:bc,color:tc,}}>The World is {str}</h1>
        </div>
    )
}

export default Hello2