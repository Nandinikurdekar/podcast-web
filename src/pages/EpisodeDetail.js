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
        motion.div initial = {
            { opacity: 0, y: 20 } }
        animate = {
            { opacity: 1, y: 0 } }
        transition = {
            { duration: 0.6 } }
        className = "bg-black text-white min-h-screen" >

        { /* HERO SECTION */ } <
        div className = "relative h-[400px] w-full overflow-hidden" >

        <
        img src = { podcast.image }
        alt = { podcast.title }
        className = "w-full h-full object-cover" /
        >

        <
        div className = "absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" > < /div>

        <
        div className = "absolute bottom-10 left-10" >

        <
        h1 className = "text-4xl font-bold mb-2" > { podcast.title } <
        /h1>

        <
        p className = "text-gray-300 mb-4" > { podcast.category }• { podcast.duration } <
        /p>

        <
        button onClick = {
            () => setCurrentPodcast(podcast) }
        className = "bg-blue-500 px-6 py-2 rounded-full hover:bg-blue-600 transition" >
        ▶Play Episode <
        /button>

        <
        /div> <
        /div>

        { /* CONTENT */ } <
        div className = "px-6 py-10 max-w-4xl mx-auto space-y-10" >

        { /* SHOW NOTES */ } <
        div >
        <
        h2 className = "text-2xl font-semibold mb-3" > Show Notes < /h2> <
        p className = "text-gray-400" >
        This episode covers important insights, discussions, and real - world applications. <
        /p> <
        /div>

        { /* CHAPTERS */ } <
        div >
        <
        h2 className = "text-2xl font-semibold mb-3" > Chapters < /h2> <
        ul className = "text-gray-400 space-y-2" >
        <
        li > 00: 00 - Introduction < /li> <
        li > 05: 30 - Topic Discussion < /li> <
        li > 15: 00 - Deep Dive < /li> <
        li > 25: 00 - Conclusion < /li> <
        /ul> <
        /div>

        { /* HOST */ } <
        div className = "bg-gray-900 p-6 rounded-2xl border border-gray-800" >
        <
        h2 className = "text-xl mb-2" > Host < /h2> <
        p className = "text-gray-400" > { podcast.host } < /p> <
        /div>

        { /* MISSION */ } <
        div className = "bg-gray-900 p-6 rounded-2xl border border-gray-800" >
        <
        h2 className = "text-xl mb-2" > Mission < /h2> <
        p className = "text-gray-400" > { podcast.mission } < /p> <
        /div>

        <
        /div>

        <
        /motion.div>
    );
}

export default EpisodeDetail;