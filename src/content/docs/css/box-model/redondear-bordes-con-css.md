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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOIF3VJV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEL0gVxpMXWtK64c5h%2BtM2VguEz1Cka5WOVEbTuw8YGcAiEAnuQHaU2BKnRPMiqgcHLqrMh6Y0VijBfSDMj32zwZQGgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMZTjssXIk7B%2F7CghircA7MthUHtXQ%2F%2BSL9SdNEisHtDCJk3k9qgsu2GSyJeFIAJ0OoMUTYmAttw8va6gOCswCKi5CqeGGIsd3myfN6Eae0Q2eqHzFiF0LLvU4VSDtMkKCr%2FxLhe8AebHHGd%2FX5UcC1h3Bp6kKglDwPxJmW8%2BZnxOgfKajB8uih4uQAtKVKjUnR9Lv3foJeI6ihRk6NzDIgdGzMUOpbcQxsT6JRZYqH9%2FeIBPBpbh2NIYU1OqdKb2GkOqsTrwbjaBzvKdjPUnlCTbkGkPWPsz41UbyOyZXou8AkvGFtEFPlpFUcgYMV3YDBHElGJesEKEAU0TlHlKGbr15Z%2Fn%2Fy8G54Ct9hxPInw5c4gFbQcGEnqkNXW5V02Ffzsftn2LFV0pxIq4NoC8woqbukKookCMiJCHsqL%2FlX78420yae1mCQ0zZpH2PX79GZdq2jerz7nexZ12UBovIXhHRexHPSpLXN2H%2BbIXfmP6kdH29EUr9neHoCezWCZW1QKdKZ%2FDemRGLy9R7HxESqaGi1GKP8y5AoW16eArDt00Jt811CvF3yJ%2FXq78BNyQGlhT71YHsgtCnUnDYf2nf96OjiwEjM%2FlfmtZTIO%2Boc7EGC%2B%2FJEI3OCpWcbdDpRwEtiwKQxBjNuRuabtMMmdicoGOqUB8qoxifPlN6qDbo%2FFNdtgHGEDW7%2FY2szh1O4nISEROOhd%2FDr8UxomE3%2FRt%2FlpCPinVoeLg8uFgLdvy7XMuMk%2BM8Ikg%2Bw9c2Z0Zo3pJXCHNyMjNxL%2BkXhPcPswkIkzOgQ7PsrkCzgag4r2LkVKG4aHpHl7widcgrn2maYKlKXeWMPlR4L3jhxR7LGxglY%2Fzegm1Ni8%2BHkXHnOMf8bsklMXZDbpPl6l&X-Amz-Signature=cb7023e90c428a5fc101338753f7512e761dfcfd5411231df17f8eabcb6ff8c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOIF3VJV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEL0gVxpMXWtK64c5h%2BtM2VguEz1Cka5WOVEbTuw8YGcAiEAnuQHaU2BKnRPMiqgcHLqrMh6Y0VijBfSDMj32zwZQGgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMZTjssXIk7B%2F7CghircA7MthUHtXQ%2F%2BSL9SdNEisHtDCJk3k9qgsu2GSyJeFIAJ0OoMUTYmAttw8va6gOCswCKi5CqeGGIsd3myfN6Eae0Q2eqHzFiF0LLvU4VSDtMkKCr%2FxLhe8AebHHGd%2FX5UcC1h3Bp6kKglDwPxJmW8%2BZnxOgfKajB8uih4uQAtKVKjUnR9Lv3foJeI6ihRk6NzDIgdGzMUOpbcQxsT6JRZYqH9%2FeIBPBpbh2NIYU1OqdKb2GkOqsTrwbjaBzvKdjPUnlCTbkGkPWPsz41UbyOyZXou8AkvGFtEFPlpFUcgYMV3YDBHElGJesEKEAU0TlHlKGbr15Z%2Fn%2Fy8G54Ct9hxPInw5c4gFbQcGEnqkNXW5V02Ffzsftn2LFV0pxIq4NoC8woqbukKookCMiJCHsqL%2FlX78420yae1mCQ0zZpH2PX79GZdq2jerz7nexZ12UBovIXhHRexHPSpLXN2H%2BbIXfmP6kdH29EUr9neHoCezWCZW1QKdKZ%2FDemRGLy9R7HxESqaGi1GKP8y5AoW16eArDt00Jt811CvF3yJ%2FXq78BNyQGlhT71YHsgtCnUnDYf2nf96OjiwEjM%2FlfmtZTIO%2Boc7EGC%2B%2FJEI3OCpWcbdDpRwEtiwKQxBjNuRuabtMMmdicoGOqUB8qoxifPlN6qDbo%2FFNdtgHGEDW7%2FY2szh1O4nISEROOhd%2FDr8UxomE3%2FRt%2FlpCPinVoeLg8uFgLdvy7XMuMk%2BM8Ikg%2Bw9c2Z0Zo3pJXCHNyMjNxL%2BkXhPcPswkIkzOgQ7PsrkCzgag4r2LkVKG4aHpHl7widcgrn2maYKlKXeWMPlR4L3jhxR7LGxglY%2Fzegm1Ni8%2BHkXHnOMf8bsklMXZDbpPl6l&X-Amz-Signature=a0b38d75727c173902f863794859eb1fab287a16399fd16e340a3709b8139ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
