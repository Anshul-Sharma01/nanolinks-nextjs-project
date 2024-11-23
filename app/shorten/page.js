"use client";
import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [generated, setGenerated] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "url") setUrl(value);
        if (name === "shortUrl") setShortUrl(value);
    };

    const handleGenerate = () => {
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            url: url,
            shortUrl: shortUrl,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch("http://localhost:3000/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setUrl("");
                setShortUrl("");
                if(result.message == "Short URL already exists!"){
                    alert(result.message);
                    setLoading(false);
                    return;
                }
                alert(result.message);
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
            <div className="bg-white shadow-2xl rounded-lg p-8 w-[90%] max-w-[500px] transform transition-transform duration-500 hover:scale-105">
                <h1 className="text-center font-sans font-bold capitalize text-4xl text-gray-800 mb-8">
                    Generate Your Short URLs
                </h1>
                <div className="flex flex-col gap-6">
                    <input
                        type="text"
                        name="url"
                        value={url}
                        placeholder="Enter your URL"
                        onChange={handleChange}
                        className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all shadow-sm"
                    />

                    <input
                        type="text"
                        name="shortUrl"
                        value={shortUrl}
                        placeholder="Enter your preferred short URL"
                        onChange={handleChange}
                        className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all shadow-sm"
                    />

                    <button
                        onClick={handleGenerate}
                        disabled={loading}
                        className={`px-6 py-3 ${
                            loading ? "bg-gray-400" : "bg-purple-500 hover:bg-purple-600"
                        } text-white font-semibold rounded-lg shadow-md transition-all focus:ring-4 focus:ring-purple-300 ${
                            loading ? "cursor-not-allowed" : "hover:shadow-lg"
                        }`}
                    >
                        {loading ? "Generating..." : "Generate"}
                    </button>

                    {generated && (
                        <div className="text-center mt-4 p-4 bg-purple-100 text-purple-800 rounded-lg shadow-md">
                            <p className="font-semibold text-lg">
                                Your Short URL:
                                <Link
                                    href={generated}
                                    target="_blank"
                                    className="text-blue-600 underline ml-2 hover:text-blue-800 transition-colors"
                                >
                                    {generated}
                                </Link>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Shorten;
