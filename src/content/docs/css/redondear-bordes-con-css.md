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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSG4UXZG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQD1hh6MManVuDTqxmYYGP3Sw2LBnE%2Fi8fbwKKSfeDSY3gIhAJB%2BFnshteGR6IzD9cOVNwTbTPUvYeIvJa6D0ipmKabbKv8DCEAQABoMNjM3NDIzMTgzODA1IgzCXcqZ2Ke1IoEg2SEq3APCNCw3XYUYwFwUmnD9AdP1ERiD0RR7Q7xnNkRu9qQAirM0FXHbc6d6909dlVN2xUraQNsYOSMDAzDnacAc5f%2Bi4M3%2FzjYe8mWlRMOfofYFpRAa7TStpyZ9w9UpzPemzB27mzqaaTi06Yt%2BT8PVEscJco5FskCk5TJkIZzhbc88grEssmHDMtaVGFgZkGUlbe1oPqnm5SkN60HHLp8%2BStTuys22B4OZeqq%2FeKV7iinNuv9hV2tb0BLA5OQUh4hWKgI9ENzLLnyCTM4F7R4I0Hi4qPJZ2eX%2BKRuYZTZx4TRPfQuwCo%2Bx34a3kYeu18lA2ZgFxVlwFgTOzMezTT9QPBokQfv171a5PMQsFNfArZLSlznLa4vhDtf8fXOSZaeKkVySrYOYeWnEn%2BoIqDcjigCC5uJEUCFUpKw7ZfeDacNO7TxAf00A25l4%2FExNJLQiBw%2FYJPR18GPpanJqhAtRi4Id8sywDL0ifh3oRwXPxH0kj2%2Bel8uuTkNtCOomVNbaNqwd65gJ2oYA87sGpvRb4f9Q%2B8fxNHNwyraGFCGl722uSQBmx5gGOGaM%2BFojVS%2BaqtOVXKGZTNOIL9cQ83M1Rf0lYuOG1wrGKTpglEWSl3wDqKwC1cqWZnXRo0aEzjDB58TJBjqkATEWmQ4KhHp4Ht1aqXmV3asyjpnTqXTQzB17HEeGLbUYswyiwVmNL%2Fq6591VWc4KNiRIXkljCpy%2FuLsjZ%2FcAllD4io0U8N413BWf7ohStEOVLt1m6W%2Bp1%2BvzFfQmSThPf0tS4qde7vobSU5T57dnaYcQldEevo6yw5OPRNqfKBhaSeteAoj6FdMaEmgKfc%2Fovvvz%2Fo%2F7%2BBELBdcjqXMYE1lFl0Kn&X-Amz-Signature=eaf1f6b863e4ae419fad10b41b6a8013d6ecb3ebd7681360ed06a91d62638a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSG4UXZG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQD1hh6MManVuDTqxmYYGP3Sw2LBnE%2Fi8fbwKKSfeDSY3gIhAJB%2BFnshteGR6IzD9cOVNwTbTPUvYeIvJa6D0ipmKabbKv8DCEAQABoMNjM3NDIzMTgzODA1IgzCXcqZ2Ke1IoEg2SEq3APCNCw3XYUYwFwUmnD9AdP1ERiD0RR7Q7xnNkRu9qQAirM0FXHbc6d6909dlVN2xUraQNsYOSMDAzDnacAc5f%2Bi4M3%2FzjYe8mWlRMOfofYFpRAa7TStpyZ9w9UpzPemzB27mzqaaTi06Yt%2BT8PVEscJco5FskCk5TJkIZzhbc88grEssmHDMtaVGFgZkGUlbe1oPqnm5SkN60HHLp8%2BStTuys22B4OZeqq%2FeKV7iinNuv9hV2tb0BLA5OQUh4hWKgI9ENzLLnyCTM4F7R4I0Hi4qPJZ2eX%2BKRuYZTZx4TRPfQuwCo%2Bx34a3kYeu18lA2ZgFxVlwFgTOzMezTT9QPBokQfv171a5PMQsFNfArZLSlznLa4vhDtf8fXOSZaeKkVySrYOYeWnEn%2BoIqDcjigCC5uJEUCFUpKw7ZfeDacNO7TxAf00A25l4%2FExNJLQiBw%2FYJPR18GPpanJqhAtRi4Id8sywDL0ifh3oRwXPxH0kj2%2Bel8uuTkNtCOomVNbaNqwd65gJ2oYA87sGpvRb4f9Q%2B8fxNHNwyraGFCGl722uSQBmx5gGOGaM%2BFojVS%2BaqtOVXKGZTNOIL9cQ83M1Rf0lYuOG1wrGKTpglEWSl3wDqKwC1cqWZnXRo0aEzjDB58TJBjqkATEWmQ4KhHp4Ht1aqXmV3asyjpnTqXTQzB17HEeGLbUYswyiwVmNL%2Fq6591VWc4KNiRIXkljCpy%2FuLsjZ%2FcAllD4io0U8N413BWf7ohStEOVLt1m6W%2Bp1%2BvzFfQmSThPf0tS4qde7vobSU5T57dnaYcQldEevo6yw5OPRNqfKBhaSeteAoj6FdMaEmgKfc%2Fovvvz%2Fo%2F7%2BBELBdcjqXMYE1lFl0Kn&X-Amz-Signature=848e3165ef6f741cbe7009d167e0d869540b7fb016b1a912f8d4ee860fd0c34e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
