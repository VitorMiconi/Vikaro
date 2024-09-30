const BorderButton = (props) => {
    return (
        <button className='bg-none border-solid border-white border text-white py-1 px-5 font-lemon font-light'>
            {props.children}
        </button>
    )
}

export default BorderButton