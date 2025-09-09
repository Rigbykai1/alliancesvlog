export default function PostAfterburner({ post }) {
    return (
        <>
            <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="text-3xl font-bold mb-4 text-center">{post.title}</h1>
                <p className="mb-4 text-center">
                    MSI Afterburner es una herramienta gratuita que te permite monitorizar en tiempo real el uso de GPU, CPU, RAM y otros recursos en Windows.
                    Con ella puedes configurar ventanas de información en pantalla (OSD), registrar estadísticas de rendimiento y ajustar parámetros de tu tarjeta gráfica.
                    En este post te muestro paso a paso cómo descargar, instalar y configurar MSI Afterburner para que observes al instante el estado de tu sistema.
                </p>
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-4 text-start">Paso 1: Descargar MSI Afterburner</h2>
                <p className="mb-4 text-start">
                    Descarga MSI Afterburner desde la página oficial de MSI:{" "}
                    <a
                        href="https://www.msi.com/Landing/afterburner/graphics-cards"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-300"
                    >
                        https://www.msi.com/Landing/afterburner
                    </a>
                    . Asegúrate de elegir la versión más reciente compatible con tu sistema operativo Windows. El instalador incluye también RivaTuner Statistics Server (RTSS), necesario para el OSD.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-start">Paso 2: Instalar MSI Afterburner</h2>
                <p className="mb-4 text-start">
                    Ejecuta el instalador que descargaste y sigue las instrucciones en pantalla.
                    El proceso es directo: acepta los términos de uso, selecciona la carpeta de destino y permite la instalación de 
                    <a
                        className="text-green-300"
                        href="https://rivatuner.net/"
                        target="_blank"
                    >{' '} RTSS </a>
                    cuando se te solicite.
                    Una vez termine, abre MSI Afterburner; verás una interfaz con gráficos en tiempo real y opciones de overclock. No te preocupes por las funciones de overclock si solo quieres monitorizar recursos.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-start">Paso 3: Configurar la monitorización básica</h2>
                <p className="mb-4 text-start">
                    En la interfaz principal de MSI Afterburner, haz clic en el ícono de engranaje para abrir “Settings”.
                    Ve a la pestaña “Monitoring” y allí aparecerá una lista de métricas disponibles (GPU usage, GPU temperature, CPU usage, RAM usage, FPS, etc.).
                    Marca las casillas de las métricas que deseas monitorear. Por ejemplo: “GPU usage (%)”, “GPU temperature”, “CPU usage (%)” y “Memory usage (%)”.
                    Con eso activado, estas métricas se mostrarán en la ventana principal. Si quieres un registro más detallado, puedes habilitar “Log history to file” y elegir la ubicación del archivo de registro.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-start">Paso 4: Habilitar el OSD (On-Screen Display)</h2>
                <p className="mb-4 text-start">
                    Para ver los valores en pantalla mientras juegas o usas otras aplicaciones, debes configurar el OSD.
                    En la misma pestaña “Monitoring”, selecciona cada métrica que marcaste y activa la opción “Show in On-Screen Display”.
                    Luego ve a la pestaña “On-Screen Display” y verifica que RTSS esté corriendo correctamente.
                    Puedes personalizar la posición, tamaño y color del texto dentro de RTSS; abre RTSS desde la bandeja del sistema y ajusta “Position” y “Size” a tu gusto.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-start">Paso 5: Monitorear GPU y CPU en tiempo real</h2>
                <p className="mb-4 text-start">
                    Cierra la ventana de configuración y observa cómo MSI Afterburner muestra las gráficas en tiempo real.
                    Si ya habilitaste el OSD, inicia un juego o una aplicación de prueba para ver el uso de GPU, temperatura y FPS directamente en la pantalla.
                    De forma predeterminada, Afterburner actualiza los valores cada segundo. Si necesitas una frecuencia distinta, vuelve a “Settings” → “Monitoring” y ajusta el “Polling time” (tiempo de sondeo).
                </p>

                <h2 className="text-3xl font-bold mb-4 text-start">Paso 6: Registrar estadísticas y analizar registros</h2>
                <p className="mb-4 text-start">
                    Si quieres guardar un historial de uso, en “Settings” → “Monitoring” marca “Log history to file”.
                    Elige una ruta y un nombre para el archivo .csv donde se almacenarán las estadísticas.
                    Ejecuta tu aplicación o juego normalmente. Cuando termines, abre el archivo .csv con Excel, LibreOffice Calc o cualquier editor de texto para analizar picos de uso, temperaturas y comportamiento de tu hardware.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-start">Gracias!</h2>
                <p className="mb-4 text-start">
                    Esto es todo: así de sencillo es usar MSI Afterburner para monitorear recursos en Windows. Con estos pasos puedes saber en todo momento cómo se comportan tu GPU, CPU y memoria.
                    Si tienes dudas o comentarios, contáctame en redes sociales. ¡Gracias por leer!
                </p>
            </div>
        </>
    );
}
