import { IoLogoYoutube } from "react-icons/io";

const PostsButtons = ({ videoUrl, oficialSite }) => {
  return (
    <section className="flex flex-wrap gap-4 justify-center">
      <a
        href={oficialSite}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-success/70 hover:bg-success text-success-content font-semibold py-2 px-6 rounded-2xl shadow-lg hover:scale-105 transition-all hover:cursor-pointer"
      >
        Visitar sitio oficial
      </a>
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline hover:btn-error rounded-2xl hover:scale-95"
      >
        <div className="mr-2">Video tutorial</div>
        <IoLogoYoutube className="size-8" />
      </a>
    </section>
  );
};

export default PostsButtons;
