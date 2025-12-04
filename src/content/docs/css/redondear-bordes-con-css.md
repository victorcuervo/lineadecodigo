---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDSUIQZJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCEEA9KcUf8IIdxPERrcTIfP6S14%2FwSFi2x1vRgCrUKkAIhAP66v%2FmA8eN9sX6%2BXTFxlZ6dguJI%2B6U1zM6sJghhw%2F%2B7Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwiVqhbk1UShyNWCJ8q3ANILPgprXBWxrMdfbStgVahYLtDncS0Cj4XN%2B%2BZf8qbPeIJ9XTxd%2F6f0335gF1SbcgBBQmlCpSAFECiXdBBZXoFk0c9bvk%2BqL6hUiAF4FKcvUV7u4ZskEyw8cHb9HUhydG7ZMnvq1CdXvfHDElbOej4YuEFkDGKxB2qDhzAENDabLOfj%2B59%2FG99p4VZB3w8vMo6HpR8GSeJ1Mrj%2FnleZLekDbiPSrUiUiC%2F99H%2Bb0G3gp8ymuOtOBB12yEbfkcMPpJnxDxqSYr9o7cozteL1B%2F2YTwMNZqtz6nghbHcIc7lV8ki5DhKi27URgqoUbXEkK0pePzOkLqeROLK69opzddVxV4%2BNVWTVmceaYgD%2BKpEY%2FQOdKsrrmgN3dZQxEgJFBhC6Zw5s%2F8mhcq9oerc97x1cpn%2Fu5lxAoqZKZqhaNvfEytnB3QaEdzHBMFH7lIw%2FMTsfTgCqGOJxLNydO6%2BSceoC4T5bhBpaHWAQw2SIHQrOWr%2Fhw9VBaY1GxSlEfZM3ugNv2r6Vgv%2B9lBs1A3lx0LpfNbudUbu8rOdn%2BLGHNy5RWok6UlxEvUep4OxqjHVpJ8VtBzBxjgVm5VrZTjmcC87ittMG9lMLZYKgdsnmYEie4v8Tk5mVKl2PaNn2jD008PJBjqkAfhvSyDu%2B%2BRd4t0aOw1gQymPhnyJCDFE9oI%2FU9Cn5cWPpvWZYsPHDEYv1ZNzaBGv8n8ScWe8Mm7poQ8joM2YFJGod7MiagRmIUA09H%2Fv86hY9gSMToLTP2YzTj2LIirVoT%2B%2FbZ%2ForiNE%2BROxsHlLIRBAyPv2zyTqHVAAT8vhH%2Fq6Jzl1Dp2%2BzTcajZjlml9X4w7I6ahbQP1wasbw3%2FxrpdpGW%2BDO&X-Amz-Signature=fce4a3c73e55669a22a47dd599f9af58de3c7503725678b01c73758dd3f0ffa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDSUIQZJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCEEA9KcUf8IIdxPERrcTIfP6S14%2FwSFi2x1vRgCrUKkAIhAP66v%2FmA8eN9sX6%2BXTFxlZ6dguJI%2B6U1zM6sJghhw%2F%2B7Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwiVqhbk1UShyNWCJ8q3ANILPgprXBWxrMdfbStgVahYLtDncS0Cj4XN%2B%2BZf8qbPeIJ9XTxd%2F6f0335gF1SbcgBBQmlCpSAFECiXdBBZXoFk0c9bvk%2BqL6hUiAF4FKcvUV7u4ZskEyw8cHb9HUhydG7ZMnvq1CdXvfHDElbOej4YuEFkDGKxB2qDhzAENDabLOfj%2B59%2FG99p4VZB3w8vMo6HpR8GSeJ1Mrj%2FnleZLekDbiPSrUiUiC%2F99H%2Bb0G3gp8ymuOtOBB12yEbfkcMPpJnxDxqSYr9o7cozteL1B%2F2YTwMNZqtz6nghbHcIc7lV8ki5DhKi27URgqoUbXEkK0pePzOkLqeROLK69opzddVxV4%2BNVWTVmceaYgD%2BKpEY%2FQOdKsrrmgN3dZQxEgJFBhC6Zw5s%2F8mhcq9oerc97x1cpn%2Fu5lxAoqZKZqhaNvfEytnB3QaEdzHBMFH7lIw%2FMTsfTgCqGOJxLNydO6%2BSceoC4T5bhBpaHWAQw2SIHQrOWr%2Fhw9VBaY1GxSlEfZM3ugNv2r6Vgv%2B9lBs1A3lx0LpfNbudUbu8rOdn%2BLGHNy5RWok6UlxEvUep4OxqjHVpJ8VtBzBxjgVm5VrZTjmcC87ittMG9lMLZYKgdsnmYEie4v8Tk5mVKl2PaNn2jD008PJBjqkAfhvSyDu%2B%2BRd4t0aOw1gQymPhnyJCDFE9oI%2FU9Cn5cWPpvWZYsPHDEYv1ZNzaBGv8n8ScWe8Mm7poQ8joM2YFJGod7MiagRmIUA09H%2Fv86hY9gSMToLTP2YzTj2LIirVoT%2B%2FbZ%2ForiNE%2BROxsHlLIRBAyPv2zyTqHVAAT8vhH%2Fq6Jzl1Dp2%2BzTcajZjlml9X4w7I6ahbQP1wasbw3%2FxrpdpGW%2BDO&X-Amz-Signature=dba18df9372390566e9e1a3932cb8fad386592f7e8e0fb2d0dbeb29af711e665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
