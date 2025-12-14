import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateChatResponse = async (history: { role: 'user' | 'model', text: string }[], message: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are "Momo", the creative assistant for "Motion for Mobile", a high-end social media motion graphics agency. 
        
        Tone: Energetic, professional, punchy, and helpful. Use emojis sparingly but effectively.
        
        Key Services:
        - Tailored Creative for Social Media
        - Motion Graphics
        - Strategy (Chat, Choose, Create, Channel)
        - High-end production value
        
        Goal: Encourage the user to start a project with us. If they ask about pricing, say it depends on the scope but we offer tailored solutions.
        
        Keep responses concise (under 50 words unless asked for detail).`,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Whoops! Looks like our creative wires got crossed. Try asking again in a moment!";
  }
};