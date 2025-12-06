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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ7MJK22%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf%2FobWsjeYl7UcKZBOCrVQQvrnlpQ%2Bahbk6l62b%2FpiSQIgJ9mDecH7WeKSszsi6shmagpcelAwfTgrGMQZ1Hrh8c8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCedplmh4nI85VRjCircA1Asg%2FFYy6ZID7VkKQvU%2FgzylvrcwC5eKD3QlSrUim%2F5FV1esq5LWH445%2FILKK4TiEcECfo7KrTz4E3%2Bw1HHIwA6UX7ScJKGtMATupNI6Z7psnQynQmqCwZmA9XecTtmZmkjs0yBcsMg30Yb8q7WkKph3NDNQ21Ll05eTErcGbQYUI4T2t7QBcAHZBBck4SASWL%2FH%2Fbu0EMcstSLd2RS7abvg8yO%2FF2Uqz0XZ3xWXoV1iWXgaj2s2Evwlqre8UbNdTOPx0l6j1%2BypCscsqsvaktQTNUAgDzrXH0xbCFSsllgEn5VDS3lVg8wBnta37LD1nhibMyMHSgKTlY%2BDOsNYmljgZ8MJvurFVZSdhX9ucAuIiinJBjWJ75zSbn29A8xYTWNTJ2cmxlyLeq8D8VfZm%2B10Np8MlyqNSAByhkAYRRJs78r%2BuUKxB0VfbFfYfBSBFF6ZkByFF8Qmx2tjIArUl49NbRa43SMGa8%2BpXs4nz%2FL1tRg%2BG%2Fwout%2F6N513MLxeTgUDL1SNywpCaCXFVCYDl7LG02a5m9GEfpDaT0Js6MW26nN83kszYFSf%2F0duP6ube4dkIkXEbYGIG4NA%2BRWJ7lTQj4AYfXj0NN77hEuXbschQpRmKjGgUR1467SMLbD0ckGOqUBe9fjb4KAfw4AKuKv62LWVpHz4lssbAc3V1ItBR9HujrAqnr3uOGA%2BzzroBahYLapR9Xg3%2BHvMd3ae5AT57hXKUDVmF%2BhbcYlwlsYjuzQYLZk7NRrj30uX5e1xDE%2F82mzvIrlSdRj5ZGtolUp21Iikf%2Fxg6hvu7tpdzjJ7VajQfvNNh9ees%2BkBchzZ2DofyfR8rmx35yL0mGnQ58gn2%2BqnC7RLuvA&X-Amz-Signature=b90d6594158e8c48206b625686728caf3d5283a6a95fd35d6fb09390ab3e5fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ7MJK22%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf%2FobWsjeYl7UcKZBOCrVQQvrnlpQ%2Bahbk6l62b%2FpiSQIgJ9mDecH7WeKSszsi6shmagpcelAwfTgrGMQZ1Hrh8c8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCedplmh4nI85VRjCircA1Asg%2FFYy6ZID7VkKQvU%2FgzylvrcwC5eKD3QlSrUim%2F5FV1esq5LWH445%2FILKK4TiEcECfo7KrTz4E3%2Bw1HHIwA6UX7ScJKGtMATupNI6Z7psnQynQmqCwZmA9XecTtmZmkjs0yBcsMg30Yb8q7WkKph3NDNQ21Ll05eTErcGbQYUI4T2t7QBcAHZBBck4SASWL%2FH%2Fbu0EMcstSLd2RS7abvg8yO%2FF2Uqz0XZ3xWXoV1iWXgaj2s2Evwlqre8UbNdTOPx0l6j1%2BypCscsqsvaktQTNUAgDzrXH0xbCFSsllgEn5VDS3lVg8wBnta37LD1nhibMyMHSgKTlY%2BDOsNYmljgZ8MJvurFVZSdhX9ucAuIiinJBjWJ75zSbn29A8xYTWNTJ2cmxlyLeq8D8VfZm%2B10Np8MlyqNSAByhkAYRRJs78r%2BuUKxB0VfbFfYfBSBFF6ZkByFF8Qmx2tjIArUl49NbRa43SMGa8%2BpXs4nz%2FL1tRg%2BG%2Fwout%2F6N513MLxeTgUDL1SNywpCaCXFVCYDl7LG02a5m9GEfpDaT0Js6MW26nN83kszYFSf%2F0duP6ube4dkIkXEbYGIG4NA%2BRWJ7lTQj4AYfXj0NN77hEuXbschQpRmKjGgUR1467SMLbD0ckGOqUBe9fjb4KAfw4AKuKv62LWVpHz4lssbAc3V1ItBR9HujrAqnr3uOGA%2BzzroBahYLapR9Xg3%2BHvMd3ae5AT57hXKUDVmF%2BhbcYlwlsYjuzQYLZk7NRrj30uX5e1xDE%2F82mzvIrlSdRj5ZGtolUp21Iikf%2Fxg6hvu7tpdzjJ7VajQfvNNh9ees%2BkBchzZ2DofyfR8rmx35yL0mGnQ58gn2%2BqnC7RLuvA&X-Amz-Signature=25b3aa0b9d2969d53a6a9221f7e3e8a6c0f768dd919b2f60b513982475851737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
