const ContactButton = ({ onOpen }) => {
    return (
        <>
            <button
                className="btn btn-dash text-white sm:btn-lg md:btn-xl
        hover:btn-accent hover:scale-95 max-w-md self-center transition-all duration-300"
                onClick={onOpen}
            >Contactame</button>
        </>
    )
}

export default ContactButton