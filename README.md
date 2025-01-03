# Backend con Express.js

## Descripción

Este proyecto es una API desarrollada con Node.js y Express, en donde tendremos como entidad principal Movies y Ratings como secundaria.

La aplicacion nos permite crear peliculas y que los usuarios puedan puntuarlas obteniendo el promedio general.

---

## Tecnologías Utilizadas
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" width="100" height="100" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="MongoDB" width="100" height="100" />
  <img src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" alt="ExpressJS" width="100" height="100" />
  <img src="https://logos-world.net/wp-content/uploads/2021/02/Docker-Symbol.png" alt="Docker" width="130" height="100" />
  <img src="https://ttow0130.pages.labranet.jamk.fi/images/docker-compose-logo.png" alt="Docker Compose" width="100" height="100" />
  <img src="https://avatars.githubusercontent.com/u/9682013?s=200&v=4" alt="Express Validatior" width="100" height="100" />
  <img src="https://repository-images.githubusercontent.com/2518028/adb2df00-9431-11e9-9ccd-26f012b80f29" alt="Winston Logger" width="100" height="100" />
</p>

---
## Tabla de contenidos

- [Backend con Express.js](#backend-con-expressjs)
  - [Descripción](#descripción)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Tabla de contenidos](#tabla-de-contenidos)
  - [Desarrollo local con Docker](#desarrollo-local-con-docker)
  - [Prerequisitos](#prerequisitos)
  - [Instalacion](#instalacion)
  - [Ejecutando la aplicacion](#ejecutando-la-aplicacion)
  - [Deteniendo la aplicacion](#deteniendo-la-aplicacion)
  - [Swagger](#swagger)
  - [Postman](#postman)
  - [Base de Datos](#base-de-datos)
  - [Imagenes de la aplicacion](#imagenes-de-la-aplicacion)
    - [Home:](#home)
    - [Detalle Movie:](#detalle-movie)
    - [Mis Movies:](#mis-movies)
  - [Link productivo](#link-productivo)
  - [Contribuidores](#contribuidores)
---
## Desarrollo local con Docker
Siguiendo estas instrucciones obtendras una copia del proyecto y correras en tu maquina local utilizando Docker y Docker-Compose para facilitar el desarrollo, de esta manera todos los developers involucrados tendran el mismo entorno.

## Prerequisitos
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
## Instalacion
1. Crear una carpeta llamada moviesblog y dentro de ella clonar el backend y el frontend junto con el archivo .env. y el docker-compose.yml (en la carpeta assets)
2. Clonar el repositorio backend:

   ```bash
   git clone https://github.com/MartinManganiello/backend.git
   ```
3. Clonar el repositorio frontend:

   ```bash
   git clone https://github.com/MartinManganiello/frontend.git
   ```
4. Quedaria de la siguiente manera
<img src="./assets/carpetas_backend.JPG" alt="Origanizacion carpetas"/>

## Ejecutando la aplicacion
Para ejecutar la aplicacion utilizando Docker Compose, simplemente ejecute:
```bash
docker-compose up --build
```

Esto hara:

* Construye e inicia el frontend (React) en http://localhost:5173
* Construye e inicia el backend (Node.js + Express) en http://localhost:3000
* Start MongoDB (expuesto internamente al backend)

## Deteniendo la aplicacion
Para detener la aplicacion, ejecuta
```bash
   docker-compose down
```
---
## Swagger
En esta ruta encontraras el endpoint de Movies documentado:
http://localhost:3000/docs/

---
## Postman

En la carpeta assets se encuentra el archivo **MovieBlog.postman_collection.json** lo importas desde postman y se carga la collection.

---
## Base de Datos
Al iniciar los contenedores ya tenemos registros creados para cada una de las entidades.

Para loguearte podes usar el usuario de prueba o crear uno nuevo
```
username: LionelMessi
password: 123
```
---

## Imagenes de la aplicacion

### Home:
Todas las peliculas existentes

<img src="./assets/home.JPG" alt="Home"/>

### Detalle Movie:
Detalle de la pelicula seleccionada

<img src="./assets/detalle_movie.JPG" alt="Detalle pelicula"/>

### Mis Movies:
Peliculas puntuadas por el usuario

<img src="./assets/mis_movies.JPG" alt="Mis peliculas"/>

---

## Link productivo
link 

---

## Contribuidores

- Olmedo Macarena Yanina
- Manganiello Franco Martin

