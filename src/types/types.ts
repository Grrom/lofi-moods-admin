export type musicProps = "id" | "title" | "owner" | "link" | "mood";
export interface music {
  id?: id;
  title: string;
  owner: string;
  link: string;
  mood: string;
}

export type id = number | undefined;

export interface mood {
  id: id;
  mood: string;
}

export interface apiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}
