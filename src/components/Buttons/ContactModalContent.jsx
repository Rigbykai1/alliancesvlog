const ContactModalContent = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold text-emerald-300">¡Contáctame!</h2>
            <p className="text-white/80">Puedes escribirme a cualquiera de mis redes sociales:</p>
            <div className="flex flex-row gap-4 justify-center">
                <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-dash btn-info hover:bg-[#1A77F2] hover:text-white hover:border-[#005fd8]">Facebook</a>
                <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-dash btn-primary hover:bg-[#622069] hover:text-white hover:border-[#591660]">Instagram</a>
                <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-dash hover:bg-black hover:text-white hover:border-black">TikTok</a>
                <a href="mailto:" className="btn btn-dash hover:bg-white hover:text-black hover:border-[#e5e5e5]">Email</a>
            </div>
        </div>
    )
}

export default ContactModalContent