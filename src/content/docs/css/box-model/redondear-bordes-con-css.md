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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666MUAYPM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkPUlo%2B3mA43dfX%2BXWShDfTEmtTt8I5suowMqWbn7FgAIhAO4g9uN9R66RXfxxSYP2IFxxVReo18dgR1Mw6VehGWpIKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysNg4Ubb4Tkue5p60q3APgtxCAgIL2Aqo1t1MCLB3l0u5%2FCJRBhW7t%2B7IjHP%2BIeNzNGOOxH1JzX1A0NosUJykBSKEiQ2FIvRiH%2BXE8zffYyrXYYdthB1Ik7voT4hX9QZH6R7H0ICODBIi6B%2BJbAuOHt%2F7SrXNR9aTzmlgAXkfdiQ6iIOwJ10Z36i3mWcTiedEsawOGn3XpOIoRUhDMOJGgUFsYbNMoyrUSdVtf2WkRMuXNXjTRirm%2B7ALPA3T05HX73timzkec%2BPQKNGmvthnzwATjnmKGMJ2fCv6LxUVPJw3UA3LqcjltCgIOE%2FdTyQ8nndsQPqiBUqXqMS2ByyPnhPu8dN8qT4o6c%2BLB43PMYleS0E%2FeU2FG0ecA0FUVu5z9EBt8SgsUxyhhRuMZyoAmwZv07FPynHZ%2BOOeGYdnW%2B1FQlRkcuQRgULwSJOiSJdGeumbkhuFLI9tn3iP4zXkQM%2BZz%2FJi28JyVxwp%2FEGLC1Y8FC5y8Mal2J1tZ4anbE1ota2udoiFbEU26Ft9p5ZjUp0%2F8J8S4pemOG0%2FEOXWZz9f1%2BB3rJ65xaxSQa2aO8WGxTDKsesGIsM%2Fx00ftn7915Py7nj1XBm41lQXV3Hl097kAqSxNyCq05vgo6ZdzyY%2B%2F7Ygxb7Kt78Zo2zCdoIvKBjqkAagP850VBloJjM1Tjo%2F6AS2HHk0Va0jAQD9nhwa4PFFI37Xxw%2Fk8R%2FXPJsgVIWouGg2nfKpgpQ4Mqp5iRMdybqa0gHn0DgzF1FkwjSnYxPmR6j5QMnNQy35or6dP4DpnqwBlR2q40N%2FSDP1dxtAZcuOb7hqjQrLkjHeLcdDRvZsDkBeiAz%2BDdpvYdK8lJIT5Ud6jNKOUiIerGx63udQgz6zihnII&X-Amz-Signature=0bcd646fbdbe860fe234328323e7ca2fcd07a6021a47c7e27ff386af321dbcff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666MUAYPM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkPUlo%2B3mA43dfX%2BXWShDfTEmtTt8I5suowMqWbn7FgAIhAO4g9uN9R66RXfxxSYP2IFxxVReo18dgR1Mw6VehGWpIKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysNg4Ubb4Tkue5p60q3APgtxCAgIL2Aqo1t1MCLB3l0u5%2FCJRBhW7t%2B7IjHP%2BIeNzNGOOxH1JzX1A0NosUJykBSKEiQ2FIvRiH%2BXE8zffYyrXYYdthB1Ik7voT4hX9QZH6R7H0ICODBIi6B%2BJbAuOHt%2F7SrXNR9aTzmlgAXkfdiQ6iIOwJ10Z36i3mWcTiedEsawOGn3XpOIoRUhDMOJGgUFsYbNMoyrUSdVtf2WkRMuXNXjTRirm%2B7ALPA3T05HX73timzkec%2BPQKNGmvthnzwATjnmKGMJ2fCv6LxUVPJw3UA3LqcjltCgIOE%2FdTyQ8nndsQPqiBUqXqMS2ByyPnhPu8dN8qT4o6c%2BLB43PMYleS0E%2FeU2FG0ecA0FUVu5z9EBt8SgsUxyhhRuMZyoAmwZv07FPynHZ%2BOOeGYdnW%2B1FQlRkcuQRgULwSJOiSJdGeumbkhuFLI9tn3iP4zXkQM%2BZz%2FJi28JyVxwp%2FEGLC1Y8FC5y8Mal2J1tZ4anbE1ota2udoiFbEU26Ft9p5ZjUp0%2F8J8S4pemOG0%2FEOXWZz9f1%2BB3rJ65xaxSQa2aO8WGxTDKsesGIsM%2Fx00ftn7915Py7nj1XBm41lQXV3Hl097kAqSxNyCq05vgo6ZdzyY%2B%2F7Ygxb7Kt78Zo2zCdoIvKBjqkAagP850VBloJjM1Tjo%2F6AS2HHk0Va0jAQD9nhwa4PFFI37Xxw%2Fk8R%2FXPJsgVIWouGg2nfKpgpQ4Mqp5iRMdybqa0gHn0DgzF1FkwjSnYxPmR6j5QMnNQy35or6dP4DpnqwBlR2q40N%2FSDP1dxtAZcuOb7hqjQrLkjHeLcdDRvZsDkBeiAz%2BDdpvYdK8lJIT5Ud6jNKOUiIerGx63udQgz6zihnII&X-Amz-Signature=b3e90ae97b967b4f6367c64afde0c5cd4d06a17aee1bfd3e9e842eca17dc3c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
