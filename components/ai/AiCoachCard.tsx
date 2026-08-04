"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { askAi } from "@/services/aiService";

export default function AiCoachCard() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAsk() {
    if (!question.trim()) {
      return;
    }

    try {
      setLoading(true);

      const response = await askAi(question);

      setAnswer(response);
    } catch (error) {
      console.error(error);
      setAnswer("Sorry, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl">
          🤖
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            AI Fitness Coach
          </h2>

          <p className="text-sm text-gray-500">
            Ask anything about workouts, nutrition, recovery or fitness.
          </p>
        </div>
      </div>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows={4}
        placeholder="Example: How can I increase my bench press?"
        className="w-full rounded-xl border border-gray-300 p-4 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />

      <button
        onClick={handleAsk}
        disabled={loading}
        className="mt-4 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {loading && (
        <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4">
          <div className="flex items-center gap-2 text-blue-700">
            <span className="animate-pulse text-xl">🤖</span>

            <span>Generating your personalized fitness advice...</span>
          </div>
        </div>
      )}

      {!loading && answer && (
        <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-xl">💡</span>

            <h3 className="text-lg font-semibold text-gray-900">
              AI Response
            </h3>
          </div>

          <article className="prose max-w-none text-gray-900
                    prose-headings:text-gray-900
                    prose-p:text-gray-700
                    prose-strong:text-gray-900
                    prose-li:text-gray-700
                    prose-ul:text-gray-700
                    prose-ol:text-gray-700
                    prose-code:text-pink-600">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {answer}
            </ReactMarkdown>
          </article>
        </div>
      )}
    </div>
  );
}