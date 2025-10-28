const ContactModalContent = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold text-accent">¡Contáctame!</h2>
            <p>Puedes escribirme a cualquiera de mis redes sociales:</p>
            <div className="flex flex-row gap-4 justify-center">
                <a href="https://www.facebook.com/profile.php?id=61562523632945" target="_blank" rel="noopener noreferrer" className="btn btn-dash btn-info">Facebook</a>
                <a href="https://www.instagram.com/alliancestech/" target="_blank" rel="noopener noreferrer" className="btn btn-dash ">Instagram</a>
                <a href="https://www.tiktok.com/@alliancestech" target="_blank" rel="noopener noreferrer" className="btn btn-dash">TikTok</a>
                <a href="mailto:rigbykai1@gmail.com" target="_blank" className="btn btn-dash">Email</a>
            </div>
        </div>
    )
}

export default ContactModalContent