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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNXVF7MK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlFqtBT18ee1h3%2Bl6JqfVdVAk6Lolabtva15sGobFfnAiBM4MZwXrrR5etvi%2FGGE4g%2F%2FtQe2qNlfC2yqWDTcVKxUSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMsiVHCqywP14hK97KtwDwwJsnrcYi3AZFfSRwDJNsXXA1LEOD1kCjNo3hz96GPt48GR9RqWuQqX0vCbHvrxSnxAegr%2FKdVgx1flMbqhzmS8TZZsf3WGz6co5YngWXoWWpbZV33wDcGCpaHe6omXJeKXBLwBJwJe8s1oQFmQkDHRkMTTN7XW%2FN%2FI2EJ84xVJDmQScSkeotDziTpmP7ZOp%2BDaf%2FMego%2FZq%2BlTw5P14VnWT1IyAnTSgSFoexC6ir07cSAx7TgMi1wjEtqT7JrDd3g6xs8f6KVj%2FSEyqBBFFlWgXoRfwuaIXLVw6yFSb2gH8mQFcLwm3v%2BN%2BRXNpJ4ZoayrmmqJnvAH01MrNPV9vK%2FH1wE3BqOY17CXOSaPp%2FVRsg1wDfEtWJDQatk3npobAtrTXk67RE79czEpx%2BQtuZx5%2BIy6KrJqXxCS%2BHWbbfodGEgukIKLZlploDOiDuCYR%2Bb6PrEQrGPZ0dRnnJxuj1uCdyQixV8bjF4lzwI8hyaYi%2Fg%2FtND2bM7l6qUjjEEoswCyWfLw935TzepkfSvpg7ZyXKXag17bueEeyqA9RC3lOWM0W5YJ%2B%2B8vc3jJEoRwtOw7m8ZavrpAtzBd4WPtffFJpBf9nJP6ttX%2BIXRvcEbjtGjsM2xSlTmZthD0wiu3ZyQY6pgEhiJCQ2USMJnmGuNP6%2BBqDXqBGImIHmsUam8MxpO2pNw3kuXKEMpVJiyCe3rNHdWP1g3bnES2o9AKh2R5KgbUJtMF0w9%2ByQ6AfOO4Bk1ThRYWipe5%2BYiK5jvD07UCv0JgZDtrcLGqpNCEmc7PoDVYDxjlIDpbqrKZzM4s1Iybo%2B0yg1hWaCt%2BUxDQ%2FxFE2ZRDogSUehUJLVOhsIPzWgYQJPC%2Fl2Cfe&X-Amz-Signature=e7c61e36aa1d80b8f1217ecc5a58df0d1d6388d885596b0de422ff3600a95189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNXVF7MK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlFqtBT18ee1h3%2Bl6JqfVdVAk6Lolabtva15sGobFfnAiBM4MZwXrrR5etvi%2FGGE4g%2F%2FtQe2qNlfC2yqWDTcVKxUSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMsiVHCqywP14hK97KtwDwwJsnrcYi3AZFfSRwDJNsXXA1LEOD1kCjNo3hz96GPt48GR9RqWuQqX0vCbHvrxSnxAegr%2FKdVgx1flMbqhzmS8TZZsf3WGz6co5YngWXoWWpbZV33wDcGCpaHe6omXJeKXBLwBJwJe8s1oQFmQkDHRkMTTN7XW%2FN%2FI2EJ84xVJDmQScSkeotDziTpmP7ZOp%2BDaf%2FMego%2FZq%2BlTw5P14VnWT1IyAnTSgSFoexC6ir07cSAx7TgMi1wjEtqT7JrDd3g6xs8f6KVj%2FSEyqBBFFlWgXoRfwuaIXLVw6yFSb2gH8mQFcLwm3v%2BN%2BRXNpJ4ZoayrmmqJnvAH01MrNPV9vK%2FH1wE3BqOY17CXOSaPp%2FVRsg1wDfEtWJDQatk3npobAtrTXk67RE79czEpx%2BQtuZx5%2BIy6KrJqXxCS%2BHWbbfodGEgukIKLZlploDOiDuCYR%2Bb6PrEQrGPZ0dRnnJxuj1uCdyQixV8bjF4lzwI8hyaYi%2Fg%2FtND2bM7l6qUjjEEoswCyWfLw935TzepkfSvpg7ZyXKXag17bueEeyqA9RC3lOWM0W5YJ%2B%2B8vc3jJEoRwtOw7m8ZavrpAtzBd4WPtffFJpBf9nJP6ttX%2BIXRvcEbjtGjsM2xSlTmZthD0wiu3ZyQY6pgEhiJCQ2USMJnmGuNP6%2BBqDXqBGImIHmsUam8MxpO2pNw3kuXKEMpVJiyCe3rNHdWP1g3bnES2o9AKh2R5KgbUJtMF0w9%2ByQ6AfOO4Bk1ThRYWipe5%2BYiK5jvD07UCv0JgZDtrcLGqpNCEmc7PoDVYDxjlIDpbqrKZzM4s1Iybo%2B0yg1hWaCt%2BUxDQ%2FxFE2ZRDogSUehUJLVOhsIPzWgYQJPC%2Fl2Cfe&X-Amz-Signature=027b35e5d760bd7e79adcf2506c7a9456bf05a6feb9c6199d290e4145edfa9cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
