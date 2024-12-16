'use client';

// pages/index.js or pages/page.js
import { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/users');  // Call the API endpoint
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {data ? JSON.stringify(data) : "Loading..."}
        </div>
    );
}
