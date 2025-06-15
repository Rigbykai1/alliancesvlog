import React from 'react'
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi'

const CarrouselCard = ({ paginated, page, totalPages, handlePrev, handleNext, activeTab }) => {
    return (
        <>
            <article className='flex flex-row bg-stone-800 rounded-box shadow-md justify-center items-center w-80 h-80 gap-3 
            sm:justify-between sm:max-w-min sm:min-w-xl transition-all duration-300'>
                <button
                    className="hidden h-full items-center rounded-lg px-4 border border-green-300 bg-green-300/20 opacity-70 text-green-300
                    sm:flex  
                    hover:cursor-pointer hover:opacity-100  
                    disabled:border-transparent disabled:bg-stone-700 disabled:opacity-50 disabled:cursor-default "
                    onClick={handlePrev}
                    disabled={page === 0}
                >
                    <TfiAngleLeft />
                </button>
                <div key={page || activeTab} className="flex flex-col h-full overflow-y-auto p-4">
                    {paginated.map((ocupation, idx) => (
                        <div key={idx} className='space-y-2 animate-fade animate-duration-500'>
                            <h3 className="text-lg">{ocupation.title}</h3>
                            <p>{ocupation.year}</p>
                            <h4 className="text-md uppercase font-semibold text-amber-300">{ocupation.title1}</h4>
                            <p className="text-md max-w-sm">
                                {ocupation.description}
                            </p>
                        </div>
                    ))}
                </div>
                <button
                    className="hidden h-full items-center rounded-lg text-green-300 px-4 border border-green-300 bg-green-300/20 opacity-70 
                    sm:flex
                    hover:cursor-pointer hover:opacity-100 
                    disabled:border-transparent disabled:bg-stone-700 disabled:opacity-50 disabled:cursor-default "
                    onClick={handleNext}
                    disabled={page === totalPages - 1}
                >
                    <TfiAngleRight />
                </button>
            </article>
        </>
    )
}

export default CarrouselCard