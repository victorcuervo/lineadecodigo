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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCAVCZJV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFHmN%2BtqIXAyhNBzVrCuTI6GtXYEJCokFhS8OEb2MxuAiEAiysBoCOLzaM%2BErwuLUgRhRMa%2FBZT7JrKCJ81VX%2Fn8TgqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD8bASHWJAOWtP6YSrcAyERTVE7lrdxOrYcggGe1xTO%2Bis0ickOrtBTMDXjqMA17WX5WQO4KO4e%2BWjnit6xz%2BeEcAA5CG63OMFmbgo5K4Z4leoFrDPJ9DaSbxCrUz%2FPRs7%2F4l%2FLFq3rJiZpqe6LKE3AHJWoKLVQziLnzs%2FXE%2Ft3rp8kjoQ1h5LkvJJW7555fb42ueeurFcIUIDCCL%2FCvXFppEOubp5nML6bquyzD9bkweaCY%2BLwHf86aSpr9bu0GjQTR23JDJ1Gb9XmjATnUmL8kcYoxO72Ryz80PsG4XmJPXqFJfEp%2FxMXsMEKPIuvCdrGSHFOQ3%2Bni1lZZOGCWj%2FRSBT6oiAg19lWmvM8%2FGEs4Dsa8tWany77CDlu92pW1citPOCZI2pNzzOnzeKdnGi4xw8P48HqzIkMvv5zCGM50i97Nwx%2FZ3RB1%2FjLYCQp9FOHzHYJ%2F9d4DKYf0m6xHrrHIII7hG2VRUOQRyoL5YJT5pqy9tFFivvzrkDmsM1x8Uzyj%2FOQiPV6waEo3LZWi2AF67QqhkAcwdvsFy2YgwFNFjrhv02PqXz5R%2Fdf2IdRL%2F6jOJBfdnXExqtOEgt93JLdM8npGYsINJfq%2Bmw3e4YuKQhiVpsu8hhpP3AHqlT2h4%2BAwrPjVOLOL5e0MNmE2MkGOqUBvMNqxPwSRcJLeggv7tRc2dHS5ASUk6sufWafjROy6qAbTMgWryIFCffJM9B9sBvRZEbsdOmUuMZ6CX2JmQciMZ3P2EwbHTodnCdZ%2FYgAhz4suTkK7CEsZwIMcDJmvY4cwN%2BV4nU9nfYbyADuO4VUzJcuucRSiWiACFUiW9Y3MfSf9caG7njYt6e7nXQWucfQNugB0UxaXly8Txoc1r3n2MgQHLWa&X-Amz-Signature=c6ea5e0abe79b657ed2a26c1563bd3f444e658453820b5c7d22cbf1858300d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCAVCZJV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFHmN%2BtqIXAyhNBzVrCuTI6GtXYEJCokFhS8OEb2MxuAiEAiysBoCOLzaM%2BErwuLUgRhRMa%2FBZT7JrKCJ81VX%2Fn8TgqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD8bASHWJAOWtP6YSrcAyERTVE7lrdxOrYcggGe1xTO%2Bis0ickOrtBTMDXjqMA17WX5WQO4KO4e%2BWjnit6xz%2BeEcAA5CG63OMFmbgo5K4Z4leoFrDPJ9DaSbxCrUz%2FPRs7%2F4l%2FLFq3rJiZpqe6LKE3AHJWoKLVQziLnzs%2FXE%2Ft3rp8kjoQ1h5LkvJJW7555fb42ueeurFcIUIDCCL%2FCvXFppEOubp5nML6bquyzD9bkweaCY%2BLwHf86aSpr9bu0GjQTR23JDJ1Gb9XmjATnUmL8kcYoxO72Ryz80PsG4XmJPXqFJfEp%2FxMXsMEKPIuvCdrGSHFOQ3%2Bni1lZZOGCWj%2FRSBT6oiAg19lWmvM8%2FGEs4Dsa8tWany77CDlu92pW1citPOCZI2pNzzOnzeKdnGi4xw8P48HqzIkMvv5zCGM50i97Nwx%2FZ3RB1%2FjLYCQp9FOHzHYJ%2F9d4DKYf0m6xHrrHIII7hG2VRUOQRyoL5YJT5pqy9tFFivvzrkDmsM1x8Uzyj%2FOQiPV6waEo3LZWi2AF67QqhkAcwdvsFy2YgwFNFjrhv02PqXz5R%2Fdf2IdRL%2F6jOJBfdnXExqtOEgt93JLdM8npGYsINJfq%2Bmw3e4YuKQhiVpsu8hhpP3AHqlT2h4%2BAwrPjVOLOL5e0MNmE2MkGOqUBvMNqxPwSRcJLeggv7tRc2dHS5ASUk6sufWafjROy6qAbTMgWryIFCffJM9B9sBvRZEbsdOmUuMZ6CX2JmQciMZ3P2EwbHTodnCdZ%2FYgAhz4suTkK7CEsZwIMcDJmvY4cwN%2BV4nU9nfYbyADuO4VUzJcuucRSiWiACFUiW9Y3MfSf9caG7njYt6e7nXQWucfQNugB0UxaXly8Txoc1r3n2MgQHLWa&X-Amz-Signature=20af1ada67904defca8cdd3fe463f371c91e88c4334fda2f2421084064dcc174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
