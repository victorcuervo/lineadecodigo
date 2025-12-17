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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBRELEI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZtGyDcaWqSFATxTInHOwI2jxNZhKerJIXEiF5rCmBuAIga2%2BZ9v%2FzAbiCq%2F3DsDFilKNhncO0vG2%2FYRCrE1cxbH8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDVs%2Flsa00ktmUGWTircA2uHRAyzmLC2ULjJWbEIfc8bklL%2FWA%2FhsanRidR9dZRVTjUR8OC94ifSd%2BQu9lsqv2wSd2F0hjCVTSVm3FZ79qIW22CSYMFwAPfg0E78LDAjQuZDPUBhHNfT2ZLfuBdAqM3vihay6lFqKiUQwtPmOAY6skYTckGPgqILG9mKZaBG%2B%2BgJ73lKQVpcFGbLJoDESR3YQGI2zV0%2FZO8LJb6%2B82fCvZWuOETUtyh98oo61kmUudZIwBnFl6NuNKPzMS0zhcAvDQUlbYg42e6RW8n%2Fc0mBuB9LK7TNLSpNKpVPA5x1EKRhrg1kn1OdgDFhw3LBtwOYHhwd0PuaNGlrMZ25BHyg5nDIBKC4oKlq0FMBKefj9%2BZs3K7fCnBWpRJuRIgNCoCnjAzPIxkitjOyvqxv0DcMoi%2BkLlPI3gqxpESKanVkkgY4FJBC8mNyPxt6MdyKOv3rvKWRuoyInhHmC3SNLDWw1zhBYHKtQkz5ACYhY%2FEc6OVD5tCqDZpXLVJtBhHmYI0Ndw395d4ju%2BzoYQILjFpyGyJKYcvFO81ihsZarjc8rHUaz%2FOGXmFp8U7o6DsaRYCzyCPL4kfIpQ%2F0fwqYhAfXUKKXU86PiXIrOh4WFtZXz%2BAGgmzTZQObOMUVMJ%2F7h8oGOqUBDXdIzeZSXoK9nx6puaUC8lMPt8l%2BBqwPJ0cBpbeZt92XK7Pqsz5l5rzNXeC%2FPZosoKHmdvrC6ibaRezG3svj5ys9ZjFR87tatcWgsInWwpiinB7wvyGNULpQTg8H%2Bz%2BI5UOjIKHOE1nmTdS2sOIu1p9YVBW3bxYwZcK9a7XF4mLpaAV%2B9likFkINLwTuF78%2BJ0xq5FwehFXQb%2FJ9Ie3PRG2EdI%2BO&X-Amz-Signature=16923b09f84ee4bc609319a67ff78c18e5467ba5fc56a4c56eaccd6e85b73d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBRELEI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZtGyDcaWqSFATxTInHOwI2jxNZhKerJIXEiF5rCmBuAIga2%2BZ9v%2FzAbiCq%2F3DsDFilKNhncO0vG2%2FYRCrE1cxbH8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDVs%2Flsa00ktmUGWTircA2uHRAyzmLC2ULjJWbEIfc8bklL%2FWA%2FhsanRidR9dZRVTjUR8OC94ifSd%2BQu9lsqv2wSd2F0hjCVTSVm3FZ79qIW22CSYMFwAPfg0E78LDAjQuZDPUBhHNfT2ZLfuBdAqM3vihay6lFqKiUQwtPmOAY6skYTckGPgqILG9mKZaBG%2B%2BgJ73lKQVpcFGbLJoDESR3YQGI2zV0%2FZO8LJb6%2B82fCvZWuOETUtyh98oo61kmUudZIwBnFl6NuNKPzMS0zhcAvDQUlbYg42e6RW8n%2Fc0mBuB9LK7TNLSpNKpVPA5x1EKRhrg1kn1OdgDFhw3LBtwOYHhwd0PuaNGlrMZ25BHyg5nDIBKC4oKlq0FMBKefj9%2BZs3K7fCnBWpRJuRIgNCoCnjAzPIxkitjOyvqxv0DcMoi%2BkLlPI3gqxpESKanVkkgY4FJBC8mNyPxt6MdyKOv3rvKWRuoyInhHmC3SNLDWw1zhBYHKtQkz5ACYhY%2FEc6OVD5tCqDZpXLVJtBhHmYI0Ndw395d4ju%2BzoYQILjFpyGyJKYcvFO81ihsZarjc8rHUaz%2FOGXmFp8U7o6DsaRYCzyCPL4kfIpQ%2F0fwqYhAfXUKKXU86PiXIrOh4WFtZXz%2BAGgmzTZQObOMUVMJ%2F7h8oGOqUBDXdIzeZSXoK9nx6puaUC8lMPt8l%2BBqwPJ0cBpbeZt92XK7Pqsz5l5rzNXeC%2FPZosoKHmdvrC6ibaRezG3svj5ys9ZjFR87tatcWgsInWwpiinB7wvyGNULpQTg8H%2Bz%2BI5UOjIKHOE1nmTdS2sOIu1p9YVBW3bxYwZcK9a7XF4mLpaAV%2B9likFkINLwTuF78%2BJ0xq5FwehFXQb%2FJ9Ie3PRG2EdI%2BO&X-Amz-Signature=5c2b0cb0e52885f750d1818d7969ac3397acc9758f7816ef057f28b5c88b7107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
