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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7KRJW3S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkoOMWf52muIbc7K41%2BBgED6zq4aO2skakQ0Z0k1qY5QIgdwazuqC9ROyA1h8roFa51AwPKnVbcVfUoVcW87FF%2BCMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAo2dUXpI2BK9gpX6yrcAygzsCsK%2FZj8swo4aukiNH0G1rDhYARUasXxPwzE94oRD3bDakq5RR1i78UftHimBElYguETHiUZ50IubF4CSAKj7OYMJVqHVkGZ5wlLRoNezHigoXE21dld9euSjBaCi%2FFLomu3OtutLq2acFlu4%2BK3%2FB7xjR3fkOUFeHI03H25AlecyE02AfEh8kQruDIc0nu1wwQxSMnLrn5kfhIVAhy4lDM8p7RjSe%2BVxDjJ0f%2BjOYykSgjjNFyYdgPMrZwixIq40QeipyNR1UxMldJOtpIL1o0xJIsdsolxkz0NaYPr5sKD85weqlrmDDZmbfLVajasv8K1t%2Fn19LE%2FWNxpX1CDBFB7iifN8j4Ndo5kIwhqAlK5KkkinmuBPmWw5ONcZsKcYBbmu22%2FW2OtOoN%2BUuoBsI9zeXng7W8XNBoKXPujS2mEJU2Hs5Y%2BXw4euu%2FV8SVoJryJRpNWdpJk2fcvg7fXS0oXJcyruqMHa93EeL805wp8WmNRQASUmRw%2FGNxX0NFtJwzGo%2BWg8oLgrM5g1pMSC5vnKPy%2Bw5dHfB3I8CTM4wmR%2FTryDp%2FQ1Hej1L0mjaw%2FAEa6u5ExoeRLtAj0om6MOz0bv0KAFphxYsu2reiNougQ8rvDpMJCVQ3UMNqAi8oGOqUBuUNvALOEaU97T0U%2BzN8ABoRgWEM2lZxtR4feI2aLfv5nz08emoBts9teTQzWDikExj7Z%2FO9%2B%2Fp8yJLsSuxsfV%2FJI2N3cj9xmFzoE%2FsI6IWjEzyL2Hr%2BKdyDqAh%2BEZNXeoL9ocF%2BhnKP7z%2Bk80pycruu6tReAy0DDhuIdzcPMn91%2FvsZpyUu0t92Jm5MczP5dB9Cg%2F5inFUY8UQlY8dK8i1Z3kF2J&X-Amz-Signature=e9d4082afdd3ae7f2d2b3f90769cdbb6c94135b1ad1bf8a81c959abe208e792c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7KRJW3S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkoOMWf52muIbc7K41%2BBgED6zq4aO2skakQ0Z0k1qY5QIgdwazuqC9ROyA1h8roFa51AwPKnVbcVfUoVcW87FF%2BCMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAo2dUXpI2BK9gpX6yrcAygzsCsK%2FZj8swo4aukiNH0G1rDhYARUasXxPwzE94oRD3bDakq5RR1i78UftHimBElYguETHiUZ50IubF4CSAKj7OYMJVqHVkGZ5wlLRoNezHigoXE21dld9euSjBaCi%2FFLomu3OtutLq2acFlu4%2BK3%2FB7xjR3fkOUFeHI03H25AlecyE02AfEh8kQruDIc0nu1wwQxSMnLrn5kfhIVAhy4lDM8p7RjSe%2BVxDjJ0f%2BjOYykSgjjNFyYdgPMrZwixIq40QeipyNR1UxMldJOtpIL1o0xJIsdsolxkz0NaYPr5sKD85weqlrmDDZmbfLVajasv8K1t%2Fn19LE%2FWNxpX1CDBFB7iifN8j4Ndo5kIwhqAlK5KkkinmuBPmWw5ONcZsKcYBbmu22%2FW2OtOoN%2BUuoBsI9zeXng7W8XNBoKXPujS2mEJU2Hs5Y%2BXw4euu%2FV8SVoJryJRpNWdpJk2fcvg7fXS0oXJcyruqMHa93EeL805wp8WmNRQASUmRw%2FGNxX0NFtJwzGo%2BWg8oLgrM5g1pMSC5vnKPy%2Bw5dHfB3I8CTM4wmR%2FTryDp%2FQ1Hej1L0mjaw%2FAEa6u5ExoeRLtAj0om6MOz0bv0KAFphxYsu2reiNougQ8rvDpMJCVQ3UMNqAi8oGOqUBuUNvALOEaU97T0U%2BzN8ABoRgWEM2lZxtR4feI2aLfv5nz08emoBts9teTQzWDikExj7Z%2FO9%2B%2Fp8yJLsSuxsfV%2FJI2N3cj9xmFzoE%2FsI6IWjEzyL2Hr%2BKdyDqAh%2BEZNXeoL9ocF%2BhnKP7z%2Bk80pycruu6tReAy0DDhuIdzcPMn91%2FvsZpyUu0t92Jm5MczP5dB9Cg%2F5inFUY8UQlY8dK8i1Z3kF2J&X-Amz-Signature=3b5cae3863f5751a94ead84fcfbfaa198f531b121fef8ae6e8a03f32391a2cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
