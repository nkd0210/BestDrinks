import React from 'react'
import { useRouteError } from 'react-router';

function SinglePageError() {
    const error = useRouteError();
    console.log(error)

    return (
        <h2>
            There was an eror...
        </h2>
    )
}

export default SinglePageError
