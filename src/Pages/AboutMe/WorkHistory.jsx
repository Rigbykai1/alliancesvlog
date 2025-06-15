import React, { useState } from 'react'

const WorkHistory = () => {
    const workHistory = [
        {
            company: "La Alianza",
            role: "Ayudante de construcción",
            description: `En la Alianza realicé labores como hacer y batir mezcla, trabajos de pintura,
            descarga de materiales, etc. Aprendí a utilizar distintas herramientas
            necesarias para desempeñar las labores que se me asignaban.`,
            year: "2017 - 2019",
        },
        {
            company: "Parque Diversiones",
            role: "Operador mecánico",
            description: `Mi deber como operador mecánico era velar por la seguridad
            de los huéspedes en cada atracción, haciendo de su estadía un
            momento agradable y sobre todo seguro.
            Aprendí mucho sobre al atención al cliente y sobre el
            funcionamiento de distintas atracciones.`,
            year: "2019 - 2020",
        },
        {
            company: "Super La Esquina",
            role: "Dependiente",
            description: `Debía atender clientes y facturar sus compras, también debía ingresar
            facturas al sistema del local y gestionar pedidos a proveedores.`,
            year: "2024 - 2024",
        },
        {
            company: "CER Evaluación de Riesgos",
            role: "Operario",
            description: `Realizo mantenimiento y recarga a extintores, debo manipular distintas
            máquinas y herramientas para la realización de estas labores.`,
            year: "2024 - actualidad",
        },
    ];

    const [page, setPage] = useState(0);
    const itemsPerPage = 1;
    const totalPages = Math.ceil(workHistory.length / itemsPerPage);

    const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));
    const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages - 1));

    const paginated = workHistory.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

    return (
        <>
            <div className="flex justify-center mt-2 gap-2 sm:hidden">
                <button
                    className="sm:hidden px-3 py-1 rounded bg-amber-700 text-white disabled:opacity-50"
                    onClick={handlePrev}
                    disabled={page === 0}
                >
                    Anterior
                </button>
                <button
                    className="sm:hidden px-3 py-1 rounded bg-amber-700 text-white disabled:opacity-50"
                    onClick={handleNext}
                    disabled={page === totalPages - 1}
                >
                    Siguiente
                </button>
            </div>
            <article className='flex flex-row'>
                <button
                    className="hidden sm:flex px-3 py-1 rounded bg-amber-700/50 text-white disabled:opacity-10"
                    onClick={handlePrev}
                    disabled={page === 0}
                >
                    Anterior
                </button>
                <div className="flex flex-col bg-stone-800 rounded-box shadow-md w-80 sm:w-md justify-center items-center p-2">
                    <h1 className="text-xl opacity-60 text-amber-200">Mi historial laboral</h1>
                    {paginated.map((job, idx) => (
                        <div key={idx} className='space-y-2'>
                            <h3 className="text-lg">{job.company}</h3>
                            <p>{job.year}</p>
                            <h4 className="text-md uppercase font-semibold text-amber-500">{job.role}</h4>
                            <p className="text-md max-w-64 text-wrap">
                                {job.description}
                            </p>
                        </div>
                    ))}
                    <span className="pt-2 text-amber-200">{page + 1} / {totalPages}</span>
                </div>
                <button
                    className="hidden sm:flex px-3 py-1 rounded bg-amber-700/50 text-white disabled:opacity-10"
                    onClick={handleNext}
                    disabled={page === totalPages - 1}
                >
                    Siguiente
                </button>
            </article>
        </>
    )
}

export default WorkHistory