import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { experience } = await req.json()

  const result = `Here are your improved resume bullet points:

- Successfully ${experience.trim()} resulting in measurable business impact and improved team productivity by 30%

- Spearheaded key initiatives related to ${experience.trim()} which led to significant cost savings and process improvements

- Collaborated cross-functionally to deliver ${experience.trim()} on time and under budget, receiving recognition from senior leadership

- Leveraged technical expertise to optimise ${experience.trim()} improving overall efficiency by 40%`

  return NextResponse.json({ result })
}