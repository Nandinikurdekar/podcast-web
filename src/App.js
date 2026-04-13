import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Podcasts from "./pages/Podcasts";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import AudioPlayer from "./components/AudioPlayer";
import Guests from "./pages/Guests";

import EpisodeDetail from "./pages/EpisodeDetail";


function App() {
    const [currentPodcast, setCurrentPodcast] = useState(null);

    return ( <
            div className = "bg-black text-white min-h-screen" >

            <
            Router >

            <
            Navbar / >

            { /* ✅ ALL ROUTES MUST BE INSIDE <Routes> */ } <
            Routes >

            <
            Route path = "/"
            element = { < Home setCurrentPodcast = { setCurrentPodcast }
                />} / >
                <
                Route
                path = "/guests"
                element = { < Guests setCurrentPodcast = { setCurrentPodcast }
                    />}  /
                    >
                    <
                    Route
                    path = "/podcasts"
                    element = { < Podcasts setCurrentPodcast = { setCurrentPodcast }
                        />} / >

                        <
                        Route
                        path = "/favorites"
                        element = { < Favorites setCurrentPodcast = { setCurrentPodcast }
                            />} / >

                            <
                            Route
                            path = "/about"
                            element = { < About / > }
                            />

                            <
                            Route
                            path = "/episode/:id"
                            element = { < EpisodeDetail setCurrentPodcast = { setCurrentPodcast }
                                />} / >



                                <
                                /Routes>

                                { /* PLAYER */ } {
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