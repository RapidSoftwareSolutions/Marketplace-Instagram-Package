FROM node:6.4
ENV PORT 8080
EXPOSE ${PORT}
COPY . .
RUN npm install
CMD node index.js
