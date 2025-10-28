import { useState } from 'react'

const GlobeModalContent = ({ dotData }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(dotData.link)}&screenshot=true&meta=false&embed=screenshot.url`;

    return (
        <>
            <h3 className="font-bold text-lg">{dotData.label}</h3>
            <p className="py-4">{dotData.content}</p>
            <a className='btn btn-outline btn-dash  mt-4' href={dotData.link} target='_blank' rel="noopener noreferrer">
                Link del curso
            </a>
            <div className="flex justify-center min-h-40 mt-4">
                {!imgLoaded && (
                    <div className="animate-pulse bg-stone-700 rounded-2xl shadow-md max-w-xs w-full" />
                )}
                <img
                    src={screenshotUrl}
                    alt={`Vista previa de ${dotData.label}`}
                    className={`rounded-2xl shadow-md max-w-xs w-full transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImgLoaded(true)}
                    style={{ position: imgLoaded ? 'static' : 'absolute' }}
                />
            </div>
        </>
    )
}

export default GlobeModalContent