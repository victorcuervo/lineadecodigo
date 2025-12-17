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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLEH5CQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5fvGhAA2CVQr%2BmvvxIGDgHUg2HRkwBOVBd2je6ojZDAIhAPn38aexGLWXkF0eQ1yoPUonvge4hCLxXUQ%2Fh1ftLg4tKv8DCHYQABoMNjM3NDIzMTgzODA1Igz2TrpDqk52uyb7lvEq3AP7gMWuf8QhCbCXmgPD6mzlZTQguCTTBpWXio5z8n6dXqnvuRK3thxHGT0Y2KxYqangH5Muj%2FDLgpnVP57JJNO%2FG%2FRxVmfQ2y0fLJGJBzz1p5%2B%2F54S9JRQcdcx%2B7IceCNP%2BCGgUl2Zs12N8%2BbjCEbGZFPRlwSV%2Bbaevtr7YCbsNNwJNAbHg%2FfF%2BBtZgIgSENv3%2BVg76C064STMoDM%2BQdNJ2cj7VJ4QrHF4GQxodqJUj5aCpzMrou5OQYiCmjHvG32BZ801vuAX6Iho3%2B9fJfYWleXfSJ9WCyCRSoyA77g5R3kRjdYGXL39MVj15DfNl7n4qwZa8LRkNBLpb0FTIhDGirQh2IAU2fw41ZaYWPsAqYSDsxQ3%2BWa6PeyTTV%2F%2FSM4uMt1iFCH2178z94jsoB5kW2aA7EYOKQ%2FM1KQPSeSSdSi2SjdCdUIzPHmPZNNOp%2BMMrABIc5%2BpYhG5XoXuq6iLMP1AhiF0KK%2F%2FnwAyD2UtGN1J6fkofFUl7l1%2F7hX1sbI0JwlsnzZap7LDyA1cR9OQMqI0M7DnI%2FJGjW7y7C55LO958xz%2F7bOYPrTrW7c4plYiQ3ZQtxvCdtMrTJ7hvUSfumbgrIzUsdW5WYs9evG%2BzCJxqXywJq19UCtYnsjCT6YjKBjqkAXFUCEeck%2B2CLhqvjhxCR6T78EKu%2BCz6kJ6CAnCLiN2z034jfDqjCLQDedqadcjxZlVUUrjZ6i0SErLqg5rxhz129Yyp4iKA%2BVUNgzO%2F1%2Bu2LiFk9m7tkP0GtvN%2BMu4TT4nhtX4vYn4EkaAV8p4jyu7CKtJeEO9t4L7CYWHuE%2FwfpB%2FuUPLzVC1RQRLk5jLqgsNOiDFwOK3SkLz3AYChGOROmMHd&X-Amz-Signature=ab51b10209a7544b20a07e7cbe538a48756e2b284447adbec2f593c634d5481c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLEH5CQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5fvGhAA2CVQr%2BmvvxIGDgHUg2HRkwBOVBd2je6ojZDAIhAPn38aexGLWXkF0eQ1yoPUonvge4hCLxXUQ%2Fh1ftLg4tKv8DCHYQABoMNjM3NDIzMTgzODA1Igz2TrpDqk52uyb7lvEq3AP7gMWuf8QhCbCXmgPD6mzlZTQguCTTBpWXio5z8n6dXqnvuRK3thxHGT0Y2KxYqangH5Muj%2FDLgpnVP57JJNO%2FG%2FRxVmfQ2y0fLJGJBzz1p5%2B%2F54S9JRQcdcx%2B7IceCNP%2BCGgUl2Zs12N8%2BbjCEbGZFPRlwSV%2Bbaevtr7YCbsNNwJNAbHg%2FfF%2BBtZgIgSENv3%2BVg76C064STMoDM%2BQdNJ2cj7VJ4QrHF4GQxodqJUj5aCpzMrou5OQYiCmjHvG32BZ801vuAX6Iho3%2B9fJfYWleXfSJ9WCyCRSoyA77g5R3kRjdYGXL39MVj15DfNl7n4qwZa8LRkNBLpb0FTIhDGirQh2IAU2fw41ZaYWPsAqYSDsxQ3%2BWa6PeyTTV%2F%2FSM4uMt1iFCH2178z94jsoB5kW2aA7EYOKQ%2FM1KQPSeSSdSi2SjdCdUIzPHmPZNNOp%2BMMrABIc5%2BpYhG5XoXuq6iLMP1AhiF0KK%2F%2FnwAyD2UtGN1J6fkofFUl7l1%2F7hX1sbI0JwlsnzZap7LDyA1cR9OQMqI0M7DnI%2FJGjW7y7C55LO958xz%2F7bOYPrTrW7c4plYiQ3ZQtxvCdtMrTJ7hvUSfumbgrIzUsdW5WYs9evG%2BzCJxqXywJq19UCtYnsjCT6YjKBjqkAXFUCEeck%2B2CLhqvjhxCR6T78EKu%2BCz6kJ6CAnCLiN2z034jfDqjCLQDedqadcjxZlVUUrjZ6i0SErLqg5rxhz129Yyp4iKA%2BVUNgzO%2F1%2Bu2LiFk9m7tkP0GtvN%2BMu4TT4nhtX4vYn4EkaAV8p4jyu7CKtJeEO9t4L7CYWHuE%2FwfpB%2FuUPLzVC1RQRLk5jLqgsNOiDFwOK3SkLz3AYChGOROmMHd&X-Amz-Signature=48c405eb39f486df500f482b26d6fd9417925046c2fb25fbea5b80751a057087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
