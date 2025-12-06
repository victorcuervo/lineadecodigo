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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ42VUV3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoQVpd03HJZrbc77ny%2BRjVwQYcq6dJ1QTtMsi%2BW9DdkgIhALynnj%2FKFoDMMym5aJ9n%2FF5kcNVBl8qctCJ%2BKs%2BKuuuRKv8DCG0QABoMNjM3NDIzMTgzODA1IgzC7HJCimq7lBHD%2Bjsq3AONQ9Ye%2FaChhy2WuSYcPl74iRSL1RSRyrpyBCuFSY7Z78ALCuEvNC3A%2FN5iFtfyzYylniOr0Ci8XDc7Aqb36HBnFVTWHiAaDng%2BZq%2BAHdAgkJRqPn1DBazrPygWlSXmcYo7Ea9PhA2pWEhnNDI6E4HNbNSZYC7jssr%2FsFoO8OVhUj3fB7cPBWZotIy98qOeW1Oi1SjnuTl4WRR3wHC7NQW4udqZhtXuOBNwMVkFKI4u5mYZ83dlMxg40b%2FNgpwtPmWGWAck6Q903TFtqyjq11OWNucdrnhz7NEBcfjRgiJrW17V%2FmJL33rsB4IA27fj%2BMqB6ocWGY6oJ55%2FkWAY5NAbZOkAw3JYh3qjwrHGd0p279DEhB0XJ3G2koV80JQsjHpDFMfOyGpZltGysjlhY8u0OReq7Nz7cPqBTLkDijyewORe%2F6f9KxdIBVIcNZOn5QAoMDekBXo2Y8n%2BcWluWP%2BiM9xgffrVuFKlJT5lqtCRQADmJ4H5qbyGz7dQzsr%2FiL96J0upoAbMZWa3kOEoluRUnIdLQKy21tJ1CtK9PYED6pfyDtEV%2FulrtUI2ru1jQT13CxrDybTqtFx4tDLwbCSPWqOdil1a1tOMZYlpkuYkv%2BMB1gZkF%2B6HnrBezzDI3s7JBjqkAZhXnw1mmVOeANeiSJP23W7GjBtuWRFAIKB4sWuEmUiwmESYH5%2BiHNJEuCvgjXz1UTraFq4FT30tgI2ZlAWu1Z11k6%2FqKheDO62Gs2yZEnQwUETeVk0u3gqGUXBkaxriy70KHFRmv1xNsN%2FTVpo6hp03jQ4HTmN0UTvYJMHD93mFQGwNTcuoC0MZk7EWmM%2BqHzgo1SaM0n1NYWcRuEjjRAhGNqIZ&X-Amz-Signature=def6f3bb833e5bbe3545c7c008f5efbe6578140ed846390d973c7f9731fc5bc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ42VUV3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoQVpd03HJZrbc77ny%2BRjVwQYcq6dJ1QTtMsi%2BW9DdkgIhALynnj%2FKFoDMMym5aJ9n%2FF5kcNVBl8qctCJ%2BKs%2BKuuuRKv8DCG0QABoMNjM3NDIzMTgzODA1IgzC7HJCimq7lBHD%2Bjsq3AONQ9Ye%2FaChhy2WuSYcPl74iRSL1RSRyrpyBCuFSY7Z78ALCuEvNC3A%2FN5iFtfyzYylniOr0Ci8XDc7Aqb36HBnFVTWHiAaDng%2BZq%2BAHdAgkJRqPn1DBazrPygWlSXmcYo7Ea9PhA2pWEhnNDI6E4HNbNSZYC7jssr%2FsFoO8OVhUj3fB7cPBWZotIy98qOeW1Oi1SjnuTl4WRR3wHC7NQW4udqZhtXuOBNwMVkFKI4u5mYZ83dlMxg40b%2FNgpwtPmWGWAck6Q903TFtqyjq11OWNucdrnhz7NEBcfjRgiJrW17V%2FmJL33rsB4IA27fj%2BMqB6ocWGY6oJ55%2FkWAY5NAbZOkAw3JYh3qjwrHGd0p279DEhB0XJ3G2koV80JQsjHpDFMfOyGpZltGysjlhY8u0OReq7Nz7cPqBTLkDijyewORe%2F6f9KxdIBVIcNZOn5QAoMDekBXo2Y8n%2BcWluWP%2BiM9xgffrVuFKlJT5lqtCRQADmJ4H5qbyGz7dQzsr%2FiL96J0upoAbMZWa3kOEoluRUnIdLQKy21tJ1CtK9PYED6pfyDtEV%2FulrtUI2ru1jQT13CxrDybTqtFx4tDLwbCSPWqOdil1a1tOMZYlpkuYkv%2BMB1gZkF%2B6HnrBezzDI3s7JBjqkAZhXnw1mmVOeANeiSJP23W7GjBtuWRFAIKB4sWuEmUiwmESYH5%2BiHNJEuCvgjXz1UTraFq4FT30tgI2ZlAWu1Z11k6%2FqKheDO62Gs2yZEnQwUETeVk0u3gqGUXBkaxriy70KHFRmv1xNsN%2FTVpo6hp03jQ4HTmN0UTvYJMHD93mFQGwNTcuoC0MZk7EWmM%2BqHzgo1SaM0n1NYWcRuEjjRAhGNqIZ&X-Amz-Signature=86bc94d1ec8d7f9ff63fa853a352977b65031f057cf704fdf403efc15fd45167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
