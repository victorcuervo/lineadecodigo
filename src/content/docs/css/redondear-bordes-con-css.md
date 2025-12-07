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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q22MOOBM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T101823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRJ4EuEQInzGMbXCowL%2FEeMv%2FsWGPlWYjPWAMbD9bOFAiEA6%2Fjqdl204ZB97LPMJlbwu3KyfkNdw2WuGNZr35jvnkkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4Z1yCk95omt3%2FWFyrcA2gwEeBoGQZpQO7qIMgBCEWr5Cbprt3VZF%2BirFfNh%2B5MV8uGK5CCC2PgANVbUoRb79OL9ieiH8m7dxjgme0PLDbtjMtGRLvac%2BKPPgFiNU91AZl1qKKJL2jXW%2Fd9xHY%2FdLdR97SpslFOOHS%2B%2FR4XkwxM%2FweKsw0dUH1QIkYGrtbXBUj%2BwwIzOp223cMMZh4raLczig1OnSXEMxacHkQsRBbpRjTBwuTz2N4bHLOoEATvDFUd7UNQ%2BS6YGbJyUzO6ezw9U%2F86npWyHPjH69yZZF5TWjWN94YpgCGRJac2ggRmoILoZkv7WP2Eb7H5P9VWE57k3fObN4KsSQm0LKlZuUU826FBOQ8n%2Ba07Wf5PQ5k9AbqDchOgvyn98EMoxe1PfC5s7QNOS%2FJ%2BzFncYroGAqZn1L06F4i08pvBxN%2FU5xB4lera4Gb9URr%2FwDBf35e0S3QKUhIIo1ozPGx%2BovjtXLlmTfrfz3%2BclQ%2FsEYpa2Hfyv1AimNIK7l8yoy6Ahmf5dcTKY9oVWmbSaoN%2BEgklVEKxC%2F4Dkg172uFGPXPaf4bedlZ4%2BrHQIRGJ26MuZQkIHim1UGCxi%2Bi6PdtHUmH5xgLlKH99qqUEeUdfw4k1otBxeWccgwvOl9ewdTi6MK2Z1ckGOqUBKXX8bYxbMT9mILJg66l4ZtYgX0c4AWQB2Lw4kp%2B%2FYrh0AXjUkT%2BVHXen547OpXQBBSZWSsKI4gGLXxtBRgUYhI5t5HqX0cQr0MVT88XZSTrbvVTyD8oD1OqyrqCDnC8QFpoH8ngCqK7ZRF6HZQ7nQkquoTdVwsiUmLUEXiMpnMHYWJy4mg9xGHwfEYSTLy%2BvZbQgRXWeA4lg2xBfz6HFsV0QbPyH&X-Amz-Signature=df4d7b52ee06df7a7d3b567ddedb88817d27090a8387803386ea88fd01a9e5a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q22MOOBM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T101823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRJ4EuEQInzGMbXCowL%2FEeMv%2FsWGPlWYjPWAMbD9bOFAiEA6%2Fjqdl204ZB97LPMJlbwu3KyfkNdw2WuGNZr35jvnkkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4Z1yCk95omt3%2FWFyrcA2gwEeBoGQZpQO7qIMgBCEWr5Cbprt3VZF%2BirFfNh%2B5MV8uGK5CCC2PgANVbUoRb79OL9ieiH8m7dxjgme0PLDbtjMtGRLvac%2BKPPgFiNU91AZl1qKKJL2jXW%2Fd9xHY%2FdLdR97SpslFOOHS%2B%2FR4XkwxM%2FweKsw0dUH1QIkYGrtbXBUj%2BwwIzOp223cMMZh4raLczig1OnSXEMxacHkQsRBbpRjTBwuTz2N4bHLOoEATvDFUd7UNQ%2BS6YGbJyUzO6ezw9U%2F86npWyHPjH69yZZF5TWjWN94YpgCGRJac2ggRmoILoZkv7WP2Eb7H5P9VWE57k3fObN4KsSQm0LKlZuUU826FBOQ8n%2Ba07Wf5PQ5k9AbqDchOgvyn98EMoxe1PfC5s7QNOS%2FJ%2BzFncYroGAqZn1L06F4i08pvBxN%2FU5xB4lera4Gb9URr%2FwDBf35e0S3QKUhIIo1ozPGx%2BovjtXLlmTfrfz3%2BclQ%2FsEYpa2Hfyv1AimNIK7l8yoy6Ahmf5dcTKY9oVWmbSaoN%2BEgklVEKxC%2F4Dkg172uFGPXPaf4bedlZ4%2BrHQIRGJ26MuZQkIHim1UGCxi%2Bi6PdtHUmH5xgLlKH99qqUEeUdfw4k1otBxeWccgwvOl9ewdTi6MK2Z1ckGOqUBKXX8bYxbMT9mILJg66l4ZtYgX0c4AWQB2Lw4kp%2B%2FYrh0AXjUkT%2BVHXen547OpXQBBSZWSsKI4gGLXxtBRgUYhI5t5HqX0cQr0MVT88XZSTrbvVTyD8oD1OqyrqCDnC8QFpoH8ngCqK7ZRF6HZQ7nQkquoTdVwsiUmLUEXiMpnMHYWJy4mg9xGHwfEYSTLy%2BvZbQgRXWeA4lg2xBfz6HFsV0QbPyH&X-Amz-Signature=edfcb301593a22eda5ed6b2f422ced668d61a07ca0eddda83274223cbf507a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
