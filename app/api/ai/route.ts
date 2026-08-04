import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: question,
    });

    return NextResponse.json({
      answer: response.text,
    });
  } catch (error: any) {
    console.error("Gemini Error:", error);

    return NextResponse.json(
      {
        error: error?.message ?? "Unknown error",
        details: error,
      },
      {
        status: 500,
      }
    );
  }
}