export class Book {
    id!: number;
    title!: string;
    // Exemplo de como um relacionamento pode ser modelado
    authorId!: number;
    publicationDate!: Date;
}
