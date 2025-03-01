FROM node:20-alpine

WORKDIR /app

COPY frontend frontend
COPY backend backend

WORKDIR /app/backend
RUN npm install

WORKDIR /app/frontend
RUN npm install && npm run build


WORKDIR /app/backend

RUN npm install -g concurrently

EXPOSE 8000 5173

# CMD concurrently "npm start" "cd ../frontend && npm run dev"
CMD ["npx", "concurrently", "npm start", "cd frontend && npm run dev"]
