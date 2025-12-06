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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST6UFKJC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYCajzq1zNYxWbvhqdHflyJYB2L%2Bl3b7tu66DlP0owbAIhAPAnULhcVqj5WtOdB6YpHIGQ7gNZeYFSxj5wFvb1qSBHKv8DCHUQABoMNjM3NDIzMTgzODA1IgwcjYLcZ3lmToJii9gq3AMSRELvWNr7WVeb3CmUD%2BkKcGCNeTEFHhj43nn28wEy7%2FkkP0USSgTrzdHGNZpv%2FcL8HpyTBeN4%2FHOuvTlcjUhKpAHqnDpXhVrLQvCM3xh5Ra8pcjFKl3bDR8F4%2FJuxsWaq1J4feP9N3OiaSL6vH81s4RxAoebQb2sDJpPhg9aQeN68EaRbhB8Ce3JH50bFCk98BX6vM5vCxAxWAvc%2Bp2YhmBkMVrxcW84UwU2w7KznnKfIW%2Fh4HXIAoE7SJpwO4Xob7zTSXzX6AKlzWiNQNtK6nNZSAFG358%2BLh%2BDmhwPk8GIjpd%2B4tgdj3vX9N6UCoiMioV9hleg5QCaseeUOB5bBfcO8k3XarmlX%2BCH5W7nL6R2pseb%2FaPrdwFDlaDwAmGNij68jcyDDPkI9E6JK%2BU7YlenwEfbXOx291DKKCaNDOLsEWHlVbP%2FUZ0RJ6b5Wj6DW9IvKT3bQOqHWEobnNGlum1UdO1BPEV%2F%2BrasULOUpszvmW6ds9wKko6KOrNo3eTqspRA9pnsItmOaHDeJaUGPjQvpq%2FDWDKm0IbZsmd1h%2BWOJ6LMIzbidNFc4WPQN7BDn%2F6d4Jx%2Ft%2Bd%2FlPBRgN2KTkPe73gsCdKYMJviOU8S01OdjFr9a5GLsQOPUhDCDp9DJBjqkAV6kccQn3oTLh2D%2BczWjJG3IOC2hvOAATd1VpxpMpbmcQNPiwVshE8t%2FcsJdOAtrjHn0moYi7o89abDZ%2BQbeuYUL7r7YCS3Rgo7INXnoEQmCRxzJeguDSLF0BCnjxImkE%2Fd0yiu%2Fxa7WtTOThLDje%2F6GQzguVxGimmEYAYxhKwmrStOWlsPFTA7QYh9LvumaiCezQ9MmANumGXSWaNTlJcXfMeVx&X-Amz-Signature=73354e3479597fd13b7e5ab6c142247bfac1e3f2171a512de5efe593488e63d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST6UFKJC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYCajzq1zNYxWbvhqdHflyJYB2L%2Bl3b7tu66DlP0owbAIhAPAnULhcVqj5WtOdB6YpHIGQ7gNZeYFSxj5wFvb1qSBHKv8DCHUQABoMNjM3NDIzMTgzODA1IgwcjYLcZ3lmToJii9gq3AMSRELvWNr7WVeb3CmUD%2BkKcGCNeTEFHhj43nn28wEy7%2FkkP0USSgTrzdHGNZpv%2FcL8HpyTBeN4%2FHOuvTlcjUhKpAHqnDpXhVrLQvCM3xh5Ra8pcjFKl3bDR8F4%2FJuxsWaq1J4feP9N3OiaSL6vH81s4RxAoebQb2sDJpPhg9aQeN68EaRbhB8Ce3JH50bFCk98BX6vM5vCxAxWAvc%2Bp2YhmBkMVrxcW84UwU2w7KznnKfIW%2Fh4HXIAoE7SJpwO4Xob7zTSXzX6AKlzWiNQNtK6nNZSAFG358%2BLh%2BDmhwPk8GIjpd%2B4tgdj3vX9N6UCoiMioV9hleg5QCaseeUOB5bBfcO8k3XarmlX%2BCH5W7nL6R2pseb%2FaPrdwFDlaDwAmGNij68jcyDDPkI9E6JK%2BU7YlenwEfbXOx291DKKCaNDOLsEWHlVbP%2FUZ0RJ6b5Wj6DW9IvKT3bQOqHWEobnNGlum1UdO1BPEV%2F%2BrasULOUpszvmW6ds9wKko6KOrNo3eTqspRA9pnsItmOaHDeJaUGPjQvpq%2FDWDKm0IbZsmd1h%2BWOJ6LMIzbidNFc4WPQN7BDn%2F6d4Jx%2Ft%2Bd%2FlPBRgN2KTkPe73gsCdKYMJviOU8S01OdjFr9a5GLsQOPUhDCDp9DJBjqkAV6kccQn3oTLh2D%2BczWjJG3IOC2hvOAATd1VpxpMpbmcQNPiwVshE8t%2FcsJdOAtrjHn0moYi7o89abDZ%2BQbeuYUL7r7YCS3Rgo7INXnoEQmCRxzJeguDSLF0BCnjxImkE%2Fd0yiu%2Fxa7WtTOThLDje%2F6GQzguVxGimmEYAYxhKwmrStOWlsPFTA7QYh9LvumaiCezQ9MmANumGXSWaNTlJcXfMeVx&X-Amz-Signature=3cc2613f89ea34fd95fa272d34be539166d087f736ce304c2fa3854d4baa5b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
