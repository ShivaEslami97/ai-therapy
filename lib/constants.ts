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

export const THERAPY_DESCRIPTIONS = {
  [THERAPY_TYPES.CBT]: {
    [LANGUAGES.EN]: 'Cognitive Behavioral Therapy helps you identify and change negative thought patterns',
    [LANGUAGES.FA]: 'درمان شناختی رفتاری به شما کمک می‌کند الگوهای فکری منفی را شناسایی و تغییر دهید'
  },
  [THERAPY_TYPES.MEDITATION]: {
    [LANGUAGES.EN]: 'Guided meditation sessions for relaxation and mindfulness',
    [LANGUAGES.FA]: 'جلسات مدیتیشن هدایت شده برای آرامش و ذهن‌آگاهی'
  },
  [THERAPY_TYPES.JOURNALING]: {
    [LANGUAGES.EN]: 'Structured journaling prompts for self-reflection and emotional processing',
    [LANGUAGES.FA]: 'راهنمای نوشتن خاطرات ساختار یافته برای خودشناسی و پردازش احساسات'
  }
};