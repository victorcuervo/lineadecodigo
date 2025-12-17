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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB6RZ2EH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBxCgr0OZMwglugXsHNJOLimxbnMuHKWh0ehjAFRowmAiEA5NxfQpkBvliJ92ZzE%2FxACHJont7s8qV%2FyX4Up6q8974q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLRuXb8rjBff29cVyCrcAy3boeENounxtCoAVz95uKwUwba9%2BpET94cFr2n06IVx29GvSKJIQ6vjw%2B9lTV1NAgnQ0I79XOWZxOUeBzA3XEXX6%2Bh%2BcW4VKVWoLxeIvvSRI%2FTrxMNh0zteey8prgreVyW%2FCiTLMtQR04WYGJZXwNzRqs9JGan8zB1kIePhgQylfD%2FwE2NLoQns6K6nE%2Borxdh6GLs38gknYgygqjcirwUwixxOuytqF1%2BmjbKZBPUuqGtotKfKh4yGyPhwT1R%2FtQPWH9Yyilt4OYBa6ixaN6kI%2BkTo%2BxEfzu%2FqY4eY8Bmccb%2BCL2EqQOiNu4djtQ9vBruabaK%2FAgYC673bBaHEv0PBhcQsGQLIa806c7wHRDxwLt1Jl2lWzLRvppvmrGSW24iBDlkCSNKhuG3Iw%2Bj5nhfGiilD7z3O7KNBiNMWJH727%2Ff9u39vmsXNqJaiekP5KPtOW6SxAm3wRasXWia0QR7GAjqlKUoQBLRt9IIwp0P%2BTKuZRhLWcBa%2FDexAyPJyRcRQns0AxCnQojmIJpthMXsVvK5WaUCfzDaQkUr3TYVj2bfrsqO2c%2Btee4r4IufONbk5blRYo523EXORVJCd9SO7plctDVZGHN9qUGJ6e5g9b2YB0wy3QNbvhiJYMN%2FFisoGOqUBDp%2F4WUq5oOMBDS2bt%2BTQ5iHOT0tYNJq4Qf3bE%2FwFeizGDKLPW%2FX8lsLEGB2zrV6t3RvkAhS5EYsBPIJQ8QW3m6AL1ZUaJ8ZfX8T09BEzVL5VRzf6Am0ChJc%2BY%2B1OPJOiBL0p8ugeNKkux5WKfTl6JeH2oAWc%2BflW3MhzBweXvk7aGtkzmRRWafUF92fWE5KBeBR3cinVqrewfoWVPq5qlh4qnaPr&X-Amz-Signature=9ed26368f4fa86d3fbb7d72e8872ab755702e36ac95725bb9f4a9179519b4eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB6RZ2EH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBxCgr0OZMwglugXsHNJOLimxbnMuHKWh0ehjAFRowmAiEA5NxfQpkBvliJ92ZzE%2FxACHJont7s8qV%2FyX4Up6q8974q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLRuXb8rjBff29cVyCrcAy3boeENounxtCoAVz95uKwUwba9%2BpET94cFr2n06IVx29GvSKJIQ6vjw%2B9lTV1NAgnQ0I79XOWZxOUeBzA3XEXX6%2Bh%2BcW4VKVWoLxeIvvSRI%2FTrxMNh0zteey8prgreVyW%2FCiTLMtQR04WYGJZXwNzRqs9JGan8zB1kIePhgQylfD%2FwE2NLoQns6K6nE%2Borxdh6GLs38gknYgygqjcirwUwixxOuytqF1%2BmjbKZBPUuqGtotKfKh4yGyPhwT1R%2FtQPWH9Yyilt4OYBa6ixaN6kI%2BkTo%2BxEfzu%2FqY4eY8Bmccb%2BCL2EqQOiNu4djtQ9vBruabaK%2FAgYC673bBaHEv0PBhcQsGQLIa806c7wHRDxwLt1Jl2lWzLRvppvmrGSW24iBDlkCSNKhuG3Iw%2Bj5nhfGiilD7z3O7KNBiNMWJH727%2Ff9u39vmsXNqJaiekP5KPtOW6SxAm3wRasXWia0QR7GAjqlKUoQBLRt9IIwp0P%2BTKuZRhLWcBa%2FDexAyPJyRcRQns0AxCnQojmIJpthMXsVvK5WaUCfzDaQkUr3TYVj2bfrsqO2c%2Btee4r4IufONbk5blRYo523EXORVJCd9SO7plctDVZGHN9qUGJ6e5g9b2YB0wy3QNbvhiJYMN%2FFisoGOqUBDp%2F4WUq5oOMBDS2bt%2BTQ5iHOT0tYNJq4Qf3bE%2FwFeizGDKLPW%2FX8lsLEGB2zrV6t3RvkAhS5EYsBPIJQ8QW3m6AL1ZUaJ8ZfX8T09BEzVL5VRzf6Am0ChJc%2BY%2B1OPJOiBL0p8ugeNKkux5WKfTl6JeH2oAWc%2BflW3MhzBweXvk7aGtkzmRRWafUF92fWE5KBeBR3cinVqrewfoWVPq5qlh4qnaPr&X-Amz-Signature=ca087e561351e8792d5bbacf3d750a910004e496eeb025e9b58edab89b4353cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
