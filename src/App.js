import './App.css';
import React, {Component} from "react";
import Loading from "./loading.js";
import Particles from "react-tsparticles";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div style={{position: 'absolute', backgroundColor: 'transparent'}}>
                    <a  id="home"/>
                    <Particles
                        height="450vh"
                        width="100vw"
                        id="tsparticles"
                        options={{
                            "particles": {
                                "color": {
                                    "value": "#00FF00",
                                },
                                "number": {
                                    "value": 90,
                                    "density": {
                                        "enable": true,
                                        "value_area": 1500
                                    }
                                },
                                "line_linked": {
                                    "enable": true,
                                    "opacity": 0.2
                                },
                                "move": {
                                    "direction": "right",
                                    "speed": 0.3
                                },
                                "size": {
                                    "value": 1
                                },
                                "opacity": {
                                    "anim": {
                                        "enable": true,
                                        "speed": 1,
                                        "opacity_min": 0.05
                                    }
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onclick": {
                                        "enable": true,
                                        "mode": "push"
                                    }
                                },
                                "modes": {
                                    "push": {
                                        "particles_nb": 1
                                    }
                                }
                            },
                            "retina_detect": true
                        }}
                    />
                </div>
                <div className="loadingWrapper">
                    <Loading />
                </div>
            </div>
        );
    }
}

export default App;
