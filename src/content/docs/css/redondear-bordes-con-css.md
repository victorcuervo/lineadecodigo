---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGUWSSW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIA7SU%2FO9BQMFMQxtLruK2vLvYxLVcfCZPZXCvnRnFnWZAiBPoYpfxc7nn%2FHXNhoIavzeGcwRxCMfEVSVFBaU%2Fz73uyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMyqfkO5Rc6G9qkffLKtwDWk9%2Ba%2FPWHnCr0LDmGE9jGWANHlISsUOyvvspDRXGmRx%2Bq8ptoZepx9MYGdHenv7FmQlR2inw79XqBX7mzZAEuUhzowino8jkbHU2VFb6Oy7imma3WbbRRqKr4hdtjKh3oZspKMRSdi15pQUgmUpyc5n6NfHhqTShsIIlkzedQVfl1r1Mciugz1tXd1CJkv7SYf%2FAhEmTY2c5act5b1EGUdbegc8Vn4bt7WuzQk82%2FF%2FcKoLBztvyeA0sO5G%2BBBVZweDiHVb2%2B5NQ1V9g9G5YPmnLPU6BBoss5gg7FoQnKWnhfUjhUMYtrT3VV2S6qWZ7jjAIqnyCLuaSTc0ThlRBu%2F%2FeCilauWSK77%2Be%2Bq1Tm5zRyvjQqVS8xxYmO7mlH6QETHH4dz%2F5Fn1tLBCeEHGrIWQqDUqvOyaL%2FsuzfWK%2BW4INiyEcWLTXiBNNRlZN%2Bglxz7pO92SobiEtluErKRjbuiJbBZg4osxqZ3nbxmp9Lzsd60YL%2FmG02%2FLi3rZ8kSTsv9XY13e%2Fs0V7w7n25%2BWAW1PZfQThZP9iYUWKle%2BrFA%2BMRaw5%2BVRdUXXIQOmYf%2Bc1Fa44Ciynh4QNfVoDoJU5ykJYn2ayKE3bkLnt6yyjQcv7YKn79LgNEkPwsjkwlqrFyQY6pgFt%2F2UMFH1gjjZyK5wvAN%2B%2B%2B5f%2Fw1CL%2FSyPtcULEaRZ9PxhXCXjItzjVqSv2Q%2FPyBeMyQBFSeQ6xOQ31M7x1bvHYqWgf7jfRJsfZWYqBFJsV7ajs8HxE6Av51e%2FpsaprGVuNVB0iyYMk3Y5i4iJgo2lLXXFDwoAGwjWPaCKMtG7xMeWaAPRqE%2FaoAPWNPftyhqHHeJHM3OmxlqL2ZTzLjMiq%2FldzC3k&X-Amz-Signature=02dbc0656168987d9c476c2802ae55284242b57d36158923f40cad26c73df47c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGUWSSW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIA7SU%2FO9BQMFMQxtLruK2vLvYxLVcfCZPZXCvnRnFnWZAiBPoYpfxc7nn%2FHXNhoIavzeGcwRxCMfEVSVFBaU%2Fz73uyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMyqfkO5Rc6G9qkffLKtwDWk9%2Ba%2FPWHnCr0LDmGE9jGWANHlISsUOyvvspDRXGmRx%2Bq8ptoZepx9MYGdHenv7FmQlR2inw79XqBX7mzZAEuUhzowino8jkbHU2VFb6Oy7imma3WbbRRqKr4hdtjKh3oZspKMRSdi15pQUgmUpyc5n6NfHhqTShsIIlkzedQVfl1r1Mciugz1tXd1CJkv7SYf%2FAhEmTY2c5act5b1EGUdbegc8Vn4bt7WuzQk82%2FF%2FcKoLBztvyeA0sO5G%2BBBVZweDiHVb2%2B5NQ1V9g9G5YPmnLPU6BBoss5gg7FoQnKWnhfUjhUMYtrT3VV2S6qWZ7jjAIqnyCLuaSTc0ThlRBu%2F%2FeCilauWSK77%2Be%2Bq1Tm5zRyvjQqVS8xxYmO7mlH6QETHH4dz%2F5Fn1tLBCeEHGrIWQqDUqvOyaL%2FsuzfWK%2BW4INiyEcWLTXiBNNRlZN%2Bglxz7pO92SobiEtluErKRjbuiJbBZg4osxqZ3nbxmp9Lzsd60YL%2FmG02%2FLi3rZ8kSTsv9XY13e%2Fs0V7w7n25%2BWAW1PZfQThZP9iYUWKle%2BrFA%2BMRaw5%2BVRdUXXIQOmYf%2Bc1Fa44Ciynh4QNfVoDoJU5ykJYn2ayKE3bkLnt6yyjQcv7YKn79LgNEkPwsjkwlqrFyQY6pgFt%2F2UMFH1gjjZyK5wvAN%2B%2B%2B5f%2Fw1CL%2FSyPtcULEaRZ9PxhXCXjItzjVqSv2Q%2FPyBeMyQBFSeQ6xOQ31M7x1bvHYqWgf7jfRJsfZWYqBFJsV7ajs8HxE6Av51e%2FpsaprGVuNVB0iyYMk3Y5i4iJgo2lLXXFDwoAGwjWPaCKMtG7xMeWaAPRqE%2FaoAPWNPftyhqHHeJHM3OmxlqL2ZTzLjMiq%2FldzC3k&X-Amz-Signature=dcbb47cb2c6557f7905cee9d5581e06e455b3653377fd106e03eb776d4a64c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
