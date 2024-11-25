import React from "react";

const YouTubeEmbed = () => {
    return (
        <div className="w-full mt-20">
            <div className="py-6 text-center">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                    Discover Our Journey
                </h2>
            </div>

            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                {/* Responsive iframe for 16:9 aspect ratio */}
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
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
