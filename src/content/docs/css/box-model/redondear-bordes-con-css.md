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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYDMCCH3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsmISxRldYC%2FG9fwDsvXy4zYNKqrUiMtDTyg9bLhPxVQIhANAsAUehiJLuheNoqAMVKTRqsgx1n2clmR%2FFf5R1IPtKKv8DCHcQABoMNjM3NDIzMTgzODA1IgwRGU%2Bnk9UT3BCKXs4q3APHMk8nflScoLXSZuqGo9QjhJoLiVTO6K2JKEaNRZqdk4TnCD98QhYGrWL15TSfUBx8P476aaa8axIkDp2AiU2kYux5K%2F3tUjuhW%2F4u4RQ6Jnf%2B0crzYEJUafpGGvs7JszbxZ4obWH8ihmFaKdhmBk2BIjsBiPIf0GSZLWJUvrZcufVwg9X0nG1xocRF87pY765ALGwKBEdDfF7%2B43xdNSbA7N4n2iyl%2F%2BQyfV67ak%2Bmv8WKAIrPuSV4iQXeAc%2FOtJ%2By3PkE4cWoXLitj0EmUNgPYcDy3TNZf0N9%2BERt%2F0GC0oqyOU1E3syrKRtugmxKicncQhVaMVegCbnk4dMQFwwngMFRpo3ylqUbo2X4xQNjyRBsKoIHqFaxYa4LLrfYYWgfi8E%2BXQGqUOh4t%2BkHiLDhCHmQlSQRdqwximzcNV5xOnFQMwDQKaRscYMCWUMJ51B7uy2OdQWE2oyAu575kwF84mHojU2pHwnHYXzbaYk3EiyKSBYxm6GvTcGJEC3L52D7mZekpreHFBW0XufzqEC4Hi%2FS3BRY6bAD4GE88Z4CvwzrLewp117bdSxyyQz91%2FdWLIPKP17evbmapz1LNHJikTawQNI5yVYsvmJG2ub8x2jnryA6yRoXns4ADCVg4nKBjqkAdgbjPJ4xsmDsOksuazGqrtlv6wRDgQUQBPzE6c3H%2BN21VuCpicY4dkPl3v6af39YvsQ1JNVk2fKa9xkrTOMcN41MKG1mycwfDCeCAAPNQmTI6KccO%2FBh8w3YrdGvbcHDNwtj%2FUte97C1ZGFVEGEj%2FMU7mTbOP%2BfAgMzPhIgBZTSriSsW%2FaQy2iXPiE%2F3dt4fpLalLojTSssR%2FpPl2j9YwH5fmXY&X-Amz-Signature=c026abf1fddff6adfcc56f6e00d9ba6bb78303344cc3d3ed590cecf076a7bc71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYDMCCH3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsmISxRldYC%2FG9fwDsvXy4zYNKqrUiMtDTyg9bLhPxVQIhANAsAUehiJLuheNoqAMVKTRqsgx1n2clmR%2FFf5R1IPtKKv8DCHcQABoMNjM3NDIzMTgzODA1IgwRGU%2Bnk9UT3BCKXs4q3APHMk8nflScoLXSZuqGo9QjhJoLiVTO6K2JKEaNRZqdk4TnCD98QhYGrWL15TSfUBx8P476aaa8axIkDp2AiU2kYux5K%2F3tUjuhW%2F4u4RQ6Jnf%2B0crzYEJUafpGGvs7JszbxZ4obWH8ihmFaKdhmBk2BIjsBiPIf0GSZLWJUvrZcufVwg9X0nG1xocRF87pY765ALGwKBEdDfF7%2B43xdNSbA7N4n2iyl%2F%2BQyfV67ak%2Bmv8WKAIrPuSV4iQXeAc%2FOtJ%2By3PkE4cWoXLitj0EmUNgPYcDy3TNZf0N9%2BERt%2F0GC0oqyOU1E3syrKRtugmxKicncQhVaMVegCbnk4dMQFwwngMFRpo3ylqUbo2X4xQNjyRBsKoIHqFaxYa4LLrfYYWgfi8E%2BXQGqUOh4t%2BkHiLDhCHmQlSQRdqwximzcNV5xOnFQMwDQKaRscYMCWUMJ51B7uy2OdQWE2oyAu575kwF84mHojU2pHwnHYXzbaYk3EiyKSBYxm6GvTcGJEC3L52D7mZekpreHFBW0XufzqEC4Hi%2FS3BRY6bAD4GE88Z4CvwzrLewp117bdSxyyQz91%2FdWLIPKP17evbmapz1LNHJikTawQNI5yVYsvmJG2ub8x2jnryA6yRoXns4ADCVg4nKBjqkAdgbjPJ4xsmDsOksuazGqrtlv6wRDgQUQBPzE6c3H%2BN21VuCpicY4dkPl3v6af39YvsQ1JNVk2fKa9xkrTOMcN41MKG1mycwfDCeCAAPNQmTI6KccO%2FBh8w3YrdGvbcHDNwtj%2FUte97C1ZGFVEGEj%2FMU7mTbOP%2BfAgMzPhIgBZTSriSsW%2FaQy2iXPiE%2F3dt4fpLalLojTSssR%2FpPl2j9YwH5fmXY&X-Amz-Signature=602b94ac45be48d719c5ec17763d731620c8ecaa2fe5c70f156af0c9cdc81c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
