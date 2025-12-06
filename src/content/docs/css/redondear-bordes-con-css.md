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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3UJM43G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN0lqAsLEcKl%2FJZ8zRaQqdFXo9awdgfh16uNZ9Z%2B4MwAiEAqbi0SHsP%2FJaD4ozH3jsXcIv6oRmOcGTKzxWF9jj2CQAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOQMRTOohzRYYLBtgSrcA09e530isK5oHtnWi%2B8oAoNbmtV97%2FvANEEGWx81vinRpg1SXD9YUsMt9LLCE6eV9RNIRgZ7pL4prbYBsTMPWt8HEAaJA31WVLuLEg7QEKG%2FYmYjAB%2F1GLCz0cwnOanmFA8zMRmM2afM4Kx3NmkEhCX9JXen1%2ByYuVtFiYxKsoE9t8jic4bswUgBQVFuNxC5qy20mhq3tgkUQzryklZF6SrmIYMpw8UTwXJhY3y6u3aK3Jzw7o5LXzCB3iVFx4ihmfsVodJ7FWvKJMPL4Zxcn0Pa%2Ft7uibX701asp0IgLIv9W5uhczLwnDsbtO1SK7ZMGYJkSKLIQNPSogwhdslJo%2BEeXebbwagCzXK25M%2FoM65wwp7oxUHm597S76%2FCNkO6OwC%2BiYqhtNHxUZQwsxDEdsDgcSMggy%2FlR8agADu2g%2B%2F5EeR0vEz%2BetdC5LuvXH9gVdZRBBYDNMuvZkquXgUJiKclF93X1%2BXWsm7%2F2pEtyLHidB765q341bsBAA6qeYcjr9p0YW2InHv6fk4nT4vX0Bdt%2FT1aAtOha9OidIoE6OqNMiacwPb3C%2BOPFuVLQ0BpjINIeLn12t0Rkt1pPh3xOpOiRfzuJ3Ngcngl3sg0epFBz%2Fs%2FosFdk3heB9Z1MMnU0skGOqUBwmzhs%2B6zFJpORNPwddoAsnhmZwuvsFhqbnCSJZh%2Fd1fxqjJFlV2Ncs2VCCRd7RtKMEo4%2F0fDa3lXrHG3xykJRPyTh9Oq%2FUchnTXP6vtt2%2Brs3eHz1EnHdzkd05kBLP5Pcya3IjUE2ZO9F5eFryvvlMMv8F5Ug51knVNIpd%2BCu4cXI2Zz20SS6miuwLiBo8ZVYnv2Sdc30TIYG32IAeFsMr7BkOIJ&X-Amz-Signature=148235da57cc96d44a44259149e292291bd827b68f90ab300232bd97ea51c222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3UJM43G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN0lqAsLEcKl%2FJZ8zRaQqdFXo9awdgfh16uNZ9Z%2B4MwAiEAqbi0SHsP%2FJaD4ozH3jsXcIv6oRmOcGTKzxWF9jj2CQAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOQMRTOohzRYYLBtgSrcA09e530isK5oHtnWi%2B8oAoNbmtV97%2FvANEEGWx81vinRpg1SXD9YUsMt9LLCE6eV9RNIRgZ7pL4prbYBsTMPWt8HEAaJA31WVLuLEg7QEKG%2FYmYjAB%2F1GLCz0cwnOanmFA8zMRmM2afM4Kx3NmkEhCX9JXen1%2ByYuVtFiYxKsoE9t8jic4bswUgBQVFuNxC5qy20mhq3tgkUQzryklZF6SrmIYMpw8UTwXJhY3y6u3aK3Jzw7o5LXzCB3iVFx4ihmfsVodJ7FWvKJMPL4Zxcn0Pa%2Ft7uibX701asp0IgLIv9W5uhczLwnDsbtO1SK7ZMGYJkSKLIQNPSogwhdslJo%2BEeXebbwagCzXK25M%2FoM65wwp7oxUHm597S76%2FCNkO6OwC%2BiYqhtNHxUZQwsxDEdsDgcSMggy%2FlR8agADu2g%2B%2F5EeR0vEz%2BetdC5LuvXH9gVdZRBBYDNMuvZkquXgUJiKclF93X1%2BXWsm7%2F2pEtyLHidB765q341bsBAA6qeYcjr9p0YW2InHv6fk4nT4vX0Bdt%2FT1aAtOha9OidIoE6OqNMiacwPb3C%2BOPFuVLQ0BpjINIeLn12t0Rkt1pPh3xOpOiRfzuJ3Ngcngl3sg0epFBz%2Fs%2FosFdk3heB9Z1MMnU0skGOqUBwmzhs%2B6zFJpORNPwddoAsnhmZwuvsFhqbnCSJZh%2Fd1fxqjJFlV2Ncs2VCCRd7RtKMEo4%2F0fDa3lXrHG3xykJRPyTh9Oq%2FUchnTXP6vtt2%2Brs3eHz1EnHdzkd05kBLP5Pcya3IjUE2ZO9F5eFryvvlMMv8F5Ug51knVNIpd%2BCu4cXI2Zz20SS6miuwLiBo8ZVYnv2Sdc30TIYG32IAeFsMr7BkOIJ&X-Amz-Signature=2a18f50b7a11e7ae0faa61df0d39405aac3c08820fa0c0722d9e6fb42e28adb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
