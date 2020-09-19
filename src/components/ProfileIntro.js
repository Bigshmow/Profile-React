import React, { Children, useEffect } from 'react';
// import { Contact } from './Contact';

import gsap from "gsap";

export const ProfileIntro = (props) => {

    const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

    useEffect(() => {
        tl.to('.first', {y:'0%', duration: 1});
        tl.to('.text', {y:'0%', duration: 1, stagger: 0.25});
        tl.to('.slider', {y:'-100%', duration:1.5, delay: 1.25});
        tl.to('.intro', {y:'-100%', duration:1}, "-=1.25");
        tl.fromTo('.allNav', { opacity:0 }, {opacity:1, duration:1});
        tl.fromTo('.hiddenMedia', { opacity:0 }, {opacity:1, duration:1.5}, "-=1");
        tl.fromTo('.Logo', { opacity:0 }, {opacity:1, duration:1.5}, "-=1");
        tl.fromTo('.hello', { opacity:0 }, {opacity:1, duration:1.5}, "-=1");
    })

    return (
        <>
            <div className="intro">
                <div className="intro-text">
                    <h1 className="hide text-center">
                        <span className="text first"><img src="https://profile-dms-pictures.s3.amazonaws.com/DS_Logo.png"></img></span>
                    </h1>
                    <h1 className="hide">
                        <span className="text">Engineering Big Ideas</span>
                    </h1>
                    <h1 className="hide text-center">
                        <span className="text">Into Web Applications</span>
                    </h1>
                </div>
            </div>
            <div className="slider"></div>
            {props.children}
        </>
    )
}