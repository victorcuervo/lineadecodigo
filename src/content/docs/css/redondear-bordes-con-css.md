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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGWW5E37%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBowg712s6yjttOkWDCOxjkObFNYKYf74Hz2Hge8GNGAiEA4R%2Bcz5xMyzK3unh%2Fkh%2BcfRM0Q6LKp6UPKYfiN%2BPPJO4qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdxaZkquDm%2FE4KmIircA3COFO8L%2FlhbI%2BXw3kahU9TaURxjDq%2B05ESgTLN4ShR%2B7fJwci2Yp%2BAuNC0tzSTBha0Kt%2FHv%2B38FBXxL3Mxf%2BJX3KH2WultgdM58RnWq2MWZrmbrAXmCS67FaXBllM9XAs998VZ6EtqPUrQcSJCGN3yBogRZ3UDm4AFHT1owIU3gaE4o4AfUyFzl7xMcPzlm6c6R1QVcXID0IP1PptSzK2RtB0eA6ywaLn62TZa12CqXUhLNIehPEpJzJUdWEtLbm652%2BEnd%2B%2FEFd8rnaKf9FNR4h%2FvDBzY%2FkudJyB3qeqTlbhn2rCLlu3Vmzt8oAVFAemb0SP1uBmc1UZ2ZrOCAzZXjIFiewgwaRAm1yTQlFRnsKK%2B2HLvaOll4bz9K7Lvu60SRcW%2BEzK9EYz05VX3yrF9gA0ZWxrmDK7kZ1lABi53rxZ1vUp%2FNxTRLO3l5VKNI3%2BFAipndliH8dxPBdJLrA5qwndrTtpExCQZ7X%2BIDy%2FW%2Fe7fMtiyxf4uvFj%2B17TW1nIn9j%2Bw6Qs3hN1t%2FrOY%2FQBRyQBDow%2FDobVQbJMZH%2B4yKxEqfeOZGbXe5Am8IgWp6Yi%2FVVCbx7JeLXvZL7TyFGwyec2nJTjWvwMlzVmXfpVj2h2pDsw2IPo%2Bgm4D9MJfC28kGOqUBftcbr0s56nQVoGEg%2FRFnTs2wBkSlGP2ZET9g0PL35SCs9R7%2F3WGJ4GxIqolQqHzFSxgZZltXmXhwUrBWR0RIysXyr3eZZQRMsJN3PJzThG6KKEM8v1LYzdO%2Blpxw47sUbbEF2ymuz%2B8tRIf7%2FYX%2Fy40ghSBm4RWLuDte5IjRBe6pfa50dxkPiriES1XgdGdAa1eXudlyb10bWaA%2FoW9d9T6WAS60&X-Amz-Signature=69879cb5254971c66876b15950b7c5950cb8d05e7dd6926329f5e503e3507f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGWW5E37%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBowg712s6yjttOkWDCOxjkObFNYKYf74Hz2Hge8GNGAiEA4R%2Bcz5xMyzK3unh%2Fkh%2BcfRM0Q6LKp6UPKYfiN%2BPPJO4qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdxaZkquDm%2FE4KmIircA3COFO8L%2FlhbI%2BXw3kahU9TaURxjDq%2B05ESgTLN4ShR%2B7fJwci2Yp%2BAuNC0tzSTBha0Kt%2FHv%2B38FBXxL3Mxf%2BJX3KH2WultgdM58RnWq2MWZrmbrAXmCS67FaXBllM9XAs998VZ6EtqPUrQcSJCGN3yBogRZ3UDm4AFHT1owIU3gaE4o4AfUyFzl7xMcPzlm6c6R1QVcXID0IP1PptSzK2RtB0eA6ywaLn62TZa12CqXUhLNIehPEpJzJUdWEtLbm652%2BEnd%2B%2FEFd8rnaKf9FNR4h%2FvDBzY%2FkudJyB3qeqTlbhn2rCLlu3Vmzt8oAVFAemb0SP1uBmc1UZ2ZrOCAzZXjIFiewgwaRAm1yTQlFRnsKK%2B2HLvaOll4bz9K7Lvu60SRcW%2BEzK9EYz05VX3yrF9gA0ZWxrmDK7kZ1lABi53rxZ1vUp%2FNxTRLO3l5VKNI3%2BFAipndliH8dxPBdJLrA5qwndrTtpExCQZ7X%2BIDy%2FW%2Fe7fMtiyxf4uvFj%2B17TW1nIn9j%2Bw6Qs3hN1t%2FrOY%2FQBRyQBDow%2FDobVQbJMZH%2B4yKxEqfeOZGbXe5Am8IgWp6Yi%2FVVCbx7JeLXvZL7TyFGwyec2nJTjWvwMlzVmXfpVj2h2pDsw2IPo%2Bgm4D9MJfC28kGOqUBftcbr0s56nQVoGEg%2FRFnTs2wBkSlGP2ZET9g0PL35SCs9R7%2F3WGJ4GxIqolQqHzFSxgZZltXmXhwUrBWR0RIysXyr3eZZQRMsJN3PJzThG6KKEM8v1LYzdO%2Blpxw47sUbbEF2ymuz%2B8tRIf7%2FYX%2Fy40ghSBm4RWLuDte5IjRBe6pfa50dxkPiriES1XgdGdAa1eXudlyb10bWaA%2FoW9d9T6WAS60&X-Amz-Signature=43bd53eee21b2b8ce2aa8f67df8b71c3b9272e84ea6abe48879fee768d671778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
