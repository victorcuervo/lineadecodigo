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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNH5VWKC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGxcwbYpNHrBbN87JG%2BuCqiMjRtMaN3Ia3Bfrx%2FThPB6AiEAt5clUCjA%2FI0PUPSNyptPG%2FQwoEDjGOoTelbg8LnJZ2cq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDFdVAYM3x6ikGSWHTyrcA3xZMBdq5A4Bhkde8FGCgPXsMwEpQkmddt4a0bCL6MlyZ%2Fvsv9Hm8cm1oeDprpasygGI1f3fq%2B72qRJ4f2zlPYxuMmv94ukS2gB6EVLKEJo6lRK6ITyZ8kIGjoi6uP4CcjLTf%2F%2BjDe8EZmVvhHu61Az9ydCXI7Xcx7JdMQWMwEpGOMzwjFJut3MgTmeb24Hqf4PngPvminE%2FQhSmy1RGbqbljLJRyFc%2FciBpV8pld7R6Xr9idlKDcNg7lFPmYS4tFeWBIJSa5UggvNo8nHuCassdK7nG4TNZNy8V4EbtUqLVL75K4LrexulkODd0cr75RQARMs%2FckIF39m%2FJQ2oHAyJAe3ccfJqmINbTn3LFETGXT1A9exNWqk0MYlf6E0Kj7eMvxkeyAdWhMu%2BcbgkO2N%2Fbx1h%2FDmFYEYpO0h%2BukvKMVaD3xBtfop%2FcegSXwFeEFs%2FU9XXLVxwG1%2BbFX%2B8zownO2rNuOYytwc1gPGmLfHARsPuNbaYOorQ0WKDmUFjdo8sIJ9CigEKvr%2BprE1%2FeQ46L4PQfQfFFZHse0rG5qrrtk2hB9Cxv2Ngza214L1ixJ%2BtphkW0wPyEQ8mLP1mTH0KivoJBsG2srR%2B6pbRwbV2UqAg5iJfw3BAJpGDgMMf3wskGOqUBVo0BqAnyXzUZq3jsIC3IPw6PqrhslKbmRUKsFh1RRJgK8Pa%2FXsR9C8aWto9d%2FFFKHhgmzW0d6%2F4HwK5oJqdZOIUCn1mpS4nvU3%2BqRFCgclA5q2awDnV1ASiAwcwKbz5U4t7xfdXzKh30iEYvrtsdaoHhAyp2opSS3oq9%2Fn6n9CT0RCsp4lBSDP%2F6i4zakp6lnKeifPBqeic3%2FU%2FoJQ3w5lTn1dJ5&X-Amz-Signature=d66a6699245841fe57b43bc1bf3b5a50eb3d938ffd43fe49810b09e2b99d02c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNH5VWKC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGxcwbYpNHrBbN87JG%2BuCqiMjRtMaN3Ia3Bfrx%2FThPB6AiEAt5clUCjA%2FI0PUPSNyptPG%2FQwoEDjGOoTelbg8LnJZ2cq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDFdVAYM3x6ikGSWHTyrcA3xZMBdq5A4Bhkde8FGCgPXsMwEpQkmddt4a0bCL6MlyZ%2Fvsv9Hm8cm1oeDprpasygGI1f3fq%2B72qRJ4f2zlPYxuMmv94ukS2gB6EVLKEJo6lRK6ITyZ8kIGjoi6uP4CcjLTf%2F%2BjDe8EZmVvhHu61Az9ydCXI7Xcx7JdMQWMwEpGOMzwjFJut3MgTmeb24Hqf4PngPvminE%2FQhSmy1RGbqbljLJRyFc%2FciBpV8pld7R6Xr9idlKDcNg7lFPmYS4tFeWBIJSa5UggvNo8nHuCassdK7nG4TNZNy8V4EbtUqLVL75K4LrexulkODd0cr75RQARMs%2FckIF39m%2FJQ2oHAyJAe3ccfJqmINbTn3LFETGXT1A9exNWqk0MYlf6E0Kj7eMvxkeyAdWhMu%2BcbgkO2N%2Fbx1h%2FDmFYEYpO0h%2BukvKMVaD3xBtfop%2FcegSXwFeEFs%2FU9XXLVxwG1%2BbFX%2B8zownO2rNuOYytwc1gPGmLfHARsPuNbaYOorQ0WKDmUFjdo8sIJ9CigEKvr%2BprE1%2FeQ46L4PQfQfFFZHse0rG5qrrtk2hB9Cxv2Ngza214L1ixJ%2BtphkW0wPyEQ8mLP1mTH0KivoJBsG2srR%2B6pbRwbV2UqAg5iJfw3BAJpGDgMMf3wskGOqUBVo0BqAnyXzUZq3jsIC3IPw6PqrhslKbmRUKsFh1RRJgK8Pa%2FXsR9C8aWto9d%2FFFKHhgmzW0d6%2F4HwK5oJqdZOIUCn1mpS4nvU3%2BqRFCgclA5q2awDnV1ASiAwcwKbz5U4t7xfdXzKh30iEYvrtsdaoHhAyp2opSS3oq9%2Fn6n9CT0RCsp4lBSDP%2F6i4zakp6lnKeifPBqeic3%2FU%2FoJQ3w5lTn1dJ5&X-Amz-Signature=2a1abef0a9c7db648cd53a8c552397170d64f009e05da508eaa93c7eb0165e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
