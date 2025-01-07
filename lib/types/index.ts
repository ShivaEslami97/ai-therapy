export const THERAPY_TYPES = {
    CBT: 'cognitive_behavioral_therapy',
    MEDITATION: 'guided_meditation',
    JOURNALING: 'journaling',
} as const;

export const LANGUAGES = {
    EN: 'en',
    FA: 'fa',
} as const;

export type TherapyType = typeof THERAPY_TYPES[keyof typeof THERAPY_TYPES];
export type Language = typeof LANGUAGES[keyof typeof LANGUAGES];

export interface Message {
    role: 'user' | 'assistant';
    content: string;
}