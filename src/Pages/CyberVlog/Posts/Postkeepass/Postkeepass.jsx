import PostsButtons from "../../../../components/Buttons/PostsButtons";

export default function PostKeepass({ post }) {
  return (
    <div className="flex flex-col gap-10 justify-center items-center px-6 py-10">
      <section className="text-center max-w-2xl">
        <h1 className="text-4xl font-extrabold mb-4">{post.title}</h1>
        <p className="text-lg text-gray-300 mb-6">
          🔐 Aprende a proteger tus contraseñas con KeePassXC, un gestor gratuito y seguro.
        </p>
      </section>
      <section className="bg-stone-700/50 rounded-2xl p-6 max-w-3xl">
        <h2 className="text-2xl font-bold mb-3">¿Por qué KeePassXC?</h2>
        <p className="text-gray-300">
          Muchas personas repiten la misma contraseña en distintos sitios.
          Si una de esas páginas es hackeada, todas tus cuentas quedan en riesgo.
          KeePassXC soluciona esto guardando tus contraseñas en una base de datos cifrada
          y protegida por una sola clave maestra.
        </p>
      </section>
      <section className="grid md:grid-cols-3 gap-6 max-w-4xl ">
        {[
          { icon: "🔒", title: "Seguridad", text: "Cifrado AES-256 para mantener tus datos a salvo." },
          { icon: "⚡", title: "Comodidad", text: "Accede a todas tus contraseñas con una sola clave maestra." },
          { icon: "🌍", title: "Gratis y Open Source", text: "Sin pagos ocultos ni dependencias en la nube." }
        ].map((b, i) => (
          <div key={i} className="bg-stone-700/50 rounded-xl p-5 text-center shadow hover:scale-105 transition-transform">
            <div className="text-4xl mb-2">{b.icon}</div>
            <h3 className="text-lg font-bold mb-1">{b.title}</h3>
            <p className="text-sm text-gray-400">{b.text}</p>
          </div>
        ))}
      </section>
      <PostsButtons videoUrl={post.videoUrl} oficialSite={'https://keepassxc.org/download/'} />
      <section className="text-center max-w-xl mt-6">
        <h2 className="text-2xl font-bold mb-3">🙌 ¡Gracias por leer!</h2>
        <p className="text-gray-300 mb-4">
          Espero que este tutorial te ayude a empezar con KeePassXC y proteger tu información.
          Si quieres ver el paso a paso completo, no olvides visitar el video en YouTube.
        </p>
      </section>
    </div>
  );
}
