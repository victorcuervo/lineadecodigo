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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKISPI73%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBD%2FNZ2X1VnT1OsaoQ1E9ZVzE6DPD8q28RZCTqNKpK7sAiEAvQI9eL%2BvE3yMsClsXDoZCZG1RtbltSlsBijuhoS850gq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDHCGHRHJE1mhoeBaUSrcA7h48VnZ9ZLASe%2FsH8wLNjhL7GQPK6SNtXnl%2F2KH05J9YSxPYGCIsuomhcJ9zCNyxHq2OGhueP6h8eHjOBGlBz3Xc4iYOyAEFmfMFoU%2Fd6z5Apr478PdvP15k9unkECBW%2B9HeZcO7vB1I3iyzfzsQ3yJqwejZWEEp06YFcxWGE7pEe9No5mNJFqZpe65GTkhFranCY6Esrgz11OKolsB6O%2F%2BUWL0kUoF89gKLgz9TcYSgBz6cB0fsmbF%2B0ibT09ao%2F%2BSjhu0yiF7C%2B6A5HCVkclJvbkWB0rO4qkrTXZxqXt8Ji1OGC2DbBSrsIkp62iCgxOYfOAbLiC6VzAg2ELjyTsfaZgKzYWseCoS4ItcyvZoy5L7udpemvCvaEAvluLc5YanDcZP%2Fl9%2BL33rRl3ybGxKxvI4P5DdqCELTHuJbtCGNrRYaH%2BmRY2yNZcazlAkfVUgn8r68CKfXtestkQ8spRP6cWHDeXN4D6FogKbUOPS3FC2OYlBxyi5%2Bt2L%2FzOhLG9Y9lCjt8ACnya9KW%2B6mt9vJFnYbIDkhmec%2Blbl8AZ5KF4A%2FkfHyvR2C0utyN6gkIBA20d2A4cthJk%2Bxmk8m8YCG8jPqjZTdl0dpiDClSpwfYNfMJI3RVKsKCLCMPaqisoGOqUBjknZBEN6HtGbqZuGQw48mVzv%2BJ1DuNLGcuJHVooVCo8sLU%2BeiJc8LjgEFoAvrdOGhQL5WJankch5gY5OlCdIDiKT3iEMWmncQmuPJB0%2F182EGV%2BVaucdmWCHtVGwSDhF1wzqeDzOQeJ5UPo6K7UaP7NgwYIt1t2uKd1TLYXa4kgii8QYGaEAfmrwFrY7Lkh8jSZ%2BAXMpM9ItrGoCe0g4ljEG6PEa&X-Amz-Signature=be2775358c2a2208a6e5501875847e5cd11f65ce3391e6834a2ac78c2f3a0f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKISPI73%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBD%2FNZ2X1VnT1OsaoQ1E9ZVzE6DPD8q28RZCTqNKpK7sAiEAvQI9eL%2BvE3yMsClsXDoZCZG1RtbltSlsBijuhoS850gq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDHCGHRHJE1mhoeBaUSrcA7h48VnZ9ZLASe%2FsH8wLNjhL7GQPK6SNtXnl%2F2KH05J9YSxPYGCIsuomhcJ9zCNyxHq2OGhueP6h8eHjOBGlBz3Xc4iYOyAEFmfMFoU%2Fd6z5Apr478PdvP15k9unkECBW%2B9HeZcO7vB1I3iyzfzsQ3yJqwejZWEEp06YFcxWGE7pEe9No5mNJFqZpe65GTkhFranCY6Esrgz11OKolsB6O%2F%2BUWL0kUoF89gKLgz9TcYSgBz6cB0fsmbF%2B0ibT09ao%2F%2BSjhu0yiF7C%2B6A5HCVkclJvbkWB0rO4qkrTXZxqXt8Ji1OGC2DbBSrsIkp62iCgxOYfOAbLiC6VzAg2ELjyTsfaZgKzYWseCoS4ItcyvZoy5L7udpemvCvaEAvluLc5YanDcZP%2Fl9%2BL33rRl3ybGxKxvI4P5DdqCELTHuJbtCGNrRYaH%2BmRY2yNZcazlAkfVUgn8r68CKfXtestkQ8spRP6cWHDeXN4D6FogKbUOPS3FC2OYlBxyi5%2Bt2L%2FzOhLG9Y9lCjt8ACnya9KW%2B6mt9vJFnYbIDkhmec%2Blbl8AZ5KF4A%2FkfHyvR2C0utyN6gkIBA20d2A4cthJk%2Bxmk8m8YCG8jPqjZTdl0dpiDClSpwfYNfMJI3RVKsKCLCMPaqisoGOqUBjknZBEN6HtGbqZuGQw48mVzv%2BJ1DuNLGcuJHVooVCo8sLU%2BeiJc8LjgEFoAvrdOGhQL5WJankch5gY5OlCdIDiKT3iEMWmncQmuPJB0%2F182EGV%2BVaucdmWCHtVGwSDhF1wzqeDzOQeJ5UPo6K7UaP7NgwYIt1t2uKd1TLYXa4kgii8QYGaEAfmrwFrY7Lkh8jSZ%2BAXMpM9ItrGoCe0g4ljEG6PEa&X-Amz-Signature=5ae75ddeec3d967a3ca63b244627b024c95098c10bbc7ec1b8b191fcfc253013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
