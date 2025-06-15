import { useState } from 'react'
import Globe from '../../components/Globe/Globe'
import { SPECIAL_POINTS_HOME } from './SPECIAL_POINTS_HOME'
import GlobeModal from '../../components/Globe/GlobeModal';
import ContactButton from '../../components/Buttons/ContactButton';
import ContactModalContent from '../../components/Buttons/ContactModalContent';
import ContactModal from '../../components/Buttons/ContactModal';
import GlobeModalContent from '../../components/Globe/GlobeModalContent';

const Home = () => {
    const [dotData, setDotData] = useState(null);
    const [zoomOutTrigger, setZoomOutTrigger] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);

    const handleCloseModal = () => {
        setDotData(null);
        setZoomOutTrigger(!zoomOutTrigger);
    };

    return (
        <>
            <div className='flex flex-col items-center justify-center text-center animate-fade animate-duration-500 animate-ease-linear '>
                <div className='flex flex-col mx-4'>
                    <h1 className="font-extrabold text-5xl sm:text-7xl md:text-8xl transition-all duration-300">Jonathan</h1>
                    <h2 className="font-bold text-4xl text-center sm:text-6xl md:text-7xl pb-8 transition-all duration-300">Aragón</h2>
                    <ContactButton onOpen={() => setContactOpen(true)} />
                    <div className='flex flex-col md:flex-row gap-4 py-4'>
                        <article className='flex flex-col p-8  min-h-56 max-h-80 justify-center max-w-md min-w-80 bg-amber-300/10 hover:bg-amber-300/15 rounded-lg'>
                            <h1 className='font-light text-3xl text-amber-300'> <span className='animate-pulse text-amber-300'>{">"}</span> Programador jr</h1>
                            <p className='font-extralight text-lg text-zinc-300'>
                                Tengo experiencia en programación y ciberseguridad,
                                con habilidades en resolución de problemas y aprendizaje rápido.
                                Mi enfoque es ofrecer soluciones eficientes y adaptadas a los desafíos tecnológicos.
                            </p>
                        </article>
                        <article className='flex flex-col items-center p-8 min-h-56 max-h-80 justify-center max-w-md min-w-80 bg-emerald-900/15 hover:bg-emerald-900/20 rounded-xl '>
                            <h1 className='font-light text-2xl text-green-300'>Recursos que recomiendo</h1>
                            <p className='font-extralight text-sm text-zinc-300'>
                                Explora los cursos y recursos que he encontrado útiles en mi camino de aprendizaje.
                                <span className="text-emerald-200"> Haz clic en los puntos del mapa para obtener más información sobre cada uno de ellos.</span>
                            </p>
                        </article>
                    </div>
                </div>

            </div>
            <Globe
                mainSphereColor={0xA4F76B}
                interactionSphereColor={0x6FF749}
                dotsData={SPECIAL_POINTS_HOME}
                onDotClick={setDotData}
                zoomOutTrigger={zoomOutTrigger}
                setZoomOutTrigger={setZoomOutTrigger}
            />
            <ContactModal
                open={contactOpen}
                onClose={() => setContactOpen(false)}
                modalContent={<ContactModalContent />}
            />
            <GlobeModal
                open={!!dotData}
                onClose={handleCloseModal}
                modalContent={<GlobeModalContent dotData={dotData} />}
            />
        </>
    )
}

export default Home