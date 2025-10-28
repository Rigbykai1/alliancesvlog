import { IoMdClose } from "react-icons/io";
import { useParams, Link } from 'react-router';
import { VIDEO_POSTS } from './VIDEO_POSTS';
import PostError from './PostError';
import PostTemplate from '../../components/PostTemplate';

export default function PostsRender() {
    const { id } = useParams();
    const post = VIDEO_POSTS.find(p => p.slug === id);
    
    if (!post) return <PostError />;

    return (
        <div className="flex flex-col self-center sm:w-xl md:w-2xl lg:w-4xl p-8 mx-4 mb-4 gap-4 bg-base-100 rounded-lg shadow-md animate-fade animate-duration-500 animate-ease-linear transition-all">
            <div className='flex flex-row gap-4 items-center justify-end'>
                <Link to="/CyberVlog" className='btn btn-outline hover:bg-neutral hover:text-neutral-content btn-square self-end rounded-xl btn-md'>
                    <IoMdClose className='size-8' />
                </Link>
            </div>
            <PostTemplate post={post} />
        </div>
    );
}