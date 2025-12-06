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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAIBULWH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuIQX2xihzydY3A2Mgx8WPTAkwEmPTINoi51g%2FLLmRQAiEAhtUEEv9d4d81DJ1uBUhpneRUxrV4HyjXSPCS%2BkNhigEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDKj8PZT4LQVSEru3SrcA%2BKNHg6C31B%2BoEMOByKqwu%2FgV%2BoNT1EGxHZvGeImPJcFlMcQrPHFgmv6vHCFGjILAoquzTuLwpT%2ByVcJd8KZT23qqVpj1Vf5gfFr0pNhiYdzBuiegINJsXPqT6FjGW2FuW3jScHH%2FkG2zN4HGuX3fcddgNM7DzS%2FykE11KwLoc8o7v4NLd6Cp7F3pkeS1jmlceKOrRtqKJZk2Qhe0%2FX3D9WvrFxsai8Gp85%2FXJMVMXp%2FZMdXzd5L306RwBVgirvKwvLRDP8gxyDPvmDURkmKiXLZUcBxYMrkUKTFL1sDYKOm9QQrXPoORel9zurXKu5XtccNA2tLAwsvrobdZX%2F7QL5oW0xRCuX08EP%2Fyi9LvF9Tb6%2Fkcc%2Fjj%2BHEZQEygFg%2Frr2jW%2FvRibWw6PYMARnNH0SzJp9m8Z3eVb359H%2Bb%2F6j8UCrvhG1UxI0lkKCe0gEyH5vcy9AUuQDcEWF9s9wixfEjjUy8OEkEjXGgPBIznNVCJ%2B9HbhavBlVPyZI%2B8N1Jz6Fjem4g0Xo7bR65MbZzc8SsdjJhcMHo%2BboLj68jbkF0OqhQpxgn0H4rt27ocLz3WhCxQed66TYMNOrjoQVnVyE0k8hgbbWpwaGIEMDnu4QOpynoKez9lnoxH%2BycMICozskGOqUBQA2aN4VO%2FT9WJjSbTbs9krDYKynql67n2K2utkJ7mxQITtyd%2BqJmzK6oMQt96zoBiiur6hwB%2F%2Bfeftve3PmruaiCHAOki7LuzzU2ruJsB5z3euEBgazk83QpPLblmYiQBMdlPW4yBW39lsWHBzxQhBbYneJkFT4P07OCYgWf5l6T2cLobFfDvL0AIeqcz6PoXNciD4d7DFqVG9itMEupWTj%2BW60O&X-Amz-Signature=9bea969c95669b7a3393a23476eae6ca974eaabc29aa7c1b726f53aa6a491497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAIBULWH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuIQX2xihzydY3A2Mgx8WPTAkwEmPTINoi51g%2FLLmRQAiEAhtUEEv9d4d81DJ1uBUhpneRUxrV4HyjXSPCS%2BkNhigEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDKj8PZT4LQVSEru3SrcA%2BKNHg6C31B%2BoEMOByKqwu%2FgV%2BoNT1EGxHZvGeImPJcFlMcQrPHFgmv6vHCFGjILAoquzTuLwpT%2ByVcJd8KZT23qqVpj1Vf5gfFr0pNhiYdzBuiegINJsXPqT6FjGW2FuW3jScHH%2FkG2zN4HGuX3fcddgNM7DzS%2FykE11KwLoc8o7v4NLd6Cp7F3pkeS1jmlceKOrRtqKJZk2Qhe0%2FX3D9WvrFxsai8Gp85%2FXJMVMXp%2FZMdXzd5L306RwBVgirvKwvLRDP8gxyDPvmDURkmKiXLZUcBxYMrkUKTFL1sDYKOm9QQrXPoORel9zurXKu5XtccNA2tLAwsvrobdZX%2F7QL5oW0xRCuX08EP%2Fyi9LvF9Tb6%2Fkcc%2Fjj%2BHEZQEygFg%2Frr2jW%2FvRibWw6PYMARnNH0SzJp9m8Z3eVb359H%2Bb%2F6j8UCrvhG1UxI0lkKCe0gEyH5vcy9AUuQDcEWF9s9wixfEjjUy8OEkEjXGgPBIznNVCJ%2B9HbhavBlVPyZI%2B8N1Jz6Fjem4g0Xo7bR65MbZzc8SsdjJhcMHo%2BboLj68jbkF0OqhQpxgn0H4rt27ocLz3WhCxQed66TYMNOrjoQVnVyE0k8hgbbWpwaGIEMDnu4QOpynoKez9lnoxH%2BycMICozskGOqUBQA2aN4VO%2FT9WJjSbTbs9krDYKynql67n2K2utkJ7mxQITtyd%2BqJmzK6oMQt96zoBiiur6hwB%2F%2Bfeftve3PmruaiCHAOki7LuzzU2ruJsB5z3euEBgazk83QpPLblmYiQBMdlPW4yBW39lsWHBzxQhBbYneJkFT4P07OCYgWf5l6T2cLobFfDvL0AIeqcz6PoXNciD4d7DFqVG9itMEupWTj%2BW60O&X-Amz-Signature=bf170a45a712ea10f0f8f3084502607438e8918c3016d30b63d1c1d7f9df98e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
