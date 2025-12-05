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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UUKCNOU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBU3cQ3XBmNDjpHRQ7iOgGsd93CdoOGkVdGGu%2BnsA0DcAiAICr29bItyYZt%2BsUk372MMwBne%2FAJifyx6%2Foinyp%2Freir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMSi7lQySEZIOGz0WmKtwD5YJ6%2FKr0IxSs5u6M69oyeX5q3U2XUvcmO77xChyssizKNq29vW34gVrzSU9%2BqOAs2LDuyjfgLok%2FLSGALR%2F8SJeip2PB77E8FR%2Fly2JdPkOtUcOi%2FAfvYg5mp7iW%2FdfhgA7yvYQV203oBuc0mbA%2BbrhEaFqnFyj7f47wAts9aDt95yFns9If2Yrz76ACUKtS9eFPh67Wx5ar35kTZlKbf3wN05VXqx6B%2F%2FwWLE9tqFYFVuxE6gzP7IGl%2B7yFl9Bd%2FXVnS5DXrP%2FtG8zPaZsMslc7pjLTSqG4jmRRZ4tOvsnph71einUbNv2dtXRx2zQ5zDjJUZnq0FmPuncysEhZp3n2HOKp%2FqV9Rvo3dH9d0Ckvb3QQh%2FdN7gg8dVefvjLm67lo%2FJFu6KThkrdcrtNlWULwcJZ4U%2BBZm90xE8hjn68h1F7ABZouQn1ikNEo%2FRouP7aSnqphDU2f0z0QR%2F5bsFG6TD0qzoo93F6I3PcX1XVqo2RH30SOIWC8cCYqeBKqdJk755M7Y2MpWPc%2F1AXoj2aMYJ4NXPb0ZYShDUGVQjkUv0qeu0FvZObepA7V5JNfAw8RJ%2BMXaHZXbprPGzNwq4OYi0CE%2BIZBEIbfH3oOFuRYvoxDwS083M6vO%2Bkw9PHLyQY6pgHiivcI8dkndNulfsZ0kaLcRVvBi56vyAF04yr5B2u2eXaQT4%2BvJPm7B542OSDtwKNz%2B0xxi9h5gwvxW3FLgGUoq75mM8z0ydTyximyoqi5KPCH1ayWEolVntzXgam%2FlfpbsJch4it0i1pV9TMvdFXItpVxZbVHUvZpMU%2Fw5RfJnBasTysIqjqEJXju5V0XgBAph%2FjaxVwwJWcit%2FIlkpoP2HJ0wOdf&X-Amz-Signature=b328bf797d0ca3e0a5970d5feb176b75f97eec2aa202281cb963508b784ddb36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UUKCNOU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBU3cQ3XBmNDjpHRQ7iOgGsd93CdoOGkVdGGu%2BnsA0DcAiAICr29bItyYZt%2BsUk372MMwBne%2FAJifyx6%2Foinyp%2Freir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMSi7lQySEZIOGz0WmKtwD5YJ6%2FKr0IxSs5u6M69oyeX5q3U2XUvcmO77xChyssizKNq29vW34gVrzSU9%2BqOAs2LDuyjfgLok%2FLSGALR%2F8SJeip2PB77E8FR%2Fly2JdPkOtUcOi%2FAfvYg5mp7iW%2FdfhgA7yvYQV203oBuc0mbA%2BbrhEaFqnFyj7f47wAts9aDt95yFns9If2Yrz76ACUKtS9eFPh67Wx5ar35kTZlKbf3wN05VXqx6B%2F%2FwWLE9tqFYFVuxE6gzP7IGl%2B7yFl9Bd%2FXVnS5DXrP%2FtG8zPaZsMslc7pjLTSqG4jmRRZ4tOvsnph71einUbNv2dtXRx2zQ5zDjJUZnq0FmPuncysEhZp3n2HOKp%2FqV9Rvo3dH9d0Ckvb3QQh%2FdN7gg8dVefvjLm67lo%2FJFu6KThkrdcrtNlWULwcJZ4U%2BBZm90xE8hjn68h1F7ABZouQn1ikNEo%2FRouP7aSnqphDU2f0z0QR%2F5bsFG6TD0qzoo93F6I3PcX1XVqo2RH30SOIWC8cCYqeBKqdJk755M7Y2MpWPc%2F1AXoj2aMYJ4NXPb0ZYShDUGVQjkUv0qeu0FvZObepA7V5JNfAw8RJ%2BMXaHZXbprPGzNwq4OYi0CE%2BIZBEIbfH3oOFuRYvoxDwS083M6vO%2Bkw9PHLyQY6pgHiivcI8dkndNulfsZ0kaLcRVvBi56vyAF04yr5B2u2eXaQT4%2BvJPm7B542OSDtwKNz%2B0xxi9h5gwvxW3FLgGUoq75mM8z0ydTyximyoqi5KPCH1ayWEolVntzXgam%2FlfpbsJch4it0i1pV9TMvdFXItpVxZbVHUvZpMU%2Fw5RfJnBasTysIqjqEJXju5V0XgBAph%2FjaxVwwJWcit%2FIlkpoP2HJ0wOdf&X-Amz-Signature=3376d204b87937ad70598f04b7c93488ea38909d4bb024aaa0156fafbf68ccf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
