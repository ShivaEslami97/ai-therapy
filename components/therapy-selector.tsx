'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { THERAPY_TYPES, LANGUAGES, THERAPY_DESCRIPTIONS, TherapyType } from '@/lib/constants';
import ChatInterface from '@/components/chat/chat-interface';
import { Globe } from 'lucide-react';

export default function TherapySelector() {
  const [selectedTherapy, setSelectedTherapy] = useState<TherapyType | null>(null);
  const [language, setLanguage] = useState<'en' | 'fa'>(LANGUAGES.EN);

  if (selectedTherapy) {
    return (
      <ChatInterface
        therapyType={selectedTherapy}
        language={language}
        onBack={() => setSelectedTherapy(null)}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* <div className="flex justify-end mb-6">
        <Button
          variant="ghost"
          onClick={() => setLanguage(lang => lang === LANGUAGES.EN ? LANGUAGES.FA : LANGUAGES.EN)}
          className="flex items-center gap-2"
        >
          <Globe className="h-4 w-4" />
          {language === LANGUAGES.EN ? 'فارسی' : 'English'}
        </Button>
      </div> */}

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {Object.entries(THERAPY_TYPES).map(([key, value]) => (
          <Card
            key={key}
            className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedTherapy(value)}
          >
            <h3 className="text-xl font-semibold mb-4">{key}</h3>
            <p className="text-muted-foreground">
              {THERAPY_DESCRIPTIONS[value][language]}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}