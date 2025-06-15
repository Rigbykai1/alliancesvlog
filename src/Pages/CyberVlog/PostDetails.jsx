import { IoMdClose, IoLogoYoutube } from "react-icons/io";
import PostKeepass from './Posts/Postkeepass/Postkeepass';
import PostSyncthing from './Posts/PostSyncthing/PostSyncthing';
import PostAfterburner from './Posts/PostMsiAfterBurner/PostMsiAfterBurner';
import PostObsidian from './Posts/PostObsidian/PostObsidian';
import { useParams, Link } from 'react-router';
import { VIDEO_POSTS } from './VIDEO_POSTS';
import PostError from './PostError';

const postComponents = {
    PostKeepass,
    PostSyncthing,
    PostAfterburner,
    PostObsidian,
};

export default function PostDetail() {
    const { id } = useParams();
    const post = VIDEO_POSTS.find(p => p.id === Number(id));
    if (!post) return <PostError />;

    const CustomComponent = post.component ? postComponents[post.component] : null;

    return (
        <div className="flex flex-col self-center sm:w-xl md:w-2xl lg:w-4xl p-8 mx-4 mb-4 gap-4 bg-stone-800 rounded-lg shadow-md animate-fade animate-duration-500 animate-ease-linear transition-all">
            <div className='flex flex-row gap-4 items-center justify-end'>
                <a href={post.videoUrl} target="_blank" rel="noopener noreferrer" className='btn btn-ghost  hover:btn-error rounded-xl'>
                    <div className='mr-2'>Video tutorial</div>
                    <IoLogoYoutube className='size-8' />
                </a>
                <Link to="/CyberVlog" className='btn btn-outline hover:bg-white/20 btn-square self-end rounded-xl btn-md'>
                    <IoMdClose className='size-8' />
                </Link>
            </div>
            {CustomComponent ? (
                <>
                    <CustomComponent post={post} />
                </>

            ) : null}
        </div>
    );
}