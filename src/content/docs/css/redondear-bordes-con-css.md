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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OPZZ5M3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaWYuPyZdzkUSy9KzyMFIz08vPKHHIa5IQCVGw%2FzqQ5QIgCveOSVJabTrHsGYPqL91AFLIJlkT%2Flx091cNJ8wXO58qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG59lwQYPSNQWfhCSrcA8ORzBTb7FEsi81M0XslUt5klRK%2F9QsuG%2B87v6bhbeWyWoqjm7BzAQ46vlMiJkz8OQWynVN%2FvCf5%2Bigun%2FP3WqB%2BLuRMhki2AKq%2Bqq8FYu%2B1H%2FDcnGjv7uBTau2DbpXtNDp5mcEk%2BC%2FJ35vmeVxbHDRnq4aRR8g30f%2B8OxtT%2BGs9jNHxUj1ZNOOJUYU8zGnCzeQNpV1e7BzS%2FzaxOnMy5ACcTfy5JVnl4YX3BHWDFZ7vYAvvVAOT4u0LDZuG%2FRPY8a2D%2FbVZ4JYqAhE14yOvSrTYKZorQHVrpU2tx5t9N6hMMH%2FGBtpHkFpVMTfc%2FomXiGGif2jAnSChYihbrMxQgCDlMxqt0TOO0kMGLP06FNZ5Wsg0JGWaB%2BFbDnCj06OWDsaRwUPuO1nPn41OPtmALKJOvVcx6yryr7T0Hgu9FUK2mUSrdL4wakJSMUKSDsWR2i%2Bh87AE7746clRq3f0qybcvmzQlkaQraGpORr2yfbNkyoZ91HMADmU%2Bknd0FoDVXft38acI3JVx3a9w9A6HFINgWWJK1vU%2FYJUqFHzC6BY5qi%2Fgm0K1ZbpRu%2BifPCzxbteCoTqVNsxgKemFfDxtQBbWNE0O%2FF%2BaNCyOWY7u0p1KbSiKNkrsCEjl8uGqMJDu2ckGOqUBHWGDNx%2BLsDjFJ%2B5F%2BoJJt16n7NY10aLlbohcjs9kzKmMzBsuEzUUwTz6YDJELnPe%2BKkI1lHbein8Ih2BvtPZd33F43uiJolrIsWFT1UA1b8MPAP%2BuiJsfQfNgbnss4H2T4UnHAj%2B90I59VFj52tyboMFZdrG3JAAM1XBFxJe1tXVmpZz94KPfBmJlsI279K4Fn%2FEEi6i%2FK4xsEbjsKUF%2FenPokd6&X-Amz-Signature=e52e7395f8684fc1a22c6b0cd9c270b45799fe78eb40227d97b9abd2a87ac70b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OPZZ5M3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaWYuPyZdzkUSy9KzyMFIz08vPKHHIa5IQCVGw%2FzqQ5QIgCveOSVJabTrHsGYPqL91AFLIJlkT%2Flx091cNJ8wXO58qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG59lwQYPSNQWfhCSrcA8ORzBTb7FEsi81M0XslUt5klRK%2F9QsuG%2B87v6bhbeWyWoqjm7BzAQ46vlMiJkz8OQWynVN%2FvCf5%2Bigun%2FP3WqB%2BLuRMhki2AKq%2Bqq8FYu%2B1H%2FDcnGjv7uBTau2DbpXtNDp5mcEk%2BC%2FJ35vmeVxbHDRnq4aRR8g30f%2B8OxtT%2BGs9jNHxUj1ZNOOJUYU8zGnCzeQNpV1e7BzS%2FzaxOnMy5ACcTfy5JVnl4YX3BHWDFZ7vYAvvVAOT4u0LDZuG%2FRPY8a2D%2FbVZ4JYqAhE14yOvSrTYKZorQHVrpU2tx5t9N6hMMH%2FGBtpHkFpVMTfc%2FomXiGGif2jAnSChYihbrMxQgCDlMxqt0TOO0kMGLP06FNZ5Wsg0JGWaB%2BFbDnCj06OWDsaRwUPuO1nPn41OPtmALKJOvVcx6yryr7T0Hgu9FUK2mUSrdL4wakJSMUKSDsWR2i%2Bh87AE7746clRq3f0qybcvmzQlkaQraGpORr2yfbNkyoZ91HMADmU%2Bknd0FoDVXft38acI3JVx3a9w9A6HFINgWWJK1vU%2FYJUqFHzC6BY5qi%2Fgm0K1ZbpRu%2BifPCzxbteCoTqVNsxgKemFfDxtQBbWNE0O%2FF%2BaNCyOWY7u0p1KbSiKNkrsCEjl8uGqMJDu2ckGOqUBHWGDNx%2BLsDjFJ%2B5F%2BoJJt16n7NY10aLlbohcjs9kzKmMzBsuEzUUwTz6YDJELnPe%2BKkI1lHbein8Ih2BvtPZd33F43uiJolrIsWFT1UA1b8MPAP%2BuiJsfQfNgbnss4H2T4UnHAj%2B90I59VFj52tyboMFZdrG3JAAM1XBFxJe1tXVmpZz94KPfBmJlsI279K4Fn%2FEEi6i%2FK4xsEbjsKUF%2FenPokd6&X-Amz-Signature=94aa1f0ab381849caee8864c20bfad347537a90fde5311226f1d6a615420fed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
