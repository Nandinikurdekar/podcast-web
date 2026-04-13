import { useState, useEffect } from "react";

function PodcastCard({ title, duration, category, audio, image, setCurrentPodcast }) {

    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem("favorites")) || [];
        const exists = favs.find((item) => item.title === title);
        setIsFav(!!exists);
    }, [title]);

    function toggleFavorite() {
        let favs = JSON.parse(localStorage.getItem("favorites")) || [];

        if (isFav) {
            favs = favs.filter((item) => item.title !== title);
        } else {
            favs.push({ title, duration, category, audio, image });
        }

        localStorage.setItem("favorites", JSON.stringify(favs));
        setIsFav(!isFav);
    }

    return ( <
        div className = "bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all" >

        <
        img src = { image }
        alt = { title }
        className = "w-full h-40 object-cover" /
        >

        <
        div className = "p-4" >

        <
        h2 className = "text-lg font-semibold" > { title } < /h2>

        <
        p className = "text-sm text-gray-400" > { category }• { duration } <
        /p>

        <
        div className = "flex justify-between mt-3" >

        <
        button onClick = {
            () => setCurrentPodcast({ title, audio, image }) }
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