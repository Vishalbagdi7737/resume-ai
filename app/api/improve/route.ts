import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { experience } = await req.json()

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a professional resume writer. 
Rewrite the following work experience into 4 powerful 
professional resume bullet points.
Use strong action verbs and add measurable results.
Start each bullet point with •

Experience:
${experience}

Write only the 4 bullet points. Nothing else.`,
                },
              ],
            },
          ],
        }),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      console.error("Gemini error:", JSON.stringify(data))
      return NextResponse.json(
        { result: "Something went wrong. Please try again." },
        { status: 500 }
      )
    }

    const text = data.candidates[0].content.parts[0].text
    return NextResponse.json({ result: text })

  } catch (error: any) {
    console.error("Error:", error?.message)
    return NextResponse.json(
      { result: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}