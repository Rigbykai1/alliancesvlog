import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { VIDEO_POSTS } from './VIDEO_POSTS';

export default function CyberVlog() {
  const [activeCard, setActiveCard] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (hoveredCard !== null) return;

    const interval = setInterval(() => {
      let random;
      do {
        random = Math.floor(Math.random() * VIDEO_POSTS.length);
      } while (random === activeCard && VIDEO_POSTS.length > 1);
      setActiveCard(random);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeCard, hoveredCard]);

  const handleMouseEnter = (index) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredCard(null);
      setActiveCard(prev => {
        let random;
        do {
          random = Math.floor(Math.random() * VIDEO_POSTS.length);
        } while (random === prev && VIDEO_POSTS.length > 1);
        return random;
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col max-w-4xl self-center mx-4 mb-4">
      <div className='max-w-lg self-center'>
        <h1 className="text-4xl font-bold mb-4 text-center">CyberVlog</h1>
        <h1 className="text-xl font-bold mb-4 text-center">Análisis & explicaciones</h1>
        <p className="m-6 text-center"><span className='font-bold text-green-300'>¡Bienvenido a mi vlog!</span> Acá comparto lo que voy aprendiendo sobre tecnología: apps útiles, tutoriales, ciberseguridad, redes y más. Me gusta explicar todo claro y sin vueltas, con contenido que sea útil, directo y fácil de entender.
          Si te interesa el mundo tech, seguro encontrás algo que te sirva. <span className='animate-bounce'>🚀</span> </p>
      </div>
      <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
        {VIDEO_POSTS.map((post, index) => (
          <Link
            key={post.id}
            to={`/CyberVlog/${post.id}`}
            className="no-underline"
          >
            <div
              className={`
        flex flex-col rounded-2xl overflow-hidden 
        ${index === (hoveredCard !== null ? hoveredCard : activeCard)
                  ? 'bg-green-300/20 scale-105 animate-pulse'
                  : 'bg-stone-800'
                }
        w-80 sm:w-sm h-48 items-center justify-center
        transition-all duration-300 cursor-pointer p-4
      `}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
