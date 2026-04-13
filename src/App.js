import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Podcasts from "./pages/Podcasts";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import AudioPlayer from "./components/AudioPlayer";

function App() {
    const [currentPodcast, setCurrentPodcast] = useState(null);

    return ( <
            div className = "bg-black text-white min-h-screen" >

            <
            Router >

            { /* NAVBAR */ } <
            Navbar / >

            { /* ROUTES */ } <
            Routes >
            <
            Route path = "/"
            element = { < Home / > }
            />

            <
            Route path = "/podcasts"
            element = { < Podcasts setCurrentPodcast = { setCurrentPodcast }
                />} /
                >

                <
                Route
                path = "/favorites"
                element = { < Favorites setCurrentPodcast = { setCurrentPodcast }
                    />} /
                    >

                    <
                    Route path = "/about"
                    element = { < About / > }
                    /> <
                    /Routes>

                    { /* GLOBAL AUDIO PLAYER */ } {
                        currentPodcast && ( <
                            AudioPlayer podcast = { currentPodcast }
                            />
                        )
                    }

                    <
                    /Router>

                    <
                    /div>
                );
            }

            export default App;