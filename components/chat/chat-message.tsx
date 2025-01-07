'use client';

import { Message } from '@/lib/types';

interface ChatMessageProps {
    message: Message;
    isRTL?: boolean;
}

export function ChatMessage({ message, isRTL }: ChatMessageProps) {
    return (
        <div
            className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'
                }`}
        >
            <div
                className={`inline-block max-w-[80%] rounded-lg px-4 py-2 ${message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                    }`}
            >
                {message.content}
            </div>
        </div>
    )
}