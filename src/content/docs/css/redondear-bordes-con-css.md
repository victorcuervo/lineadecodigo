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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYVK6OWP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCG6d9umUHnNU3YFQS3ZgGvJ4FEtFSlj1jgMdk%2BGevbiAIgCfTfjIeA8aBpVtpO72nGV9maA3Uh%2BzSCIhwTT1IQ3ZUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFdyYnjib5QZdZCoASrcA%2BtoVAqR5W%2Fe1iwtNrHQVebcqT%2FuXnA%2FeHLxCcV%2BINaY%2FV6K%2FBqAQVpm9olsZoNG6Cy9oBhJJjkXoSdgR2nrOQnIhFwe2SdJg6y5TbQ0rTtRM7yTSKgNj6MTLxB8vEq7O8IJegrg2aFeXWcVc9r%2FetvhjxkRqeNL2wtjMYCq2aqOP4uynZuItGnrPHI8iEsT%2F8lUGlFlmeQtAqo2F8IjyO5ffy5jBfV0I3FflRmGUjPORLw2Tr26vc7BnKrup2f%2BC8uPJXPZcdwG8zNIxb1UPli3ke1%2BkQ%2FTAE%2BdB8vBmWC3Qj9Bwi4fOJpG9NbhU0%2FTEiCoPdSfpQkAGmV2EM3LuF92y9%2FSLA1NZBXenxwcfXGrfltx5roPtV1M7W9r6OehgY%2BFwcBaGahzFsmGQscSFinoOX0Ww6wbiyAx%2BesrBAMW6zbjZOT78bRcl5Qmf3D0iiaq6shxQddmwZRqIwn4KP%2B2eUMsPdK%2Flee%2BENhfD3hB8ITN65bdv3NzGlz8ohl0b%2FkoIpwC6gKdXFrls3zG0T9cHophAGeyO3Tgbdu9qL8yydph3OdPa8wIpYZVrPQTz9i4y5uzgzYkEuwucbKh2UW5F1GZHW70S5UGoFr23irYEY5QCkbEWzTPtHMMMJeRxMkGOqUBiuie7sDagpKXkr%2FeyVQYMtXoU0X%2FBSsVwE2NkJULiLVmFhcxaXzs5SWB1VBXQUplQ0FKBDQ0pydiQXiqjOYU4PIPKIklj7a%2FSI8h%2B%2B8f5HQpgg%2FecaMiC4PxolMCl9DD9wHHLWTUAoFt61AZXSExslzsV9z%2Fk69KZYXmKIvGJIMat5voZTmDuoaUElAnz3OBLlObsE9bNaBePEt8NwXprQQxUOAq&X-Amz-Signature=3001197fe44971e2694649b9438e302d747d91ac425c914cd2f22b41d62fef42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYVK6OWP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCG6d9umUHnNU3YFQS3ZgGvJ4FEtFSlj1jgMdk%2BGevbiAIgCfTfjIeA8aBpVtpO72nGV9maA3Uh%2BzSCIhwTT1IQ3ZUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFdyYnjib5QZdZCoASrcA%2BtoVAqR5W%2Fe1iwtNrHQVebcqT%2FuXnA%2FeHLxCcV%2BINaY%2FV6K%2FBqAQVpm9olsZoNG6Cy9oBhJJjkXoSdgR2nrOQnIhFwe2SdJg6y5TbQ0rTtRM7yTSKgNj6MTLxB8vEq7O8IJegrg2aFeXWcVc9r%2FetvhjxkRqeNL2wtjMYCq2aqOP4uynZuItGnrPHI8iEsT%2F8lUGlFlmeQtAqo2F8IjyO5ffy5jBfV0I3FflRmGUjPORLw2Tr26vc7BnKrup2f%2BC8uPJXPZcdwG8zNIxb1UPli3ke1%2BkQ%2FTAE%2BdB8vBmWC3Qj9Bwi4fOJpG9NbhU0%2FTEiCoPdSfpQkAGmV2EM3LuF92y9%2FSLA1NZBXenxwcfXGrfltx5roPtV1M7W9r6OehgY%2BFwcBaGahzFsmGQscSFinoOX0Ww6wbiyAx%2BesrBAMW6zbjZOT78bRcl5Qmf3D0iiaq6shxQddmwZRqIwn4KP%2B2eUMsPdK%2Flee%2BENhfD3hB8ITN65bdv3NzGlz8ohl0b%2FkoIpwC6gKdXFrls3zG0T9cHophAGeyO3Tgbdu9qL8yydph3OdPa8wIpYZVrPQTz9i4y5uzgzYkEuwucbKh2UW5F1GZHW70S5UGoFr23irYEY5QCkbEWzTPtHMMMJeRxMkGOqUBiuie7sDagpKXkr%2FeyVQYMtXoU0X%2FBSsVwE2NkJULiLVmFhcxaXzs5SWB1VBXQUplQ0FKBDQ0pydiQXiqjOYU4PIPKIklj7a%2FSI8h%2B%2B8f5HQpgg%2FecaMiC4PxolMCl9DD9wHHLWTUAoFt61AZXSExslzsV9z%2Fk69KZYXmKIvGJIMat5voZTmDuoaUElAnz3OBLlObsE9bNaBePEt8NwXprQQxUOAq&X-Amz-Signature=50498175c14c133769e6afba518d496f23ae84ea1040bddb79c3f7ec15581e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
