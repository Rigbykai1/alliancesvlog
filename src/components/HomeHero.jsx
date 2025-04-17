import React from 'react'
import Globe from './Globe/Globe'

const HomeHero = () => {


    return (
        <div className='flex flex-col items-center justify-center text-center'>
            <div>
                <article className='py-4 pb-8'>
                    <h1 className="font-extrabold text-5xl sm:text-7xl md:text-8xl">Jonathan</h1>
                    <h1 className="font-bold text-4xl text-center sm:text-6xl md:text-7xl">Aragón</h1>
                </article>
                <button className="btn btn-dash hover:btn-accent text-white sm:btn-lg md:btn-xl">Contactame</button>
                <h1 className='font-light text-3xl py-4 text-amber-300'> {">"} Programador jr</h1>
                <p className='font-extralight text-lg text-zinc-300 max-w-md'>
                    Tengo experiencia en programación y ciberseguridad,
                    con habilidades en resolución de problemas y aprendizaje rápido.
                    Mi enfoque es ofrecer soluciones eficientes y adaptadas a los desafíos tecnológicos.
                </p>
            </div>
            <Globe />
        </div>
    )
}

export default HomeHero