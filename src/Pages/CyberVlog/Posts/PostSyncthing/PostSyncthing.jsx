import { Link } from "react-router";

export default function PostSyncthing({ post }) {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-3xl font-bold mb-4 text-center">{post.title}</h1>
        <p className="mb-4 text-center">
          Muchas personas dependen de servicios en la nube como Google Drive o Dropbox para sincronizar sus archivos entre dispositivos.
          Pero <span className="font-bold">¿qué pasa si buscas una alternativa  privada, sin depender de servidores de terceros? </span>
          En este post te presento <span className="font-bold">Syncthing</span>, una herramienta gratuita y de código abierto que te permite sincronizar archivos de forma directa entre tus dispositivos, de manera segura y cifrada.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4 text-start">Paso 1: Descarga Syncthing</h2>
        <p className="mb-4 text-start">
          Puedes descargar Syncthing desde su página oficial:{" "}
          <a
            href="https://syncthing.net/downloads/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300"
          >
            https://syncthing.net/downloads/
          </a>. Está disponible para Windows, Linux, macOS, Android y otros sistemas.
        </p>

        <h2 className="text-3xl font-bold mb-4 text-start">Paso 2: Instalación</h2>
        <p className="mb-4 text-start">
          Instala Syncthing en todos los dispositivos entre los cuales quieres compartir archivos.
          En Windows, puedes usar el instalador del siguiente repositorio mantenido por la comunidad:{" "}
          <a
            href="https://github.com/Bill-Stewart/SyncthingWindowsSetup/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300"
          >
            SyncthingWindowsSetup
          </a>.
        </p>

        <h2 className="text-3xl font-bold mb-4 text-start">Paso 3: Primer arranque y configuración</h2>
        <p className="mb-4 text-start">
          Al ejecutar Syncthing por primera vez, se abrirá una interfaz web en tu navegador. Desde ahí puedes:
          <ul className="list-disc list-inside">
            <li>Configurar carpetas para sincronizar</li>
            <li>Ver el ID del dispositivo (clave única que necesitarás para enlazar otros dispositivos)</li>
            <li>Ajustar opciones como el nombre del dispositivo y puertos</li>
          </ul>
        </p>

        <h2 className="text-3xl font-bold mb-4 text-start">Paso 4: Conectar dispositivos</h2>
        <p className="mb-4 text-start">
          Para sincronizar entre dos dispositivos, necesitas agregar el ID del otro dispositivo en la interfaz de Syncthing.
          Ambos dispositivos deben aceptar el enlace para que se establezca la conexión segura.
          Una vez conectados, puedes elegir qué carpetas sincronizar con qué dispositivo.
        </p>

        <h2 className="text-3xl font-bold mb-4 text-start">Paso 5: Sincronización automática y cifrada</h2>
        <p className="mb-4 text-start">
          Syncthing sincroniza los archivos en tiempo real y de manera cifrada (TLS). No se usan servidores externos: **la transferencia es directa entre tus dispositivos**.
          Además, puedes definir reglas como “solo enviar” o “solo recibir” para controlar cómo se sincronizan los datos.
        </p>

        <h2 className="text-3xl font-bold mb-4 text-start">Uso personal: sincronización de contraseñas</h2>
        <p className="mb-4 text-start">
          En mi caso, uso Syncthing para sincronizar archivos críticos como mi base de datos de contraseñas de{" "}
          <Link
            to="/cybervlog/1"
            className="text-green-300"
          >
            KeePassXC
          </Link> entre varios dispositivos.
          Así, mantengo mi información segura y siempre actualizada sin depender de la nube.
        </p>

        <h2 className="text-3xl font-bold mb-4 text-start">Gracias!</h2>
        <p className="mb-4 text-start">
          Espero que esta guía te haya servido para entender qué es Syncthing y cómo puede ayudarte a tener más control sobre tus datos.
          Si tenés dudas, comentarios o sugerencias, escribime a través de mis redes. ¡Gracias por leer!
        </p>
      </div>

    </>
  );
}
