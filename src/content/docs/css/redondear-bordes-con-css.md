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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPAH5B6K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJrBblNPLNx7ahlBetFxPWsNhnIug839nOXH0cZXeV5gIgHQlOUf2D5iQ8UVDjf%2BOBYfVw9MWRZcKJD8a9NJtqSPwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLfn3aoCpYxOFqclkCrcA8bcaxpRx%2FmTGT9lKQWrHIKuGX0JD7Nps48BUtGzzABks0FxGDjKYlCT4KAJYFqI8jxPqvq%2B2h6dg5fxi7cFvv%2BAwQ4OphC82AIgJG0C%2FiHcrI5P8KoLLfyT3O7JlDlQqNhBer2HM5u2sKJ7EUeJ1stm6O8%2BGBSkFEEBHggthxCGE%2FCj0It6bT8ArnyevsYVnq%2F1jI0C7dgOV1nE6CO%2FOWWCzLE3j%2BC%2FKJUe1%2F6IrsM%2FerTLjpMqctk1cb3vLJAYYyrd%2FodttVqV%2Fy%2FN7dOYJjQc3okmpzb%2FiD4oypYvAt3jjLe7A1%2FEGeseaFuk9imzFHO0lWJAdqWv61Fl99rKceGQVGGas55F5M4OlQxzPrKWudza4CtkxtKXYykQae0ZXHibWhPn63VcKHE7sy3rXEvd%2FsUad1sy2YNYzfbeMpP9whgqsMqXz6%2BL15nHLdHllEt4bNju9W%2BN8MsvnW2NgqW43u655hi1j6qyLtspAHlx6ShGdeU%2BaB045vVSkA4Ya3oHRuDjJ%2FB%2FwAXvqbQMipEJIrZuF5RrkBBVbXOcV7X6fnce28bvcikvfXD6ymRlTmyFylbsGzcdy6ggS2Xlu97cEDoKOZiadVPkGb3mSYg3oRBrH1He50I4WAhJMN6xyckGOqUBdW3Nit59ax%2FiB%2FdvOtwrLu%2FO1pzB2SHNp6cSx5FnzGtn8MT0FjsFkcygzfbeSz8R2TCT2DVsPdTCufz2KRiYVOThgfCL9Wfjp308U1kTBpy4gYo5raqjpBU542nRS1ZA9mbXkPYoR8sKjhikRYLUtJN4tV544XuGqX3dc2adWn3RswoNIbWAYbuvaHP4XXZLzOKVMnVJQNzlaR7N0iEVohYPSin3&X-Amz-Signature=3458d51d155ae57891f0546e28cb24d4dfef5797fd58681d59bd303c8ff87827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPAH5B6K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJrBblNPLNx7ahlBetFxPWsNhnIug839nOXH0cZXeV5gIgHQlOUf2D5iQ8UVDjf%2BOBYfVw9MWRZcKJD8a9NJtqSPwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLfn3aoCpYxOFqclkCrcA8bcaxpRx%2FmTGT9lKQWrHIKuGX0JD7Nps48BUtGzzABks0FxGDjKYlCT4KAJYFqI8jxPqvq%2B2h6dg5fxi7cFvv%2BAwQ4OphC82AIgJG0C%2FiHcrI5P8KoLLfyT3O7JlDlQqNhBer2HM5u2sKJ7EUeJ1stm6O8%2BGBSkFEEBHggthxCGE%2FCj0It6bT8ArnyevsYVnq%2F1jI0C7dgOV1nE6CO%2FOWWCzLE3j%2BC%2FKJUe1%2F6IrsM%2FerTLjpMqctk1cb3vLJAYYyrd%2FodttVqV%2Fy%2FN7dOYJjQc3okmpzb%2FiD4oypYvAt3jjLe7A1%2FEGeseaFuk9imzFHO0lWJAdqWv61Fl99rKceGQVGGas55F5M4OlQxzPrKWudza4CtkxtKXYykQae0ZXHibWhPn63VcKHE7sy3rXEvd%2FsUad1sy2YNYzfbeMpP9whgqsMqXz6%2BL15nHLdHllEt4bNju9W%2BN8MsvnW2NgqW43u655hi1j6qyLtspAHlx6ShGdeU%2BaB045vVSkA4Ya3oHRuDjJ%2FB%2FwAXvqbQMipEJIrZuF5RrkBBVbXOcV7X6fnce28bvcikvfXD6ymRlTmyFylbsGzcdy6ggS2Xlu97cEDoKOZiadVPkGb3mSYg3oRBrH1He50I4WAhJMN6xyckGOqUBdW3Nit59ax%2FiB%2FdvOtwrLu%2FO1pzB2SHNp6cSx5FnzGtn8MT0FjsFkcygzfbeSz8R2TCT2DVsPdTCufz2KRiYVOThgfCL9Wfjp308U1kTBpy4gYo5raqjpBU542nRS1ZA9mbXkPYoR8sKjhikRYLUtJN4tV544XuGqX3dc2adWn3RswoNIbWAYbuvaHP4XXZLzOKVMnVJQNzlaR7N0iEVohYPSin3&X-Amz-Signature=3e25db5412f4723352064b4355b3ffbd50022433849b1e9380ba0b216c980959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
