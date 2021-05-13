import React from 'react'

function LoadingComponent(){
    return (
        <div className="col-12 text-center text-primary">
            <span className="fa fa-lg fa-spinner fa-pulse fa-3x fa-fw"></span>
            <p>Loading . . .</p>
        </div>
    )
}

export default LoadingComponent