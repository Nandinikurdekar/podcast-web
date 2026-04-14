import { useRef, useState, useEffect } from "react";

function AudioPlayer({ podcast }) {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        if (!podcast || !audioRef.current) return;

        audioRef.current.src = podcast.audio;

        audioRef.current.play()
            .then(() => setPlaying(true))
            .catch(() => setPlaying(false));
    }, [podcast]);

    function togglePlay(e) {
        if (e) e.stopPropagation();

        if (!audioRef.current) return;

        if (playing) {
            audioRef.current.pause();
            setPlaying(false);
        } else {
            audioRef.current.play().then(() => setPlaying(true));
        }
    }

    return ( <
        div >

        { /* MINI PLAYER */ } {
            !expanded && podcast && ( <
                div onClick = {
                    () => setExpanded(true) }
                className = "fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-md border-t border-gray-800 px-6 py-4 flex justify-between items-center cursor-pointer shadow-2xl" >
                <
                div className = "flex items-center gap-4" >
                <
                img src = { podcast.image }
                alt = { podcast.title }
                className = "w-14 h-14 rounded-lg object-cover" /
                >

                <
                div >
                <
                p className = "font-medium" > { podcast.title } < /p> <
                p className = "text-sm text-gray-400" > Now Playing < /p> <
                /div> <
                /div>

                <
                button onClick = { togglePlay }
                className = "bg-blue-500 px-5 py-2 rounded-full hover:bg-blue-600 transition" >
                { playing ? "Pause" : "Play" } <
                /button> <
                /div>
            )
        }

        { /* EXPANDED PLAYER */ } {
            expanded && podcast && ( <
                div className = "fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center" >

                <
                img src = { podcast.image }
                alt = { podcast.title }
                className = "w-72 h-72 rounded-2xl object-cover mb-6 shadow-lg" /
                >

                <
                h2 className = "text-2xl font-semibold mb-2" > { podcast.title } <
                /h2>

                <
                p className = "text-gray-400 mb-6" > Now Playing < /p>

                <
                button onClick = { togglePlay }
                className = "bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600 transition mb-6" >
                { playing ? "Pause" : "Play" } <
                /button>

                { /* CLOSE BUTTON (BOTTOM) */ } <
                button onClick = {
                    () => setExpanded(false) }
                className = "bg-gray-800 px-6 py-2 rounded-full hover:bg-gray-700 transition" >
                Close Player <
                /button>

                <
                /div>
            )
        }

        <
        audio ref = { audioRef } > < /audio>

        <
        /div>
    );
}

export default AudioPlayer;