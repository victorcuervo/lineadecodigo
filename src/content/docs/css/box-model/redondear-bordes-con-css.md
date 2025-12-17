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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY5O63XC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzK0kY9E7hezMkepVngQ%2FsRbvGxUbSX4Kmy0IAxBbooAiEAn7JZQsvzDpjyBTdcGwZvPATwiW87IwGgqUeG%2B5Njv9Mq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFBl3xwzsR4goN%2BuvyrcA6fy7FbH2Yj68zQr9%2F4iLxVG1A5dlorDAm7N0q57qq7buXjocxFG%2BeIBhdNH8f8wjF0cgW9XKYHdmORPwCLjFWgW%2FdwoZH7eJIZcNScAL6MAbzvRQXs2cfFEWN8676IM1ntG4%2FXjvuPv52Y5W1zdz9O%2Fz4CBCFt7kq1iJPQ16%2BS7pzk9y%2BwwNxbahB10lrnTpX6c56gudZNvaifrYIfR5iN7mRBCuiyODy%2FCwCa%2FMSw8NShxOxURJBVQcNbRjNTZRxu14ERK0hUXN547%2FU%2FZ6Iif4zg2FY6bqzuDsaXAIu2Mx9Jo%2BrjvZFmY%2BQB3vDf%2F7KleBW0KbXeseDav00eJ0icbAiA9v8%2BrAK1583cN25WEjOYm0QFA0Hg5MFUSmxcrZR0MuhDp6Plxwvu6mvS59anUCU8TtBFuXYFfUjsrzd8ztCtQ%2FB2sXOk%2B0A2yiGUQMBwhnTeX3sE6kXgV8KT31MAqP0qin1Bzka%2FU7%2Bpvi17rozW2BKJP2o9N%2F6bQeinWCsdXMtA7K911Sf2OZJTtSmhgY82TeNHVxPktdWQ414FVhsHr441Mx%2FwNKUKOQWLweA7b%2FopZdUp7yPEUKrAPTcqYD9JI4feHz8CwQ9ytmH%2FansI%2FBZtl7RzMke2yMNGDiMoGOqUBHqWiWGT8OwLjW73O5DKKoueOlwSybZQRWbZFVRsW4bqCoxiBQ%2FCgDR9xoYnbXTkAq8TaiPxSjbxA%2FsJ4COFsQjPQQ%2BJhgnUmju3mRrbzHhbTAXrcsR7tu2YqXhth1803nfF5BhWV50noPCgA4HVgM1sF6arLPdTsypfXVs2ekbAhTTPOe2DRdgrM4bcL3yLsmSRLZEZkCQF3BpdsNqFnz4xyfOYd&X-Amz-Signature=fd57ffe77d42f3bc7d96634efe7f5a477ef93cb4aaecba979cebee479c3f07fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY5O63XC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzK0kY9E7hezMkepVngQ%2FsRbvGxUbSX4Kmy0IAxBbooAiEAn7JZQsvzDpjyBTdcGwZvPATwiW87IwGgqUeG%2B5Njv9Mq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFBl3xwzsR4goN%2BuvyrcA6fy7FbH2Yj68zQr9%2F4iLxVG1A5dlorDAm7N0q57qq7buXjocxFG%2BeIBhdNH8f8wjF0cgW9XKYHdmORPwCLjFWgW%2FdwoZH7eJIZcNScAL6MAbzvRQXs2cfFEWN8676IM1ntG4%2FXjvuPv52Y5W1zdz9O%2Fz4CBCFt7kq1iJPQ16%2BS7pzk9y%2BwwNxbahB10lrnTpX6c56gudZNvaifrYIfR5iN7mRBCuiyODy%2FCwCa%2FMSw8NShxOxURJBVQcNbRjNTZRxu14ERK0hUXN547%2FU%2FZ6Iif4zg2FY6bqzuDsaXAIu2Mx9Jo%2BrjvZFmY%2BQB3vDf%2F7KleBW0KbXeseDav00eJ0icbAiA9v8%2BrAK1583cN25WEjOYm0QFA0Hg5MFUSmxcrZR0MuhDp6Plxwvu6mvS59anUCU8TtBFuXYFfUjsrzd8ztCtQ%2FB2sXOk%2B0A2yiGUQMBwhnTeX3sE6kXgV8KT31MAqP0qin1Bzka%2FU7%2Bpvi17rozW2BKJP2o9N%2F6bQeinWCsdXMtA7K911Sf2OZJTtSmhgY82TeNHVxPktdWQ414FVhsHr441Mx%2FwNKUKOQWLweA7b%2FopZdUp7yPEUKrAPTcqYD9JI4feHz8CwQ9ytmH%2FansI%2FBZtl7RzMke2yMNGDiMoGOqUBHqWiWGT8OwLjW73O5DKKoueOlwSybZQRWbZFVRsW4bqCoxiBQ%2FCgDR9xoYnbXTkAq8TaiPxSjbxA%2FsJ4COFsQjPQQ%2BJhgnUmju3mRrbzHhbTAXrcsR7tu2YqXhth1803nfF5BhWV50noPCgA4HVgM1sF6arLPdTsypfXVs2ekbAhTTPOe2DRdgrM4bcL3yLsmSRLZEZkCQF3BpdsNqFnz4xyfOYd&X-Amz-Signature=fc678aba78101db59d8bd39f2752212aec4e03fd7c36e3cc4940bb8dc9659df2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
