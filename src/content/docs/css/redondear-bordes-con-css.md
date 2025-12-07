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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLWNDIS2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJRjlsKy1vtekwYhJg0yz9ZQbt8H3tWh%2BYPb3TShKXPgIhAJZm6tBpeE3jOy0ted68rUreV4bSLtoJ69QASUgPiv83KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQWXnaRLguc6MNIewq3APce9BTVYu%2Ffq5n8gdoin6LQYwxEwpDfoA8Axc2n%2B0mXZcPKTdY%2Fe6eSD4hyw8sLYpfo3457yMNPmiv7DrvVF073Te7mLb%2BudQVysm4l3iykade5yEMwiJMiVObwXgmCL2TrVdFvQEUmI8qZrMiYlR9G88TvhPUQroCnuNmLGOGbzmJWcg%2Fz5m0jjQERfMhkaZnq2w9mKh3li1zrT4zcjQArZdlONWA5RTtgpfg%2FdM0PKUzyVitteTy5NzVcXyb8AmGMPk4KxZ5MPT6v6%2Fx1KkjEDhTZeJVbGIzuHrRU3eyCJFMJgXKmi4l0fSjG7yuu15ZU99FFHM9oz2Y2N9GIshD985h1Bl%2Fzlf0sU1Y06Iop5Kt53mFgbOXpa5qZxilBARUMTWlysT%2FamO%2FooUrv%2Fd%2FCLxiWspHRYjlVeMZ3hXyWI3zIciQwWmYC4MKOMnbhTU8bm21AIbMcmOLq3PtdEbAI9MFeUkg3T0qLkUWOXIfrtRnioBCEIFXv4kweCEQpZznZnm5SJfOEFWb4MUSnG%2FQbs%2BIkKqOs5BnxDr31ULnmzOsMhSqm4KwZBaCjHiPvn2ygcq%2FiSVeFBa63iJmvN9O6IyCUCVh4oaw4jtH%2FFQ7475Ss5r10MGaDCb0LjDDuNbJBjqkAYEHKMSmLAp2xCgW%2Fml82nJHPKiafr4dhBK8Ms9v%2FW2c5ndxgvwr0ccWEjv6rqM%2FGBUU1oCiXE5nZYhFMlGRuBO5UoLR9WO%2F%2Ff2w%2BvL022KOWNxMGMtzlT9AaOxYklGELuoNkxIKqiRLvqbAxABpNl%2FfXKRsvbmLwHRTbXQko2I17WFcnkoAAL1K5qCtuUQE%2BgzaKRCMnK2lXSy5WfvI4EMf7AN7&X-Amz-Signature=3951899ee26f2cba44a9d6ccd74e3abcefa52bd97fff9d1f441b562bf9e23510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLWNDIS2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJRjlsKy1vtekwYhJg0yz9ZQbt8H3tWh%2BYPb3TShKXPgIhAJZm6tBpeE3jOy0ted68rUreV4bSLtoJ69QASUgPiv83KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQWXnaRLguc6MNIewq3APce9BTVYu%2Ffq5n8gdoin6LQYwxEwpDfoA8Axc2n%2B0mXZcPKTdY%2Fe6eSD4hyw8sLYpfo3457yMNPmiv7DrvVF073Te7mLb%2BudQVysm4l3iykade5yEMwiJMiVObwXgmCL2TrVdFvQEUmI8qZrMiYlR9G88TvhPUQroCnuNmLGOGbzmJWcg%2Fz5m0jjQERfMhkaZnq2w9mKh3li1zrT4zcjQArZdlONWA5RTtgpfg%2FdM0PKUzyVitteTy5NzVcXyb8AmGMPk4KxZ5MPT6v6%2Fx1KkjEDhTZeJVbGIzuHrRU3eyCJFMJgXKmi4l0fSjG7yuu15ZU99FFHM9oz2Y2N9GIshD985h1Bl%2Fzlf0sU1Y06Iop5Kt53mFgbOXpa5qZxilBARUMTWlysT%2FamO%2FooUrv%2Fd%2FCLxiWspHRYjlVeMZ3hXyWI3zIciQwWmYC4MKOMnbhTU8bm21AIbMcmOLq3PtdEbAI9MFeUkg3T0qLkUWOXIfrtRnioBCEIFXv4kweCEQpZznZnm5SJfOEFWb4MUSnG%2FQbs%2BIkKqOs5BnxDr31ULnmzOsMhSqm4KwZBaCjHiPvn2ygcq%2FiSVeFBa63iJmvN9O6IyCUCVh4oaw4jtH%2FFQ7475Ss5r10MGaDCb0LjDDuNbJBjqkAYEHKMSmLAp2xCgW%2Fml82nJHPKiafr4dhBK8Ms9v%2FW2c5ndxgvwr0ccWEjv6rqM%2FGBUU1oCiXE5nZYhFMlGRuBO5UoLR9WO%2F%2Ff2w%2BvL022KOWNxMGMtzlT9AaOxYklGELuoNkxIKqiRLvqbAxABpNl%2FfXKRsvbmLwHRTbXQko2I17WFcnkoAAL1K5qCtuUQE%2BgzaKRCMnK2lXSy5WfvI4EMf7AN7&X-Amz-Signature=9edd8322106359e829479aa39ad0ae9a136502ad38dc3c16374f1de259277bb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
