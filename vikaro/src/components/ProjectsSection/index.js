import ProjectSquare from "../ProjectSquare"

const ProjectSection = () => {
    return (
        <div className="flex flex-col lg:grid grid-cols-2 gap-4 px-6 py-6 bg-black h-screen"data-aos="fade-in" id="projects">
            <ProjectSquare backgroundClass="bg-custom-golisk">ELEVE</ProjectSquare>
            <ProjectSquare backgroundClass="bg-custom-pj-4">ASCEND</ProjectSquare>
            <ProjectSquare backgroundClass="bg-custom-pj-4">SOAR</ProjectSquare>
            <ProjectSquare backgroundClass="bg-custom-pj-4">RISE</ProjectSquare>
        </div>
    )
}

export default ProjectSection


