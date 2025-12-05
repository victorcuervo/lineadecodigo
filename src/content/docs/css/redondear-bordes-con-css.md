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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R53LNPY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6WmxrnZMB2SFmeFhInYMFLpcTP7XYiWb%2BkpEnnEiaQgIhAPYmzDOugN80ZShjG7ZEOvWdOYy6Gl8yXwRsHuiSRGKcKv8DCFUQABoMNjM3NDIzMTgzODA1Igzl3kF%2FSkTYKRsYCp8q3AP9hqMSRaMpiebzN57yVcU05AGph89je1q3PEjJiclT0%2F2c6%2BYHWIk%2BZIjEMTmxXbOJ2EQlXGzCzqrQcRkwzQUP03T3eNzSvpZ%2B34Y%2FWtBtT8u4WngHcWwNvMZ7KYnep152WrRVf4w%2FmB6Iu3Lqae0DERl9NrNPeNssCOCwfggFQ6lVzkY84c%2BZB5N22qf3TMlE4FmdOOgxug70QGBYGxWLRrVhVpArozBRj3IadYg59Dy8eWV1Yby7Qq6YrZNTglvgauG945a76tvKYTOUYStZomLYadIFEe%2B6K%2FytkwjBpiHkW6bMxglWIVm6guZkm%2B9dYUaRyJvUnDig82FGoA8dGGka%2Fa79ieP0R6kdnBpmOaeE%2FvCVEC%2F8PneAz0QqU%2F5hJQuZasRd%2BNoovL0tZyi%2BqNlorJmXmqiCVnqpN42kuc%2BEmZB3QQ1%2F2hpADY18aDynpZ8V1rDJ4kpG8uSpChY%2BKMdPVLKcKdDzAT2QP4ArUuwYx%2F%2B3c67Tt8bF81IzKaFhGfXFr2tpJtCIoMgik8VcvmQLVhmRBPLKoqrMiAXefyUwnmRkCaMFDuXHdOrjNCE9IA9zvtU01nCqVQqOoagkk9k7fEJhQ8vV3XbqaM%2BuVjgRagS2uZutFnmygjDAqcnJBjqkAZ12Ieg15H%2BM7ngaGI7ASjda3LO6e6pZBeqSWO6kTtU%2Bii1PzYQmO15hsSfVlNiqVmgJlOGZkf%2FuzDNAUHbPqq%2FBPLunaTs0G1X3LHg9yKryRUICcJjjkAwaMgVgHNlXJ5Di%2BuSJaoZ5x7whHZCuxYbjUAWLCS1BrREERUmE6SD%2Bl4FVizHl4QwMN11pn42WMCjuq%2FcPs5rxDODVKq%2BsUyxNTprr&X-Amz-Signature=bfa17d686485c885ae3abb5d3fac3376f8aed981db3f235aeab264270a75e6cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R53LNPY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6WmxrnZMB2SFmeFhInYMFLpcTP7XYiWb%2BkpEnnEiaQgIhAPYmzDOugN80ZShjG7ZEOvWdOYy6Gl8yXwRsHuiSRGKcKv8DCFUQABoMNjM3NDIzMTgzODA1Igzl3kF%2FSkTYKRsYCp8q3AP9hqMSRaMpiebzN57yVcU05AGph89je1q3PEjJiclT0%2F2c6%2BYHWIk%2BZIjEMTmxXbOJ2EQlXGzCzqrQcRkwzQUP03T3eNzSvpZ%2B34Y%2FWtBtT8u4WngHcWwNvMZ7KYnep152WrRVf4w%2FmB6Iu3Lqae0DERl9NrNPeNssCOCwfggFQ6lVzkY84c%2BZB5N22qf3TMlE4FmdOOgxug70QGBYGxWLRrVhVpArozBRj3IadYg59Dy8eWV1Yby7Qq6YrZNTglvgauG945a76tvKYTOUYStZomLYadIFEe%2B6K%2FytkwjBpiHkW6bMxglWIVm6guZkm%2B9dYUaRyJvUnDig82FGoA8dGGka%2Fa79ieP0R6kdnBpmOaeE%2FvCVEC%2F8PneAz0QqU%2F5hJQuZasRd%2BNoovL0tZyi%2BqNlorJmXmqiCVnqpN42kuc%2BEmZB3QQ1%2F2hpADY18aDynpZ8V1rDJ4kpG8uSpChY%2BKMdPVLKcKdDzAT2QP4ArUuwYx%2F%2B3c67Tt8bF81IzKaFhGfXFr2tpJtCIoMgik8VcvmQLVhmRBPLKoqrMiAXefyUwnmRkCaMFDuXHdOrjNCE9IA9zvtU01nCqVQqOoagkk9k7fEJhQ8vV3XbqaM%2BuVjgRagS2uZutFnmygjDAqcnJBjqkAZ12Ieg15H%2BM7ngaGI7ASjda3LO6e6pZBeqSWO6kTtU%2Bii1PzYQmO15hsSfVlNiqVmgJlOGZkf%2FuzDNAUHbPqq%2FBPLunaTs0G1X3LHg9yKryRUICcJjjkAwaMgVgHNlXJ5Di%2BuSJaoZ5x7whHZCuxYbjUAWLCS1BrREERUmE6SD%2Bl4FVizHl4QwMN11pn42WMCjuq%2FcPs5rxDODVKq%2BsUyxNTprr&X-Amz-Signature=30327ff8cc2f883699bf429c4d6f69311063c9b4ddcd1f868f70a6725387113a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
