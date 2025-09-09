import { Link } from "react-router";
import PostsButtons from "../../../../components/Buttons/PostsButtons";

const features = [
  { icon: "🔒", title: "Sin servidores externos", text: "Tus archivos se sincronizan directamente entre tus dispositivos." },
  { icon: "⚡", title: "Sincronización en tiempo real", text: "Los cambios se reflejan al instante entre todos los equipos conectados." },
  { icon: "🛡️", title: "Cifrado TLS", text: "Todos los datos viajan de manera cifrada y segura." },
  { icon: "🌐", title: "Multiplataforma", text: "Funciona en Windows, macOS, Linux, Android y otros sistemas." },
  { icon: "🔧", title: "Configuración flexible", text: "Define qué carpetas sincronizar y cómo hacerlo (solo enviar, solo recibir)." },
  { icon: "💾", title: "Uso personal o profesional", text: "Ideal para archivos críticos, bases de datos o proyectos colaborativos." }
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

export default function PostSyncthing({ post }) {
  return (
    <div className="flex flex-col gap-10 justify-center items-center px-6 py-10">

      <section className="text-center max-w-2xl">
        <h1 className="text-4xl font-extrabold mb-4">{post.title}</h1>
        <p className="text-lg text-gray-300 mb-6">
          🔄 Sincroniza tus archivos de manera privada, directa y segura con Syncthing, sin depender de la nube.
        </p>
      </section>

      <section className="bg-stone-700/50 rounded-2xl p-6 max-w-3xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-3">¿Por qué usar Syncthing?</h2>
        <p className="text-gray-300">
          Syncthing ofrece sincronización directa entre tus dispositivos sin depender de servidores de terceros. Todo viaja cifrado y en tiempo real, dándote control total sobre tus datos personales o profesionales.
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
      <section className="bg-stone-700/50 rounded-2xl p-6 max-w-3xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-3">💡 Uso personal: sincronización de contraseñas</h2>
        <p className="text-gray-300">
          Yo utilizo Syncthing para mantener sincronizada mi base de datos de <Link to="/CyberVlog/keepass" className="text-green-300">KeePassXC</Link> entre todos mis dispositivos, asegurando que siempre esté actualizada y protegida sin depender de servicios en la nube.
        </p>
      </section>
      <PostsButtons videoUrl={post.videoUrl} oficialSite={'https://syncthing.net/downloads/'} />

      <section className="text-center max-w-xl mt-6">
        <h2 className="text-2xl font-bold mb-3">🙌 ¡Gracias por leer!</h2>
        <p className="text-gray-300 mb-4">
          Syncthing te permite tener control total sobre tus archivos y mantenerlos sincronizados de manera privada y segura. Empieza a usarlo hoy y protege tus datos.
        </p>
      </section>

    </div>
  );
}
