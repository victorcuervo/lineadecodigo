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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3UHOJQL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2B33zmwHH4D8VCgc8sh6MLhaQib6XoPs%2BfaPV%2F9lTTUAiBWcfXwAcv8sKmxmcGRvELZUBUL9WVCJr1Yjlg0PKfkOyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPBgXbZ3VZvhIB9rCKtwD3J7kZhElX22Oj%2FJIUoNHio7ohmQfSAee%2BYycmzR%2Bj9bu3m5JLCZhWvWJbFEc1%2FJqXQF8NDgBPz5KUXhdg%2FM0zD2vUs3z6P3QZiwuhEsa0AiUMPXI%2BLaoVDgwGPv643QIa%2FArZ13IzlCCP9bUSzTleDr5SI35iqEGzp9IoOIiqK8EFGtaQddgvM5Su6rRuTcBgqIilck7djNyI0JUdCBa10m22SQC%2BEM1yletBURCIp5vvj5cwXKNOYTYi5NopeeJpdHqZUUQhPUYVHwwoRKzKf8jYDbmkMx%2Ba8jLJ7ETsMuKNxw1y0%2BgPETRzcTtjVZ1fuRkLX%2F39dksG2HK%2BYXIPXxRzO5AuHiS0qdXzJqardCJPbXJO5hmBTq4fKPyvCicYQpefPXhU6GznBrFQKBJ5jOCYZnLFqbnG42zfVQ2OjAmrOm8vqXz9kxKxVqS%2BncMt2TY2Z92R8fUZID%2BxT6Jq4zLVWjPaTo6wm7ZcwbZs2b0fADHZSPphoyks7I1PmeyKT9QmNlqBUWhDhueKkeIn0gT9MGKTVauPgUHW%2ByLNN39EdMM3ld8HfzdIyQogjlrLyGm8SovTzojFk3VGyAWHQZxaz4i7EIaU2Z0efC%2BGK3nW006pVa7YCmZls0w3tzcyQY6pgFAITKiz4kf8h%2FwL2mcVsdets%2FeUulxaMWCiCE2BcH1pfmecZesQT9zzDArcca7yptAzCGV62kaoQHeFTPzyng77jSm9NXAvOr4VR%2FzGld54QoGu2XDqY70Gt6eKxR00XNMYJHGIUx56yrrmA5G0umx%2FLDIL50TFXM0dYHamPmig0R3RUFJIO3wm6mHEeiQ5bLOQwB0nST3kk8S5TBXdnuVHCCGj4pp&X-Amz-Signature=743ff84ac96eb1a1a02e9c33a0ffe75b543104dfee4d4de1d534e1b790f994d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3UHOJQL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2B33zmwHH4D8VCgc8sh6MLhaQib6XoPs%2BfaPV%2F9lTTUAiBWcfXwAcv8sKmxmcGRvELZUBUL9WVCJr1Yjlg0PKfkOyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPBgXbZ3VZvhIB9rCKtwD3J7kZhElX22Oj%2FJIUoNHio7ohmQfSAee%2BYycmzR%2Bj9bu3m5JLCZhWvWJbFEc1%2FJqXQF8NDgBPz5KUXhdg%2FM0zD2vUs3z6P3QZiwuhEsa0AiUMPXI%2BLaoVDgwGPv643QIa%2FArZ13IzlCCP9bUSzTleDr5SI35iqEGzp9IoOIiqK8EFGtaQddgvM5Su6rRuTcBgqIilck7djNyI0JUdCBa10m22SQC%2BEM1yletBURCIp5vvj5cwXKNOYTYi5NopeeJpdHqZUUQhPUYVHwwoRKzKf8jYDbmkMx%2Ba8jLJ7ETsMuKNxw1y0%2BgPETRzcTtjVZ1fuRkLX%2F39dksG2HK%2BYXIPXxRzO5AuHiS0qdXzJqardCJPbXJO5hmBTq4fKPyvCicYQpefPXhU6GznBrFQKBJ5jOCYZnLFqbnG42zfVQ2OjAmrOm8vqXz9kxKxVqS%2BncMt2TY2Z92R8fUZID%2BxT6Jq4zLVWjPaTo6wm7ZcwbZs2b0fADHZSPphoyks7I1PmeyKT9QmNlqBUWhDhueKkeIn0gT9MGKTVauPgUHW%2ByLNN39EdMM3ld8HfzdIyQogjlrLyGm8SovTzojFk3VGyAWHQZxaz4i7EIaU2Z0efC%2BGK3nW006pVa7YCmZls0w3tzcyQY6pgFAITKiz4kf8h%2FwL2mcVsdets%2FeUulxaMWCiCE2BcH1pfmecZesQT9zzDArcca7yptAzCGV62kaoQHeFTPzyng77jSm9NXAvOr4VR%2FzGld54QoGu2XDqY70Gt6eKxR00XNMYJHGIUx56yrrmA5G0umx%2FLDIL50TFXM0dYHamPmig0R3RUFJIO3wm6mHEeiQ5bLOQwB0nST3kk8S5TBXdnuVHCCGj4pp&X-Amz-Signature=817399ab38e885146855471fc44fe1d259ec21533b876c100c27461e6ceac819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
