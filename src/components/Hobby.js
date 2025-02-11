const Hobby = ({hobbyData}) => {

    const {title, description, icon} = hobbyData;

    return (
        <div className="ml-16 md:ml-10 m-10 p-6 md:p-10 w-64 h-64 md:w-80 md:h-80 border-4 border-crimson bg-crimson shadow-sm text-center text-black hover:bg-[#f8efef] hover:text-crimson rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            <img src={icon} className="ml-12 md:ml-14 w-1/2 h-1/2 object-cover border-4 rounded-full" />
            <h3 className=" py-3 font-bold font-sans md:text-xl">{title}</h3>
            <p className="text-sm md:text-lg">{description}</p>
        </div>
    )
}

export default Hobby;