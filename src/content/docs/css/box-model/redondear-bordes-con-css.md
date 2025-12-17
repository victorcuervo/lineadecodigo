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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q653FFC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHedLmKnbwuSiXRN%2BIMp1%2FixNFFujfp%2FERIi6NAinLLWAiEA9SftzTo1qaWjkG%2FuqoC15jfiGwcPChaXWSsxtmKlw4Uq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNGRH%2BIdfw20LGBoYSrcA2aR3TV7Xiz5I4y7L8uxJgpdpI%2BZ8zhph7GiKER1MRXT5goY1h6azZahgndeNja4LryPWVohBqY9jlTozhcHA3iueufVrtIXVcok%2F28Idu1h2tZOs%2BHI8gEoZX%2FkgvipteDkYEIWkqsrPRHZzwPhhvzBZmVln83r7g6xP8ZDQVq5P3jNzY5Zp84y7kEtMxmz0aZYdFTXrJUNyef5oWmkyQ82j7L7QjhLcF37cJ7SuyirK2xgqHcNhBmlBNipAOj6wRhVqV6kx%2BaGR2PFZNVSE%2B%2FhI2cnWB%2FOQfp2BA3gEIzTBr97R5AkCIcxpVZGPeTbp%2BlHooKhLp4xViEPmBwwyA%2FcLCvgA5xB0iQ07CUzKlXRnMh1SjaCXUtFu5RDd%2Fp8Jfd0c%2Bq1QAjuy1T4sCXnMfWHKRbblZR%2Fjv4hDmYdBwevOqRadDQiS25SBrp8aPMxy0xi9AXTukpdA93xdYOqp8MK7iJfiP3P%2BxjueQ7IgRbbAkDC0YJbCyGUKD3rt5SsL38YIcyXzP0CHfyqT2ZTgddwx7qaX%2BvQMhkZYNZ%2B%2BBvn7Upy8PYlbDY0WihrdIvd6N1L%2FdKLfZVcUUHIHA5XgT0VUtIcEvPvLy3%2Fl%2F%2FxA3nXpS4hoG1zxeKLGuN2MKThisoGOqUBmB0OyXfNn%2B%2BiEXoTCj6KwcUF%2BROKD8nvNjYl%2Fn5ejVCSq0GbX5OeB56GauV8%2FRFtTSs6p9qVpMPjmC0umtlBe4ca4l86q%2F4cubkn8PouOIqcGtyFmMTsrtCJJM1Dp3GtsoeFe4d0VR7o1P6fCcOYGdQXRVpgpNC3%2FB1yFFHrRGnm5hIELaOsLJcIkkTRsLXF872xN3uuVsIak5r236gINymK5T4A&X-Amz-Signature=1671c9f18064a2374c5c09a4b3ecdca9ca59d40c8bb3abea4b5d4265eb32947f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q653FFC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHedLmKnbwuSiXRN%2BIMp1%2FixNFFujfp%2FERIi6NAinLLWAiEA9SftzTo1qaWjkG%2FuqoC15jfiGwcPChaXWSsxtmKlw4Uq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNGRH%2BIdfw20LGBoYSrcA2aR3TV7Xiz5I4y7L8uxJgpdpI%2BZ8zhph7GiKER1MRXT5goY1h6azZahgndeNja4LryPWVohBqY9jlTozhcHA3iueufVrtIXVcok%2F28Idu1h2tZOs%2BHI8gEoZX%2FkgvipteDkYEIWkqsrPRHZzwPhhvzBZmVln83r7g6xP8ZDQVq5P3jNzY5Zp84y7kEtMxmz0aZYdFTXrJUNyef5oWmkyQ82j7L7QjhLcF37cJ7SuyirK2xgqHcNhBmlBNipAOj6wRhVqV6kx%2BaGR2PFZNVSE%2B%2FhI2cnWB%2FOQfp2BA3gEIzTBr97R5AkCIcxpVZGPeTbp%2BlHooKhLp4xViEPmBwwyA%2FcLCvgA5xB0iQ07CUzKlXRnMh1SjaCXUtFu5RDd%2Fp8Jfd0c%2Bq1QAjuy1T4sCXnMfWHKRbblZR%2Fjv4hDmYdBwevOqRadDQiS25SBrp8aPMxy0xi9AXTukpdA93xdYOqp8MK7iJfiP3P%2BxjueQ7IgRbbAkDC0YJbCyGUKD3rt5SsL38YIcyXzP0CHfyqT2ZTgddwx7qaX%2BvQMhkZYNZ%2B%2BBvn7Upy8PYlbDY0WihrdIvd6N1L%2FdKLfZVcUUHIHA5XgT0VUtIcEvPvLy3%2Fl%2F%2FxA3nXpS4hoG1zxeKLGuN2MKThisoGOqUBmB0OyXfNn%2B%2BiEXoTCj6KwcUF%2BROKD8nvNjYl%2Fn5ejVCSq0GbX5OeB56GauV8%2FRFtTSs6p9qVpMPjmC0umtlBe4ca4l86q%2F4cubkn8PouOIqcGtyFmMTsrtCJJM1Dp3GtsoeFe4d0VR7o1P6fCcOYGdQXRVpgpNC3%2FB1yFFHrRGnm5hIELaOsLJcIkkTRsLXF872xN3uuVsIak5r236gINymK5T4A&X-Amz-Signature=ad772ec8150ecb2f6d85c79521185ddcc02a2823c521711e17f43ffa2351b073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
