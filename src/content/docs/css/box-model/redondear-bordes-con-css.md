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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RY2HPVO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ7IjgfIQiRdGqJPG1KTDGpFpWA%2B5l5JEoeLt%2F8WQJ1AIgclfYVz1FODmCOEvCy4X4s4oWhFvHDKVxC6qJ0Tt40Xwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLAbyyyqqcclMbso4CrcA5EQ2n3Xex011Y0Y6%2BLM7BqYk1g8R%2BzLGobBtyTWmlC%2BCLjxRK0G7dWh055p9JTKHz8J5hZAcnbV2vG%2FPx%2BSmIIlY9hsps9vFpkX3B0IKLCfkacTTCKbTRCWxAQpB%2BEjSHRInQxlFjxW6ZdaLDG4lINwXENt1rLsCeFfgLV2HFhKkDbjTubDEHX7n8e252VpPLKiPmA6xkbHC7eG0DmgJC%2FmPyfzJufo%2Bm7KrWoQUYxe08Kod1A7w4fSEDi9mgjXtayhlB0Gmuvlwsux0XHkH3Bpr%2F6kxTUUQc%2Fm5d8EBY14ES5wF5Bq6NWpSrDysgQaN06xiFBn6VaABYNR7an8WElu3ZSdICipeVGJGUw4ktxXJE6cpryd%2F%2Fs8fKkEZoG9gv8Wrljw9tx%2BiBRziAvk1ww%2FkMrwwbhiTdJJRMtcVv2vr2PETle9OVF0BFlkmfKnwCOu6EOlTB9MRcv%2FpJ71wabI1BcLn17HEWni%2FHrixkH1fZ5UQS5iULCzajNvQWksWrKukw33AB23ckCwGoO7ocbnhAWtEI4Vv44QdDU9vqLSk8%2BzVOfNTST8SrWdQr%2Fgnz8csXAomo6yuDKddEu0aD9lOKOpCPMxkaMgxMFk1POiOa%2FeXDguTWD0%2FS%2B2MN2qisoGOqUBc8nsppr%2BRAMnSgpdhdgoFFQci%2BsUDqsjiq3cy8tWVmjo5r6BAk7%2Bfg1ZH565ocipirmYW4Ot0yGllD2YRt9k3Bhv0jQ7jwbrMTNYGy5%2Bk0nOpYJuAlBC32UbsNNLUoRrtwKOii957exuD9XfeL3FDr4rwPh6GVKAPN6hkCvF5fj7b8HyB5tq17QG4Vic44smorXUVjRsxC9H1%2Bhciq4hvp3%2B%2FsaX&X-Amz-Signature=a43132e4cdf103d83b04e40d441a20029513ff2401055366b2d8e59ee44c7789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RY2HPVO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ7IjgfIQiRdGqJPG1KTDGpFpWA%2B5l5JEoeLt%2F8WQJ1AIgclfYVz1FODmCOEvCy4X4s4oWhFvHDKVxC6qJ0Tt40Xwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLAbyyyqqcclMbso4CrcA5EQ2n3Xex011Y0Y6%2BLM7BqYk1g8R%2BzLGobBtyTWmlC%2BCLjxRK0G7dWh055p9JTKHz8J5hZAcnbV2vG%2FPx%2BSmIIlY9hsps9vFpkX3B0IKLCfkacTTCKbTRCWxAQpB%2BEjSHRInQxlFjxW6ZdaLDG4lINwXENt1rLsCeFfgLV2HFhKkDbjTubDEHX7n8e252VpPLKiPmA6xkbHC7eG0DmgJC%2FmPyfzJufo%2Bm7KrWoQUYxe08Kod1A7w4fSEDi9mgjXtayhlB0Gmuvlwsux0XHkH3Bpr%2F6kxTUUQc%2Fm5d8EBY14ES5wF5Bq6NWpSrDysgQaN06xiFBn6VaABYNR7an8WElu3ZSdICipeVGJGUw4ktxXJE6cpryd%2F%2Fs8fKkEZoG9gv8Wrljw9tx%2BiBRziAvk1ww%2FkMrwwbhiTdJJRMtcVv2vr2PETle9OVF0BFlkmfKnwCOu6EOlTB9MRcv%2FpJ71wabI1BcLn17HEWni%2FHrixkH1fZ5UQS5iULCzajNvQWksWrKukw33AB23ckCwGoO7ocbnhAWtEI4Vv44QdDU9vqLSk8%2BzVOfNTST8SrWdQr%2Fgnz8csXAomo6yuDKddEu0aD9lOKOpCPMxkaMgxMFk1POiOa%2FeXDguTWD0%2FS%2B2MN2qisoGOqUBc8nsppr%2BRAMnSgpdhdgoFFQci%2BsUDqsjiq3cy8tWVmjo5r6BAk7%2Bfg1ZH565ocipirmYW4Ot0yGllD2YRt9k3Bhv0jQ7jwbrMTNYGy5%2Bk0nOpYJuAlBC32UbsNNLUoRrtwKOii957exuD9XfeL3FDr4rwPh6GVKAPN6hkCvF5fj7b8HyB5tq17QG4Vic44smorXUVjRsxC9H1%2Bhciq4hvp3%2B%2FsaX&X-Amz-Signature=9fc212efca1a5e2ea60bc777b3bf2e02c13a48da0f53a4c30d44ca8add220712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
