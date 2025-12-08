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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO557L7P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T082011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4gLAHNtUpG1XLM0X%2BQ0GJDVHYuwGpXueoV%2Bl74zPcpwIgGGd513rqaNNyaVkKWq1pGHJclmnMGrEtqQcyg9xs0BcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmKa72p8d%2FqJ8EnsircAyoGsC%2FJKZLzQfs%2B2PtQ4dYFjJKVtdcrfYwgOWi84YDpppLNMm9A%2Fsd5gL6CIeQqjGmV%2FD192UPxX3J%2FqU9GmhD0duGGXKk5NcOi8q9E3festGaEouseUA36w%2FQdTM84AqoHLxOzWDim3d3DUG1YUTHTPgNN%2B3Efgdk57DZ%2FEcNnxNRILNbvKf8PXDrxMmFxLqggIBc1dwn3SmS0Fu%2FFE7VAcOgZm1Xn50dEI2EuahtxN%2FeQv4pXUb92A46dUAVpZnYYOHbZ5SGupkDqg6zm3cnAJ4JwpXUowcfZ8iFlF8HzAee0RO9uSUuPu%2BglJc2ADFTjuNggXzTO1TjmTcIq9BBUctRyPbI3WJWFS2cwyoG%2FuNkffwxJbG7tAJ%2BfffD%2FzeYRjsN2jq0JGAMAMR9RDbkxdvnNveHfn1XUhbxp9pzeDYysmXSS7RjuweCUiiaNEqpajJRSVAQrfDQ3nc%2FMaxzweiCxVIGlZOOkLysDUDnYg1m0niDVkkYsAj2sl6IvQiwDkLOop3PdwxfxoiZ8GqSY%2FF9Cv%2F0Tai9BQivxBF%2Fk056X5ro1p%2Bsja68H2a3cwueKB%2B5telNzueOofsykoaFXnjd6mbELE4UYYzQN%2FY5jKYx1Un%2BendOQ%2FdInMKHu2ckGOqUB4U0A%2B9iqLMkg0lxFlvSYfLVw4vO2GqZE85SacxmRoyhKRcig5XTIjXoGgRjAJwV8gtFHYx4me7t3SyqiHseYuZ3V4eSl%2FfPLp%2F2xfEVb0CJEtV6mNDve5YwX9neMLbaEF56hIMWNjltHIfnCsoFx3RXErqbISgbgzoaX4NFMHINU24OBI%2Bfnt%2Bec6mxPeBBpJRxvpxqbTX8jB7qRltJ38VALf7vA&X-Amz-Signature=350925b7d8b1b4e8294be424c9f6bbf629aeed894aa3957133756bdf87e027ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO557L7P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T082011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4gLAHNtUpG1XLM0X%2BQ0GJDVHYuwGpXueoV%2Bl74zPcpwIgGGd513rqaNNyaVkKWq1pGHJclmnMGrEtqQcyg9xs0BcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmKa72p8d%2FqJ8EnsircAyoGsC%2FJKZLzQfs%2B2PtQ4dYFjJKVtdcrfYwgOWi84YDpppLNMm9A%2Fsd5gL6CIeQqjGmV%2FD192UPxX3J%2FqU9GmhD0duGGXKk5NcOi8q9E3festGaEouseUA36w%2FQdTM84AqoHLxOzWDim3d3DUG1YUTHTPgNN%2B3Efgdk57DZ%2FEcNnxNRILNbvKf8PXDrxMmFxLqggIBc1dwn3SmS0Fu%2FFE7VAcOgZm1Xn50dEI2EuahtxN%2FeQv4pXUb92A46dUAVpZnYYOHbZ5SGupkDqg6zm3cnAJ4JwpXUowcfZ8iFlF8HzAee0RO9uSUuPu%2BglJc2ADFTjuNggXzTO1TjmTcIq9BBUctRyPbI3WJWFS2cwyoG%2FuNkffwxJbG7tAJ%2BfffD%2FzeYRjsN2jq0JGAMAMR9RDbkxdvnNveHfn1XUhbxp9pzeDYysmXSS7RjuweCUiiaNEqpajJRSVAQrfDQ3nc%2FMaxzweiCxVIGlZOOkLysDUDnYg1m0niDVkkYsAj2sl6IvQiwDkLOop3PdwxfxoiZ8GqSY%2FF9Cv%2F0Tai9BQivxBF%2Fk056X5ro1p%2Bsja68H2a3cwueKB%2B5telNzueOofsykoaFXnjd6mbELE4UYYzQN%2FY5jKYx1Un%2BendOQ%2FdInMKHu2ckGOqUB4U0A%2B9iqLMkg0lxFlvSYfLVw4vO2GqZE85SacxmRoyhKRcig5XTIjXoGgRjAJwV8gtFHYx4me7t3SyqiHseYuZ3V4eSl%2FfPLp%2F2xfEVb0CJEtV6mNDve5YwX9neMLbaEF56hIMWNjltHIfnCsoFx3RXErqbISgbgzoaX4NFMHINU24OBI%2Bfnt%2Bec6mxPeBBpJRxvpxqbTX8jB7qRltJ38VALf7vA&X-Amz-Signature=71a1a26945f4fd85593a1372c769de773ebe21f778ca79d9825b09b415cb867e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
