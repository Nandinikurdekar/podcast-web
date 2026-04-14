import { Link } from "react-router-dom";

function Navbar() {
    return ( <
        nav className = "bg-black/70 backdrop-blur-md text-white px-8 py-4 flex justify-between items-center border-b border-gray-800 sticky top-0 z-50" >

        { /* LOGO */ } <
        h2 className = "text-xl font-bold tracking-wide" >
        PodcastHub <
        /h2>

        { /* LINKS */ } <
        div className = "flex gap-8 text-sm font-medium" >

        <
        Link to = "/"
        className = "hover:text-blue-400 transition duration-200" >
        Home <
        /Link>

        <
        Link to = "/podcasts"
        className = "hover:text-blue-400 transition duration-200" >
        Podcasts <
        /Link>

        <
        Link to = "/favorites"
        className = "hover:text-blue-400 transition duration-200" >
        Favorites <
        /Link>

        <
        Link to = "/guests"
        className = "hover:text-blue-400 transition duration-200" >
        Guests <
        /Link>

        <
        Link to = "/about"
        className = "hover:text-blue-400 transition duration-200" >
        About <
        /Link>

        <
        /div>

        <
        /nav>
    );
}

export default Navbar;