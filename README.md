# Carga de Archivos - Teslo

Se ve la forma en que se carga archivos y validaciones en nuestro backend, por lo que para este repositorio, se colocará las imagénes en un file system que es últi. 

## Teslo API
1. Instalar las dependencias de `node_modules` con el comando:
```
npm install
```
2. Renombrar el archivo `.env.template` a `.env`.
3. Definir las variables de entorno.
4. Levantar la base de datos con `Docker`:
```
docker-compose up -d
``` 
5. Ejecutar el SEED para reestablecer la Base de datos de tipo `GET`: 
```
http://localhost:300'/api/seed
```
6. Levantar el proyecto en entorno de desarrollo: 
```
npm run start:dev
``` 