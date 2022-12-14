import React from 'react'

const Display = ({ response, type }) => {
    return (
        <div style={{ border: "2px black solid", margin: "0 20rem", minHeight: "20rem", textAlign: "center", }}>
            {type === "people" ?
                <div>
                    <h1>{response.name}</h1>
                    <p>{response.height}</p>
                    <p>{response.hair_color}</p>
                    <p>{response.skin_color}</p>
                </div>
                :
                <div>
                    <h1>{response.name}</h1>
                    <p>{response.climate}</p>
                    <p>{response.terrain}</p>
                    <p>{response.surface_water}</p>
                    <p>{response.population}</p>
                </div>
            }
        </div >
    )
}

export default Display