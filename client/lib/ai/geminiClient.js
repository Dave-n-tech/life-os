"use server";
import { GoogleGenAI, Modality } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_APIKEY });

export const generateMessageContent = async (prompt) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  const res = response.text;
  return res;
};

export const generateMessageImage = async (prompt) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-preview-image-generation",
    contents: prompt,
    config: {
      responseModalities: [Modality.TEXT, Modality.IMAGE],
    },
  });

  const parts = response.candidates[0].content.parts;
  if (!parts) {
    console.error("No parts in response.");
    return null;
  }

  const imagePart = parts.find((part) => part.inlineData);
  if (imagePart) {
    const imageData = imagePart.inlineData.data;
    return { imageData };
  } else {
    console.log("No image found in the response.");
    return null;
  }
};
