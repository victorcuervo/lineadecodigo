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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAHG6GUV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYsysGKtscQPUEcEGcekEIjlE2IwAtsy8eZFSlv1VFaAiEAiYd5DRg4HBDWf9pJIHfJvy%2BzI3jWVRfOv4bAo6TnX8sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI2gQzN2WnnOEpBGsircAxphl1BK56gvPed%2BWanmekkgBeUIm9qE0%2FUjYpBmrT2ngQocJJ88YmenmhTRFn3BlYZN1Ph7cetfRYNpWxwYaYLdIJcImqeBIzEJhY08sZ2z%2FgmGNgV53LM5l%2BlmvjOAQBDlE6jv68KEtZKmAzwRexOFns8Z%2BkXs8GYiBXTYhXDTL5f5F74Sa3o6oaePMz5Ssk%2FS%2FRpFN91f1hQy5WL6J%2FbHgwgpBN%2FUTmZh8IB8IJg78JBOoysQqck%2Fq13BuzfPFQum8ElKxfNEWluPIwogGfOkI818ZqPKq2C21WiNN8po%2FPxqJu4nLQHbds66bzjQvkRBIo8OiZo57xQtmbnYhXQHw4PzsHQsKzS9CiRc%2BmEbreHbgqXbfjfuPekDpFiuy6b2mAh%2FGoBfALVzCXouzCu8Zxax3t9e0z3t8sLnPZJz9c%2FE%2BC3fU9JyKpwZIIaUXpHPoIo0z%2Bfqiv3vmTTkHtoWLZEC%2FJ4H6cxpEsK9hE0FMWFzYMCl3qNKBiKtpYBy73P6FLY1JEg5upweiSd6XTv71n7iWNTvIv%2BkhzD9USPjb2ORO4vlZxNew0bkgNNTbGYV9U6MKE%2BtxKy4N0Hbs3EYv9d5Eg5RhkcnWdpX6FMOlPdjruxIzr6wkdGNMNzOiMoGOqUB7aXpAnjOXCFxaXhBiVBmEpr%2FeB6FN6%2BLQ0xW3V1fPbTcscVhj04JY1p11%2BIzPLtlSsCmXyMHI6VrOTONcTO%2BWh3YkTUGvEeBYyjRoA3z%2BAvOLNXy8O%2BodIqY5DE%2BdRqjk0Hf8v9Owben5KdtJ416z44LB49dzW%2BP2FUCZEQV%2BM4Ulmk6HdcD9USBj0len%2BR7WrG50CxFFAacrjv2XTBO6Md29cet&X-Amz-Signature=f1ce3b321f51e3eda4bc6a0d7f525a3c84052ec9edcdb16cf7f965caf175a28d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAHG6GUV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYsysGKtscQPUEcEGcekEIjlE2IwAtsy8eZFSlv1VFaAiEAiYd5DRg4HBDWf9pJIHfJvy%2BzI3jWVRfOv4bAo6TnX8sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI2gQzN2WnnOEpBGsircAxphl1BK56gvPed%2BWanmekkgBeUIm9qE0%2FUjYpBmrT2ngQocJJ88YmenmhTRFn3BlYZN1Ph7cetfRYNpWxwYaYLdIJcImqeBIzEJhY08sZ2z%2FgmGNgV53LM5l%2BlmvjOAQBDlE6jv68KEtZKmAzwRexOFns8Z%2BkXs8GYiBXTYhXDTL5f5F74Sa3o6oaePMz5Ssk%2FS%2FRpFN91f1hQy5WL6J%2FbHgwgpBN%2FUTmZh8IB8IJg78JBOoysQqck%2Fq13BuzfPFQum8ElKxfNEWluPIwogGfOkI818ZqPKq2C21WiNN8po%2FPxqJu4nLQHbds66bzjQvkRBIo8OiZo57xQtmbnYhXQHw4PzsHQsKzS9CiRc%2BmEbreHbgqXbfjfuPekDpFiuy6b2mAh%2FGoBfALVzCXouzCu8Zxax3t9e0z3t8sLnPZJz9c%2FE%2BC3fU9JyKpwZIIaUXpHPoIo0z%2Bfqiv3vmTTkHtoWLZEC%2FJ4H6cxpEsK9hE0FMWFzYMCl3qNKBiKtpYBy73P6FLY1JEg5upweiSd6XTv71n7iWNTvIv%2BkhzD9USPjb2ORO4vlZxNew0bkgNNTbGYV9U6MKE%2BtxKy4N0Hbs3EYv9d5Eg5RhkcnWdpX6FMOlPdjruxIzr6wkdGNMNzOiMoGOqUB7aXpAnjOXCFxaXhBiVBmEpr%2FeB6FN6%2BLQ0xW3V1fPbTcscVhj04JY1p11%2BIzPLtlSsCmXyMHI6VrOTONcTO%2BWh3YkTUGvEeBYyjRoA3z%2BAvOLNXy8O%2BodIqY5DE%2BdRqjk0Hf8v9Owben5KdtJ416z44LB49dzW%2BP2FUCZEQV%2BM4Ulmk6HdcD9USBj0len%2BR7WrG50CxFFAacrjv2XTBO6Md29cet&X-Amz-Signature=63ff37e2d0cbafcd2a7f7bbdfa2b651ac0791ea61158ab4ca9e46a036c0fd64a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
