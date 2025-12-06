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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWZO5OSV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWSCDZkBceU9196KPRlngR3flMWUxeRTn2xcBhquFd8QIhAPpRR4XNZrnnVk5ObDJ3jz5LPFoTFGvn4CzOh2h4fnJeKv8DCH8QABoMNjM3NDIzMTgzODA1IgyAxjVpM8LwDtCk2Noq3ANagNXirxBgYG%2FX3lWsss1CZRE4j0zun8gRnwMot1%2ByUDzHR1vQhTM0M4IKkidm%2BzbOkk1yh%2Fwx%2BFmdAHDbUQkROkT49MsbSKuPbjrcUojWlpPNsvc5X%2B1ENawkUBrrrcazVWDtWzVzOp%2BvHkCijnb1vlXU10se28fk07KodDwh2LT%2BWC2GxRaqvpyMuvX%2Bb0dpB1eFren6Rzw7Fl2k%2FKvlkrqgy5YM%2FJOT5Sw%2FSOkDywQzfsA1VZr73kVGsGIqEvKzge8W3Y2ag39jFY3XqrgRuXDwkWmlGXnmf6QBCst41L1NamMQCb1ny7OLjWp8IQCwDCfhwrUjHZfanDTOYOYdt%2BLni2IXjG%2B8VqN6OAZjYqfxxE6wp3J6jU2HZL61bwgZG65TAtw2mg7PNPwV9NW94YtJZl7ZpQSgI3g3EzEXa9oWEytfrMXhgErcn1A0E2t28bRg%2FFB9Z%2F8kkq%2F%2FAwR3mmlW6vP%2Fdxwd08%2B6XYfIsJkugRChOwFGULFXG4BLeVQqHPQsgL2B5EflXOVi%2BhPh807kx3k%2FS5Uvhr0Pyp8EzZ%2FBH6muoF6VdYUcJ4d7agS2X8wGjUvwy%2BF0OsR7BmZG%2Fsu360XgPmjluX79ob60TViONzTMB6t0YBgU7zCk1NLJBjqkATWbgoLP3JQyckAVa77jJfWkkfzN%2B6cfr1jW73JLOo5rJ3n6QcJuFdkZO%2FNJPhwd8dqGTUT9XU862kBFGsmjEzr4TPLui%2FtfPDTekqW5TN%2Br2c%2B7lt9m0Dr%2BHapL%2FEgV3QLyaTLg%2FqwG1ojIcf43SAQfdxAmKLRskxWVnMo8WCISG3lY2oyr2Yp3m%2By4DNvz7UlgFL4E6WSOLuQutuLWgSrD84T3&X-Amz-Signature=ff0aff07ee1581d43db7dc214b6d888115fa6a1e127919d7397a3089422ee770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWZO5OSV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWSCDZkBceU9196KPRlngR3flMWUxeRTn2xcBhquFd8QIhAPpRR4XNZrnnVk5ObDJ3jz5LPFoTFGvn4CzOh2h4fnJeKv8DCH8QABoMNjM3NDIzMTgzODA1IgyAxjVpM8LwDtCk2Noq3ANagNXirxBgYG%2FX3lWsss1CZRE4j0zun8gRnwMot1%2ByUDzHR1vQhTM0M4IKkidm%2BzbOkk1yh%2Fwx%2BFmdAHDbUQkROkT49MsbSKuPbjrcUojWlpPNsvc5X%2B1ENawkUBrrrcazVWDtWzVzOp%2BvHkCijnb1vlXU10se28fk07KodDwh2LT%2BWC2GxRaqvpyMuvX%2Bb0dpB1eFren6Rzw7Fl2k%2FKvlkrqgy5YM%2FJOT5Sw%2FSOkDywQzfsA1VZr73kVGsGIqEvKzge8W3Y2ag39jFY3XqrgRuXDwkWmlGXnmf6QBCst41L1NamMQCb1ny7OLjWp8IQCwDCfhwrUjHZfanDTOYOYdt%2BLni2IXjG%2B8VqN6OAZjYqfxxE6wp3J6jU2HZL61bwgZG65TAtw2mg7PNPwV9NW94YtJZl7ZpQSgI3g3EzEXa9oWEytfrMXhgErcn1A0E2t28bRg%2FFB9Z%2F8kkq%2F%2FAwR3mmlW6vP%2Fdxwd08%2B6XYfIsJkugRChOwFGULFXG4BLeVQqHPQsgL2B5EflXOVi%2BhPh807kx3k%2FS5Uvhr0Pyp8EzZ%2FBH6muoF6VdYUcJ4d7agS2X8wGjUvwy%2BF0OsR7BmZG%2Fsu360XgPmjluX79ob60TViONzTMB6t0YBgU7zCk1NLJBjqkATWbgoLP3JQyckAVa77jJfWkkfzN%2B6cfr1jW73JLOo5rJ3n6QcJuFdkZO%2FNJPhwd8dqGTUT9XU862kBFGsmjEzr4TPLui%2FtfPDTekqW5TN%2Br2c%2B7lt9m0Dr%2BHapL%2FEgV3QLyaTLg%2FqwG1ojIcf43SAQfdxAmKLRskxWVnMo8WCISG3lY2oyr2Yp3m%2By4DNvz7UlgFL4E6WSOLuQutuLWgSrD84T3&X-Amz-Signature=dd69ce2e01fa4a8066efc4f754ad97c0f9d3e5e1e46ec4f56d61027c08b15c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
