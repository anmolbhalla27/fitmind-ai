export async function askAi(question: string): Promise<string> {
  const response = await fetch("/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Status:", response.status);
    console.error("Response:", data);

    throw new Error(data.error ?? "Failed to get AI response.");
  }

  return data.answer;
}