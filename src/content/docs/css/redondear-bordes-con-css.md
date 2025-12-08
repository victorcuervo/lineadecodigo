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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4X6JCPG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAAexMkoLd0AUWgzRgShJIzLPfPy0tP2ZUFLu19%2Bq4kAiAhBq5fGXcNEUvYWPqeOLS8A%2ByhuzQ3n59jQqstKn%2BY6iqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxrTI15JwDaXS3cGFKtwDyNcE4F3J%2FyXggIE4CWZ5zLCETD2VX0hCzPhOeiBUiJjpVZlf0hauZNdlNaFt%2FRwfs%2B4o1O3IV7EZ2FO1oJ0soMRXj0QpxeAX6kmo3giT5Wg179YyG%2F32z89aJbKu%2FyqfHAon3D8AZFUsiEVAXk5V9mORz3zNcJ2SRsxjeaOVjPAEsAU7mivQyYPIe8adBKAxk1Fwg0cXU2gP44%2FueWyHwC8FpkOxr18mYgWO4cB3CIs%2Bu46LtWRSVdDbnxIozd5utqD97nQF8OIO8hm1dV9hvYr2VFxFzpGKnmgLSvwe4p%2Famm7IuNWfJafaJA7ccFKkltLJtJD4H0gUf6LBZpZcgdFhUhM73ajovbIiu2XtzhPWh31K4ZNF%2FQEPy5GmflQHaPXzTf33BSBIRwLLGqwFlWshHbJDYMZN2uveWKfZ09CK2KIE0g3l9%2Fe0HNXJpOfOInwHvBk50FKKQux1h3MLBtrZDv3mdvR9C56ubE%2FujYK8MvQvgWZvL4oaUS4GtzgDdWoePpYajrUHfqEmNji56IS8OHxPWMjty50LWIeuCiwoi%2BbNFzZMx0DidUcx2MZK%2FiHTFdMW85DD%2ByUjfHBFHpU%2F3RdaPr%2BXAGU0kMAw6Y%2Fgaepzv%2B34AMjXCEEwmfTayQY6pgFklAvV8NmnJSWeFkiUL8tZjM8%2FY8n%2BncY38iFKqc6cSjP4yC%2Fh%2BWBnyHyO1%2Fi%2BF3hq7BxG9iWkwXTB06o8Ezp8etKaRI8yGMkXZ0PLmC7SM6YU9PUbGCsdeP%2FI0D7A%2BleqHLIpaWvldBqQDuormd5qpZsStFpigAuPn%2FxGyHhKBjAUsRh5Xj2NW1B%2B%2B2YLzkTxYw6zC7jseldpvYlq3r4yitjtIlZq&X-Amz-Signature=2f8c0e7a1daa0ae1a52508bfb3beef35aa3069f1e926807d2af6652d6aea561e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4X6JCPG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAAexMkoLd0AUWgzRgShJIzLPfPy0tP2ZUFLu19%2Bq4kAiAhBq5fGXcNEUvYWPqeOLS8A%2ByhuzQ3n59jQqstKn%2BY6iqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxrTI15JwDaXS3cGFKtwDyNcE4F3J%2FyXggIE4CWZ5zLCETD2VX0hCzPhOeiBUiJjpVZlf0hauZNdlNaFt%2FRwfs%2B4o1O3IV7EZ2FO1oJ0soMRXj0QpxeAX6kmo3giT5Wg179YyG%2F32z89aJbKu%2FyqfHAon3D8AZFUsiEVAXk5V9mORz3zNcJ2SRsxjeaOVjPAEsAU7mivQyYPIe8adBKAxk1Fwg0cXU2gP44%2FueWyHwC8FpkOxr18mYgWO4cB3CIs%2Bu46LtWRSVdDbnxIozd5utqD97nQF8OIO8hm1dV9hvYr2VFxFzpGKnmgLSvwe4p%2Famm7IuNWfJafaJA7ccFKkltLJtJD4H0gUf6LBZpZcgdFhUhM73ajovbIiu2XtzhPWh31K4ZNF%2FQEPy5GmflQHaPXzTf33BSBIRwLLGqwFlWshHbJDYMZN2uveWKfZ09CK2KIE0g3l9%2Fe0HNXJpOfOInwHvBk50FKKQux1h3MLBtrZDv3mdvR9C56ubE%2FujYK8MvQvgWZvL4oaUS4GtzgDdWoePpYajrUHfqEmNji56IS8OHxPWMjty50LWIeuCiwoi%2BbNFzZMx0DidUcx2MZK%2FiHTFdMW85DD%2ByUjfHBFHpU%2F3RdaPr%2BXAGU0kMAw6Y%2Fgaepzv%2B34AMjXCEEwmfTayQY6pgFklAvV8NmnJSWeFkiUL8tZjM8%2FY8n%2BncY38iFKqc6cSjP4yC%2Fh%2BWBnyHyO1%2Fi%2BF3hq7BxG9iWkwXTB06o8Ezp8etKaRI8yGMkXZ0PLmC7SM6YU9PUbGCsdeP%2FI0D7A%2BleqHLIpaWvldBqQDuormd5qpZsStFpigAuPn%2FxGyHhKBjAUsRh5Xj2NW1B%2B%2B2YLzkTxYw6zC7jseldpvYlq3r4yitjtIlZq&X-Amz-Signature=69b93b285de1fdcb36b070aa30a74f1c1535d33fda310f4386e05c4caa6d2663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
