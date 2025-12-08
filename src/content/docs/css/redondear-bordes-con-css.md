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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6FPUU6J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWmTdmHwCz1Zgvg7PdB1NP1ijwEBg%2Bgr95elzg0ZG1pAIhAMZw2%2B6MQ4lTOP13L3POzICGQ3ArgaTVy0cvo8DyhtubKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFYXjCmiwguwlyeekq3AMCTQEjjTy3%2BkOijwUVfnuY%2FzorEjTWATHzz3nSit1ZglYMDmesZvZTJ%2BV7h%2FeR1y%2BDvVPQzfi1hXNWqzBvaLd236fpR3RWcmr0yraROKwQNYXOcxuvC2zGl1%2FafAgxbq3T3cUIT2qAInAm6L6HvQgDJzxc1oySNVUoXBFxSuYDYSlV06%2F2YszRDHzgv4p6p8XsOSR1PJf8Yo4%2F5aYzB3fhm%2FtoNsF55eSMZ93eVYrImmvycjXdwJDieFDlsOdKOUzOXW1ltsaCSZjX7qlKcHs35y4nPL0QPNDhcUMKOn2Sob8rH1dRyVpgSVGEVP6e%2B4VgTuh6kx%2Bqi9DGgw5oY7JUbSML88YhSIBb8MUDgklbNqJGmcmPvI4W9vKqPLkm3ntUf2JD%2B2JPi0Wrg2NjihStrsimw040MBmg0rqBeyl6B6PTNL%2BhDigHbWd%2BkdeCpKd3NjIPyvplCyFDR5uvVeppQLANfoQDoIYfiwaj3zu5ipENbUU2wEPT16XPHVlBl2zC66mIrQZBSrAA905Ogh%2Bo3qQseauP6i36JVnU4mhSB4mr8Mme1nrlI10hD9EUCt2%2F2GLrkr6L1L3nB4FtKns56GhyF5KtMLglH%2FiKi5pjafQlE8aDuMfIAeEkTzDd5NvJBjqkATS83%2F9L7murIiC3QSyXnMRL0i%2BA4zJ2dzpLcN4JJsl1vGysSwI12UnZhn8XiX%2BaLQoYvP8i3ztogK6m1ZZbnlwybriaV4LLCjp9yrr7KpsWsMNitb6%2FvnAfuWSYeAVOuoE%2ByA9e5g9y26TVX0ID2S46qnNmB39gXGJ5LluBkhOWtn5uNDMIRenHE4QEjAgA8Gq0jveIVQ%2FU4ebWjPGF2yrhbFTx&X-Amz-Signature=591c04232d03fe7cf76c19d76f278a623c7af8dd4afc6d07e1280c6e28e16253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6FPUU6J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWmTdmHwCz1Zgvg7PdB1NP1ijwEBg%2Bgr95elzg0ZG1pAIhAMZw2%2B6MQ4lTOP13L3POzICGQ3ArgaTVy0cvo8DyhtubKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFYXjCmiwguwlyeekq3AMCTQEjjTy3%2BkOijwUVfnuY%2FzorEjTWATHzz3nSit1ZglYMDmesZvZTJ%2BV7h%2FeR1y%2BDvVPQzfi1hXNWqzBvaLd236fpR3RWcmr0yraROKwQNYXOcxuvC2zGl1%2FafAgxbq3T3cUIT2qAInAm6L6HvQgDJzxc1oySNVUoXBFxSuYDYSlV06%2F2YszRDHzgv4p6p8XsOSR1PJf8Yo4%2F5aYzB3fhm%2FtoNsF55eSMZ93eVYrImmvycjXdwJDieFDlsOdKOUzOXW1ltsaCSZjX7qlKcHs35y4nPL0QPNDhcUMKOn2Sob8rH1dRyVpgSVGEVP6e%2B4VgTuh6kx%2Bqi9DGgw5oY7JUbSML88YhSIBb8MUDgklbNqJGmcmPvI4W9vKqPLkm3ntUf2JD%2B2JPi0Wrg2NjihStrsimw040MBmg0rqBeyl6B6PTNL%2BhDigHbWd%2BkdeCpKd3NjIPyvplCyFDR5uvVeppQLANfoQDoIYfiwaj3zu5ipENbUU2wEPT16XPHVlBl2zC66mIrQZBSrAA905Ogh%2Bo3qQseauP6i36JVnU4mhSB4mr8Mme1nrlI10hD9EUCt2%2F2GLrkr6L1L3nB4FtKns56GhyF5KtMLglH%2FiKi5pjafQlE8aDuMfIAeEkTzDd5NvJBjqkATS83%2F9L7murIiC3QSyXnMRL0i%2BA4zJ2dzpLcN4JJsl1vGysSwI12UnZhn8XiX%2BaLQoYvP8i3ztogK6m1ZZbnlwybriaV4LLCjp9yrr7KpsWsMNitb6%2FvnAfuWSYeAVOuoE%2ByA9e5g9y26TVX0ID2S46qnNmB39gXGJ5LluBkhOWtn5uNDMIRenHE4QEjAgA8Gq0jveIVQ%2FU4ebWjPGF2yrhbFTx&X-Amz-Signature=3e1ada4cebce7895f54a018dd3047624f2f0e9dddd4231c248364785ed6016a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
