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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGURVCV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMj6yHRHdsqVZ6kmL6yK3ctyDMWvvdyhOeZC4vpgotKAiEAtcVTDv7TVsgT8uQEcaRufbdblq0DV3xKqMExr8KHP0gqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2fmb5h3QqHWkcD%2FCrcA1%2BBGF5K4f9VW6lIxcbqZ1Ljq2RIT888vY19ZOBjr6gw0jv%2Feg4iQGLYgrDGW9i%2F%2Fhh1Kjf2yvV5Nxn3%2BSpjbFEQffessf0Pcbqyqg9p%2FOLYQqwfFPIO5A3DZ0piMCUgpDROpEx48MSg%2BErlt%2Fa0bT8OLM5cSspK%2Fn21xdBsX%2FLAJzeNyK441dvPTm%2BGp47ff%2Ffxx906mRuv2bZmIgPkf2p9Vqc5xxEP7lzT6vInwc3%2Fdo%2BD3f%2FSWnp%2FjxZv3npi9E7tM%2BuYSmawSr0%2BgyWNHzYwgCGZs4WXcAlqjr6uiw%2BuRe96S6wRwXUFeSGYeyc%2FbX1mKbLNhO%2FFyilkW92tzYkHhdCGz%2FBiZNgl2gbQWSEEt9njT85f%2Fdd4kSN0a2kLibjgZ2KLYFgpDtidDyf8qU0nudVxvH83%2BK4ppuMmao4Pf8QqMdOxZ3QOssXSDDcomw7rJYiv93RUUX4qlTfiUzrut8Hk%2FTJceEm0N3RcQaTqW2hqrov%2Fu6%2BoUnghjMt7UPScY2XCQ3TqdZsXx%2FYuR340fZN8dfP7wGnONr6rrta31Jx7bbdHLwV0r6ygRJlSSLnYx6qZrXFw%2FQhJPG6AEyYL3wJJrUEQUBaGJf5u2zxo5e8S%2BkC3dopCRnT1MLu21skGOqUBuXAbMw1wqQPhE%2FulKkHGMkXQJKCro5y1EsivnQIwIWivLubYjzCgFebKIlyvPZ1DaePotwa1aEPAh9xg4spG2Rkt%2BUEZ4axdFVtd8J%2FLUo71aafOMUBrnzjtp%2FTguVjFSNf5OF98XPFwBsOvgjAsvbK7Bxpjb%2F%2BCKW2pY8bQKS99IRTUhljL1HtJQgCjGdkqrBmDn7vvalji4r7KqvbhZrcylmHW&X-Amz-Signature=5befe5f93a76ce43a923d0da74dc4c9a2c6f22d67e9beffcd72b2bc99e9690b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGURVCV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMj6yHRHdsqVZ6kmL6yK3ctyDMWvvdyhOeZC4vpgotKAiEAtcVTDv7TVsgT8uQEcaRufbdblq0DV3xKqMExr8KHP0gqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2fmb5h3QqHWkcD%2FCrcA1%2BBGF5K4f9VW6lIxcbqZ1Ljq2RIT888vY19ZOBjr6gw0jv%2Feg4iQGLYgrDGW9i%2F%2Fhh1Kjf2yvV5Nxn3%2BSpjbFEQffessf0Pcbqyqg9p%2FOLYQqwfFPIO5A3DZ0piMCUgpDROpEx48MSg%2BErlt%2Fa0bT8OLM5cSspK%2Fn21xdBsX%2FLAJzeNyK441dvPTm%2BGp47ff%2Ffxx906mRuv2bZmIgPkf2p9Vqc5xxEP7lzT6vInwc3%2Fdo%2BD3f%2FSWnp%2FjxZv3npi9E7tM%2BuYSmawSr0%2BgyWNHzYwgCGZs4WXcAlqjr6uiw%2BuRe96S6wRwXUFeSGYeyc%2FbX1mKbLNhO%2FFyilkW92tzYkHhdCGz%2FBiZNgl2gbQWSEEt9njT85f%2Fdd4kSN0a2kLibjgZ2KLYFgpDtidDyf8qU0nudVxvH83%2BK4ppuMmao4Pf8QqMdOxZ3QOssXSDDcomw7rJYiv93RUUX4qlTfiUzrut8Hk%2FTJceEm0N3RcQaTqW2hqrov%2Fu6%2BoUnghjMt7UPScY2XCQ3TqdZsXx%2FYuR340fZN8dfP7wGnONr6rrta31Jx7bbdHLwV0r6ygRJlSSLnYx6qZrXFw%2FQhJPG6AEyYL3wJJrUEQUBaGJf5u2zxo5e8S%2BkC3dopCRnT1MLu21skGOqUBuXAbMw1wqQPhE%2FulKkHGMkXQJKCro5y1EsivnQIwIWivLubYjzCgFebKIlyvPZ1DaePotwa1aEPAh9xg4spG2Rkt%2BUEZ4axdFVtd8J%2FLUo71aafOMUBrnzjtp%2FTguVjFSNf5OF98XPFwBsOvgjAsvbK7Bxpjb%2F%2BCKW2pY8bQKS99IRTUhljL1HtJQgCjGdkqrBmDn7vvalji4r7KqvbhZrcylmHW&X-Amz-Signature=56a79127443b8e2f58f87ab5d08297603e31a9e69303c7eb7456e2cf02241f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
