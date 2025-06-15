import ContactButton from "../../../../components/Buttons/ContactButton"

export default function PostObsidian({ post }) {
    return (
        <>
            <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="text-3xl font-bold mb-4 text-center">{post.title}</h1>
                <p className="mb-4 text-center">
                    Obsidian es una aplicación de toma de notas basada en Markdown que funciona localmente en tu equipo. Está diseñada para usuarios que quieren crear y relacionar información de forma libre, aprovechando un sistema de “vínculos bidireccionales” y un grafo de conocimiento.
                    Con Obsidian puedes construir tu propio “segundo cerebro” digital, organizando ideas, proyectos, referencias y todo tipo de contenido de manera conectada y visual. En este post te muestro qué es Obsidian, sus principales características y cómo puede transformar tu flujo de trabajo.
                </p>
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-4 text-start">¿Qué es Obsidian?</h2>
                <p className="mb-4 text-start">
                    Obsidian es un editor de texto enriquecido con enfoque en
                    <a
                        className="text-green-300"
                        href="https://www.markdownguide.org/basic-syntax/">
                        {' '}Markdown
                    </a> y en la creación de vínculos entre notas. Cada nota se guarda como un archivo .md en tu disco local, lo que te da control absoluto sobre tus datos.
                    Su punto fuerte es el grafo de conocimiento: una representación visual de tus notas y cómo se conectan entre sí. Esto fomenta el pensamiento en red, permitiéndote ver relaciones entre temas y descubrir conexiones que de otro modo pasarían desapercibidas.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-start">Características principales</h2>
                <p className="mb-4 text-start">
                    <span className="font-bold">• Markdown nativo:</span> Todas las notas se crean en formato Markdown, lo que garantiza compatibilidad con otros editores de texto y plataformas.<br /><br />
                    <span className="font-bold">• Vínculos bidireccionales:</span> Al escribir [[Nombre de nota]], creas automáticamente un enlace a otra nota, y Obsidian muestra las notas relacionadas en “Backlinks”.<br /><br />
                    <span className="font-bold">• Grafo de conocimiento:</span> Visualiza un mapa interactivo con todos tus archivos y sus conexiones. Puedes agrupar nodos por carpeta, tag o metadatos.<br /><br />
                    <span className="font-bold">• Plugins y comunidad:</span> Existe una gran biblioteca de plugins que amplían las funciones (calendario, tablas kanban, diario, gestor de tareas, etc.). Además, la comunidad comparte “snippets” y plantillas de CSS para personalizar la apariencia.<br />
                    <span className="font-bold">• Modo oscuro/claro:</span> Cambia entre temas integrados o instala temas comunitarios para ajustar el look & feel.<br /><br />
                    <span className="font-bold">• Notas en la nube (opcional):</span> Obsidian ofrece sincronización nativa con encriptación de extremo a extremo (servicio de pago), aunque también puedes usar servicios de terceros como Git o Dropbox.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-start">Cómo funciona el sistema de notas</h2>
                <p className="mb-4 text-start">
                    Obsidian organiza tus archivos dentro de un “vault” (bóveda), que no es más que una carpeta en tu disco donde guardas todas las notas Markdown. Cada archivo representa una nota individual, y puedes crear subcarpetas para agrupar temas o proyectos.
                    Al abrir un vault, Obsidian rastrea todos los archivos .md y construye la base de datos interna que alimenta al grafo de conocimiento y al sistema de búsqueda rápida.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-start">Interfaz y flujo de trabajo</h2>
                <p className="mb-4 text-start">
                    A primera vista, Obsidian muestra tres paneles principales:<br />
                    <span className="font-bold">1. Panel de archivos:</span> Lista de carpetas y notas dentro del vault.<br /><br />
                    <span className="font-bold">2. Editor de notas:</span> Área central donde editas en Markdown; cuenta con vista dividida (Editor/Previsualización).<br /><br />
                    <span className="font-bold">3. Panel de grafo:</span> Mapa interactivo de todas tus notas y sus conexiones.<br /><br />
                    Puedes abrir múltiples paneles o “tabs” para comparar notas, arrastrar enlaces entre ventanas y navegar sin perder el contexto. El sistema de búsqueda rápida (Ctrl/Cmd+O) te permite ir a cualquier nota en segundos.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-start">Plugins destacados</h2>
                <p className="mb-4 text-start">
                    Obsidian cuenta con un repositorio oficial de plugins, además de una comunidad muy activa que desarrolla extensiones. Algunos plugins recomendados:<br />
                    <span className="font-bold">• Calendar:</span> Agrega un calendario al panel lateral para gestionar notas diarias o registros.<br /><br />
                    <span className="font-bold">• Dataview:</span> Crea vistas personalizadas (tablas, listas) basadas en metadatos o tags de tus notas.<br /><br />
                    <span className="font-bold">• Kanban:</span> Permite organizar tareas o proyectos dentro de una estructura Kanban dentro de una nota.<br /><br />
                    <span className="font-bold">• Templater:</span> Genera plantillas automatizadas. Muy útil para diarios, informes o notas recurrentes.<br /><br />
                    <span className="font-bold">• Quick Switcher++:</span> Mejora la búsqueda rápida con filtros adicionales.<br /><br />
                    <span className="font-bold">• Obsidian Git:</span> Sincroniza tu vault con un repositorio Git para historial de versiones.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-start">Casos de uso y beneficios</h2>
                <p className="mb-4 text-start">
                    Obsidian se adapta a diversos escenarios:<br />
                    <span className="font-bold">• Investigación académica:</span> Guarda citas, enlaza autores, crea mapas conceptuales.<br /><br />
                    <span className="font-bold">• Gestión de proyectos:</span> Relaciona tareas con documentación, controla avances con Kanban.<br /><br />
                    <span className="font-bold">• Diario personal/profesional:</span> Lleva un registro de actividades diarias, ideas y reflexiones.<br /><br />
                    <span className="font-bold">• Aprendizaje continuo:</span> Crea notas de libros, cursos y conecta conceptos para potenciar la retención.<br /><br />
                    <span className="font-bold">• El principal beneficio es que tus notas no están aisladas:</span> el grafo te ayuda a descubrir relaciones, generando un conocimiento orgánico que crece con cada conexión que añades.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-start">Dónde descargar y cómo empezar</h2>
                <p className="mb-4 text-start">
                    Aunque este post no se centra en el proceso de instalación, es importante reconocer que Obsidian está disponible para Windows, macOS y Linux.
                    Puedes visitar su sitio oficial para más información y recursos:{" "}
                    <a
                        href="https://obsidian.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-300"
                    >
                        https://obsidian.md
                    </a>
                    . Ahí encontrarás guías básicas, ejemplos de vaults y la sección de plugins para personalizar tu experiencia.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-start">Conclusión</h2>
                <p className="mb-4 text-start">
                    Obsidian es mucho más que un editor Markdown: es una plataforma para construir un sistema de conocimiento personal. Con su grafo interactivo, enlaces bidireccionales y amplia variedad de plugins, te permite organizar información de forma intuitiva y potente.
                    Si buscas centralizar ideas, proyectos y referencias en un solo lugar, Obsidian puede ser la herramienta definitiva para tu flujo de trabajo.
                </p>
            </div>
            <ContactButton />
        </>
    );
}
