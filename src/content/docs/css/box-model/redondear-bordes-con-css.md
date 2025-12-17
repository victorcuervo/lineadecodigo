---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VTSLD4X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvN7re%2BuTZxU%2BuIdzz6j9gH71aYznwyuwQ3Z4WLF9L9QIge7x1Ztcz1%2Byrnk7lAyf3HAnIPEp0SBrdlpglDBqck%2Foq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDMhh5ESybqQRmIqp3SrcA5WvWKttc6OF5gEe6QaiFMZBc4bBt8pj3rDv0m%2BqJ%2F7S%2B1FBZgRYG2bBgui%2B5Asx1HTZ68R%2Fo4pVUY7iLuMvq7W9I3PbDK7WrE5ql8WgLIwr9yzE5zuqdT%2BlyDYhsxwu8eybgcEB7QKWonSWZEILpJ1s2F6xCBuyGzEyPcyv%2FgjkAttuqPqfvIy4rtwFV2HbfbKDw2jEL8daR64fXi6uz9rdVW5s%2Bg3pqMqwC4BTncfIJ8QVJzMoCmsmHI31tB8MEb17OkjcA1P5zwhwc5vzKUzingMAVpyhEA3tJ0pGwLZfjnbOhU6t3L6UhBKWjQlpPwr0H2RzkRy3RiieiWZzOh8RZB9fH6VTg5Cw0f5KP0xhVZeG87JVeGceYrT0lO6HY1juge5cCy0SVdHGpL0ej1N9c0oKxFRiix2JLPuJillWDD3qHljpisAGTiXvd43b963AfLLp3tCAIiwOOdYXAOU%2Fr9T4GZ1Z60SjrhlA%2FP%2BdnSivBWy%2F%2BDU4A5uH9zpcw%2FIfcZ1l%2F5v50XBPz%2B6kJToSpOKmucYaej31wya0eUBuXocxO4G5cw%2F5D0wa%2FBOyaFForPUtVeiozYW0MW8udlANGKK2EW%2Fi2Rix3tz8o9wo8f8TCUG5PIu3q1GoMOjRicoGOqUBvIfFH7hNIf7%2FI3t3Ih56%2BkN78hACbf%2B5QERuMQ1cT61Art9Lwt00BP7zOLVAnu8gs8%2BHnTaSmPp4W5tdLqIW5yGxk0zgS%2FXpfjuD3jaYt%2Bi4rVJ2GgwIBtxcdT8ZE%2B2jgfVzYy%2FkLT53HenOS5pW6m4tljXoIjcfqoh3iv66831OWtIhxRjBvySoYlh2YFrcDcmL3cVrsYnfR4PJ7wF401fhPcon&X-Amz-Signature=b2ccc56d17d4fe1a0780a19504d0ed5889e6010c42e557aeccdea3b7e6fa6326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VTSLD4X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvN7re%2BuTZxU%2BuIdzz6j9gH71aYznwyuwQ3Z4WLF9L9QIge7x1Ztcz1%2Byrnk7lAyf3HAnIPEp0SBrdlpglDBqck%2Foq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDMhh5ESybqQRmIqp3SrcA5WvWKttc6OF5gEe6QaiFMZBc4bBt8pj3rDv0m%2BqJ%2F7S%2B1FBZgRYG2bBgui%2B5Asx1HTZ68R%2Fo4pVUY7iLuMvq7W9I3PbDK7WrE5ql8WgLIwr9yzE5zuqdT%2BlyDYhsxwu8eybgcEB7QKWonSWZEILpJ1s2F6xCBuyGzEyPcyv%2FgjkAttuqPqfvIy4rtwFV2HbfbKDw2jEL8daR64fXi6uz9rdVW5s%2Bg3pqMqwC4BTncfIJ8QVJzMoCmsmHI31tB8MEb17OkjcA1P5zwhwc5vzKUzingMAVpyhEA3tJ0pGwLZfjnbOhU6t3L6UhBKWjQlpPwr0H2RzkRy3RiieiWZzOh8RZB9fH6VTg5Cw0f5KP0xhVZeG87JVeGceYrT0lO6HY1juge5cCy0SVdHGpL0ej1N9c0oKxFRiix2JLPuJillWDD3qHljpisAGTiXvd43b963AfLLp3tCAIiwOOdYXAOU%2Fr9T4GZ1Z60SjrhlA%2FP%2BdnSivBWy%2F%2BDU4A5uH9zpcw%2FIfcZ1l%2F5v50XBPz%2B6kJToSpOKmucYaej31wya0eUBuXocxO4G5cw%2F5D0wa%2FBOyaFForPUtVeiozYW0MW8udlANGKK2EW%2Fi2Rix3tz8o9wo8f8TCUG5PIu3q1GoMOjRicoGOqUBvIfFH7hNIf7%2FI3t3Ih56%2BkN78hACbf%2B5QERuMQ1cT61Art9Lwt00BP7zOLVAnu8gs8%2BHnTaSmPp4W5tdLqIW5yGxk0zgS%2FXpfjuD3jaYt%2Bi4rVJ2GgwIBtxcdT8ZE%2B2jgfVzYy%2FkLT53HenOS5pW6m4tljXoIjcfqoh3iv66831OWtIhxRjBvySoYlh2YFrcDcmL3cVrsYnfR4PJ7wF401fhPcon&X-Amz-Signature=cdd1bfe6862da41f032776d7f56d64c8331b23290465a386988387ef442eff7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
