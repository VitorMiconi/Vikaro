import './ProjectSquare.css';

const ProjectSquare = ({ backgroundClass, children }) => {
    return (
        <div className={`w-full cursor-pointer ${backgroundClass} bg-no-repeat bg-cover h-[50vh] relative transition-all duration-500 group`}>
            <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white text-xl">
                <div className='flex flex-col gap-1'>
                    <h1 className="text-8xl font-medium">{children}</h1>
                    <p className='font-lemon font-light mx-1'>Clique para ver o projeto</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSquare;
