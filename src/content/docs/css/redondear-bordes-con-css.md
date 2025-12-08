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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ATS3PB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiQuIuehCpsqPlXuXhQ6nGv8Xeg%2F7NgAnk6MskU8aCtAiAEXV6RHKc%2B68QH23hXfs8izA8136%2BDSy4Nj1IKllvskSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSR5GKQ1uEjDDyeyUKtwDY7C%2FfE75cSkUxVIMPjd2iKu02TlhbeondIPXJvZ8drtXiwfQIKs2a5j4G6QqOyo6crBzzZg9%2BhizEz%2FYjWhMkcgbRbmuAdBmKC6yoRP5Wnqc%2BdG%2BJ3oyw0jCtOPaW5a%2BjaHOQeLHrMCdjEjCeyCKSpDIW1ARSRZ5OeUuaAKNk%2FC9Ye%2FvbdFIsgEEax8ud0M4Mo94ZxPwhFax1PHUFvT1bX4D2sHSSlslYWfenPcITbICeT8MGRMqYqvXA1Ff1IffyJCXvnT6fCteO21YcbyxF1ETOHqbvfiqmF1FPllBftd8lPy%2B5goU%2FI62LeLB9rhOjj5KwAfS%2FinB6zd%2BDC17en5we5U27pYHMmWBZwWPRKV3UqDwVgJu3U%2BVP0vo0QrRl3XUFeBhOuHFjSFTmBZnuoLkX7xQ3gC34%2BVeKNR2YbZD0D%2FBYDJo0xLTBvyBAzKyvrz6BovvIkuGEWjGwWzsazaC%2B5zvZxLJy8%2FgWatlijZCCi8OamgjLPzG1UCye6aBXSNdJzqu%2F02f7p5iWNuCc4eomn5dyZaFkaKWIl59xKRLLjeLCfAySVJh1wXuZO65Ma74cbJPnCYHvQNIH4MB%2FCQDrsN0Y7T9zdLr8XVdaUg43BL18EihgZs4SLIw%2FPTayQY6pgEY2hoN08AHzrhqkY3ECYP2ZosqR5Nh54ku6zIt0Qm3bJhvwMhczr6PEyFnL72e7v2k00e13fKd6lF3RouTCL1nYUsaMr5hZIOPh8B%2Bv13fT0fpzL5bJTIYWQXCuIyOAoy47IZ8zPKuQVm0QmQyqZDpl6%2BJM%2BWkmsYdYSK%2BQUK6Yyx6QtTZSxbOlxMVb%2Fh1Tqbt6PHK85LdxwuYxWy8j1Reg1iuzIPy&X-Amz-Signature=2e79e8da13ae1aafd8f7ae6ec679030e31b40500d7403bdb15f4cee657bc4838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ATS3PB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiQuIuehCpsqPlXuXhQ6nGv8Xeg%2F7NgAnk6MskU8aCtAiAEXV6RHKc%2B68QH23hXfs8izA8136%2BDSy4Nj1IKllvskSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSR5GKQ1uEjDDyeyUKtwDY7C%2FfE75cSkUxVIMPjd2iKu02TlhbeondIPXJvZ8drtXiwfQIKs2a5j4G6QqOyo6crBzzZg9%2BhizEz%2FYjWhMkcgbRbmuAdBmKC6yoRP5Wnqc%2BdG%2BJ3oyw0jCtOPaW5a%2BjaHOQeLHrMCdjEjCeyCKSpDIW1ARSRZ5OeUuaAKNk%2FC9Ye%2FvbdFIsgEEax8ud0M4Mo94ZxPwhFax1PHUFvT1bX4D2sHSSlslYWfenPcITbICeT8MGRMqYqvXA1Ff1IffyJCXvnT6fCteO21YcbyxF1ETOHqbvfiqmF1FPllBftd8lPy%2B5goU%2FI62LeLB9rhOjj5KwAfS%2FinB6zd%2BDC17en5we5U27pYHMmWBZwWPRKV3UqDwVgJu3U%2BVP0vo0QrRl3XUFeBhOuHFjSFTmBZnuoLkX7xQ3gC34%2BVeKNR2YbZD0D%2FBYDJo0xLTBvyBAzKyvrz6BovvIkuGEWjGwWzsazaC%2B5zvZxLJy8%2FgWatlijZCCi8OamgjLPzG1UCye6aBXSNdJzqu%2F02f7p5iWNuCc4eomn5dyZaFkaKWIl59xKRLLjeLCfAySVJh1wXuZO65Ma74cbJPnCYHvQNIH4MB%2FCQDrsN0Y7T9zdLr8XVdaUg43BL18EihgZs4SLIw%2FPTayQY6pgEY2hoN08AHzrhqkY3ECYP2ZosqR5Nh54ku6zIt0Qm3bJhvwMhczr6PEyFnL72e7v2k00e13fKd6lF3RouTCL1nYUsaMr5hZIOPh8B%2Bv13fT0fpzL5bJTIYWQXCuIyOAoy47IZ8zPKuQVm0QmQyqZDpl6%2BJM%2BWkmsYdYSK%2BQUK6Yyx6QtTZSxbOlxMVb%2Fh1Tqbt6PHK85LdxwuYxWy8j1Reg1iuzIPy&X-Amz-Signature=acee0f18e3c0d42eec9c4ce006b95f733db638c4d69d0aa325a1d7c0f7eebc6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
