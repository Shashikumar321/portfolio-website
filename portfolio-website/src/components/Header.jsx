import { Link } from 'react-scroll';

const Header = () => {
    return (
        <>
            <div className="fixed top-0 left-0 w-full bg-crimson text-white shadow-md flex justify-between items-center px-8 py-4">
                <div className="">Portfolio.</div>
                    <div>
                    <ul className="flex space-x-6">
                        <li><Link to="introduction" smooth={true} duration={500} className="font-bold  hover:text-red-300 cursor-pointer">Home</Link></li>
                        <li><Link to="about" smooth={true} duration={500} className="font-bold  hover:text-red-300 cursor-pointer">About</Link></li>
                        <li><Link to="skills" smooth={true} duration={500} className="font-bold  hover:text-red-300 cursor-pointer">Skills</Link></li>
                        <li><Link to="experience" smooth={true} duration={500} className="font-bold  hover:text-red-300 cursor-pointer">Experience</Link></li>
                        <li><Link to="projects" smooth={true} duration={500} className="font-bold  hover:text-red-300 cursor-pointer">Projects</Link></li>
                        <li><Link to="hobbies" smooth={true} duration={500} className="font-bold  hover:text-red-300 cursor-pointer">Hobbies</Link></li>
                        <li><Link to="contact" smooth={true} duration={500} className="font-bold  hover:text-red-300 cursor-pointer">Contact</Link></li>
                    </ul>
                    </div>
                </div>
        </>
    )
}

export default Header;
