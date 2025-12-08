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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U5B6ABZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAiC3JbDmKwC8DicbTzY6%2Fw2aDLKNUM9Q12twPqyshkAiEA%2B5bTV61HyFcb%2FdrCIAdX6qhqiFtyjqIppFIpbCEIFw4qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKDqq%2FKaUbTSwXEmVSrcA7dHVJvF7icdzGTTLMiVzWIHzxMzEXokNF1r4aUx8C8bd68LjvD60oJxhC5zuPSGUunCBWgTAnp1Mlp3bZDIEFpF%2F%2FKG9xDxhzl2YM1Z%2Bjcp0cZ3qXjJn%2B21%2FOe2fmaZ%2FHy0O1gBseuzuATX%2BVFF4OfCyAbiLXNW4J7vcaNUdxLFpffISYDXJI3Geb26iCXx7%2BL4jo69%2BWyxq%2Bhv8bL1kVDCaz2Bb7w29vaRDL4nV%2F9jeCmkfXt3%2FCOsOH3%2FRjfMNGjUcXJINi27nOcnEKwq0PUu80FYghq9zrrk8WLRcf2ZC1Fm4E6JvUFt8cr4%2FWTSS9nYVez6IYoQrrklWrUvSPrUJ12UyGgRignpiUGQL7KsOi5dCLCulffQZGM2j29XlurPMMjaKqxACpIN3yrFMKOKEStrhIM2ePAVlqHeMWCL5CnTpezU3VVPP%2Bj5rHmGVs3f8AybvH4n%2FRRkqRQ0k7u2m97PI%2FA1cNcWzpHTxoCI5C8Pw%2BGnuY5CdG7MOICpb2rMFY6BjmcILGEIIpWA9gj7%2Bbi1wBh6KzSiACPNuLVp72EkNH7LR9Lh6qd4I8V2hmfWDkkUYLA9HQ81FXVJRvsRdyaCbTuTDpGJ0xC2JSGW3GOqXVCZiE4NYx4iMNfH28kGOqUBGewEFVQg9bJMryIu5K81iMsUZQSRbMHPfjyvRybaUkMxQzm01s6i3TKfp43H2QNd3Hd6e6ghSnM%2FFm%2Bfeq59lb%2B8pgdxQJS2GKapRIRDsCRka4uAfBvEHvA3WoXs0vVcP6Ke3d3iBImYbWS6552aT3r8u3na8we337cb7nM8eylwWzH1kwljuHBZ2gBLpCDOwTVrv1Tn6QnQ%2FJ5cyfgWYSwXQxb9&X-Amz-Signature=80a5b598c0862bf4946139250b7f45f0da698067edf75234a5f576030f53d7af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U5B6ABZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAiC3JbDmKwC8DicbTzY6%2Fw2aDLKNUM9Q12twPqyshkAiEA%2B5bTV61HyFcb%2FdrCIAdX6qhqiFtyjqIppFIpbCEIFw4qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKDqq%2FKaUbTSwXEmVSrcA7dHVJvF7icdzGTTLMiVzWIHzxMzEXokNF1r4aUx8C8bd68LjvD60oJxhC5zuPSGUunCBWgTAnp1Mlp3bZDIEFpF%2F%2FKG9xDxhzl2YM1Z%2Bjcp0cZ3qXjJn%2B21%2FOe2fmaZ%2FHy0O1gBseuzuATX%2BVFF4OfCyAbiLXNW4J7vcaNUdxLFpffISYDXJI3Geb26iCXx7%2BL4jo69%2BWyxq%2Bhv8bL1kVDCaz2Bb7w29vaRDL4nV%2F9jeCmkfXt3%2FCOsOH3%2FRjfMNGjUcXJINi27nOcnEKwq0PUu80FYghq9zrrk8WLRcf2ZC1Fm4E6JvUFt8cr4%2FWTSS9nYVez6IYoQrrklWrUvSPrUJ12UyGgRignpiUGQL7KsOi5dCLCulffQZGM2j29XlurPMMjaKqxACpIN3yrFMKOKEStrhIM2ePAVlqHeMWCL5CnTpezU3VVPP%2Bj5rHmGVs3f8AybvH4n%2FRRkqRQ0k7u2m97PI%2FA1cNcWzpHTxoCI5C8Pw%2BGnuY5CdG7MOICpb2rMFY6BjmcILGEIIpWA9gj7%2Bbi1wBh6KzSiACPNuLVp72EkNH7LR9Lh6qd4I8V2hmfWDkkUYLA9HQ81FXVJRvsRdyaCbTuTDpGJ0xC2JSGW3GOqXVCZiE4NYx4iMNfH28kGOqUBGewEFVQg9bJMryIu5K81iMsUZQSRbMHPfjyvRybaUkMxQzm01s6i3TKfp43H2QNd3Hd6e6ghSnM%2FFm%2Bfeq59lb%2B8pgdxQJS2GKapRIRDsCRka4uAfBvEHvA3WoXs0vVcP6Ke3d3iBImYbWS6552aT3r8u3na8we337cb7nM8eylwWzH1kwljuHBZ2gBLpCDOwTVrv1Tn6QnQ%2FJ5cyfgWYSwXQxb9&X-Amz-Signature=10ce2ed9564ffcf8d8ed97cfb397619fe982d6aec11b0a08a8ee9792c1681c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
