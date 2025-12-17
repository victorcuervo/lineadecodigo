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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE7VCPBP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE0EoI0673W9IN8I4HSWQaaWBPTyDDXKaOWLdttk4EMwIgLXDN3d97uAXmWNqzhMGxTvwv1oTb3nypqcRPqYFVWuAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKqgHN5oDIDVsKCSgyrcA3fWfB07vOoiZKS7oitP5GH%2BK2ET3zWMKgWaBVjkoCusa5jyI7SsQxYzpD15y9UfN%2BNETbkb33jwEl4QG4d5N9%2FnPmQ%2BnLwNTZcfAJnVJ85GKR3QJMiWL9ZBTf4dw7WW7OcbcmIQZn78GSTuW4h7k01oj5BC1tHMlZlFZEQhPfc1lymOQ3n4ibxGxMHxeEH16S3pUOhQqiW%2BxKffVZCgHM6pNew0P2kWFsd3MQc8B8A6mKt4NdgQMzA2g%2BYDXOB%2B5MvjuHoAfOjMkQ089ue54d0y1C7C07yKSdn4HEx8adOowiNGvrteFNX4OL991I6%2BsrCkLEtYQ3lKQ4UVNTt1oXby4x5b1sV%2BzgaquZWBEhX2pIgP8LBqrIR87c%2FSFJsiZI96T4dBQbuC9GyY4al9Vi0DG3BrD2tvp1D2n6qmJrvPwLFOIFxoQYNxt3Ux17lk6EHe4sVQqT4z8r4jaKhpzNaCUeBPntzwJJDdGIQvDDFC2alI3dItDH625SM8pK%2FK4cSBUf0kfqoqk46myocPPKUfsGyVZpgW0LZWmRJsZPG3luQawKswCuxBphyDqXXhgsuMjtg%2FE1zWnXczHVjIVEtBMwNt8IZedBz5Q15OAr651XVhRZmW8ArVK1cnMITfh8oGOqUBWYsIcySJjkbOGtpOItnB2Ik10%2FsL%2Fze8pP%2F2x57jK3%2F8jW18UcUE0ojX30tZsrP0unYj%2B%2F4tV%2FLaEVI4EED86D%2BmTWclxTIjB3OOVwMlAzxeOVNIhVrNFfcFV1tuJTFEfYGzOBJ9kXcvaNRkOMcvHYq8pdkMDYsWMi9BJ%2BW2%2B2QUaWvZRaMimzYT6c8N1Md2J18CUk%2FAmGAzHoohkHef9rmRSeqR&X-Amz-Signature=890ae75fcdccff065b1c3d5e0b1d3bce913960ae0e0797732dc3a9556e7ca5dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE7VCPBP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE0EoI0673W9IN8I4HSWQaaWBPTyDDXKaOWLdttk4EMwIgLXDN3d97uAXmWNqzhMGxTvwv1oTb3nypqcRPqYFVWuAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKqgHN5oDIDVsKCSgyrcA3fWfB07vOoiZKS7oitP5GH%2BK2ET3zWMKgWaBVjkoCusa5jyI7SsQxYzpD15y9UfN%2BNETbkb33jwEl4QG4d5N9%2FnPmQ%2BnLwNTZcfAJnVJ85GKR3QJMiWL9ZBTf4dw7WW7OcbcmIQZn78GSTuW4h7k01oj5BC1tHMlZlFZEQhPfc1lymOQ3n4ibxGxMHxeEH16S3pUOhQqiW%2BxKffVZCgHM6pNew0P2kWFsd3MQc8B8A6mKt4NdgQMzA2g%2BYDXOB%2B5MvjuHoAfOjMkQ089ue54d0y1C7C07yKSdn4HEx8adOowiNGvrteFNX4OL991I6%2BsrCkLEtYQ3lKQ4UVNTt1oXby4x5b1sV%2BzgaquZWBEhX2pIgP8LBqrIR87c%2FSFJsiZI96T4dBQbuC9GyY4al9Vi0DG3BrD2tvp1D2n6qmJrvPwLFOIFxoQYNxt3Ux17lk6EHe4sVQqT4z8r4jaKhpzNaCUeBPntzwJJDdGIQvDDFC2alI3dItDH625SM8pK%2FK4cSBUf0kfqoqk46myocPPKUfsGyVZpgW0LZWmRJsZPG3luQawKswCuxBphyDqXXhgsuMjtg%2FE1zWnXczHVjIVEtBMwNt8IZedBz5Q15OAr651XVhRZmW8ArVK1cnMITfh8oGOqUBWYsIcySJjkbOGtpOItnB2Ik10%2FsL%2Fze8pP%2F2x57jK3%2F8jW18UcUE0ojX30tZsrP0unYj%2B%2F4tV%2FLaEVI4EED86D%2BmTWclxTIjB3OOVwMlAzxeOVNIhVrNFfcFV1tuJTFEfYGzOBJ9kXcvaNRkOMcvHYq8pdkMDYsWMi9BJ%2BW2%2B2QUaWvZRaMimzYT6c8N1Md2J18CUk%2FAmGAzHoohkHef9rmRSeqR&X-Amz-Signature=93d16b84ca8292b8996b3fe2c4c93691f6ea621dce8b41200a30817b411dc323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
