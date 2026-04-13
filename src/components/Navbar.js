import { Link } from "react-router-dom";
import { HomeIcon, MicrophoneIcon, HeartIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

function Navbar() {
    return ( <
        nav className = "bg-black/60 backdrop-blur-md text-white px-8 py-4 flex justify-between items-center border-b border-gray-800" >

        <
        h1 className = "text-2xl font-bold tracking-tight text-blue-400" > 🎧PodcastHub <
        /h1>

        <
        div className = "flex items-center gap-6" >

        <
        Link to = "/"
        className = "flex items-center gap-1 hover:text-blue-400 transition-all" >
        <
        HomeIcon className = "w-5 h-5" / >
        Home <
        /Link>

        <
        Link to = "/podcasts"
        className = "flex items-center gap-1 hover:text-blue-400 transition-all" >
        <
        MicrophoneIcon className = "w-5 h-5" / >
        Podcasts <
        /Link>

        <
        Link to = "/favorites"
        className = "flex items-center gap-1 hover:text-blue-400 transition-all" >
        <
        HeartIcon className = "w-5 h-5" / >
        Favorites <
        /Link>

        <
        Link to = "/about"
        className = "flex items-center gap-1 hover:text-blue-400 transition-all" >
        <
        InformationCircleIcon className = "w-5 h-5" / >
        About <
        /Link>

        <
        /div> <
        /nav>
    );
}

export default Navbar;