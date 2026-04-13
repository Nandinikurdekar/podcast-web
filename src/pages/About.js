import { motion } from "framer-motion";

function About() {
    return ( <
        div className = "bg-black text-white min-h-screen px-6 py-10" >

        { /* TITLE */ } <
        motion.h1 initial = {
            { opacity: 0, y: -20 }
        }
        animate = {
            { opacity: 1, y: 0 }
        }
        transition = {
            { duration: 0.8, ease: "easeOut" }
        }
        className = "text-4xl font-bold mb-6" >
        About the Show <
        /motion.h1>

        { /* DESCRIPTION */ } <
        motion.p initial = {
            { opacity: 0 }
        }
        animate = {
            { opacity: 1 }
        }
        transition = {
            { duration: 0.8, ease: "easeOut" }
        }
        className = "text-gray-400 max-w-3xl mb-10" >
        This podcast platform delivers curated content across technology, business, and lifestyle.Each episode is designed to provide valuable insights, real - world experiences, and engaging discussions. <
        /motion.p>

        { /* CONTACT */ } <
        motion.div initial = {
            { opacity: 0, y: 30 }
        }
        animate = {
            { opacity: 1, y: 0 }
        }
        transition = {
            { duration: 0.8, ease: "easeOut" }
        }
        className = "bg-gray-900 p-6 rounded-xl border border-gray-800 max-w-xl" >
        <
        h2 className = "text-2xl font-semibold mb-4" >
        Contact / Guest Pitch / Sponsorship <
        /h2>

        <
        form className = "space-y-4" >

        <
        input type = "text"
        placeholder = "Your Name"
        className = "w-full p-3 bg-gray-800 rounded outline-none" /
        >

        <
        input type = "email"
        placeholder = "Your Email"
        className = "w-full p-3 bg-gray-800 rounded outline-none" /
        >

        <
        textarea placeholder = "Your Message"
        rows = "4"
        className = "w-full p-3 bg-gray-800 rounded outline-none" /
        >

        <
        button className = "bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600" >
        Submit <
        /button>                      / <
        /form> < /
        motion.div >

        <
        /div>
    );
}

export default About;

//update