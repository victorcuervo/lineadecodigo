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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLN6VWBH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyiOiqJg2ttTIxE3TR3R6mWVzCzFXPJoVNtx0bnrwThAiEAtfSyAys1%2FVrLuVA9oodMxEjX4AkSFzTMRHkSP%2BqjF%2FsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLD7jMrt8AzubCLjircAx8%2F5p4KyR6iFbLImd2ONBr%2FhQNJzoXzAxN7rdxEwGaO4ojbip6sv61zo2euo%2BDmCl5vc%2BLjXP5RDcY%2Fcd2brNuGsHklH20aP1Gxxlzsv776Q9o%2Fbz7bRR62zNHaz6RAKp8Hpda4Prb396EGlTZS3sfPxvtqn9FDzrGL%2BNBZHUe7xx29UGQ6zW%2BwpEijgs1jf7k%2FY8EiArKaqlEAOsMviqP%2F62VUF3tpPVrrt9h11Qb0LH1U0nZdGJ9u231MwyDS1hh34gJenyy4tAsbNaooMUnJnPEWK3MhL2VzKSLT%2BhgMKZwUZOdyUB2JRe0eu2rFAJijy1KsZrFlTnmbORfwrOM1FqRhCOctCKB6psHn%2FNHcG2q%2Ff9xZAcLW6T12aJVAZvPQBauIOySYYkRnD5mLCjUkgoG1xhN2SiIITNZhV%2BZn8L02teDP4696y1cq%2FUgQSkCMsE7FLXTVCbnRJsApZNN%2FMhDzLx%2B3kY7HH7t617bHNhN8VSF0sFbF1IB2AiPasn7dpRT2tIeU%2FQVtC%2FHTHGHXC5dfktWzRZBhPgGMHsLr6ON0EF8d60UKwh02RSw1cHHwYqHuWoUXiHHNgauPDOgDQ6GyLpFho5H2Bv3ks0p58pX3vA0XVP95HsC8MIvQ2ckGOqUBywk6s3m9C2J%2BNDTFCTrPhmmzwXLdvT0FPC2aORhefs15S43cV%2BRp4RNJrpu0eByqF11WxcuZG2MNhU6DzfQXgp0KS54F3nsVappaUyarpbqet%2BM2OL6kDbboIPo6mzxzh9tRlhel7A07AlzOd2Tz%2BIigLRBTGlrcDpWWo9%2F9UayrUE8NuAVINNeKweMmaC1FmCcik5jl%2BMkTNSkFkWT%2BQGBu3GqK&X-Amz-Signature=837cbd037efbe260a830c97eb9a0967f3eda1cbc69d8d382f5d0c59f5316f540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLN6VWBH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyiOiqJg2ttTIxE3TR3R6mWVzCzFXPJoVNtx0bnrwThAiEAtfSyAys1%2FVrLuVA9oodMxEjX4AkSFzTMRHkSP%2BqjF%2FsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLD7jMrt8AzubCLjircAx8%2F5p4KyR6iFbLImd2ONBr%2FhQNJzoXzAxN7rdxEwGaO4ojbip6sv61zo2euo%2BDmCl5vc%2BLjXP5RDcY%2Fcd2brNuGsHklH20aP1Gxxlzsv776Q9o%2Fbz7bRR62zNHaz6RAKp8Hpda4Prb396EGlTZS3sfPxvtqn9FDzrGL%2BNBZHUe7xx29UGQ6zW%2BwpEijgs1jf7k%2FY8EiArKaqlEAOsMviqP%2F62VUF3tpPVrrt9h11Qb0LH1U0nZdGJ9u231MwyDS1hh34gJenyy4tAsbNaooMUnJnPEWK3MhL2VzKSLT%2BhgMKZwUZOdyUB2JRe0eu2rFAJijy1KsZrFlTnmbORfwrOM1FqRhCOctCKB6psHn%2FNHcG2q%2Ff9xZAcLW6T12aJVAZvPQBauIOySYYkRnD5mLCjUkgoG1xhN2SiIITNZhV%2BZn8L02teDP4696y1cq%2FUgQSkCMsE7FLXTVCbnRJsApZNN%2FMhDzLx%2B3kY7HH7t617bHNhN8VSF0sFbF1IB2AiPasn7dpRT2tIeU%2FQVtC%2FHTHGHXC5dfktWzRZBhPgGMHsLr6ON0EF8d60UKwh02RSw1cHHwYqHuWoUXiHHNgauPDOgDQ6GyLpFho5H2Bv3ks0p58pX3vA0XVP95HsC8MIvQ2ckGOqUBywk6s3m9C2J%2BNDTFCTrPhmmzwXLdvT0FPC2aORhefs15S43cV%2BRp4RNJrpu0eByqF11WxcuZG2MNhU6DzfQXgp0KS54F3nsVappaUyarpbqet%2BM2OL6kDbboIPo6mzxzh9tRlhel7A07AlzOd2Tz%2BIigLRBTGlrcDpWWo9%2F9UayrUE8NuAVINNeKweMmaC1FmCcik5jl%2BMkTNSkFkWT%2BQGBu3GqK&X-Amz-Signature=c4c5ca2c9da136e0d01cc95e609e05c9cebf02d300fe77ef9e52c6bcd26be3b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
