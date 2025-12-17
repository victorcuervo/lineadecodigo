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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WYTYCSP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlYxpfXul5B1%2FqM69V7UpsW3nXIvaXoVeyVXgFvuT2xAIgeheWjPLxA3EEtwhjDtclGw07088SedSPHvifQp7PlV8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFv9ddCYjyxIiH7HnircAy9NRA5j36JyFoCIRyrr0b22KFsYRQi9ytuqaPsJkZ6mGRI13C5OgRq9cO%2FBah6eiH2Cq%2Fabj4GLu5JffV6aedgRWmOsSdQuGyXQeEHr1CohSYOM80jqHaVMzVblL6oejHlftDqKsMonlF%2Fd8lGSuvLsivhyvkv6SSLmzP4LlA914oG63gSee0yR1oS5HfNvFcekmDKgJkxVgWyRK8X2aOUG5%2BfQ%2FQpaGhE%2FtxPu9JrL9toRrVGqCB9%2BQ7VQsWAkcDj7FXawtpTznwpMFwRwKntwa9hUhysLnWYndzN5efczBNC9sogkwwJXVR7B7ZkpIleo8Ilf%2BLhwdrjL8YxMZDAHL1aVBJixYsPF2KVfzln5ajQHNHaL1hL73w6gSWga7BcAg68JWGkoJ%2F9xX6J0LZe4f3nNqYcRNVY7ttxnzoxVScCTRn1ITPSVHEATLbsPeDpVxRBw0D7s94Cp52KNhK0q0FnIVmpIwJK8uHuxtNj5U4%2FrpjkWt9tQuEfmFfLwe1HWDW1hFXDheX01puKhi87p46mvNM91dhAQIvTnccKxKvlGtm5NeSfDCFsilUaFOu0omJkDyQyQByphpHZZ1kPRieahj5pnJbWPwQG%2BHU3B2%2FHZm501EUSJ5eRcMJOfi8oGOqUBNlQzaEio8syhtcNnFfBKwBPra5NJuCvH3%2BA7fDgpvxoFGcI5JKrd6Vpx2wwuBbCLsYQFqJZN6HM6oCxWWpqH%2FRl20rFoXmTmsJIhf6HigU3BWpoCFLKHvIvz78WL8jHHWKJUyKxoZhdSvcoJtNR9%2FmHS7Muc4%2B7p%2FUiSsHsDmuCJenqVe3E%2FdO6Z7%2FCo3c7oPqRob38hizn%2Bxki%2F2sz0m9ZYbB1q&X-Amz-Signature=3c2775a889a65d298ed6bc0164a16719951fc4d3cfbd1ddf9098878f9329c432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WYTYCSP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlYxpfXul5B1%2FqM69V7UpsW3nXIvaXoVeyVXgFvuT2xAIgeheWjPLxA3EEtwhjDtclGw07088SedSPHvifQp7PlV8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFv9ddCYjyxIiH7HnircAy9NRA5j36JyFoCIRyrr0b22KFsYRQi9ytuqaPsJkZ6mGRI13C5OgRq9cO%2FBah6eiH2Cq%2Fabj4GLu5JffV6aedgRWmOsSdQuGyXQeEHr1CohSYOM80jqHaVMzVblL6oejHlftDqKsMonlF%2Fd8lGSuvLsivhyvkv6SSLmzP4LlA914oG63gSee0yR1oS5HfNvFcekmDKgJkxVgWyRK8X2aOUG5%2BfQ%2FQpaGhE%2FtxPu9JrL9toRrVGqCB9%2BQ7VQsWAkcDj7FXawtpTznwpMFwRwKntwa9hUhysLnWYndzN5efczBNC9sogkwwJXVR7B7ZkpIleo8Ilf%2BLhwdrjL8YxMZDAHL1aVBJixYsPF2KVfzln5ajQHNHaL1hL73w6gSWga7BcAg68JWGkoJ%2F9xX6J0LZe4f3nNqYcRNVY7ttxnzoxVScCTRn1ITPSVHEATLbsPeDpVxRBw0D7s94Cp52KNhK0q0FnIVmpIwJK8uHuxtNj5U4%2FrpjkWt9tQuEfmFfLwe1HWDW1hFXDheX01puKhi87p46mvNM91dhAQIvTnccKxKvlGtm5NeSfDCFsilUaFOu0omJkDyQyQByphpHZZ1kPRieahj5pnJbWPwQG%2BHU3B2%2FHZm501EUSJ5eRcMJOfi8oGOqUBNlQzaEio8syhtcNnFfBKwBPra5NJuCvH3%2BA7fDgpvxoFGcI5JKrd6Vpx2wwuBbCLsYQFqJZN6HM6oCxWWpqH%2FRl20rFoXmTmsJIhf6HigU3BWpoCFLKHvIvz78WL8jHHWKJUyKxoZhdSvcoJtNR9%2FmHS7Muc4%2B7p%2FUiSsHsDmuCJenqVe3E%2FdO6Z7%2FCo3c7oPqRob38hizn%2Bxki%2F2sz0m9ZYbB1q&X-Amz-Signature=2ef64a0f2517b01abbc62ade3b46bc315a3805c5f7e624a933bcac2311a9e0ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
