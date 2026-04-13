import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import podcasts from "../data/podcasts";

function EpisodeDetail({ setCurrentPodcast }) {
    const { id } = useParams();

    const podcast = podcasts.find((p) => p.id === parseInt(id));

    if (!podcast) {
        return <div className = "text-white p-10" > Loading... < /div>;
    }

    return ( <
        div className = "bg-black text-white min-h-screen px-6 py-10" >

        <
        motion.div initial = {
            { opacity: 0, y: 20 }
        }
        animate = {
            { opacity: 1, y: 0 }
        }
        transition = {
            { duration: 0.8 }
        }
        className = "max-w-4xl mx-auto" >

        <
        img src = { podcast.image }
        alt = { podcast.title }
        className = "w-full h-80 object-cover rounded-xl mb-6" /
        >

        <
        h1 className = "text-3xl font-bold mb-3" > { podcast.title } < /h1>

        <
        p className = "text-gray-400 mb-4" > { podcast.category }• { podcast.duration } <
        /p>

        <
        button onClick = {
            () => setCurrentPodcast(podcast)
        }
        className = "bg-blue-500 px-6 py-2 rounded-lg mb-6" > ▶Play Episode <
        /button>

        { /* SHOW NOTES */ } <
        div className = "mb-6" >
        <
        h2 className = "text-xl mb-2" > Show Notes < /h2> <
        p className = "text-gray-400" >
        This episode covers important insights, discussions, and real - world applications. <
        /p> < /
        div > { /* HOST */ } <
        div className = "bg-gray-900 p-5 rounded-xl mb-6" >
        <
        h2 className = "text-xl mb-2" > Host < /h2> <
        p className = "text-gray-400" > { podcast.host } <
        /p> < /
        div >

        { /* MISSION */ } <
        div className = "bg-gray-900 p-5 rounded-xl mb-6" >
        <
        h2 className = "text-xl mb-2" > Mission < /h2> <
        p className = "text-gray-400" > { podcast.mission } <
        /p> < /
        div > { /* CHAPTERS */ } <
        div className = "mb-6" >
        <
        h2 className = "text-xl mb-2" > Chapters < /h2> <
        ul className = "text-gray-400 space-y-2" >
        <
        li > 00: 00 - Introduction < /li> <
        li > 05: 30 - Topic Discussion < /li> <
        li > 15: 00 - Deep Dive < /li> <
        li > 25: 00 - Conclusion < /li> < /
        ul > <
        /div>

        <
        /motion.div>

        <
        /div>
    );
}

export default EpisodeDetail;