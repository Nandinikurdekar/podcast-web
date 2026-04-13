import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AudioPlayer(props) {
    const podcast = props.podcast;

    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(function() {
        if (!podcast || !audioRef.current) return;

        audioRef.current.src = podcast.audio;

        audioRef.current.play()
            .then(function() {
                setPlaying(true);
            })
            .catch(function() {
                setPlaying(false);
            });

    }, [podcast]);

    function togglePlay(e) {
        e.stopPropagation();

        if (!audioRef.current) return;

        if (playing) {
            audioRef.current.pause();
            setPlaying(false);
        } else {
            audioRef.current.play().then(function() {
                setPlaying(true);
            });
        }
    }

    var image =
        podcast && podcast.image ?
        podcast.image :
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800";

    return ( <
        >
        <
        AnimatePresence >

        { /* MINI PLAYER */ } {
            !expanded && ( <
                motion.div initial = {
                    { y: 100 } }
                animate = {
                    { y: 0 } }
                exit = {
                    { y: 100 } }
                transition = {
                    { duration: 0.3 } }
                className = "fixed bottom-0 left-0 w-full bg-gray-900 border-t border-gray-800 px-6 py-3 flex justify-between items-center cursor-pointer"
                onClick = {
                    () => setExpanded(true) } >
                <
                div style = {
                    { display: "flex", alignItems: "center", gap: "10px" } } >
                <
                img src = { image }
                alt = ""
                style = {
                    { width: "50px", height: "50px", borderRadius: "8px", objectFit: "cover" } }
                />

                <
                div >
                <
                p > { podcast ? podcast.title : "No podcast" } < /p> <
                p style = {
                    { fontSize: "12px", color: "gray" } } > Now Playing < /p> <
                /div> <
                /div>

                <
                button onClick = {
                    (e) => togglePlay(e) } > { playing ? "Pause" : "Play" } <
                /button> <
                /motion.div>
            )
        }

        { /* EXPANDED PLAYER */ } {
            expanded && ( <
                motion.div initial = {
                    { y: "100%" } }
                animate = {
                    { y: 0 } }
                exit = {
                    { y: "100%" } }
                transition = {
                    { duration: 0.4 } }
                className = "fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center" >

                <
                button onClick = {
                    () => setExpanded(false) }
                style = {
                    { position: "absolute", top: "20px", right: "20px", fontSize: "20px" } } >
                ✕
                <
                /button>

                <
                img src = { image }
                alt = ""
                style = {
                    {
                        width: "250px",
                        height: "250px",
                        borderRadius: "12px",
                        objectFit: "cover",
                        marginBottom: "20px"
                    }
                }
                />

                <
                h2 > { podcast ? podcast.title : "" } < /h2>

                <
                button onClick = {
                    (e) => togglePlay(e) }
                style = {
                    { marginTop: "20px" } } > { playing ? "Pause" : "Play" } <
                /button>

                <
                /motion.div>
            )
        }

        <
        /AnimatePresence>

        <
        audio ref = { audioRef } > < /audio> <
        />
    );
}

export default AudioPlayer;