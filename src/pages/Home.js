import { motion } from "framer-motion";
import podcasts from "../data/podcasts";
import PodcastCard from "../components/PodcastCard";

function Home({ setCurrentPodcast }) {

    const latest = podcasts && podcasts.length > 0 ? podcasts[0] : null;

    return ( <
        div className = "bg-black text-white min-h-screen px-6 py-10" >

        <
        motion.div initial = {
            { opacity: 0, y: 20 } }
        animate = {
            { opacity: 1, y: 0 } }
        transition = {
            { duration: 0.8, ease: "easeOut" } }
        className = "mb-12" >
        <
        h1 className = "text-5xl font-bold mb-4" >
        Discover Amazing Podcasts🎧 <
        /h1>

        <
        p className = "text-gray-400 max-w-2xl" >
        Listen to curated podcasts across tech, business, and lifestyle. <
        /p> <
        /motion.div>

        {
            latest && ( <
                motion.div initial = {
                    { opacity: 0, y: 20 } }
                animate = {
                    { opacity: 1, y: 0 } }
                transition = {
                    { duration: 0.8, ease: "easeOut" } }
                className = "mb-12" >
                <
                h2 className = "text-2xl font-semibold mb-4" > Latest Episode < /h2>

                <
                PodcastCard {...latest }
                setCurrentPodcast = { setCurrentPodcast }
                /> <
                /motion.div>
            )
        }

        <
        motion.div initial = {
            { opacity: 0 } }
        animate = {
            { opacity: 1 } }
        transition = {
            { duration: 0.8, ease: "easeOut" } } >
        <
        h2 className = "text-xl mb-4" > Listen On < /h2>

        <
        div className = "flex gap-4" >
        <
        button className = "bg-green-500 px-4 py-2 rounded-lg" > Spotify < /button> <
        button className = "bg-purple-500 px-4 py-2 rounded-lg" > Apple < /button> <
        button className = "bg-red-500 px-4 py-2 rounded-lg" > YouTube < /button> <
        /div> <
        /motion.div>

        <
        /div>
    );
}

export default Home;