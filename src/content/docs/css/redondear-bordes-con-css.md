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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWK6IVO7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvr5dr7k%2BMx5I0UGeM52%2BSoFbwLvHStWGNObn2CwOqpAIhAIYwNkzHPd7e6L%2FPtp4yCaulVeP3zOFsPRh7gOpbp55OKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxk8dBRIoz54VosNKsq3AMmHjRBDi%2Ft4bVORNOf9h7zAxAfriIaa3jC4I%2BVLzeET8885fKUt%2B62kH1JfuJr1XnCrNrME20vGeu88wey7hgMKDhsmR3MRWqlXkZBug9prejZO%2BEeZsmVj5RkpV3dQm8xUXGwv4sfT34Jty9jV%2FO5JvciEA8Tt9c93idmKEP%2Br01WctgK03MyaJW94J37ybTlMvvHkiyIxP1TBOZl7kulMWj%2BTHLyzCMdX8Hnv%2F4%2F8lFKT%2B3nx9daI38ncn7xpss9Pyb9zbJRjsdGklODYyTJKefrD6g4HYqGlmlJNtGzCGgUVjbHjqCJYQl5uxXAToHkP6s3tKxJdCXVfhoNCaiCoU79p85TsZ5f9pNJIe3HK9QIYnXVb2AyJl8eFrcE5j4g221H%2F9z0vblB02r3ZCnGP3Li5XPV0%2F6IToegGbKH%2BDXyHwjMRCYAL7e8LQqT0Ks%2F2zMl2rZa7JZ2MU8IuR7N5tAjb86En2ENrGpEoL0M9jF8F4dniz3xkNUfnZA2Ga6GmzYHP63R%2F2Qy%2BO6qeU4srzxDyktEPs3f0qDDMwmruPaXDoNewFSvlZSsP6dAgWwdx3I3HS2RnzSIfAmWOqCkroft1%2BkaI%2FAGAiav93DzwwBbwGQl1gwlegetbjCkodTJBjqkAeznX6jcQbeuUxKTo6ZPBXIxeVc8qRCriGi%2B6Jl%2FHIpxLmcjD3mwXm54aAb1uVbfJSDuLz1k2B3o6K8GWkWO%2FeCuKbksK5834fABpFP1bI1hhJc3nVzto8exJvCE0YrAYfGevAZh9YNlSmXRG%2Bi1aYacS3BmV%2FU9lx8mdYelVqMjWSPgNlzOUaw%2Fz1VylNQAqIrqhj8GnzTpwqrh0qW4Kcjku0gX&X-Amz-Signature=767bfd55140cbd0ce576dc1580f0d5473a055ae1884c4e67a53e53c5a2e24777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWK6IVO7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvr5dr7k%2BMx5I0UGeM52%2BSoFbwLvHStWGNObn2CwOqpAIhAIYwNkzHPd7e6L%2FPtp4yCaulVeP3zOFsPRh7gOpbp55OKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxk8dBRIoz54VosNKsq3AMmHjRBDi%2Ft4bVORNOf9h7zAxAfriIaa3jC4I%2BVLzeET8885fKUt%2B62kH1JfuJr1XnCrNrME20vGeu88wey7hgMKDhsmR3MRWqlXkZBug9prejZO%2BEeZsmVj5RkpV3dQm8xUXGwv4sfT34Jty9jV%2FO5JvciEA8Tt9c93idmKEP%2Br01WctgK03MyaJW94J37ybTlMvvHkiyIxP1TBOZl7kulMWj%2BTHLyzCMdX8Hnv%2F4%2F8lFKT%2B3nx9daI38ncn7xpss9Pyb9zbJRjsdGklODYyTJKefrD6g4HYqGlmlJNtGzCGgUVjbHjqCJYQl5uxXAToHkP6s3tKxJdCXVfhoNCaiCoU79p85TsZ5f9pNJIe3HK9QIYnXVb2AyJl8eFrcE5j4g221H%2F9z0vblB02r3ZCnGP3Li5XPV0%2F6IToegGbKH%2BDXyHwjMRCYAL7e8LQqT0Ks%2F2zMl2rZa7JZ2MU8IuR7N5tAjb86En2ENrGpEoL0M9jF8F4dniz3xkNUfnZA2Ga6GmzYHP63R%2F2Qy%2BO6qeU4srzxDyktEPs3f0qDDMwmruPaXDoNewFSvlZSsP6dAgWwdx3I3HS2RnzSIfAmWOqCkroft1%2BkaI%2FAGAiav93DzwwBbwGQl1gwlegetbjCkodTJBjqkAeznX6jcQbeuUxKTo6ZPBXIxeVc8qRCriGi%2B6Jl%2FHIpxLmcjD3mwXm54aAb1uVbfJSDuLz1k2B3o6K8GWkWO%2FeCuKbksK5834fABpFP1bI1hhJc3nVzto8exJvCE0YrAYfGevAZh9YNlSmXRG%2Bi1aYacS3BmV%2FU9lx8mdYelVqMjWSPgNlzOUaw%2Fz1VylNQAqIrqhj8GnzTpwqrh0qW4Kcjku0gX&X-Amz-Signature=8b17c7ff9af00a94c8abca4a238b626145ff4b063a17b74b363026c891a830eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
