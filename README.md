# LibraryFlow

Sistema completo para gerenciamento de biblioteca, com backend em .NET e frontend em Angular.

## Funcionalidades

- Cadastro e consulta de livros, autores e usuários
- Empréstimo e devolução de livros
- Interface web intuitiva

## Estrutura do Projeto

- `src/LibraryFlow.Api`: Backend .NET (Web API)
- `src/LibraryFlow.Application`: Lógica de negócio e DTOs
- `src/LibraryFlow.Domain`: Entidades e interfaces
- `src/LibraryFlow.Infrastructure`: Persistência de dados
- `src/LibraryFlow.Frontend`: Frontend Angular

## Como rodar o projeto

### Pré-requisitos

- .NET 7 ou superior
- Node.js 18 ou superior
- SQL Server (ou outro banco configurado)

### Configuração do Banco de Dados

1. Configure a string de conexão no arquivo `appsettings.json` em `src/LibraryFlow.Api`.
2. Execute as migrations (se necessário):
	```
	dotnet ef database update
	```

### Backend (.NET)

1. Acesse a pasta `src/LibraryFlow.Api`
2. Execute:
	```
	dotnet run
	```

### Frontend (Angular)

1. Acesse a pasta `src/LibraryFlow.Frontend`
2. Execute:
	```
	npm install
	npm start
	```
3. Acesse `http://localhost:4200` no navegador.

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b minha-feature`)
3. Faça suas alterações
4. Envie um pull request

## Licença

MIT
