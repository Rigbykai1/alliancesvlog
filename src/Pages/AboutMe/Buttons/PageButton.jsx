import React from 'react'

const PageButton = ({ onClick, disabled, children }) => (
    <button
        className="flex items-center px-4 border border-green-300 bg-green-300/20 opacity-70 text-green-300 rounded-lg
                hover:cursor-pointer hover:opacity-100
                disabled:opacity-50 disabled:bg-stone-700 disabled:border-transparent disabled:cursor-default sm:hidden"
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>
);

export default PageButton