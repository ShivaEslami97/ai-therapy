import { api } from './axios';
import { TherapyType, Language } from '@/lib/types';

export interface ChatRequest {
    message: string;
    therapyType: TherapyType;
    language: Language;
}

export interface ChatResponse {
    response: string;
}

export const sendMessage = async (data: ChatRequest): Promise<ChatResponse> => {
    const response = await api.post<ChatResponse>('/chat', data);
    return response.data;
};