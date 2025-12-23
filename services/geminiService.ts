
import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse } from "../types";

export const generateLetterContent = async (internshipName: string): Promise<AIResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate a list of 4 key functions and 3 specific responsibilities for a professional internship offer letter for the role: ${internshipName}. 
    Keep the tone professional, encouraging, and clear.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          functions: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of 4 items the intern will gain exposure to or work under."
          },
          responsibilities: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of 3 key responsibilities the intern will have."
          }
        },
        required: ["functions", "responsibilities"]
      }
    }
  });

  try {
    const jsonStr = response.text.trim();
    return JSON.parse(jsonStr) as AIResponse;
  } catch (error) {
    console.error("Failed to parse AI response:", error);
    // Fallback content based on the original template
    return {
      functions: [
        "Assist in real-time " + internshipName + " projects.",
        "Work under the guidance of industry experts.",
        "Learn and apply relevant industry concepts to practical business problems.",
        "Participate in team discussions and training sessions."
      ],
      responsibilities: [
        "Assisting in " + internshipName + " research and development tasks.",
        "Collaborating on implementation of solutions within the team.",
        "Coordinating with teams for seamless execution of operational activities."
      ]
    };
  }
};
