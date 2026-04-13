import { motion } from "framer-motion";
import podcasts from "../data/podcasts";
import PodcastCard from "../components/PodcastCard";

function Guests({ setCurrentPodcast }) {

    const guestMap = {};

    podcasts.forEach((p) => {
        if (!guestMap[p.guest]) {
            guestMap[p.guest] = {
                image: p.guestImage,
                episodes: []
            };
        }
        guestMap[p.guest].episodes.push(p);
    });

    return ( <
        div className = "bg-black text-white min-h-screen px-6 py-10" >

        { /* TITLE */ } <
        motion.h1 initial = {
            { opacity: 0, y: 20 } }
        animate = {
            { opacity: 1, y: 0 } }
        transition = {
            { duration: 0.8, ease: "easeOut" } }
        className = "text-4xl font-bold mb-8" >
        Guests <
        /motion.h1>

        {
            Object.keys(guestMap).map((guest, index) => ( <
                motion.div key = { index }
                initial = {
                    { opacity: 0, y: 20 } }
                animate = {
                    { opacity: 1, y: 0 } }
                transition = {
                    { duration: 0.8, ease: "easeOut" } }
                className = "mb-10" >

                { /* Guest Info */ } <
                div className = "flex items-center gap-4 mb-4" >
                <
                img src = { guestMap[guest].image }
                alt = ""
                className = "w-16 h-16 rounded-full object-cover" /
                >
                <
                h2 className = "text-2xl font-semibold" > { guest } < /h2> <
                /div>

                { /* Episodes */ } <
                motion.div initial = {
                    { opacity: 0 } }
                animate = {
                    { opacity: 1 } }
                transition = {
                    { duration: 0.8, ease: "easeOut" } }
                className = "grid grid-cols-2 md:grid-cols-4 gap-4" >
                {
                    guestMap[guest].episodes.map((pod) => ( <
                        PodcastCard key = { pod.id } {...pod }
                        setCurrentPodcast = { setCurrentPodcast }
                        />
                    ))
                } <
                /motion.div>

                <
                /motion.div>
            ))
        }

        <
        /div>
    );
}

export default Guests;