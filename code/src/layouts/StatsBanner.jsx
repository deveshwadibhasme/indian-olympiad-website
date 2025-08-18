import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faGraduationCap, faTrophy } from '@fortawesome/free-solid-svg-icons';

const Counter = ({ end, duration, startCounting }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        if (!startCounting) return;

        const animateValue = (start, end, duration) => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                setCount(Math.floor(progress * (end - start) + start));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };

        animateValue(0, end, duration);
    }, [end, duration, startCounting]);

    return <span ref={ref}>{count}+</span>;
};

const StatsBanner = () => {
    const [startCounting, setStartCounting] = useState(false);
    const bannerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCounting(true);
                    observer.disconnect(); // Stop observing once the animation starts
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the element is in view
        );

        if (bannerRef.current) {
            observer.observe(bannerRef.current);
        }

        return () => {
            if (observer && bannerRef.current) {
                observer.unobserve(bannerRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={bannerRef}
            className="bg-gradient-to-br from-blue-800 to-indigo-900 py-16 text-white relative overflow-hidden rounded-lg shadow-xl"
        >
            <div
                className="absolute inset-0 bg-blue-900 opacity-60 blur-lg"
                style={{ filter: 'blur(10px)' }}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-indigo-700 bg-opacity-75 flex items-center justify-center mb-5">
                            <FontAwesomeIcon icon={faBook} className="text-2xl text-indigo-200" />
                        </div>
                        <div className="text-4xl font-extrabold tracking-tight">
                            <Counter end={15} duration={1500} startCounting={startCounting} />
                        </div>
                        <div className="text-lg text-indigo-300 font-semibold uppercase tracking-wider">
                            Courses
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-indigo-700 bg-opacity-75 flex items-center justify-center mb-5">
                            <FontAwesomeIcon icon={faGraduationCap} className="text-2xl text-indigo-200" />
                        </div>
                        <div className="text-4xl font-extrabold tracking-tight">
                            <Counter end={1000} duration={1000} startCounting={startCounting} />
                        </div>
                        <div className="text-lg text-indigo-300 font-semibold uppercase tracking-wider">
                            Student Enrolled
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-indigo-700 bg-opacity-75 flex items-center justify-center mb-5">
                            <FontAwesomeIcon icon={faGraduationCap} className="text-2xl text-indigo-200" />
                        </div>
                        <div className="text-4xl font-extrabold tracking-tight">
                            <Counter end={50} duration={1200} startCounting={startCounting} />
                        </div>
                        <div className="text-lg text-indigo-300 font-semibold uppercase tracking-wider">
                            Qualified Teacher
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-indigo-700 bg-opacity-75 flex items-center justify-center mb-5">
                            <FontAwesomeIcon icon={faTrophy} className="text-2xl text-indigo-200" />
                        </div>
                        <div className="text-4xl font-extrabold tracking-tight">
                            <Counter end={50} duration={1800} startCounting={startCounting} />
                        </div>
                        <div className="text-lg text-indigo-300 font-semibold uppercase tracking-wider">
                            Awards
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsBanner;