import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { resume } = await req.json()

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are an expert resume analyzer. Analyze this resume and respond in this EXACT format:

SCORE: [number between 0-100]

STRENGTHS:
- [strength 1]
- [strength 2]
- [strength 3]

WEAKNESSES:
- [weakness 1]
- [weakness 2]
- [weakness 3]

SUGGESTIONS:
- [suggestion 1]
- [suggestion 2]
- [suggestion 3]

Resume to analyze:
${resume}

Respond ONLY in the exact format above. Nothing else.`
            }]
          }]
        }),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      )
    }

    const text = data.candidates[0].content.parts[0].text
    return NextResponse.json({ result: text })

  } catch (error: any) {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}