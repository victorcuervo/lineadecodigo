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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFA6JBLW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ12A02sp15EzSgKhCBttPFMYkPC1sy1zaJs3qZWi7eAiB0MgRe4%2B0ujHOSL9AkVfGnSfup8X6OkavRtw0qw1Tkcir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMtJcXzRIRZy4W4%2BX7KtwDGTxTKUVl4MqUctQ8kSbzcxEBoXXyz%2BJ1d4I1c6uqHLFjbQABwIAFHToWN7gLZZnVG0i3QkIGaw5FQixLmUoqgNo0sb0Xaf2bLN7JuP0sX5LrcLmEhbu4wEIehxp%2FBAYhTDBNbCNmM%2BJt6YH0wjubojfW81iF8kxgfBH8onlTff3n6JtDcedNwqajxlfjq0z%2FiaVD1g7mV02DKdnQLe4IP%2Ffy1%2Bx%2FGwmCeenQTE%2FG1Fm0QlIH1fE73xqzydLYug6QKIDjtSB6xaxP1ywzlxNO7nVTmrFejHvzskMP9MZwU5wrhviu8eiPfNsvkc5%2BLRPTHgDafeWyRq4K25rFiceK8g0gtcHJ3V737AB5sh%2FkB0HpsfAiF6Zu3a73nadxbt1nI3geJswHRvN9x0LhSBDdbL2yurnZaghxVXDZkKyQcqlR8U4sQZTFtHutDptbHp3FJRznf84yk5QOafXE7%2BrMr0dWPobxxyjUKn103JbZ461VKhgSLCmrvynbaG1Ne9Vag6QTTGTmW6nDn%2FlXq5wb3falsY4xspwk%2BFv%2Fu2JO4YSU4uju4Td0qoLNDsPzzl0mQlkmTnVCYd7HI%2BA8uBqZenjyrENrQgwJL6xqSagfKpGgDmajswON%2BpV7UUkw9%2B3LyQY6pgGAyhdNW3KveHVGMaWQTeGHx6iXfwgTCEgUKd20RtkZnkutuViED5XqKiELL7gEcdcVbxUUwzZGIUmYgiVRd0JOYhjPPPAqCay40ChriKF%2FN8nSmepo1TXhJQwlT8oY9ngWmkIMDSctakQ3Cbr0syClMlM8eU9KCXaA7Pcovres8FcttMmqQRR5PvKuri4zDLGH7iYNJQCEC0aRB2xvo9UVP%2BWJ%2F2JJ&X-Amz-Signature=6e669b87a30b512a665f58cb99d9d3def62c648cc2fdb9b1efbe541385525c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFA6JBLW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ12A02sp15EzSgKhCBttPFMYkPC1sy1zaJs3qZWi7eAiB0MgRe4%2B0ujHOSL9AkVfGnSfup8X6OkavRtw0qw1Tkcir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMtJcXzRIRZy4W4%2BX7KtwDGTxTKUVl4MqUctQ8kSbzcxEBoXXyz%2BJ1d4I1c6uqHLFjbQABwIAFHToWN7gLZZnVG0i3QkIGaw5FQixLmUoqgNo0sb0Xaf2bLN7JuP0sX5LrcLmEhbu4wEIehxp%2FBAYhTDBNbCNmM%2BJt6YH0wjubojfW81iF8kxgfBH8onlTff3n6JtDcedNwqajxlfjq0z%2FiaVD1g7mV02DKdnQLe4IP%2Ffy1%2Bx%2FGwmCeenQTE%2FG1Fm0QlIH1fE73xqzydLYug6QKIDjtSB6xaxP1ywzlxNO7nVTmrFejHvzskMP9MZwU5wrhviu8eiPfNsvkc5%2BLRPTHgDafeWyRq4K25rFiceK8g0gtcHJ3V737AB5sh%2FkB0HpsfAiF6Zu3a73nadxbt1nI3geJswHRvN9x0LhSBDdbL2yurnZaghxVXDZkKyQcqlR8U4sQZTFtHutDptbHp3FJRznf84yk5QOafXE7%2BrMr0dWPobxxyjUKn103JbZ461VKhgSLCmrvynbaG1Ne9Vag6QTTGTmW6nDn%2FlXq5wb3falsY4xspwk%2BFv%2Fu2JO4YSU4uju4Td0qoLNDsPzzl0mQlkmTnVCYd7HI%2BA8uBqZenjyrENrQgwJL6xqSagfKpGgDmajswON%2BpV7UUkw9%2B3LyQY6pgGAyhdNW3KveHVGMaWQTeGHx6iXfwgTCEgUKd20RtkZnkutuViED5XqKiELL7gEcdcVbxUUwzZGIUmYgiVRd0JOYhjPPPAqCay40ChriKF%2FN8nSmepo1TXhJQwlT8oY9ngWmkIMDSctakQ3Cbr0syClMlM8eU9KCXaA7Pcovres8FcttMmqQRR5PvKuri4zDLGH7iYNJQCEC0aRB2xvo9UVP%2BWJ%2F2JJ&X-Amz-Signature=fefae34f16488da21cde967d1c6acde34ed0f7f3f38a05652c99be76bf357b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
