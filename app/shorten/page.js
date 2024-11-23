"use client";
import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [generated, setGenerated] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "url") setUrl(value);
        if (name === "shortUrl") setShortUrl(value);
    };

    const handleGenerate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "url" : url,
            "shortUrl" : shortUrl
        })
        const requestOptions = {
            method : "POST",
            headers : myHeaders,
            body : raw,
            redirect : "follow"
        }

        fetch("http://localhost:3000/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setUrl("");
                setShortUrl("");
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
                alert(result.message);
                // console.log(result)
            })
            
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
            <div className="bg-white shadow-xl rounded-lg p-8 w-[90%] max-w-[500px]">
                <h1 className="text-center font-mono font-bold capitalize text-4xl text-gray-800 mb-6">
                Generate Your Short URLs
                </h1>
                <div className="flex flex-col gap-6">

                    <input
                        type="text"
                        name="url"
                        value={url}
                        placeholder="Enter your URL"
                        onChange={handleChange}
                        className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-all shadow-sm"
                    />


                    <input
                        type="text"
                        name="shortUrl"
                        value={shortUrl}
                        placeholder="Enter your preferred short URL"
                        onChange={handleChange}
                        className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-all shadow-sm"
                    />


                    <button
                        onClick={handleGenerate}
                        className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition-all hover:shadow-lg focus:ring-4 focus:ring-purple-300"
                    >
                        Generate
                    </button>
                    {
                        generated && (
                            <p>
                                Your short-url : <Link href={generated} target="_blank">{generated}</Link>
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Shorten;
