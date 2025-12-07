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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W25WZCJC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMEkAqO0ZUA2X2NtXLOQCv5ebf%2Bq70Ke0C5GhFGAjtQAiEArpcNm%2FWvQcjSNeyqjIhUzksHpP6svgtjsW%2B52iKuBaIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqQME%2BQGXuBiSvH3yrcA76ujfXm3AuaB9gxlMHtswNEIY%2FnakJG7KxW3MBGGhR9twzX6ElvUrxbL1wnI2jcHjesu%2FffMyqI4Yh0hUmGZKASj9WtkGyb3Cn3f6OdOzv8fOVRygMgOjbgQmfworx7HFeFbtuJmyZE3T0B19Q3fVfp5Uor4mpQCKgVzEDjN2qdvCTEAlR38cL0F805YVaSKG9Ykt7lipa0aoNfYc6yLBGxmPBdunBM0hBvLTwTe8ejPyfTzdMTNTRltm4JfDRl9nMSUgDedZvTyjXoWeq7ly8CnatHW7pJNundQn1YsfHSiJqLt9nqTcPtz%2BDR3GDxGpr1xhG84fM1tVHNBjd0yJ5ge3TLYkjPRPJStn7I1ipR8IeHBse%2F%2Fa%2BNwPY2FrXfkL%2BrgRrIwutaedV6szx3mG9CoFo5ZvtkuDxFbNrTYi9C7i3M17%2BDeS6w0kvs88VMNAUjjeEGOeL9HNpB0bNIU%2FY%2B3JCjJQCvf%2BatXOjAoAsqRl2S%2Fx9P2P1LW%2FKlj5xYFMh3RakjZDcdjUMWxmnlNoehExtlyi5DjRPA5mNg8%2Fp4GPdZ7l4wj27mF0fbRS05ONZ%2B4NVLMB%2FnIs0xp20YYWEGMlin8%2F0jFCxKnC9DF6MptLEHQNtz1xVRsViOMKWZ1MkGOqUBsNSnY1kV%2FLW9P0YfpN2lVs6jfDK2Eh0tV6VQhFLEsn90aO0zPyWwEyaLxJ%2FlHcUvPqu5wrEvi%2BJHHX1Iitom%2Bqvcd4YBSWoUmeDGXUtlTfsG4i%2BGDce2K%2Fq2PszUgUZdUbTzuHtvJfum2UoS8GSh5ubryCqdrsjwvk6hmq1o5X4crLCbupMQcOx0jy%2Fwq0Khs4ojgZVxAhCSERz8VEHSAkyuh4Ty&X-Amz-Signature=5b69bd7fd4f733f656a28c30de941d906081a026881c5b37e991f8eac775ea91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W25WZCJC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMEkAqO0ZUA2X2NtXLOQCv5ebf%2Bq70Ke0C5GhFGAjtQAiEArpcNm%2FWvQcjSNeyqjIhUzksHpP6svgtjsW%2B52iKuBaIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqQME%2BQGXuBiSvH3yrcA76ujfXm3AuaB9gxlMHtswNEIY%2FnakJG7KxW3MBGGhR9twzX6ElvUrxbL1wnI2jcHjesu%2FffMyqI4Yh0hUmGZKASj9WtkGyb3Cn3f6OdOzv8fOVRygMgOjbgQmfworx7HFeFbtuJmyZE3T0B19Q3fVfp5Uor4mpQCKgVzEDjN2qdvCTEAlR38cL0F805YVaSKG9Ykt7lipa0aoNfYc6yLBGxmPBdunBM0hBvLTwTe8ejPyfTzdMTNTRltm4JfDRl9nMSUgDedZvTyjXoWeq7ly8CnatHW7pJNundQn1YsfHSiJqLt9nqTcPtz%2BDR3GDxGpr1xhG84fM1tVHNBjd0yJ5ge3TLYkjPRPJStn7I1ipR8IeHBse%2F%2Fa%2BNwPY2FrXfkL%2BrgRrIwutaedV6szx3mG9CoFo5ZvtkuDxFbNrTYi9C7i3M17%2BDeS6w0kvs88VMNAUjjeEGOeL9HNpB0bNIU%2FY%2B3JCjJQCvf%2BatXOjAoAsqRl2S%2Fx9P2P1LW%2FKlj5xYFMh3RakjZDcdjUMWxmnlNoehExtlyi5DjRPA5mNg8%2Fp4GPdZ7l4wj27mF0fbRS05ONZ%2B4NVLMB%2FnIs0xp20YYWEGMlin8%2F0jFCxKnC9DF6MptLEHQNtz1xVRsViOMKWZ1MkGOqUBsNSnY1kV%2FLW9P0YfpN2lVs6jfDK2Eh0tV6VQhFLEsn90aO0zPyWwEyaLxJ%2FlHcUvPqu5wrEvi%2BJHHX1Iitom%2Bqvcd4YBSWoUmeDGXUtlTfsG4i%2BGDce2K%2Fq2PszUgUZdUbTzuHtvJfum2UoS8GSh5ubryCqdrsjwvk6hmq1o5X4crLCbupMQcOx0jy%2Fwq0Khs4ojgZVxAhCSERz8VEHSAkyuh4Ty&X-Amz-Signature=6bedb765f2cb30bdd6700732040070c8c61d27b86651472a6f4951d174b51418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
