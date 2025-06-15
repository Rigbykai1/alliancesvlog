const PostError = () => {
    return (
        <div className="flex flex-col p-8 gap-4 justify-center items-center bg-stone-800 w-fit self-center rounded-lg mx-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Post no encontrado</h1>
            <p className="mb-4 text-center">Parece que hubo un <span className="text-error font-bold">error</span>, intenta las siguientes soluciones:</p>
            <ul className="list">
                <li className="list-row">
                    <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
                    <div className="text-center max-w-60">
                        <div>Espera unos minutos</div>
                        <div className="text-xs uppercase font-semibold opacity-60">
                            Error de carga
                        </div>
                    </div>
                </li>
                <li className="list-row">
                    <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>
                    <div className="text-center max-w-60">
                        <div>No modifiques el link o verifica si ha sido alterado</div>
                        <div className="text-xs uppercase font-semibold opacity-60">
                            Problema de servidor
                        </div>
                    </div>
                </li>
                <li className="list-row">
                    <div className="text-4xl font-thin opacity-30 tabular-nums">03</div>
                    <div className="text-center max-w-60">
                        <div>Recarga la página</div>
                        <div className="text-xs uppercase font-semibold opacity-60">
                            Problema de red
                        </div>
                    </div>
                </li>

                <li className="list-row">
                    <div className="text-4xl font-thin opacity-30 tabular-nums">04</div>
                    <div className="text-center max-w-60">
                        <div>Reporta el error</div>
                        <div className="text-xs uppercase font-semibold opacity-60">
                            Problema por examinar
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default PostError