import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard';
import { projectsInfo } from './PROJECTS_INFO';

const projects = Object.values(projectsInfo);

const Proyectos = () => {
    const [isAnyHovered, setIsAnyHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(Math.floor(Math.random() * projects.length));

    useEffect(() => {
        if (isAnyHovered) return;

        const interval = setInterval(() => {
            let random;
            do {
                random = Math.floor(Math.random() * projects.length);
            } while (random === activeIndex && projects.length > 1);
            setActiveIndex(random);
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex, isAnyHovered]);

    return (
        <div className='flex flex-row items-center justify-center gap-4 flex-wrap pb-8'>
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    project={project}
                    isActive={index === activeIndex}
                    setActiveIndex={setActiveIndex}
                    setIsAnyHovered={setIsAnyHovered}
                />
            ))}
        </div>
    );
};

export default Proyectos