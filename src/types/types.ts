export type musicProps = "id" | "title" | "owner" | "link" | "mood";
export interface music {
  id?: id;
  title: string;
  owner: string;
  link: string;
  mood: mood;
}

export type id = string | undefined;

export type mood = string | undefined;

export interface apiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}
