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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IRA6YBM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0%2FP1v9iubEkhvKw9B8rqo2ocBOMZ%2BorZrGxVSSyhyrAIgI41pEHWtcAeq85Uhl%2BpYdMKNVXAQVKtMvpwVL%2FkF%2BlYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJI4CyJuABekDYHtIircA4XWWa4pznsEs6i5WMdUGbaCco7TizOm3aSkTM8A9G6OwQdJ%2Fu9bI3Ge65VIyRLD04xcTDB0xMEX7Z3C%2F3Sf%2Fa5jH9lBGHXKTxK12uGXKjyvCy4IYNAI3pJrgxoVIoFFuniYvLnfC0tPtyvBlb6DUWEt8fAjhx5tMx5atFI%2FXhrQE4iSOwlJQ%2B%2BaVHtMP9aTRWYdo%2BrcENcBPvzSOXxP57hJYpGLYmZGhU4qVcT%2Fqi22mqdzSKEzZfp1NEeazSIKbigjDkYL2oKYckCzhmD%2FQxe67oo6vSyMw8ztrk%2F0FM%2FkpQHEEj44bd7BUhep8EGe%2B4uEAXGvazPywtJW1alaOQ%2FvUY1S8xcll1x9My1orr2IkTRNzXOzqDrAKRI2wJ44fQSDFUdzXS0zpAaSh3pwg4KufGaTbBiDw69IMKJeHE5ZekN3ITGr9NfFGuuHSW0VmL85%2Bum2Rfgf3tN6NkDltFF%2BMAw%2F2brx8ObOfu51R2c26NgObDBL9Rr2D3EERJPlerWQWOyjy6MA01MAFu%2Fgh4uYkANgotLL0TNUdqs9Ipn4XFClaAPRuz%2FCpk9WfmtbIyj4v6Et1uDrdaK7rdrQ9WazdWdfkaN7ToyqvZYyXQI%2B9T1auYnuLWPReRSqMMOLjMoGOqUBDfAWJIPSAY%2B%2Fy3Sx%2ByfeP2HZDy8UTgvUNiK9WmMP2pL%2B8XniLgG07rnjQ2UmdTRln1OXVyPM5kJfWcSMh%2FoDpYjkWggbloZuiIIVwmuHDUA31A9m8RcLL6Efg7FvoyR8IgmfoE8Ga1U5Dg4Fzrf60LXQICCniU6kluIV3stygrob4ank%2F5zQ%2FcON5vdBUPUGGreqi8Y9z4EZJPM0q%2FhV%2FbXjbAyi&X-Amz-Signature=2d27d93bb40b9c62050ff9dbc0783c3d8ac4fc90e239dc0f9aff7d8f70316a5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IRA6YBM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0%2FP1v9iubEkhvKw9B8rqo2ocBOMZ%2BorZrGxVSSyhyrAIgI41pEHWtcAeq85Uhl%2BpYdMKNVXAQVKtMvpwVL%2FkF%2BlYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJI4CyJuABekDYHtIircA4XWWa4pznsEs6i5WMdUGbaCco7TizOm3aSkTM8A9G6OwQdJ%2Fu9bI3Ge65VIyRLD04xcTDB0xMEX7Z3C%2F3Sf%2Fa5jH9lBGHXKTxK12uGXKjyvCy4IYNAI3pJrgxoVIoFFuniYvLnfC0tPtyvBlb6DUWEt8fAjhx5tMx5atFI%2FXhrQE4iSOwlJQ%2B%2BaVHtMP9aTRWYdo%2BrcENcBPvzSOXxP57hJYpGLYmZGhU4qVcT%2Fqi22mqdzSKEzZfp1NEeazSIKbigjDkYL2oKYckCzhmD%2FQxe67oo6vSyMw8ztrk%2F0FM%2FkpQHEEj44bd7BUhep8EGe%2B4uEAXGvazPywtJW1alaOQ%2FvUY1S8xcll1x9My1orr2IkTRNzXOzqDrAKRI2wJ44fQSDFUdzXS0zpAaSh3pwg4KufGaTbBiDw69IMKJeHE5ZekN3ITGr9NfFGuuHSW0VmL85%2Bum2Rfgf3tN6NkDltFF%2BMAw%2F2brx8ObOfu51R2c26NgObDBL9Rr2D3EERJPlerWQWOyjy6MA01MAFu%2Fgh4uYkANgotLL0TNUdqs9Ipn4XFClaAPRuz%2FCpk9WfmtbIyj4v6Et1uDrdaK7rdrQ9WazdWdfkaN7ToyqvZYyXQI%2B9T1auYnuLWPReRSqMMOLjMoGOqUBDfAWJIPSAY%2B%2Fy3Sx%2ByfeP2HZDy8UTgvUNiK9WmMP2pL%2B8XniLgG07rnjQ2UmdTRln1OXVyPM5kJfWcSMh%2FoDpYjkWggbloZuiIIVwmuHDUA31A9m8RcLL6Efg7FvoyR8IgmfoE8Ga1U5Dg4Fzrf60LXQICCniU6kluIV3stygrob4ank%2F5zQ%2FcON5vdBUPUGGreqi8Y9z4EZJPM0q%2FhV%2FbXjbAyi&X-Amz-Signature=4ca72c379fe80157c3935497ae361e9106b685aba864b7ca70deb3edd8969fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
