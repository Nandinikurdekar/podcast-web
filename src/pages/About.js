import { motion } from "framer-motion";

function About() {
    return ( <
        div className = "bg-black text-white min-h-screen px-6 py-10" >

        { /* TITLE */ } <
        motion.h1 initial = {
            { opacity: 0, y: -20 } }
        animate = {
            { opacity: 1, y: 0 } }
        transition = {
            { duration: 0.8, ease: "easeOut" } }
        className = "text-4xl font-bold mb-6" >
        About Us <
        /motion.h1>

        { /* DESCRIPTION */ } <
        motion.p initial = {
            { opacity: 0 } }
        animate = {
            { opacity: 1 } }
        transition = {
            { duration: 0.8, ease: "easeOut" } }
        className = "text-gray-400 max-w-3xl mb-10" >
        This podcast platform is designed to deliver curated audio content across multiple domains like technology, business, and health.Built using React and Tailwind CSS, it provides a smooth and immersive listening experience. <
        /motion.p>

        { /* CONTACT */ } <
        motion.div initial = {
            { opacity: 0, y: 30 } }
        animate = {
            { opacity: 1, y: 0 } }
        transition = {
            { duration: 0.8, ease: "easeOut" } }
        className = "bg-gray-900 p-6 rounded-xl border border-gray-800 max-w-xl" >
        <
        h2 className = "text-2xl font-semibold mb-4" > Contact Us < /h2>

        <
        p className = "text-gray-400 mb-2" > 📧Email: support @podcastapp.com <
        /p>

        <
        p className = "text-gray-400 mb-2" > 📞Phone: +91 98765 43210 <
        /p>

        <
        p className = "text-gray-400" > 📍Location: India <
        /p> <
        /motion.div>

        <
        /div>
    );
}

export default About;