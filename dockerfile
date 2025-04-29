
FROM node


WORKDIR /app

RUN apt-get update && apt-get install -y netcat-openbsd



COPY package*.json ./

RUN npm install


COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
