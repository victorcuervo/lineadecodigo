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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIXYJCPX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdoZTvRhs5egsq2aWUJYQM7hUP6dTO6XuhfP78qwABHAiBtEROn6AQNXg5Spe%2F8f7k%2FvDgBGmIX7RQfP%2B50IGY3Vyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMtNtReXUrluPFi1m1KtwDoVyqxf1X9kNpmhnMdf%2BdiUseKB6uRM8uN%2BubUUr4ZuPB1DxuYtpNND6TJp8pxp0PSnqeVjV8hwQmG9wT7ClVia73kjAsnxYSL4CSsyiT4GbIWgXt9JdoStWh7Q1yZhLMLkipSgKXQNo0feERlKouM61%2F1busc7sdUhH%2FkHYxr9Z34ftMMoTi2V1mvD2r9IIWTGkR442jBOPrsY16n0gbXM%2FCDQs2e7XlgU7e2vew8i3NEt7bon62SO0lNJ61F5Axze8%2FeXRgDxsgDjQMnT%2FdG9EXNOcYWZ4H0x2JajWpd5UwjgbDY0tfY23MVgZ8yYrN7DdBddxCINKrmISDwdg4oLYY7PeJ3LwGoAIyLkwMMLQU9XeGdHbY9eBst%2BQb%2BAs5Ux7sjw76JdGI%2BIafDye9HVxjdlV7GkXXveayulfvD5VAVoJkfzRO5mM%2F8YtIBvNVHPpWPTZgsdyoZTrPQGDm8%2F%2BGNTzqpZ1%2FnMANrxWL20UkquJQEvFTpSxjBIXG2yiGmJTVV5eL0q9a8Y0zt8oReWret%2B9DLDu9EIK27L3Q2H3VzQtUHBsNz6U0eb8UZ1oI71LzS5brW%2BNw4M%2BHjMjP7c7LC%2Bg3kgRzcX54%2Fi0jPII%2BVP9XZN1Czukv2u4wobiJygY6pgFqb3CsGnRxpW2mOIXJGz2FlM3Q90TpXvc0Y5hZuCAWq8k4WCh7DWXNn3onJFQwSjL%2BMuuXb5Z3npuunAKS9BTgyl%2Fusl2RCBPmKwmPlVAar16Wxhn2EMIo6xZ%2FKAtsgxZSDoBmpeOz%2BdmTfMY17OMxB%2BkLzePqjpwy5pZtvbovI0soL%2FhGm6IBt2iXQZS4CNUeiPFSLq4f58guOMcugVl2%2F9QIU%2By1&X-Amz-Signature=255f7f5b1012042067d67af21f5614f69c05d0a4b68c048f402497553ddc9ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIXYJCPX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdoZTvRhs5egsq2aWUJYQM7hUP6dTO6XuhfP78qwABHAiBtEROn6AQNXg5Spe%2F8f7k%2FvDgBGmIX7RQfP%2B50IGY3Vyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMtNtReXUrluPFi1m1KtwDoVyqxf1X9kNpmhnMdf%2BdiUseKB6uRM8uN%2BubUUr4ZuPB1DxuYtpNND6TJp8pxp0PSnqeVjV8hwQmG9wT7ClVia73kjAsnxYSL4CSsyiT4GbIWgXt9JdoStWh7Q1yZhLMLkipSgKXQNo0feERlKouM61%2F1busc7sdUhH%2FkHYxr9Z34ftMMoTi2V1mvD2r9IIWTGkR442jBOPrsY16n0gbXM%2FCDQs2e7XlgU7e2vew8i3NEt7bon62SO0lNJ61F5Axze8%2FeXRgDxsgDjQMnT%2FdG9EXNOcYWZ4H0x2JajWpd5UwjgbDY0tfY23MVgZ8yYrN7DdBddxCINKrmISDwdg4oLYY7PeJ3LwGoAIyLkwMMLQU9XeGdHbY9eBst%2BQb%2BAs5Ux7sjw76JdGI%2BIafDye9HVxjdlV7GkXXveayulfvD5VAVoJkfzRO5mM%2F8YtIBvNVHPpWPTZgsdyoZTrPQGDm8%2F%2BGNTzqpZ1%2FnMANrxWL20UkquJQEvFTpSxjBIXG2yiGmJTVV5eL0q9a8Y0zt8oReWret%2B9DLDu9EIK27L3Q2H3VzQtUHBsNz6U0eb8UZ1oI71LzS5brW%2BNw4M%2BHjMjP7c7LC%2Bg3kgRzcX54%2Fi0jPII%2BVP9XZN1Czukv2u4wobiJygY6pgFqb3CsGnRxpW2mOIXJGz2FlM3Q90TpXvc0Y5hZuCAWq8k4WCh7DWXNn3onJFQwSjL%2BMuuXb5Z3npuunAKS9BTgyl%2Fusl2RCBPmKwmPlVAar16Wxhn2EMIo6xZ%2FKAtsgxZSDoBmpeOz%2BdmTfMY17OMxB%2BkLzePqjpwy5pZtvbovI0soL%2FhGm6IBt2iXQZS4CNUeiPFSLq4f58guOMcugVl2%2F9QIU%2By1&X-Amz-Signature=681e1fb951be8b38fa1799f2cf2b8fc65631b7115a06833e27886c02bc245605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
