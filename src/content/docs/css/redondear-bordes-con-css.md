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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YJFVZC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSLdTkhR0h7IZMj8jJ16t7Lq3xhH5FCB%2F6DPsBWSKisAiAMve5JywGBKM6fojk%2BwV%2B%2FzW5ZE%2FPDwjv9c6xSMSeJqCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM9dnVXmDiyzH3D6gMKtwDHdHfmTS9rv2rc3rIjB7Fklm78%2FWoORIY7N84TEEa9dG5QGvlhbvVt2OxUw0YClipwGRHsxB%2Fd7rgnG2ONah07JiSIf3JOkIBPxEMLDBO30ErNVzM0RNAFxP1E%2FVkskbI%2Fp5HAbOCOYqaT5S27JM6WSBfmtwiPqXcaC5x%2FdCCiqqdMpRzBYKVBTYNxWkket2LEpD2Dfo%2BLAEFQ0kuctmW5fDRmBVJ6662ImpZkWD72GLouJOZUtUWry7%2FWgCL5gTfa%2FR6P%2FT9%2BSQALg9M9AqGNFv7M47rd3cCO5ajitg6zmtLMxp0l12QWjBdNTGqpWDpO72lNkRe6lD7A%2FYpJSeAeyqtKpxwJ5GxXPv2FjfEcbhWz%2FW3%2BpHuhGZ9%2FmVh%2Fd8ANbkBQEcQScSGY4%2Fc%2FfvgjIeTCJtlsTRdYdaXGoqtl1GLYkYf09t3eM0SfQmn%2BkcBNSudRxdiyQagGkBDG%2Brz%2FeXrdUYpVqUft4AXRG8x8aC1IV0uyW%2BYISVIceirhBBDGohNBY5u5bmc9Jzly%2Ff%2BoJwEXjtKw7wKtfb9uQ5pXvNEa3oKgENE043nZptbg5bB0Y8JG9Md74klnN0N%2BlVH0GCmaAdeqUNf0Sc3lzTdRweYHtA%2FkUJRnZKto9cwlLzPyQY6pgHC7XluDiqaj134tgOqHPZyMy6O3xVcy%2BtyWtviTBpOZgthKpsYaXFJ58DiM3hIjDAkJvC5vFF%2B%2FwOLTPbNhA36QbN%2BzeYtOmDC6ojpbcsd7bDS%2BADS%2BbDElti9nXQHu9tPvHSA%2BYbYDzvHT0qH2LCuUqx8zRhHwpByA19JQPuCZFfoIYsUumj0y%2BMbmCUTJu5nIDzIC03sD35pET5%2BCMhwb0R9P02P&X-Amz-Signature=21afd976fe70904096f41805f2448cbc2e2eec7bb406b32f3234716ee82013c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YJFVZC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSLdTkhR0h7IZMj8jJ16t7Lq3xhH5FCB%2F6DPsBWSKisAiAMve5JywGBKM6fojk%2BwV%2B%2FzW5ZE%2FPDwjv9c6xSMSeJqCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM9dnVXmDiyzH3D6gMKtwDHdHfmTS9rv2rc3rIjB7Fklm78%2FWoORIY7N84TEEa9dG5QGvlhbvVt2OxUw0YClipwGRHsxB%2Fd7rgnG2ONah07JiSIf3JOkIBPxEMLDBO30ErNVzM0RNAFxP1E%2FVkskbI%2Fp5HAbOCOYqaT5S27JM6WSBfmtwiPqXcaC5x%2FdCCiqqdMpRzBYKVBTYNxWkket2LEpD2Dfo%2BLAEFQ0kuctmW5fDRmBVJ6662ImpZkWD72GLouJOZUtUWry7%2FWgCL5gTfa%2FR6P%2FT9%2BSQALg9M9AqGNFv7M47rd3cCO5ajitg6zmtLMxp0l12QWjBdNTGqpWDpO72lNkRe6lD7A%2FYpJSeAeyqtKpxwJ5GxXPv2FjfEcbhWz%2FW3%2BpHuhGZ9%2FmVh%2Fd8ANbkBQEcQScSGY4%2Fc%2FfvgjIeTCJtlsTRdYdaXGoqtl1GLYkYf09t3eM0SfQmn%2BkcBNSudRxdiyQagGkBDG%2Brz%2FeXrdUYpVqUft4AXRG8x8aC1IV0uyW%2BYISVIceirhBBDGohNBY5u5bmc9Jzly%2Ff%2BoJwEXjtKw7wKtfb9uQ5pXvNEa3oKgENE043nZptbg5bB0Y8JG9Md74klnN0N%2BlVH0GCmaAdeqUNf0Sc3lzTdRweYHtA%2FkUJRnZKto9cwlLzPyQY6pgHC7XluDiqaj134tgOqHPZyMy6O3xVcy%2BtyWtviTBpOZgthKpsYaXFJ58DiM3hIjDAkJvC5vFF%2B%2FwOLTPbNhA36QbN%2BzeYtOmDC6ojpbcsd7bDS%2BADS%2BbDElti9nXQHu9tPvHSA%2BYbYDzvHT0qH2LCuUqx8zRhHwpByA19JQPuCZFfoIYsUumj0y%2BMbmCUTJu5nIDzIC03sD35pET5%2BCMhwb0R9P02P&X-Amz-Signature=f15169a4042d5b81482e45d23adc40f35d76760205f3e0e2aa335842592ec815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
