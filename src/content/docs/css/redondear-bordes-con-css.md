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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBKTSZY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuqbQAn3V0O4D8rwKN%2FRzgtFDE1HhHPYf2V5VwPxFNUAiEAmOTqX4IbHFZZKT4gw1vpgxLk4YiSytra13c5Ffowt8oq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDA%2FK4%2BFJRLsoJkcn5CrcA9BibJWH7J6seJgJPkK%2BGb6HdUO8lED3FKTgHw7lLqEeb3o6EOZa2uPpF46%2B4ixqciaoc3GPfYzSLCVD%2FXdKWB9m%2Fei2uIQSS6kA%2FbUcSfBVsotcUIhV8DuGdpcyW7yQecw12gVXxvRkdGEy9w3LL0Sv9G3m5zeEF1wotSx4G6SkU3GnbONMfds%2FoM%2Bgq2Dwe9Omi2vy%2FK8bk8zt3VHUh4V0ygjTtrrfZfv%2B%2BouaATTAuc7nKF275Ci62AAiPuBGlTl%2BsuWQQrHAmeo1oprBXV0lclshv9K9UatJ9EwMrSQox9lafXZmvSS4GwI4KoaGmq1BhviAxW6dXUN4DYzqMHtPq7JZmtyPQNJOrT9%2F4D8t6HI1ExyaoiE0YoISWEyGmYNXGCKjpjJd%2FnwMPg4sb1xxvnTJ743IEvQzySV7ERxEUh9AemdNr0x3mqh5%2BAY5QEKdTFB1CIJ%2FHD1K5TDTLNhI7vUem%2BUJgE%2FhLlMSAtOJOgjMpYdI7SvcG8%2FNddkFJ7xEbVFCtyJEKHzhCA%2BBVpNxLrMQjbJiPkXInfJXEErsgqme3aZIZBXwzi65KmFZYFF0QOFtuILbXxijw%2FSROP4RfV%2FtH7GKbqFQLn1W5x6AUEZNR1KZkTaq3ER3MKn9zskGOqUBKKitLb2uNPuZnitwx%2BViQ5gYJfmoAmgHgCpVRamSpSHn6%2FcbAnNvr5bwZX%2FeJ8GMWESzyyqNG%2BQ7TkezwmDXBQxTvhoW822SFQLCz6s45VaF0NZe9evVNJJDJ39ClmonSqwbt1Qj45g0lQMoGnU3ibkTY9Wa9q6Sy71TZYqiYC6jEVKw7UJyZhSaUS3YN4%2BrTWCH0E7lpnsN9kelddbxqevAOisB&X-Amz-Signature=df9b730ef357d47aaa7fad6ab7e0ed539c492d2cf48c8d7c3838e5bb9d0859f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBKTSZY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuqbQAn3V0O4D8rwKN%2FRzgtFDE1HhHPYf2V5VwPxFNUAiEAmOTqX4IbHFZZKT4gw1vpgxLk4YiSytra13c5Ffowt8oq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDA%2FK4%2BFJRLsoJkcn5CrcA9BibJWH7J6seJgJPkK%2BGb6HdUO8lED3FKTgHw7lLqEeb3o6EOZa2uPpF46%2B4ixqciaoc3GPfYzSLCVD%2FXdKWB9m%2Fei2uIQSS6kA%2FbUcSfBVsotcUIhV8DuGdpcyW7yQecw12gVXxvRkdGEy9w3LL0Sv9G3m5zeEF1wotSx4G6SkU3GnbONMfds%2FoM%2Bgq2Dwe9Omi2vy%2FK8bk8zt3VHUh4V0ygjTtrrfZfv%2B%2BouaATTAuc7nKF275Ci62AAiPuBGlTl%2BsuWQQrHAmeo1oprBXV0lclshv9K9UatJ9EwMrSQox9lafXZmvSS4GwI4KoaGmq1BhviAxW6dXUN4DYzqMHtPq7JZmtyPQNJOrT9%2F4D8t6HI1ExyaoiE0YoISWEyGmYNXGCKjpjJd%2FnwMPg4sb1xxvnTJ743IEvQzySV7ERxEUh9AemdNr0x3mqh5%2BAY5QEKdTFB1CIJ%2FHD1K5TDTLNhI7vUem%2BUJgE%2FhLlMSAtOJOgjMpYdI7SvcG8%2FNddkFJ7xEbVFCtyJEKHzhCA%2BBVpNxLrMQjbJiPkXInfJXEErsgqme3aZIZBXwzi65KmFZYFF0QOFtuILbXxijw%2FSROP4RfV%2FtH7GKbqFQLn1W5x6AUEZNR1KZkTaq3ER3MKn9zskGOqUBKKitLb2uNPuZnitwx%2BViQ5gYJfmoAmgHgCpVRamSpSHn6%2FcbAnNvr5bwZX%2FeJ8GMWESzyyqNG%2BQ7TkezwmDXBQxTvhoW822SFQLCz6s45VaF0NZe9evVNJJDJ39ClmonSqwbt1Qj45g0lQMoGnU3ibkTY9Wa9q6Sy71TZYqiYC6jEVKw7UJyZhSaUS3YN4%2BrTWCH0E7lpnsN9kelddbxqevAOisB&X-Amz-Signature=d1a7dae97225dce24e1a5f4eea1f1a0e44d9493c5beb195090d08ec56c46acc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
