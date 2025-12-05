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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2QSN6CB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWdPLcxKFE1JNWwlP%2FMIDOk8DT9Wr062e%2B1DfAppyc2gIhAMFWlZKmAoRdGnObvlmgr9OIWUo8U1HFHeBYr8rD6nr5Kv8DCFoQABoMNjM3NDIzMTgzODA1IgzruBGN%2Fil8EOuXvwUq3ANPwHML3OaKMGmgy%2B8bl4PTPet61A4T9LOMN19BtvKRGX7I5dVCe8W3rPyvfxa3LRCHeiDEnrYmU6GI2VrJJrE1l9AF0ZAq9ob2ImIcGfGIs4%2FDcwQtLsiICIuDnJszTBDXoEnsXbVPYCG1PNy6QqN4uH1e65Gb5%2BFzSM9VDLa9tdmcNJrQAm41zNjbFPq9Mgu4qFUZKwSzZIrCj1O94JLjPXteN4Fz7QVx2n0XDp42p8KkyRnGV6WDNsrrfprWYFB%2Fe8ZfL3y4n1combJXVczYxW91DNADyQL8r00rxdi1vVtMGUFC25I9zWb4zADVfWLxQs7C9jChoySHn1v7vCW4UxaGZAvd1BGCTaw8%2B7TAqiMPGNCibj32F94w1u%2BG9Le%2B0%2Bi1uWCabYnsRY0cyfkMsBTwzvce%2FUGKR0zv7fZpSWc81uH4ZfUaxVF2e2%2FY3yWdTpaqh3oqs25iJ2OBmzEFiZJDdT%2FXEuytxN9%2BwbbWYoH%2BR8V06Uzq7qtF9G89NVF6XAizbJmoapFwJBEoKGUpch1OTF1waGiDGYV2mx63DdgKFxYqUZFzcvSrbiZKRvGCUgLrBscOhE4Be3AriNe%2ByWhc4gVcs9FY1wjN9Ivfpo3n5w8XQ6HaN3F2oTDqxsrJBjqkAc3IHfEF9njaEZFtIj6eBEZmVZe1PIO%2BAbRqT5xPDaqPOh5JQZcEW8YhOzZ6ZRV2H2nZzpesdsUmg9KRCeFUd9ah4X9J62PpSDE%2BoxBGvB6bH6Ce8YnM7Q2m9GFgELwvFbW9rV6D7x7bjyHANWkLONdiS7q0tZ9Aat%2BhEGP0zarKKSqhiio8fWLKN%2FvNg7O7eNkqQzj761JWY3CPPogECmIMGpHz&X-Amz-Signature=4f02d6d05c0b6646f83dcbeaf582d785478e886bd29cedfe18f4a1edee2dedc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2QSN6CB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWdPLcxKFE1JNWwlP%2FMIDOk8DT9Wr062e%2B1DfAppyc2gIhAMFWlZKmAoRdGnObvlmgr9OIWUo8U1HFHeBYr8rD6nr5Kv8DCFoQABoMNjM3NDIzMTgzODA1IgzruBGN%2Fil8EOuXvwUq3ANPwHML3OaKMGmgy%2B8bl4PTPet61A4T9LOMN19BtvKRGX7I5dVCe8W3rPyvfxa3LRCHeiDEnrYmU6GI2VrJJrE1l9AF0ZAq9ob2ImIcGfGIs4%2FDcwQtLsiICIuDnJszTBDXoEnsXbVPYCG1PNy6QqN4uH1e65Gb5%2BFzSM9VDLa9tdmcNJrQAm41zNjbFPq9Mgu4qFUZKwSzZIrCj1O94JLjPXteN4Fz7QVx2n0XDp42p8KkyRnGV6WDNsrrfprWYFB%2Fe8ZfL3y4n1combJXVczYxW91DNADyQL8r00rxdi1vVtMGUFC25I9zWb4zADVfWLxQs7C9jChoySHn1v7vCW4UxaGZAvd1BGCTaw8%2B7TAqiMPGNCibj32F94w1u%2BG9Le%2B0%2Bi1uWCabYnsRY0cyfkMsBTwzvce%2FUGKR0zv7fZpSWc81uH4ZfUaxVF2e2%2FY3yWdTpaqh3oqs25iJ2OBmzEFiZJDdT%2FXEuytxN9%2BwbbWYoH%2BR8V06Uzq7qtF9G89NVF6XAizbJmoapFwJBEoKGUpch1OTF1waGiDGYV2mx63DdgKFxYqUZFzcvSrbiZKRvGCUgLrBscOhE4Be3AriNe%2ByWhc4gVcs9FY1wjN9Ivfpo3n5w8XQ6HaN3F2oTDqxsrJBjqkAc3IHfEF9njaEZFtIj6eBEZmVZe1PIO%2BAbRqT5xPDaqPOh5JQZcEW8YhOzZ6ZRV2H2nZzpesdsUmg9KRCeFUd9ah4X9J62PpSDE%2BoxBGvB6bH6Ce8YnM7Q2m9GFgELwvFbW9rV6D7x7bjyHANWkLONdiS7q0tZ9Aat%2BhEGP0zarKKSqhiio8fWLKN%2FvNg7O7eNkqQzj761JWY3CPPogECmIMGpHz&X-Amz-Signature=3eb24fcb7c8f8ac1c4f5eeba98dae36c2f111e47e8240dcce6511c6bed001670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
