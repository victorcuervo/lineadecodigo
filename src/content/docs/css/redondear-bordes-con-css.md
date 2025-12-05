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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZD7AA5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBIDshhDLGSf4sIngXcyLQC%2Fb4iNtuI4OPocBuW5kZ3QIhALgGBhoInwBbxyKmZ84auVR7GdpDB4TWrnVTVsGYTB8dKv8DCFsQABoMNjM3NDIzMTgzODA1IgxRitA2YgYglwW6nyEq3ANKyaVF0dLFzX0kcmtcCj5rgSOZoM3a9XeGh55fsvzWETE7PyYmHUfepZ5OADGh6a%2Bh9IX3SoPXRrGeuc0tg1cZ6SFDPfMayAtNeoG5t6r1UBmy3dSDMGoImT1qxYPsWNlzuTHaKKVXn7WEq8q0tPRD46B0wc5DdSmANpeO5t7JzBLof6DqX7gFOUjKHYxcccEweA%2B%2F2tL1HpN1qLDLVF2tHM0JQ5yqy6YUMvXVdXn51dX64qBFslV7iGvHn0BWkxOI3DUE29TAhvnPOLFQj2himZa%2FQk%2F16mjEKyPdw92hBaC%2FH5L8LuDM0B%2BOgpy6jOaOEC6oaIB9AsDfFG0waPNhdyvaE2fXc8V4fiPI3fepN7EM3yChDSs26FuxeV8Xrmc4opMroFUUp%2BLABmU%2FvFZmvNjZj7IhSavCNqoAvIpSQ9RZq8J7DM8WIUq34hgN0Ea%2F1l3CirOHYuBB1whro9Q7t%2BJJzi4IjRN2Cql%2BKCqEZgx%2FnvJl%2BtgujSsx3e0a%2BU44pHMimO%2BhK6LlVydFNDBCgbBn3ksx8EcCXGYYnTBQLncd7bVgNmfNykXwzrTq6DL4Ypl0HKBmhPTj4XBVq120S%2F9U2kIlAOcEBrIR%2B1i6394JGrfna1ojrBemlzDA1crJBjqkAbcvHQ3i9Jn44GNJVDnY4ZbPzd8box%2FlAH7Xhl2CT8eCKp49QJrgYzfAkdu6gFn5ddWY7xeR6Jq5ynsUaTFIuajapYSoPzGULpY%2Bi24X%2FZzFCOWgwgGm4fsnq%2F4TmazLnLuJgbanVbysSckPD6I0OBmrPIGXVILr%2FjhmIqFwsTtO7B7rm5bXakuKS4TjjCZ%2FZKtzWd9tplnrDz9T692crfLO2UMw&X-Amz-Signature=d356ce6ee75ac9df23103199f49588de8661d587eb0b57d8e42fa243c64db189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZD7AA5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBIDshhDLGSf4sIngXcyLQC%2Fb4iNtuI4OPocBuW5kZ3QIhALgGBhoInwBbxyKmZ84auVR7GdpDB4TWrnVTVsGYTB8dKv8DCFsQABoMNjM3NDIzMTgzODA1IgxRitA2YgYglwW6nyEq3ANKyaVF0dLFzX0kcmtcCj5rgSOZoM3a9XeGh55fsvzWETE7PyYmHUfepZ5OADGh6a%2Bh9IX3SoPXRrGeuc0tg1cZ6SFDPfMayAtNeoG5t6r1UBmy3dSDMGoImT1qxYPsWNlzuTHaKKVXn7WEq8q0tPRD46B0wc5DdSmANpeO5t7JzBLof6DqX7gFOUjKHYxcccEweA%2B%2F2tL1HpN1qLDLVF2tHM0JQ5yqy6YUMvXVdXn51dX64qBFslV7iGvHn0BWkxOI3DUE29TAhvnPOLFQj2himZa%2FQk%2F16mjEKyPdw92hBaC%2FH5L8LuDM0B%2BOgpy6jOaOEC6oaIB9AsDfFG0waPNhdyvaE2fXc8V4fiPI3fepN7EM3yChDSs26FuxeV8Xrmc4opMroFUUp%2BLABmU%2FvFZmvNjZj7IhSavCNqoAvIpSQ9RZq8J7DM8WIUq34hgN0Ea%2F1l3CirOHYuBB1whro9Q7t%2BJJzi4IjRN2Cql%2BKCqEZgx%2FnvJl%2BtgujSsx3e0a%2BU44pHMimO%2BhK6LlVydFNDBCgbBn3ksx8EcCXGYYnTBQLncd7bVgNmfNykXwzrTq6DL4Ypl0HKBmhPTj4XBVq120S%2F9U2kIlAOcEBrIR%2B1i6394JGrfna1ojrBemlzDA1crJBjqkAbcvHQ3i9Jn44GNJVDnY4ZbPzd8box%2FlAH7Xhl2CT8eCKp49QJrgYzfAkdu6gFn5ddWY7xeR6Jq5ynsUaTFIuajapYSoPzGULpY%2Bi24X%2FZzFCOWgwgGm4fsnq%2F4TmazLnLuJgbanVbysSckPD6I0OBmrPIGXVILr%2FjhmIqFwsTtO7B7rm5bXakuKS4TjjCZ%2FZKtzWd9tplnrDz9T692crfLO2UMw&X-Amz-Signature=2e55f17200226e049f60211b725edb5c57f9b1947a62757272c1db0481d31fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
