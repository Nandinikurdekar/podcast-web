import { Link } from "react-router-dom";

function Navbar() {
    return ( <
        nav className = "bg-black text-white px-6 py-4 flex justify-between items-center border-b border-gray-800" >

        <
        h2 className = "text-xl font-bold" > PodcastHub < /h2>

        <
        div className = "flex gap-6" >

        <
        Link to = "/"
        className = "hover:text-blue-400" >
        Home <
        /Link>

        <
        Link to = "/podcasts"
        className = "hover:text-blue-400" >
        Podcasts <
        /Link>

        <
        Link to = "/favorites"
        className = "hover:text-blue-400" >
        Favorites <
        /Link> <
        Link to = "/guests" > Guests < /Link> <
        Link to = "/about"
        className = "hover:text-blue-400" >
        About <
        /Link>

        <
        /div>

        <
        /nav>
    );
}

export default Navbar;