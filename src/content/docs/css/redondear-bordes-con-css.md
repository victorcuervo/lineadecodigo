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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCW542V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfSHx8JZyircr7Q3nhXEFv%2FPuw1e11bTdCX67scfG1QAiEA8kBMG750J1ETCoPwwdhKE8Lvb%2FZHozzq%2BTVB4nlBc2Qq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDFNfOmWDfcSgDTsJhyrcAwEnSQw62ha5mBNPysgvBQ9nrhJd2p0aTYKhEaJk3R2Opj45MiaCY4yupU3hHwRB%2F6axg6tP5kdyNg1vLCLGvCKoK8%2BxTfyakGU%2BRKe0e%2FaDpcty%2BY9SBuXQYFeLk6Ho4gWssNbd5rQmiX2RyOE%2FI4r%2FFuMLR1s%2F6XAq7lu%2B8xHI6THLdYe2r3oLZIyzSavnZMv1alBy1BGAfSOy7TstzSMNyP6Bnldrg4UOQVEtAmemLQrEF2HFM%2FPX5Y5DykVDoegDfR%2FObA35rXXtq2CmFjzwdzEMIzPFFdBP14aVqWtpOEQ6ETHIyJaIPX5Jpii9iPUOGLnjN9XaUUcaJ3Rp%2F0E5b6GfgxZ5fK6KgrfCaIgLU7GVqVssyDu2K7NPj5FkNCpGLSUiSgr02bNP7BNyMokHvhJfxF3e7FAloYZCg%2F6oAuinPkYz%2F4nh3JHkzx5m5aN%2BUjPxPnhCEwB89fRGnVx9gMKupS6ihST6KMqxsgbyXPA46HBe08yH696%2FqVWL%2F6yeQoW0svyRnhf3pkYG1k5oFvpEGHi0EPHIWiguCGvLWHxvnp%2B%2BMlPkHY4Fa%2BlpGdgCI2KujZOeEdN9dfzbFoP0tRTUeQWGOlRH9UFAU5zMIF85VgsCoXGGw7GJMLjny8kGOqUB9pEXngYELjugPmdGuKphZblOX%2FDv8TQVwWb7Evb94%2BPDkQ3Lgv%2B13pkKeExrKPUluAJJUUPDFoigzC4%2BYXw5xYbWp6mdNvhVyUBARXc5i0KabbVs37pu%2FMhzmWMh%2FgLte2h4Z4TlxDpMaRtnQvtuUTR5Eg4o5wvaHsybqHTvoIPUBGY36sTN4bJJlGvwcbL31BCmn%2FD2y5ZB7WxtBL6E2zl3VgCZ&X-Amz-Signature=d47c036fd1fb48af6052d06c3d500b63213925530aa08b60b7a2f1e148d1cc42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCW542V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfSHx8JZyircr7Q3nhXEFv%2FPuw1e11bTdCX67scfG1QAiEA8kBMG750J1ETCoPwwdhKE8Lvb%2FZHozzq%2BTVB4nlBc2Qq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDFNfOmWDfcSgDTsJhyrcAwEnSQw62ha5mBNPysgvBQ9nrhJd2p0aTYKhEaJk3R2Opj45MiaCY4yupU3hHwRB%2F6axg6tP5kdyNg1vLCLGvCKoK8%2BxTfyakGU%2BRKe0e%2FaDpcty%2BY9SBuXQYFeLk6Ho4gWssNbd5rQmiX2RyOE%2FI4r%2FFuMLR1s%2F6XAq7lu%2B8xHI6THLdYe2r3oLZIyzSavnZMv1alBy1BGAfSOy7TstzSMNyP6Bnldrg4UOQVEtAmemLQrEF2HFM%2FPX5Y5DykVDoegDfR%2FObA35rXXtq2CmFjzwdzEMIzPFFdBP14aVqWtpOEQ6ETHIyJaIPX5Jpii9iPUOGLnjN9XaUUcaJ3Rp%2F0E5b6GfgxZ5fK6KgrfCaIgLU7GVqVssyDu2K7NPj5FkNCpGLSUiSgr02bNP7BNyMokHvhJfxF3e7FAloYZCg%2F6oAuinPkYz%2F4nh3JHkzx5m5aN%2BUjPxPnhCEwB89fRGnVx9gMKupS6ihST6KMqxsgbyXPA46HBe08yH696%2FqVWL%2F6yeQoW0svyRnhf3pkYG1k5oFvpEGHi0EPHIWiguCGvLWHxvnp%2B%2BMlPkHY4Fa%2BlpGdgCI2KujZOeEdN9dfzbFoP0tRTUeQWGOlRH9UFAU5zMIF85VgsCoXGGw7GJMLjny8kGOqUB9pEXngYELjugPmdGuKphZblOX%2FDv8TQVwWb7Evb94%2BPDkQ3Lgv%2B13pkKeExrKPUluAJJUUPDFoigzC4%2BYXw5xYbWp6mdNvhVyUBARXc5i0KabbVs37pu%2FMhzmWMh%2FgLte2h4Z4TlxDpMaRtnQvtuUTR5Eg4o5wvaHsybqHTvoIPUBGY36sTN4bJJlGvwcbL31BCmn%2FD2y5ZB7WxtBL6E2zl3VgCZ&X-Amz-Signature=9350badb0be97a8828c40cf187e6ff2347144c0ca322932023d0a1e9c85debff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
