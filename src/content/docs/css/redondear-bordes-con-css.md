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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BKRW7OG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDV8fwvsQtUjZfiE%2BTFziyJ6kPLihE7GjxGRJ04j3DZqAiBGNYEO60i3qaWaYAglRXdlqxfQyD3frULfdxyvCP1H%2FyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpKnnTqWz%2Fjvcjbm0KtwDmhAMV74qNvZsvWQiIjwMFWBXGKlSVAWgMfQKk7hGPT0P3U9diakNECQyyQH3HGRo39h0gWCfu%2B2BnP%2FcmM8P9m3dHmZzgzcQ8sp0%2BfAlQ5CC5eM%2B%2B0mnninEbnbPAsmcv2jkVI4vw7UOawlFEMBAeHjiTxJJ%2FNZ%2BsemBJTCYb719SOsPPGotakJwXZJhVEkTKT92Ls%2BcwlN4XrCfeeI77vX6luwhC0iAlz%2Bd4gMRWhu8jDX5uDkmGFEzmBrHibaAyswJCO3G7sdeT2WcK3o6xLiSVw9zzDZBtMWJJFnbg8xpF787QNTBN3MeST1YlIj51gduCy9zvOrEkatIi0Uk19x4OXrOEQ0ybWt3PTskkzqf4BysasiWT%2B%2BSyiGhCX1knlTeEn91J02I%2FEWs%2BiJLk0jLh11IT2wy3ks1Maarcpszmyoq%2FRNxMynCJTevR7Rm37YptWxaqhVZ3LME4NpCN%2FTF8jGcB5ZfiHgODf97m0wE2qYuEgz0Bi0zqTUGDzF0d7BqdGOPM3aSw55OZnYAp9898Rc2BjT4BYpEtdJKsp3p%2FuhM2%2BDDSVNyBqfIPJqu2eWUhj5ATLkAiPwk8xF185x5zn7zqOXB4i9QmYvXVOgXYyMrIjchaQW2cFkw8fLayQY6pgHrM9XkfwsDmDPXO%2BzC0brSLYyyR5C%2F%2FG7QR%2B3koLJuMjkgoSKGq9atzXMsZyXpTnaVxbo4CCi0Bzy8x3TBfzxuRFSqVXMYjbBn4o3n87ndLpO5%2BpfMVygZla%2Bhz7VwtFynHqQa1el9H1%2FI0ewjn9NbZd7021RiRP7%2FNKvsgGrwdBaTyG7NG2cHuuXp84UkOerMlfuWiZFVWhC1UYIh2tcynGwTk%2Bw8&X-Amz-Signature=3a6de955bfac3510f7e65fc5f47a646d99002c53f1f00c8c87d66c714b8c03b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BKRW7OG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDV8fwvsQtUjZfiE%2BTFziyJ6kPLihE7GjxGRJ04j3DZqAiBGNYEO60i3qaWaYAglRXdlqxfQyD3frULfdxyvCP1H%2FyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpKnnTqWz%2Fjvcjbm0KtwDmhAMV74qNvZsvWQiIjwMFWBXGKlSVAWgMfQKk7hGPT0P3U9diakNECQyyQH3HGRo39h0gWCfu%2B2BnP%2FcmM8P9m3dHmZzgzcQ8sp0%2BfAlQ5CC5eM%2B%2B0mnninEbnbPAsmcv2jkVI4vw7UOawlFEMBAeHjiTxJJ%2FNZ%2BsemBJTCYb719SOsPPGotakJwXZJhVEkTKT92Ls%2BcwlN4XrCfeeI77vX6luwhC0iAlz%2Bd4gMRWhu8jDX5uDkmGFEzmBrHibaAyswJCO3G7sdeT2WcK3o6xLiSVw9zzDZBtMWJJFnbg8xpF787QNTBN3MeST1YlIj51gduCy9zvOrEkatIi0Uk19x4OXrOEQ0ybWt3PTskkzqf4BysasiWT%2B%2BSyiGhCX1knlTeEn91J02I%2FEWs%2BiJLk0jLh11IT2wy3ks1Maarcpszmyoq%2FRNxMynCJTevR7Rm37YptWxaqhVZ3LME4NpCN%2FTF8jGcB5ZfiHgODf97m0wE2qYuEgz0Bi0zqTUGDzF0d7BqdGOPM3aSw55OZnYAp9898Rc2BjT4BYpEtdJKsp3p%2FuhM2%2BDDSVNyBqfIPJqu2eWUhj5ATLkAiPwk8xF185x5zn7zqOXB4i9QmYvXVOgXYyMrIjchaQW2cFkw8fLayQY6pgHrM9XkfwsDmDPXO%2BzC0brSLYyyR5C%2F%2FG7QR%2B3koLJuMjkgoSKGq9atzXMsZyXpTnaVxbo4CCi0Bzy8x3TBfzxuRFSqVXMYjbBn4o3n87ndLpO5%2BpfMVygZla%2Bhz7VwtFynHqQa1el9H1%2FI0ewjn9NbZd7021RiRP7%2FNKvsgGrwdBaTyG7NG2cHuuXp84UkOerMlfuWiZFVWhC1UYIh2tcynGwTk%2Bw8&X-Amz-Signature=3e2e37220b9e167fda2c965fee9b13fc83486f40411dc0bfe8c41ced8a0a1c6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
