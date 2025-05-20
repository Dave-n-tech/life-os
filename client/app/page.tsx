"use client";
import useAiGenerator from "./hooks/useAiGenerator";

export default function Home() {
  const {loading, errMsg, generatedText, imageUrl, generateContent} = useAiGenerator()

  return (
    <main>
      <h1>Hello world</h1>
      <button
        onClick={() => generateContent('Generate a short motivational quote for someone who is working hard on his goals.')}
        className="bg-black p-2 text-white cursor-pointer"
      >
        Generate Content
      </button>
      <p>{loading ? "loading..." : generatedText}</p>
      {imageUrl && <img src={imageUrl} alt="Generated" className="w-1/2 h-auto" />}
      {errMsg && <p className="text-red-500">{errMsg}</p>}
    </main>
  );
}
