# 🧠 Jogo da Memória

Uma aplicação web moderna de jogo da memória construída com Next.js, React e TypeScript. Este projeto oferece uma experiência interativa e divertida para testar sua memória, com contador de tempo, movimentos e interface responsiva.

🔗 **[Acesse o site aqui](https://jogo-da-memoria-blond.vercel.app/)**

## ✨ Funcionalidades

- 🎮 Jogo da memória interativo com cartas
- ⏱️ Cronômetro para medir o tempo de jogo
- 📊 Contador de movimentos realizados
- 🔄 Botão para reiniciar o jogo
- 📱 Design responsivo (mobile, tablet e desktop)
- ⚡ Performance otimizada com Next.js
- 🎨 Interface moderna com Tailwind CSS

## 🛠️ Tecnologias Utilizadas

- **Next.js 16.0.1** - Framework React com App Router
- **React 19.2.0** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS 4** - Framework CSS utilitário
- **Lucide React** - Biblioteca de ícones
- **React Hook Form + Zod** - Gerenciamento de formulários e validação
- **TanStack Query** - Gerenciamento de estado e cache

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js (versão 18 ou superior)
- npm, yarn, pnpm ou bun

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd jogo-da-memória
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
jogo-da-memória/
├── public/
│   └── images/          # Imagens e ícones do jogo
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Layout principal
│   │   ├── page.tsx     # Página principal do jogo
│   │   └── globals.css  # Estilos globais
│   ├── components/
│   │   ├── Button/      # Componente de botão
│   │   ├── GridItem/    # Componente de item do grid
│   │   ├── InfoItem/    # Componente de informação
│   │   └── ui/          # Componentes UI reutilizáveis
│   ├── data/
│   │   └── items.ts     # Lista de itens do jogo
│   ├── helpers/
│   │   └── formatTimeElapsed.ts # Formatação de tempo
│   ├── lib/
│   │   └── utils.ts     # Funções utilitárias
│   └── types/
│       └── GridItemType.ts # Tipos TypeScript
├── package.json
└── README.md
```

## 🎯 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter ESLint

## 📝 Como Usar

1. O jogo inicia automaticamente quando a página carrega
2. Clique em duas cartas para revelá-las
3. Se as cartas forem iguais, elas permanecerão viradas
4. Se forem diferentes, elas serão viradas novamente após 1 segundo
5. O cronômetro conta o tempo desde o início do jogo
6. O contador de movimentos registra cada tentativa de encontrar um par
7. Clique em "Reiniciar" para começar um novo jogo com as cartas embaralhadas

## 🎯 Objetivo do Jogo

Encontre todos os pares de cartas no menor tempo possível e com o menor número de movimentos!

## 🔧 Personalização

Para adicionar novos itens ao jogo:

1. Adicione a imagem do ícone na pasta `public/images/`
2. Atualize o arquivo `src/data/items.ts` com o novo item:

```typescript
{
    name: 'novo-item',
    icon: '/images/novo-item.svg',
}
```

## 👨‍💻 Autor

Gabriel Lemos
