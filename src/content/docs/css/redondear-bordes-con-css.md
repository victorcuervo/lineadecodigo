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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z24WL7OI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHxaI%2BYGE97z6p%2BUe9n4SBU2Ki3otKT0DgaHvCMoNRbAiAmfpvgAEa2xAPTWkKROw8Uh3m6xnJ6ClKe4EqW8v7dDSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy3cKbxKjXBtfic%2FLKtwDrXmzWiUy1QGF9%2BP1bz5pic5LAIY7niAr%2Bg7uvKTPacqXWt75Zwn%2F98KI%2FmwfdQ%2F1F3%2B%2FwpfPCJ2AmWk%2BT%2BeqJEe4Ld0x8%2FmaXqlRladAvxFaTsrfMJQKEawm8qI1u7wA70Eco0iSBHMi5VRC7eS7wH9yrzvpGsC%2BhGQcLrW8Vl6nzbcAjO1N%2Fvtk34GZzd61l7fBldRmTlFjHebYPB9k5K91wXeXeEk9rsWCQZBgbNwllXPCLH%2BNYvIlh%2BEsp0hCBwsi6hYP34L7KyrvpqQ8SoFwuV2cCuwtgB%2BXDWaDfqGGxVectFSie%2BRisyiBc7gMGvVdfAClaNsJ6xja1zTDA4Mp0QGQNR1c9cDixUM9uZSda1%2BIqpyGQp41Ov2LyA9WOys%2FjR6izXo3OvRjT14X867VhsGU4MkkEuUI1srGyjjFPD6pVcZPpxu4vkQ6F5geazPC3rVt0XszXON5HNRdYZUcXbpPsWuQqTg0MLbm6UaJRbHyVbjhUoJE7M%2BqWv12nLH5TLAFf3QdESdLxtKvOf%2BWKYhtes2TYkBQVb2aT%2BLCp5cG0IHlFJEjmAF%2FkfDITDklFV76xp8nml9ua3QhYaVk5VjPTrsSW8D6fKtFDvnde6iq1sxBSjJVPkMwh4fcyQY6pgFLdRQGK%2FznF88pfGqUYgqirRYzSp2t2bCr%2FgzHAm7WRltptJA4O8VhLcjZ%2FfRVFqW62bB7RhGEN0YVhwddZ%2Fu%2BuFjw0g2j1QKc4E%2FFMJHKQe%2FrlMANlSwZmA8e9CEqXWNG8HisZfqoZ7uS00XLrtDPj9E02r3jvoANJ3ZSjUE2qG%2F%2Bmd1YrVnlr0fmil%2FC0YyPy%2BcAx%2BX0bCDKa8thqkcRjKWpFwsa&X-Amz-Signature=a90127850fa95e293f31ad851594c180a6711bce85560ee1c046dcf401885c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z24WL7OI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHxaI%2BYGE97z6p%2BUe9n4SBU2Ki3otKT0DgaHvCMoNRbAiAmfpvgAEa2xAPTWkKROw8Uh3m6xnJ6ClKe4EqW8v7dDSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy3cKbxKjXBtfic%2FLKtwDrXmzWiUy1QGF9%2BP1bz5pic5LAIY7niAr%2Bg7uvKTPacqXWt75Zwn%2F98KI%2FmwfdQ%2F1F3%2B%2FwpfPCJ2AmWk%2BT%2BeqJEe4Ld0x8%2FmaXqlRladAvxFaTsrfMJQKEawm8qI1u7wA70Eco0iSBHMi5VRC7eS7wH9yrzvpGsC%2BhGQcLrW8Vl6nzbcAjO1N%2Fvtk34GZzd61l7fBldRmTlFjHebYPB9k5K91wXeXeEk9rsWCQZBgbNwllXPCLH%2BNYvIlh%2BEsp0hCBwsi6hYP34L7KyrvpqQ8SoFwuV2cCuwtgB%2BXDWaDfqGGxVectFSie%2BRisyiBc7gMGvVdfAClaNsJ6xja1zTDA4Mp0QGQNR1c9cDixUM9uZSda1%2BIqpyGQp41Ov2LyA9WOys%2FjR6izXo3OvRjT14X867VhsGU4MkkEuUI1srGyjjFPD6pVcZPpxu4vkQ6F5geazPC3rVt0XszXON5HNRdYZUcXbpPsWuQqTg0MLbm6UaJRbHyVbjhUoJE7M%2BqWv12nLH5TLAFf3QdESdLxtKvOf%2BWKYhtes2TYkBQVb2aT%2BLCp5cG0IHlFJEjmAF%2FkfDITDklFV76xp8nml9ua3QhYaVk5VjPTrsSW8D6fKtFDvnde6iq1sxBSjJVPkMwh4fcyQY6pgFLdRQGK%2FznF88pfGqUYgqirRYzSp2t2bCr%2FgzHAm7WRltptJA4O8VhLcjZ%2FfRVFqW62bB7RhGEN0YVhwddZ%2Fu%2BuFjw0g2j1QKc4E%2FFMJHKQe%2FrlMANlSwZmA8e9CEqXWNG8HisZfqoZ7uS00XLrtDPj9E02r3jvoANJ3ZSjUE2qG%2F%2Bmd1YrVnlr0fmil%2FC0YyPy%2BcAx%2BX0bCDKa8thqkcRjKWpFwsa&X-Amz-Signature=4a35378d6c77e8d9b8398f1cd7543acf540f21caaa3cc5a0eafeb98c148b3d59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
