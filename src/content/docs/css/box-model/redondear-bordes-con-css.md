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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGRQNBTA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnW8Ajb1ZuwN0SZh8irtoGD%2F%2F1HLJ0yPmjm3iZXm0RTAiAWCej4hzZeVb%2BSHEQTBrdYbLnwWt5%2BCo3l0HaYTnFg6Cr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMUYQtFYcjcoNjcTUNKtwDI%2BGFvlbZ0k21NVE0i8nbme2m9ndA7gjIg2c8vh%2BkBju3NdOdg8ErAZImrcmwf3%2Bd4JW%2BXLGdnkQ4PO6PNDHCCfQpKMGHwG8R7QibElYQC0JvFDQLofdz3J%2Btg3PvYLx7fqcUstmH%2BtBsJ3Piw5C%2Bq4aj%2Fr6andpOPbikSho8A7ToZ7dUtDdxN5JV4D4bI10JfJFe00CQbOWHzcxJszZ3yy3paB%2FA3sCcng4v3cs%2BwcJYerSa%2BnQVXFi1S1zPLwDMbsI48v1RHX7rjjoLawWRj%2F0lisb7MGziqH71nTZvTxSucoHXkvseU%2FvTYHzpDHOiU%2FyhI%2F%2FSrG6T2W2a7cG9MooAt9g3LaR3mb9j49pf%2BdodYp9FVCOo5Qt575nFzLOr6HCP0f5WzTJty9DBgsF3n84VOKMmzL71FPnNzr10eoDNDecrTGOfPTohpk9PEx0w6b%2FEGdfzM7Ic55kFn8Ln4e4Ta8F%2Fg12ClmgQ52YtMEAyPy9WL9I7qVXWfNtfdBRfZfVmz88eCJmU2R%2FAdoARUaF0dXXUadln9Xmpwx2SU3%2FL2jBBuKGPiiBAnmMJK7S7SAJCSekBvzd82oeh6cTgup0pcHWWXpXKsPcSJgME2TY9KkiI4tAgmgSwKzAw6%2BmIygY6pgEGu86YnXduSmeeAlJlI%2F5MQtHbisgvW%2FkvVHPotPqUdkcVduV1j7WJ7D%2BkH%2FxaCvIi3aXMOMP0zDZtpcLe7gVwecBCOxF59Y6mwaCL3%2BlPpCvuhGSOLuIwxUuFn7E26pjCtLJfwq%2FuVypWXGL6y0tP3EfKz5u4%2FNlQJJtORKaK8oPwG4KK3irL8qYcscrhvOGhpaqRh0Yf5soroGGq8MN%2FPaeEvbOT&X-Amz-Signature=1d0530bd760a6076611425b1c8e1495c2b19854443c1579e3f084896c2af9813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGRQNBTA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnW8Ajb1ZuwN0SZh8irtoGD%2F%2F1HLJ0yPmjm3iZXm0RTAiAWCej4hzZeVb%2BSHEQTBrdYbLnwWt5%2BCo3l0HaYTnFg6Cr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMUYQtFYcjcoNjcTUNKtwDI%2BGFvlbZ0k21NVE0i8nbme2m9ndA7gjIg2c8vh%2BkBju3NdOdg8ErAZImrcmwf3%2Bd4JW%2BXLGdnkQ4PO6PNDHCCfQpKMGHwG8R7QibElYQC0JvFDQLofdz3J%2Btg3PvYLx7fqcUstmH%2BtBsJ3Piw5C%2Bq4aj%2Fr6andpOPbikSho8A7ToZ7dUtDdxN5JV4D4bI10JfJFe00CQbOWHzcxJszZ3yy3paB%2FA3sCcng4v3cs%2BwcJYerSa%2BnQVXFi1S1zPLwDMbsI48v1RHX7rjjoLawWRj%2F0lisb7MGziqH71nTZvTxSucoHXkvseU%2FvTYHzpDHOiU%2FyhI%2F%2FSrG6T2W2a7cG9MooAt9g3LaR3mb9j49pf%2BdodYp9FVCOo5Qt575nFzLOr6HCP0f5WzTJty9DBgsF3n84VOKMmzL71FPnNzr10eoDNDecrTGOfPTohpk9PEx0w6b%2FEGdfzM7Ic55kFn8Ln4e4Ta8F%2Fg12ClmgQ52YtMEAyPy9WL9I7qVXWfNtfdBRfZfVmz88eCJmU2R%2FAdoARUaF0dXXUadln9Xmpwx2SU3%2FL2jBBuKGPiiBAnmMJK7S7SAJCSekBvzd82oeh6cTgup0pcHWWXpXKsPcSJgME2TY9KkiI4tAgmgSwKzAw6%2BmIygY6pgEGu86YnXduSmeeAlJlI%2F5MQtHbisgvW%2FkvVHPotPqUdkcVduV1j7WJ7D%2BkH%2FxaCvIi3aXMOMP0zDZtpcLe7gVwecBCOxF59Y6mwaCL3%2BlPpCvuhGSOLuIwxUuFn7E26pjCtLJfwq%2FuVypWXGL6y0tP3EfKz5u4%2FNlQJJtORKaK8oPwG4KK3irL8qYcscrhvOGhpaqRh0Yf5soroGGq8MN%2FPaeEvbOT&X-Amz-Signature=57b44bf01f495aa72ee90a22cbe0044695e27aeadb692cbc3da8c09c7a23d6fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
