export interface Project {
  name: string;
  description: string;
  longDescription?: string;
  url: string;
  category: string;
  tags?: string[];
  featured?: boolean;
  difficulty?: "Easy" | "Medium" | "Hard";
  timeCommitment?: string;
  impact?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}
