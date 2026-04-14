import { useState } from "react";
import { motion } from "framer-motion";
import PodcastCard from "../components/PodcastCard";
import podcasts from "../data/podcasts";

function Podcasts({ setCurrentPodcast }) {
    const [search, setSearch] = useState("");

    const filtered = podcasts.filter((pod) =>
        pod.title.toLowerCase().includes(search.toLowerCase())
    );

    const recent = podcasts.slice(0, 2);
    const upcoming = podcasts.slice(2, 4);

    return ( <
        div className = "bg-black text-white min-h-screen px-6 py-10 space-y-12" >

        { /* TITLE */ } <
        motion.h1 initial = {
            { opacity: 0, y: 20 } }
        animate = {
            { opacity: 1, y: 0 } }
        transition = {
            { duration: 0.8 } }
        className = "text-4xl font-bold" >
        Explore Podcasts <
        /motion.h1>

        { /* SEARCH */ } <
        motion.input initial = {
            { opacity: 0 } }
        animate = {
            { opacity: 1 } }
        transition = {
            { duration: 0.8 } }
        type = "text"
        placeholder = "Search podcasts..."
        value = { search }
        onChange = {
            (e) => setSearch(e.target.value) }
        className = "w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none" /
        >

        { /* CONTINUE LISTENING */ } <
        div className = "space-y-4" >
        <
        h2 className = "text-2xl font-semibold" > Continue Listening < /h2>

        <
        div className = "grid grid-cols-2 md:grid-cols-4 gap-6" > {
            recent.map((pod) => ( <
                PodcastCard key = { pod.id } {...pod }
                setCurrentPodcast = { setCurrentPodcast }
                />
            ))
        } <
        /div> <
        /div>

        { /* RECENT */ } <
        div className = "space-y-4" >
        <
        h2 className = "text-2xl font-semibold" > Recently Released < /h2>

        <
        div className = "grid grid-cols-2 md:grid-cols-4 gap-6" > {
            recent.map((pod) => ( <
                PodcastCard key = { pod.id } {...pod }
                setCurrentPodcast = { setCurrentPodcast }
                />
            ))
        } <
        /div> <
        /div>

        { /* UPCOMING */ } <
        div className = "space-y-4" >
        <
        h2 className = "text-2xl font-semibold" > Upcoming < /h2>

        <
        div className = "grid grid-cols-2 md:grid-cols-4 gap-6" > {
            upcoming.map((pod) => ( <
                PodcastCard key = { pod.id } {...pod }
                setCurrentPodcast = { setCurrentPodcast }
                />
            ))
        } <
        /div> <
        /div>

        { /* ALL PODCASTS */ } <
        div className = "space-y-4" >
        <
        h2 className = "text-2xl font-semibold" > All Podcasts < /h2>

        <
        div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" > {
            filtered.map((pod) => ( <
                PodcastCard key = { pod.id } {...pod }
                setCurrentPodcast = { setCurrentPodcast }
                />
            ))
        } <
        /div> <
        /div>

        <
        /div>
    );
}

export default Podcasts;