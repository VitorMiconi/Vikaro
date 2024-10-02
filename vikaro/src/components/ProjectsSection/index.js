import ProjectSquare from "../ProjectSquare"

const ProjectSection = () => {
    return (
        <div className="flex flex-col sm:grid grid-cols-2 gap-4 mx-6 my-6 bg-black h-screen">
            <ProjectSquare backgroundClass="bg-custom-pj-4">ELEVE</ProjectSquare>
            <ProjectSquare backgroundClass="bg-custom-pj-4">ASCEND</ProjectSquare>
            <ProjectSquare backgroundClass="bg-custom-pj-4">SOAR</ProjectSquare>
            <ProjectSquare backgroundClass="bg-custom-pj-4">RISE</ProjectSquare>
        </div>
    )
}

export default ProjectSection


