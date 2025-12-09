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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJO5EGV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb4cvaxCg97yCxHQFa7YrJ9hggovXBDCZMMGUy9m44SQIhAJ4oeMWnWiHJrssV35Gd8tFhwcOWKSCdv2FpboughJyOKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnAxPS9TxbazIe6OMq3AMx2JS9ui6O26m0BvKUfUCddf8cR9OQCJn69xBSnR6hxebQWPvoE2nvph4mk7XDPo5w%2FVDB%2BwfBgwfV%2BSme%2BRGtzB2Cul6vrWZl7%2FAQ9TzWLBfTa6f5YH2Lob9DOI2iZ6mziY8umCA9IB8WlSJSYn9Qmn4TcB047BMQNCq4d0rAh1hXI5XrG7rGHID5Y056FAJRArSeXptyUPNdLUaPRJENyeRL5k8cD84XNwx55AVU%2FIPQ4LSYkQDwgHV3Qv2QOM%2FXZmTf%2FcIHNioE2aKTW1sroVOA4a0Mb2mEIfPZDvIgBJo7MVucE5SbUZioTOFfqWUt%2FW47tc0BWj%2FurdQyPGSd41rj1K6dxT%2FWMONJiG9Y9aq2bcaD4eaQBqXDXjzn39vOlUHC%2BZfetA6eiMPrlOp%2BZWaL8q6Epy%2BtwVW9WrvfZwoLWOmeH%2FLT23y6Ie0CRZoZL8Rc6zWWixhMaRetVozw4GYX9yvAhX4QLZO%2F6TLbo38vEZBVtiFxnJF1uy0FIRU5ovZQzuzX4XXezEu5p7iQDGGhSwgikhrZwsTXSrxJrFkKHz3ygBNkfcIAZzYBvHhyxc4F%2FPpG1zabP%2FAlrXLTyH7k7nxTLhTNHA6HNIZXJN0Ir0fvhz%2Bh65obODCN5d7JBjqkAW44oma1GsyMSDARjeTr%2BB%2BEru6zkg2NKzDqu%2Fjw4TlgsGPFKP%2FXzirQ29Km%2FwhR78FGhEZIoy%2Bc5MzY2lbk3nFDodzMVdgX13Ob8NG5Jn2sm4kWQu1HKGZ6njaEU1yhKWVUAex2%2FyPKl4Qg2XY39XzrWCL0Hve3oN%2FKdZ2A80DJN4zilV3kROvnLo31Fw4wsppnFhvSkyr5aZk1tAOJTZ9dmRhR&X-Amz-Signature=3c9f2f56054fdacda74ad33a8a2c674049e4ed3728f04f3d4cc77016667e030e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJO5EGV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb4cvaxCg97yCxHQFa7YrJ9hggovXBDCZMMGUy9m44SQIhAJ4oeMWnWiHJrssV35Gd8tFhwcOWKSCdv2FpboughJyOKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnAxPS9TxbazIe6OMq3AMx2JS9ui6O26m0BvKUfUCddf8cR9OQCJn69xBSnR6hxebQWPvoE2nvph4mk7XDPo5w%2FVDB%2BwfBgwfV%2BSme%2BRGtzB2Cul6vrWZl7%2FAQ9TzWLBfTa6f5YH2Lob9DOI2iZ6mziY8umCA9IB8WlSJSYn9Qmn4TcB047BMQNCq4d0rAh1hXI5XrG7rGHID5Y056FAJRArSeXptyUPNdLUaPRJENyeRL5k8cD84XNwx55AVU%2FIPQ4LSYkQDwgHV3Qv2QOM%2FXZmTf%2FcIHNioE2aKTW1sroVOA4a0Mb2mEIfPZDvIgBJo7MVucE5SbUZioTOFfqWUt%2FW47tc0BWj%2FurdQyPGSd41rj1K6dxT%2FWMONJiG9Y9aq2bcaD4eaQBqXDXjzn39vOlUHC%2BZfetA6eiMPrlOp%2BZWaL8q6Epy%2BtwVW9WrvfZwoLWOmeH%2FLT23y6Ie0CRZoZL8Rc6zWWixhMaRetVozw4GYX9yvAhX4QLZO%2F6TLbo38vEZBVtiFxnJF1uy0FIRU5ovZQzuzX4XXezEu5p7iQDGGhSwgikhrZwsTXSrxJrFkKHz3ygBNkfcIAZzYBvHhyxc4F%2FPpG1zabP%2FAlrXLTyH7k7nxTLhTNHA6HNIZXJN0Ir0fvhz%2Bh65obODCN5d7JBjqkAW44oma1GsyMSDARjeTr%2BB%2BEru6zkg2NKzDqu%2Fjw4TlgsGPFKP%2FXzirQ29Km%2FwhR78FGhEZIoy%2Bc5MzY2lbk3nFDodzMVdgX13Ob8NG5Jn2sm4kWQu1HKGZ6njaEU1yhKWVUAex2%2FyPKl4Qg2XY39XzrWCL0Hve3oN%2FKdZ2A80DJN4zilV3kROvnLo31Fw4wsppnFhvSkyr5aZk1tAOJTZ9dmRhR&X-Amz-Signature=98285b4d859983a62653ee56010229c80eeaaf2e055fecaa726f64c2dc906300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
