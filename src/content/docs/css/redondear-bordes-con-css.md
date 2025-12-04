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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466743ACOT3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHq%2Bi11srguNhdFztkv3WsgFkVKVcsZ3eBodXhOZrYKcAiAyjEVfRBXOKY5x3kBaalHKHoXqJ77iBWbrA68W76GVpSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM9AQDEDY1tkgq%2FXvXKtwDEdLC9ULs0lKgUZMpGC51yPVdogy0iTCFfaoIXXmqwjwH9EdPuTm5u%2FhcGP%2BUyHoK9cjF%2Bl85cQqIDBriY7yZXfX%2Fe8%2FaiB0GV9avCHpikA0eqPuaF2S9jU5nqrIRx5VniwmeLj%2FVYp%2B9Dauen9cOC%2FrZ53DCQPNwicv9nGf%2FdE%2BdjVcP01UJOqq1bmve0L%2FKyg%2FLUDZkAJSpqrFi%2BLIRrIeU1Gk8bA943i8ycobleCBlbPbSQnyQPWsB0LAEyej1TRA6sGnDCnfFtoHqrR20GuBEncg33pgGGe%2FJC%2FK2LFhN04xeenvZTG9JkAbD%2FkHS3XjR6hf2XFWH1RNL1YcxR%2FxXxWWk8setw%2BB7YpXfvEPP7I6C%2Fh%2F2SlQG7XZ5GeXejQF8wOFB49DfYmYwx2yqwvETWBf33QZI4nTqHTJ3RxPOlDHf18xFiEK82nHhwwlBxshm9%2BNfRR%2B2Izmap1P3nP9cASOmhE3hhGiz8UK%2BrqhrPs%2B3S1STvF4XRdB3KPEHSVjMIkjGdiuBOm825RWHX8baxm8jE%2FT%2BYDMDKw3PSn5TVaYK6qz5xz5pO%2B5XpxctrULO7hK6QVB%2FErIk8gqLS7vxW5ZJKTwX5Aq1Lf94yokg6XTzc0G6LbB2fxowhbTDyQY6pgGX%2BuXtX5UI8j%2FaBQ5c5wA5Wc9tkspESWMyp%2Bf4vrFI2y2HnG7cT5uCeczQ%2FxGA%2F0xlBNBtke3sqBWCYqJgP60yTAveGtBP5B2dSCRJs7500QJ4nakwqjCQKSBXU1ODy7ga0oFCWIodGy74woNeHkBizPMkrR6d%2FnspiDtsCwkDDWpxBB0EZ%2Bl13BJ%2FzBhiIVsF0OaRSL9tKycq8QTNTX7Zzff6gOir&X-Amz-Signature=6f25564dd2309827605f5697e91f4035aaad585cdaf8071b32af7924606afe2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466743ACOT3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHq%2Bi11srguNhdFztkv3WsgFkVKVcsZ3eBodXhOZrYKcAiAyjEVfRBXOKY5x3kBaalHKHoXqJ77iBWbrA68W76GVpSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM9AQDEDY1tkgq%2FXvXKtwDEdLC9ULs0lKgUZMpGC51yPVdogy0iTCFfaoIXXmqwjwH9EdPuTm5u%2FhcGP%2BUyHoK9cjF%2Bl85cQqIDBriY7yZXfX%2Fe8%2FaiB0GV9avCHpikA0eqPuaF2S9jU5nqrIRx5VniwmeLj%2FVYp%2B9Dauen9cOC%2FrZ53DCQPNwicv9nGf%2FdE%2BdjVcP01UJOqq1bmve0L%2FKyg%2FLUDZkAJSpqrFi%2BLIRrIeU1Gk8bA943i8ycobleCBlbPbSQnyQPWsB0LAEyej1TRA6sGnDCnfFtoHqrR20GuBEncg33pgGGe%2FJC%2FK2LFhN04xeenvZTG9JkAbD%2FkHS3XjR6hf2XFWH1RNL1YcxR%2FxXxWWk8setw%2BB7YpXfvEPP7I6C%2Fh%2F2SlQG7XZ5GeXejQF8wOFB49DfYmYwx2yqwvETWBf33QZI4nTqHTJ3RxPOlDHf18xFiEK82nHhwwlBxshm9%2BNfRR%2B2Izmap1P3nP9cASOmhE3hhGiz8UK%2BrqhrPs%2B3S1STvF4XRdB3KPEHSVjMIkjGdiuBOm825RWHX8baxm8jE%2FT%2BYDMDKw3PSn5TVaYK6qz5xz5pO%2B5XpxctrULO7hK6QVB%2FErIk8gqLS7vxW5ZJKTwX5Aq1Lf94yokg6XTzc0G6LbB2fxowhbTDyQY6pgGX%2BuXtX5UI8j%2FaBQ5c5wA5Wc9tkspESWMyp%2Bf4vrFI2y2HnG7cT5uCeczQ%2FxGA%2F0xlBNBtke3sqBWCYqJgP60yTAveGtBP5B2dSCRJs7500QJ4nakwqjCQKSBXU1ODy7ga0oFCWIodGy74woNeHkBizPMkrR6d%2FnspiDtsCwkDDWpxBB0EZ%2Bl13BJ%2FzBhiIVsF0OaRSL9tKycq8QTNTX7Zzff6gOir&X-Amz-Signature=d70fb74c11336dba654f1f8f9a3c6ace0891366ff861e664b66fe7c3dfadccf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
