import React, { useRef, useEffect } from "react";

const YouTubeEmbed = () => {
    const iframeRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries) => {
            const [entry] = entries;
            const iframe = iframeRef.current?.contentWindow;

            if (iframe) {
                if (entry.isIntersecting) {
                    iframe.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                } else {
                    iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                }
            }
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5, // Trigger when 50% of the video is visible
        });

        if (iframeRef.current) {
            observer.observe(iframeRef.current.parentElement);
        }

        return () => {
            if (iframeRef.current) {
                observer.unobserve(iframeRef.current.parentElement);
            }
        };
    }, []);

    return (
        <div className="w-full mt-20">
            <div className="py-6 text-center">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                    Discover Our Journey
                </h2>
            </div>

            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                    ref={iframeRef}
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/_FIVrsKCXM8?enablejsapi=1" // Add enablejsapi=1
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default YouTubeEmbed;
