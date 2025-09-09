import PostsButtons from "../../../../components/Buttons/PostsButtons";

export default function PostObsidian({ post }) {
    const features = [
        { icon: "🧠", title: "Pensamiento en red", text: "Conecta ideas y notas para descubrir relaciones ocultas." },
        { icon: "🔗", title: "Vínculos bidireccionales", text: "Tus notas se relacionan automáticamente y muestran backlinks." },
        { icon: "⚙️", title: "Plugins y personalización", text: "Amplía funciones con plugins y ajusta el estilo a tu gusto." },
        { icon: "🌗", title: "Modo oscuro/claro", text: "Cambia la apariencia para trabajar cómodamente todo el día." },
        { icon: "💾", title: "Control total de datos", text: "Tus notas se guardan localmente, con opción de sincronización segura." },
        { icon: "📝", title: "Markdown nativo", text: "Notas en formato .md compatibles con otros editores." },
        { icon: "🧩", title: "Grafo de conocimiento", text: "Mapa interactivo de tus notas y conexiones." },
        { icon: "🖥️", title: "Paneles y editor", text: "Múltiples paneles para comparar y organizar información." },
        { icon: "📚", title: "Casos de uso", text: "Investigación, gestión de proyectos, diario personal, aprendizaje continuo." }
    ];

    function FeatureCard({ icon, title, text }) {
        return (
            <div className="bg-stone-700/50 rounded-xl p-5 text-center shadow hover:scale-105 transition-transform">
                <div className="text-4xl mb-2">{icon}</div>
                <h3 className="text-lg font-bold mb-1">{title}</h3>
                <p className="text-sm text-gray-400">{text}</p>
            </div>
        );
    }
    return (
        <div className="flex flex-col gap-10 justify-center items-center px-6 py-10">

            <section className="text-center max-w-2xl">
                <h1 className="text-4xl font-extrabold mb-4">{post.title}</h1>
                <p className="text-lg text-gray-300 mb-6">
                    🧠 Construye tu “segundo cerebro digital” con Obsidian, el editor Markdown que conecta tus notas y organiza tus ideas de forma visual.
                </p>
            </section>

            <section className="bg-stone-700/50 rounded-2xl p-6 max-w-3xl shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-3">¿Por qué usar Obsidian?</h2>
                <p className="text-gray-300">
                    Obsidian te permite organizar notas de manera conectada, visualizando relaciones entre ideas gracias a vínculos bidireccionales y un grafo interactivo. Ideal para estudiantes, investigadores o cualquier persona que quiera centralizar información y construir un sistema de conocimiento personal.
                </p>
            </section>

            <section className="text-center">
                <h2 className="text-2xl font-bold mb-6">📖 Características clave</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
                    {features.map((f, i) => (
                        <FeatureCard key={i} {...f} />
                    ))}
                </div>
            </section>
            <PostsButtons videoUrl={post.videoUrl} oficialSite={'https://obsidian.md/download'}/>
            <section className="text-center max-w-xl mt-6">
                <h2 className="text-2xl font-bold mb-3">🙌 ¡Gracias por leer!</h2>
                <p className="text-gray-300 mb-4">
                    Obsidian es más que un editor de notas: es un sistema para organizar, conectar y descubrir conocimiento. Empieza a crear tu segundo cerebro hoy y optimiza tu flujo de trabajo.
                </p>

            </section>

        </div>
    );
}
