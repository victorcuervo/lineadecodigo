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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QZNOCRX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTQTK6BEP3eHWyD%2B6LVFVrqc0abAS1Kx9uDkOxfU00ZAiEAxjr3Xg0DaE1m3XSrAgUIkIqVIGOfXQdTZsoRA%2FuG71wq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDBMVsg63YZG8vtpZOircA1gZay9cPhZXNGAbTa0BDcfpBT7pjzoK%2BYlZOTMcyBSTxiD3yNfw%2F7P5ZXbqdxs3g%2Bks3l80cSotJRmZOOw9C17wRrusY5oy3XaFsuVL6uzokkHGHDbjmwNjxHw7oJbJeRgRI7SslAPNX0%2BzAZygnHx6bm6pQ4p061Tb8MO2Nmkzxhwb4UZ0ANo18NS%2Fm8%2FaGcbKOof2QI15EpuAu1aQn0d18qAtCQi0SghxHBc3h4f1NRHiv84KD%2BK09%2FgCsmqpCki7Fuk62T5ECzRrBy1K6RwKggWquGclnDUypNMDH%2BzBOxmwBNX54NfLJxdje3y3Y6RQdjdHPvYRN%2FS9MOkoINi6%2FoJmtuXNxjNpS3%2BREKycX5ubPc7I5kw2GuupvZL4W2a14F5tTrKN%2FgLMrXhlMNR05sWPQQwhqZaiAg%2BwYLpUZOv62ic9seDwxuEWfVyHszjWit8y8ybhZR8U%2BKT9pw%2BsHNhfNUBRe7ljSVGLZJ9E5gexCS%2Fv2YMASXwFcLQVjVl90eKw7rd2hXLY2aohS6CkeV3XRFkIu9UhawkgpQacyw0W8Ciqxc5r6NdzGIDNPxxVJySzWYg9s0l%2Bi%2F55GZ2%2FcY3WGM2o1JIr8Oz6M6L2SrF2yTcHiClUo%2BmoMMfpiMoGOqUBx%2B%2BbJ7vUzCpcUYrZFXT%2FC%2FVJCrD91lDZhOnn0mB8M1kLtCKYuUo3qC4Kq3sltXlwaTAw5VVk9ugWuN41Ulitoz6%2FjbMIkQkqWrNe9yN3URffEVZgewBK4uwm8mtlzJwCUV0KcjiS4eqYoHs0QKcsCuBc%2FuGC8cAllRbo%2F1i81LglULAFtGg2i9Fw%2BhhSOzNsZ7RCX8FBKICfHZQ0bE8HLR8W6XGg&X-Amz-Signature=56168764d5c791482564309aa744c10e803ee30791e073ae6bf2a6da1f65a466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QZNOCRX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTQTK6BEP3eHWyD%2B6LVFVrqc0abAS1Kx9uDkOxfU00ZAiEAxjr3Xg0DaE1m3XSrAgUIkIqVIGOfXQdTZsoRA%2FuG71wq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDBMVsg63YZG8vtpZOircA1gZay9cPhZXNGAbTa0BDcfpBT7pjzoK%2BYlZOTMcyBSTxiD3yNfw%2F7P5ZXbqdxs3g%2Bks3l80cSotJRmZOOw9C17wRrusY5oy3XaFsuVL6uzokkHGHDbjmwNjxHw7oJbJeRgRI7SslAPNX0%2BzAZygnHx6bm6pQ4p061Tb8MO2Nmkzxhwb4UZ0ANo18NS%2Fm8%2FaGcbKOof2QI15EpuAu1aQn0d18qAtCQi0SghxHBc3h4f1NRHiv84KD%2BK09%2FgCsmqpCki7Fuk62T5ECzRrBy1K6RwKggWquGclnDUypNMDH%2BzBOxmwBNX54NfLJxdje3y3Y6RQdjdHPvYRN%2FS9MOkoINi6%2FoJmtuXNxjNpS3%2BREKycX5ubPc7I5kw2GuupvZL4W2a14F5tTrKN%2FgLMrXhlMNR05sWPQQwhqZaiAg%2BwYLpUZOv62ic9seDwxuEWfVyHszjWit8y8ybhZR8U%2BKT9pw%2BsHNhfNUBRe7ljSVGLZJ9E5gexCS%2Fv2YMASXwFcLQVjVl90eKw7rd2hXLY2aohS6CkeV3XRFkIu9UhawkgpQacyw0W8Ciqxc5r6NdzGIDNPxxVJySzWYg9s0l%2Bi%2F55GZ2%2FcY3WGM2o1JIr8Oz6M6L2SrF2yTcHiClUo%2BmoMMfpiMoGOqUBx%2B%2BbJ7vUzCpcUYrZFXT%2FC%2FVJCrD91lDZhOnn0mB8M1kLtCKYuUo3qC4Kq3sltXlwaTAw5VVk9ugWuN41Ulitoz6%2FjbMIkQkqWrNe9yN3URffEVZgewBK4uwm8mtlzJwCUV0KcjiS4eqYoHs0QKcsCuBc%2FuGC8cAllRbo%2F1i81LglULAFtGg2i9Fw%2BhhSOzNsZ7RCX8FBKICfHZQ0bE8HLR8W6XGg&X-Amz-Signature=6cb068884e09bd62a2fcea2674c8d722df042e6a506391cb6bf81ae32c81afb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
