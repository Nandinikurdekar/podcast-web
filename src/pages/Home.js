import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
    return ( <
        div className = "relative bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen flex flex-col items-center justify-center text-center px-6" >

        { /* Heading */ } <
        motion.h1 initial = {
            { opacity: 0, y: 30 } }
        animate = {
            { opacity: 1, y: 0 } }
        transition = {
            { duration: 0.6 } }
        className = "text-5xl md:text-7xl font-extrabold tracking-tight mb-6" >
        Discover the World of Podcasts <
        /motion.h1>

        { /* Subtitle */ } <
        motion.p initial = {
            { opacity: 0 } }
        animate = {
            { opacity: 1 } }
        transition = {
            { delay: 0.3 } }
        className = "text-gray-400 max-w-2xl mb-8 text-lg" >
        Dive into curated audio experiences.Learn, explore, and stay inspired. <
        /motion.p>

        { /* Button */ } <
        motion.div initial = {
            { opacity: 0, scale: 0.9 } }
        animate = {
            { opacity: 1, scale: 1 } }
        transition = {
            { delay: 0.5 } } >
        <
        Link to = "/podcasts"
        className = "bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg text-lg transition-all" >
        Explore Podcasts <
        /Link> <
        /motion.div>

        { /* Floating Cards */ } <
        div className = "absolute bottom-10 flex gap-6 opacity-20" >

        <
        div className = "w-24 h-24 bg-gray-800 rounded-xl animate-bounce" > < /div> <
        div className = "w-24 h-24 bg-gray-800 rounded-xl animate-bounce delay-200" > < /div> <
        div className = "w-24 h-24 bg-gray-800 rounded-xl animate-bounce delay-500" > < /div>

        <
        /div>

        <
        /div>
    );
}

export default Home;