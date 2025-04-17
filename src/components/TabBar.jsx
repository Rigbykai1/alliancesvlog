const TabBar = () => {
    return (
        <div className="flex self-center">
            <ul className="menu menu-horizontal rounded-box bg-stone-800 gap-1 outline rounded-full">
                <li><a className='rounded-full font-light text-sm sm:text-xl md:text-2xl'>Home</a></li>
                <li><a className='rounded-full font-light text-sm sm:text-xl md:text-2xl'>Sobre mi</a></li>
                <li><a className='rounded-full font-light text-sm sm:text-xl md:text-2xl'>Proyectos</a></li>
                <li><a className='rounded-full font-light text-sm sm:text-xl md:text-2xl'>Articulos</a></li>
            </ul>
        </div>
    )
}

export default TabBar