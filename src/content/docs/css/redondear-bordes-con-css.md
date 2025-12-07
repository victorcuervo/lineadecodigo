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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFL7ROQB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYb%2F3CqqjZgVGx%2FFJBU%2BT7S2%2F2FwQ3MBxPMLmLdVVgFAiEAsZsmkB7q3Vggf5vfOZhumsFmKI3UevUy5%2Bw0R9jcFWYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7LWgSJls2pOT9HRSrcAyn%2F6mt3AVfn6WprmqBmqu1d0kR%2FnU5ns%2BP4bdQI%2B9pLgYz6iUSkmIaEKyXsk0KohODtN4yKGPrOypjzS854n4ulRey9XF6IQ%2F6%2B9rJCAPfI8VfwZUubyWjMQIK18PMvuI1PAVMHmL3F9kzFUVChk2WHXIOdJSIBeTxBHjwBQIACqWhiswtZUKE0japNOx5hc%2FoH%2BjFqsrOxzVIfgt6cOPROT9o%2B0HkhhJ9LIH6Ah1nGmfOTkC4ejtayyEnMVH2Y2mOQV%2FZh7hvKXqH%2BFXy4qYmRASd%2FNCNyqSIG2UXptcSaTJqNrUPbyVYySxEI%2FqjcltwQSJX%2B9BYvXqJUmFM%2FwbK8xXeiHOqWZissX1Ocz0GV9W8yUsSc2Hsa5joNEydQwAKKF%2BtEWduGOxkV7U3bJe4ra4BrWwFSyqT%2BiWnxWKMfNie6q3bL6bmP21H6vJFC%2BvgjRcQ%2FgH34Z1mFIjecsr2FMLNCSBq78S%2Fjrja7GQRNOnY2r6YYYnoE%2FMxdD%2Bo04hxW4sx8%2BQDgBBzkhWa0hyAFvfqSzfXGN57ZCS%2B6JssSzTdVTuYxO6N7t9FK0SYntDYKuAsy78tPQmgTy8iY%2FUgDs9eNVpMCIUKOswLPb7P0wf8NWUfpe2aYV15sMN%2Bz1skGOqUBA7fgnq0qPsftb3JUxu%2FHk%2BDyXbLGUbUq%2FYPS26bxUwPoWuYNLJw%2B4u9TYMh9E9ukabcqX06nEmGpFHtS6GEltwGz8t0XXdaOOeKmJ0fJpHXZiaHAby6YzdtdKgcnH0IlnFTcbGQMW64mutGMLB02pnhn%2B5Bk05%2F6O82CAwwEMmxImY4gyIZkT7IZXT3lmtSg9Z69whPN3cxt6da36WP7vyA1w3y0&X-Amz-Signature=145fb32adb52cddc761c5a830dc47d2dee3d70d3b6e96422f2d9b5e9c71fc5dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFL7ROQB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYb%2F3CqqjZgVGx%2FFJBU%2BT7S2%2F2FwQ3MBxPMLmLdVVgFAiEAsZsmkB7q3Vggf5vfOZhumsFmKI3UevUy5%2Bw0R9jcFWYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7LWgSJls2pOT9HRSrcAyn%2F6mt3AVfn6WprmqBmqu1d0kR%2FnU5ns%2BP4bdQI%2B9pLgYz6iUSkmIaEKyXsk0KohODtN4yKGPrOypjzS854n4ulRey9XF6IQ%2F6%2B9rJCAPfI8VfwZUubyWjMQIK18PMvuI1PAVMHmL3F9kzFUVChk2WHXIOdJSIBeTxBHjwBQIACqWhiswtZUKE0japNOx5hc%2FoH%2BjFqsrOxzVIfgt6cOPROT9o%2B0HkhhJ9LIH6Ah1nGmfOTkC4ejtayyEnMVH2Y2mOQV%2FZh7hvKXqH%2BFXy4qYmRASd%2FNCNyqSIG2UXptcSaTJqNrUPbyVYySxEI%2FqjcltwQSJX%2B9BYvXqJUmFM%2FwbK8xXeiHOqWZissX1Ocz0GV9W8yUsSc2Hsa5joNEydQwAKKF%2BtEWduGOxkV7U3bJe4ra4BrWwFSyqT%2BiWnxWKMfNie6q3bL6bmP21H6vJFC%2BvgjRcQ%2FgH34Z1mFIjecsr2FMLNCSBq78S%2Fjrja7GQRNOnY2r6YYYnoE%2FMxdD%2Bo04hxW4sx8%2BQDgBBzkhWa0hyAFvfqSzfXGN57ZCS%2B6JssSzTdVTuYxO6N7t9FK0SYntDYKuAsy78tPQmgTy8iY%2FUgDs9eNVpMCIUKOswLPb7P0wf8NWUfpe2aYV15sMN%2Bz1skGOqUBA7fgnq0qPsftb3JUxu%2FHk%2BDyXbLGUbUq%2FYPS26bxUwPoWuYNLJw%2B4u9TYMh9E9ukabcqX06nEmGpFHtS6GEltwGz8t0XXdaOOeKmJ0fJpHXZiaHAby6YzdtdKgcnH0IlnFTcbGQMW64mutGMLB02pnhn%2B5Bk05%2F6O82CAwwEMmxImY4gyIZkT7IZXT3lmtSg9Z69whPN3cxt6da36WP7vyA1w3y0&X-Amz-Signature=34c7f74523f09ae386016b5bf96852242f93f96828462905ed998657c6546294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
