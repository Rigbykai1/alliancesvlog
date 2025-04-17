import React from 'react'

const SpecialDotsContent = ({ dot }) => {
    return (
        <>
            <h3 className="font-bold text-lg">{dot.label}</h3>
            <p className="py-2">{dot.lat}</p>
        </>
    )
}

export default SpecialDotsContent