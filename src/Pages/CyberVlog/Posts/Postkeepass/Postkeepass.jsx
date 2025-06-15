import ghUrl from "../../../../components/Utils/ghrul";

export default function PostKeepass({ post }) {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-3xl font-bold mb-4 text-center">{post.title}</h1>
        <p className="mb-4 text-center">Esa es una práctica peligrosa. Si un sitio en el que estás registrado sufre una filtración, no solo comprometes esa cuenta, sino también cualquier otra donde hayas usado la misma combinación de correo y contraseña.
          El verdadero riesgo no es que vulneren ese sitio, sino que tú estés facilitando el trabajo reutilizando credenciales.
          En este post te muestro cómo usar KeePassXC, una herramienta gratuita y segura para gestionar todas tus contraseñas sin tener que recordarlas ni repetirlas.
          Aprende a proteger tu información personal y evita ser una víctima más de ataques por reutilización de contraseñas.</p>
        <article className="flex flex-col">
          <h2 className="text-3xl font-bold mb-4 text-start">Paso 1: Descarga KeePassXC</h2>
          <p className="mb-4 text-start">Descarga KeePassXC desde su página oficial: <a href="https://keepassxc.org/download/" target="_blank" rel="noopener noreferrer" className='text-green-300'>https://keepassxc.org/download/</a></p>
          <img src={ghUrl('/src/Pages/CyberVlog/Posts/Postkeepass/src/step_1.png')} alt="Descarga KeePassXC" className="my-4 rounded-lg" />
        </article>
        <article className="flex flex-col">
          <h2 className="text-3xl font-bold mb-4 text-start">Paso 2: Instalar KeePassXC</h2>
          <p className="mb-4 text-start">Instala KeePassXC siguiendo las instrucciones de la instalación.
            Asegúrate de elegir una contraseña maestra segura y única, ya que será la clave para acceder a todas tus contraseñas guardadas.
            En mi caso utilizo un script de Python para guardar la master password en un archivo de texto cifrado, pero eso es un tema para otro post(acá te dejo el link del <a href="https://github.com/Rigbykai1/CryptWord" target="_blank" rel="noopener noreferrer" className='text-green-300'>repositorio</a>).
            Si no sabes cómo crear una contraseña segura, puedes usar un generador de contraseñas como el de KeePassXC o buscar en línea.
          </p>
          <img src={ghUrl('/src/Pages/CyberVlog/Posts/Postkeepass/src/step_2.png')} alt="Instala KeePassXC" className="my-4 rounded-lg self-center" />
        </article>
        <article className="flex flex-col">
          <h2 className="text-3xl font-bold mb-4 text-start">Paso 3: Crear una base de datos</h2>
          <p className="mb-4 text-start">Una vez instalado, abre KeePassXC y crea una nueva base de datos.
            Puedes elegir entre diferentes opciones de cifrado, pero la configuración predeterminada es segura y adecuada para la mayoría de los usuarios.
            Guarda la base de datos en un lugar seguro y asegúrate de hacer copias de seguridad periódicas.</p>
          <img src={ghUrl('/src/Pages/CyberVlog/Posts/Postkeepass/src/step_3.png')} alt="Crea una DB" className="my-4 rounded-lg" />
        </article>
        <article className="flex flex-col">
          <h2 className="text-3xl font-bold mb-4 text-start">Paso 4: Agregar contraseñas</h2>
          <p className="mb-4 text-start">Para agregar contraseñas, haz clic en el icono y completa los campos requeridos.
            Puedes agregar el nombre del sitio web, tu nombre de usuario, la contraseña y cualquier otra información relevante.
            KeePassXC también ofrece la opción de generar contraseñas seguras automáticamente, lo que es muy útil para evitar reutilizar contraseñas.</p>
          <img src={ghUrl('/src/Pages/CyberVlog/Posts/Postkeepass/src/step_4.png')} alt="Crea una DB" className="my-4 rounded-lg" />
        </article>
        <article className="flex flex-col">
          <h2 className="text-3xl font-bold mb-4 text-start">Paso 5: Usar KeePassXC</h2>
          <p className="mb-4 text-start">Una vez que hayas agregado tus contraseñas, puedes usar KeePassXC para acceder a ellas fácilmente.
            Simplemente abre la aplicación, ingresa tu contraseña maestra y verás una lista de todas tus contraseñas guardadas.
            Puedes copiar y pegar las contraseñas directamente desde KeePassXC al sitio web correspondiente.</p>
          <img src={ghUrl('/src/Pages/CyberVlog/Posts/Postkeepass/src/step_5.png')} alt="Crea una DB" className="my-4 rounded-lg" />
        </article>
        <article className="flex flex-col">
          <h2 className="text-3xl font-bold mb-4 text-start">Paso 6: Sincronización y copias de seguridad</h2>
          <p className="mb-4 text-start">KeePassXC no almacena tus contraseñas en la nube, lo cual aumenta la seguridad,
            pero también implica que tú eres responsable de mantener copias de tu base de datos.
            Si usas múltiples dispositivos, es recomendable sincronizar la base de datos manualmente.
            En mi caso, utilizo <a href="https://github.com/Bill-Stewart/SyncthingWindowsSetup/releases/tag/v1.29.0" target="_blank" rel="noopener noreferrer" className='text-green-300'>Syncthing</a> para sincronizar mis contraseñas de forma segura entre todos mis dispositivos
            y reducir el riesgo de perder acceso a ellas.
          </p>
          <img src={ghUrl('/src/Pages/CyberVlog/Posts/Postkeepass/src/step_6.jpg')} alt="Descarga KeePassXC" className="my-4 rounded-lg" />
        </article>
        <article className="flex flex-col max-w-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">Gracias!</h2>
          <p className="mb-4 text-start">
            Espero que este post te haya sido útil y que ahora tengas una mejor comprensión de cómo usar KeePassXC para gestionar tus contraseñas de manera segura.
            Si tienes alguna pregunta o comentario, no dudes en contactarme en mis redes sociales. ¡Gracias por leer!
          </p>
        </article>
      </div>

    </>
  );
}