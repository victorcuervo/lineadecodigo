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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNNT4BW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuMpJebCPxc0KSeQ4RqLEbXZ93ilMtbe65ERKkcT0rCAiBSo0vuFhO2gjgsUqZUW2%2BzlcZseqUBhjWK6dBUCQVtPir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM13XWWiYDhu29M%2BtuKtwDZRByw1cp98Czn6aRtJkg1m8qZmK6SpBsfNRe257mlFefF1DvNfYzjC9PL592%2FyO1nGp%2FoJVGQWodWFMLQqz3ClqoqRYxeR1uS7rZUHwKshePmTM11M9IzCXN33FB2W9ypTFWMfsyEKyj%2FvjvR2F1AcGdGxM0n0mLpYNPusttAaVQnqKmB3NG5dqWvv2YuLvjNgzZm38MmL3sNeXLTwlr2VuLer3Tj9ovIE%2FlPKfGnvANRHJBXzfG1FvROxDWeafJdRVvagyM1T6vhMLBpkAQAwZtJ3RqGarFdztj3ccxJZ9mXCdU4YsQ9cxZnLw0gW6iANA%2BgWSu%2BJlKC078bXk0QIbz4mMhdPpbevhJhrNHj%2BUOW5qnzSGYLYwi89NqU5vzPRfCAxjDi%2F7rDWkIN69Zbi6B17V0k2KYu4oDGIaEDMHoSGeQj2PxY6ISvgHxacn9C9ISdpH%2FanPj6O%2Fe%2BBmhrCs7zKyDeLAjBH4aE9gcs2Sq0huzrdVRD9yTCzo6rpsfVU2rBiixEprUyvUlYG7bZv6PaRNUAOhnYr9vDHaOfb0W5TXNJBxwaV9eUA3lU5ciXuDrnd00GQRgXJ7qBIoan3kj%2FAsNST6OcjswBO%2BE%2BIhrFfHielP5UP%2F66n0w7LKIygY6pgGdvMWgF0SLIrHwmJlS3%2FRVa6%2FnrGHASXv%2Bb4%2FOFQGZJ10yYoUhtYKuzIxz9xUkePtw%2BFkBy%2B10fTHkAXYz35fjLvcmv8zoBqjuvTzOFAH1K%2FprAgxljS%2BJ3ix81bULnBgiRuQHYGhTjarKxVgGCl4%2FsZlO9Wi7JBfcV17clgdUGI8F12mAsGjQTfL7D5lgUqvkgKNNKZfxJvN18r2M0KazZksN7Jgy&X-Amz-Signature=17ae65b9de4ae2caabebf170791e0d5a2a16dc1ebf3f3124628d08eec95f0b8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNNT4BW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuMpJebCPxc0KSeQ4RqLEbXZ93ilMtbe65ERKkcT0rCAiBSo0vuFhO2gjgsUqZUW2%2BzlcZseqUBhjWK6dBUCQVtPir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM13XWWiYDhu29M%2BtuKtwDZRByw1cp98Czn6aRtJkg1m8qZmK6SpBsfNRe257mlFefF1DvNfYzjC9PL592%2FyO1nGp%2FoJVGQWodWFMLQqz3ClqoqRYxeR1uS7rZUHwKshePmTM11M9IzCXN33FB2W9ypTFWMfsyEKyj%2FvjvR2F1AcGdGxM0n0mLpYNPusttAaVQnqKmB3NG5dqWvv2YuLvjNgzZm38MmL3sNeXLTwlr2VuLer3Tj9ovIE%2FlPKfGnvANRHJBXzfG1FvROxDWeafJdRVvagyM1T6vhMLBpkAQAwZtJ3RqGarFdztj3ccxJZ9mXCdU4YsQ9cxZnLw0gW6iANA%2BgWSu%2BJlKC078bXk0QIbz4mMhdPpbevhJhrNHj%2BUOW5qnzSGYLYwi89NqU5vzPRfCAxjDi%2F7rDWkIN69Zbi6B17V0k2KYu4oDGIaEDMHoSGeQj2PxY6ISvgHxacn9C9ISdpH%2FanPj6O%2Fe%2BBmhrCs7zKyDeLAjBH4aE9gcs2Sq0huzrdVRD9yTCzo6rpsfVU2rBiixEprUyvUlYG7bZv6PaRNUAOhnYr9vDHaOfb0W5TXNJBxwaV9eUA3lU5ciXuDrnd00GQRgXJ7qBIoan3kj%2FAsNST6OcjswBO%2BE%2BIhrFfHielP5UP%2F66n0w7LKIygY6pgGdvMWgF0SLIrHwmJlS3%2FRVa6%2FnrGHASXv%2Bb4%2FOFQGZJ10yYoUhtYKuzIxz9xUkePtw%2BFkBy%2B10fTHkAXYz35fjLvcmv8zoBqjuvTzOFAH1K%2FprAgxljS%2BJ3ix81bULnBgiRuQHYGhTjarKxVgGCl4%2FsZlO9Wi7JBfcV17clgdUGI8F12mAsGjQTfL7D5lgUqvkgKNNKZfxJvN18r2M0KazZksN7Jgy&X-Amz-Signature=f08b496ea8a6dbac057e2a8e839daad8b7e83ca6b66e17f0420866911c40feaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
