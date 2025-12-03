---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626JTLNSP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHO%2BQtyPIYcd5awBjGAieFgIj%2BIefotUncO8OtrmqAoIAiBx5G58sS3cdyJAUdjFCKG%2F86UP2bxJPU1w8J36UGJxjyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMZ7pbPdf3xTZEfWb5KtwDaasc5jWiU13G1E3Qha7ec3R3EFoZ3N91ElF%2FiwGqpPUZASmDQ%2F848QE6FQlQBByz%2F9X4NmmqzAmrAW1bhkHiqgVIqhPcTHJTVqpFTerxUCzJA%2B%2B1uyXW0yUk4CyavVOfqN2ovNe3hEkVehjAx%2FGlwZvYh7RQB3rVYFQwQ0wtp35sxBEp%2FiCdkwS1Hd%2Bzshodq4YB2vKzRkAijaljq8ViuAwY45XJjSKSnzam7xTt4zbuelQRclfvBGvV213o%2FK2a5U8r%2FYjJmUJjghA3G6I6DNNeml7CQcB5t3XjvVbA2JtWwjFsroxjmrdCezC1ixIkX%2BCDezbFZyRWdBaQgAZ%2B5ST9sPxiHlmX4uEwF8iZEq%2Fe%2FcBCl%2FHc6AU1EMFdJtlO2Y80GPjbgK5JSJVzO4u1y%2Bx%2B9D6Oe5OA8qMZKwH1dCe4GokaITuNIbYsSYVu1na0Stf2FL5H%2BWO6KExyUuY2EUsESiJglF4WcGQQaPg5OTcP8VT1tJ0WMy6LwBOwXqh1PE%2FIWXbjQ%2Bx65w52VowrazAfsnH9cg9VwWZOU93rkwZVOMq3hDtddxg6Vun1KfBLfFE6K0CFUz7aCC5NOvx1q5JVpvt%2BU1U0fVDWUr55tz7PyN%2BNlqHXHv68lx8w5L3CyQY6pgHGn7nOusCbqfdbeIjlSCHreZ%2FJwLoj%2Bcpx8hMsOIjxGqhmjGEnJkwyorQmesvunA%2FCOx2ym4zWIhkxoOqnW9HHQgkB7ho7r%2F5aHcoAauaoheIUrGIGjXPUVZUZrrkP8egFd2GuMy96PLFyGiiQELjpNsBIfx7%2BWts%2FXV9WKFmuisiDg0RUx3neMO79iGBglpaZy6QOz6vc5DgPrrlsI%2BZCqrk4Cbid&X-Amz-Signature=038e3973f8707aa42df8b1d49289bb858a37d15351083055ef446d6c4d3f3b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626JTLNSP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHO%2BQtyPIYcd5awBjGAieFgIj%2BIefotUncO8OtrmqAoIAiBx5G58sS3cdyJAUdjFCKG%2F86UP2bxJPU1w8J36UGJxjyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMZ7pbPdf3xTZEfWb5KtwDaasc5jWiU13G1E3Qha7ec3R3EFoZ3N91ElF%2FiwGqpPUZASmDQ%2F848QE6FQlQBByz%2F9X4NmmqzAmrAW1bhkHiqgVIqhPcTHJTVqpFTerxUCzJA%2B%2B1uyXW0yUk4CyavVOfqN2ovNe3hEkVehjAx%2FGlwZvYh7RQB3rVYFQwQ0wtp35sxBEp%2FiCdkwS1Hd%2Bzshodq4YB2vKzRkAijaljq8ViuAwY45XJjSKSnzam7xTt4zbuelQRclfvBGvV213o%2FK2a5U8r%2FYjJmUJjghA3G6I6DNNeml7CQcB5t3XjvVbA2JtWwjFsroxjmrdCezC1ixIkX%2BCDezbFZyRWdBaQgAZ%2B5ST9sPxiHlmX4uEwF8iZEq%2Fe%2FcBCl%2FHc6AU1EMFdJtlO2Y80GPjbgK5JSJVzO4u1y%2Bx%2B9D6Oe5OA8qMZKwH1dCe4GokaITuNIbYsSYVu1na0Stf2FL5H%2BWO6KExyUuY2EUsESiJglF4WcGQQaPg5OTcP8VT1tJ0WMy6LwBOwXqh1PE%2FIWXbjQ%2Bx65w52VowrazAfsnH9cg9VwWZOU93rkwZVOMq3hDtddxg6Vun1KfBLfFE6K0CFUz7aCC5NOvx1q5JVpvt%2BU1U0fVDWUr55tz7PyN%2BNlqHXHv68lx8w5L3CyQY6pgHGn7nOusCbqfdbeIjlSCHreZ%2FJwLoj%2Bcpx8hMsOIjxGqhmjGEnJkwyorQmesvunA%2FCOx2ym4zWIhkxoOqnW9HHQgkB7ho7r%2F5aHcoAauaoheIUrGIGjXPUVZUZrrkP8egFd2GuMy96PLFyGiiQELjpNsBIfx7%2BWts%2FXV9WKFmuisiDg0RUx3neMO79iGBglpaZy6QOz6vc5DgPrrlsI%2BZCqrk4Cbid&X-Amz-Signature=229c48923ed74b9a3e549482fa41e05c3a646e5ef0a6a504c0d7318edfcc23a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
