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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDUCAOH6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADzDx59ro69eiTD20M24%2BLLkcQRVYvs7sjugJJ08woVAiEA1%2BZfFQIem%2BOnI7KhY%2FM1LyL88qkor%2FzqaMlJUQ6b6NEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOxe7l%2B%2F%2FSXKAd7u3SrcA9kdm0zhhdH5GKmV6nQVCV7ZOqKfRWW0HmSA%2Bd%2FldSGQUTt3oo%2BDT3Hi703TvAjbWKWGek5jamznH1oLQHR86A39%2BMfCIG09ggSinf%2Ft4iUHmOJKfFF0VOrm1qHuScXES03bCM06Mc27G%2B%2F%2FseDvH%2BxN71ikD7BU8xNcSBF3fJU7iCMHcObPhtPRXfAh5yJ%2FIT38jSSbKPx9GZlRWiU2DB4Lfn36xN4%2FfNaa0S%2Fpz5ZmMD2tLq5OcwNK7vwHVO%2Btt0xsBsacv1HiAip7vRte0%2F9FIWQfYB0v%2BziJidk1czd2U92A3qHZqY%2FjNUZnT8L7NHdGBlbZZpg02%2BaxIY5PUn9%2FuiP1PoJksVXkOfKV1ji2CmAVgZrNpUx2VTw3TOGgk7V3U2RjNDEQkrA2NF%2BVLL07UgRbVzMDB6h7RkV4%2FtUXSu80VkVQgYVLPg4ZZ%2BWN7yk4LH19j8Lr5cj4Pq24H313D%2Bls2rbu5dV329siWRMzCG0uMZWJBmt%2Bv5CiQMTI12asQEDg1oK6Eili0qoRwebf8PeffqEq9nSnBkWJ0sX0MOUbTMWtZXu8w%2BvI1ve21YGfRH%2FnkLFaX%2F2hrlF14QRbEC11VoFwDiO%2FQktojpKYYfyikn00hSQ%2BjssUMJjjisoGOqUBLKUpNvaSJv6kQwoxUjWQBt83%2BjT3H4X4OvEVZOIPP4M%2F1Pqj6vXsqstBsvM0%2FokrN%2Bp%2BXiNiZUt6kawhm9X0XSnLMqtK3PU9VS8Ua51Ok3wvpqQrClGqtRTHMAGU%2BGO12qkwVxKvrKo752CrfqSBn2BxIlshrMHh53BkN9hyxhjPp00SSV%2BplQZWIn6bF5ZuYrrRYdD4bbdFglbr1z63VWAvcvhi&X-Amz-Signature=6796a5da6f7e9257c50a8f6be011268c92dd1401ca82a823d65513e5c01b3463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDUCAOH6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADzDx59ro69eiTD20M24%2BLLkcQRVYvs7sjugJJ08woVAiEA1%2BZfFQIem%2BOnI7KhY%2FM1LyL88qkor%2FzqaMlJUQ6b6NEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOxe7l%2B%2F%2FSXKAd7u3SrcA9kdm0zhhdH5GKmV6nQVCV7ZOqKfRWW0HmSA%2Bd%2FldSGQUTt3oo%2BDT3Hi703TvAjbWKWGek5jamznH1oLQHR86A39%2BMfCIG09ggSinf%2Ft4iUHmOJKfFF0VOrm1qHuScXES03bCM06Mc27G%2B%2F%2FseDvH%2BxN71ikD7BU8xNcSBF3fJU7iCMHcObPhtPRXfAh5yJ%2FIT38jSSbKPx9GZlRWiU2DB4Lfn36xN4%2FfNaa0S%2Fpz5ZmMD2tLq5OcwNK7vwHVO%2Btt0xsBsacv1HiAip7vRte0%2F9FIWQfYB0v%2BziJidk1czd2U92A3qHZqY%2FjNUZnT8L7NHdGBlbZZpg02%2BaxIY5PUn9%2FuiP1PoJksVXkOfKV1ji2CmAVgZrNpUx2VTw3TOGgk7V3U2RjNDEQkrA2NF%2BVLL07UgRbVzMDB6h7RkV4%2FtUXSu80VkVQgYVLPg4ZZ%2BWN7yk4LH19j8Lr5cj4Pq24H313D%2Bls2rbu5dV329siWRMzCG0uMZWJBmt%2Bv5CiQMTI12asQEDg1oK6Eili0qoRwebf8PeffqEq9nSnBkWJ0sX0MOUbTMWtZXu8w%2BvI1ve21YGfRH%2FnkLFaX%2F2hrlF14QRbEC11VoFwDiO%2FQktojpKYYfyikn00hSQ%2BjssUMJjjisoGOqUBLKUpNvaSJv6kQwoxUjWQBt83%2BjT3H4X4OvEVZOIPP4M%2F1Pqj6vXsqstBsvM0%2FokrN%2Bp%2BXiNiZUt6kawhm9X0XSnLMqtK3PU9VS8Ua51Ok3wvpqQrClGqtRTHMAGU%2BGO12qkwVxKvrKo752CrfqSBn2BxIlshrMHh53BkN9hyxhjPp00SSV%2BplQZWIn6bF5ZuYrrRYdD4bbdFglbr1z63VWAvcvhi&X-Amz-Signature=35e80c43486a215ef3b76f7fbe959190f229600c0fcb2e91c17aae96bfaad46d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
