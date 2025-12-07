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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5DPUO4O%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMDQ8fyj1CG05YdVwCg1pIUe70dld5rgNMDxnQDzxxvAiA6jJmtm%2FTnBPESg83dzj1y9LBRwBtHGXIf7%2BFuaYvV2SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmXSuJGqCXAc7KeExKtwDt3sX9loMWc7WDyRZZTHJgSfPx6faIh1n8WtA7AKnZujEOPkUyjEBlIVo5emdV%2FZBiL9hU%2FMwnJTZvQB6vLlYxSATuEIBddeedBYG%2FCksRWAyj3cbfEnciLJikZrH%2B8LFC6i%2FxMXy6xDTYzEMIvWqY7B%2BaUO3WttJphZxcBeeUG5MNBlLE%2FlmiP9j3Xw%2B34Z4EbEHnaIPXB57UDWviFKsEUTKPN088hh%2BSwDdzqcnBd2WFqITwJEz4L4XKgVKzWQidHYIrqzDtm1nzd%2B7ponmAcJX7zjSEW61UqPy0gIqVY7ilDhJoH78TQWjwjf4HHDeSGRHFaohXFPIfuXdhebe7C3rCtR9Kblk0nUwtg8lN5rIv16dqTreFaU7Grq59f0z0EAb1nFGY6fGAtqSGJU9S1pGbA1ntzXG%2B8uxhTGOdbrI%2Bh5ImsKlq0n5idzTPS8g29PsjLEPYQUTxIBAkNqQcDpknl%2BBAt%2BhbSg05FoAJD66SC%2BrhkeP0MRC%2BU21D%2FhQXGq45STSnB%2FFk6AOjzKJMvlNqhpjIRGY1vHsOVT%2BAnLG95StvpNyA4DJ649K94G%2FYHAGF51ew49QxIE97C4Jwf%2Fax6rFpJd7D1HJxKLfYEgiov0rZi%2F2LUfEij8wrZnVyQY6pgFsvEadVJAa33%2FSwTO43TR47Pe%2FxYlbYdS6B9Kc2a2f0iGBiwGi5rRPsjOu0WR%2BrSQ2ZYx2gDlOtPOSaiUHzzAFmPzSR55wQyps4F7k%2BJvEYXTvz7fxqCMWv5MfM6gnN%2FuEXUUd08Xu1c60abLdJQXzDIq5UCLbKQ3pwEnGUA3ICs9MW%2FmBlM0ykJsb3zlIkn12Wx045%2F3xHwOQ7l1DnGI91k5wBhCp&X-Amz-Signature=bce9eee260c9e2835060cd9022392680578baeb8625d60ecb014ebef0ca1c765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5DPUO4O%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMDQ8fyj1CG05YdVwCg1pIUe70dld5rgNMDxnQDzxxvAiA6jJmtm%2FTnBPESg83dzj1y9LBRwBtHGXIf7%2BFuaYvV2SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmXSuJGqCXAc7KeExKtwDt3sX9loMWc7WDyRZZTHJgSfPx6faIh1n8WtA7AKnZujEOPkUyjEBlIVo5emdV%2FZBiL9hU%2FMwnJTZvQB6vLlYxSATuEIBddeedBYG%2FCksRWAyj3cbfEnciLJikZrH%2B8LFC6i%2FxMXy6xDTYzEMIvWqY7B%2BaUO3WttJphZxcBeeUG5MNBlLE%2FlmiP9j3Xw%2B34Z4EbEHnaIPXB57UDWviFKsEUTKPN088hh%2BSwDdzqcnBd2WFqITwJEz4L4XKgVKzWQidHYIrqzDtm1nzd%2B7ponmAcJX7zjSEW61UqPy0gIqVY7ilDhJoH78TQWjwjf4HHDeSGRHFaohXFPIfuXdhebe7C3rCtR9Kblk0nUwtg8lN5rIv16dqTreFaU7Grq59f0z0EAb1nFGY6fGAtqSGJU9S1pGbA1ntzXG%2B8uxhTGOdbrI%2Bh5ImsKlq0n5idzTPS8g29PsjLEPYQUTxIBAkNqQcDpknl%2BBAt%2BhbSg05FoAJD66SC%2BrhkeP0MRC%2BU21D%2FhQXGq45STSnB%2FFk6AOjzKJMvlNqhpjIRGY1vHsOVT%2BAnLG95StvpNyA4DJ649K94G%2FYHAGF51ew49QxIE97C4Jwf%2Fax6rFpJd7D1HJxKLfYEgiov0rZi%2F2LUfEij8wrZnVyQY6pgFsvEadVJAa33%2FSwTO43TR47Pe%2FxYlbYdS6B9Kc2a2f0iGBiwGi5rRPsjOu0WR%2BrSQ2ZYx2gDlOtPOSaiUHzzAFmPzSR55wQyps4F7k%2BJvEYXTvz7fxqCMWv5MfM6gnN%2FuEXUUd08Xu1c60abLdJQXzDIq5UCLbKQ3pwEnGUA3ICs9MW%2FmBlM0ykJsb3zlIkn12Wx045%2F3xHwOQ7l1DnGI91k5wBhCp&X-Amz-Signature=d8dd821063ad9fb5f4d69b74447a3a1a80895ebafe2cc07800c24ae02b5475e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
