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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUFYFTQM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnX%2BUfCWxwteY8KvqoQIjmrIrLR6kszdKFj0sUwZulMAIgKC0nHNF5zF1UIPs8Wij4uRM3554zN8rAnVclVcTseIsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhSkOe2Y%2B%2Ft5un%2FJyrcA%2FhRoJMB9KiE%2BzeD8wUcY9w8u%2BUXdSUqY2o0ovqACR2VcCGv6uefLlyDTcnCVqBCqm4PCGV3j6rXfahlXpf6PbW6x71cgnAAlcN5KTMLh0TmrFdjeyfE4ltBRXXNQUh8mUT6oB%2FpXNKqOhitaC%2BrgaWKWvGrMwx3K%2FvTFSDMIGfopqT9lkGSu38SMIqccVh%2BVhkqmNOQkYT3P3d0U3lDsCXfED72MqyUvn%2B%2Bd%2B%2BI%2Fi0rP5XgecT3Dm%2FxtQFsgxU2truPtTfTxirrH4dbb74Mr0YEqlYwVYO%2FfQHZM1be7TTGuuSImAf9KfdwuUE2zg91LkG1lVwHryst3GCEK17vox0mQ61LEAIocaRvjtAoZ9%2Fpl4aYwFwmkcWS5H4LF3U4ztMptHG8ZOVcjZVL4Mh4lEP8%2FNH3EBKJ45DG6xFTLqtBVrHCMmfmKjm%2BBzezcpcRn6pxxFROwz2BKXUPPx7MNUW%2BHESWN5oK%2FcRs6p0Z9VjWrx23uwFok3Yn7NRPEk0Vj%2BuB4X8b2iNQMOWEN9YHn8uFEpYETh8wU7TXZKiYXRUp%2BnW22c0vTeotg4ZVdkGSeKJSXEcxBqptFzZ89XVLPGMhUrTk5FlwHDwkA2%2FXkxRc37weHU%2B79avExKFhMNqz3MkGOqUBCE9OgtutDt7wmO5m093xn2W5oTzXBXTVMcnX3nQyvgMs2g6glTvSK%2BNmFlVoGJzkyavRna6L7if9ueaDUEv3B1XHJtFlnk91leB%2F4lZiUeKdHbcMuU08Dz3KgWp89YjzwiHH4zRvXUmOWkpi5s3XraPPsZv3udIjiu552fqeO7QEbevzpT%2FuUML8NpEQJKE%2F%2B7jkUNtVnC%2BCpURB3PBXKLm3%2FnLw&X-Amz-Signature=6b4d8264ee1dc95b706cea2a7345331cd73545f1524c71a7964dc53b5368bbe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUFYFTQM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnX%2BUfCWxwteY8KvqoQIjmrIrLR6kszdKFj0sUwZulMAIgKC0nHNF5zF1UIPs8Wij4uRM3554zN8rAnVclVcTseIsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhSkOe2Y%2B%2Ft5un%2FJyrcA%2FhRoJMB9KiE%2BzeD8wUcY9w8u%2BUXdSUqY2o0ovqACR2VcCGv6uefLlyDTcnCVqBCqm4PCGV3j6rXfahlXpf6PbW6x71cgnAAlcN5KTMLh0TmrFdjeyfE4ltBRXXNQUh8mUT6oB%2FpXNKqOhitaC%2BrgaWKWvGrMwx3K%2FvTFSDMIGfopqT9lkGSu38SMIqccVh%2BVhkqmNOQkYT3P3d0U3lDsCXfED72MqyUvn%2B%2Bd%2B%2BI%2Fi0rP5XgecT3Dm%2FxtQFsgxU2truPtTfTxirrH4dbb74Mr0YEqlYwVYO%2FfQHZM1be7TTGuuSImAf9KfdwuUE2zg91LkG1lVwHryst3GCEK17vox0mQ61LEAIocaRvjtAoZ9%2Fpl4aYwFwmkcWS5H4LF3U4ztMptHG8ZOVcjZVL4Mh4lEP8%2FNH3EBKJ45DG6xFTLqtBVrHCMmfmKjm%2BBzezcpcRn6pxxFROwz2BKXUPPx7MNUW%2BHESWN5oK%2FcRs6p0Z9VjWrx23uwFok3Yn7NRPEk0Vj%2BuB4X8b2iNQMOWEN9YHn8uFEpYETh8wU7TXZKiYXRUp%2BnW22c0vTeotg4ZVdkGSeKJSXEcxBqptFzZ89XVLPGMhUrTk5FlwHDwkA2%2FXkxRc37weHU%2B79avExKFhMNqz3MkGOqUBCE9OgtutDt7wmO5m093xn2W5oTzXBXTVMcnX3nQyvgMs2g6glTvSK%2BNmFlVoGJzkyavRna6L7if9ueaDUEv3B1XHJtFlnk91leB%2F4lZiUeKdHbcMuU08Dz3KgWp89YjzwiHH4zRvXUmOWkpi5s3XraPPsZv3udIjiu552fqeO7QEbevzpT%2FuUML8NpEQJKE%2F%2B7jkUNtVnC%2BCpURB3PBXKLm3%2FnLw&X-Amz-Signature=da792e41c3a2889bb618d16ae29dc2ea37bc11616e6bec3f5f9b24432f8d20a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
