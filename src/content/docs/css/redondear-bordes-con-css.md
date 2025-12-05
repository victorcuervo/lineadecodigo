---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7Z2ZGBF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3Tot9LPL4BU7rFjyThOcASgmDywY8GMz7AF11f590RAiEA9kmdNat2%2FvoMHxy4cY4U%2Bw0s6wau%2FJmPFwN3YEqq8Bgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPkygQzKUDP90jmtrCrcAzObxsfNn1EamK2NJ5PPx4m6QMoh1Tx%2F%2FapX6Ry%2B6RQ380gVRmt5G9mpwGDDTMjXiK30h2u5NFKq7q8X4dYYpbzH5HF0u5NZMkBuTAzimTLu5u7HyWsJp0aphlMzhNqXZLpaETm2ywLZT9D5pJfIDroe8ZgF6Q%2B%2BghbG6etPVplja80410xhzduezrqqSasrnBCygxszJUzBKH2zAZ9Kbr5xP6nljxhUQvk9Aasmz5F9aW0hU7tbdxxPCYRx5fZ23403oF4KHom6fwaQI5NrTVYlX7w100XP7LHU0tqw2K48b3YhHoVNpzgF6AcXwXC0Pm5wtXvY9xj2lqzMy5iRoWi0nXmL95CER4YwwFfaTt6vHAM5UgkOsXTYPNEIVwjcEdRZRYNZd5g%2FB52BO%2FgrR0lYtcf8XwaY9stvOKpw%2Bz%2B6r5GxTwWRhO8jdjTXdFXjpWQcd%2BCP3RKfxt3ktydB%2BXSGUvY%2Bp30aaUDarLnmiU8x6KHHkSxleRAjhLc6hOKQyd1ojSoGVCMhGnE8%2Bq33Tidbqps6%2FaZ7EBNIN9shibjSREnkW%2FV4MHyRhGCZUwhI%2F9JDXx%2F%2FaIY2AR6d3Ja1qEyG%2BWmWY29sXT0X7sglTRnU32MVL7p9WLphZZQKMOvVyskGOqUBxuCMhVmbwzWGnmkAhGkj8QcII5Bz8AD2LFN0R%2BnIL8s8lvNS0niEhI0%2BmsARwcLG99FsVws2kYqraCKz7EYKzKHFcmAMWs8ovc0DQURrlmzQekUHLGeMz9Dd1GUy3hxvN0NyV%2FFGyF0pg57ovaf%2B5fv8GNns5jufm1jMXJGLiaushmIgJCaQCyyQU1yPDDM5JIz7RqA%2FH7Lw1J04kHU0MdbuhiC6&X-Amz-Signature=255c1ed0c531366f8a8ea5e5dfbc022decf7821cd9211653e619f6de2e17c49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7Z2ZGBF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3Tot9LPL4BU7rFjyThOcASgmDywY8GMz7AF11f590RAiEA9kmdNat2%2FvoMHxy4cY4U%2Bw0s6wau%2FJmPFwN3YEqq8Bgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPkygQzKUDP90jmtrCrcAzObxsfNn1EamK2NJ5PPx4m6QMoh1Tx%2F%2FapX6Ry%2B6RQ380gVRmt5G9mpwGDDTMjXiK30h2u5NFKq7q8X4dYYpbzH5HF0u5NZMkBuTAzimTLu5u7HyWsJp0aphlMzhNqXZLpaETm2ywLZT9D5pJfIDroe8ZgF6Q%2B%2BghbG6etPVplja80410xhzduezrqqSasrnBCygxszJUzBKH2zAZ9Kbr5xP6nljxhUQvk9Aasmz5F9aW0hU7tbdxxPCYRx5fZ23403oF4KHom6fwaQI5NrTVYlX7w100XP7LHU0tqw2K48b3YhHoVNpzgF6AcXwXC0Pm5wtXvY9xj2lqzMy5iRoWi0nXmL95CER4YwwFfaTt6vHAM5UgkOsXTYPNEIVwjcEdRZRYNZd5g%2FB52BO%2FgrR0lYtcf8XwaY9stvOKpw%2Bz%2B6r5GxTwWRhO8jdjTXdFXjpWQcd%2BCP3RKfxt3ktydB%2BXSGUvY%2Bp30aaUDarLnmiU8x6KHHkSxleRAjhLc6hOKQyd1ojSoGVCMhGnE8%2Bq33Tidbqps6%2FaZ7EBNIN9shibjSREnkW%2FV4MHyRhGCZUwhI%2F9JDXx%2F%2FaIY2AR6d3Ja1qEyG%2BWmWY29sXT0X7sglTRnU32MVL7p9WLphZZQKMOvVyskGOqUBxuCMhVmbwzWGnmkAhGkj8QcII5Bz8AD2LFN0R%2BnIL8s8lvNS0niEhI0%2BmsARwcLG99FsVws2kYqraCKz7EYKzKHFcmAMWs8ovc0DQURrlmzQekUHLGeMz9Dd1GUy3hxvN0NyV%2FFGyF0pg57ovaf%2B5fv8GNns5jufm1jMXJGLiaushmIgJCaQCyyQU1yPDDM5JIz7RqA%2FH7Lw1J04kHU0MdbuhiC6&X-Amz-Signature=eccaf85dd00eba680af4457b07113af27fae9a9c291386a4d8da30ae89b790c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
