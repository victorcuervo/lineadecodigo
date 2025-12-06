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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTEFKJL3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAK9yzkJY9Haa7IkHB1MCBJ2JL2fbt2Sc850LSG0cpqZAiEAzcWZTswMFtASuhLuHoMBnxwKwGeNwMKS6kbjkTIudfAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIZ1A%2FVaiylWAx%2FSMCrcA%2BrqEy4S4qnQ8pogHWoU0ZUo0E4EvsH4Qxhhp4qTG1ulH%2FBjzmbdyi1Hw7XVLM%2B30rnUNHgMeqDWdV%2FctUDpHJ5gUdJfhMR9Oz6quCnkexIGKoQ8GLAJC9UWK0v2nCmgMPbHgLgpxr44%2FzhuQYrJvCtlYC2M3ObJJloDztJrlJpye6NJdTGFhspQk5%2BMCgQMsFp5gvMTD5zrpNNsWo182nq6z%2Ba2Ora7qiPDMluDQnLjNEwT8s7IxWkPqy3uzle4rVUt7dUDyCLKxlhVGzbTdRxcq5Nslix2NL96ly%2FbFydKDf6gL3WIjZmOlI4VhnPmCy5f7u44X0BbLuw0SZdrO%2Fg913GEGKDScr6A8siKs%2BBvbBsVE4%2F6xp2zyqmIL80rTSi%2Fhna4TY%2F%2BqZDiVDKKTxuuY6aM3%2FvEcOOo17noZ4RSpUZYP2bHYRDRvgAiIOQ1Z2CFeQCa5gNcW%2FDCPEeSw%2Fb8Jg4sObb3WuJrrsxd9WBDCJxhiitaVA0Un4i5XWCGXu9z63yYsmo9NSNY8EO1RQmf0HYI54RtgzorwTYdEdxPuBLPtuBrclkhjEJ1ajHMR64XDPZjS4gSdIs9Aeq5hNS%2Bhhk3TvGeLgElwqvWkesyG%2By2ncdSwgr0VjN0MJbrz8kGOqUB7SQ6bytlNjNpXdBssGCfr55%2FZhvBy93nKDQ3k3cmmQZJK6snDg0C42V%2B59znFyq9hrA0rfRa8RPft2gHkjbKvH1fdP4Q1X7K9B3UvR6jnDS5Ht6eF8n%2FMwzqnHnM07n%2FUbsZaz%2FW6e6TYToRPXsYvndT6od8EmK3zoZC1pffgZBrjmth%2FSavhMGrftbfYJuVaEEOEfyhqJ7EI%2FyJOM6drTafmt8s&X-Amz-Signature=328f4fbcb9482ee39fac77fcef1f843cfe7dbce7c5faffbf83cdf220aef035c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTEFKJL3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAK9yzkJY9Haa7IkHB1MCBJ2JL2fbt2Sc850LSG0cpqZAiEAzcWZTswMFtASuhLuHoMBnxwKwGeNwMKS6kbjkTIudfAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIZ1A%2FVaiylWAx%2FSMCrcA%2BrqEy4S4qnQ8pogHWoU0ZUo0E4EvsH4Qxhhp4qTG1ulH%2FBjzmbdyi1Hw7XVLM%2B30rnUNHgMeqDWdV%2FctUDpHJ5gUdJfhMR9Oz6quCnkexIGKoQ8GLAJC9UWK0v2nCmgMPbHgLgpxr44%2FzhuQYrJvCtlYC2M3ObJJloDztJrlJpye6NJdTGFhspQk5%2BMCgQMsFp5gvMTD5zrpNNsWo182nq6z%2Ba2Ora7qiPDMluDQnLjNEwT8s7IxWkPqy3uzle4rVUt7dUDyCLKxlhVGzbTdRxcq5Nslix2NL96ly%2FbFydKDf6gL3WIjZmOlI4VhnPmCy5f7u44X0BbLuw0SZdrO%2Fg913GEGKDScr6A8siKs%2BBvbBsVE4%2F6xp2zyqmIL80rTSi%2Fhna4TY%2F%2BqZDiVDKKTxuuY6aM3%2FvEcOOo17noZ4RSpUZYP2bHYRDRvgAiIOQ1Z2CFeQCa5gNcW%2FDCPEeSw%2Fb8Jg4sObb3WuJrrsxd9WBDCJxhiitaVA0Un4i5XWCGXu9z63yYsmo9NSNY8EO1RQmf0HYI54RtgzorwTYdEdxPuBLPtuBrclkhjEJ1ajHMR64XDPZjS4gSdIs9Aeq5hNS%2Bhhk3TvGeLgElwqvWkesyG%2By2ncdSwgr0VjN0MJbrz8kGOqUB7SQ6bytlNjNpXdBssGCfr55%2FZhvBy93nKDQ3k3cmmQZJK6snDg0C42V%2B59znFyq9hrA0rfRa8RPft2gHkjbKvH1fdP4Q1X7K9B3UvR6jnDS5Ht6eF8n%2FMwzqnHnM07n%2FUbsZaz%2FW6e6TYToRPXsYvndT6od8EmK3zoZC1pffgZBrjmth%2FSavhMGrftbfYJuVaEEOEfyhqJ7EI%2FyJOM6drTafmt8s&X-Amz-Signature=d202281550c370a1ffb2f0c6b3281b891d944b0fd2d0a2f24577efe13c6501a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
