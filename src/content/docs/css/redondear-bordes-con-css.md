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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUNN7SAF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnTHg03BY%2FAU4%2BUPIyDPAGIhqZGjt1IV2ho6HQFO9PlAiBoEE6fe%2B00g16yVDMxWx51yuaDFzpXOc9tY0jjfuRVRir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMNCjyoHjjycFvICUaKtwDydlUge7i%2B6Iy3LXwTkDmvH4xGEfHBQLHHSrg8C0qzxaODKJHOsPooZzIB9YhOz%2B5OBHz%2FcnD67e0Qr5jlSgeRLlWbnlra7n4%2Fq7cZKzWJOC5r7R%2FusYnOOSB4E71%2F%2FTVul2OSwHGIgCd%2FUpP4bZiNwbpdpq42pg3t77BRsrs17o9WLKStXDgkr9MJxZvH8ux2g5Ldr2LQsVvy9CLeR%2B0tydRnsYPIg1loDdl5tPAjpOe9OgHmpTnn%2Fihtc7I69DkuMAVO2kt%2BDfxAz9okxJPODxwzkrXWRxIejce4zjOa%2B2bdLceOjBLK6KPsL7nRrimi0oSaszABOxoc9V7GM1H%2BdFgdHYxrX%2BaPXNdOxDaJMWl6EjGMJ%2FXkGb9zI5cGpF%2B9hw9XwrcbQi1Ber2yXwS4aj8M2HZWTP3u0BLShMqPnzLwRJIvpGB5z06et%2FM%2BsKjD3DCjqE9uXcc%2F84hFndbacQG5qaLR1bQg8f%2BkPDZVExxxbRa8zFlmndkG4wFxFsxFvQZoLZ1H9giiOIkJZsZdxsDKJmaxZnPpiZSXMucCIR2EQQzOeTphnkotgnHWMGQIrI47oFs%2Bq777UzRhhQ6TkBVebG3X6OJFz6xkjQuxTulJk1PtVPCKSCxQ1Qw66bQyQY6pgEdOZNOoADK8JxR%2F3xgNLN4SNp14Ga9sDkGXhZ1o3ITtKshwmjZZMbi0uHoWIjv8YMLPHnOQBAtPH9e8mrHZ2GieWkVQ3iRzAeB83RFE1jy2ywepYfodVBPDJnO32c32lwK4OxO1%2BB8%2B5MDt9WDqvdypXGYZPZzg0Ptn2ZfTodc%2BtTXcHTfnMJuJJ9KlnfxBC0F34rw2xycePJ81xDEMeJplNJBSC%2BZ&X-Amz-Signature=c6032b77f31f23a5aaff927babb045d8fbe5b100cf4bb294ef19d909b1999d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUNN7SAF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnTHg03BY%2FAU4%2BUPIyDPAGIhqZGjt1IV2ho6HQFO9PlAiBoEE6fe%2B00g16yVDMxWx51yuaDFzpXOc9tY0jjfuRVRir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMNCjyoHjjycFvICUaKtwDydlUge7i%2B6Iy3LXwTkDmvH4xGEfHBQLHHSrg8C0qzxaODKJHOsPooZzIB9YhOz%2B5OBHz%2FcnD67e0Qr5jlSgeRLlWbnlra7n4%2Fq7cZKzWJOC5r7R%2FusYnOOSB4E71%2F%2FTVul2OSwHGIgCd%2FUpP4bZiNwbpdpq42pg3t77BRsrs17o9WLKStXDgkr9MJxZvH8ux2g5Ldr2LQsVvy9CLeR%2B0tydRnsYPIg1loDdl5tPAjpOe9OgHmpTnn%2Fihtc7I69DkuMAVO2kt%2BDfxAz9okxJPODxwzkrXWRxIejce4zjOa%2B2bdLceOjBLK6KPsL7nRrimi0oSaszABOxoc9V7GM1H%2BdFgdHYxrX%2BaPXNdOxDaJMWl6EjGMJ%2FXkGb9zI5cGpF%2B9hw9XwrcbQi1Ber2yXwS4aj8M2HZWTP3u0BLShMqPnzLwRJIvpGB5z06et%2FM%2BsKjD3DCjqE9uXcc%2F84hFndbacQG5qaLR1bQg8f%2BkPDZVExxxbRa8zFlmndkG4wFxFsxFvQZoLZ1H9giiOIkJZsZdxsDKJmaxZnPpiZSXMucCIR2EQQzOeTphnkotgnHWMGQIrI47oFs%2Bq777UzRhhQ6TkBVebG3X6OJFz6xkjQuxTulJk1PtVPCKSCxQ1Qw66bQyQY6pgEdOZNOoADK8JxR%2F3xgNLN4SNp14Ga9sDkGXhZ1o3ITtKshwmjZZMbi0uHoWIjv8YMLPHnOQBAtPH9e8mrHZ2GieWkVQ3iRzAeB83RFE1jy2ywepYfodVBPDJnO32c32lwK4OxO1%2BB8%2B5MDt9WDqvdypXGYZPZzg0Ptn2ZfTodc%2BtTXcHTfnMJuJJ9KlnfxBC0F34rw2xycePJ81xDEMeJplNJBSC%2BZ&X-Amz-Signature=936a17e907aa425592de6bcc46a35607bcda6795cd3185793dc7325e66160c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
