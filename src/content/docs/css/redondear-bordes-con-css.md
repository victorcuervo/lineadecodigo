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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXJBCKRV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZkYvvQ5D4q0T9gTy79yJd5s7W9AVnguPzUv0LWowWVAiBrw9LBH0zamrDL0pvsZ6n%2BZ%2F8O3KC%2FyxiaY5Cn5k86bCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMCey8Qf5GtdjG8yo0KtwDYSBtWlH%2FzP7kQ%2By8Ah1mziRRlKOosgocIZ74oZU%2B0gWj%2B45Vc%2Fxw7laUV2JGtVPcFxCHxs8rxJx%2BJ1h6PEpyFUe2zKibxmP3xaKoeZoKg%2BhUl8OGVVEBwmryBGC6wo18jTrvE7MdocJ5Gw0wgSZqSs524zcmKOgC7rtGko1gJCVEPQRpD97wxvzZwFbO%2FBGJ6rQsXrsT6l26c00X9avahmsGBPS73X6rQRHjuEAtMBlV49FwDmeKWV3LP7D0I3hOlL63H2Mv%2BTeQCY%2Fit2nvDAFiGLKRIXUuhWK%2BmWm0JQfwLwL1tauWI1JcETeLQSJk0wLlHysOjfawCoHYt2sd6eGkxBfTZU3W0fZG3jwfvguOwIJzk8J%2FC1FDhTDkb8qtIL3bA1hvpCN%2FV4izEUviGBt97wCzDZ2htNPfT86ZId5YyMpWaI528NfL6FJV8X18CZ7Xo3L60HmGhsZ3rWz4uVw8v2pdwzMkN6l1FAPY6wDW15CEuhFot4OFvNbc4w5T%2Bz8sm8HHmp6f4uymlVuu8zHQ%2FO2FPsYPYM2ZcvXWMPuNYfA5QgGape4f%2F6RRLI6FzjusX4mZPayFZ6pbvR7diHO60xee88nTKWIfTtrM9kAtf6SjbCE4untPUw4wvKvJyQY6pgF%2FEsCdztESq9p8lr0vIjx%2Bw1HEmyEUeFjw%2Bv%2BzGTrJRtguheLVBwYyt%2Foq6VsLBvQ%2Bd%2BCROFNnUiPBqofJ7aGxxbSQSU3sQ1DAlYbaUedMRDoHX4egZc0ccnkQy9%2BTKC7J%2FlzeNk10j4PyrX%2FEtHPzGuQtz1qMokfxRXQrrYjQmApTVuGme9MtMjvPDCs2gLi2YOHPBwYRlt9u%2BPi52IYVRcpln6a6&X-Amz-Signature=a13911614d61cdcc8e4d7245419fdd2b5dad5dfa8be09f2397e4578a8e8722b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXJBCKRV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZkYvvQ5D4q0T9gTy79yJd5s7W9AVnguPzUv0LWowWVAiBrw9LBH0zamrDL0pvsZ6n%2BZ%2F8O3KC%2FyxiaY5Cn5k86bCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMCey8Qf5GtdjG8yo0KtwDYSBtWlH%2FzP7kQ%2By8Ah1mziRRlKOosgocIZ74oZU%2B0gWj%2B45Vc%2Fxw7laUV2JGtVPcFxCHxs8rxJx%2BJ1h6PEpyFUe2zKibxmP3xaKoeZoKg%2BhUl8OGVVEBwmryBGC6wo18jTrvE7MdocJ5Gw0wgSZqSs524zcmKOgC7rtGko1gJCVEPQRpD97wxvzZwFbO%2FBGJ6rQsXrsT6l26c00X9avahmsGBPS73X6rQRHjuEAtMBlV49FwDmeKWV3LP7D0I3hOlL63H2Mv%2BTeQCY%2Fit2nvDAFiGLKRIXUuhWK%2BmWm0JQfwLwL1tauWI1JcETeLQSJk0wLlHysOjfawCoHYt2sd6eGkxBfTZU3W0fZG3jwfvguOwIJzk8J%2FC1FDhTDkb8qtIL3bA1hvpCN%2FV4izEUviGBt97wCzDZ2htNPfT86ZId5YyMpWaI528NfL6FJV8X18CZ7Xo3L60HmGhsZ3rWz4uVw8v2pdwzMkN6l1FAPY6wDW15CEuhFot4OFvNbc4w5T%2Bz8sm8HHmp6f4uymlVuu8zHQ%2FO2FPsYPYM2ZcvXWMPuNYfA5QgGape4f%2F6RRLI6FzjusX4mZPayFZ6pbvR7diHO60xee88nTKWIfTtrM9kAtf6SjbCE4untPUw4wvKvJyQY6pgF%2FEsCdztESq9p8lr0vIjx%2Bw1HEmyEUeFjw%2Bv%2BzGTrJRtguheLVBwYyt%2Foq6VsLBvQ%2Bd%2BCROFNnUiPBqofJ7aGxxbSQSU3sQ1DAlYbaUedMRDoHX4egZc0ccnkQy9%2BTKC7J%2FlzeNk10j4PyrX%2FEtHPzGuQtz1qMokfxRXQrrYjQmApTVuGme9MtMjvPDCs2gLi2YOHPBwYRlt9u%2BPi52IYVRcpln6a6&X-Amz-Signature=c7cb2b58c7a68100366a6929f44c8d0089b707da4c928a605b8e60b7c4da3d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
