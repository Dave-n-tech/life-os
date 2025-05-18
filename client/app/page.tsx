"use client";
import { useState } from "react";
import {
  generateMessageContent,
  generateMessageImage,
} from "../lib/ai/geminiClient";

export default function Home() {
  const [message, setMessage] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const handleClick = async () => {
    const res = await generateMessageContent(
      "Generate a one sentence motivational quote for a person who is working hard to achieve their goals."
    );
    setMessage(res ? res : "No message generated");
  };

  const generateImage = async () => {
    try {
      const prompt = await generateMessageContent(`
  Turn the following quote into a vivid image prompt: "${message}"
`);
      console.log("Prompt for image generation:", prompt);
      const result = await generateMessageImage(prompt);
      if (result?.imageData) {
        const url = `data:image/png;base64,${result.imageData}`;
        setImage(url);
      } else {
        setImage(null);
      }
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  return (
    <div>
      <h1>Hello world</h1>
      <button
        onClick={handleClick}
        className="bg-black p-2 text-white cursor-pointer"
      >
        Generate Message
      </button>
      <p>{message}</p>
      <button
        onClick={generateImage}
        className="bg-black p-2 text-white cursor-pointer"
      >
        Generate Image
      </button>
      {image && <img src={image} alt="Generated" className="w-1/2 h-auto" />}
    </div>
  );
}
