import { IoLogoYoutube } from "react-icons/io";
import PostsButtons from "../../../../components/Buttons/PostsButtons";

export default function PostAfterburner({ post }) {
    const features = [
        { icon: "📊", title: "Monitorización en tiempo real", text: "Visualiza GPU, CPU, RAM y FPS mientras trabajas o juegas." },
        { icon: "💾", title: "Registro de estadísticas", text: "Guarda historiales de rendimiento en archivos CSV para análisis posterior." },
        { icon: "⚙️", title: "OSD personalizable", text: "Muestra métricas directamente en pantalla con tamaño y posición a tu gusto." }
    ]
    return (
        <div className="flex flex-col gap-10 justify-center items-center px-6 py-10">


            <section className="text-center max-w-2xl">
                <h1 className="text-4xl font-extrabold mb-4">{post.title}</h1>
                <p className="text-lg text-gray-300 mb-6">
                    🖥️ Aprende a monitorear tu GPU, CPU y RAM en tiempo real con MSI Afterburner, gratis y fácil de usar.
                </p>
            </section>

            <section className="bg-stone-700/50 rounded-2xl p-6 max-w-3xl">
                <h2 className="text-2xl font-bold mb-3">¿Por qué MSI Afterburner?</h2>
                <p className="text-gray-300">
                    Con MSI Afterburner puedes controlar en tiempo real el rendimiento de tu computadora, registrar estadísticas y personalizar el On-Screen Display (OSD) para ver información mientras juegas o trabajas. Es ideal para gamers y entusiastas del hardware que quieren optimizar su sistema.
                </p>
            </section>

            <section className="grid md:grid-cols-3 gap-6 max-w-4xl">
                {features.map((b, i) => (
                    <div key={i} className="bg-stone-700/50 rounded-xl p-5 text-center shadow hover:scale-105 transition-transform">
                        <div className="text-4xl mb-2">{b.icon}</div>
                        <h3 className="text-lg font-bold mb-1">{b.title}</h3>
                        <p className="text-sm text-gray-400">{b.text}</p>
                    </div>
                ))}
            </section>
            <PostsButtons videoUrl={post.videoUrl} oficialSite={'https://www.msi.com/Landing/afterburner/graphics-cards'} />
            <section className="text-center max-w-xl mt-6">
                <h2 className="text-2xl font-bold mb-3">🙌 ¡Gracias por leer!</h2>
                <p className="text-gray-300 mb-4">
                    Ahora puedes monitorear tu hardware en tiempo real con MSI Afterburner y optimizar tu rendimiento.
                    Si quieres profundizar, no olvides visitar el tutorial completo en YouTube.
                </p>
            </section>
        </div>
    );
}
