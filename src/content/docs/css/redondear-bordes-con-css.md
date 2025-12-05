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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJSGT4ZW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCpFLj5XYYnu%2BEELhYdn1e603j8Ib%2B3Cg1dMVd8JA9IwIhANrIFTJOZr1TQQ9hg22BTzw8fe3grDrMgC5%2F8l9o7wrcKv8DCFsQABoMNjM3NDIzMTgzODA1IgzdqgWigGYYIRhh7VIq3AMFbI2XbMmRlSTW9DQHYmgjhiZiTlUQvwIiTYQqu1wHzN5zKfUW%2BUQ5aYlDz%2FXhKkF5PVHkuhJB4q4ICMuhSv1KZHBKm1s3G3pCU6We9WTuumZwC82LSWk4s3BxZ6kYUu%2BCa3uUgem8p%2FvAIFWBW4MEJbX7z6zbbR4cVe%2FwjjZL7CZmeeGQiDoUuUaAl87FU78fUZJjJ%2BYsMQSADwA%2BdLoCpAgGgPkR2XSmgeKfvARbMR5FPjMLt0gH%2B6jg40UCdkHVl5VA06NLs0r9FgUzK%2FMex9rjxFyjboBkra5KDiVQiaK%2FQtH8axtAf1HUSfVh%2FYDncfP0CxSj7ptd%2FGyFZAYXtCSnanYq1DLOemb%2F0fQB6QyoiBbEO1tb32Tp2nMT%2B5RRnz98mVZzM9w%2Fzgj6YWZR1HPDMZsVGGYNnjKH3OlYEALC%2Fn69XzON1GKaHeNENCx4aYgh5DKS0GYM%2FPOgL91IGwtx1Nt5JohNPEhHElO845soYZxUpgNybSfuOcAORnlsR6jS2fwwsixEW148ogjQAHJwdQAYJBBFm4Rx%2BoYWUvdHZa%2Bx9PzmXD4aUF31M38liUZo7RheBVPapjTmPfH6AWf4qOrG8A57FZun%2F7byydgH4%2Fr6GqDyK4TeNzCrysrJBjqkAQe%2BMHlrGYerSsskajY3TB8riIWKAZP66dvvf3ME2uXd4pFMpx%2F3naUZGKHn5H7QuI0bKKmsVHzyoqwogelY0AyyXhZa%2FXdMdejPdw%2B0ci6UBi7S4fA7DQA3VyvYUaEJ01j2B6MK065SOeDnIk3GIQqWBTRp7y59dsRk9okVVbz1DhKwvENzFmVe9eN5EyLfpskihhgZO2CGvjkG1dVZv6w39xt6&X-Amz-Signature=ad5e4d4102e02dd5060277577de7b5b6b6220a59875170d371bb7d302b9d4016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJSGT4ZW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCpFLj5XYYnu%2BEELhYdn1e603j8Ib%2B3Cg1dMVd8JA9IwIhANrIFTJOZr1TQQ9hg22BTzw8fe3grDrMgC5%2F8l9o7wrcKv8DCFsQABoMNjM3NDIzMTgzODA1IgzdqgWigGYYIRhh7VIq3AMFbI2XbMmRlSTW9DQHYmgjhiZiTlUQvwIiTYQqu1wHzN5zKfUW%2BUQ5aYlDz%2FXhKkF5PVHkuhJB4q4ICMuhSv1KZHBKm1s3G3pCU6We9WTuumZwC82LSWk4s3BxZ6kYUu%2BCa3uUgem8p%2FvAIFWBW4MEJbX7z6zbbR4cVe%2FwjjZL7CZmeeGQiDoUuUaAl87FU78fUZJjJ%2BYsMQSADwA%2BdLoCpAgGgPkR2XSmgeKfvARbMR5FPjMLt0gH%2B6jg40UCdkHVl5VA06NLs0r9FgUzK%2FMex9rjxFyjboBkra5KDiVQiaK%2FQtH8axtAf1HUSfVh%2FYDncfP0CxSj7ptd%2FGyFZAYXtCSnanYq1DLOemb%2F0fQB6QyoiBbEO1tb32Tp2nMT%2B5RRnz98mVZzM9w%2Fzgj6YWZR1HPDMZsVGGYNnjKH3OlYEALC%2Fn69XzON1GKaHeNENCx4aYgh5DKS0GYM%2FPOgL91IGwtx1Nt5JohNPEhHElO845soYZxUpgNybSfuOcAORnlsR6jS2fwwsixEW148ogjQAHJwdQAYJBBFm4Rx%2BoYWUvdHZa%2Bx9PzmXD4aUF31M38liUZo7RheBVPapjTmPfH6AWf4qOrG8A57FZun%2F7byydgH4%2Fr6GqDyK4TeNzCrysrJBjqkAQe%2BMHlrGYerSsskajY3TB8riIWKAZP66dvvf3ME2uXd4pFMpx%2F3naUZGKHn5H7QuI0bKKmsVHzyoqwogelY0AyyXhZa%2FXdMdejPdw%2B0ci6UBi7S4fA7DQA3VyvYUaEJ01j2B6MK065SOeDnIk3GIQqWBTRp7y59dsRk9okVVbz1DhKwvENzFmVe9eN5EyLfpskihhgZO2CGvjkG1dVZv6w39xt6&X-Amz-Signature=c8d0ba2fa4580254010533d4fd296f310d847cffc3b3d38ba1e9c72d73b9e468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
