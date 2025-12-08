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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XDCU32B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGgaWgoUByxdDBCIYP7WxiYoCwwalAqfw1hYUIUlomFAiEAsfXLhLkAANZrV2h6QsO%2FeXqxxbPN8mh9ss81ORHjJy8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5AMDjc6A%2FSoOXFnircA2fYekx4ZTmIiJW2hVPGM%2FQbZTI9lH2QuIKZ8fPNxVEb%2BxzzIRAg3xld8nLmWBNfxFNMm46%2Bcr5bXOVOcKZFo5xtM%2FtAN84a64ofgxxRoWc9g%2FS8C9LxCRdlBEulT8Tkrr9JFs1TR2vBNyhHjo1%2B2EsMstRiqVjr15Zv%2BAB%2FK2mwNNaJ4PoyumBJVwOzvBjhqUSoUcCLIOBbyoY2bna9CmtA30GNvEmIbj2h%2F3yzYSciRUa0nKbMx5bP8%2F7VrlEWxldos3QHBRIRXtPNNyYvSZah1WwNLQv5b14oQom38OICNXkhjcYcEAhUWzBERU9bCehhaMN3LowYmpQPjGUdyzUxpPajwsT%2FSfZIMZMM3p5QSITaq9nQ8%2B%2BaBm9L6S8W2Cu3whmIqen3P0HuGyJtl%2BloZe2cW3zvDGB0U%2BWNoxzCopujheXITsEdSRbTxnFRNEd9PQNLJ7WsSzRL3pJ7gO55znNxLnF5L5Db8H3VUfNmPTKF%2Fm0i991Yf%2FyAehpXbXw5Bl5AjSKzUoxrojI0zkGNqSdd6fO9oks%2FFK7qg9ZS25DXbGa3XNC5Flmkq%2FRIPyM%2FItbyBGKzbBjZimyE60ysy0zyu2LEW2NbB7UD%2Bej%2FAMFzwnZAtbNN%2F2tUMMmG3MkGOqUB%2FmjmSk9Ev9a1n7tYbQGNttTelA8c%2Fe9DGmL%2BaO5icfW5U0BAkNdSmWtd%2BMZVYG6JFpO5nnnfSBAbGhWxzN91%2FMnp7OZD7DLCokc1cG%2FnybJ%2FYTeE83lAzkJzmdwIZuYP3Ts%2FFOYw9Vh01UOiV9gG05a6D8Zs0Zl6Aa9Z60xXK6fxtwzg3vgF233FTSb%2Fy09v9I1QgY85v6uOro9Ap%2BB37igapCNS&X-Amz-Signature=0d8495c442ca15b17d699ee21a79ce97df667e7f4c0fa20772689558bf497f6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XDCU32B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGgaWgoUByxdDBCIYP7WxiYoCwwalAqfw1hYUIUlomFAiEAsfXLhLkAANZrV2h6QsO%2FeXqxxbPN8mh9ss81ORHjJy8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5AMDjc6A%2FSoOXFnircA2fYekx4ZTmIiJW2hVPGM%2FQbZTI9lH2QuIKZ8fPNxVEb%2BxzzIRAg3xld8nLmWBNfxFNMm46%2Bcr5bXOVOcKZFo5xtM%2FtAN84a64ofgxxRoWc9g%2FS8C9LxCRdlBEulT8Tkrr9JFs1TR2vBNyhHjo1%2B2EsMstRiqVjr15Zv%2BAB%2FK2mwNNaJ4PoyumBJVwOzvBjhqUSoUcCLIOBbyoY2bna9CmtA30GNvEmIbj2h%2F3yzYSciRUa0nKbMx5bP8%2F7VrlEWxldos3QHBRIRXtPNNyYvSZah1WwNLQv5b14oQom38OICNXkhjcYcEAhUWzBERU9bCehhaMN3LowYmpQPjGUdyzUxpPajwsT%2FSfZIMZMM3p5QSITaq9nQ8%2B%2BaBm9L6S8W2Cu3whmIqen3P0HuGyJtl%2BloZe2cW3zvDGB0U%2BWNoxzCopujheXITsEdSRbTxnFRNEd9PQNLJ7WsSzRL3pJ7gO55znNxLnF5L5Db8H3VUfNmPTKF%2Fm0i991Yf%2FyAehpXbXw5Bl5AjSKzUoxrojI0zkGNqSdd6fO9oks%2FFK7qg9ZS25DXbGa3XNC5Flmkq%2FRIPyM%2FItbyBGKzbBjZimyE60ysy0zyu2LEW2NbB7UD%2Bej%2FAMFzwnZAtbNN%2F2tUMMmG3MkGOqUB%2FmjmSk9Ev9a1n7tYbQGNttTelA8c%2Fe9DGmL%2BaO5icfW5U0BAkNdSmWtd%2BMZVYG6JFpO5nnnfSBAbGhWxzN91%2FMnp7OZD7DLCokc1cG%2FnybJ%2FYTeE83lAzkJzmdwIZuYP3Ts%2FFOYw9Vh01UOiV9gG05a6D8Zs0Zl6Aa9Z60xXK6fxtwzg3vgF233FTSb%2Fy09v9I1QgY85v6uOro9Ap%2BB37igapCNS&X-Amz-Signature=7bfa35cdb768cdde4f94329b6d5e93657118f59764822478706055eb28c0ed51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
