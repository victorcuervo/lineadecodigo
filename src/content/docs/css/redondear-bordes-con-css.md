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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BOUFX6B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD23%2F1RvpQKLt%2BYbdEts7U6nGKNQSIzlHfCZrYjcbRIgAIhANBdAIC8pGqMK3cmCPzk0v00lsFV13dMGjmrW0iOCEjYKv8DCHUQABoMNjM3NDIzMTgzODA1Igz5MRA2BD0kyEUTEIcq3APMr84tkvKvEX4cCKkQWExd6vkyZpm1ICuHeYPb%2FYoLmkR%2BvJtSJhSfKK21Vo0nOhTKmdRIjk3mmFXD3TeEDuKOEtsgHC614hPp2Gj0Wuwl2twtpihLOxRWBgBjvah4rGkZzx6xdYjVQHjoghADQGiFcsYIHVH3IHnDv5YGV%2B91SOJR9XEDYXiSBV5d%2BP37u8y6eXuXbfEW6MNrG0Aw636Z1O%2FzRBgxy1lPkh1xmhgDd4HH3TWiAqQAWcvYTbmWvg4QBqqYAkuV7mYMdwJj%2FVpTwOx6TafUBXcdYrPkX%2BUtjcL1n7%2FNvLwcJ9oB9cEwvuE01U1UHRWbT43p9ZO2UPIjzCSZwhb4FDqBq5ycfsCCn4rnZFJ3%2BnCiUK9S18Lmqw1rcFAg2j4B%2B6q9LThiqyfMmpWuqvrlqTI6NfSPvvQk%2BhxLyBmVnNM9InoJWUoW5XDXxXEIWPg93A9df6oPhAgIQaEJCaEEPa1drLPoEO%2FA9im25CAJ7TJo2Rg1hLWwdZv8gWdYK6tROFZRFVvYHuSgUwRxbEUS7wWdbxKAj47%2FsbOkheAagYXcK%2BB8nIMVdMYwtAtj5nvnBBunaOkts15Fc8ANrwedIz0QsAt8OSLZTJvO9rugEFOXcbvjBTCBp9DJBjqkAZfBoGV7jg%2BrN8gg4tQw1t1LLXChk7xiMs%2FojM2FphuvHhbA9Knf6IAq8jkAMtalrTrmjS18i%2FhA6IpYxImpJj4wzEmXaTBUPHRojqLvhbMu5O5d0K5dE0fMQjuXljOZk%2Fe4W47tcW%2F4HkDcSMIaxPkWCZdIv%2F4Q1AmNpwgMLa10BT6M7oTtjEYysVHo3Ma%2F1vxN%2BEYU97JmZcP5VTvOxHsE08vb&X-Amz-Signature=30f9ce7f3c3a557b7c8ca920e4490ecc260915844638a4fd19b5c95abaf1cf4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BOUFX6B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD23%2F1RvpQKLt%2BYbdEts7U6nGKNQSIzlHfCZrYjcbRIgAIhANBdAIC8pGqMK3cmCPzk0v00lsFV13dMGjmrW0iOCEjYKv8DCHUQABoMNjM3NDIzMTgzODA1Igz5MRA2BD0kyEUTEIcq3APMr84tkvKvEX4cCKkQWExd6vkyZpm1ICuHeYPb%2FYoLmkR%2BvJtSJhSfKK21Vo0nOhTKmdRIjk3mmFXD3TeEDuKOEtsgHC614hPp2Gj0Wuwl2twtpihLOxRWBgBjvah4rGkZzx6xdYjVQHjoghADQGiFcsYIHVH3IHnDv5YGV%2B91SOJR9XEDYXiSBV5d%2BP37u8y6eXuXbfEW6MNrG0Aw636Z1O%2FzRBgxy1lPkh1xmhgDd4HH3TWiAqQAWcvYTbmWvg4QBqqYAkuV7mYMdwJj%2FVpTwOx6TafUBXcdYrPkX%2BUtjcL1n7%2FNvLwcJ9oB9cEwvuE01U1UHRWbT43p9ZO2UPIjzCSZwhb4FDqBq5ycfsCCn4rnZFJ3%2BnCiUK9S18Lmqw1rcFAg2j4B%2B6q9LThiqyfMmpWuqvrlqTI6NfSPvvQk%2BhxLyBmVnNM9InoJWUoW5XDXxXEIWPg93A9df6oPhAgIQaEJCaEEPa1drLPoEO%2FA9im25CAJ7TJo2Rg1hLWwdZv8gWdYK6tROFZRFVvYHuSgUwRxbEUS7wWdbxKAj47%2FsbOkheAagYXcK%2BB8nIMVdMYwtAtj5nvnBBunaOkts15Fc8ANrwedIz0QsAt8OSLZTJvO9rugEFOXcbvjBTCBp9DJBjqkAZfBoGV7jg%2BrN8gg4tQw1t1LLXChk7xiMs%2FojM2FphuvHhbA9Knf6IAq8jkAMtalrTrmjS18i%2FhA6IpYxImpJj4wzEmXaTBUPHRojqLvhbMu5O5d0K5dE0fMQjuXljOZk%2Fe4W47tcW%2F4HkDcSMIaxPkWCZdIv%2F4Q1AmNpwgMLa10BT6M7oTtjEYysVHo3Ma%2F1vxN%2BEYU97JmZcP5VTvOxHsE08vb&X-Amz-Signature=d13f9faeb63cd350ae108f855ba817bfdd0ae6c56d4636f8a491fee3ef90290b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
