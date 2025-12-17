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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOEU5LP2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf1LTQ3c%2BXGZpV%2BI3BlJszrQb301LctYKFJMf%2BOIIHmAIgTiTVzs11ULecHGUwYbhn6Wh0kojrFHJLA0yEoIQviiYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDzEqIbfKmbPWw6%2FoircA8f%2Bp3AiDXCgfr26RuEygepcPpJjux5cnP1OhprKTzAKhiiifEDYco%2BmTYvHurQiPhXF2Oo7nidL82t%2BmwMPd6oiV0sq0rK28dWK3KqoYqAQk4RmNyFn4Dnl4Z%2BTeSFl0%2FxAXdgQAPkds29YpF6fDPzSNbVfMnM4H1bls%2F1WMEmsIWYRhnXrv8CAsegX3GA7U789SZuW%2BGwZysrg5r9eANobmMI2kCR0ynxf%2FcF%2B8UH7%2BFxdeyPUOQmNir1VRhqjnX0IpOca%2Blrql%2BBX8%2F2zlmCh%2Bu947%2FsgBqswddqeI4nDBQdlrYISPdGlDQmj5omjM%2BglriJAdwDO2wtv0mTug2FJ0B3fQkLPdbf%2FcLVjioQODFASE6uz%2Fidk7fhoe1SdpTSGgC4zl3AUatqyoJdruT6uHXPnj6dYSMn7O2TZ0WpPQERw%2FeUo%2FLVFQtEuONZc3TA%2B8yINAg3RzjqXJvLJmGYiL8pMExn%2F6NCx3jq10wxZA3MLamMVPviY4ecpOgla%2FDdl3wOeRUVZav3PAyGiCven8WLEbF4rpkruhzsRY362Xsjb4oktWtmGHsyqPL2z6xM76eBpsxCkZz9TSMXNr7fDC%2FPqAcUdLBlZAZYauRRj2Ix3B%2FMaiPe3GZlLMO7wicoGOqUBR83lHwwBddynIuQowCJckc5kyC27r7klmmjL6WeztogZg6MKRRcLttfwCvyB3kcv%2Bb45b9pWe2oBvdtiP%2F0rA%2BSWAZqSq%2BNGW3aQKptIdxA6g3ZtJWlj3ypTBFCb%2BINPoFIh3slX0X%2BsZdEBeSf83TosMC4cGVI7vi%2Bnzvr3UhjJgdjgyZXDM%2FrhihX0N4VdoiqxWXdTo7c53SwAji9PTqK4Lmjp&X-Amz-Signature=f36636b5a6dba92d2a2f5cb32b617925aebd64c96e0ca2bb2c8b5bb40d2a22ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOEU5LP2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf1LTQ3c%2BXGZpV%2BI3BlJszrQb301LctYKFJMf%2BOIIHmAIgTiTVzs11ULecHGUwYbhn6Wh0kojrFHJLA0yEoIQviiYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDzEqIbfKmbPWw6%2FoircA8f%2Bp3AiDXCgfr26RuEygepcPpJjux5cnP1OhprKTzAKhiiifEDYco%2BmTYvHurQiPhXF2Oo7nidL82t%2BmwMPd6oiV0sq0rK28dWK3KqoYqAQk4RmNyFn4Dnl4Z%2BTeSFl0%2FxAXdgQAPkds29YpF6fDPzSNbVfMnM4H1bls%2F1WMEmsIWYRhnXrv8CAsegX3GA7U789SZuW%2BGwZysrg5r9eANobmMI2kCR0ynxf%2FcF%2B8UH7%2BFxdeyPUOQmNir1VRhqjnX0IpOca%2Blrql%2BBX8%2F2zlmCh%2Bu947%2FsgBqswddqeI4nDBQdlrYISPdGlDQmj5omjM%2BglriJAdwDO2wtv0mTug2FJ0B3fQkLPdbf%2FcLVjioQODFASE6uz%2Fidk7fhoe1SdpTSGgC4zl3AUatqyoJdruT6uHXPnj6dYSMn7O2TZ0WpPQERw%2FeUo%2FLVFQtEuONZc3TA%2B8yINAg3RzjqXJvLJmGYiL8pMExn%2F6NCx3jq10wxZA3MLamMVPviY4ecpOgla%2FDdl3wOeRUVZav3PAyGiCven8WLEbF4rpkruhzsRY362Xsjb4oktWtmGHsyqPL2z6xM76eBpsxCkZz9TSMXNr7fDC%2FPqAcUdLBlZAZYauRRj2Ix3B%2FMaiPe3GZlLMO7wicoGOqUBR83lHwwBddynIuQowCJckc5kyC27r7klmmjL6WeztogZg6MKRRcLttfwCvyB3kcv%2Bb45b9pWe2oBvdtiP%2F0rA%2BSWAZqSq%2BNGW3aQKptIdxA6g3ZtJWlj3ypTBFCb%2BINPoFIh3slX0X%2BsZdEBeSf83TosMC4cGVI7vi%2Bnzvr3UhjJgdjgyZXDM%2FrhihX0N4VdoiqxWXdTo7c53SwAji9PTqK4Lmjp&X-Amz-Signature=92731e9d370565c81557177ebbda88a8d0c3ee0407c4cbfb4e27c3d64a123c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
