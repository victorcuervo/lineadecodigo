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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB4KBNUC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHM8vWwDarscXrmFkHR3yQOCIyXp1X%2BYc9BxLPNpT2NTAiEArCKsTIOzC4t9B%2FGoTXoDkDCotouybPGvh5n%2BYLbOzXwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnTKNPpHR1qZDhznircA61LToMuPAgz5ks8z6vBuLIkyc8JqPXSgAMw8eRIcoZBtf2LiUACytWuMbBYeU8LD25hhIc7ct%2BUqAScvZGHT2sSQFNOVtpOgM80xuObe4QaEyP%2BzdMBFzFTYmjglQ%2FzFbn%2B9WbsRuomu%2BPmNUTlfS3b%2BM8blkbuzee1NGfd0pegsJEQSk3UF23Bq%2B8wRPSuDJiQGSQj7ot7onxj9VEwkvErwsd8lZTE5f%2FaZlKV%2Bt85%2BiEEZk0iokcTYd4XpcSS62RopQpMOnEG9xNqKqByoSt%2FYKgKzQZdwmIbcEhr5%2B5uS7xZBQoxHUfzhH%2FUBrZgThweYA8OrUH7R1ecnO15nLmfB2ZzZjfhXKZ6vhCXAHAFKyLD0SrJyypjLXk%2FkQGeX45Z4P9%2BWvEw85jXuFcstpMuU%2BrVMHraQAx%2BfohIvFGsB%2Bp3O6ElY7cFeLTNxD8arVsn9QgDEnsr%2B7WXSXjPP3pTy7ylEX3ZqGab116TfDzlmaMVxVtnYmbGmPUVlquj54gvzOT6MskGnpuMHzGIJmqaAVhSEfGkDYJD%2FIB1T5T%2BoSCtWBnfzsvb%2BE%2FCOzhEVX6Z%2BNPqyHw80OSpjWequQZC3Y6%2B6TaJYLEcz4dTMNkiNWL%2FGL80mBpHn5KxMNvp3ckGOqUBZfJILRZbDT6Rd79jJQhWshI71C%2BuUh%2FIxsyccgnhxdO94mUgbU%2FTYgcvWa7xV2V56kdldQ0vTt2pO9yIw%2F9db4%2FMgUbIijzU%2F1nsh5U7WAxLbFAbElwDFL4FZNfZx2NUZcE4eDycIVcQhJ5t%2FjjDKaPLG1mZafP1sx%2F%2BEJEShD7DnDdJsNGvbwwR3sEM0s0zrPBPPQBvFkFnjOLCfOrNYTt87a9%2B&X-Amz-Signature=840a23f0b47e494888b4c4ff502445ffda7a5a9d34ea57f7f2e06275be3a0a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB4KBNUC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHM8vWwDarscXrmFkHR3yQOCIyXp1X%2BYc9BxLPNpT2NTAiEArCKsTIOzC4t9B%2FGoTXoDkDCotouybPGvh5n%2BYLbOzXwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnTKNPpHR1qZDhznircA61LToMuPAgz5ks8z6vBuLIkyc8JqPXSgAMw8eRIcoZBtf2LiUACytWuMbBYeU8LD25hhIc7ct%2BUqAScvZGHT2sSQFNOVtpOgM80xuObe4QaEyP%2BzdMBFzFTYmjglQ%2FzFbn%2B9WbsRuomu%2BPmNUTlfS3b%2BM8blkbuzee1NGfd0pegsJEQSk3UF23Bq%2B8wRPSuDJiQGSQj7ot7onxj9VEwkvErwsd8lZTE5f%2FaZlKV%2Bt85%2BiEEZk0iokcTYd4XpcSS62RopQpMOnEG9xNqKqByoSt%2FYKgKzQZdwmIbcEhr5%2B5uS7xZBQoxHUfzhH%2FUBrZgThweYA8OrUH7R1ecnO15nLmfB2ZzZjfhXKZ6vhCXAHAFKyLD0SrJyypjLXk%2FkQGeX45Z4P9%2BWvEw85jXuFcstpMuU%2BrVMHraQAx%2BfohIvFGsB%2Bp3O6ElY7cFeLTNxD8arVsn9QgDEnsr%2B7WXSXjPP3pTy7ylEX3ZqGab116TfDzlmaMVxVtnYmbGmPUVlquj54gvzOT6MskGnpuMHzGIJmqaAVhSEfGkDYJD%2FIB1T5T%2BoSCtWBnfzsvb%2BE%2FCOzhEVX6Z%2BNPqyHw80OSpjWequQZC3Y6%2B6TaJYLEcz4dTMNkiNWL%2FGL80mBpHn5KxMNvp3ckGOqUBZfJILRZbDT6Rd79jJQhWshI71C%2BuUh%2FIxsyccgnhxdO94mUgbU%2FTYgcvWa7xV2V56kdldQ0vTt2pO9yIw%2F9db4%2FMgUbIijzU%2F1nsh5U7WAxLbFAbElwDFL4FZNfZx2NUZcE4eDycIVcQhJ5t%2FjjDKaPLG1mZafP1sx%2F%2BEJEShD7DnDdJsNGvbwwR3sEM0s0zrPBPPQBvFkFnjOLCfOrNYTt87a9%2B&X-Amz-Signature=b4a46f1145184b4654e96e7a6cafe8de32c40b758987b0f48e372c828c15e872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
