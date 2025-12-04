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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6IJBO4Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID88XIRK5DGdCWAPn2g5X7sodZ1wyHENOGVSJZFk1%2FjAAiANGJU5Q4PCfCJKZJ0GaSYm29l52NeCD4bw5UiNSg97Zyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMSJLBpyUEzz9%2BrSLPKtwDOFjidj3fuRR8Y6iLI0DUKG6iAO8nuZefVyQhOCm0lIQgYMmqgO4tvGlaPkmLaiatCDOeq6Hv3U0JGA%2Fv5WFdkqcGe%2FZPWs9E%2B07Y7z7uSSmxmWc%2FNiBz2gs7yT4Si%2FYcfokeJ2Y6kWYqZVuut%2B%2BCE1CqweWLf6%2Fgij6p0q0sdSzJgtU47ep3nkYjNBxGQfStG64bl7AFDNDWj8PCCYkHp2PPwtWaLfm7CioptFoyY1eJG8inCwIbk1FKBMmedIyGpY%2F9EXlAuQLbGvdScVvMCvnXbLfxrjQulN1ctH3wqu0ODTptK65J%2BV2ENFYGSR5hKt%2BR%2BmRoQR%2BMB8aAq5im6o%2Fa%2F0vm1dcZPUYQwjX3%2FXZ1Q9Uy3Ec%2B7TFfWtxQKCR10oxSSIMa09n8f3j1XM%2FkYf8vdJYD4pP12TQJvLY3Vp%2F6KRo4vjC8YRMFuKAnVuN4zq7Eq1hSNePW5u1haaYNZCVl28Q1iTopVPueSojUqawhoTCLvexQLG0FUl%2BiTIFDq2rWAWgj0Td6UhAiSghJKLD11y0e2J9iFgGw6PkZtbvFNyztRYdBj%2F3VPi4SegZhOhTnjzldLpesuvwYyohtTC1OdA1w%2BwV8ddD0Izgd5yida3fmk79OGmB54rUwqYzIyQY6pgEwwATYSmVy0t7o2Nu2PKL1xvscxmCGfaKsY79ZYSzA2zP3z3b772qjQXx9p009MAxxWx0hUraeMyXy7PyWDGud1fzAkFpL9pQCZKXDim9tq9%2Bzfo99qv7mdDUV1jZZBUoQX8TFTXeDPmvtdVHYa3OXmsh%2BGnzGkFCV4KVAyC7Djbi344g4uI%2FqGBeVBQQkNeQJVIPHaChRBWe2jzlOoaXNDqDRVG%2FR&X-Amz-Signature=0d08cac07d3dd5b4f72d113fdc6968a65a6ede9578e03095cac9d90a552206de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6IJBO4Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID88XIRK5DGdCWAPn2g5X7sodZ1wyHENOGVSJZFk1%2FjAAiANGJU5Q4PCfCJKZJ0GaSYm29l52NeCD4bw5UiNSg97Zyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMSJLBpyUEzz9%2BrSLPKtwDOFjidj3fuRR8Y6iLI0DUKG6iAO8nuZefVyQhOCm0lIQgYMmqgO4tvGlaPkmLaiatCDOeq6Hv3U0JGA%2Fv5WFdkqcGe%2FZPWs9E%2B07Y7z7uSSmxmWc%2FNiBz2gs7yT4Si%2FYcfokeJ2Y6kWYqZVuut%2B%2BCE1CqweWLf6%2Fgij6p0q0sdSzJgtU47ep3nkYjNBxGQfStG64bl7AFDNDWj8PCCYkHp2PPwtWaLfm7CioptFoyY1eJG8inCwIbk1FKBMmedIyGpY%2F9EXlAuQLbGvdScVvMCvnXbLfxrjQulN1ctH3wqu0ODTptK65J%2BV2ENFYGSR5hKt%2BR%2BmRoQR%2BMB8aAq5im6o%2Fa%2F0vm1dcZPUYQwjX3%2FXZ1Q9Uy3Ec%2B7TFfWtxQKCR10oxSSIMa09n8f3j1XM%2FkYf8vdJYD4pP12TQJvLY3Vp%2F6KRo4vjC8YRMFuKAnVuN4zq7Eq1hSNePW5u1haaYNZCVl28Q1iTopVPueSojUqawhoTCLvexQLG0FUl%2BiTIFDq2rWAWgj0Td6UhAiSghJKLD11y0e2J9iFgGw6PkZtbvFNyztRYdBj%2F3VPi4SegZhOhTnjzldLpesuvwYyohtTC1OdA1w%2BwV8ddD0Izgd5yida3fmk79OGmB54rUwqYzIyQY6pgEwwATYSmVy0t7o2Nu2PKL1xvscxmCGfaKsY79ZYSzA2zP3z3b772qjQXx9p009MAxxWx0hUraeMyXy7PyWDGud1fzAkFpL9pQCZKXDim9tq9%2Bzfo99qv7mdDUV1jZZBUoQX8TFTXeDPmvtdVHYa3OXmsh%2BGnzGkFCV4KVAyC7Djbi344g4uI%2FqGBeVBQQkNeQJVIPHaChRBWe2jzlOoaXNDqDRVG%2FR&X-Amz-Signature=311d3f345917944374d4753ff8a5bdd5c3af5b0a636068264475c53eca18add3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
