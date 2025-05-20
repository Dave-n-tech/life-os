import { useState } from "react";
import {
  generateMotivationalMessage,
  generateImageFromPrompt,
} from "@/lib/ai/geminiClient";


const useAiGenerator = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [generatedText, setGeneratedText] = useState<string | null>(null);

  const generateContent = async (quotePrompt: string) => {
    setLoading(true);

    try {
      const text = await generateMotivationalMessage(quotePrompt);
      setGeneratedText(text ? text : "No message generated");

      const Imageprompt = await generateMotivationalMessage(`
  Turn the following quote into a vivid image prompt that perfectly represnts it visually: "${text}"
`);
      const image = await generateImageFromPrompt(Imageprompt);
      if (image?.imageData) {
        const url = `data:image/png;base64,${image.imageData}`;
        setImageUrl(url);
      } else {
        setImageUrl(null);
      }
    } catch (error) {
      console.error("Error generating AI content:", error);
      setGeneratedText(null);
      setImageUrl(null);
      setErrMsg("Error generating AI content");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading: loading,
    errMsg: errMsg,
    generatedText,
    imageUrl,
    generateContent,
  };
};

export default useAiGenerator;
