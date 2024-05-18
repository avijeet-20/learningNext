"use client"
import { useState } from "react"

;

export default function Interactive() {
    const [count,setCount] = useState(0);

    return (
        <div>
            <h1 className="w-full flex justify-center font-bold text-2xl">Welcome to Interactive Page</h1>
            <p className="mt-12">This route features a count button that demonstrates the<br></br> power of client-side interactiviity in Next.js. Click the button<br></br>
            and see the count ho up! This interactive feature is powered<br></br> by the  "use client" directive in Next.js, which allows this<br></br> component to be rendered on the client-side </p>
        
        <button onClick={() => setCount(count+1)} className="rounded-md bg-black text-white p-4 mt-4 w-full">click me {count}</button>
        </div>

    )
}