# Management App

Aplicacao mobile em React Native e TypeScript para gerenciar times e tarefas consumindo a Management API.

## Stack

- React Native 0.86
- TypeScript
- React Navigation
- TanStack React Query para server state
- Zustand para filtros locais
- React Hook Form + Zod para validacao de formulario
- Axios para HTTP
- React Native StyleSheet para UI, sem styled-components

## Decisoes arquiteturais

O app separa responsabilidades em camadas simples:

- `src/services`: contrato HTTP, tipos da API e funcoes de request.
- `src/hooks`: hooks de React Query para buscar e mutar dados.
- `src/store`: estado local de filtros da lista.
- `src/screens`: telas de lista, detalhe e formulario.
- `src/components`: componentes reutilizaveis de tarefa, status e time.

Cada tela segue o mesmo padrao de organizacao:

- `index.tsx`: somente interface/renderizacao.
- `useContainer.ts`: regras de tela, navegacao, queries, mutations e handlers.
- `types.ts`: tipos e interfaces da tela.
- `styles.ts`: estilos da tela.

Componentes reutilizaveis ficam em pasta propria, por exemplo `StatusPill/index.tsx`,
com `types.ts` e `styles.ts` no mesmo diretorio.

React Query foi escolhido porque a maior parte do estado vem do backend. Ele simplifica cache, loading, erro, refetch e invalidacao apos criar, editar, excluir ou alterar status. Zustand ficou restrito a filtros de UI, porque esse estado nao precisa ir para o backend.

O formulario usa `react-hook-form` com `zod` para validar no cliente antes de enviar para a API. A regra principal do desafio, titulo com minimo de 3 caracteres, esta refletida no schema da tela de tarefa.

## Funcionalidades implementadas

- Lista de times.
- Toque em um time para filtrar tarefas por `teamId`.
- Lista global e filtrada de tarefas.
- Filtro por status e busca textual.
- Criar tarefa.
- Editar tarefa.
- Visualizar tarefa.
- Alterar status rapidamente.
- Marcar tarefa como concluida.
- Deletar tarefa.
- Exibir times como chips com cor.

## Backend esperado

Este front consome a API em:

```text
http://localhost:3000/api
```

No iOS Simulator, `localhost` aponta para a maquina host. No Android Emulator, o app usa `10.0.2.2`.

As URLs ficam em arquivos de ambiente:

- `.env.local`: API local.
- `.env.production`: API publicada.

Antes de rodar um build, aplique o ambiente desejado:

```bash
npm run env:local
npm run env:prod
```

O comando gera `src/config/environment.ts`, que e o arquivo importado pelo cliente Axios. Para producao, substitua `REPLACE_WITH_RENDER_SERVICE_URL` em `.env.production` pela URL real do web service no Render.

O backend usado no desafio esta em:

```text
/Users/daniel/Documents/management-api
```

Endpoints consumidos:

```text
GET    /api/teams?limit=&offset=&search=
GET    /api/tasks?teamId=&status=&search=&limit=&offset=&sort=
GET    /api/tasks/:id
POST   /api/tasks
PUT    /api/tasks/:id
PATCH  /api/tasks/:id/status
DELETE /api/tasks/:id
```

## Como rodar

### 1. Subir backend

Em outro terminal:

```bash
cd /Users/daniel/Documents/management-api
nvm use
docker compose up -d
cp .env.example .env
npm install
npm run db:migrate
npm run seed
npm run start:dev
```

### 2. Subir frontend

Neste projeto:

```bash
cd /Users/daniel/Documents/management-app/managementApp
nvm use
npm install
bundle install
cd ios && bundle exec pod install && cd ..
npm run start:local -- --reset-cache
npm run ios:local
```

## Scripts

- `npm start`: inicia Metro.
- `npm run ios`: compila e abre no iOS Simulator.
- `npm run android`: compila e abre no Android Emulator.
- `npm test`: roda testes.
- `npm run lint`: roda ESLint.

## Modelo de dados consumido

```text
Team
- id
- name
- colorHex
- description
- tasksCount

Task
- id
- title
- description
- status: PENDING | IN_PROGRESS | DONE
- dueDate
- teams[]
```

Uma tarefa pode ter zero, um ou varios times. Ao enviar o formulario, `teamIds` substitui os vinculos anteriores quando a tarefa ja existe.

## O que faria diferente em producao

- Autenticacao e controle por usuario/organizacao.
- Configuracao de ambiente para trocar API base URL por build.
- Persistencia offline e fila de sincronizacao.
- Optimistic updates em acoes de status.
- Observabilidade de erros com Sentry ou similar.
- Testes de componentes cobrindo fluxos de formulario e filtros.
- Design system compartilhado com tokens de cor, espacamento e tipografia.
