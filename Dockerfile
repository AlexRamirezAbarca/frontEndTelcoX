# Etapa 1: Build Angular
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar dependencias
COPY package*.json ./
RUN npm install

# Copiar código fuente
COPY . .

# Build Angular en modo producción
RUN npx ng build frontend --configuration production

# Etapa 2: NGINX
FROM nginx:alpine

# Eliminar archivos por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copiar el build al contenedor final
COPY --from=builder /app/dist/frontend /usr/share/nginx/html

# Copiar nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
