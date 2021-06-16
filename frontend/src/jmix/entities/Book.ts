export class Book {
  static NAME = "Book";
  id?: string;
  title?: string | null;
  year?: any | null;
  author?: string | null;
}
export type BookViewName = "_base" | "_instance_name" | "_local";
export type BookView<V extends BookViewName> = V extends "_base"
  ? Pick<Book, "id" | "title" | "year" | "author">
  : V extends "_local"
  ? Pick<Book, "id" | "title" | "year" | "author">
  : never;
