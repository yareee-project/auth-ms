FROM node:20 AS builder
ARG NPM_TOKEN
WORKDIR /app
COPY package.json ./
COPY .npmrc ./
RUN npm install
COPY . .
RUN chmod +x /app/scripts/prestart.sh

FROM node:20 AS app
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 3000
CMD ["npm", "start"]

FROM node:20 AS test
WORKDIR /app
COPY --from=builder /app /app
RUN chmod +x /app/scripts/test-prestart.sh
CMD ["sh", "-c", "/app/scripts/test-prestart.sh && npm run test:functional"]
