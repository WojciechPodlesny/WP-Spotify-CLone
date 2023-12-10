import { useRef } from "react";
import { Heading } from "./Heading";
import "./SongPlayer.css";

export function SongPlayer({ showControls = false, song }) {
    const audioRef = useRef();
    const { audioUrl, coverUrl } = song;

    function handlePlay() {
        audioRef.current.play();
    }

    function handlePause() {
        audioRef.current.pause();
    }
    return (
        <section className="SongPlayer">
            <Heading title="WP Music Player" />
            <img width="450" height="450" src={coverUrl} alt="Song cover" />
            <audio ref={audioRef} key={audioUrl} controls={showControls}>
                <source src={audioUrl} />
            </audio>
            <div>
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
            </div>
        </section>
    );
}
