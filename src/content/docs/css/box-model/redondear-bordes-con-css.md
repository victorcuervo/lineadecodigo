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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGUZH3H4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2hT8%2BHamEV6a1R8zLHeT86cxMMpB7Eq2MRdmr9hZNlAiEA8s6f8ALMX4u2yhiWf04eKFbdYkSlYgiYNJY0r9FCbKwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDCSlLnWflnswdKi3HSrcA3OuqaV1EjGfZ3%2FhWWf40jmd9UZKLinGUFXQYHNsrXqvcUWahL3H7lL7ljdJeLIpWq99C3U8asvUDJNBtyKlWoFIcan1ywiQcZorA4S1f1REOcKO1VH6ftAee0pWJp80qW1XeNsigPpgv%2FVrfGGSS1sNySQjh%2FMeGJ2TzggiMOfyO3FiiS5xIqJ8em9fnvVwOTeyEKiIAMcd9Nm9t0WmGaZTHdy0IFr%2B2oi3UXR6YttkZdjYCmowp%2FdjrAtifIcV0mM847TrXeP3PkdWw3Ajxf5Nqw%2FIZQ%2FaWDqJvR5X%2BxWQya9TODBApStX25OYY0x%2BG70PIWL%2F05cRKrA0lHH%2B9M%2Fy20JeJf%2Bri8isJG7ruj9M%2Frc2eS6pvBjR5Nd6zAq%2BtOwl4iSVhP2T2VCA%2BHN%2FAUZ8rMu4Gxkn9FGWp4fqK8%2BD0hFhwJKXn43WAAUEkfczox3KzWEsOifbqTc55Q1oKH0LsHSsZCyX%2FBp1iB1Hi221VJzq9dyi2Rz9crvYsoaHK5NumTGV99WeqRZSvSSFgTW9zM%2BRT4dQVPC6DCdxi1UU%2F2%2FKhl0hxGK1T7BWrK63NkwUAcbT4WQi8Gllfi2APZLouZakckJPQv7xA6Zl1%2B%2BbHFUtYp%2Bnd2RfXfO8MKLRicoGOqUBYT1pg6wlu762drED93XHYZIZ9%2Fb7HA1RQqncMeB1PoywHcD8%2BglAYXz%2B5fsQkUCU1RrKg7bBL7sTeH4l5%2FvswtPQkzjPU9jJdHymbczCJAoYyWzx4D4og0rKN0P2jv68e0vc5FaDd5cgF2WKBHnHRn3rP%2BToUhft7Tcw7iuioHvyGHeVnrhZIQk17Y7WdOpN2rPWHdfEHAmP3y83oEEg1w2Vy0Kp&X-Amz-Signature=ac7e617337b63ed28747679c0566cc7f9547f6f3814671541f5da4e95465f318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGUZH3H4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2hT8%2BHamEV6a1R8zLHeT86cxMMpB7Eq2MRdmr9hZNlAiEA8s6f8ALMX4u2yhiWf04eKFbdYkSlYgiYNJY0r9FCbKwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDCSlLnWflnswdKi3HSrcA3OuqaV1EjGfZ3%2FhWWf40jmd9UZKLinGUFXQYHNsrXqvcUWahL3H7lL7ljdJeLIpWq99C3U8asvUDJNBtyKlWoFIcan1ywiQcZorA4S1f1REOcKO1VH6ftAee0pWJp80qW1XeNsigPpgv%2FVrfGGSS1sNySQjh%2FMeGJ2TzggiMOfyO3FiiS5xIqJ8em9fnvVwOTeyEKiIAMcd9Nm9t0WmGaZTHdy0IFr%2B2oi3UXR6YttkZdjYCmowp%2FdjrAtifIcV0mM847TrXeP3PkdWw3Ajxf5Nqw%2FIZQ%2FaWDqJvR5X%2BxWQya9TODBApStX25OYY0x%2BG70PIWL%2F05cRKrA0lHH%2B9M%2Fy20JeJf%2Bri8isJG7ruj9M%2Frc2eS6pvBjR5Nd6zAq%2BtOwl4iSVhP2T2VCA%2BHN%2FAUZ8rMu4Gxkn9FGWp4fqK8%2BD0hFhwJKXn43WAAUEkfczox3KzWEsOifbqTc55Q1oKH0LsHSsZCyX%2FBp1iB1Hi221VJzq9dyi2Rz9crvYsoaHK5NumTGV99WeqRZSvSSFgTW9zM%2BRT4dQVPC6DCdxi1UU%2F2%2FKhl0hxGK1T7BWrK63NkwUAcbT4WQi8Gllfi2APZLouZakckJPQv7xA6Zl1%2B%2BbHFUtYp%2Bnd2RfXfO8MKLRicoGOqUBYT1pg6wlu762drED93XHYZIZ9%2Fb7HA1RQqncMeB1PoywHcD8%2BglAYXz%2B5fsQkUCU1RrKg7bBL7sTeH4l5%2FvswtPQkzjPU9jJdHymbczCJAoYyWzx4D4og0rKN0P2jv68e0vc5FaDd5cgF2WKBHnHRn3rP%2BToUhft7Tcw7iuioHvyGHeVnrhZIQk17Y7WdOpN2rPWHdfEHAmP3y83oEEg1w2Vy0Kp&X-Amz-Signature=073a1d4d0d37b38e00f1194e52322405c946174cdee3fe9e7e0a67b781ad5a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
