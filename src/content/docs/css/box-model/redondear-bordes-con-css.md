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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IDZN57N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0StQReKOELhbNXlzNU%2FJXJTAbpm0n3wk3VxYeIoZTgAiBg4kL2Nbv%2FgPZWgP32FRMc48zXKISM3Jtu%2BVUaahzmUSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMIeVkqIXgrbxs0LjOKtwDd3%2Fyna3Dw%2FJYHdK%2FONYIPrT7XSykRzUjk5yggLP4m7LjlfED%2F9ljx%2FYkYT7qBciL2qH8N4Xv0n4Zk2Gx4jl545jt6cSFSBJ0b7mlkZpdXSGK0DJXmsfO8mitHa4Yh2ATT4lsQMg6PZNwFy9aYkIrZlVrVFFjEe7rJGVkC1MNrlg1zN0ihBpy1IwfSl7JzepPYuw0AiyT%2Fq%2FJFU7KV8mhrPjyYsofFlWq04P2kkrADtDg7U01KiE39D4EKdmrrYda7oRh55c2klDTWBJWYl6BQDEDXKL6A4HDAxSlfs%2FVThqHQfDs5OU10avX0eVnAXlfhUlA1NcUC2keE%2FpnKd2D1jpyAFrKd9kBBzYZwf8bfRpD0rzAiPQ%2BHuyAlCGWVLUzkK5N5l5jLKLvAma%2BHqK3xZV4T99ieMTnTCnAXevIxRToiX%2B28D9WlL94xudkP6k6Lk3A3Vi1LPUI07w2dRkLyDqZOJltZ1P2DL2A5ETNhwbUTeF8m0zPyoh9npGC0i0rHMtRzVNYJp3H8FFJigDeBjIua19NxF6MjKO8FO8tZaPOdNjSBNbzQdo45zRH916y84R8%2Bpxa0cb7UPZbo6v7sm%2F6h9Gc1bzp1%2FtyqGyAM68CW0A92tyCMJzfULMwlbiJygY6pgEuFi2bl6d%2BV1rS9JTWSaV711W%2Fk%2FDdA3m48%2FdD9cm9DP7IV5yVsX8V4VOU0PwjqmNR3ZgV0t21mMmJLCPMdNcVrnBIYT5Y%2Bbqr51qCxRriba4Z33yNhzVIpCUOeqy%2F2kbXmIh%2BCZe19d3tUf1motAxjq0vQwZLQyvX%2FK7MfZdYZMlLCRoNvkO0US53v3e%2BhDAVVsyvPGzY89%2BfzHfC8jWBLx8%2BFYuw&X-Amz-Signature=b6e1eae60b72fb3f2d7f997b722bce9a30008d1fc7951c3621265491e62c8213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IDZN57N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0StQReKOELhbNXlzNU%2FJXJTAbpm0n3wk3VxYeIoZTgAiBg4kL2Nbv%2FgPZWgP32FRMc48zXKISM3Jtu%2BVUaahzmUSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMIeVkqIXgrbxs0LjOKtwDd3%2Fyna3Dw%2FJYHdK%2FONYIPrT7XSykRzUjk5yggLP4m7LjlfED%2F9ljx%2FYkYT7qBciL2qH8N4Xv0n4Zk2Gx4jl545jt6cSFSBJ0b7mlkZpdXSGK0DJXmsfO8mitHa4Yh2ATT4lsQMg6PZNwFy9aYkIrZlVrVFFjEe7rJGVkC1MNrlg1zN0ihBpy1IwfSl7JzepPYuw0AiyT%2Fq%2FJFU7KV8mhrPjyYsofFlWq04P2kkrADtDg7U01KiE39D4EKdmrrYda7oRh55c2klDTWBJWYl6BQDEDXKL6A4HDAxSlfs%2FVThqHQfDs5OU10avX0eVnAXlfhUlA1NcUC2keE%2FpnKd2D1jpyAFrKd9kBBzYZwf8bfRpD0rzAiPQ%2BHuyAlCGWVLUzkK5N5l5jLKLvAma%2BHqK3xZV4T99ieMTnTCnAXevIxRToiX%2B28D9WlL94xudkP6k6Lk3A3Vi1LPUI07w2dRkLyDqZOJltZ1P2DL2A5ETNhwbUTeF8m0zPyoh9npGC0i0rHMtRzVNYJp3H8FFJigDeBjIua19NxF6MjKO8FO8tZaPOdNjSBNbzQdo45zRH916y84R8%2Bpxa0cb7UPZbo6v7sm%2F6h9Gc1bzp1%2FtyqGyAM68CW0A92tyCMJzfULMwlbiJygY6pgEuFi2bl6d%2BV1rS9JTWSaV711W%2Fk%2FDdA3m48%2FdD9cm9DP7IV5yVsX8V4VOU0PwjqmNR3ZgV0t21mMmJLCPMdNcVrnBIYT5Y%2Bbqr51qCxRriba4Z33yNhzVIpCUOeqy%2F2kbXmIh%2BCZe19d3tUf1motAxjq0vQwZLQyvX%2FK7MfZdYZMlLCRoNvkO0US53v3e%2BhDAVVsyvPGzY89%2BfzHfC8jWBLx8%2BFYuw&X-Amz-Signature=d48402b50917d7569e11215f161ca1ec7dfdcecb0d4b244cac89fb712b12b8c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
