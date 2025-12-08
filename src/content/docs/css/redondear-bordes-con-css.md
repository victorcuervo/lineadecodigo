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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DC4GI7T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeSw2mqC2cfzwE%2F0pXtIzTpoovhbhLgo2ESvzxbmYO4wIhAK5lnlQHfa9QKEqut%2BVK8IF6pC5BZneyvMqea0SBapEZKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOeU8RkIwEm5uvkVEq3APUOzWyWQwq%2BnSM6uHzNy7Egw%2FTj%2F5JUl7PuHrkiFMWqta%2BB1U8%2FnYcx5hIGAWvUAelT7jeahBg39SUTa7OFRkNUCaKpXOH131oTf7EHtnt1Kafmv8bBxcLk9JyXkAM3u26vydJK4L61iMJsCkgE3liY6m7oAWzMmwsrgoIT5vKgH%2F9aa2CBmaJACeHisVAXNYbhOAXbm%2BR3H3Hx5qV6MKQ5kRoeGSr9U%2B7496TCERdGUzN%2Brjzu9lbKduUOLiPSKdwqWO5bXPB7oQDAy86fYmkwB9Yl0Qo1RmLceQNPNDkErZbjBt3bX%2FRARx85omwb3ZvVuEkthMa%2FERLfcYs7VrnuWBFbugcy7lYqoEf0TntiJt0KUnbcHKpo5QR4aljRVKQhK6qDVmq%2FELVTRX%2Bg1%2FOceeTh%2FFyDQSV6D2b64QNnwR9DcBEMkN96VAvsNA60YwEqJByA4LZwuLuxqMnFpGZEMKhlm9kLeG7fI8fdKB7nPE7YxuASa3%2BtH4fkN2NM1xmCO8Idr%2FQERy9U%2FvESEwkajo5ORXW2iWsMl8DTM0QReH5vaN69MO0y0qB2CGO4PDROyBST%2B6hjh9oo8Y52XXnZsV4Zp%2FtgO92Y7iUBj0SGQvd2qS63VXj8ccdyDDI5NvJBjqkAdrBNEDr0foSJp9uv4JyM9JTRJXLkdfKnxu5LdeUwn1aLtH8zK7voyGcLpd4epcLIsAn52%2BBK8L1sIyhidKNCAx0zT%2BA3WAmKGckTfj2u58zDdf%2F2NPEIplVDpo16ZRsap6gst1gdIHi9yFzt0ag3ih%2FENAJvjddsrcZExidyKq2pIzbFvJp%2FLn9HZfWCUNG0odyHfXuIsdESwLxHZByqzpLz0L4&X-Amz-Signature=0b32bf1bc36cef344709d93040903a9ad131dc610cc7665a476cdf113ee0ee28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DC4GI7T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeSw2mqC2cfzwE%2F0pXtIzTpoovhbhLgo2ESvzxbmYO4wIhAK5lnlQHfa9QKEqut%2BVK8IF6pC5BZneyvMqea0SBapEZKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOeU8RkIwEm5uvkVEq3APUOzWyWQwq%2BnSM6uHzNy7Egw%2FTj%2F5JUl7PuHrkiFMWqta%2BB1U8%2FnYcx5hIGAWvUAelT7jeahBg39SUTa7OFRkNUCaKpXOH131oTf7EHtnt1Kafmv8bBxcLk9JyXkAM3u26vydJK4L61iMJsCkgE3liY6m7oAWzMmwsrgoIT5vKgH%2F9aa2CBmaJACeHisVAXNYbhOAXbm%2BR3H3Hx5qV6MKQ5kRoeGSr9U%2B7496TCERdGUzN%2Brjzu9lbKduUOLiPSKdwqWO5bXPB7oQDAy86fYmkwB9Yl0Qo1RmLceQNPNDkErZbjBt3bX%2FRARx85omwb3ZvVuEkthMa%2FERLfcYs7VrnuWBFbugcy7lYqoEf0TntiJt0KUnbcHKpo5QR4aljRVKQhK6qDVmq%2FELVTRX%2Bg1%2FOceeTh%2FFyDQSV6D2b64QNnwR9DcBEMkN96VAvsNA60YwEqJByA4LZwuLuxqMnFpGZEMKhlm9kLeG7fI8fdKB7nPE7YxuASa3%2BtH4fkN2NM1xmCO8Idr%2FQERy9U%2FvESEwkajo5ORXW2iWsMl8DTM0QReH5vaN69MO0y0qB2CGO4PDROyBST%2B6hjh9oo8Y52XXnZsV4Zp%2FtgO92Y7iUBj0SGQvd2qS63VXj8ccdyDDI5NvJBjqkAdrBNEDr0foSJp9uv4JyM9JTRJXLkdfKnxu5LdeUwn1aLtH8zK7voyGcLpd4epcLIsAn52%2BBK8L1sIyhidKNCAx0zT%2BA3WAmKGckTfj2u58zDdf%2F2NPEIplVDpo16ZRsap6gst1gdIHi9yFzt0ag3ih%2FENAJvjddsrcZExidyKq2pIzbFvJp%2FLn9HZfWCUNG0odyHfXuIsdESwLxHZByqzpLz0L4&X-Amz-Signature=67ce160c05d8b500084a2f77a69844eb74043b117b00ffc5ffc6a7fb01926453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
