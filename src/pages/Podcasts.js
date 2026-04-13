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
        div className = "bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen px-6 py-10" >

        { /* TITLE */ } <
        motion.h1 initial = {
            { opacity: 0, y: -20 } }
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
            { duration: 0.8, ease: "easeOut" } }
        type = "text"
        placeholder = "Search podcasts..."
        value = { search }
        onChange = {
            (e) => setSearch(e.target.value) }
        className = "w-full mb-10 p-3 rounded-xl bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none" /
        >

        {
            search ? (

                <
                div >
                <
                h2 className = "text-xl font-semibold mb-4" > Search Results < /h2>

                <
                div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" > {
                    filtered.length > 0 ? (
                        filtered.map((pod) => ( <
                            PodcastCard key = { pod.id } {...pod }
                            setCurrentPodcast = { setCurrentPodcast }
                            />
                        ))
                    ) : ( <
                        p className = "text-gray-400" > No results found. < /p>
                    )
                } <
                /div> <
                /div>

            ) : (

                <
                > { /* Continue Listening */ } <
                motion.div initial = {
                    { opacity: 0, y: 30 } }
                animate = {
                    { opacity: 1, y: 0 } }
                transition = {
                    { duration: 0.8, ease: "easeOut" } }
                className = "mb-10" >
                <
                h2 className = "text-xl font-semibold mb-4" > Continue Listening < /h2>

                <
                div className = "grid grid-cols-2 md:grid-cols-4 gap-5" > {
                    recent.map((pod) => ( <
                        PodcastCard key = { pod.id } {...pod }
                        setCurrentPodcast = { setCurrentPodcast }
                        />
                    ))
                } <
                /div> <
                /motion.div>

                { /* Recently Released */ } <
                motion.div initial = {
                    { opacity: 0, y: 30 } }
                animate = {
                    { opacity: 1, y: 0 } }
                transition = {
                    { duration: 0.8, ease: "easeOut" } }
                className = "mb-10" >
                <
                h2 className = "text-xl font-semibold mb-4" > Recently Released < /h2>

                <
                div className = "grid grid-cols-2 md:grid-cols-4 gap-5" > {
                    recent.map((pod) => ( <
                        PodcastCard key = { pod.id } {...pod }
                        setCurrentPodcast = { setCurrentPodcast }
                        />
                    ))
                } <
                /div> <
                /motion.div>

                { /* Upcoming */ } <
                motion.div initial = {
                    { opacity: 0, y: 30 } }
                animate = {
                    { opacity: 1, y: 0 } }
                transition = {
                    { duration: 0.8, ease: "easeOut" } }
                className = "mb-10" >
                <
                h2 className = "text-xl font-semibold mb-4" > Upcoming Podcasts < /h2>

                <
                div className = "grid grid-cols-2 md:grid-cols-4 gap-5" > {
                    upcoming.map((pod) => ( <
                        PodcastCard key = { pod.id } {...pod }
                        setCurrentPodcast = { setCurrentPodcast }
                        />
                    ))
                } <
                /div> <
                /motion.div>

                { /* All Podcasts */ } <
                motion.div initial = {
                    { opacity: 0 } }
                animate = {
                    { opacity: 1 } }
                transition = {
                    { duration: 0.8, ease: "easeOut" } } >
                <
                h2 className = "text-xl font-semibold mb-4" > All Podcasts < /h2>

                <
                div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" > {
                    filtered.map((pod) => ( <
                        PodcastCard key = { pod.id } {...pod }
                        setCurrentPodcast = { setCurrentPodcast }
                        />
                    ))
                } <
                /div> <
                /motion.div> <
                />
            )
        }

        <
        /div>
    );
}

export default Podcasts;