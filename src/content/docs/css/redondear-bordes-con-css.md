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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEZCMHAK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWL6CRWEPLM89xSnr1BpAirZtr2gdtTOQuqJigRDyONwIgX5Do4ypfox%2FB8vmtnmfM8KOgvAUrpJTy9gLD7R3tNC0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDFIQqw8fhDX0fv12ECrcA2wTM5J70BohvOMJDYFbK6lmWb5M5hSoyX6%2FGvf0MJjIexBfFcd1gFzCUz4XObEV6loqw0XQ4LMtVwOOecbEiuqZsts8oYIsYAdp1BVn51mrQFp1Y9guSjUKozYK%2FVtEFAddKVs4dmL68jMZaOMfHMFJRMbi%2BRJydHYunF%2BgVG5kKiI3%2FFXw4OJ3WsDvg8m0COtiN7tYoMHLyf0wUrqvR6vB9ICggPIF0%2Fj1IRDYfqv4TXftDuMMM%2Fi%2Fom3TpLyZqfAegYztZ9Yl93gwTtIewg84RqL0pazVSx9XFFRxgZB5J7YxZ2VHYWf%2BebF0FrTXovgr3u5hJ4R6wnkdIf0veh1rhTDtG16k85aXXqXozzJ6b1m%2BUU6ye0knBpw6OGLUU%2FwJ5zxiGYJ4cr9aDCU9FBvoM0NNr0mBo%2FM%2F5l4PJWfglrMJ4uCGarJcs9Gaf68R9p8Ry08EaOhaLp%2BPGazMeOvv8Vgn%2BjgL%2BhQsv7CluHwHWpqr0Tx5BrRSNAN3Jp%2BbC0PrQaK%2BOnS7uYCAGDbFRAogFwK%2F07eatz%2Fp14MvLcViD1zJMpY6mL03qWr2VSE1hik7zmdvJIIRq02Wm1SeCf1RJgIjFOFsHhVglQLR8y02TUV2zn0cEXW%2Foyt8MJOozskGOqUBdeOgh3uFJ%2Bxp%2BGocfOlqtWmixaqP7dQwXF0RH4aDOXEBVfNQ4FtLddSjYKRQMAy%2BbkLY%2BxSmm12Aya7wz%2FaB8IKzsyE3AiXXHPcPy9cDF4AHaF3S2vmQ6jHPYL0HEEDutI3w3i%2B1giZmJ5PEs1GFhS2g6BjW1qG8zYzJxWm4tUR7n2%2FH1ud4EGHoenW060fQDiziCY%2BdRfUddo3%2BDkiWiP0lkVUO&X-Amz-Signature=0799fb71cfa4c93d74ebb070d5ad3ee62dd2242dd4156a7c668bcbbe5705f85a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEZCMHAK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWL6CRWEPLM89xSnr1BpAirZtr2gdtTOQuqJigRDyONwIgX5Do4ypfox%2FB8vmtnmfM8KOgvAUrpJTy9gLD7R3tNC0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDFIQqw8fhDX0fv12ECrcA2wTM5J70BohvOMJDYFbK6lmWb5M5hSoyX6%2FGvf0MJjIexBfFcd1gFzCUz4XObEV6loqw0XQ4LMtVwOOecbEiuqZsts8oYIsYAdp1BVn51mrQFp1Y9guSjUKozYK%2FVtEFAddKVs4dmL68jMZaOMfHMFJRMbi%2BRJydHYunF%2BgVG5kKiI3%2FFXw4OJ3WsDvg8m0COtiN7tYoMHLyf0wUrqvR6vB9ICggPIF0%2Fj1IRDYfqv4TXftDuMMM%2Fi%2Fom3TpLyZqfAegYztZ9Yl93gwTtIewg84RqL0pazVSx9XFFRxgZB5J7YxZ2VHYWf%2BebF0FrTXovgr3u5hJ4R6wnkdIf0veh1rhTDtG16k85aXXqXozzJ6b1m%2BUU6ye0knBpw6OGLUU%2FwJ5zxiGYJ4cr9aDCU9FBvoM0NNr0mBo%2FM%2F5l4PJWfglrMJ4uCGarJcs9Gaf68R9p8Ry08EaOhaLp%2BPGazMeOvv8Vgn%2BjgL%2BhQsv7CluHwHWpqr0Tx5BrRSNAN3Jp%2BbC0PrQaK%2BOnS7uYCAGDbFRAogFwK%2F07eatz%2Fp14MvLcViD1zJMpY6mL03qWr2VSE1hik7zmdvJIIRq02Wm1SeCf1RJgIjFOFsHhVglQLR8y02TUV2zn0cEXW%2Foyt8MJOozskGOqUBdeOgh3uFJ%2Bxp%2BGocfOlqtWmixaqP7dQwXF0RH4aDOXEBVfNQ4FtLddSjYKRQMAy%2BbkLY%2BxSmm12Aya7wz%2FaB8IKzsyE3AiXXHPcPy9cDF4AHaF3S2vmQ6jHPYL0HEEDutI3w3i%2B1giZmJ5PEs1GFhS2g6BjW1qG8zYzJxWm4tUR7n2%2FH1ud4EGHoenW060fQDiziCY%2BdRfUddo3%2BDkiWiP0lkVUO&X-Amz-Signature=7372b35f5bd9bc79e60e523c594b83b39d0bfaaece083806f41fcd7dc24f2446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
