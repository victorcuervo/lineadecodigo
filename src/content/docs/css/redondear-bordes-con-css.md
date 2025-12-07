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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETPNSJ5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmn7Fyv%2FOrvTzd94lCvXnu175xQq1HvSA2T3BVczeVygIgHxXYFBaC8K8YV7yzDVNKgsJo6%2BigXiUdCLof0mZuC8EqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FKLxcax3VXxR4OByrcAwqBclgSvV8mAZmJ9rwe%2FTKkvJ9G%2FnSopwkwbainTlY7m7urI0s4el2EmAffHwPqTBheKH%2B9ps2%2FDN37Ku%2FToOqJcVQ4YcIvFsCCA7YyViLeR3d0uMRnNrAUgg9Njt6lLY03uuFrV518vnST5aMra9TEUwZFsNdorVTmEJt9Vim54eYKnhkUouBex0nqMG3rbYm2dZoUGhMFGWiSri8XWE1y6RmfFbe3w2BnmgzEa1P7PTbgUITgbI9ZJd1eAeJ0WMnVRvqXtxJxF37bqVtkHDrIYU%2BjckeIgn8GnAYAy1Hdj%2Fu4897THrdZbK%2FO2%2BZc9iW3g%2FERTL7VJRkN0am29c0m1UgmY%2By6Pq93qRAyaEkif7P0gemqmSL4c0GpDyBNvZylw0uVmvRGRBEdUVS0SrHIdF3PhICQp1bUMy6tsqMkkGF0wfLmDatLS35LseKnx4SkNqVtQKl9v%2FNFpyQGIPyTyOvoeuIS9D50uk7vnRbW92dCJStGQtbuc1q2pggk%2BweQT3bRGxwGNMlU1h1TbYWPlNa3Kbf290sUUdA%2BG2%2FjYLOvj8sLBTK9FbCioYnWLMpbZ%2Bz412d6xIu9jDFW%2FbcYhTsT7%2BSIzsuL2bDO%2FfFQ3lRPw2Btgm7eTUXIMJ%2Bo18kGOqUBkho32Gg8zfg6yrCsgesKKH16OZ%2B9Q%2FdSg1cFwOyAELGCdNn2Z8ULfwuFMn8bqdA6RaPuwo3z2X9nYM%2BelDiJaT4xYhWmPHYE%2Fe6QHtiIS1VDzdU0xJHT0cV350N1MYWgj36KHsap8Hgv6TfDUWZJifJucFda9%2BzwzNRb8AuN8pi55miMVVbxQW%2FNQxrMCUZoFGsjSmVcCCRm3TuZwVgAPfYkUKYa&X-Amz-Signature=598bc3f11972670039a74b769d8a78653679cef7056629266c28ecba98452162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETPNSJ5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmn7Fyv%2FOrvTzd94lCvXnu175xQq1HvSA2T3BVczeVygIgHxXYFBaC8K8YV7yzDVNKgsJo6%2BigXiUdCLof0mZuC8EqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FKLxcax3VXxR4OByrcAwqBclgSvV8mAZmJ9rwe%2FTKkvJ9G%2FnSopwkwbainTlY7m7urI0s4el2EmAffHwPqTBheKH%2B9ps2%2FDN37Ku%2FToOqJcVQ4YcIvFsCCA7YyViLeR3d0uMRnNrAUgg9Njt6lLY03uuFrV518vnST5aMra9TEUwZFsNdorVTmEJt9Vim54eYKnhkUouBex0nqMG3rbYm2dZoUGhMFGWiSri8XWE1y6RmfFbe3w2BnmgzEa1P7PTbgUITgbI9ZJd1eAeJ0WMnVRvqXtxJxF37bqVtkHDrIYU%2BjckeIgn8GnAYAy1Hdj%2Fu4897THrdZbK%2FO2%2BZc9iW3g%2FERTL7VJRkN0am29c0m1UgmY%2By6Pq93qRAyaEkif7P0gemqmSL4c0GpDyBNvZylw0uVmvRGRBEdUVS0SrHIdF3PhICQp1bUMy6tsqMkkGF0wfLmDatLS35LseKnx4SkNqVtQKl9v%2FNFpyQGIPyTyOvoeuIS9D50uk7vnRbW92dCJStGQtbuc1q2pggk%2BweQT3bRGxwGNMlU1h1TbYWPlNa3Kbf290sUUdA%2BG2%2FjYLOvj8sLBTK9FbCioYnWLMpbZ%2Bz412d6xIu9jDFW%2FbcYhTsT7%2BSIzsuL2bDO%2FfFQ3lRPw2Btgm7eTUXIMJ%2Bo18kGOqUBkho32Gg8zfg6yrCsgesKKH16OZ%2B9Q%2FdSg1cFwOyAELGCdNn2Z8ULfwuFMn8bqdA6RaPuwo3z2X9nYM%2BelDiJaT4xYhWmPHYE%2Fe6QHtiIS1VDzdU0xJHT0cV350N1MYWgj36KHsap8Hgv6TfDUWZJifJucFda9%2BzwzNRb8AuN8pi55miMVVbxQW%2FNQxrMCUZoFGsjSmVcCCRm3TuZwVgAPfYkUKYa&X-Amz-Signature=b07e3948792a316e9c340bdba5cb7ed5ea60d854cf7a597531ec4b8dc79340a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
