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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GQRAEJW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYmt%2B0u%2BJvF5d4Mehw7sR2LWl5f9d%2FP7Mp0uBME%2F%2FiDAiEA3hV0n%2BtNM%2BuUZzwVe%2FflDbR%2BL76DkKb50e%2Fq13DUViwqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLawAqOW09Oc3%2FqC4ircA3CvRx1qLZTASFQKPOt1ckvYHW%2Bslz4CVFJCpnsGJJWuWJKiQlbCbghM1nB23l%2F9STAQfRYB9YWn2vt7zLCRFZlBwGVvTJySwFJvt9Q7TcE94Lo1sK4bcPZwLO0aGsGKY%2BhfaxtK%2F%2FuQXSm9oa%2Fdn5rJQS7SHaC4PB5z8tF8CXLjUYhISZxaA8Z3mCtFea0T16rT2e7dv6otc0yJgvSdG24ZBCwmcAH%2F6FQ%2BX44A8DqcjdIlNfexLh71OO1qo44%2BjNB2E3TvYwiAuI0exVMmvgTAXYq3CWed66rRjsRw0HySzge9fgDWJu0CI2zWnMUKIU9z5jxod0AdKsvIQ6PYuy%2Bc%2BgQmRh1zrg7GFSaZdjaTUzPpefRkUtyXUTYXH2xYolQMPrC0bsPxUQqEXr1fZqGytPwYpDTTX6KKs06q1fOTPnUI6GSNNU4zpVX8j4pUxHMyNw3SXtssOLC8eMAwjb57st8J78tOMu5HIode0yEgF4rK2rB62NQgluBmlnNIpgBcETup%2FH4oQoFFOe6NQuonRFwAb2kbiznaPkdfHfJZxOISp6D7tYUnkeZgvuybxRwyj%2FgKszemq3UEQJLEyyiR7YF71vECT%2BArs20HumewYcS4LXrO4QZ76Lh%2BMNuU2ckGOqUBn6txKlyzKS9aZpsWoryidtMFwdNTngFCnhfFFxFOxNmY25OhzGZ9V3cJfZZZsenkm93iyhsuN8MumlDcmq68OxkOD6l%2BGWeqfQ1UK4tCZMKyIaopINfrt0uOjXTfGR7Cj5eP9%2FpDVhRA6KWY8hSza170PoddEyVKgOfUfxodAvnuoaxM7PA0nD3kHD%2B0V3wxRRP1H8Od%2FPYD1z%2FhO1%2BtnqPW4Ssd&X-Amz-Signature=b9a73e024e373ab6dc818353d31ffd7243d97a0d5a8e95a4bf7fbcf8cf47349e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GQRAEJW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYmt%2B0u%2BJvF5d4Mehw7sR2LWl5f9d%2FP7Mp0uBME%2F%2FiDAiEA3hV0n%2BtNM%2BuUZzwVe%2FflDbR%2BL76DkKb50e%2Fq13DUViwqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLawAqOW09Oc3%2FqC4ircA3CvRx1qLZTASFQKPOt1ckvYHW%2Bslz4CVFJCpnsGJJWuWJKiQlbCbghM1nB23l%2F9STAQfRYB9YWn2vt7zLCRFZlBwGVvTJySwFJvt9Q7TcE94Lo1sK4bcPZwLO0aGsGKY%2BhfaxtK%2F%2FuQXSm9oa%2Fdn5rJQS7SHaC4PB5z8tF8CXLjUYhISZxaA8Z3mCtFea0T16rT2e7dv6otc0yJgvSdG24ZBCwmcAH%2F6FQ%2BX44A8DqcjdIlNfexLh71OO1qo44%2BjNB2E3TvYwiAuI0exVMmvgTAXYq3CWed66rRjsRw0HySzge9fgDWJu0CI2zWnMUKIU9z5jxod0AdKsvIQ6PYuy%2Bc%2BgQmRh1zrg7GFSaZdjaTUzPpefRkUtyXUTYXH2xYolQMPrC0bsPxUQqEXr1fZqGytPwYpDTTX6KKs06q1fOTPnUI6GSNNU4zpVX8j4pUxHMyNw3SXtssOLC8eMAwjb57st8J78tOMu5HIode0yEgF4rK2rB62NQgluBmlnNIpgBcETup%2FH4oQoFFOe6NQuonRFwAb2kbiznaPkdfHfJZxOISp6D7tYUnkeZgvuybxRwyj%2FgKszemq3UEQJLEyyiR7YF71vECT%2BArs20HumewYcS4LXrO4QZ76Lh%2BMNuU2ckGOqUBn6txKlyzKS9aZpsWoryidtMFwdNTngFCnhfFFxFOxNmY25OhzGZ9V3cJfZZZsenkm93iyhsuN8MumlDcmq68OxkOD6l%2BGWeqfQ1UK4tCZMKyIaopINfrt0uOjXTfGR7Cj5eP9%2FpDVhRA6KWY8hSza170PoddEyVKgOfUfxodAvnuoaxM7PA0nD3kHD%2B0V3wxRRP1H8Od%2FPYD1z%2FhO1%2BtnqPW4Ssd&X-Amz-Signature=dd6f293cad71062a93289c25ae6f426f3dfe71d84d117860abecf7774f1290da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
