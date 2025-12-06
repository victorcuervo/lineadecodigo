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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY7A453Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD21qwiWDgyrgHB2hG%2BvGCLRQUp5fSaOxsGvkj0ft5c8gIgIWjKnOYTUcPS1X5gJWb7l8p1jsgPaRCyMuiZVuvUSS8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDxniaw%2F0PVeXE1TSircA7SVsZesrxQl282CogZRKtAie2OfoIl25pbolEbnYBydGi%2FHlRgad7dhVfPlpX71akgk2XvcCccrdbSqU3%2FjgHAe1WGBmSxgrzqvWveur3XHvk%2BQg4MvtsaeAzYAeeftgzpFjiUCPQ40yRiNmtbcnxQ7M6I7bTRG9YbDO3E6iQCzHMrKdBi6MsheQ88ICEV4fzfDrTcAZ6My5JbGG2hgNaEGIIg1uFCwlj0j%2BoQaYQum7Bv3eKUa0hnfp3vQkGmmouRFyMOiM7kHhCNUiNilaBIOfdZfBFecfnjkpFacloztAYh8dxT3ZpADR5MJUR2uc5KEj4iKqgvCGsGG6aDGlDGJAgHi4kCUcAOY69DA3nAiMFr0E%2FnATadKjtZFOu8JtMSnRSWVLy3H39qm4lMCw2ZdOE7J6twIi7d6ZH4U%2FR47ijm373SYhH1X9asNXpadSN3D9ORTl1norKfwZm%2BkVSB2PSs5xC3KiRVBmuGMsvCsiz%2BBvUG%2Bpl4e3zMxu%2B35xC%2FJXuNChntR3dghgQKVpFI0QHhagJOZVziVHTMsf5MxxrqoiGqbzfksK%2BvQ8HHcRpl2%2FZZR0DQj3gFxRCnQsynONQ8Ct1OcPTgW1UZXkoPCe9g7HuiClgmIU%2FNXML3DzskGOqUB18u5ADPsA1TaVmuWUBS%2BfjF4Pyhkc4TR5Mxosi7MAGHrji9q8TbU4TIXJoF%2Btn471JbiTvJiLIdGomg3g0YDmvO0bkMtapzbpG0zsbnq5eByHo4NBGsBw3C3%2BlvK1DoV9wIu22Rh5m70CMviEuMtcNVKOXppEIuBCY3r1zxUi5LvHSu76yO42mR6XsozO3Xd3sAGmqH9OYWWsOh7gKuPZxKiloW7&X-Amz-Signature=d7ab83641cd444d45b469ae9811af003c9d9eae297df911aa1038fb059455ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY7A453Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD21qwiWDgyrgHB2hG%2BvGCLRQUp5fSaOxsGvkj0ft5c8gIgIWjKnOYTUcPS1X5gJWb7l8p1jsgPaRCyMuiZVuvUSS8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDxniaw%2F0PVeXE1TSircA7SVsZesrxQl282CogZRKtAie2OfoIl25pbolEbnYBydGi%2FHlRgad7dhVfPlpX71akgk2XvcCccrdbSqU3%2FjgHAe1WGBmSxgrzqvWveur3XHvk%2BQg4MvtsaeAzYAeeftgzpFjiUCPQ40yRiNmtbcnxQ7M6I7bTRG9YbDO3E6iQCzHMrKdBi6MsheQ88ICEV4fzfDrTcAZ6My5JbGG2hgNaEGIIg1uFCwlj0j%2BoQaYQum7Bv3eKUa0hnfp3vQkGmmouRFyMOiM7kHhCNUiNilaBIOfdZfBFecfnjkpFacloztAYh8dxT3ZpADR5MJUR2uc5KEj4iKqgvCGsGG6aDGlDGJAgHi4kCUcAOY69DA3nAiMFr0E%2FnATadKjtZFOu8JtMSnRSWVLy3H39qm4lMCw2ZdOE7J6twIi7d6ZH4U%2FR47ijm373SYhH1X9asNXpadSN3D9ORTl1norKfwZm%2BkVSB2PSs5xC3KiRVBmuGMsvCsiz%2BBvUG%2Bpl4e3zMxu%2B35xC%2FJXuNChntR3dghgQKVpFI0QHhagJOZVziVHTMsf5MxxrqoiGqbzfksK%2BvQ8HHcRpl2%2FZZR0DQj3gFxRCnQsynONQ8Ct1OcPTgW1UZXkoPCe9g7HuiClgmIU%2FNXML3DzskGOqUB18u5ADPsA1TaVmuWUBS%2BfjF4Pyhkc4TR5Mxosi7MAGHrji9q8TbU4TIXJoF%2Btn471JbiTvJiLIdGomg3g0YDmvO0bkMtapzbpG0zsbnq5eByHo4NBGsBw3C3%2BlvK1DoV9wIu22Rh5m70CMviEuMtcNVKOXppEIuBCY3r1zxUi5LvHSu76yO42mR6XsozO3Xd3sAGmqH9OYWWsOh7gKuPZxKiloW7&X-Amz-Signature=4a78d01ae5820fdb3bad7e9e24ef5d7f513734b78b72129329d21669d6f7bbb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
