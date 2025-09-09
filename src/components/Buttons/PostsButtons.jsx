import { IoLogoYoutube } from "react-icons/io"

const PostsButtons = ({videoUrl, oficialSite}) => {
    return (
        <section className="flex flex-wrap gap-4 justify-center">
            <a
                href={oficialSite}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-400/30 hover:bg-green-400/50 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:scale-105 transition-all hover:cursor-pointer"
            >
                🌐 Visitar sitio oficial
            </a>
            <a href={videoUrl} target="_blank" rel="noopener noreferrer" className='btn btn-ghost  hover:btn-error rounded-xl'>
                <div className='mr-2'>Video tutorial</div>
                <IoLogoYoutube className='size-8' />
            </a>
        </section>
    )
}

export default PostsButtons