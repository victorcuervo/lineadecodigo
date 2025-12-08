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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URY5MQL6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8xhcmyxy1YGJNZRiBrB9r9H4LyWUPQgqUKp4svvK%2FhwIhAL1UcvAkCYczbTreSgIcCJGrU2zJHpwA9kZPvhL4N2yVKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7R8AI6rRtdUFFlKcq3ANSgXeCXEZ74Vu5Y0f9X8gXhFAxhJvSQGB6jtHnrretPcZJlT91jBqa2ORtYOWMrIuxOd4qxIbOqBs4RD6b%2BXPRaqy%2FtW5W7Am4r4CkCU22M6RLuhTtytwgvrAjAYhcSpqSLBeSB2MNvBOSWFk5yggmSthPaCrA%2FblsOVwIjlDh4zlAiGIyaIEf0f2e%2FDFJK0MBbuZ4GgaCIpZ8OL1xX%2BwTfRp1OI560vSSaGXXrrdMn%2BYWIJkvhaQfTfnDNO9alAQEQTnor%2F1SRue4Cwf%2BFhCsDj5R4dPpBlaJ4P3LDEauZHMyZD6eLNXL%2FZLFcZTi5exNPORaCb%2FQQRDMxt8lyKcRemmqOBf2LrfYQCSBhyOLu1suzoKtBs5FaGXPl3MFKDIwpF%2FhWSyRWG6aQJO9PotC%2B%2Bc7QM7Pg9B9n5F32SRPed%2BWkdXCDlmniIypAKJTH3fobYApzFcdDjYh0TB2ORClJnbhfIFWYrQmOwPDd%2BunjFWpDe1p%2F%2FsCF0PAsw7Qox4spwXEotIKNOm2xPY1gkKfXdrO25QKvjgMxE01T1KFPMEsetQNOU5kT%2BVC7B2qlb4opyR3fFGotKQInFofdBdF0CTCgNwlFFX%2FWnLB2%2BPmHkLTJiS%2B9u3BXIR4RzCPw93JBjqkAdX8nXP48PG62Jw1fksLwpdX1yqQshxJpUf82AsVsQyNJjZEYgKhmM0fdwQBTZd2KzLYlKZyPY0EeNTzBLJRKRHkXWUHkExyh92mH4XrUU%2Fjgh%2BpJoPVkIJyPvI5Bm17Wgvu%2FzrZR3X2jgwHsSjCoAmCcfuX2oVZcVJPvabVvJunPXjoGBcEvtujnqEugtUiqx%2F%2FP0BLb8%2BIjAXUqkDZDIz%2BeoDi&X-Amz-Signature=edda5808f950d2ca97674861205564fcf416344b0e61fc6bcae77797277912a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URY5MQL6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8xhcmyxy1YGJNZRiBrB9r9H4LyWUPQgqUKp4svvK%2FhwIhAL1UcvAkCYczbTreSgIcCJGrU2zJHpwA9kZPvhL4N2yVKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7R8AI6rRtdUFFlKcq3ANSgXeCXEZ74Vu5Y0f9X8gXhFAxhJvSQGB6jtHnrretPcZJlT91jBqa2ORtYOWMrIuxOd4qxIbOqBs4RD6b%2BXPRaqy%2FtW5W7Am4r4CkCU22M6RLuhTtytwgvrAjAYhcSpqSLBeSB2MNvBOSWFk5yggmSthPaCrA%2FblsOVwIjlDh4zlAiGIyaIEf0f2e%2FDFJK0MBbuZ4GgaCIpZ8OL1xX%2BwTfRp1OI560vSSaGXXrrdMn%2BYWIJkvhaQfTfnDNO9alAQEQTnor%2F1SRue4Cwf%2BFhCsDj5R4dPpBlaJ4P3LDEauZHMyZD6eLNXL%2FZLFcZTi5exNPORaCb%2FQQRDMxt8lyKcRemmqOBf2LrfYQCSBhyOLu1suzoKtBs5FaGXPl3MFKDIwpF%2FhWSyRWG6aQJO9PotC%2B%2Bc7QM7Pg9B9n5F32SRPed%2BWkdXCDlmniIypAKJTH3fobYApzFcdDjYh0TB2ORClJnbhfIFWYrQmOwPDd%2BunjFWpDe1p%2F%2FsCF0PAsw7Qox4spwXEotIKNOm2xPY1gkKfXdrO25QKvjgMxE01T1KFPMEsetQNOU5kT%2BVC7B2qlb4opyR3fFGotKQInFofdBdF0CTCgNwlFFX%2FWnLB2%2BPmHkLTJiS%2B9u3BXIR4RzCPw93JBjqkAdX8nXP48PG62Jw1fksLwpdX1yqQshxJpUf82AsVsQyNJjZEYgKhmM0fdwQBTZd2KzLYlKZyPY0EeNTzBLJRKRHkXWUHkExyh92mH4XrUU%2Fjgh%2BpJoPVkIJyPvI5Bm17Wgvu%2FzrZR3X2jgwHsSjCoAmCcfuX2oVZcVJPvabVvJunPXjoGBcEvtujnqEugtUiqx%2F%2FP0BLb8%2BIjAXUqkDZDIz%2BeoDi&X-Amz-Signature=ddba9bf626922b230ebb4ed390f95d76c907ed76abfec40c03554aa18777e5fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
