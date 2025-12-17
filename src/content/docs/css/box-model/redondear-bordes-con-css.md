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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIQYWDM7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFg2PFtpT2LwPuIkXh19cXequ9yqG137Sib8qVZmpkseAiEAobASjNQP0Jy1lqax9TxUHEIJycPpck%2Frn34r%2BT%2F5sW8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBv45EtyPjcDxti8%2FyrcA%2BAd3hNYX49X07vUK57QlxShNAzZ0PXR0lxka7UVztagoXSnKwazOoT4DpxIl7MwZkKYdTT%2BjcFYsF2PbpNIckAJFxlevtOSYNLjmrql5wkMD6qm1PStPP2buZGngdJj3fp6ELT8bxoEOu%2BlmEgiXZSi8QpecI2hFTTeq1zmJChtDJQ%2FlO4y96%2Bfi9jzon5eM6SKNuIq5rw2EM24CAAoHexL3E8czO58lNnTElvdybczq0MAc5qzCieVV4hiIcs50xyuCzYw3zMeFa2cVajpsMyE60up1c4gF7Uvxv1O2CEjlR%2FYDbs5vdgmbLJniCBna9WZn4hmE%2B1RKXVcuXHw%2BlXfbK3XQKTy7lxKednBBvBFBQKa2H6oHCIk5MvU78Ye33kZKgo4V0ASqQEOcmd%2F9daIujJWyPcoMAqbs85EqRA5CWIg%2BGnwomowhiIwv6rgnoxyoF%2BtVZojJVX7P1h1mTPplD2SfWQHKGoOED0DeHQmOksx9MsMpEdzxmaBt4EtQ1KiBlVslq0IeVW7WTWOpO2qbLNFu7xvajzV3NdXfAkG9wfn71JbdTghgVWJKmL6KuJvhaEZDAmMTKgjMh5CoMzBwAi4UmYMw0rUNPHbt%2FBjjbySaOl1OmOAUwHhMPG3icoGOqUBjDc1QRywpcraCveV%2BsuCwVJcQAmdtRKWtjHt8UwvziJWxtAa%2FmdftJ3p544KSumDyXmqYTKY%2FKU9wIfc4X2%2FhJtmnDkPGNuEmwywSRu5z%2BCEixe9KyiI5YfZr7z%2BY%2FWoAdcccGoL%2FFuDfgUfa95NMZUFVsCI22rNJCFsZlQpyaAr49wIkd5UV2dS293ydQlpeNYClik6fr5JqA4zB%2B0%2B3Zmt%2BId3&X-Amz-Signature=26c90e4c38bfa450365092ca80927a91481e47c038d4510f67ed4fe552b2e933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIQYWDM7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFg2PFtpT2LwPuIkXh19cXequ9yqG137Sib8qVZmpkseAiEAobASjNQP0Jy1lqax9TxUHEIJycPpck%2Frn34r%2BT%2F5sW8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBv45EtyPjcDxti8%2FyrcA%2BAd3hNYX49X07vUK57QlxShNAzZ0PXR0lxka7UVztagoXSnKwazOoT4DpxIl7MwZkKYdTT%2BjcFYsF2PbpNIckAJFxlevtOSYNLjmrql5wkMD6qm1PStPP2buZGngdJj3fp6ELT8bxoEOu%2BlmEgiXZSi8QpecI2hFTTeq1zmJChtDJQ%2FlO4y96%2Bfi9jzon5eM6SKNuIq5rw2EM24CAAoHexL3E8czO58lNnTElvdybczq0MAc5qzCieVV4hiIcs50xyuCzYw3zMeFa2cVajpsMyE60up1c4gF7Uvxv1O2CEjlR%2FYDbs5vdgmbLJniCBna9WZn4hmE%2B1RKXVcuXHw%2BlXfbK3XQKTy7lxKednBBvBFBQKa2H6oHCIk5MvU78Ye33kZKgo4V0ASqQEOcmd%2F9daIujJWyPcoMAqbs85EqRA5CWIg%2BGnwomowhiIwv6rgnoxyoF%2BtVZojJVX7P1h1mTPplD2SfWQHKGoOED0DeHQmOksx9MsMpEdzxmaBt4EtQ1KiBlVslq0IeVW7WTWOpO2qbLNFu7xvajzV3NdXfAkG9wfn71JbdTghgVWJKmL6KuJvhaEZDAmMTKgjMh5CoMzBwAi4UmYMw0rUNPHbt%2FBjjbySaOl1OmOAUwHhMPG3icoGOqUBjDc1QRywpcraCveV%2BsuCwVJcQAmdtRKWtjHt8UwvziJWxtAa%2FmdftJ3p544KSumDyXmqYTKY%2FKU9wIfc4X2%2FhJtmnDkPGNuEmwywSRu5z%2BCEixe9KyiI5YfZr7z%2BY%2FWoAdcccGoL%2FFuDfgUfa95NMZUFVsCI22rNJCFsZlQpyaAr49wIkd5UV2dS293ydQlpeNYClik6fr5JqA4zB%2B0%2B3Zmt%2BId3&X-Amz-Signature=fdf4ba1bce02fbecdaf5bf1495e34e87a2c3b56a47d831470969dfa7bb738b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
