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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFWM34F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuRjibhEDsRG1YNxVnugFgaAKQhNWTO2fg6II11lDa6gIgSoT9LPpc2KsDwS5bvxeoz8SER6ppxhCV1UA7%2B5M%2FE7IqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNK9VP8J29QAMYrr3ircA3nzfpViWV05NIjERLhFol1YT64s7CFzbTySfZr7WudRj50AryJ8DwKMzUASZwYTgfY%2FEpsxDP4xg96jL6ZREW65jDi2LYDOPdzvD6i1YjddzNSBx13nlXUCyk%2Fp8MpDjJ6kN6tpW8vimxan2sp14DBBVBNsHc%2FzfyCmdjYqaAm8r2Jx7qssAQ58lRzUMBiKsoSAX%2FCwePrU6smyGFCb%2B5b5w9CQ3EppUpgMgQAS4ALk1ZgZp5ds4f1PYPfVqNlqLvcbmWWi3SD8mnnlDC6pScdZlcconwSeYEWBWiYoMZrY%2BMY3x%2FKKkZbf1aKFgqP8DVRYeeaOv3Xw2NrTF%2FgX6MiqnJbdBTfRcF%2F93LrULials0YKKIxkzHWi9KUgmlJ%2FShCwa4rFDhsNthLlrILsuULC7xMzRLIU8Zzy0v9ZIsGcGrhbAAWWAmGpIzVu3wk7A01Ld16RUi1gXvijlCurdIWf2VxrzLq2TZRo37GnU2Y9RdvrWhYi4e096iruzGa%2B8WPR1HnpFR8rgM7hrhM2rincSZe27Dk5ZG9iM8ip%2FQNsy8Ysj7vR6tOYALA%2FxK7vcl0nS1wvXRK1%2FnS3gqR7siCTxmgcIh%2FtT6J%2FyKYuGpGGgC1WdK%2FcfToAamU2MLiF2MkGOqUBhEU8cQn5%2FmE25425N0FSyUY6hsN74XlxrMuXepIOcEUh%2F%2FGmFqFxDMaZ7Rxvf8TZvoKVDEgViiLjsutL4l8qfmO%2FmDVxRRDaMCY1XcVkc%2Bn%2FOirsVsU1ACpbzP%2FdqldvcUtGVEVIjhMJ4Pztwh%2FWoMGl08Isyipa%2FYfquXO9ZtQO8L%2F0Tqgl5qH4aK%2FcLgFXQXjaoiZgQ76j931qanjY9GZIEoZl&X-Amz-Signature=ae3b3386662490d157c8ae6d9244ec4370bdf0eef320011bf47abd28047d648b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFWM34F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuRjibhEDsRG1YNxVnugFgaAKQhNWTO2fg6II11lDa6gIgSoT9LPpc2KsDwS5bvxeoz8SER6ppxhCV1UA7%2B5M%2FE7IqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNK9VP8J29QAMYrr3ircA3nzfpViWV05NIjERLhFol1YT64s7CFzbTySfZr7WudRj50AryJ8DwKMzUASZwYTgfY%2FEpsxDP4xg96jL6ZREW65jDi2LYDOPdzvD6i1YjddzNSBx13nlXUCyk%2Fp8MpDjJ6kN6tpW8vimxan2sp14DBBVBNsHc%2FzfyCmdjYqaAm8r2Jx7qssAQ58lRzUMBiKsoSAX%2FCwePrU6smyGFCb%2B5b5w9CQ3EppUpgMgQAS4ALk1ZgZp5ds4f1PYPfVqNlqLvcbmWWi3SD8mnnlDC6pScdZlcconwSeYEWBWiYoMZrY%2BMY3x%2FKKkZbf1aKFgqP8DVRYeeaOv3Xw2NrTF%2FgX6MiqnJbdBTfRcF%2F93LrULials0YKKIxkzHWi9KUgmlJ%2FShCwa4rFDhsNthLlrILsuULC7xMzRLIU8Zzy0v9ZIsGcGrhbAAWWAmGpIzVu3wk7A01Ld16RUi1gXvijlCurdIWf2VxrzLq2TZRo37GnU2Y9RdvrWhYi4e096iruzGa%2B8WPR1HnpFR8rgM7hrhM2rincSZe27Dk5ZG9iM8ip%2FQNsy8Ysj7vR6tOYALA%2FxK7vcl0nS1wvXRK1%2FnS3gqR7siCTxmgcIh%2FtT6J%2FyKYuGpGGgC1WdK%2FcfToAamU2MLiF2MkGOqUBhEU8cQn5%2FmE25425N0FSyUY6hsN74XlxrMuXepIOcEUh%2F%2FGmFqFxDMaZ7Rxvf8TZvoKVDEgViiLjsutL4l8qfmO%2FmDVxRRDaMCY1XcVkc%2Bn%2FOirsVsU1ACpbzP%2FdqldvcUtGVEVIjhMJ4Pztwh%2FWoMGl08Isyipa%2FYfquXO9ZtQO8L%2F0Tqgl5qH4aK%2FcLgFXQXjaoiZgQ76j931qanjY9GZIEoZl&X-Amz-Signature=34c4a703269a0dbc74748f7cb4fca699723d3e44267a87c15959c4d00331b05f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
