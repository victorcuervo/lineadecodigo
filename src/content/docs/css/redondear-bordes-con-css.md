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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELD7FMN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDciLvcmE1rzpaYG8ROAUDU%2FMhZ%2FL4rApL1cmZomEnhAiBkuF%2Fn%2B91ZjTw66%2Fg0byDwfOt3WbZYjTQyQX3uS3XYOir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSlQOzY%2BZIiGNOYYzKtwDzMfRneMODATFM16VaujDznmL0MYEuckf%2BJSxenxrd4PFkUmqF2GBFPrpTKIG9QBzklVDnOwL25PiMtD%2B9gVsm%2BKIqPY7uCL10JRYcDPGtQ2SwEFqbvc8NmgHHtvWSZo3FX6IXlZC1eXS1aHUdgz%2FeW2EQxk5c9g4y9QBTIZkwy%2B2VJYVojFaB4M%2Fa68gdOWY1FeYAkNkeciMqWzJ31yaqtf7CQ%2BX%2FW5ecOFbGYMswW66DBQCFu1YP4r6DtiBFSk3aQ5Wc35B9oOsoVPlSWApH7Adhvri6erPbExNZ5dNOrjSxjK%2FAyAlGX1tOoBWj9HH2evF0lIZTZda1s19WInihBtdb5FOvM0mc%2BKkm%2B6cmderEyW%2B93Qvao8QFY7TqLxyzEUum4H3u9N664BtpcfMHBNI%2B2qVroF5j8GQPtMWE2EGxdy6RlzdDqSJfD8KZmaWb5tZyKA2cMgoDRwZAMF6p309V4EOr10VN3BaYG3%2FySB0n%2FrgLpom0RRPAAoQOkWCzt5WnmoMLszdGjXlMnjuE9Rf3cglp6ODf%2BCPWZsgsrWVowYPE%2FZGzZYv8Adn4Ebh0sBYaxupHAfZMmzgLtsMlPvMS40zdBK2LcZkWz2vx50ss6wTUFuotQr8s%2FwwwubLyQY6pgFPoAy0y6rjqIwagzOU28ura%2FdyuMI034hag8l2kWxZiJ5lbEFgLv1Ju8m54ubWN1cDu2gm4JcCEjpSLuaf9iKxYJMGxBTCU5aKHZCC1696CZ2KEiZQL2OXQ7zMWAvA%2FNGQabjmmx42T0T08U1PS5Zjm4akPrJVYCVf4GX0b%2FVXFKJi%2BE5QVyiyeRJ9wzl0pZ%2F25Zd6XmwmIb7BeVke3JgbAI3%2Fc42E&X-Amz-Signature=b68235f032ad3fc8b227a1d8a164ecb1245ede507f5b5aeeed459f153bdf87a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELD7FMN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDciLvcmE1rzpaYG8ROAUDU%2FMhZ%2FL4rApL1cmZomEnhAiBkuF%2Fn%2B91ZjTw66%2Fg0byDwfOt3WbZYjTQyQX3uS3XYOir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSlQOzY%2BZIiGNOYYzKtwDzMfRneMODATFM16VaujDznmL0MYEuckf%2BJSxenxrd4PFkUmqF2GBFPrpTKIG9QBzklVDnOwL25PiMtD%2B9gVsm%2BKIqPY7uCL10JRYcDPGtQ2SwEFqbvc8NmgHHtvWSZo3FX6IXlZC1eXS1aHUdgz%2FeW2EQxk5c9g4y9QBTIZkwy%2B2VJYVojFaB4M%2Fa68gdOWY1FeYAkNkeciMqWzJ31yaqtf7CQ%2BX%2FW5ecOFbGYMswW66DBQCFu1YP4r6DtiBFSk3aQ5Wc35B9oOsoVPlSWApH7Adhvri6erPbExNZ5dNOrjSxjK%2FAyAlGX1tOoBWj9HH2evF0lIZTZda1s19WInihBtdb5FOvM0mc%2BKkm%2B6cmderEyW%2B93Qvao8QFY7TqLxyzEUum4H3u9N664BtpcfMHBNI%2B2qVroF5j8GQPtMWE2EGxdy6RlzdDqSJfD8KZmaWb5tZyKA2cMgoDRwZAMF6p309V4EOr10VN3BaYG3%2FySB0n%2FrgLpom0RRPAAoQOkWCzt5WnmoMLszdGjXlMnjuE9Rf3cglp6ODf%2BCPWZsgsrWVowYPE%2FZGzZYv8Adn4Ebh0sBYaxupHAfZMmzgLtsMlPvMS40zdBK2LcZkWz2vx50ss6wTUFuotQr8s%2FwwwubLyQY6pgFPoAy0y6rjqIwagzOU28ura%2FdyuMI034hag8l2kWxZiJ5lbEFgLv1Ju8m54ubWN1cDu2gm4JcCEjpSLuaf9iKxYJMGxBTCU5aKHZCC1696CZ2KEiZQL2OXQ7zMWAvA%2FNGQabjmmx42T0T08U1PS5Zjm4akPrJVYCVf4GX0b%2FVXFKJi%2BE5QVyiyeRJ9wzl0pZ%2F25Zd6XmwmIb7BeVke3JgbAI3%2Fc42E&X-Amz-Signature=53f0312a18dcc04c58caec2f310450a8a9318290f4d78a6a4d7731d9512c8ca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
