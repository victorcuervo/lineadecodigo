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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMANVELX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAeitWTJ0eUOURV6wFnmDzQyQLrwcAMLIuuZZpE4no%2FAiAJbThrEGmIhHBet3uTMrPfmgyepFoqMb2noBKZQsK2nSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr8dsHxWUWX2GPS4xKtwD0gcF2qC3h2cvXR9hFS16G%2BR8%2Bf8HNP4harH3x5EsB3S8%2Fwo3t%2F9RnnitMdfDW84LoGf2RTUgL4aLOy%2B0Yf%2BAd1Rp9cWVrsXNe5HJeJLYFSQMUYHPqjda2FI%2B8wo58PPaz2y4KZGyYF26Ceg4nXS73s9eKF3X63Ps3CniG8bQGwpVyYZvAnRDdiSFNWS0iiwTbs4sFoT92rpL8N2B%2BFbjs7OdzvGIVizUlLrxdL2NTHd%2F3VoeBBQNUqqARvB%2FV%2FkALefIC0DaFSMZ%2BcQv4oBawKjzkkZBY3mnyJeY8uxFgVYDHkzXaBKrsWHJWgtlUNJr4YIGJqSRQir692dDYsB%2BlRCnaiSTivxev0%2FSUmJrpJBkFI2ta1iDN4f8QxKFgJPhRGS3DMJX1d8fi2lf5tmB%2BophIyDeo01VLU6nb4kpQKGAv3bPFUL40VDGQg3uKSo14tcncS%2Fo8B7%2FndlIb4NYngMOwH8zU18Vm9yU%2BqZBrIhltf3Xo%2BJKR0FMERdFmaY5U%2FE4dNLuj%2B01adT0MZAlMiXXkyphV4ncO%2F%2F%2BRSb%2FgAq%2BALmLzXypOLOat20ZXx6%2FT51YsF%2FRF5gQIXYz7IsHiFbbg8HaeaQSoCEtuqefgfC2hX0x8F8bh7ANoMcwl%2BndyQY6pgGNTpvidHNDseJwMQwixyrF4%2BLvrdiZWdKlCFfzJIN3JGrOPuWi1aa2Ny6NMUTMX8f5cq%2BNYvqHz6R3hSvMq0hb7vbCcO7l0mOoEuthfHCmyD9%2BVGkaJXMf675c4Ay%2BXYvFrdC4sV6nOp9KFzo3lsczGuz81nRISdinSCvDj7ubfdeL%2B9fzIbClNsN4v%2FsR8lE1psL4Wo1gPrGRir5XPzP5pKxXBF3Q&X-Amz-Signature=5708378afdc25bf5b2cf1242e3a07baafe322d373ae9d8c70d850c9662eea826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMANVELX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAeitWTJ0eUOURV6wFnmDzQyQLrwcAMLIuuZZpE4no%2FAiAJbThrEGmIhHBet3uTMrPfmgyepFoqMb2noBKZQsK2nSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr8dsHxWUWX2GPS4xKtwD0gcF2qC3h2cvXR9hFS16G%2BR8%2Bf8HNP4harH3x5EsB3S8%2Fwo3t%2F9RnnitMdfDW84LoGf2RTUgL4aLOy%2B0Yf%2BAd1Rp9cWVrsXNe5HJeJLYFSQMUYHPqjda2FI%2B8wo58PPaz2y4KZGyYF26Ceg4nXS73s9eKF3X63Ps3CniG8bQGwpVyYZvAnRDdiSFNWS0iiwTbs4sFoT92rpL8N2B%2BFbjs7OdzvGIVizUlLrxdL2NTHd%2F3VoeBBQNUqqARvB%2FV%2FkALefIC0DaFSMZ%2BcQv4oBawKjzkkZBY3mnyJeY8uxFgVYDHkzXaBKrsWHJWgtlUNJr4YIGJqSRQir692dDYsB%2BlRCnaiSTivxev0%2FSUmJrpJBkFI2ta1iDN4f8QxKFgJPhRGS3DMJX1d8fi2lf5tmB%2BophIyDeo01VLU6nb4kpQKGAv3bPFUL40VDGQg3uKSo14tcncS%2Fo8B7%2FndlIb4NYngMOwH8zU18Vm9yU%2BqZBrIhltf3Xo%2BJKR0FMERdFmaY5U%2FE4dNLuj%2B01adT0MZAlMiXXkyphV4ncO%2F%2F%2BRSb%2FgAq%2BALmLzXypOLOat20ZXx6%2FT51YsF%2FRF5gQIXYz7IsHiFbbg8HaeaQSoCEtuqefgfC2hX0x8F8bh7ANoMcwl%2BndyQY6pgGNTpvidHNDseJwMQwixyrF4%2BLvrdiZWdKlCFfzJIN3JGrOPuWi1aa2Ny6NMUTMX8f5cq%2BNYvqHz6R3hSvMq0hb7vbCcO7l0mOoEuthfHCmyD9%2BVGkaJXMf675c4Ay%2BXYvFrdC4sV6nOp9KFzo3lsczGuz81nRISdinSCvDj7ubfdeL%2B9fzIbClNsN4v%2FsR8lE1psL4Wo1gPrGRir5XPzP5pKxXBF3Q&X-Amz-Signature=bc92ffed095e1f2055664be508e4ebb2461575e3ef013c470f8b29425229264c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
