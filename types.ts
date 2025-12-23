
export interface LetterData {
  candidateName: string;
  branch: string;
  collegeName: string;
  internshipName: string;
  date: string;
  place: string;
  functions: string[];
  responsibilities: string[];
}

export interface AIResponse {
  functions: string[];
  responsibilities: string[];
}
