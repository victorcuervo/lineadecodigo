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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USDQTIS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvI%2F3FDC0cnbenEHvMUDMrFIAtVqaHsJ05iv9NwCWCaAiAhgnpYBjL4oqqObqasBGVO1DrGyEVuuu%2FEQHd6mY3q4ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMnhLZHgjro1eJEJ27KtwDYEtPP4B4QxFkxV8QjtlAI3einmLDn2l5kSa3PH1KRxfl8Qevia%2B5YWpiuA8kj9ijg3vHQx5pjPci9MWCPsws4IPKm7raNRFZW%2BhmixF%2FWQkt5JCHFs8QWGLs1kgSSfdKHazJ34hQNTyPDE%2FtVkUPJVVT6s62prmyvuQrCJQdmBr6wrhiZRbelD2jdVK7lPY8ATQCzUa6%2FVctIiM4fZeGLTMsZ94P23HyfgUrC5z0fzUnkrvjuTWPgQWkWZnl271zZcHWfbQ3mk327f8b8HfzZt7r3aBDwM2s3PkD9YRCuacI2JwRRK5S0sDYmQ2efLdsz00U2YlZAhBcUxFe11YIt6MmRDns2uAumMaKu5emNIIWwzDrhIDxpQWqMcVaLbOGod6TM39CyYjD6uRxRsouDrLbjZKw7xufCbZHB81CvHux5Xg3IO71WR29XCGbiY%2FLt6oik%2BHHrwzTQgIMaKwjuLJlfWKPzNV01rfuGAa%2FTmB7%2Fr7nz6osq1Rm%2ByLLKwMD22%2FHV4bUx8umqUb5Sj%2BvFbYt5U%2FsBSHUs0lp8Q6m3WBcKBMRR6ExtCrBd1Xu0mAdpN1YnFt8cFfn9BBgVzuYaiSiBhCbtcFACWF2t3JA6z460QTAdGI9RfKqpAowp6bQyQY6pgGzRD6K96iDzOwQK%2FU8vao1NV7C4xkUbZEdSfLxnD89pEqY29ff7Sc080bV2bfzNHmhdIjJkcJ7oGiMytQ2oWZvrxDdWHK9iDbdKsCc%2FHeVndAtF%2B8grKsMYxZs7qAuLE8nKSd%2BCyv8F%2BkOUzUnoMGvLaGzbjHCiOaUmNB5ltRS1hYWrGymxhJCMlOtUiEpCCQk%2FlGf8O3FEAsrOd1MdhH9GdRgo2Aq&X-Amz-Signature=ae77e73a1eca6d3f54d43b60f8b65ccdfa7899373b41543125219f190f386979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USDQTIS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvI%2F3FDC0cnbenEHvMUDMrFIAtVqaHsJ05iv9NwCWCaAiAhgnpYBjL4oqqObqasBGVO1DrGyEVuuu%2FEQHd6mY3q4ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMnhLZHgjro1eJEJ27KtwDYEtPP4B4QxFkxV8QjtlAI3einmLDn2l5kSa3PH1KRxfl8Qevia%2B5YWpiuA8kj9ijg3vHQx5pjPci9MWCPsws4IPKm7raNRFZW%2BhmixF%2FWQkt5JCHFs8QWGLs1kgSSfdKHazJ34hQNTyPDE%2FtVkUPJVVT6s62prmyvuQrCJQdmBr6wrhiZRbelD2jdVK7lPY8ATQCzUa6%2FVctIiM4fZeGLTMsZ94P23HyfgUrC5z0fzUnkrvjuTWPgQWkWZnl271zZcHWfbQ3mk327f8b8HfzZt7r3aBDwM2s3PkD9YRCuacI2JwRRK5S0sDYmQ2efLdsz00U2YlZAhBcUxFe11YIt6MmRDns2uAumMaKu5emNIIWwzDrhIDxpQWqMcVaLbOGod6TM39CyYjD6uRxRsouDrLbjZKw7xufCbZHB81CvHux5Xg3IO71WR29XCGbiY%2FLt6oik%2BHHrwzTQgIMaKwjuLJlfWKPzNV01rfuGAa%2FTmB7%2Fr7nz6osq1Rm%2ByLLKwMD22%2FHV4bUx8umqUb5Sj%2BvFbYt5U%2FsBSHUs0lp8Q6m3WBcKBMRR6ExtCrBd1Xu0mAdpN1YnFt8cFfn9BBgVzuYaiSiBhCbtcFACWF2t3JA6z460QTAdGI9RfKqpAowp6bQyQY6pgGzRD6K96iDzOwQK%2FU8vao1NV7C4xkUbZEdSfLxnD89pEqY29ff7Sc080bV2bfzNHmhdIjJkcJ7oGiMytQ2oWZvrxDdWHK9iDbdKsCc%2FHeVndAtF%2B8grKsMYxZs7qAuLE8nKSd%2BCyv8F%2BkOUzUnoMGvLaGzbjHCiOaUmNB5ltRS1hYWrGymxhJCMlOtUiEpCCQk%2FlGf8O3FEAsrOd1MdhH9GdRgo2Aq&X-Amz-Signature=84a61a97dada32d116fa3272ab40f36a267396e15dd1c0d8e637766d2ecb5980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
