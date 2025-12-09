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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XNLOR7A%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlDdapiU87sb5O4W4S7fTEfI3%2FHBV1DvXk0aHw4ePGFAiB5qrs%2BdRYZvoiWKp3fzPGbslqOm9gtBSS1hqfPLlBtLSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMCBx0WiuOY%2FOLeeeKtwDKXeHcqmTPV97IeZEL%2FqGYdFfw4v9Hh8PgeiBhun8PUA2YxA1%2FTEeuhg3l9SAsnFjn60phcMVyMGihV6BMzrjQywn866CCNZa2cFb5oWEbIMrNknnR%2F6rDMbpBHxwqIFi9D%2BJqgR0y0AhKzOLzuCBT95%2BF2IArgDtYnq3j49OIZGB%2BdkV8UlEYFvGYqoiATVxLH%2F3Kp9Pb74%2FPKQqG7rGv17r%2FzAZbV099TQCk0uteU5PJ48uaPJSUEjF%2BNw0eOoFmOSq4GNbjEeJF8xkTws8aedzWTyhZ9D6oaqwZd05uB65N1AyMnLaKbIXORw7Pf%2ByRGMTnmnwPxFdoCcqwnDCjK%2Ft0epZMtc%2B9hyw6hGQnIcQ7Pm%2Fc8foyxssQ4gOq36SW0nB8TGxs%2BUE3mso7ar19jeIILba%2BtqEmLU%2Fnf3Y6OOTbRee7UEZ5UpXj%2FRT4jkA7N9ab9gahX4thFNYAycmLvdZ%2BDWzsRP9IlLbk%2B9q0Lf5bs4mXIz1ftsPMwVeqjJmDdM445RSF1%2BrUkV2AJlrotDFapGQRAh3iQ5fBYzJXAchLJ8lD441KASE9N2D31EfBO9Od7pwF7alq2b5NBuh20Vdl7yN3euQg9z08mF5csttcWdDvtS8bprIux8wza3eyQY6pgHYie8CyDnGcbwu3DnquRGxf4FMlBIFu91EU9f5FMz8%2B3q8oBDBayBgt0lilOHCqlQ3wZEAfofkRRQMZsXW2YxTtekfP8AAnYhiqfCrPS0svocJfJZRWYm207zWgXEGIP6mVPERLVbYQODV8276l8cSCWBHmwN2GOwEuHNQzQMpvkzIkCHqi0jOW%2FiGWZYYelx%2FjRjZtbEk%2BnuNud0Eih2wAlwrjLfA&X-Amz-Signature=9801804ab70971c6a8fa15a86b4991492aabb404ed1f1f08edd391c26ef315bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XNLOR7A%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlDdapiU87sb5O4W4S7fTEfI3%2FHBV1DvXk0aHw4ePGFAiB5qrs%2BdRYZvoiWKp3fzPGbslqOm9gtBSS1hqfPLlBtLSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMCBx0WiuOY%2FOLeeeKtwDKXeHcqmTPV97IeZEL%2FqGYdFfw4v9Hh8PgeiBhun8PUA2YxA1%2FTEeuhg3l9SAsnFjn60phcMVyMGihV6BMzrjQywn866CCNZa2cFb5oWEbIMrNknnR%2F6rDMbpBHxwqIFi9D%2BJqgR0y0AhKzOLzuCBT95%2BF2IArgDtYnq3j49OIZGB%2BdkV8UlEYFvGYqoiATVxLH%2F3Kp9Pb74%2FPKQqG7rGv17r%2FzAZbV099TQCk0uteU5PJ48uaPJSUEjF%2BNw0eOoFmOSq4GNbjEeJF8xkTws8aedzWTyhZ9D6oaqwZd05uB65N1AyMnLaKbIXORw7Pf%2ByRGMTnmnwPxFdoCcqwnDCjK%2Ft0epZMtc%2B9hyw6hGQnIcQ7Pm%2Fc8foyxssQ4gOq36SW0nB8TGxs%2BUE3mso7ar19jeIILba%2BtqEmLU%2Fnf3Y6OOTbRee7UEZ5UpXj%2FRT4jkA7N9ab9gahX4thFNYAycmLvdZ%2BDWzsRP9IlLbk%2B9q0Lf5bs4mXIz1ftsPMwVeqjJmDdM445RSF1%2BrUkV2AJlrotDFapGQRAh3iQ5fBYzJXAchLJ8lD441KASE9N2D31EfBO9Od7pwF7alq2b5NBuh20Vdl7yN3euQg9z08mF5csttcWdDvtS8bprIux8wza3eyQY6pgHYie8CyDnGcbwu3DnquRGxf4FMlBIFu91EU9f5FMz8%2B3q8oBDBayBgt0lilOHCqlQ3wZEAfofkRRQMZsXW2YxTtekfP8AAnYhiqfCrPS0svocJfJZRWYm207zWgXEGIP6mVPERLVbYQODV8276l8cSCWBHmwN2GOwEuHNQzQMpvkzIkCHqi0jOW%2FiGWZYYelx%2FjRjZtbEk%2BnuNud0Eih2wAlwrjLfA&X-Amz-Signature=7e3022893965bed4f186079a77f9b68fa9e43c9747ee76d772264fdfaf67761d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
