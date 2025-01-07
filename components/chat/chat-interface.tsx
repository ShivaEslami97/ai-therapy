"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft } from "lucide-react";
import { TherapyType, Language, Message } from "@/lib/types";
import { ChatMessage } from "./chat-message";
import { ChatInput } from "./chat-input";
import { sendMessage } from "@/lib/api/chat";

interface ChatInterfaceProps {
  therapyType: TherapyType;
  language: Language;
  onBack: () => void;
}

export default function ChatInterface({
  therapyType,
  language,
  onBack,
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    setMessages((prev) => [...prev, { role: "user", content }]);
    setIsLoading(true);

    try {
      const { response } = await sendMessage({
        message: content,
        therapyType,
        language,
      });

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = "An error occurred. Please try again.";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: errorMessage },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full justify-center items-center min-h-[80vh]">
      <div className="max-w-xl w-full mx-auto h-[calc(100vh-9rem)] max-h-[500px]">
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={onBack} className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === "fa" ? "بازگشت" : "Back"}
          </Button>
        </div>

        <div className="bg-card rounded-lg shadow-lg h-full flex flex-col">
          <ScrollArea className="flex-1 p-4">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message}
                isRTL={language === "fa"}
              />
            ))}
            {isLoading && (
              <div className="text-muted-foreground text-sm">
                {language === "fa" ? "در حال تایپ..." : "Typing..."}
              </div>
            )}
          </ScrollArea>

          <ChatInput
            onSend={handleSendMessage}
            isLoading={isLoading}
            language={language}
          />
        </div>
      </div>
    </div>
  );
}
