export interface Book {
  id: number;
  title: string;
  isbn: string;
  authorId: number;
  authorName: string;
  publicationYear: number;
  price: number;
  stockQuantity: number;
}
