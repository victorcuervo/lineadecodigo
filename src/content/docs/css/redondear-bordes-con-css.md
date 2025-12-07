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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PASH6ET%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtgl4yyUkO%2FoYnQVRo1RsakxZv23Mnh5ezuCqmkVnLeAIhAL%2FH0YclhnGB4%2FWvmccjot%2FxRol%2BOyenqChenbd34uBmKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd0qRbtf2l6%2BxB7rAq3ANwMQGZ6VcXUzcd5ODvLySuXzwCC94VepkyMUhoLZ8ILB%2BYhdYH%2FAMBe4x58PS1hICVWFwiO1rS0%2BUe5GZMCleEu9oPGGii6ElhwnzGHhISmurUjbH5KVJVlfEI%2BMNlFx%2FNZHS7WYA7e1QnSV47w0M2aY8cmILHry0xEmUkVW2asWdKUy2HfUX0%2BqFb77Gk8rZVEr%2BS2nR9QhSJGOCbcQ8XxbCitqh5Uq%2Bk9Bmjng2uQ2p0reTZHFDtwbZkCdhBv2Ly%2FXnzxtXnoWJVf6c%2BG9aoSyWgBdnRHmbEd4fIIl4jMHcQbmkMaQFoSH5KgC2%2FLPr5g69wGYhbfU3OK0QkyGngvQuqm4MzKVLVi2sWCJPIkzIZj48owpXHrL06n510lu0JZafmmZDquJA4KSZQBKY7eFiXwQpWkOjCjkJYXtHY0kMIgXA2Dw5lguizvC%2BAgnuXZeoWnOnw%2Fz8d9A1m1j8QdrqDQjyy1MeOcF82Zk%2BNTlAUyrBX9O7FViy1DA0BZNO1SJaCwkxH0ZlDXcgGaCNvlMoJe1U6KAkWfbaa8kpzPS1XDUeNTfBOVyd%2BwAki550EsDFdxipyFopS5wMtMoALz04cfnCYIG2G6%2Bt%2FoYy55f8m4jET00u8cEpbsjCw%2FtLJBjqkAd%2BEwEadvq0%2BSXclFFB5niFlR6Q6kPq2nKrg3kMevAczN%2BrrPaW9olGSJZCfDDI1vf6jw165rmMWVOAbFQgWa2o4WZv1%2Fp6jfV2PnRaLrYW86tGbTcCjMwXFHDa5O7BgCYt2o6q2nUE%2FJFF0CCptLzDwqWlHlBnOXZeO7kNHO9AemqmB0l%2FOSclq66ppz44wB87E5bppHHFRxeUH9zjC0zmYaR8L&X-Amz-Signature=0a8579e3e0a69d6ad92d8cd8bb7711033c186f458a6c74f1abafd1b9ac0ea340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PASH6ET%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtgl4yyUkO%2FoYnQVRo1RsakxZv23Mnh5ezuCqmkVnLeAIhAL%2FH0YclhnGB4%2FWvmccjot%2FxRol%2BOyenqChenbd34uBmKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd0qRbtf2l6%2BxB7rAq3ANwMQGZ6VcXUzcd5ODvLySuXzwCC94VepkyMUhoLZ8ILB%2BYhdYH%2FAMBe4x58PS1hICVWFwiO1rS0%2BUe5GZMCleEu9oPGGii6ElhwnzGHhISmurUjbH5KVJVlfEI%2BMNlFx%2FNZHS7WYA7e1QnSV47w0M2aY8cmILHry0xEmUkVW2asWdKUy2HfUX0%2BqFb77Gk8rZVEr%2BS2nR9QhSJGOCbcQ8XxbCitqh5Uq%2Bk9Bmjng2uQ2p0reTZHFDtwbZkCdhBv2Ly%2FXnzxtXnoWJVf6c%2BG9aoSyWgBdnRHmbEd4fIIl4jMHcQbmkMaQFoSH5KgC2%2FLPr5g69wGYhbfU3OK0QkyGngvQuqm4MzKVLVi2sWCJPIkzIZj48owpXHrL06n510lu0JZafmmZDquJA4KSZQBKY7eFiXwQpWkOjCjkJYXtHY0kMIgXA2Dw5lguizvC%2BAgnuXZeoWnOnw%2Fz8d9A1m1j8QdrqDQjyy1MeOcF82Zk%2BNTlAUyrBX9O7FViy1DA0BZNO1SJaCwkxH0ZlDXcgGaCNvlMoJe1U6KAkWfbaa8kpzPS1XDUeNTfBOVyd%2BwAki550EsDFdxipyFopS5wMtMoALz04cfnCYIG2G6%2Bt%2FoYy55f8m4jET00u8cEpbsjCw%2FtLJBjqkAd%2BEwEadvq0%2BSXclFFB5niFlR6Q6kPq2nKrg3kMevAczN%2BrrPaW9olGSJZCfDDI1vf6jw165rmMWVOAbFQgWa2o4WZv1%2Fp6jfV2PnRaLrYW86tGbTcCjMwXFHDa5O7BgCYt2o6q2nUE%2FJFF0CCptLzDwqWlHlBnOXZeO7kNHO9AemqmB0l%2FOSclq66ppz44wB87E5bppHHFRxeUH9zjC0zmYaR8L&X-Amz-Signature=26b2ad22811a7b570e7f22d332ad129db1efade045202fdd4d2f3d996d52a22d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
