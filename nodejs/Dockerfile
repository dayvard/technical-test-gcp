# Usar una imagen base oficial de Node.js
FROM node:20-slim

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos de dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install --production

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto que usa la app
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["node", "src/index.js"]
