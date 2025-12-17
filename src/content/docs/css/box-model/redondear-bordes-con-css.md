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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJPTMADK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAs%2BuT4N3i1ZV9s7Rm%2B5xvH0Dx9%2FltzYyyBCohD6y0fxAiB7eHCBz1hr82TyKKmtow3Do19BSxt1fAXMM6cacbCtBCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMBXIa3kMmNaXqkCe0KtwDAKMraOUnSSvwwAeAFhihFLMiJ15UjdHHXH1JNEQcNhKQwVujzhB3gEGuR0B1wn5UWsbTXmdgbyK%2B82Tf0JaS7no%2Bj0bin1evv3gz3O7qZeLVhXv9FnepwPwtY0zVLNFxO9p3Ks0ZoRDZlASGXGfMWDjcPqq5gkAuMSHvrZnXXL9Qqafsgo2z3XuvA5npr4UlfOwAK4AnVcT2j3A5nSeL73tMXofECTSq0FkOEBXyLh%2Bkh6zEZ%2Fkn4%2FhKm%2F0SiqZq%2BoukXmLhmqA4I7vcZ2wtx5OWIgKd2L%2FRMcwZ%2Bk4QlLG7edBTSCJg9Qfcr0YkMRG%2BcHhdGuvH%2FnKgm0NEhxTrOOhEk2UKs%2BCbO0tE4mi2NKAQxTRDRsQiUpRU8iu1xUY3IZnZoKxmyT7KIt2es06sqRAzBsUTdsyJ3RWZidzwznpiDNzL9av1Bv6rkMDOgBPnZTcTtXCfnAumiWKRdwBcsExbmzewN5zE7WoNGBTvO%2FvFfJKXxlFWQDuGqTHFJqJ7KQL6TxNQsF%2BOmB6XS5ONugdEVYGMfJdUKsb7%2FlEX50wIjhFWUDpOtUFYrVc%2BzC9FoxPvfnHyOCb2yd58nDvsLm6n7oSqeihW%2BN47NUfAt3y5%2FMEsl%2FGM5NuUpCIwobiJygY6pgEMZoUHv%2BCb%2BH66N0OCWpy2iQ%2BlI117o58O76P%2Bbdh7pI7s1yiTMr4QEIJG9vFzSchyqXEtY2bpXFnoWkeaZPvHkdqbhW7tTkaz3a6Mb8gtzdvQ16R27Ks9diPapsBlWOzWyBw%2FQUfNyhUGiuuw3GeJukXCT5dXxM2A5eRlXh3UOMhVXbJyL9wW%2FxpFLQP3KxdbkJQtbIBrqAGCyrnUv3VPVG%2BIH%2BSd&X-Amz-Signature=a28857a40d54bb42b703e227bcb41a41f2ed8ef3726671f68b5cecae30e5fe3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJPTMADK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAs%2BuT4N3i1ZV9s7Rm%2B5xvH0Dx9%2FltzYyyBCohD6y0fxAiB7eHCBz1hr82TyKKmtow3Do19BSxt1fAXMM6cacbCtBCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMBXIa3kMmNaXqkCe0KtwDAKMraOUnSSvwwAeAFhihFLMiJ15UjdHHXH1JNEQcNhKQwVujzhB3gEGuR0B1wn5UWsbTXmdgbyK%2B82Tf0JaS7no%2Bj0bin1evv3gz3O7qZeLVhXv9FnepwPwtY0zVLNFxO9p3Ks0ZoRDZlASGXGfMWDjcPqq5gkAuMSHvrZnXXL9Qqafsgo2z3XuvA5npr4UlfOwAK4AnVcT2j3A5nSeL73tMXofECTSq0FkOEBXyLh%2Bkh6zEZ%2Fkn4%2FhKm%2F0SiqZq%2BoukXmLhmqA4I7vcZ2wtx5OWIgKd2L%2FRMcwZ%2Bk4QlLG7edBTSCJg9Qfcr0YkMRG%2BcHhdGuvH%2FnKgm0NEhxTrOOhEk2UKs%2BCbO0tE4mi2NKAQxTRDRsQiUpRU8iu1xUY3IZnZoKxmyT7KIt2es06sqRAzBsUTdsyJ3RWZidzwznpiDNzL9av1Bv6rkMDOgBPnZTcTtXCfnAumiWKRdwBcsExbmzewN5zE7WoNGBTvO%2FvFfJKXxlFWQDuGqTHFJqJ7KQL6TxNQsF%2BOmB6XS5ONugdEVYGMfJdUKsb7%2FlEX50wIjhFWUDpOtUFYrVc%2BzC9FoxPvfnHyOCb2yd58nDvsLm6n7oSqeihW%2BN47NUfAt3y5%2FMEsl%2FGM5NuUpCIwobiJygY6pgEMZoUHv%2BCb%2BH66N0OCWpy2iQ%2BlI117o58O76P%2Bbdh7pI7s1yiTMr4QEIJG9vFzSchyqXEtY2bpXFnoWkeaZPvHkdqbhW7tTkaz3a6Mb8gtzdvQ16R27Ks9diPapsBlWOzWyBw%2FQUfNyhUGiuuw3GeJukXCT5dXxM2A5eRlXh3UOMhVXbJyL9wW%2FxpFLQP3KxdbkJQtbIBrqAGCyrnUv3VPVG%2BIH%2BSd&X-Amz-Signature=f573ff4d6b8c8ee9595ea68fd139378760720163245564bb2da90007f8083453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
