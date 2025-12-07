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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROFHROWF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCElAvsyxcxxDNLoDtOtJOqKKKbwDV75pKD0UnZ5xpmQQIgN%2BobMG8VANXX8Usa4YdKbw2ZlLrgCokI5Am%2BwgCTOAgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASI%2BEbIL7GU2n72jyrcA2H7KpObQjB5CQkbTQfIkwUvQjkWCwC0Q58lPU1UfXF9usxxfVI8wENe%2BpjUaJrfMFbMkO9X1K7%2BxG3rytfpib9cpdMwfEO5273g19W%2B1dK95jGooN5NiWaaWThyNe%2BhMMah7wWipkOvTfRl7cWtnYzZFZcbUTYePYy3C%2FK4b8nJ9dleqCOTGXWRA%2Fz1FdmwhbPFOesWUuIS3fM0UA0weKMXCkvV7VF8k0E1psxajcbW%2FsZzQInkV%2BkSfnx%2Fpj7UA4VRaXPkG%2F7Oom7eIMsb6vrOUcxDWTu0OTjKYslsTh5NGxfmKICQHe%2B2hFTYkBzYdgsl1e804C%2BYOjhMPK1CIbWcOnNbXft7r%2BhmS1CLRXyprf56WvNF0plt%2BaOeI1VZYo2lbTf2JqyxTMzP6VfMR08Adi0G4mMlxy0cer%2F6YDOCKfL3x%2FQV86iWMVJPYFopfvipmkPpYIGaOI2a2ibdNAOuJ5jotzd1iyLl90e9zzz%2BM7NVucPlvq7THZg44tQ2ifoIec0jWVsCUbyg2tzXntbWkcu0%2F%2FhFuamRs%2FU6KJJCWFV1EfZlpH2S7dNzy9kJT2xiPej%2BgKqyxn2IjPETSdeTd738NZid1J1M16Fqoes1lZPdIOcWI1sqYGdzMLOj1MkGOqUBaFUQKW2d6AppmE9F4xcYmMI9l7TLwPORuOFjPQNUtKB8wF76xS7XitzvBrn0zcxG4H%2F5bkOvgjo9U4LSExoFEfOkAgtx5kaoLVAJSd4%2BNbsRPGcHfYGnGY1DLBUY%2BIogZkYIsuTvoUpA4pVGiZon%2F3LhGEGV9%2F0yoXOzmuGx6u49sB30bYxds1ZeAw0Kd57B%2B8LWdOLZt8yssJfRcS6dSA3YT%2BjR&X-Amz-Signature=e0d9dd80cd237f79a9a60abe4a7624b5c5e4634ff026403f5fb8a01d7562a759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROFHROWF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCElAvsyxcxxDNLoDtOtJOqKKKbwDV75pKD0UnZ5xpmQQIgN%2BobMG8VANXX8Usa4YdKbw2ZlLrgCokI5Am%2BwgCTOAgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASI%2BEbIL7GU2n72jyrcA2H7KpObQjB5CQkbTQfIkwUvQjkWCwC0Q58lPU1UfXF9usxxfVI8wENe%2BpjUaJrfMFbMkO9X1K7%2BxG3rytfpib9cpdMwfEO5273g19W%2B1dK95jGooN5NiWaaWThyNe%2BhMMah7wWipkOvTfRl7cWtnYzZFZcbUTYePYy3C%2FK4b8nJ9dleqCOTGXWRA%2Fz1FdmwhbPFOesWUuIS3fM0UA0weKMXCkvV7VF8k0E1psxajcbW%2FsZzQInkV%2BkSfnx%2Fpj7UA4VRaXPkG%2F7Oom7eIMsb6vrOUcxDWTu0OTjKYslsTh5NGxfmKICQHe%2B2hFTYkBzYdgsl1e804C%2BYOjhMPK1CIbWcOnNbXft7r%2BhmS1CLRXyprf56WvNF0plt%2BaOeI1VZYo2lbTf2JqyxTMzP6VfMR08Adi0G4mMlxy0cer%2F6YDOCKfL3x%2FQV86iWMVJPYFopfvipmkPpYIGaOI2a2ibdNAOuJ5jotzd1iyLl90e9zzz%2BM7NVucPlvq7THZg44tQ2ifoIec0jWVsCUbyg2tzXntbWkcu0%2F%2FhFuamRs%2FU6KJJCWFV1EfZlpH2S7dNzy9kJT2xiPej%2BgKqyxn2IjPETSdeTd738NZid1J1M16Fqoes1lZPdIOcWI1sqYGdzMLOj1MkGOqUBaFUQKW2d6AppmE9F4xcYmMI9l7TLwPORuOFjPQNUtKB8wF76xS7XitzvBrn0zcxG4H%2F5bkOvgjo9U4LSExoFEfOkAgtx5kaoLVAJSd4%2BNbsRPGcHfYGnGY1DLBUY%2BIogZkYIsuTvoUpA4pVGiZon%2F3LhGEGV9%2F0yoXOzmuGx6u49sB30bYxds1ZeAw0Kd57B%2B8LWdOLZt8yssJfRcS6dSA3YT%2BjR&X-Amz-Signature=4816f8b6c1cece4b212d7ca0350e2429a68a75fc5feaa42d59a8723edb3249b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
