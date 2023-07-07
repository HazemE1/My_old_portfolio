import React from "react"

export default function AutoPlaySilentVideo(props: { idName: string | undefined; video: string | undefined; }) {


    return (
        <video
            id={props.idName}
            loop
            autoPlay
            muted
            onLoad={(v) => {
                v.currentTarget.defaultMuted = true;
            }}
            playsInline>

            <source src={props.video} type="video/mp4"/>
        </video>
    );
}