import { Question } from './question';

export interface Survey {
    id: number;
    workshopid: number;
    title: string;
    notes: string;
    questions: Question[];
}