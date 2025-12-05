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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVKNW7YS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDeWGE%2F7p5z2JvmxvsAtvwW6uZTmRVb5sz9ytURBrasAiB0XHlQ%2FAgD4Elz8f7QnB5K5fcPAkgJUrXcKJjK29vWwCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMJwtso3GC4gWl6sHaKtwDvjhf9KCRLOWN2JCOFT1d5d0Pp%2BBWMexES7kb2VSMTQPdOzjRK1D7qEf%2BCmp7i59bgfykzuo7CaWLoS1287ba7NbRYIw1nCWnVK34WfODA2hny3hKQbM39b4Z2MN3a03ZO1HZ0B3oGQ5oWhQGmZj85%2FGclDQigYhz9kmn2IIycQTa6grqQCX2ANbylunxrVgQgMHyHklfuRYYPvV9H6kXxjyGQAgw7WjLFJTVe4efna67bf5848dXsQdAnSWiKUE%2FguFnDhSnP38LrI8UfS5LaukXKJwcHTbfEQmgSOHOAJvukUPsCbKLlyWVgBsbcr2vbOYtnkfuG%2F3RSiWzcIv3fy8RbifhgvoAgmf51n7hYjHTNmworbfSqR03nu%2BjCVWe7jdQHHTC7YM5%2BQZjZIdl9lyNpDL5FtP6sFNyvMEa2YhtGMq9WGkt3U8O1UsSukD7Rv7M2td%2BLWRDe2%2B0hVhOZHjNO62xMpIDL5qrr563SOzWDholu0odgRsmWI2EZEezvGKytds8xnl8K23TRpmFawyWppotvA%2BsZKCfLjh3V3BxwRTV9EgjMCLPpigozf%2BCG8VNCgL8Vkj%2FolrePKF4HrqY7Nf%2BFq%2F4FIQIY0uamb1P4eCslQORLHG40Icw8ZzNyQY6pgEQqDagKzNv6E8s1u37mFql1pcxs%2FNfJ5HJ4IwsRx8%2FKFjjVUH%2FKH%2FM2PxGWpV9AyFDD6HH7Xo7r7NVflprlNymH7KwQAJ9FqLYbblKSeT020w2%2F05qNb3E9bighmRZ8gBjK4fDJCKRXAHA1gk3B2lSWGA%2Bb2hMCFqr9KMW5i9qLrpclKxR4w3vvBqkr0xBrBEkCXLUxFHbF7PXD4A4zh%2F8ketV1Qg4&X-Amz-Signature=a86ea4359ae8e214700fa80491839f7ca969e9de4a2764f9b6d7ac295be93d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVKNW7YS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDeWGE%2F7p5z2JvmxvsAtvwW6uZTmRVb5sz9ytURBrasAiB0XHlQ%2FAgD4Elz8f7QnB5K5fcPAkgJUrXcKJjK29vWwCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMJwtso3GC4gWl6sHaKtwDvjhf9KCRLOWN2JCOFT1d5d0Pp%2BBWMexES7kb2VSMTQPdOzjRK1D7qEf%2BCmp7i59bgfykzuo7CaWLoS1287ba7NbRYIw1nCWnVK34WfODA2hny3hKQbM39b4Z2MN3a03ZO1HZ0B3oGQ5oWhQGmZj85%2FGclDQigYhz9kmn2IIycQTa6grqQCX2ANbylunxrVgQgMHyHklfuRYYPvV9H6kXxjyGQAgw7WjLFJTVe4efna67bf5848dXsQdAnSWiKUE%2FguFnDhSnP38LrI8UfS5LaukXKJwcHTbfEQmgSOHOAJvukUPsCbKLlyWVgBsbcr2vbOYtnkfuG%2F3RSiWzcIv3fy8RbifhgvoAgmf51n7hYjHTNmworbfSqR03nu%2BjCVWe7jdQHHTC7YM5%2BQZjZIdl9lyNpDL5FtP6sFNyvMEa2YhtGMq9WGkt3U8O1UsSukD7Rv7M2td%2BLWRDe2%2B0hVhOZHjNO62xMpIDL5qrr563SOzWDholu0odgRsmWI2EZEezvGKytds8xnl8K23TRpmFawyWppotvA%2BsZKCfLjh3V3BxwRTV9EgjMCLPpigozf%2BCG8VNCgL8Vkj%2FolrePKF4HrqY7Nf%2BFq%2F4FIQIY0uamb1P4eCslQORLHG40Icw8ZzNyQY6pgEQqDagKzNv6E8s1u37mFql1pcxs%2FNfJ5HJ4IwsRx8%2FKFjjVUH%2FKH%2FM2PxGWpV9AyFDD6HH7Xo7r7NVflprlNymH7KwQAJ9FqLYbblKSeT020w2%2F05qNb3E9bighmRZ8gBjK4fDJCKRXAHA1gk3B2lSWGA%2Bb2hMCFqr9KMW5i9qLrpclKxR4w3vvBqkr0xBrBEkCXLUxFHbF7PXD4A4zh%2F8ketV1Qg4&X-Amz-Signature=7e06376288e65a570d38033819abbfdf4189d04717021478e51e83b277639d29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
