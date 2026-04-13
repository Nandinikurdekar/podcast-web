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

    // check if already favorite
    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem("favorites")) || [];
        const exists = favs.find((item) => item.id === id);
        setIsFav(!!exists);
    }, [id]);

    // toggle favorite
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

    // play podcast
    function handlePlay(e) {
        e.stopPropagation();
        setCurrentPodcast({ title, audio, image });
    }

    return ( <
        div onClick = {
            () => navigate(`/episode/${id}`) }
        className = "bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all cursor-pointer" >
        <
        img src = { image }
        alt = { title }
        className = "w-full h-40 object-cover" /
        >

        <
        div className = "p-4" >

        <
        h2 className = "text-lg font-semibold" > { title } < /h2>

        { /* ✅ Guest added */ } <
        p className = "text-xs text-gray-500 mb-1" >
        Guest: { guest } <
        /p>

        <
        p className = "text-sm text-gray-400" > { category }• { duration } <
        /p>

        <
        div className = "flex justify-between mt-3" >

        <
        button onClick = { handlePlay }
        className = "bg-blue-500 px-3 py-1 rounded-lg" >
        ▶Play <
        /button>

        <
        button onClick = { toggleFavorite }
        className = "text-xl" >
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