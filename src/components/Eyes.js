import React, { useEffect, useState, useRef } from 'react';

function Eyes (props) {
    const [pos, setPos] = useState(0);
    const eyesLeftRef = useRef();
    const eyesFwdRef = useRef();
    const eyesRightRef = useRef();
    const eyeLidsRef = useRef();

    useEffect(() => {
        let timerRef = window.setTimeout(() => {
            eyeLidsRef.current.style.visibility = "visible";
                window.setTimeout(() => {
                    eyesFwdRef.current.style.visibility = "hidden";
                    eyesRightRef.current.style.visibility = "hidden";
                    eyesLeftRef.current.style.visibility = "hidden";
                    eyeLidsRef.current.style.visibility = "hidden";
                }, 30);
                window.setTimeout(() => {
                    let roll = Math.floor(Math.random() * 100);
                    if (roll < 40) { // left eyes has 40% chance of being picked
                        eyesLeftRef.current.style.visibility = "visible";
                    } else if (roll < 80) { // right eyes has 40% chance of being picked
                        eyesRightRef.current.style.visibility = "visible";
                    } else { // fwd eyes has 20% chance of being picked
                        eyesFwdRef.current.style.visibility = "visible";
                    }
                    // if(pos === 1) {
                    //     props.showButton(true);
                    // }
                    setPos(pos + 1);
                }, 100);
        }, 3000);
        return function cleanup() {
            clearTimeout(timerRef);
        };
    }, [pos]);

    return (
      <svg
        width={`${props.size}px`}
        height={`${props.size}px`}
        viewBox={`0 0 500 500`}
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {/* <path d="M20.151 44.319h458.787v228.919H20.151z" fill="#fff"/> */}
        <g ref={eyesRightRef} id="eyesRight" transform="translate(-.733)" visibility="hidden">
        <path d="M261.126 149.392c0 26.89-15.146 65.171-31.936 83.593-16.73-21.086-42.357-31.201-71.158-34.656-24.676-2.96-48.111-3.978-89.348 11.227-3.963-3.994-19.359-30.312-19.359-60.172 0-57.25 46.41-103.66 103.661-103.66 57.251 0 108.14 46.418 108.14 103.668zM456.634 152.212c0 24.151-7.758 42.807-16.696 56.797-25.916-12.183-54.206-14.856-71.873-12.838-25.414 2.902-56.843 10.299-76.356 21.176-7.916-8.633-21.277-38.317-21.277-65.135 0-51.417 41.682-93.1 93.101-93.1 51.418 0 93.101 41.683 93.101 93.1z" fill="#fff"/>
            <path className="eyeColor" d="M237.731 159.508c0 23.767-14.172 44.07-34.155 52.161-13.261-5.502-13.984-6.866-26.763-9.692-11.396-2.52-21.977-4.278-32.02-4.832-8.646-9.934-13.918-23.141-13.918-37.637 0-30.878 23.92-55.91 53.428-55.91 29.507 0 53.428 25.032 53.428 55.91z" fill="#00d0ff"/>
            <circle cx="183.792" cy="139.126" r="54.065" transform="matrix(.73864 0 0 .79714 49.514 48.765)"/>
            <circle cx="208.603" cy="115.141" r="10.59" transform="matrix(.55467 0 0 .60283 93.122 69.247)" fill="#fffcfc"/>
            <path className="eyeColor" d="M439.576 160.348c0 18.426-9.951 32.077-24.632 39.775-9.105-1.877-11.135-2.772-22.206-3.902-7.366-.752-18.587-.716-26.133.12-6.289-5.346-16.367-19.517-16.367-35.993 0-25.947 19.999-46.981 44.669-46.981 24.67 0 44.669 21.034 44.669 46.981z" fill="#00d0ff"/>
            <circle cx="183.792" cy="139.126" r="54.065" transform="matrix(.61755 0 0 .66985 282.216 67.29)"/>
            <circle cx="368.249" cy="112.986" r="10.59" transform="matrix(.60393 0 0 .65971 188.84 67.04)" fill="#fffcfc"/>
        </g>
        <g ref={eyesLeftRef} id="eyesLeft" transform="matrix(-1 0 0 1 505.959 .375)" visibility="hidden">
        <path d="M261.126 149.392c0 26.89-15.146 65.171-31.936 83.593-16.73-21.086-42.357-31.201-71.158-34.656-24.676-2.96-48.111-3.978-89.348 11.227-3.963-3.994-19.359-30.312-19.359-60.172 0-57.25 46.41-103.66 103.661-103.66 57.251 0 108.14 46.418 108.14 103.668zM456.634 152.212c0 24.151-7.758 42.807-16.696 56.797-25.916-12.183-54.206-14.856-71.873-12.838-25.414 2.902-56.843 10.299-76.356 21.176-7.916-8.633-21.277-38.317-21.277-65.135 0-51.417 41.682-93.1 93.101-93.1 51.418 0 93.101 41.683 93.101 93.1z" fill="#fff"/>
            <path className="eyeColor" d="M237.731 159.508c0 23.767-14.172 44.07-34.155 52.161-13.261-5.502-13.984-6.866-26.763-9.692-11.396-2.52-21.977-4.278-32.02-4.832-8.646-9.934-13.918-23.141-13.918-37.637 0-30.878 23.92-55.91 53.428-55.91 29.507 0 53.428 25.032 53.428 55.91z" fill="#00d0ff"/>
            <circle cx="183.792" cy="139.126" r="54.065" transform="matrix(.73864 0 0 .79714 49.514 48.765)"/>
            <circle cx="208.603" cy="115.141" r="10.59" transform="matrix(.55467 0 0 .60283 48.096 66.678)" fill="#fffcfc"/>
            <path className="eyeColor" d="M439.576 160.348c0 18.426-9.951 32.077-24.632 39.775-9.105-1.877-11.135-2.772-22.206-3.902-7.366-.752-18.587-.716-26.133.12-6.289-5.346-16.367-19.517-16.367-35.993 0-25.947 19.999-46.981 44.669-46.981 24.67 0 44.669 21.034 44.669 46.981z" fill="#00d0ff"/>
            <circle cx="183.792" cy="139.126" r="54.065" transform="matrix(.61755 0 0 .66985 282.216 67.29)"/>
            <circle cx="368.249" cy="112.986" r="10.59" transform="matrix(.60393 0 0 .65971 157.435 65.681)" fill="#fffcfc"/>
        </g>
        <g ref={eyesFwdRef} id="eyesFwd" transform="translate(.59 -30.124)" visibility="visible">
            <circle cx="354.524" cy="187.138" r="105.15" fill="#fff"/>
            <circle cx="141.407" cy="188.327" r="100.502" fill="#fff"/>
            <circle className="eyeColor" cx="155.247" cy="195.169" r="54.401" fill="#00d0ff"/>
            <circle className="eyeColor" cx="336.355" cy="194.103" r="55.49" fill="#00d0ff"/>
            <circle cx="155.403" cy="195.005" r="38.883"/>
            <circle cx="335.261" cy="194.66" r="39.662"/>
            <circle cx="208.603" cy="115.141" r="10.59" transform="matrix(-.55467 0 0 .60283 469.238 100.637)" fill="#fffcfc"/>
            <circle cx="208.603" cy="115.141" r="10.59" transform="matrix(-.55467 0 0 .60283 286.663 101.638)" fill="#fffcfc"/>
        </g>
        <path ref={eyeLidsRef} id="eyeLids" fill="#3D90B3" d="M39.247 41.797l448.734 2.894-8.585 119.118s-74.848-52.99-115.885-56.43c-33.587-2.817-64.784 30.952-98.428 29.978-44.372-1.282-84.042-48.676-128.408-47.006-32.877 1.238-93.535 41.944-93.535 41.944l-3.893-90.498z" visibility="hidden"/>
    </svg>
    )
}

export default Eyes;