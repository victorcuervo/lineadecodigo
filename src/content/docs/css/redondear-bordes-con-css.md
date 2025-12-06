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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMI6EWFN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH2QK7WORMRQ64v%2FDbHjcR7tJwpVTCNCYsvoYxx4wihUCIQDDgwap5zN37Lgh20mlaj5IlDsAQheU4ykB93BFbDyGpCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMJEmaQ7OnMr9Z2HCuKtwDj6Q3pYbndZtWmd1uF1lAjtQ0JT3Bj1xaVDC9r26fWTKkEhkOnFNqh8ErCoP2b4PqcNBuyyqN6gelxl3pGSHJDfrKZ6RzZVgT9PDrxEXj2ArrQDlhP5DnD3NLne6OQyaxWjgFBT8BGmDHAYN0CoZAkYQd4HNptk2YQk81P%2FjnLUgf77TAyxWzava3qcJ0yA45U7qRi5m61KLdD7WCUfkLrAKVX%2Bxa%2FYqqBfJDeOkuXgeraD7UG91V9YPPtXAV60NB7dQ70SjyJpHZOOSd1ZjehLH8YpHVDt2DypefhT7BzJ1W6mVBShDXL5MR32qxlQ8y1y8M7Q2p3XVE9txn82U7gKbxFzBkLoGoVPsgGnR0PUiOYuk258qRR1L%2BEVvWCLqR3xhC7CuRSlK8KueizOj%2B2489%2B3PjdjJHKEQ6zgMPMaGWxtm1Slb3JzB5fRfMGGpnGWkCLWPux8%2FbxocH3vYPsOJWzWTY7QGvh52qOEAprh%2FTEfYjUTU0f3n79Zubobj4e4V6911QW6n4agcLgKxzxqbFnd7ljJPBRRCBkfja3smeDEpkVeyZy0ddYeMYaV%2FOUK6mFLKbJ6ahxuzIFTJ7tWwOhsxWtTXnuHF%2BY60WJ%2BEnzfD7Qpcag6eRsPMwlejNyQY6pgEHE8FS4J9HuEZw14FkK%2FcTTTDWP4H6Z3U0ufGCkX3j5EbrErUmNCGWkS%2BvO7SZc0NOgmf2AwC%2BAVPm%2BoNCvLDTyjXyKpNCAbM3MCpmzI%2F4SEOECxvmTFJ89AVs4hiWs6Jnb8jR%2BgNoK0PVxlmw%2FIvL8PTo8jW5U%2Fy2vnNvMLKUI2tLb3W65EOEH6EvHSbxO9yK9zZv8pAiBftfP3KREU2sbg3M9%2B0N&X-Amz-Signature=4bc983707f1956ff99ff317fcaf61b7d53dbfb5dd4dae590c2d22c5a87a9f6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMI6EWFN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH2QK7WORMRQ64v%2FDbHjcR7tJwpVTCNCYsvoYxx4wihUCIQDDgwap5zN37Lgh20mlaj5IlDsAQheU4ykB93BFbDyGpCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMJEmaQ7OnMr9Z2HCuKtwDj6Q3pYbndZtWmd1uF1lAjtQ0JT3Bj1xaVDC9r26fWTKkEhkOnFNqh8ErCoP2b4PqcNBuyyqN6gelxl3pGSHJDfrKZ6RzZVgT9PDrxEXj2ArrQDlhP5DnD3NLne6OQyaxWjgFBT8BGmDHAYN0CoZAkYQd4HNptk2YQk81P%2FjnLUgf77TAyxWzava3qcJ0yA45U7qRi5m61KLdD7WCUfkLrAKVX%2Bxa%2FYqqBfJDeOkuXgeraD7UG91V9YPPtXAV60NB7dQ70SjyJpHZOOSd1ZjehLH8YpHVDt2DypefhT7BzJ1W6mVBShDXL5MR32qxlQ8y1y8M7Q2p3XVE9txn82U7gKbxFzBkLoGoVPsgGnR0PUiOYuk258qRR1L%2BEVvWCLqR3xhC7CuRSlK8KueizOj%2B2489%2B3PjdjJHKEQ6zgMPMaGWxtm1Slb3JzB5fRfMGGpnGWkCLWPux8%2FbxocH3vYPsOJWzWTY7QGvh52qOEAprh%2FTEfYjUTU0f3n79Zubobj4e4V6911QW6n4agcLgKxzxqbFnd7ljJPBRRCBkfja3smeDEpkVeyZy0ddYeMYaV%2FOUK6mFLKbJ6ahxuzIFTJ7tWwOhsxWtTXnuHF%2BY60WJ%2BEnzfD7Qpcag6eRsPMwlejNyQY6pgEHE8FS4J9HuEZw14FkK%2FcTTTDWP4H6Z3U0ufGCkX3j5EbrErUmNCGWkS%2BvO7SZc0NOgmf2AwC%2BAVPm%2BoNCvLDTyjXyKpNCAbM3MCpmzI%2F4SEOECxvmTFJ89AVs4hiWs6Jnb8jR%2BgNoK0PVxlmw%2FIvL8PTo8jW5U%2Fy2vnNvMLKUI2tLb3W65EOEH6EvHSbxO9yK9zZv8pAiBftfP3KREU2sbg3M9%2B0N&X-Amz-Signature=a1a73c9c58d6b0de86fd9a1ff9370d0316de3bf107be5010c24325ca4618b71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
