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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUIX6R3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5BPmKZTYIiIS93wrRr9NaZT8MrkJMaMMtLI1FOEYlPQIgQ3kGKTT4gJYggZBLGx3vRs1XswpzcScRvP7hCMMy9eEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6ptDZmLUbWrM18TyrcA3P%2F0v4cjaWEOhqgyChDPMPAmshGCvPq42cNNWgGbu2rWORN6BK7NkHeudcs9c6DDrNIwpL9f9L%2Bn%2B2NyvbvXJ%2BBOEPej5W9gZYru78JW6rCc4%2FJ4Fvd6m82eZK99f9tVSN%2B8M7PB3pRrSXRvWKKj3M7TYj06aK4d%2FjTSprJZvHejOcv96%2FtZ9h%2FL151wHobZJgyT%2FtZXi5qywzZy3wQOR1fOf3PCpiuFocSPsYgjA%2FCfDtVyiSaaOjuBNkNaLxS6R1Eodeui7%2FCd6VCGqUkRwIgbs3URsThzFOYSXG%2BHdpntoDlvM1IUNtQBKH6zTa4ci7PLnrUySodvOFR%2Fv8q5puO9L%2FRZIVqQjwfGHYzgsSdKmdDGBleOvvqke9H64Fk1XxNtHlwTZdWENlSuAMarbIpEwQTc%2BL5nrOhj4NWsUMUPZMF0pRZgGceb3m9wk6cKlqAMygaguZHVg%2BgpKYY1igO7WMVGd6A1z9KG2z3GlDjCM8LpHYeDdVCnWyyZzG1DHp385y841i94cFQ2jckGLvPK4JgX%2FEP0KhghrS7w77d86v5g4ZdRIKm3batmesiU6R2Wu%2BTqkRUzcfRix9NF2EZOUdGhqJr0%2B0im9h8I%2B7n%2BLLAULsfyqgbWMTGMIa91skGOqUBvysESzZgvPnBbJGcyQdEDIXWVj1MkcdAvz26YTwH7EgsIZxJS35z%2FPl%2FlCRomQlHmnGmGkTas7tsqbcKgnYqKrADztcJmMlfHVVFga0wYahwLIrUL9C2DblypIzCttbGJXE41wJvBIya%2FtkK0MZbQIfYandK%2FIWtKb60Kxqr%2FvAPrvJShEaAS0Jx2lTlZkAssF03gEsqM5WYJMgWL8veCvMCxS09&X-Amz-Signature=bf59baed8c6bed08a68f9dfeb80306b5120cdc8f41adcf57e2121366d6328c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUIX6R3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5BPmKZTYIiIS93wrRr9NaZT8MrkJMaMMtLI1FOEYlPQIgQ3kGKTT4gJYggZBLGx3vRs1XswpzcScRvP7hCMMy9eEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6ptDZmLUbWrM18TyrcA3P%2F0v4cjaWEOhqgyChDPMPAmshGCvPq42cNNWgGbu2rWORN6BK7NkHeudcs9c6DDrNIwpL9f9L%2Bn%2B2NyvbvXJ%2BBOEPej5W9gZYru78JW6rCc4%2FJ4Fvd6m82eZK99f9tVSN%2B8M7PB3pRrSXRvWKKj3M7TYj06aK4d%2FjTSprJZvHejOcv96%2FtZ9h%2FL151wHobZJgyT%2FtZXi5qywzZy3wQOR1fOf3PCpiuFocSPsYgjA%2FCfDtVyiSaaOjuBNkNaLxS6R1Eodeui7%2FCd6VCGqUkRwIgbs3URsThzFOYSXG%2BHdpntoDlvM1IUNtQBKH6zTa4ci7PLnrUySodvOFR%2Fv8q5puO9L%2FRZIVqQjwfGHYzgsSdKmdDGBleOvvqke9H64Fk1XxNtHlwTZdWENlSuAMarbIpEwQTc%2BL5nrOhj4NWsUMUPZMF0pRZgGceb3m9wk6cKlqAMygaguZHVg%2BgpKYY1igO7WMVGd6A1z9KG2z3GlDjCM8LpHYeDdVCnWyyZzG1DHp385y841i94cFQ2jckGLvPK4JgX%2FEP0KhghrS7w77d86v5g4ZdRIKm3batmesiU6R2Wu%2BTqkRUzcfRix9NF2EZOUdGhqJr0%2B0im9h8I%2B7n%2BLLAULsfyqgbWMTGMIa91skGOqUBvysESzZgvPnBbJGcyQdEDIXWVj1MkcdAvz26YTwH7EgsIZxJS35z%2FPl%2FlCRomQlHmnGmGkTas7tsqbcKgnYqKrADztcJmMlfHVVFga0wYahwLIrUL9C2DblypIzCttbGJXE41wJvBIya%2FtkK0MZbQIfYandK%2FIWtKb60Kxqr%2FvAPrvJShEaAS0Jx2lTlZkAssF03gEsqM5WYJMgWL8veCvMCxS09&X-Amz-Signature=8ff575b00198d3251cc9844bfab6cba9a6ff3ff7d0aa5849ae4c0d4415742926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
