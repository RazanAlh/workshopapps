import { Results } from './surveyresultq';

export interface Surveyresult {
    id: number;
    surveyid: number;
    userid: number;
    results: Results[];
}

