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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QUICAHO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAySkG8N9XVBSQjIva%2FEvfx9K8BqUYjmfM9onBI3CJ%2BcAiEA5oauE%2FKmwLl4cDD5O3pUBZYm9TLFc9C4CG2NyURr4Voq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDJavSf0Xxt0yBoyeCrcAxPjI%2BGAXwi3mXpgeo%2FEPz8ZnOUM9hj848bNVwlwO4Nhw83hcgbg%2FeNxfpTRDk7PoWkKHdAVeidRrgLaj51w1YqKzec6kqxH%2BUsm1WvftECPV3%2Fa%2BInRMh%2FveQOuidvgGRhckqSE2HfCUDMNXSZ5nEkmws6tEsqdxUsJyqqggRT8cWMPlfn9YWK0Yfvf82B3%2BaNcLCdbiU0J0O56tBaL3YiX9sIoy%2FY8bx6R7lp6rjTO2IVVcTfa6pjYf0C8xYq2ubUabwWwnYnRjBAPMjWZW12I%2BbV%2FdvEyy59SFBQzEwjUEtkgTFSpAnRp0zjmIwHlUZOOf7l31TW3KD0ckQFbykphd3DEhEw33jG6TLMD2j2O%2FfQMXoQMaiY4eBhSavXEmnFkrv8JTTs5fqN8hb1W9mAOpkrFxXfsomTZo4g66UyHFMX9qIS%2B%2FD3olXy4S6s6Ag3Z0PJ7rNXmDQC4GPXPhodX6QLzdWzknWcEu%2FwVe0KCEkCyL8a5lEio7a7qB3Z%2FJ6SYJaHSR7dX%2FmFnoYa1zixpxxGRVBdpypgCkudUbzdK91YYaCcsDPLZOxhvCChA3ohJIeEDBD8%2FwAeVbndOS6DM4LVEaQHbpOkOSELZK5I4xqmnz5nRH%2FTSW6PvMJ%2BDicoGOqUBcp%2Bq5TztX7uWYMV2gWyLFbJgd4HMFKIgcFqPsQCZH%2Fos60AexPGs7%2B6IZJoM%2FWKlN69y3alKvzGQy2kDMZfqRBey5eBeIbjY%2F%2BjCyJr4wPGXGxwxhaam%2Bs6bOVnAYLKlaoE%2BHlJsptfmb5Nu70dwRkwh4G4hkSpUb%2BV55EtVBc4hT9jgmuraUkTA2V4gHwQhDaVmrcOHSnLbFDVnNSSYfgJ%2BoiiT&X-Amz-Signature=ae8694441dbdd7787b96f4d334cf8e580ef4f92490c855521c51dfe2ef4ad9e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QUICAHO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAySkG8N9XVBSQjIva%2FEvfx9K8BqUYjmfM9onBI3CJ%2BcAiEA5oauE%2FKmwLl4cDD5O3pUBZYm9TLFc9C4CG2NyURr4Voq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDJavSf0Xxt0yBoyeCrcAxPjI%2BGAXwi3mXpgeo%2FEPz8ZnOUM9hj848bNVwlwO4Nhw83hcgbg%2FeNxfpTRDk7PoWkKHdAVeidRrgLaj51w1YqKzec6kqxH%2BUsm1WvftECPV3%2Fa%2BInRMh%2FveQOuidvgGRhckqSE2HfCUDMNXSZ5nEkmws6tEsqdxUsJyqqggRT8cWMPlfn9YWK0Yfvf82B3%2BaNcLCdbiU0J0O56tBaL3YiX9sIoy%2FY8bx6R7lp6rjTO2IVVcTfa6pjYf0C8xYq2ubUabwWwnYnRjBAPMjWZW12I%2BbV%2FdvEyy59SFBQzEwjUEtkgTFSpAnRp0zjmIwHlUZOOf7l31TW3KD0ckQFbykphd3DEhEw33jG6TLMD2j2O%2FfQMXoQMaiY4eBhSavXEmnFkrv8JTTs5fqN8hb1W9mAOpkrFxXfsomTZo4g66UyHFMX9qIS%2B%2FD3olXy4S6s6Ag3Z0PJ7rNXmDQC4GPXPhodX6QLzdWzknWcEu%2FwVe0KCEkCyL8a5lEio7a7qB3Z%2FJ6SYJaHSR7dX%2FmFnoYa1zixpxxGRVBdpypgCkudUbzdK91YYaCcsDPLZOxhvCChA3ohJIeEDBD8%2FwAeVbndOS6DM4LVEaQHbpOkOSELZK5I4xqmnz5nRH%2FTSW6PvMJ%2BDicoGOqUBcp%2Bq5TztX7uWYMV2gWyLFbJgd4HMFKIgcFqPsQCZH%2Fos60AexPGs7%2B6IZJoM%2FWKlN69y3alKvzGQy2kDMZfqRBey5eBeIbjY%2F%2BjCyJr4wPGXGxwxhaam%2Bs6bOVnAYLKlaoE%2BHlJsptfmb5Nu70dwRkwh4G4hkSpUb%2BV55EtVBc4hT9jgmuraUkTA2V4gHwQhDaVmrcOHSnLbFDVnNSSYfgJ%2BoiiT&X-Amz-Signature=14ec57acdbbc409e47f963b90941a7415531b1d3615aedce847fca7f5d134af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
