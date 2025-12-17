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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54Y4Z4J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKaX4lCxWvR7bRmnIbbm8luoChVxGrdAzXKBZgtxnUnAiEAze6mX0y%2BTPvTODdAxUiavV6RRXvfsvhDkZgav9K6IuIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIk5Haq0%2BlI1O2lCmSrcA7TLWRHygVrp9Qf%2F6BcrXLwjdKno8M2QkgE8h5cPEOLH7Ku0z8APfTwZwisPkbET3mvnO%2FO1dRAmA6F4hmj0EuHQ70fllf57MDmuPKXCk3SkCL3yu2DdvJz0RG1tY%2BJdS3xcTF3LPczKkPwVZXkghv%2Fu1zFuLtK3ZAFl%2Fw5u5poZB9ZKbC4eQDHusDK80Di8pysEYVSPsSS9i5HdUwRilyLNWnI62kVMWuZccSShNQg46qjFd3Ya0XAdThpkWVIilKYGach0KrxKFlm6Pv0wkYqqJDtYUAzsMnQYdoq43LmON3V3%2FQJIffyvEEJ3bW7F%2BNZ5C1izTsfJz1c8sfv8Da3KY%2Br6mvpjL7lqSaIbdM%2FgggpPI3ewf3ld4OjB6nk9Z%2FiGTnq4hUvZjeuvzrjbKEfY1ekNDXZBRRnkcDr6EKtA0K6HRxkNL0mYctqGAA3XbNozv75EYJ66xuSn7BEyf97O%2BfbsY3a30%2Fwba9eJTOTxYOteOEWhxm1PS0bWxYwJwEg6voTdYLByanQNzn%2F6QI8TfUFlMz58L7zop0Hu4c14SbwTFMrv5oNzCTSPlyJjRCndlzNtyAbAYJ06UbnIcgHhXZNINZZNF4ks5Zlb7Y3mKYSAe14nsuaoYzY8MKy4icoGOqUBxAmyTusNglW7m5ESAqq36NOmCQDkSCLj38LzU98sx5fTMBo0vUH0n%2BMS2nsk3ASzza4uOcYVW8BzyqcPzhWsuRfaaoa%2FzUhL0QGII5FOhz4Ok4sHxIUgJOV9%2B4UfpgdfbfKJmUgWWyupTECnXffpHQhwTJZGE9h9NL6W31mEaLT5ehh8%2B3dYnAez8F05YBmx0UX7d967ivxtac5mmjJ7cfpMRUpm&X-Amz-Signature=24e114eb858ea243287c25f0341ce343064f770a64d25bab515ca90007e41321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54Y4Z4J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKaX4lCxWvR7bRmnIbbm8luoChVxGrdAzXKBZgtxnUnAiEAze6mX0y%2BTPvTODdAxUiavV6RRXvfsvhDkZgav9K6IuIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIk5Haq0%2BlI1O2lCmSrcA7TLWRHygVrp9Qf%2F6BcrXLwjdKno8M2QkgE8h5cPEOLH7Ku0z8APfTwZwisPkbET3mvnO%2FO1dRAmA6F4hmj0EuHQ70fllf57MDmuPKXCk3SkCL3yu2DdvJz0RG1tY%2BJdS3xcTF3LPczKkPwVZXkghv%2Fu1zFuLtK3ZAFl%2Fw5u5poZB9ZKbC4eQDHusDK80Di8pysEYVSPsSS9i5HdUwRilyLNWnI62kVMWuZccSShNQg46qjFd3Ya0XAdThpkWVIilKYGach0KrxKFlm6Pv0wkYqqJDtYUAzsMnQYdoq43LmON3V3%2FQJIffyvEEJ3bW7F%2BNZ5C1izTsfJz1c8sfv8Da3KY%2Br6mvpjL7lqSaIbdM%2FgggpPI3ewf3ld4OjB6nk9Z%2FiGTnq4hUvZjeuvzrjbKEfY1ekNDXZBRRnkcDr6EKtA0K6HRxkNL0mYctqGAA3XbNozv75EYJ66xuSn7BEyf97O%2BfbsY3a30%2Fwba9eJTOTxYOteOEWhxm1PS0bWxYwJwEg6voTdYLByanQNzn%2F6QI8TfUFlMz58L7zop0Hu4c14SbwTFMrv5oNzCTSPlyJjRCndlzNtyAbAYJ06UbnIcgHhXZNINZZNF4ks5Zlb7Y3mKYSAe14nsuaoYzY8MKy4icoGOqUBxAmyTusNglW7m5ESAqq36NOmCQDkSCLj38LzU98sx5fTMBo0vUH0n%2BMS2nsk3ASzza4uOcYVW8BzyqcPzhWsuRfaaoa%2FzUhL0QGII5FOhz4Ok4sHxIUgJOV9%2B4UfpgdfbfKJmUgWWyupTECnXffpHQhwTJZGE9h9NL6W31mEaLT5ehh8%2B3dYnAez8F05YBmx0UX7d967ivxtac5mmjJ7cfpMRUpm&X-Amz-Signature=03ea3e0bf2b5b0dcf4bc3b28d7b99affd8210294dad2944aa6156b7e007e2c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
