import { Metadata } from "next";
import TherapySelector from "@/components/therapy-selector";
import { Brain } from "lucide-react";
import { ChatHeader } from "@/components/chat/chat-header";

export const metadata: Metadata = {
  title: "AI Therapist | Your Digital Mental Health Companion",
  description:
    "Get personalized therapy support with AI-powered cognitive behavioral therapy, guided meditation, and journaling.",
};

export default function Chat() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Brain className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Haven Ai</h1>
          <p className="text-xl text-muted-foreground">
            Your digital safe place for therapy.
          </p>
        </div> */}
      <ChatHeader />
      <TherapySelector />
    </main>
  );
}
