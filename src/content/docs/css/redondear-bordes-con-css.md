---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYC5J7CS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC0f5JUH6%2FRm85IpDCTWY69y8hBdurbk7bwler5jrD9GAIgXfq%2FQvTZj5czkpSlhKb9uj8h1RD%2FOHLpUZVknFneXsgq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDM%2FFA8PDu0j%2BZVGflCrcA%2BOMstE84bFLLI2y1sDdfnFmVFfQoQZpSCKRb4SN5tU07TFIrfvvGOHjst%2Fl5EPcfjGTCmBtkB8fzm5bfc%2FQ8kGX%2FsuhaQQET99k6a7P%2FoWCzpmj4eFw%2BUOfaNapqb%2FhTFisp2mr4FPY1rZfowJcAM1sSThGP5IYg4eUeZwhf2Gl76boe5vtmT63VkKsZPqYvvpwCc4Qp9zrGzU4w0YEQLpA%2Bp17k3y9IAcYCf5E378dmWYTn9Zx62oWuRliUFRtIa7dshDJ6zkOi8dWVkIUoM3ORn2DMr34A%2FYg6DRdbz1264Eck483%2B9qw55Le4qgRuJaeIJ61m8RMpboJguDHdErYjp%2BEuZG%2F2H91%2B6cElVM0%2F4oZw2XQNNEX%2F%2BhvJ%2FxZ4YkrRxAnGxrrxvAXA6qMhV8WL7368WmMIhTnmuYMdOnehcPDngyup9NXMLNJR45OqA0dC0d7BJmFTI8lEfcdE9KVPOXPOyo4waZ3Ez2QcbGWOisQQdUQDw6ainbizR8TQuvnPJAtXBwMqML%2BLOfHH%2BTVqK4b49BzBH3lSZA3UMIPaIMAoyKdwuf%2Bmk120FEu%2FHukDn%2FRHd3d9eKIc3viopv1y%2FcNKsNJiUmpBIjILRySgXiQKTp4ImxYHCMuMNfzw8kGOqUBqHzbzkUkcV4ynVZgE3OtJjdBajDkP0zd5XIBMTCgIv5IYTSdbxTAFX5B3ZMF%2FPF0xf91Z8kKrIFSDwfZgtb8psFkXub%2FQWsJRx%2FxhigtODDpCFT8jFu0EtDBGOpLpOQ6VbcoNPftRhJ1xY%2BY%2BGD3Lk6aVbRX0emARbENcVcfM086ytblxDaVycvyvp3GLHK7gMi3i6xNQJRgjeBxkS9sYQTSkLEv&X-Amz-Signature=b8d1e34896a2461195949c7f2871ffa25e6d67f2e494210d1b3d882647580bb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYC5J7CS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC0f5JUH6%2FRm85IpDCTWY69y8hBdurbk7bwler5jrD9GAIgXfq%2FQvTZj5czkpSlhKb9uj8h1RD%2FOHLpUZVknFneXsgq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDM%2FFA8PDu0j%2BZVGflCrcA%2BOMstE84bFLLI2y1sDdfnFmVFfQoQZpSCKRb4SN5tU07TFIrfvvGOHjst%2Fl5EPcfjGTCmBtkB8fzm5bfc%2FQ8kGX%2FsuhaQQET99k6a7P%2FoWCzpmj4eFw%2BUOfaNapqb%2FhTFisp2mr4FPY1rZfowJcAM1sSThGP5IYg4eUeZwhf2Gl76boe5vtmT63VkKsZPqYvvpwCc4Qp9zrGzU4w0YEQLpA%2Bp17k3y9IAcYCf5E378dmWYTn9Zx62oWuRliUFRtIa7dshDJ6zkOi8dWVkIUoM3ORn2DMr34A%2FYg6DRdbz1264Eck483%2B9qw55Le4qgRuJaeIJ61m8RMpboJguDHdErYjp%2BEuZG%2F2H91%2B6cElVM0%2F4oZw2XQNNEX%2F%2BhvJ%2FxZ4YkrRxAnGxrrxvAXA6qMhV8WL7368WmMIhTnmuYMdOnehcPDngyup9NXMLNJR45OqA0dC0d7BJmFTI8lEfcdE9KVPOXPOyo4waZ3Ez2QcbGWOisQQdUQDw6ainbizR8TQuvnPJAtXBwMqML%2BLOfHH%2BTVqK4b49BzBH3lSZA3UMIPaIMAoyKdwuf%2Bmk120FEu%2FHukDn%2FRHd3d9eKIc3viopv1y%2FcNKsNJiUmpBIjILRySgXiQKTp4ImxYHCMuMNfzw8kGOqUBqHzbzkUkcV4ynVZgE3OtJjdBajDkP0zd5XIBMTCgIv5IYTSdbxTAFX5B3ZMF%2FPF0xf91Z8kKrIFSDwfZgtb8psFkXub%2FQWsJRx%2FxhigtODDpCFT8jFu0EtDBGOpLpOQ6VbcoNPftRhJ1xY%2BY%2BGD3Lk6aVbRX0emARbENcVcfM086ytblxDaVycvyvp3GLHK7gMi3i6xNQJRgjeBxkS9sYQTSkLEv&X-Amz-Signature=2fc872430888c0246fbad0cf051738249890adc3e2a3dca2fd937844a612d841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
