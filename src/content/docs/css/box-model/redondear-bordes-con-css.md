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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHYHAPR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6cLmBlfSgHKeJeGfhNDWKmuHO0zbbUSKwnBi1YYbgMgIgBFV5LlPBl0OU3LrBFrEWXM9ltaoteXSQcYS5%2BoOqI48q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDM0D5mO%2BqHqJNwEXRSrcA9fcSKNWj9DSkaIj1WhBjzEJgM7mOsAmBjtFFspO4ffhcAXRHZrOcbxPm9RpRYP5qffCwAB5d65FSHhax475HWnP7xbJBOSRdvs1BO5G%2Bsiyj6yZON4JiBAI7ajMWD6FU%2FCRRjq73SKteZB8sCprPLL0qb9yTsOUAoUQt3%2F2b0m4YrvxNoHrcsWYoAOfOqFeTCG3XiOgWSc2r0p3ZaGkxPcqpi%2FareqidjE7KW00pE6tGNtoC5oWGYem8oFP8OiWAY4GuuyQ%2BztbK%2FhKbLm%2FnEWBNogsNXa4BbTajGyyZxcL4gZT5%2BNdORfYPVCWwWMiqeaQJXFxDNcFbNSj2sFp950L5i7Ot0hJxz9%2FsmeOaAXIcBahUsLMi9S9OXws8bsCCE9GZXuABopFGl4Nqi1GCMVAKH9lEkRpMvdzpQApgJJfsHLhB%2BUMz6eIVXkx9LfqW36%2BvFhGeYIEVbp5vJMaTDjG%2B8VoaKehQWEC5S%2FU1G7ZmbPiHDO6wAMfxqrbW1okj%2BtX%2Bfdcv2z65jOWCqyTl5oglE1DhyMTif0QOhO%2BqeuDVWC8n4Og44FnD7UWbUTWNKVQmez%2FS%2FglADvFYSpFJzNT1aG0OPpVjAoP9gceNpLe4yKZk9tzETx3MTP2MKv6h8oGOqUBY%2BmRNqUrwhH76rMg4PXfBO%2F4DQvUHFd0AMcXRlx0entiZwSCRoMRxEez7oJJMOQZJNwPWVObOqhprT5WxlRqyEajMTtsehbfMrDk3YxtgplD8U0tuJsJ6rkv8excZ8GS5ZJZg473pvdz1zQ%2BgRDAySr%2FBUkU9iWWeIMUepHxXC1nalbAmWMXu2JD8G5YXYXK71t4s3umglcsqeF12jL3mVIW74Qn&X-Amz-Signature=223545a8bf96e90f90f601d9e478eeefe6857a103a5d19d64c9f6501d0941ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHYHAPR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6cLmBlfSgHKeJeGfhNDWKmuHO0zbbUSKwnBi1YYbgMgIgBFV5LlPBl0OU3LrBFrEWXM9ltaoteXSQcYS5%2BoOqI48q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDM0D5mO%2BqHqJNwEXRSrcA9fcSKNWj9DSkaIj1WhBjzEJgM7mOsAmBjtFFspO4ffhcAXRHZrOcbxPm9RpRYP5qffCwAB5d65FSHhax475HWnP7xbJBOSRdvs1BO5G%2Bsiyj6yZON4JiBAI7ajMWD6FU%2FCRRjq73SKteZB8sCprPLL0qb9yTsOUAoUQt3%2F2b0m4YrvxNoHrcsWYoAOfOqFeTCG3XiOgWSc2r0p3ZaGkxPcqpi%2FareqidjE7KW00pE6tGNtoC5oWGYem8oFP8OiWAY4GuuyQ%2BztbK%2FhKbLm%2FnEWBNogsNXa4BbTajGyyZxcL4gZT5%2BNdORfYPVCWwWMiqeaQJXFxDNcFbNSj2sFp950L5i7Ot0hJxz9%2FsmeOaAXIcBahUsLMi9S9OXws8bsCCE9GZXuABopFGl4Nqi1GCMVAKH9lEkRpMvdzpQApgJJfsHLhB%2BUMz6eIVXkx9LfqW36%2BvFhGeYIEVbp5vJMaTDjG%2B8VoaKehQWEC5S%2FU1G7ZmbPiHDO6wAMfxqrbW1okj%2BtX%2Bfdcv2z65jOWCqyTl5oglE1DhyMTif0QOhO%2BqeuDVWC8n4Og44FnD7UWbUTWNKVQmez%2FS%2FglADvFYSpFJzNT1aG0OPpVjAoP9gceNpLe4yKZk9tzETx3MTP2MKv6h8oGOqUBY%2BmRNqUrwhH76rMg4PXfBO%2F4DQvUHFd0AMcXRlx0entiZwSCRoMRxEez7oJJMOQZJNwPWVObOqhprT5WxlRqyEajMTtsehbfMrDk3YxtgplD8U0tuJsJ6rkv8excZ8GS5ZJZg473pvdz1zQ%2BgRDAySr%2FBUkU9iWWeIMUepHxXC1nalbAmWMXu2JD8G5YXYXK71t4s3umglcsqeF12jL3mVIW74Qn&X-Amz-Signature=3312d644f595b0b902966ac85d258cc0f3166783ec5ad608590f5806139ca20e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
