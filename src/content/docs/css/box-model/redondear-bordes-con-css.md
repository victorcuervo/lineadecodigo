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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRH36CZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyXKStBGTzwY7xCy6j82MBMiwP7GW4%2FoiEwm3O3%2BJbuAiEA7VXD8Ya5noNa36ke3oUjV3Yyix5SkSsY2PO2EJPE3nUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQiWyJXoBJHE3e%2FHyrcA8ZYXCRZ06YMaO4sfe4PuoA1od3xaRWvBuAAM3RFYaqPq7bg57sQd9kPZCuFCeWMNfgsyKgn6v27Kwf%2BBhSkDfUkFPsjOKg4GK%2FyLWbXKcqXwOBz3QeOJt89vvl3dgM32YQYjuvv3LSdFymaWLIk0OZbzwvwu%2F%2B4YhijNJfsKj9hzd8bcz65zCsp7yrjS5s1FKyb9%2BlnX%2B2mcbP5BD4h67s6Rw1wBQtu3iFhLUVpGkCClyM%2BxL6HwHsFLpORWYG%2B1nIrnNiHn9EXc2pBv3Z5RRx5HrmV%2By4sI4mG9%2FL%2BBlsjGkUhOvgBbt3tkzp7ggoT1kQQZeQ5EIF9lB%2FuCDVkF7uQJwiXPi2lfAQO4mW5GaONKo41m5C4IowmEYMXtG%2FQ1r3EcZnLAyuqHyRV5odzmctjQiAI1CtHiO%2FiyfCehC6rnxwyaS4b1%2BUvzglo9KJv1CCXWfhUvdsoP16%2Bp8HyvThnIcRNhaa%2BHhd%2BxfshRCKTVtWiHXneFq5JCIuVLawI604342ul6rCIJMVm9%2ByTHiic%2BLahUnpH7WyLNhIgvJobTmHhzci0rPSlE6Hk4ICwBcBsw%2B8xbh7NRpxlMIr6NrjPS0L5%2FBvUxpLVduVxpliSMdnamR%2BUU%2FNkI6%2B6MIGfi8oGOqUBiz8kYsUyh%2FWrluBs05CNx00PNvBj5d2fhucwnYheBQgAUQQ9Uxgbo5%2BRXuxEGOHvR%2FL0euBfaIro1tKCQ3GPpqmqKhbVk%2Ftvq8MLc7u%2FD4lOBmDh1gRZZsWLm%2BsRjs7kF3RNs%2BZP9ZnVcS7kGKI51fiZOuEQKF8TT9fAKpVX5KhAlm7RiucxnGSZf%2Bmd0KRoVds5cw%2F4iWhwoKLbTcVrZddaPe0m&X-Amz-Signature=1540f57287ab0d58366e54548ff37664ccd27a73660ba4380995ddbe528079f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRH36CZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyXKStBGTzwY7xCy6j82MBMiwP7GW4%2FoiEwm3O3%2BJbuAiEA7VXD8Ya5noNa36ke3oUjV3Yyix5SkSsY2PO2EJPE3nUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQiWyJXoBJHE3e%2FHyrcA8ZYXCRZ06YMaO4sfe4PuoA1od3xaRWvBuAAM3RFYaqPq7bg57sQd9kPZCuFCeWMNfgsyKgn6v27Kwf%2BBhSkDfUkFPsjOKg4GK%2FyLWbXKcqXwOBz3QeOJt89vvl3dgM32YQYjuvv3LSdFymaWLIk0OZbzwvwu%2F%2B4YhijNJfsKj9hzd8bcz65zCsp7yrjS5s1FKyb9%2BlnX%2B2mcbP5BD4h67s6Rw1wBQtu3iFhLUVpGkCClyM%2BxL6HwHsFLpORWYG%2B1nIrnNiHn9EXc2pBv3Z5RRx5HrmV%2By4sI4mG9%2FL%2BBlsjGkUhOvgBbt3tkzp7ggoT1kQQZeQ5EIF9lB%2FuCDVkF7uQJwiXPi2lfAQO4mW5GaONKo41m5C4IowmEYMXtG%2FQ1r3EcZnLAyuqHyRV5odzmctjQiAI1CtHiO%2FiyfCehC6rnxwyaS4b1%2BUvzglo9KJv1CCXWfhUvdsoP16%2Bp8HyvThnIcRNhaa%2BHhd%2BxfshRCKTVtWiHXneFq5JCIuVLawI604342ul6rCIJMVm9%2ByTHiic%2BLahUnpH7WyLNhIgvJobTmHhzci0rPSlE6Hk4ICwBcBsw%2B8xbh7NRpxlMIr6NrjPS0L5%2FBvUxpLVduVxpliSMdnamR%2BUU%2FNkI6%2B6MIGfi8oGOqUBiz8kYsUyh%2FWrluBs05CNx00PNvBj5d2fhucwnYheBQgAUQQ9Uxgbo5%2BRXuxEGOHvR%2FL0euBfaIro1tKCQ3GPpqmqKhbVk%2Ftvq8MLc7u%2FD4lOBmDh1gRZZsWLm%2BsRjs7kF3RNs%2BZP9ZnVcS7kGKI51fiZOuEQKF8TT9fAKpVX5KhAlm7RiucxnGSZf%2Bmd0KRoVds5cw%2F4iWhwoKLbTcVrZddaPe0m&X-Amz-Signature=96fbd552b1ed8f367720edaf4b10f4268f4236e0d5a80dbdcdece055d64e2573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
