import PostsButtons from "./Buttons/PostsButtons";

export default function PostTemplate({ post }) {
  const features = post.features || [];
  return (
    <div
      className={`flex flex-col gap-10 justify-center items-center px-6 py-10 ${post.className}`}
    >
      <section className="text-center max-w-2xl">
        <h1 className="text-4xl font-extrabold mb-4 text-accent">{post.title}</h1>
        <p className="text-lg mb-6">{post.description}</p>
      </section>

      <section className="text-center max-w-3xl bg-base-300/80 rounded-2xl p-6">
        <h1 className="text-4xl font-extrabold mb-4">{post.ctatitle}</h1>
        <p className="text-lg mb-6">{post.ctadescription}</p>
      </section>

      {features && features.length > 0 && (
        <section className="grid md:grid-cols-3 gap-6 max-w-4xl w-full">
          {features.map((p, i) => (
            <div
              key={i}
              className="bg-base-300 rounded-2xl p-5 text-center shadow hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-2">{p.icon}</div>
              <h3 className="text-lg font-bold mb-1">{p.title}</h3>
              <p className="text-sm">{p.text}</p>
            </div>
          ))}
        </section>
      )}


      <PostsButtons
        videoUrl={post.videoUrl}
        oficialSite={post.oficialSite}
      />

      {post.thanks && (
        <section className="text-center max-w-xl mt-6">
          <h2 className="text-2xl font-bold mb-3">¡Gracias por leer!</h2>
          <p className="mb-4">{post.thanks}</p>
        </section>
      )}
    </div>
  );
}
