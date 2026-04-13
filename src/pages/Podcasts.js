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
        div className = "bg-black text-white min-h-screen px-6 py-10" >

        { /* TITLE */ } <
        motion.h1 initial = {
            { opacity: 0, y: 20 } }
        animate = {
            { opacity: 1, y: 0 } }
        transition = {
            { duration: 0.8, ease: "easeOut" } }
        className = "text-4xl font-bold mb-6" >
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
        className = "w-full mb-8 p-3 rounded bg-gray-800 outline-none" /
        >

        { /* CONTINUE LISTENING */ } <
        motion.div initial = {
            { opacity: 0, y: 20 } }
        animate = {
            { opacity: 1, y: 0 } }
        transition = {
            { duration: 0.8 } }
        className = "mb-10" >
        <
        h2 className = "text-xl mb-4" > Continue Listening < /h2>

        <
        div className = "grid grid-cols-2 md:grid-cols-4 gap-4" > {
            recent.map((pod) => ( <
                PodcastCard key = { pod.id } {...pod }
                setCurrentPodcast = { setCurrentPodcast }
                />
            ))
        } <
        /div> <
        /motion.div>

        { /* RECENT */ } <
        motion.div initial = {
            { opacity: 0, y: 20 } }
        animate = {
            { opacity: 1, y: 0 } }
        transition = {
            { duration: 0.8 } }
        className = "mb-10" >
        <
        h2 className = "text-xl mb-4" > Recently Released < /h2>

        <
        div className = "grid grid-cols-2 md:grid-cols-4 gap-4" > {
            recent.map((pod) => ( <
                PodcastCard key = { pod.id } {...pod }
                setCurrentPodcast = { setCurrentPodcast }
                />
            ))
        } <
        /div> <
        /motion.div>

        { /* UPCOMING */ } <
        motion.div initial = {
            { opacity: 0, y: 20 } }
        animate = {
            { opacity: 1, y: 0 } }
        transition = {
            { duration: 0.8 } }
        className = "mb-10" >
        <
        h2 className = "text-xl mb-4" > Upcoming < /h2>

        <
        div className = "grid grid-cols-2 md:grid-cols-4 gap-4" > {
            upcoming.map((pod) => ( <
                PodcastCard key = { pod.id } {...pod }
                setCurrentPodcast = { setCurrentPodcast }
                />
            ))
        } <
        /div> <
        /motion.div>

        { /* ALL */ } <
        motion.div initial = {
            { opacity: 0 } }
        animate = {
            { opacity: 1 } }
        transition = {
            { duration: 0.8 } } >
        <
        h2 className = "text-xl mb-4" > All Podcasts < /h2>

        <
        div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" > {
            filtered.map((pod) => ( <
                PodcastCard key = { pod.id } {...pod }
                setCurrentPodcast = { setCurrentPodcast }
                />
            ))
        } <
        /div> <
        /motion.div>

        <
        /div>
    );
}

export default Podcasts;