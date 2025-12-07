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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTODYJY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9AAfnYZBpuhZP%2FVpcEWbg2cgAGyTdAdyoZfJNDLGCkAiEAiSO4zTINGo3u5%2F3x8uOj%2FpaqH9AaHkn%2FHxo6XJhfvTUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNK0dCbER2mwmErCCSrcA%2Fd8JtY04C0EBuNp3a4EKznJ9LSi2yEzOUNAS8u6%2BOZoiGp4ft5gOzn1QvYm7UvsE2PvluFgAiGIX%2B4D7DS%2BrDrLeUWWINUgy%2Bo3f4zrP%2FM%2BR%2F%2BibBgyyBsM%2FJ%2B6BsHgZSMydsDDSf2NjzCm%2FdlL1FlvhrbR7g644ZKhM1jBsKpFpSZh%2FpxpN%2BtrpBAFm1AAWgKNJqrrVCNjQphpmM%2BL6X%2BzVgxMnVqRMCXvIMO2PDquYqv%2FWHR4a2KBXPJG4GB3xhrSRiBNYCP2rLoEjI5KG3EQhwNUfkY9RWb3kIV%2F12devvF6NSdaXHGt7wfB2EVEF8A1TEjlAaA39BajsxHH2Ad2uBqfXEBT99wb7i8vRH92PLyDMYkAHH7gM3kjGF89oo4TuHjpjFmtdhZZriMAe0jPuBEJDHomCqc%2BG8LId9Fv9w9HN2KuZcp31K493NNLvD0k78o%2BsKU1CsCUCM5hk52WaPXcaQz9gu7h04XxLaP0z%2Bl1uyVtIcC86SljcDvWyRMZ3gwc%2FnufL2pjAqBH1MkZkJy2ejtFkNkpaX87KBQ80%2Fl%2F8Rq%2FCcvHEvh8hTgypX4O95vEL%2B3qKwMfumi0qDH4PZrYmWp03txFbaPCQUo%2FRtvXt%2FkNkCCCdZmjMKmZ1MkGOqUBc55vGtDIUm4i6FvxxV6voWYVWesbSupsfjkxkwRjW73ER09aO4OnA57S1mg7T1K5lEC%2BOQyTCDzVDJkObwixZeuGxqGtfc2o1vuqL3Twwr4uEnuOKBB0kyDaYx6mu2FEFj2JVvTsskPdAGScQwkMkGB2WgBy2Gc4AbCmt%2F02FWnByZGa6ji6iuJ08bS0C8j%2Bo240Vh5jTvZWE1EzRF0o3oCyDYvl&X-Amz-Signature=52b2dcbd07beb9752aba7cb9037d29cd2ad0ec7cbe7e2d0dab1f38f029a22986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTODYJY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9AAfnYZBpuhZP%2FVpcEWbg2cgAGyTdAdyoZfJNDLGCkAiEAiSO4zTINGo3u5%2F3x8uOj%2FpaqH9AaHkn%2FHxo6XJhfvTUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNK0dCbER2mwmErCCSrcA%2Fd8JtY04C0EBuNp3a4EKznJ9LSi2yEzOUNAS8u6%2BOZoiGp4ft5gOzn1QvYm7UvsE2PvluFgAiGIX%2B4D7DS%2BrDrLeUWWINUgy%2Bo3f4zrP%2FM%2BR%2F%2BibBgyyBsM%2FJ%2B6BsHgZSMydsDDSf2NjzCm%2FdlL1FlvhrbR7g644ZKhM1jBsKpFpSZh%2FpxpN%2BtrpBAFm1AAWgKNJqrrVCNjQphpmM%2BL6X%2BzVgxMnVqRMCXvIMO2PDquYqv%2FWHR4a2KBXPJG4GB3xhrSRiBNYCP2rLoEjI5KG3EQhwNUfkY9RWb3kIV%2F12devvF6NSdaXHGt7wfB2EVEF8A1TEjlAaA39BajsxHH2Ad2uBqfXEBT99wb7i8vRH92PLyDMYkAHH7gM3kjGF89oo4TuHjpjFmtdhZZriMAe0jPuBEJDHomCqc%2BG8LId9Fv9w9HN2KuZcp31K493NNLvD0k78o%2BsKU1CsCUCM5hk52WaPXcaQz9gu7h04XxLaP0z%2Bl1uyVtIcC86SljcDvWyRMZ3gwc%2FnufL2pjAqBH1MkZkJy2ejtFkNkpaX87KBQ80%2Fl%2F8Rq%2FCcvHEvh8hTgypX4O95vEL%2B3qKwMfumi0qDH4PZrYmWp03txFbaPCQUo%2FRtvXt%2FkNkCCCdZmjMKmZ1MkGOqUBc55vGtDIUm4i6FvxxV6voWYVWesbSupsfjkxkwRjW73ER09aO4OnA57S1mg7T1K5lEC%2BOQyTCDzVDJkObwixZeuGxqGtfc2o1vuqL3Twwr4uEnuOKBB0kyDaYx6mu2FEFj2JVvTsskPdAGScQwkMkGB2WgBy2Gc4AbCmt%2F02FWnByZGa6ji6iuJ08bS0C8j%2Bo240Vh5jTvZWE1EzRF0o3oCyDYvl&X-Amz-Signature=fc7fd4938213a4298f376f7140a24bc17f9513cf783c259e4fa1c910c5e34d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
