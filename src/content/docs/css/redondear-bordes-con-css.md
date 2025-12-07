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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4PPZRV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQXuWFaXFF60F7l1P8ewum%2FvPL8iH9qNdPVSDR6ybgDAiAI%2F9yKrGC4zvn3NeNOt9TbelxCbcL0F2EeApxgNvNNbyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyy0%2F6tajlRN0uh0RKtwDqrcdjoUuyPUE%2BcPeHdabghdgf8e1PSMDEWqEaBTtEw8pHW9zEEC77OuVZ0ps82ZidN6MdnnAU2yFcoPVT95pPjbq0FGmPuDieGwrGCSBM6ADNfXKeD9J07Npsl0uL4v%2FNBIjV5Qu30JHnrTMGo87Br7DLgL%2Brth72zX0aSNgu7Enahor%2B0GOdM%2B%2FUsztV6sqDaPl%2B8lPfJa5H3OWTeIah5%2FZMhQcpgO8NR8gvHQk%2Fl%2FK%2F0Ds9NdTEAOhRmXZgu%2FKQeN18fShTGxHBMS6vIdFmpC0HIDZYkDEXG2WQC7DM3zKXvqExfrX6%2BiuuQ%2B1e2m26go70nB95I%2BwZOBkhVrb4kgtI5P2VWsQ%2BIo6OrF3h1evJg6Qry7rVhoMY%2BbbD0vg10Lfne9ABuyv7VsnL786TFJb8Q6xYsmYz%2ByWyNGQMAyqwgwOTSg%2B6tpHq2Z99YEfX6gFXPtQeI4FocGrHJOxcoX3uSvIyYb8EyECYCXpS%2B8yKrsTOuwmto0qLX%2FBc2nJI1VZ%2BXggFGhjnIEq6MmwQBgpf5cbSNte04WU7HVcakeJGUL6FSGJGmnzWrr44bsvVnFiuFz1gKJdT17kqj3U8ur1x%2BQ4iaiwMCATgPbPNski6mfkJBW9Uw9jkh8w5%2F3SyQY6pgFkkcbItGc7ukSYqm1vPGdlJrgtp40crgcu3Wf%2Bpt4mkBTiesggr3WmDzfAALGaGb0uTZNXCcWJ%2FFdSQi1Dufm3te0SC2n4xvQlYwy42F2UIdf1kPbvNoVpw87BeYFYuJLyOLC%2BP0xTPFgJt5GEE2%2BRmgcMfIMgL9NTq0M28RWAH9teJ343bOSxLdAKMOd6N7Q7PPHXKMBKkoQWagNBFLJaxc706ibu&X-Amz-Signature=5cce812b7050a6feda17760bd5440d51101a0fe0b1d5ff27a3d6c071582c08e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4PPZRV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQXuWFaXFF60F7l1P8ewum%2FvPL8iH9qNdPVSDR6ybgDAiAI%2F9yKrGC4zvn3NeNOt9TbelxCbcL0F2EeApxgNvNNbyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyy0%2F6tajlRN0uh0RKtwDqrcdjoUuyPUE%2BcPeHdabghdgf8e1PSMDEWqEaBTtEw8pHW9zEEC77OuVZ0ps82ZidN6MdnnAU2yFcoPVT95pPjbq0FGmPuDieGwrGCSBM6ADNfXKeD9J07Npsl0uL4v%2FNBIjV5Qu30JHnrTMGo87Br7DLgL%2Brth72zX0aSNgu7Enahor%2B0GOdM%2B%2FUsztV6sqDaPl%2B8lPfJa5H3OWTeIah5%2FZMhQcpgO8NR8gvHQk%2Fl%2FK%2F0Ds9NdTEAOhRmXZgu%2FKQeN18fShTGxHBMS6vIdFmpC0HIDZYkDEXG2WQC7DM3zKXvqExfrX6%2BiuuQ%2B1e2m26go70nB95I%2BwZOBkhVrb4kgtI5P2VWsQ%2BIo6OrF3h1evJg6Qry7rVhoMY%2BbbD0vg10Lfne9ABuyv7VsnL786TFJb8Q6xYsmYz%2ByWyNGQMAyqwgwOTSg%2B6tpHq2Z99YEfX6gFXPtQeI4FocGrHJOxcoX3uSvIyYb8EyECYCXpS%2B8yKrsTOuwmto0qLX%2FBc2nJI1VZ%2BXggFGhjnIEq6MmwQBgpf5cbSNte04WU7HVcakeJGUL6FSGJGmnzWrr44bsvVnFiuFz1gKJdT17kqj3U8ur1x%2BQ4iaiwMCATgPbPNski6mfkJBW9Uw9jkh8w5%2F3SyQY6pgFkkcbItGc7ukSYqm1vPGdlJrgtp40crgcu3Wf%2Bpt4mkBTiesggr3WmDzfAALGaGb0uTZNXCcWJ%2FFdSQi1Dufm3te0SC2n4xvQlYwy42F2UIdf1kPbvNoVpw87BeYFYuJLyOLC%2BP0xTPFgJt5GEE2%2BRmgcMfIMgL9NTq0M28RWAH9teJ343bOSxLdAKMOd6N7Q7PPHXKMBKkoQWagNBFLJaxc706ibu&X-Amz-Signature=3e201dbc29c924be72b54287953cd8a15b96dface762c9c814678cd7800dabfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
