'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { Language } from '@/lib/types';

interface ChatInputProps {
    onSend: (message: string) => void;
    isLoading: boolean;
    language: Language;
}

export function ChatInput({ onSend, isLoading, language }: ChatInputProps) {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;
        onSend(input.trim());
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={
                        language === 'fa'
                            ? 'پیام خود را اینجا بنویسید...'
                            : 'Type your message here...'
                    }
                    className={language === 'fa' ? 'text-right' : 'text-left'}
                    dir={language === 'fa' ? 'rtl' : 'ltr'}
                />
                <Button type="submit" disabled={isLoading}>
                    <Send className="h-4 w-4" />
                </Button>
            </div>
        </form>
    );
}