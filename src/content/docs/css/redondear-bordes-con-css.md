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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNZWLVFO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAf%2BtKtTteDTOOob9jwcgEPUm8AWaMjb44hq8YNMWzxpAiA2rHMl%2Fhxc9uwoCGOwHiKkXpPiUKP65nLTcqHjNSJQMyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRpbUYWGQWn6YXE4VKtwDMAQi8E7HCkgXYdSkJoUbfEt02y2esqcWNsZ70qRWfheh%2FJ%2Bkd5QVtgx1Yrcr%2FTYkvuTZ6w9AdyEHaeY%2BYJGvmEFy8rAfOoF89Hn%2F1NtA95now9EUbTphpG3Dah9wA0fw%2F7mK22WxtQhWfPt0JVTg3cR%2FvaujUn%2FuJ1Z4DwBAhd%2FJSKsFh4TnYdr03%2BwJ7dS0Tplwn9Lh1toBiFJQSVw8yloIug%2FMTd1iAdah3J30plt6SWf6PHDM8Xy1Rlr1QJ%2Bp5ZiroL7NbO2p5U8aUcztM7dJi9Nt89JdtFRpSfCUnb2lnP0EPtWGnL2nmTTUHqntAwWs8VKT82BZnoZlCz3sigFq%2FuEm4WvNYzF3E98NpHqAjqeeosFujHM%2Bkoa5fxbmKLyVZWLXqF7jMXWoFHuTN6a0N9KNAdeb1i%2FmZB9z4OnzFNvfAvpK%2BhPHU7KY675Sq6Ha3X1R3gtiymC5seJ7WNVnCAOhFOBu5%2FwGWw6Y9ThdvLOEqb09WGY1Bym8ElRNxrx8SOO7Xs8DPdW3Oirmhxy7Lk9tcHRvFrPcB7WQxItjVfcJ0H7IG2SURMC2Hl9yGMdzNlbGt6pgWdwQsoGGaU5%2B%2FWIZto2UWh%2BuVsz8UgoNwlvDFR91aKGh1Gow7NzcyQY6pgFhcIjnhbeUqK%2Boz%2FeG4HXDPZFlCyNPBxKj7eeuow5OolEyo2CS%2BzJNrc4d%2F8OFH4v%2BNnjpB0Pjex7NbXmbMvSqjzpAcIMTPEyXLxb%2BmZxmDL%2FboxQgDNoLGgunbuhSaK8uxUgbN9R0CFVZ6mgMf92T6nD8jEb6162u1lR6pTcBz631cAHpkV%2F1UuVPgVPSLDim6GRDZJ4lFAYt%2FavbWUD98Li4meJz&X-Amz-Signature=db24c3c78e66e06ddcc100804def466549e961b141655e15158caec9548d0be9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNZWLVFO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAf%2BtKtTteDTOOob9jwcgEPUm8AWaMjb44hq8YNMWzxpAiA2rHMl%2Fhxc9uwoCGOwHiKkXpPiUKP65nLTcqHjNSJQMyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRpbUYWGQWn6YXE4VKtwDMAQi8E7HCkgXYdSkJoUbfEt02y2esqcWNsZ70qRWfheh%2FJ%2Bkd5QVtgx1Yrcr%2FTYkvuTZ6w9AdyEHaeY%2BYJGvmEFy8rAfOoF89Hn%2F1NtA95now9EUbTphpG3Dah9wA0fw%2F7mK22WxtQhWfPt0JVTg3cR%2FvaujUn%2FuJ1Z4DwBAhd%2FJSKsFh4TnYdr03%2BwJ7dS0Tplwn9Lh1toBiFJQSVw8yloIug%2FMTd1iAdah3J30plt6SWf6PHDM8Xy1Rlr1QJ%2Bp5ZiroL7NbO2p5U8aUcztM7dJi9Nt89JdtFRpSfCUnb2lnP0EPtWGnL2nmTTUHqntAwWs8VKT82BZnoZlCz3sigFq%2FuEm4WvNYzF3E98NpHqAjqeeosFujHM%2Bkoa5fxbmKLyVZWLXqF7jMXWoFHuTN6a0N9KNAdeb1i%2FmZB9z4OnzFNvfAvpK%2BhPHU7KY675Sq6Ha3X1R3gtiymC5seJ7WNVnCAOhFOBu5%2FwGWw6Y9ThdvLOEqb09WGY1Bym8ElRNxrx8SOO7Xs8DPdW3Oirmhxy7Lk9tcHRvFrPcB7WQxItjVfcJ0H7IG2SURMC2Hl9yGMdzNlbGt6pgWdwQsoGGaU5%2B%2FWIZto2UWh%2BuVsz8UgoNwlvDFR91aKGh1Gow7NzcyQY6pgFhcIjnhbeUqK%2Boz%2FeG4HXDPZFlCyNPBxKj7eeuow5OolEyo2CS%2BzJNrc4d%2F8OFH4v%2BNnjpB0Pjex7NbXmbMvSqjzpAcIMTPEyXLxb%2BmZxmDL%2FboxQgDNoLGgunbuhSaK8uxUgbN9R0CFVZ6mgMf92T6nD8jEb6162u1lR6pTcBz631cAHpkV%2F1UuVPgVPSLDim6GRDZJ4lFAYt%2FavbWUD98Li4meJz&X-Amz-Signature=399205cadb876ed8975ab17578fd5de9bf4d41e2645d6417db82d3cc0482fae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
