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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QM55AGB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNL35UD6GyicXQusy4eyRDxiWBJo%2B%2BX%2F%2FXbEnymqxfgAiEAu%2FdbVvqWfhWhKrhSlOINXiEqOTee9k%2BksnYklJBdhEkq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDP7Dmr3ybH4wByiuhyrcA453Z%2B3WgyhpU6YOJyh8OnXrT%2FP4XXEpfopgPCNNw%2FRUBLbiZdY1JpE1%2BkjExnfnZTr%2Bv4T5cTz9pGIqeBRUlkE07Dl0jlEWFbVw9aVcel8iCLDfq%2BbsYeSNG2JJYDhJsMB0WwDRngEKEnRYNc8eF5cGraB%2FoOq%2BRaS7BlqzwnET3VxJ9%2FNpV31gckzgcobdzS5%2F8ai9IjuzwlGmg0lZD4jnN5EaN2OSqJS5lNxRaGkFts9DPsgRVzug0xRTLbCP5fyyiEnudExgFzg8hZxOpRiH7b22bEE3hjOeeB%2BLMW2e9uRf1J18JFluduyUKPhUfounVdAVWMRx%2FhkZ3r8ll%2BE3CU8NXLZ9M9xVdJuXFaURNxpCSf6EGRXPp5aRreeLG7LYNDmEo7eSqmWrQmZZpI2W0BbFIeXnAfC7AQRWmDe%2FbyrzF8P8nF0HptIcsD4xcGKibrhyQ6QoWgYvfBIi2RBE4pDn4RS8V1XDm4KdwZHAyMJjkTZmEe3txVH3u1M%2F%2BAba%2BnBpgPCATyHAlRxZbjczbwy%2FCmDPZ4LvDC%2F1aXRoTD2yDbogFgvPqUTJZN2E51ttgSA6PLsAVTpaiVtJ5DiCNYBQdBXT%2BIlvnTXYiDIqLzQ8kK3TSRyZPlNHMNXFisoGOqUBF534QFsNiIvgeKFFGq70REInjxI%2Bcp8LT9IrrpVK6vnRxfZ4crDblJQXv9QXw4h46V%2FbbvCyB2LNM58P6U1o9pS4V6GlLMEixeNcUQKorxosJKtcQ35o3d1JJJuosy5tbpqbMg%2B6QtY3mas54UtBIQxVy4XxjGKLQbHlrL3PeTuG1lCNU%2BgOes7u2EY2lF4yO9tV6O%2BBXksKCFmm6YoUw3BVKSQ%2F&X-Amz-Signature=370c0788fe4c61da5cc4ccd8365878a711fa6d0fccc60bd8003da412fd3dda09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QM55AGB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNL35UD6GyicXQusy4eyRDxiWBJo%2B%2BX%2F%2FXbEnymqxfgAiEAu%2FdbVvqWfhWhKrhSlOINXiEqOTee9k%2BksnYklJBdhEkq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDP7Dmr3ybH4wByiuhyrcA453Z%2B3WgyhpU6YOJyh8OnXrT%2FP4XXEpfopgPCNNw%2FRUBLbiZdY1JpE1%2BkjExnfnZTr%2Bv4T5cTz9pGIqeBRUlkE07Dl0jlEWFbVw9aVcel8iCLDfq%2BbsYeSNG2JJYDhJsMB0WwDRngEKEnRYNc8eF5cGraB%2FoOq%2BRaS7BlqzwnET3VxJ9%2FNpV31gckzgcobdzS5%2F8ai9IjuzwlGmg0lZD4jnN5EaN2OSqJS5lNxRaGkFts9DPsgRVzug0xRTLbCP5fyyiEnudExgFzg8hZxOpRiH7b22bEE3hjOeeB%2BLMW2e9uRf1J18JFluduyUKPhUfounVdAVWMRx%2FhkZ3r8ll%2BE3CU8NXLZ9M9xVdJuXFaURNxpCSf6EGRXPp5aRreeLG7LYNDmEo7eSqmWrQmZZpI2W0BbFIeXnAfC7AQRWmDe%2FbyrzF8P8nF0HptIcsD4xcGKibrhyQ6QoWgYvfBIi2RBE4pDn4RS8V1XDm4KdwZHAyMJjkTZmEe3txVH3u1M%2F%2BAba%2BnBpgPCATyHAlRxZbjczbwy%2FCmDPZ4LvDC%2F1aXRoTD2yDbogFgvPqUTJZN2E51ttgSA6PLsAVTpaiVtJ5DiCNYBQdBXT%2BIlvnTXYiDIqLzQ8kK3TSRyZPlNHMNXFisoGOqUBF534QFsNiIvgeKFFGq70REInjxI%2Bcp8LT9IrrpVK6vnRxfZ4crDblJQXv9QXw4h46V%2FbbvCyB2LNM58P6U1o9pS4V6GlLMEixeNcUQKorxosJKtcQ35o3d1JJJuosy5tbpqbMg%2B6QtY3mas54UtBIQxVy4XxjGKLQbHlrL3PeTuG1lCNU%2BgOes7u2EY2lF4yO9tV6O%2BBXksKCFmm6YoUw3BVKSQ%2F&X-Amz-Signature=4135fcb83c9892c884682b613a3ed12de584bc693e25fbfeb9427e266691f1ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
