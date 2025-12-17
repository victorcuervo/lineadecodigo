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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363THMJG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHzVU2wziGsqiUjk8acW6Ygn30S5z9BeoLzhyHyaEvccCIQCt0U9C6rmDPgiQS1sFSVlTm7GBRKqEZ1lOMBkDix8ahyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIME%2FVkB8nxAI803WTZKtwDx30cKB7wXRqRN8TGsQU6dOx9Ar%2BEj96jdpyvXL85SNHNeMeJw2TdoIMQhwbA6g5zQiShmHbdDmPuZfg%2FjXEhFYJfnLWDX9cxZsQQmUW7NAviXGVMVxu7mSJEy342HffjP4G%2FXAFMpMhvkZ6NVaKF1Qp%2B%2Bko3uscj1yokvdgOOWnoc2DEVGiuBkNDYXXlMV2ZRFdW3G7tvSLDBpeHY%2F0oRoi4uSkJL3E2FS4AY2DnDw4DaiDiT4ko%2Bqg696qmN9H09KZJ%2BA%2FUHIXCWjpAGkcp07U0bgx6G%2BviPeSKykDnnVjJpBuckgUeH69AZMP9zLx3Uf8DHR%2F0ta0tIhKrY9we8NprrHH0YQ59RRsO0pPosf5UZBBIIkCz1FmXrPvwRFJ6u1hRnDqJHtFEEN00voBM5R%2F3luO068bp%2F3tAQKWa1uyv7kuibhx0EkhJMjC0RKLPMWaURyIz8XCOt2TMS71DkXwIFZat82LN054eMmrGR9qDfbhCHMOEJsH%2Bgek5%2Bf4q%2FkiKV17BdcwBlmAhxK4GgUsFmeGG3zxDqzlB3eW0DFMKsKKGnK53%2BNIL%2FZiOD4dhU8n7ZvIOMM1QvfxDiYWuxlpDoMfPE79LgotmnoC3tfmXG6QgRgCdiITiJSQwrPqHygY6pgElE7tDGfItSPRxzBSQIms8JVQpg3rN5ZqBvZm3fYlB%2BLZa%2F%2BCI8AsYtTNvHf7mdfLeeWqujc8IfDckR%2Fy78MKIFHYxdJRswPJd7h6nmRokUOKzC7Y7Z9Uw6WLKUlLmB%2BnSV%2BxQDA7c9st2Q3m%2FR8UhUq73gOQDEwXw%2F6mHfddoxkf26u3utydJGJFqPBPkAafB4ATdDPairmGgVfYginmAgeM0vkNq&X-Amz-Signature=290c1c0dc185ef9ab9173cae32dea90a09c0dac8179cee7368acaf8e28e98098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363THMJG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHzVU2wziGsqiUjk8acW6Ygn30S5z9BeoLzhyHyaEvccCIQCt0U9C6rmDPgiQS1sFSVlTm7GBRKqEZ1lOMBkDix8ahyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIME%2FVkB8nxAI803WTZKtwDx30cKB7wXRqRN8TGsQU6dOx9Ar%2BEj96jdpyvXL85SNHNeMeJw2TdoIMQhwbA6g5zQiShmHbdDmPuZfg%2FjXEhFYJfnLWDX9cxZsQQmUW7NAviXGVMVxu7mSJEy342HffjP4G%2FXAFMpMhvkZ6NVaKF1Qp%2B%2Bko3uscj1yokvdgOOWnoc2DEVGiuBkNDYXXlMV2ZRFdW3G7tvSLDBpeHY%2F0oRoi4uSkJL3E2FS4AY2DnDw4DaiDiT4ko%2Bqg696qmN9H09KZJ%2BA%2FUHIXCWjpAGkcp07U0bgx6G%2BviPeSKykDnnVjJpBuckgUeH69AZMP9zLx3Uf8DHR%2F0ta0tIhKrY9we8NprrHH0YQ59RRsO0pPosf5UZBBIIkCz1FmXrPvwRFJ6u1hRnDqJHtFEEN00voBM5R%2F3luO068bp%2F3tAQKWa1uyv7kuibhx0EkhJMjC0RKLPMWaURyIz8XCOt2TMS71DkXwIFZat82LN054eMmrGR9qDfbhCHMOEJsH%2Bgek5%2Bf4q%2FkiKV17BdcwBlmAhxK4GgUsFmeGG3zxDqzlB3eW0DFMKsKKGnK53%2BNIL%2FZiOD4dhU8n7ZvIOMM1QvfxDiYWuxlpDoMfPE79LgotmnoC3tfmXG6QgRgCdiITiJSQwrPqHygY6pgElE7tDGfItSPRxzBSQIms8JVQpg3rN5ZqBvZm3fYlB%2BLZa%2F%2BCI8AsYtTNvHf7mdfLeeWqujc8IfDckR%2Fy78MKIFHYxdJRswPJd7h6nmRokUOKzC7Y7Z9Uw6WLKUlLmB%2BnSV%2BxQDA7c9st2Q3m%2FR8UhUq73gOQDEwXw%2F6mHfddoxkf26u3utydJGJFqPBPkAafB4ATdDPairmGgVfYginmAgeM0vkNq&X-Amz-Signature=3a5234a64bfbdcb1f4062ace46ccf8df9052ff9d72227fcd67d7eb7465f94eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
