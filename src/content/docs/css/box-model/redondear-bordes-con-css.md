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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKEDTU5D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo21DeAMvS%2Fk1gplmTiK2%2BEssTmvf3OtwEDqLN2ZO2uAiA%2F%2BhF8d6P9tTfkKOip%2Bhlte%2BlPtxvLa1HDoxUQ6MSabCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMeV6lgiMR9HQy3D5uKtwDyF7Q98wf9wIrMlK4O2B7RlHWNSDhyOgFDwnhZ82f9%2FsPSS9LW%2BRNm3vC%2B1qIGFx4wOep34S2FPTUpfoAHNjeqeLRORiIO1OgtEXevGDpNDRwtNOLJTlgznReF0BTEYB%2BhaFlK7%2FZdCLrUL402YdZTfnpHk61WYpxqExm1%2BLsnezIvr9R4dQ5OisIu7gKI8Z4XFrCfoB1uKk%2Bg3Iv%2BaYfjksNYYUAT80ObmT%2FYIs2ZBfRWTwgs%2BFLRQpzGRLUkGXnNE5zKyn6qdguJi7A0sYrRSpWkUB8IXrsrI87M9gHE7Zy7bayIubX0yvkP3aBZo%2FJqbOcLdwjx0wZlqU50dJtrkMvXXdfr10lqGK%2BXPmYshXFaypn9r9UXz4KhhG7Y4Kyz0q6SPugR0w%2F%2Fy3EP4WADC5oZyrSJw07HKxePwLo9Ra1wvQ%2FT1O519fS2838oW0xwcAbniI7RizMZLi4GcKe4omdd%2F0AoJnARsVgLaeJ3Su%2BPZYyKvd3q6Dbc0MwNBZ%2BJCUGK6hanDMFSr9QJkK5aVqP1yOy69%2FYZoVcAbeFPLI%2BSXj860uJAH7aBLQzI13AVmAULZIgkbrSXtexo7jWPAdt2i8w8bPfCPWeKfeX2eLIwXjkHieoj%2FCSUFUw58WKygY6pgFgbx9G2TWgUNDUVZ9uhIeA60rax1y8NMFnBcEa08xKPfbGNuGc%2Bnq3cpAEtRryHbugEiqf1AQnbZF9muETz%2BDJZ0xK1LqLw%2FOoIISwu3UqUK0oQCrN7GmkjOVQDFco7OScacygvEKBmVBTuGJvAmri68L6KWr1jauDRe%2BKH%2BonOcDQ2mcI%2Fqsqg6gyB29NSNrvg17QeqVDv1HCsXF4i9r6VrJgz47V&X-Amz-Signature=886f6f982d9301d0a21e9df02ab964b7379a84619f73b2f14bc971d02f17b054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKEDTU5D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo21DeAMvS%2Fk1gplmTiK2%2BEssTmvf3OtwEDqLN2ZO2uAiA%2F%2BhF8d6P9tTfkKOip%2Bhlte%2BlPtxvLa1HDoxUQ6MSabCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMeV6lgiMR9HQy3D5uKtwDyF7Q98wf9wIrMlK4O2B7RlHWNSDhyOgFDwnhZ82f9%2FsPSS9LW%2BRNm3vC%2B1qIGFx4wOep34S2FPTUpfoAHNjeqeLRORiIO1OgtEXevGDpNDRwtNOLJTlgznReF0BTEYB%2BhaFlK7%2FZdCLrUL402YdZTfnpHk61WYpxqExm1%2BLsnezIvr9R4dQ5OisIu7gKI8Z4XFrCfoB1uKk%2Bg3Iv%2BaYfjksNYYUAT80ObmT%2FYIs2ZBfRWTwgs%2BFLRQpzGRLUkGXnNE5zKyn6qdguJi7A0sYrRSpWkUB8IXrsrI87M9gHE7Zy7bayIubX0yvkP3aBZo%2FJqbOcLdwjx0wZlqU50dJtrkMvXXdfr10lqGK%2BXPmYshXFaypn9r9UXz4KhhG7Y4Kyz0q6SPugR0w%2F%2Fy3EP4WADC5oZyrSJw07HKxePwLo9Ra1wvQ%2FT1O519fS2838oW0xwcAbniI7RizMZLi4GcKe4omdd%2F0AoJnARsVgLaeJ3Su%2BPZYyKvd3q6Dbc0MwNBZ%2BJCUGK6hanDMFSr9QJkK5aVqP1yOy69%2FYZoVcAbeFPLI%2BSXj860uJAH7aBLQzI13AVmAULZIgkbrSXtexo7jWPAdt2i8w8bPfCPWeKfeX2eLIwXjkHieoj%2FCSUFUw58WKygY6pgFgbx9G2TWgUNDUVZ9uhIeA60rax1y8NMFnBcEa08xKPfbGNuGc%2Bnq3cpAEtRryHbugEiqf1AQnbZF9muETz%2BDJZ0xK1LqLw%2FOoIISwu3UqUK0oQCrN7GmkjOVQDFco7OScacygvEKBmVBTuGJvAmri68L6KWr1jauDRe%2BKH%2BonOcDQ2mcI%2Fqsqg6gyB29NSNrvg17QeqVDv1HCsXF4i9r6VrJgz47V&X-Amz-Signature=29b298d2c97c4a71c19dadb379a5f20e9febaf6f9548cfc002a39e428a703371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
