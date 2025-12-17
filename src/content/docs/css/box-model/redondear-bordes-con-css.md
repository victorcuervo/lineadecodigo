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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RB3VWE7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPXx6B2n2lwPV1Z8%2FQwkDPwxg5tvjm2aGjZ7QdWNkXbAIhAKSE0ODQ%2Fc9xwJ4Y5xbTNGZlqIiQ1TcKOpx9rlJlG2VOKv8DCHIQABoMNjM3NDIzMTgzODA1Igzxx9IKxmeuYp7lnfEq3AN2oXZ7XR%2Fze4MpRwpH50iOZTn0IV1KJDelkbjS555Q2sNhiVTWNqoEtynpyS3VhDxs2jA2857VJSdurgG8kh0YGHFSpTWu%2FNVtrNnJ8LbFcOPNjn%2BbHeJp15JiARd675QOnAtFdf5YobrZL9kzVA8NHlzeKoLeFjghixKiHXZArLLCH22j6UDZLHuzH78g%2BDvt66hh6dnue5bc08w0x3AR0f31bsVPwxJECOhgJGGlfAv%2BiRGDHCXrOTnqqPWEWZgG3blwzESguaO6UbYPdfgmXiHZyxvADFZ%2FO1KoreRhRN9S5Yt9sB7hZVsTjSpfXTsewkktqd5kVkeBU6F5FRkzJVWPisdE0%2Bak2TRhO15YqgiPZ%2Fi3UBpKfccB9Isc7eY9iNOvfsJCH4zmGnjKHY%2ByQepeOcpWThh1e2IhgpLRkJ7pVIlBMQSdw93TU9QNJGo0zAd52QeSLB6JfJn31GYZ0ivXQOdk7RunjH9QeKI6Ifufhz2M%2BRmjz4Fky%2Fg9E%2Fl2lPvsqDnR8hogrCsBsmjvrmG9nXrz2sqaHU0L8azJxaS9023E5wUTjHD%2F4WN6Bo7uTzJ1BDYZZSgH4dB5qBcgutv389Bd6Enqaus3SMCxScE4zeT%2B4BSSU77uIjD8%2B4fKBjqkAUbAHMogp21A9Ie9Iqj5RvCsefCBSkyW950fHz2kwtTgy5u6cBw%2F1%2FLlg8%2B5KZLjPBQtKnWbo9JWQQW5zC5RCcoteErUxtCgy3g%2FaCBCOnNIKyAh7%2BvulZwNQoFkJNZSQHm5tfYYH3pRhVaQJHLpc%2BfvWt0xjbqOMLwiQXoE9%2FJiOdGXwtNfIXwVBGp3cZmgi%2BvMWGG4HkzGie9Whh4%2FskBEW2yB&X-Amz-Signature=a812a66b77207ee80444c247ad3b40ed10d24d2c75477432b8d62184ed23fb4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RB3VWE7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPXx6B2n2lwPV1Z8%2FQwkDPwxg5tvjm2aGjZ7QdWNkXbAIhAKSE0ODQ%2Fc9xwJ4Y5xbTNGZlqIiQ1TcKOpx9rlJlG2VOKv8DCHIQABoMNjM3NDIzMTgzODA1Igzxx9IKxmeuYp7lnfEq3AN2oXZ7XR%2Fze4MpRwpH50iOZTn0IV1KJDelkbjS555Q2sNhiVTWNqoEtynpyS3VhDxs2jA2857VJSdurgG8kh0YGHFSpTWu%2FNVtrNnJ8LbFcOPNjn%2BbHeJp15JiARd675QOnAtFdf5YobrZL9kzVA8NHlzeKoLeFjghixKiHXZArLLCH22j6UDZLHuzH78g%2BDvt66hh6dnue5bc08w0x3AR0f31bsVPwxJECOhgJGGlfAv%2BiRGDHCXrOTnqqPWEWZgG3blwzESguaO6UbYPdfgmXiHZyxvADFZ%2FO1KoreRhRN9S5Yt9sB7hZVsTjSpfXTsewkktqd5kVkeBU6F5FRkzJVWPisdE0%2Bak2TRhO15YqgiPZ%2Fi3UBpKfccB9Isc7eY9iNOvfsJCH4zmGnjKHY%2ByQepeOcpWThh1e2IhgpLRkJ7pVIlBMQSdw93TU9QNJGo0zAd52QeSLB6JfJn31GYZ0ivXQOdk7RunjH9QeKI6Ifufhz2M%2BRmjz4Fky%2Fg9E%2Fl2lPvsqDnR8hogrCsBsmjvrmG9nXrz2sqaHU0L8azJxaS9023E5wUTjHD%2F4WN6Bo7uTzJ1BDYZZSgH4dB5qBcgutv389Bd6Enqaus3SMCxScE4zeT%2B4BSSU77uIjD8%2B4fKBjqkAUbAHMogp21A9Ie9Iqj5RvCsefCBSkyW950fHz2kwtTgy5u6cBw%2F1%2FLlg8%2B5KZLjPBQtKnWbo9JWQQW5zC5RCcoteErUxtCgy3g%2FaCBCOnNIKyAh7%2BvulZwNQoFkJNZSQHm5tfYYH3pRhVaQJHLpc%2BfvWt0xjbqOMLwiQXoE9%2FJiOdGXwtNfIXwVBGp3cZmgi%2BvMWGG4HkzGie9Whh4%2FskBEW2yB&X-Amz-Signature=3d74c0df60e29f2570cfb6de5192e9cc01f27e6690e9a37592a9f2f41afa8125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
