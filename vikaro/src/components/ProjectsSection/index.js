import ProjectSquare from "../ProjectSquare"

const ProjectSection = () => {
    return (
        <div className="grid grid-cols-2 gap-4 mx-6 my-4 bg-black">
            <ProjectSquare backgroundClass="bg-custom-pj-4">ELEVE</ProjectSquare>
            <ProjectSquare backgroundClass="bg-custom-pj-4">ASCEND</ProjectSquare>
            <ProjectSquare backgroundClass="bg-custom-pj-4">SOAR</ProjectSquare>
            <ProjectSquare backgroundClass="bg-custom-pj-4">RISE</ProjectSquare>
        </div>
    )
}

export default ProjectSection


