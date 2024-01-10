import React from 'react'

const Error = ({ error }) => {
    return (
        <>
            <div className='error-page'>
                <h1>ERROR!!!</h1>
                <div>{error?.message}</div>
            </div>
        </>
    )
}

export default Error