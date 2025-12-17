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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KLWAWSJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoDYs0YInAYwUTLq8CVMkF3VGWuGHqsgLi490C%2FPOQlwIhAP77PnrfwbiLNY2hA%2FXJG8%2Fomsi8PvwTuDkJKxyHaaJlKv8DCHYQABoMNjM3NDIzMTgzODA1IgwzL15VbYV7jp5PLsEq3APrxSq7Uf%2BVL8dHSPFaCUY8DyF4boJWwmtNqcl1yk7VdZiqoUe4zeQ0DEhR1oy%2BKyZiHGZ1Pr34B1HR%2FH5LUACmxRJP2jrzDWqlLcOl%2BzdgUOO2tHtpWWJotoDnKa2xnmZdbmTnzt8wH5TeOyV0LbO2fgX%2Fa5EI2WxKzVhrjKeWNLO7F0G5EaPFAkc6q69U3xiZPEjpPZY96fkoaHzHoRG0NmVpRVQzb0YRmYQZEaTdXcvTPNrAfpwYEKwXMNeRmRkHTq%2BUYXUIMMOo8glw%2BH6N%2FGSysf1Ohv5vZNChSZOzwAjUefm7RVfHi%2FYWifIIEzBMNCxTlAAbAtjtvDtA%2BgD1v24VZOiLWv9HngOIERvcLjvAXmX%2BJpX76ci0gQl3JPkarWd3rIqD5%2BzOlNqkNukonW2ANj2cwieqSyfbhS4PMqGRL3SDd89%2FQNINiQLO%2B47dUxdv1bYmBBX1ThPbGQseus8tM5VoqhwKWZyVrb1lxRoTRF4UvCRRA9%2B9vj07HgJxFkz8dwl68WUsxZSkqCxpBG%2FO4HmBbh6mhUXKiR2kGTPg%2BO7a4k290VTDeYp8UpxQJhPdOPHt%2BtUKo3aldlSmh%2Bqcrg1ddIiSMos17UJdoL2DQ83xImIwTopTyzCi6ojKBjqkAYXEnuEjnOurvyqnMIPq%2BtgZfSz7kkQXvrYPXNj9UKzwvQulslvqnG7Z05Oddj8sZaNqmTHErCLeAbsR6HV3owCqY2xuryhMhjrUa0TLCAF6KOpLGGOpdR4h7anLndWq4Q9hzFJJ8XogL6YLqP6fqucXcbwfRqC5JbW%2BKoObKNi0PP6UawV44eqywgVFuogn1hHhwiV3zabxbV6ik7n%2Fcx9PzhK%2F&X-Amz-Signature=b417254d22631c2e49c95b91a9773e72d15e96b515e4661eb200becafea7bc09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KLWAWSJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoDYs0YInAYwUTLq8CVMkF3VGWuGHqsgLi490C%2FPOQlwIhAP77PnrfwbiLNY2hA%2FXJG8%2Fomsi8PvwTuDkJKxyHaaJlKv8DCHYQABoMNjM3NDIzMTgzODA1IgwzL15VbYV7jp5PLsEq3APrxSq7Uf%2BVL8dHSPFaCUY8DyF4boJWwmtNqcl1yk7VdZiqoUe4zeQ0DEhR1oy%2BKyZiHGZ1Pr34B1HR%2FH5LUACmxRJP2jrzDWqlLcOl%2BzdgUOO2tHtpWWJotoDnKa2xnmZdbmTnzt8wH5TeOyV0LbO2fgX%2Fa5EI2WxKzVhrjKeWNLO7F0G5EaPFAkc6q69U3xiZPEjpPZY96fkoaHzHoRG0NmVpRVQzb0YRmYQZEaTdXcvTPNrAfpwYEKwXMNeRmRkHTq%2BUYXUIMMOo8glw%2BH6N%2FGSysf1Ohv5vZNChSZOzwAjUefm7RVfHi%2FYWifIIEzBMNCxTlAAbAtjtvDtA%2BgD1v24VZOiLWv9HngOIERvcLjvAXmX%2BJpX76ci0gQl3JPkarWd3rIqD5%2BzOlNqkNukonW2ANj2cwieqSyfbhS4PMqGRL3SDd89%2FQNINiQLO%2B47dUxdv1bYmBBX1ThPbGQseus8tM5VoqhwKWZyVrb1lxRoTRF4UvCRRA9%2B9vj07HgJxFkz8dwl68WUsxZSkqCxpBG%2FO4HmBbh6mhUXKiR2kGTPg%2BO7a4k290VTDeYp8UpxQJhPdOPHt%2BtUKo3aldlSmh%2Bqcrg1ddIiSMos17UJdoL2DQ83xImIwTopTyzCi6ojKBjqkAYXEnuEjnOurvyqnMIPq%2BtgZfSz7kkQXvrYPXNj9UKzwvQulslvqnG7Z05Oddj8sZaNqmTHErCLeAbsR6HV3owCqY2xuryhMhjrUa0TLCAF6KOpLGGOpdR4h7anLndWq4Q9hzFJJ8XogL6YLqP6fqucXcbwfRqC5JbW%2BKoObKNi0PP6UawV44eqywgVFuogn1hHhwiV3zabxbV6ik7n%2Fcx9PzhK%2F&X-Amz-Signature=b328612c90f1bdd4be5dce05c774efe8d633d3e49af9661f47af996324e184e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
