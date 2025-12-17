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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MEMLPKJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlGTnXC%2F8iixiBh0%2B1WI5rM0%2Fpjv0daNzB8kwG%2FkdAXAiBZ01r%2Fmi3uLoVZkWFFLgHF6EaZ7svZzUSYecrLvom5air%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMrxpxAVP5ekzE3ysmKtwDeYgf57E3Eg0l5dc3m4Bas5rQ345aVf%2F0VvIFDRdZdZz8uzCSYS6y53Lh9dSX2WtEeAIUIOma9dxJCiLt%2B0bl2jot9JAjKBgLBYG7D8j9Apt6mM0cMmofD%2FBu3VTqp6a5ietyDS9h4NoQfD8dJsyrlluUJ82I%2F%2F8gtzaP4cIj7t1TTv4vypYg2KRUIqO5iNvPo82r4rFuEM4muraUtHU5vasVl1%2FKs9kpoj8EaJiFgFZ%2Bb1jfkNn7Ksw9A0H7v7OS%2BYJjwRqBAM%2BC43%2F9KeMqWUA2nYob%2Fr%2BohbcT3a1BPv%2F4EGIzn9xBHQ2YkOjcxkc%2B2E%2FZ0l%2FhnrgOwrBqoW1KDuKgnVFsTmgZ7%2F%2FkD%2B%2BTgGKko7YBt%2Fy3haOIK7Pex2EClYfOCmLZVgXAG83bvkNeQV2wEKgpfIV6L58%2FMNDxWc7DULPsYNchBUpWgme7yZUqkBRz3kCKI0IpPv%2FT9WGFGiUJhn8lMPURA5EXgeJB2Gtgsr0x3wXt2irqkpNT1%2BNj%2BPEYC923rTJiUEefKsHzyVGyg%2FlAQIu288nNlDK2FOz4%2Fu5xzWAgCQYRAWhJj3lY9Q6AxTtizDfP%2FsbAGLIBVgpxqfVg4loUx6LpycpVK2HxOVktAzYkPRQWtbEwjNGJygY6pgE4ZrmZJSHzUOi9GQtvMNrAsXTh%2BC92cDR9XXbwzaJSmeIdB7EnynaeSBwEZzfOVI3aA%2FdSooqQ9qeBwkFBefNCeeb96Hn%2B%2BlymfjE9g0TmMwJdcHlG5M%2BQ%2FPAAZRcmLsahcpyFgyqWklJKfkNFwQO8qmpHAynDsfKnxt%2Fpf8fGHMl1QlVCmivXa3JtOn7CVHXRPnumeg8ulyxxNC%2FGk9WW8ZjI3eZB&X-Amz-Signature=5b1f179c54bfb0ae94d833397c8db565820a7d165e0e5ed1121ecb5455f2bf3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MEMLPKJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlGTnXC%2F8iixiBh0%2B1WI5rM0%2Fpjv0daNzB8kwG%2FkdAXAiBZ01r%2Fmi3uLoVZkWFFLgHF6EaZ7svZzUSYecrLvom5air%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMrxpxAVP5ekzE3ysmKtwDeYgf57E3Eg0l5dc3m4Bas5rQ345aVf%2F0VvIFDRdZdZz8uzCSYS6y53Lh9dSX2WtEeAIUIOma9dxJCiLt%2B0bl2jot9JAjKBgLBYG7D8j9Apt6mM0cMmofD%2FBu3VTqp6a5ietyDS9h4NoQfD8dJsyrlluUJ82I%2F%2F8gtzaP4cIj7t1TTv4vypYg2KRUIqO5iNvPo82r4rFuEM4muraUtHU5vasVl1%2FKs9kpoj8EaJiFgFZ%2Bb1jfkNn7Ksw9A0H7v7OS%2BYJjwRqBAM%2BC43%2F9KeMqWUA2nYob%2Fr%2BohbcT3a1BPv%2F4EGIzn9xBHQ2YkOjcxkc%2B2E%2FZ0l%2FhnrgOwrBqoW1KDuKgnVFsTmgZ7%2F%2FkD%2B%2BTgGKko7YBt%2Fy3haOIK7Pex2EClYfOCmLZVgXAG83bvkNeQV2wEKgpfIV6L58%2FMNDxWc7DULPsYNchBUpWgme7yZUqkBRz3kCKI0IpPv%2FT9WGFGiUJhn8lMPURA5EXgeJB2Gtgsr0x3wXt2irqkpNT1%2BNj%2BPEYC923rTJiUEefKsHzyVGyg%2FlAQIu288nNlDK2FOz4%2Fu5xzWAgCQYRAWhJj3lY9Q6AxTtizDfP%2FsbAGLIBVgpxqfVg4loUx6LpycpVK2HxOVktAzYkPRQWtbEwjNGJygY6pgE4ZrmZJSHzUOi9GQtvMNrAsXTh%2BC92cDR9XXbwzaJSmeIdB7EnynaeSBwEZzfOVI3aA%2FdSooqQ9qeBwkFBefNCeeb96Hn%2B%2BlymfjE9g0TmMwJdcHlG5M%2BQ%2FPAAZRcmLsahcpyFgyqWklJKfkNFwQO8qmpHAynDsfKnxt%2Fpf8fGHMl1QlVCmivXa3JtOn7CVHXRPnumeg8ulyxxNC%2FGk9WW8ZjI3eZB&X-Amz-Signature=4ef6084c9e282b644f94925a4c2f6b04f3d4decd9af0beccfc15c5046bd1929b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
