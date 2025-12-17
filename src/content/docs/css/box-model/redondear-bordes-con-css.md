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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZONFSVWN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkGUHFsG8oKWqfOo96ijmU6yzTphEp4i0iDRu8UAgS6AiEAvO6UOVOjlOYD6EWCNJXIPvwlYP50kshkX0gvJ5UQKacq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBiRvbo3MDGYwcIFUircAzkat%2Bo%2BES4rWuLJkzTe1GyVKA9ZKYPtTsCAx89eXIUhSeYhLqGojgk%2BE9g8c%2FtFt2b9p9pXDdk8kc3l%2FFrZYlRU8Mm%2FxVRDYlJujLYZqXzVLsDEJX1apwdwm4A0EmqRo6XKG%2FW0BjaozRuqv7UF2smMlskKsd4DsXB%2BrTh4Rk7SS83YCQMJg4Ecc4td2%2FYn6C5XCjYin1d5Y6WtvN7Gf3Cl4xy7fRewibSPeeXAXQ%2BKBrvLXUzdvdbN0bGmwET1X7RgV4AUjyqjdt%2BErjSz4bsNima1LHagxuYP5Fbsg0boxX7NE1BIXtRkcDlncIjuczoJh7brZNkDw6LFnnPTPiyISyVo6Pek%2FAjFJ9FlpUy4uT%2Fqxt3Ifn%2BoIeY%2BtraWa7YGKX6FuahczlbgQxJodYWNMJknPAU2PflRRLKdHWjilTom5A0oF9lWYcBrSCGoccmetljVBDelpOsB0B61LXcg%2F2bUtopx7dYonsu%2FJ7FkbMV06ssue6aJ64MCQMEpkFbYj4KcFAznKoRux%2FIaXHBt2FxTsGkvj5CXkckRlIkzH6ylBePeJ7swnxpvADRImlwThTDGH8X9%2BwjRsJuXgZXkQlUCQfxfteS%2BZ9909AyFXOV0vpfR5Zv4W7IEMPrwicoGOqUBO%2Fn2lHO0tUyQcjVJbuWhK79aIE4iEK9pxK%2FAT85G9dObFqmaGiU74j9FZPoVPNnu4%2F0Ax8LhzGXyu0pofsWPsG3EbgpmwcjQO9RNkMZWe98gyqFPuAvLp7A3p9HtqjMQQbDKw1Vyk9zwKmhQw%2FiatTCwSXlAa%2BQpfiF%2BN2fEjGq7Ly%2FJJnYeMigg8Mrea9Ms%2FPd3Nw9HU7uj7qzyYKKQ4q0J2ZI3&X-Amz-Signature=ea3a3daa88267a24a57e5343d3022ead440ec66fb0304f7bb9fa75f309398246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZONFSVWN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkGUHFsG8oKWqfOo96ijmU6yzTphEp4i0iDRu8UAgS6AiEAvO6UOVOjlOYD6EWCNJXIPvwlYP50kshkX0gvJ5UQKacq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBiRvbo3MDGYwcIFUircAzkat%2Bo%2BES4rWuLJkzTe1GyVKA9ZKYPtTsCAx89eXIUhSeYhLqGojgk%2BE9g8c%2FtFt2b9p9pXDdk8kc3l%2FFrZYlRU8Mm%2FxVRDYlJujLYZqXzVLsDEJX1apwdwm4A0EmqRo6XKG%2FW0BjaozRuqv7UF2smMlskKsd4DsXB%2BrTh4Rk7SS83YCQMJg4Ecc4td2%2FYn6C5XCjYin1d5Y6WtvN7Gf3Cl4xy7fRewibSPeeXAXQ%2BKBrvLXUzdvdbN0bGmwET1X7RgV4AUjyqjdt%2BErjSz4bsNima1LHagxuYP5Fbsg0boxX7NE1BIXtRkcDlncIjuczoJh7brZNkDw6LFnnPTPiyISyVo6Pek%2FAjFJ9FlpUy4uT%2Fqxt3Ifn%2BoIeY%2BtraWa7YGKX6FuahczlbgQxJodYWNMJknPAU2PflRRLKdHWjilTom5A0oF9lWYcBrSCGoccmetljVBDelpOsB0B61LXcg%2F2bUtopx7dYonsu%2FJ7FkbMV06ssue6aJ64MCQMEpkFbYj4KcFAznKoRux%2FIaXHBt2FxTsGkvj5CXkckRlIkzH6ylBePeJ7swnxpvADRImlwThTDGH8X9%2BwjRsJuXgZXkQlUCQfxfteS%2BZ9909AyFXOV0vpfR5Zv4W7IEMPrwicoGOqUBO%2Fn2lHO0tUyQcjVJbuWhK79aIE4iEK9pxK%2FAT85G9dObFqmaGiU74j9FZPoVPNnu4%2F0Ax8LhzGXyu0pofsWPsG3EbgpmwcjQO9RNkMZWe98gyqFPuAvLp7A3p9HtqjMQQbDKw1Vyk9zwKmhQw%2FiatTCwSXlAa%2BQpfiF%2BN2fEjGq7Ly%2FJJnYeMigg8Mrea9Ms%2FPd3Nw9HU7uj7qzyYKKQ4q0J2ZI3&X-Amz-Signature=bb98d4edae0ed43c98d3e57cb806a5e3258df4bc2d7e5c03f94365a930dd3b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
