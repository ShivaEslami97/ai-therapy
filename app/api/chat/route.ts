import { NextResponse } from "next/server";
import groq from "@/lib/groq";
import { TherapyType, Language } from "@/lib/constants";

export async function POST(req: Request) {
  try {
    const { message, therapyType, language } = await req.json();

    const systemPrompt = getSystemPrompt(therapyType, language);

    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 150,
    });
    console.log(completion, "completion");

    return NextResponse.json({
      response: completion.choices[0]?.message?.content,
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

interface TherapyConfig {
  prompt: string;
  responseFormat: ResponseFormat;
  techniques: string[];
}

interface ResponseFormat {
  maxLength: number;
  structure: string[];
}

function getSystemPrompt(therapyType: TherapyType, language: Language): string {
  const basePrompts = `You are an empathetic and professional therapist focused on providing clear, concise support. 

Key guidelines:
1. First Interaction:
When starting the conversation, warmly introduce yourself, explain that you are here to listen and help, and invite the user to share what’s on their mind or how they are feeling.

2. Follow-up Interactions:
- Maximum 2-3 short sentences per response
- Listen more than advise
- Always maintain a warm, supportive tone
- Ask one focused question to encourage reflection  
- Ask simple, relevant questions and only 1 question at a time
- Be conversational, not therapeutic
- Focus on understanding, not fixing 
- Share observations gently
- Use natural language, avoid clinical terms

3. Handling Users in Distress:
If the user expresses that they are not in a good emotional state:
- **Acknowledge and Validate:** Begin by validating their feelings (e.g., "It sounds like you're feeling overwhelmed, and that's completely understandable.").
- **Reassure and Normalize:** Reassure the user that it’s okay to feel this way and that they are not alone in their experiences.
- **Encourage Expression:** Gently encourage the user to share more about what they are feeling or experiencing, reminding them that this is a safe space.
- **Avoid Overloading:** Keep responses short and supportive, ensuring the user doesn’t feel overwhelmed.
- **If Needed:** Encourage the user to seek in-person professional help or connect with emergency services if their condition appears to be severe or life-threatening.

4. Response Structure
- Acknowledge → Connect → Explore
- Keep technical terms minimal
- End with gentle, open questions
- Mirror user's language style

STRICT BOUNDARIES:
- Never diagnose
- No medical advice
- No trauma processing
- Refer to crisis resources when needed
- Be clear about being AI
- Respect client boundaries and privacy

SAFETY PROTOCOLS:
For crisis situations ("hurt myself", "give up", etc.):
"I hear your pain and I'm concerned for your safety. Please know you're not alone.
 Would you be willing to reach out to emergency services? They're trained to provide the support you need right now."
`;

  const therapyConfigs: Record<TherapyType, TherapyConfig> = {
    cognitive_behavioral_therapy: {
      prompt: `Utilize evidence-based CBT techniques to:
- Help identify thought patterns and triggers
- Guide through thought challenging exercises
- Suggest practical coping strategies
- Encourage behavioral activation
Focus on one specific technique or exercise per response.`,
      responseFormat: {
        maxLength: 200,
        structure: [
          "Validation",
          "CBT Technique",
          "Practice Exercise",
          "Reflection Question",
        ],
      },
      techniques: [
        "thought_recording",
        "cognitive_restructuring",
        "behavioral_activation",
      ],
    },
    guided_meditation: {
      prompt: `Guide meditation sessions with:
- Clear, calming instructions
- Gentle pacing with appropriate pauses
- Focus on breathing and body awareness
- Simple grounding techniques
Keep guidance gentle and accessible for beginners.`,
      responseFormat: {
        maxLength: 200,
        structure: ["Introduction", "Meditation Guide", "Closing Notes"],
      },
      techniques: ["breathing_exercise", "body_scan", "visualization"],
    },
    journaling: {
      prompt: `Provide journaling guidance with:
- Clear, thought-provoking prompts
- Specific questions for self-reflection
- Structure for emotional exploration
- Focus on one theme or topic at a time
Encourage depth while maintaining boundaries.`,
      responseFormat: {
        maxLength: 200,
        structure: ["Context", "Journaling Prompt", "Reflection Guidelines"],
      },
      techniques: [
        "emotional_awareness",
        "gratitude_practice",
        "future_vision",
      ],
    },
  };

  const config = therapyConfigs[therapyType];
  return `${basePrompts}\n\n${config.prompt}\n\nResponse Guidelines:
- Maximum length: ${config.responseFormat.maxLength} words
- Structure: ${config.responseFormat.structure.join(" → ")}
- Available techniques: ${config.techniques.join(", ")}`;
}
