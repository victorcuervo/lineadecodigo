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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOETAXVY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGZkAJkCcYxcjSH%2B%2FGU4ui%2B%2B2i3pcqO1A6tK6lbWyUYQIhAORNrbIUS5d5UMS8nFEP9XXK2hYDMs7SBs7spXaQF30RKv8DCFsQABoMNjM3NDIzMTgzODA1IgyqEmkWO5BmRb%2FzBoUq3ANBWHly4rz1Q%2F0Lvp7YixocjmrN3Q9%2Fj8%2BjDePxXooPIEcT22kwgRKlvRfyHG6EpW346STS0APUJnvu8ylRF8UC0LR0iNuj34G4ikDfyFegt1n4sJ%2B%2FZLtzgAYm9mv0bSAcSF99ejk6NjBBKvRHnKVP5pjv52Z8qUhSJ8QzfA2GLYxywc9aJE9q%2BwYTu7%2BzsJSu%2FfdMoOBnlAJVrpRfPPfnSR2Ji9OhQt3jfA8rk%2FxCmGHXF7zF1y5oA0ijRtleoeUQwlnBo90WpC7BgWGeFZM%2F3tuW3yPPrl6pOMA1gljWtQdcbZj4x4bXNGDd2xeF8RO03Ws0Vtn51UWq3BCEvJ2mNqM6hfJCaDZqXO8Lg3d1nOc8ucBY3ZH1MhREjKGtCZ%2F21l8qzf4CHm4so9o0h9PfpFteR2Sp3n3SffU9dkDQt7dyrjyMACLDj9y%2FYoCwjMpSUho54moW3JvD9RHw9Mw1pmJFv%2F60FolsIuup8h%2FVXnTnOrjE1DiLcyp8ljnL1sdqqBrWmWj0%2F039TZgc%2BHYErDLRj425uslaZgHdHo87NbgPSGdnJLxJbFQRsIICqlaosSDbsds7rMFU7RnI9vdKMHdxrTLjm9c4p3OcHw9bskbVyTLK7nxMITzXHjCi0crJBjqkAWjnSCVmZt%2F401C8qF3lE0V4v9MEZ3hrVhZtISrmh%2FUw9iZfbUgvH4vMH2BGbo86e5L%2FXhNvG8wyaMaNst4zu4oPlze5FxQV%2BXXE%2Fj4%2FmEqHVLxd4g1WsrI%2BkwG%2FXjnONbqpbBut0XX1tpHVhXHeDNekd7Si8J29PdTPtxIduZRVFqGwrlWTBNSrjpcZvFBTmuxrLGUvrahTjadJ3tUodWBnDvyd&X-Amz-Signature=d6fe5882bbe94d5fb238adecdd9426fe6d2f995279b85afa3ebc8d236bd02f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOETAXVY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGZkAJkCcYxcjSH%2B%2FGU4ui%2B%2B2i3pcqO1A6tK6lbWyUYQIhAORNrbIUS5d5UMS8nFEP9XXK2hYDMs7SBs7spXaQF30RKv8DCFsQABoMNjM3NDIzMTgzODA1IgyqEmkWO5BmRb%2FzBoUq3ANBWHly4rz1Q%2F0Lvp7YixocjmrN3Q9%2Fj8%2BjDePxXooPIEcT22kwgRKlvRfyHG6EpW346STS0APUJnvu8ylRF8UC0LR0iNuj34G4ikDfyFegt1n4sJ%2B%2FZLtzgAYm9mv0bSAcSF99ejk6NjBBKvRHnKVP5pjv52Z8qUhSJ8QzfA2GLYxywc9aJE9q%2BwYTu7%2BzsJSu%2FfdMoOBnlAJVrpRfPPfnSR2Ji9OhQt3jfA8rk%2FxCmGHXF7zF1y5oA0ijRtleoeUQwlnBo90WpC7BgWGeFZM%2F3tuW3yPPrl6pOMA1gljWtQdcbZj4x4bXNGDd2xeF8RO03Ws0Vtn51UWq3BCEvJ2mNqM6hfJCaDZqXO8Lg3d1nOc8ucBY3ZH1MhREjKGtCZ%2F21l8qzf4CHm4so9o0h9PfpFteR2Sp3n3SffU9dkDQt7dyrjyMACLDj9y%2FYoCwjMpSUho54moW3JvD9RHw9Mw1pmJFv%2F60FolsIuup8h%2FVXnTnOrjE1DiLcyp8ljnL1sdqqBrWmWj0%2F039TZgc%2BHYErDLRj425uslaZgHdHo87NbgPSGdnJLxJbFQRsIICqlaosSDbsds7rMFU7RnI9vdKMHdxrTLjm9c4p3OcHw9bskbVyTLK7nxMITzXHjCi0crJBjqkAWjnSCVmZt%2F401C8qF3lE0V4v9MEZ3hrVhZtISrmh%2FUw9iZfbUgvH4vMH2BGbo86e5L%2FXhNvG8wyaMaNst4zu4oPlze5FxQV%2BXXE%2Fj4%2FmEqHVLxd4g1WsrI%2BkwG%2FXjnONbqpbBut0XX1tpHVhXHeDNekd7Si8J29PdTPtxIduZRVFqGwrlWTBNSrjpcZvFBTmuxrLGUvrahTjadJ3tUodWBnDvyd&X-Amz-Signature=d596b7f1c2d837d073f259aa2de8d425de9b532400007f9d78d444d3b1ac2194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
