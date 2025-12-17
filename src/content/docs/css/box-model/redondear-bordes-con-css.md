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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FG2LO75%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHba9WpB%2F3ktAC1FFCkXrIYLveOioLsoB0Hvq3zOekS9AiA9x21k3uhP9EHGeF3uScNyPl%2F6cNqcf44W5yH41BjCwyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2mlPOvGhsG0rVTKeKtwDLOKVSrIeu0l33DSh0wBAkMGRu74KrBuz9n4fjG7kDpNFrZ58DUSOkAZyYv7ze2OFCuw7jHQY8jHblwwEYp1p32l%2Fe%2ButrEWdzIxPqWKf8cxVf0H8O4O%2BilJgDUC1R7w0fqLN5AHLeXFUr7jcnAp23vlHUU1qDGPh9ptioG0xk3FUwvmaHtevQj8s46HlqHb6kKRn0Q3eA0XoK%2B7TFMoc7kciMILJFMJzai%2BKBaPY%2F7OxPGIApGWjQGun7dMz2vxGo5VIqKI0GM1J9CHn9GmehDIEHl0i9VLKms2vBN1%2BYhPqDLELzyWlqjb%2BoSxAop3LBcrJQrANxIYUOIV8xvgNcR%2FZy6%2BBEn5xv0NNgq9AzxK0Fc0INVfoa%2Fu16hCswZ6mDPRM5mMwM1NsIU51%2Bk4pYxQBH9B1WcQ3GxYtc6BMqFQtNrGhSukF1S8zxNKq6cKHmcVhy2uy3XU3pRqCxFqsUlXi6mk0aPI7lzBpG%2FAIUTJs6VhsyDGyl%2F6C7Rt4SYsC9q6gJQPPiIC4KuQV1xwJR2mKdMRsD5LKp62p0hU3%2FQ8V1uDEZc15ky0FWLbwwAWava1lC5hpisIC85FJ5OxUN40D7wIk9xD0YAhNEABBbTJRqL45bNUe15uVK9AwwoqMygY6pgGuRJjU8AYytRkMiK5sL5Vdr%2FWJVllb1sQZOhK9Nl3AlymIUXIwD2llGEoT5rkgUmdabYegSqOT%2FE%2FybKglRWzS2pT%2BBrxLYswsenzkqTqL2N1M25FdjaXWmz%2FMEPDUp2dCoV0KJYOmILaPE5eft3p1Mn5IIgdg8UUrudM2cFO1KPwkK6qbUf1CHCYCClerZv%2F%2B%2BsHS9bNrIhq7kAODXKBCyj3fAUOe&X-Amz-Signature=e4c8c6ed549d845e0b5aaec20904cd2b15dae8939549976c7d8590db2df58539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FG2LO75%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHba9WpB%2F3ktAC1FFCkXrIYLveOioLsoB0Hvq3zOekS9AiA9x21k3uhP9EHGeF3uScNyPl%2F6cNqcf44W5yH41BjCwyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2mlPOvGhsG0rVTKeKtwDLOKVSrIeu0l33DSh0wBAkMGRu74KrBuz9n4fjG7kDpNFrZ58DUSOkAZyYv7ze2OFCuw7jHQY8jHblwwEYp1p32l%2Fe%2ButrEWdzIxPqWKf8cxVf0H8O4O%2BilJgDUC1R7w0fqLN5AHLeXFUr7jcnAp23vlHUU1qDGPh9ptioG0xk3FUwvmaHtevQj8s46HlqHb6kKRn0Q3eA0XoK%2B7TFMoc7kciMILJFMJzai%2BKBaPY%2F7OxPGIApGWjQGun7dMz2vxGo5VIqKI0GM1J9CHn9GmehDIEHl0i9VLKms2vBN1%2BYhPqDLELzyWlqjb%2BoSxAop3LBcrJQrANxIYUOIV8xvgNcR%2FZy6%2BBEn5xv0NNgq9AzxK0Fc0INVfoa%2Fu16hCswZ6mDPRM5mMwM1NsIU51%2Bk4pYxQBH9B1WcQ3GxYtc6BMqFQtNrGhSukF1S8zxNKq6cKHmcVhy2uy3XU3pRqCxFqsUlXi6mk0aPI7lzBpG%2FAIUTJs6VhsyDGyl%2F6C7Rt4SYsC9q6gJQPPiIC4KuQV1xwJR2mKdMRsD5LKp62p0hU3%2FQ8V1uDEZc15ky0FWLbwwAWava1lC5hpisIC85FJ5OxUN40D7wIk9xD0YAhNEABBbTJRqL45bNUe15uVK9AwwoqMygY6pgGuRJjU8AYytRkMiK5sL5Vdr%2FWJVllb1sQZOhK9Nl3AlymIUXIwD2llGEoT5rkgUmdabYegSqOT%2FE%2FybKglRWzS2pT%2BBrxLYswsenzkqTqL2N1M25FdjaXWmz%2FMEPDUp2dCoV0KJYOmILaPE5eft3p1Mn5IIgdg8UUrudM2cFO1KPwkK6qbUf1CHCYCClerZv%2F%2B%2BsHS9bNrIhq7kAODXKBCyj3fAUOe&X-Amz-Signature=40a142792a04d44b3447ac77a80853dfa55cdc97029c9bfdd005c3f7e690e675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
