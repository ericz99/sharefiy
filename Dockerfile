FROM node:20-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["pnpm", "start"]