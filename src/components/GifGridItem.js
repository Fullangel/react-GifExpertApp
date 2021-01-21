import React from 'react'

export const GifGridItem = ({ title, url }) => {

    return (
        <div className="card animate__animate__jello">
            <img src={ url } alt={ title } />
                <p> { title } </p>
        </div>
    )
}
