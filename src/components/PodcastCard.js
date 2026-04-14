import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PodcastCard({
    id,
    title,
    duration,
    category,
    audio,
    image,
    guest,
    setCurrentPodcast
}) {
    const navigate = useNavigate();
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem("favorites")) || [];
        const exists = favs.find((item) => item.id === id);
        setIsFav(!!exists);
    }, [id]);

    function toggleFavorite(e) {
        e.stopPropagation();

        let favs = JSON.parse(localStorage.getItem("favorites")) || [];

        if (isFav) {
            favs = favs.filter((item) => item.id !== id);
        } else {
            favs.push({ id, title, duration, category, audio, image, guest });
        }

        localStorage.setItem("favorites", JSON.stringify(favs));
        setIsFav(!isFav);
    }

    function handlePlay(e) {
        e.stopPropagation();
        setCurrentPodcast({ title, audio, image });
    }

    return ( <
        div onClick = {
            () => navigate(`/episode/${id}`) }
        className = "group bg-[#0f172a] rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 cursor-pointer" >

        { /* IMAGE + OVERLAY */ } <
        div className = "relative" >
        <
        img src = { image }
        alt = { title }
        className = "w-full h-44 object-cover transition duration-500 group-hover:scale-105" /
        >

        { /* DARK OVERLAY */ } <
        div className = "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" > < /div>

        { /* PLAY BUTTON CENTER */ } <
        button onClick = { handlePlay }
        className = "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition" >
        <
        div className = "bg-white/20 backdrop-blur-md p-4 rounded-full" > ▶
        <
        /div> <
        /button> <
        /div>

        { /* CONTENT */ } <
        div className = "p-4 space-y-2" >

        <
        h2 className = "text-lg font-semibold leading-tight" > { title } <
        /h2>

        <
        p className = "text-xs text-gray-500" > { category }• { duration } <
        /p>

        <
        p className = "text-xs text-gray-400" >
        Guest: { guest } <
        /p>

        { /* ACTION ROW */ } <
        div className = "flex justify-between items-center pt-2" >

        <
        span className = "text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition" >
        Play Episode <
        /span>

        <
        button onClick = { toggleFavorite }
        className = "text-lg" >
        { isFav ? "❤️" : "🤍" } <
        /button>

        <
        /div>

        <
        /div> <
        /div>
    );
}

export default PodcastCard;