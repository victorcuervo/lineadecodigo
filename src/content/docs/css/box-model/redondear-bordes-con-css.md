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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIK3ZER7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzM0aSJ5NJWyYqhGM%2FIwoimoMduHZyjG5wEMKIyZmVZgIhANbPoAV%2FoKRFcne50jdSGBDQiV6Lq5aP6mPyGVIFtMI0Kv8DCHYQABoMNjM3NDIzMTgzODA1IgyrcyqaKQxKbBxcTl4q3ANqGehR7C2VDf7RH4roQ%2Be%2F9mYxyBmm5Bxx6sohzGJZI1%2BG7a2bbGA6tiuJD4MjmpCJ6USHsBmCYD%2F%2FjVUWQhF3M0oZWGy6OyJOwhb7oGW6VxYfshAVdKefbcPsJ8KEIKzIfE%2FRpodkxBkgBX48XCdsNId87eiFrBiyIE7BynKYv9k0QczsWVfTeXmIDWjVnmVp5jkovXTP9BPy2gVfVz4mDXae7lU8hk40%2FzeMOOrVmdl1O%2FNU%2BPNrbK5NT3Qxt4ERWe3AfSEsA2ESeFi%2FcsIGJ%2FnQIVqgkvs6vb5JvzG623ZBbE%2F7eRhqLKVG5r4NIw61lLznybeaPLncdwAwADbBcZ%2F65f1wxDWTxazGr4esUo6OGJALTdIVngOms%2FSaGwzvGuc4H8FfiU5dycNP8fc0DdZAIsZbqZBXoRitUf5EkE9OkgWSn9SP2BOETEfGFwKyCJDXi4V9T1d9jiP4P6NIJdK4ExstXqqZhnz1KZZgI%2BsUhxCbeB2lvTwvHIJoOqCsqCo7OihPAyNUMgADoKov5%2BT9yf5nZZXvooIGRnTRnT7TUY30bB4%2Bb%2B4mMaEIbQtACYFRxp7IYiBTUKTugt%2B5OTO0B1G7MY9P9HgX8auqJWyII3zmbt6xogVwGDCQ6YjKBjqkAcE8CICM37Vkr45W57CmE3ymMX3yeRf5RKNIlYiryFfY%2BCrQnyiIk8iBgaWPscvkQavSOCMuVPKQr0ljuhhcf%2FHV1XHG0DPxw%2FTviLqdQ53MHs2p1vsAn35Vj%2BTubGFBF%2BYxgFYpq7EAE2Jz4MArGX3CG%2BcKq%2Ba1WJxZhfwGIQosfEJ3yH1yxbIWGpkafbvQUSb67XFtcsrw%2FGJ8s9oKOkpMRSsj&X-Amz-Signature=c6c38815875dab5b4dea41ae8dca9909760948b11dd8eb406183acbdf0135f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIK3ZER7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzM0aSJ5NJWyYqhGM%2FIwoimoMduHZyjG5wEMKIyZmVZgIhANbPoAV%2FoKRFcne50jdSGBDQiV6Lq5aP6mPyGVIFtMI0Kv8DCHYQABoMNjM3NDIzMTgzODA1IgyrcyqaKQxKbBxcTl4q3ANqGehR7C2VDf7RH4roQ%2Be%2F9mYxyBmm5Bxx6sohzGJZI1%2BG7a2bbGA6tiuJD4MjmpCJ6USHsBmCYD%2F%2FjVUWQhF3M0oZWGy6OyJOwhb7oGW6VxYfshAVdKefbcPsJ8KEIKzIfE%2FRpodkxBkgBX48XCdsNId87eiFrBiyIE7BynKYv9k0QczsWVfTeXmIDWjVnmVp5jkovXTP9BPy2gVfVz4mDXae7lU8hk40%2FzeMOOrVmdl1O%2FNU%2BPNrbK5NT3Qxt4ERWe3AfSEsA2ESeFi%2FcsIGJ%2FnQIVqgkvs6vb5JvzG623ZBbE%2F7eRhqLKVG5r4NIw61lLznybeaPLncdwAwADbBcZ%2F65f1wxDWTxazGr4esUo6OGJALTdIVngOms%2FSaGwzvGuc4H8FfiU5dycNP8fc0DdZAIsZbqZBXoRitUf5EkE9OkgWSn9SP2BOETEfGFwKyCJDXi4V9T1d9jiP4P6NIJdK4ExstXqqZhnz1KZZgI%2BsUhxCbeB2lvTwvHIJoOqCsqCo7OihPAyNUMgADoKov5%2BT9yf5nZZXvooIGRnTRnT7TUY30bB4%2Bb%2B4mMaEIbQtACYFRxp7IYiBTUKTugt%2B5OTO0B1G7MY9P9HgX8auqJWyII3zmbt6xogVwGDCQ6YjKBjqkAcE8CICM37Vkr45W57CmE3ymMX3yeRf5RKNIlYiryFfY%2BCrQnyiIk8iBgaWPscvkQavSOCMuVPKQr0ljuhhcf%2FHV1XHG0DPxw%2FTviLqdQ53MHs2p1vsAn35Vj%2BTubGFBF%2BYxgFYpq7EAE2Jz4MArGX3CG%2BcKq%2Ba1WJxZhfwGIQosfEJ3yH1yxbIWGpkafbvQUSb67XFtcsrw%2FGJ8s9oKOkpMRSsj&X-Amz-Signature=80b932ffebbbfa0655b119dfa509441ab9c01f144ec06f79d4b0da21679e4425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
