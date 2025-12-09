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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAYKPPE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChL%2FktB2tc0EEajUGMsePZGlLJU3j6aPYl3vd8v0bgEAiEAqx%2B6HmNElIYXqakbXgSMZr86GH0UKpFKxPgZg24cYTMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6eEorFy%2FKMEyT6YCrcAwxCMVkYtgj%2FC0JLSviYGgYecFCYCqa0Ll0J1eI2KGn9xsy8F0fxCmkKOjxirtXalPzawQEickATGGSMjx7w0HJ3F7oU%2Frohvkb7dR5UlMDAv3TNO9D68iKPgDUAT%2FubDK0q69G9%2BGm48NyjSqt74pBVYAy4PlIHDHdNGyTy94LZK2Lj3KQ7o%2FnHRcvhnsQr1shv2X6ELnccFdad2Hy1PueZ%2FB80x2qqLRayiIoawvcGEcvRq0wTzB56YPxQzEJ6RMBsbwDytu13eEdA8xywLGNaW2Ie2dwxY%2FKa8b4QYDa00hwh7k0emD9o%2BogKwb%2B%2B7WM7S%2BK8tMueY16d0Ltbo3bp27Dcd8cAxRKnXgjRnPVwPOY4KaUiC1GaEs%2BEnF85%2BHh77vXQ9QZnntRVnzO%2BhITylXX%2BX916gasvqcy5N%2B7a2kxAbeLpH%2BL6TkaQb5araDF6PI%2FD8QhOafJV%2BEpyT6dmeP8II9GRNADgi%2FTRpynvMTKsqiAL8SLfEIlDOUdMWC8EYtAy44tl0tIvECt4qvq3A%2Br7U72Iaz1RxjARS9kBPfQlhP28bFld7vIBMePHk3d2CkB7ZgAv3UZCmARtijY%2BBJmnlRDSIi%2B9h974zCgx5P0vna6%2Bbojoi1lLMPjp3ckGOqUBQZcnJDE66TYN3Vdi4hq7zRcuYLKR%2FkCzUahnJJI5cJAbvY8g1H37lwoHyfDs6OTzBRss5WmvLHBjkguNUpPxnAtPhM3sTlDxls0wWIU2d57lvi8R4efSYbeJdJR3MBQPieyNtx4blZrwOEO%2FmxkZoqh8J3Zp%2BxEIC9ImvVuo%2BTamsJGQrD6a2%2BwWlDeGmzQAozYkiWL0DWIKMtD3Df04%2BbTVXlHg&X-Amz-Signature=3447dcb9984fa782b3ca304b038a78920e83d5db3086690fcaa4fc15b98ea57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAYKPPE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChL%2FktB2tc0EEajUGMsePZGlLJU3j6aPYl3vd8v0bgEAiEAqx%2B6HmNElIYXqakbXgSMZr86GH0UKpFKxPgZg24cYTMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6eEorFy%2FKMEyT6YCrcAwxCMVkYtgj%2FC0JLSviYGgYecFCYCqa0Ll0J1eI2KGn9xsy8F0fxCmkKOjxirtXalPzawQEickATGGSMjx7w0HJ3F7oU%2Frohvkb7dR5UlMDAv3TNO9D68iKPgDUAT%2FubDK0q69G9%2BGm48NyjSqt74pBVYAy4PlIHDHdNGyTy94LZK2Lj3KQ7o%2FnHRcvhnsQr1shv2X6ELnccFdad2Hy1PueZ%2FB80x2qqLRayiIoawvcGEcvRq0wTzB56YPxQzEJ6RMBsbwDytu13eEdA8xywLGNaW2Ie2dwxY%2FKa8b4QYDa00hwh7k0emD9o%2BogKwb%2B%2B7WM7S%2BK8tMueY16d0Ltbo3bp27Dcd8cAxRKnXgjRnPVwPOY4KaUiC1GaEs%2BEnF85%2BHh77vXQ9QZnntRVnzO%2BhITylXX%2BX916gasvqcy5N%2B7a2kxAbeLpH%2BL6TkaQb5araDF6PI%2FD8QhOafJV%2BEpyT6dmeP8II9GRNADgi%2FTRpynvMTKsqiAL8SLfEIlDOUdMWC8EYtAy44tl0tIvECt4qvq3A%2Br7U72Iaz1RxjARS9kBPfQlhP28bFld7vIBMePHk3d2CkB7ZgAv3UZCmARtijY%2BBJmnlRDSIi%2B9h974zCgx5P0vna6%2Bbojoi1lLMPjp3ckGOqUBQZcnJDE66TYN3Vdi4hq7zRcuYLKR%2FkCzUahnJJI5cJAbvY8g1H37lwoHyfDs6OTzBRss5WmvLHBjkguNUpPxnAtPhM3sTlDxls0wWIU2d57lvi8R4efSYbeJdJR3MBQPieyNtx4blZrwOEO%2FmxkZoqh8J3Zp%2BxEIC9ImvVuo%2BTamsJGQrD6a2%2BwWlDeGmzQAozYkiWL0DWIKMtD3Df04%2BbTVXlHg&X-Amz-Signature=c5c80cf056a04d7d2440a27f1075ffee55e2024e4934d3eca8b5be0400802836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
