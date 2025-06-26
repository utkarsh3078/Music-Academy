
import React from "react";
// import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36 relative">
      <div className="">
      <h1 className="text-5xl font-bold text-center m-4">Contact us</h1>
      <p className="text-center text-lg text-gray-400">
        We would love to hear from you! Please reach out with any questions or feedback.
      </p>
      <div className="flex flex-wrap justify-center">
        <textarea className="w-1/2 h-16 max-h-16 p-4 m-4 border border-gray-700 rounded-md bg-gray-800 text-gray-300" rows={4} placeholder="Your email address"></textarea>
        <textarea className="w-1/2 h-32 p-4 m-4 border border-gray-700 rounded-md bg-gray-800 text-gray-300" rows={4} placeholder="Your message..."></textarea>
      </div>
      <button className="bg-green-400 text-white p-2 rounded-md">Send Message</button>
      </div>
    </div>
  )
}

export default page
