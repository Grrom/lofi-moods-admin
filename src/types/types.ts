export type musicProps = "id" | "title" | "owner" | "link" | "mood";
export interface music {
  id: number;
  title: string;
  owner: string;
  link: string;
  mood: string;
}

export interface apiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
