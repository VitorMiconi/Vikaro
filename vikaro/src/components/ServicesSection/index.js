

import BorderButton from "../BorderButton"

const ServicesSection = () => {
    return (
        <div className="font-light text-white w-full px-6 flex flex-col sm:flex-row gap-6 pb-6">
            <div className="w-full sm:w-3/5" >
                <img className="w-full" src="/img/services-example-2.png" alt="Services Example"></img>
            </div>
            <div className="w-full sm:w-2/5 flex flex-col justify-between">
                <h2 className="text-6xl font-lemon font-medium">ELEVE</h2>
                <div className="flex flex-col gap-6 py-6">
                    <p className="font-montserrat">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?</p>
                    <p className="font-montserrat">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?</p>
                </div>
                <div>
                    <BorderButton>CONTATO</BorderButton>
                </div>
            </div>
        </div>
    )
}


export default ServicesSection;
