import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PodcastCard from "../components/PodcastCard";

function Favorites({ setCurrentPodcast }) {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(favs);
    }, []);

    return ( <
        div className = "bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen px-6 py-10" >

        <
        motion.h1 initial = {
            { opacity: 0, y: -20 } }
        animate = {
            { opacity: 1, y: 0 } }
        transition = {
            { duration: 0.8, ease: "easeOut" } }
        className = "text-4xl font-bold mb-6" >
        Your Favorites❤️ <
        /motion.h1>

        {
            favorites.length === 0 ? ( <
                p className = "text-gray-400" > No favorites yet. < /p>
            ) : ( <
                div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" > {
                    favorites.map((pod, index) => ( <
                        motion.div key = { index }
                        initial = {
                            { opacity: 0, scale: 0.95 } }
                        animate = {
                            { opacity: 1, scale: 1 } }
                        transition = {
                            { duration: 0.6, ease: "easeOut" } } >
                        <
                        PodcastCard {...pod }
                        setCurrentPodcast = { setCurrentPodcast }
                        /> <
                        /motion.div>
                    ))
                } <
                /div>
            )
        }

        <
        /div>
    );
}

export default Favorites;