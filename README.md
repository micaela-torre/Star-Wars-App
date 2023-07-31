# Star Wars App
 
Este es una aplicación web desarrollada con React que muestra tres categorías de la serie Star Wars, obtenidos a través de la API (https://swapi.dev/api/). 
### Categorías : 
- Personajes
- Planetas
- Naves

La aplicación utiliza las siguientes librerías:

- Axios: Para realizar solicitudes HTTP a la API (https://swapi.dev/api/).
- Notistack: Para mostrar notificaciones de estilo Snackbar en la interfaz de usuario.

## El proyecto está desplegado en Firebase.
- https://startwarstest.web.app/

### Características
- Paginación para cargar más elementos en cada lista.
- Al seleccionar un elemento de la lista muestra la información detallada.
- Buscador por nombre de cualquier elemento de las listas.
- Diseño responsive.
- Implementación de Patrones de diseño (High Order Component y Presentational & Container)
- Implemantación de Principios SOLID
- Implementacion de Lazy Loading y Suspense
- SEO
-  Implementación de Clean Architecture
    
## Funcionalidad Destacada:
La implementación se destaca en la sección "Detalle" al utilizar la recursividad para adaptar la información recibida de la API. Cuando se encuentran URLs para más detalles, la aplicación sigue navegando y consultando datos adicionales para proporcionar una experiencia enriquecida y detallada para el usuario.

### Cómo funciona:
Mediante una interfaz intuitiva, el usuario puede explorar diversos datos, como películas, planetas, personas y otros elementos de la API. Al hacer clic en los enlaces que contienen información adicional, la aplicación realiza solicitudes a la API para recuperar y presentar más detalles en una vista fluida y cohesionada.

## Instalación
Clona este repositorio en tu máquina local:

```
https://github.com/micaela-torre/Star-Wars-App.git
```
Instala las dependencias utilizando npm:

```
npm install
```

## Levantar el Frontend

```
npm start
```
Esto iniciará el servidor de desarrollo y la aplicación estará disponible en http://localhost:3000/.
