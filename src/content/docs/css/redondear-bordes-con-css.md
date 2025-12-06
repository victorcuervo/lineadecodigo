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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY66WJKS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGys7FLmjQajggAW2URh%2FARqvSkvEpW9WbGPXoHbOobCAiEA50p%2FFIY7Dt%2FDuXloZVmhOxz%2FvpdCX9FdHvw6yZYcZRUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDE5NeXQ0vapEPRIK%2FyrcA8vUI%2FrVw5jGWvvEfINPb1l4JnG15CG7cYsZqvSR2lW0XeMNQQouMLlDWXVq%2FGlGsqpNzL0ENS6tge%2FcUOsG2xAB8okgHOP0LZsRatPAq%2Fne7DhrXYJCaIzxRl6jA7hu3fvLAVJ8qbLdTXFGwYpGHvk9RvZFqISbiIqGX6Lg4CF0EszFzxXuuE67a%2BOATm3pxJaat1Bqe7JAatB9qEqG2aksWaMKpupMBc2r7RJgdwwpAsDOskx%2B6%2Fn%2BlU5WIugZuVkfzzOJYoE%2FfCMpT%2BCTCahDIOz3O9H9Gk5fB3GTnvrXKC7dq7Gwb3UjHNH%2Fty1GecvPUza5nbQnD6qWFXJ4cPfbea0tEwaOAo2mPZU4q0iyXdi53U4Uvk9LpHOQz0XckahWB5PDlY4TRQD3tO6d%2Brg6UApBjC43SMt9p%2BEM%2FrgJkDfcevfGy4fYGHWYaUuq9QhKlTJVvvQR1R0d3G2o4gS%2F7Ud01LHuZ1%2B6HpuQPmle3Z52woNo7aBvKf%2FczPM9KjivJfOpcNUfq1x9cIdcmFYClWziJfoMGQtqUY1ycOAtt4XCmswxxC1ZTUIDBBkuZRdLwzbvhMFLa6t0a28mDC4V49F8MsK9wBKsbU3V9fOG1emNYjTJ9QL92gqnMKu8z8kGOqUB4PenPkGUXSMxzpgTgksD%2F5kT6EOzWFX01NuQuOAwa93qdbdJBMhYZME%2BU1jpA0x9fHOPMnmg0Wgc2J1Cg91ht7AfhckVIk8QD4ENvtgGyDYM8pWlO72JrfTvD7Dr4OwE39rE8xgTE0CiX0HZCJN3FRNIf8nQEz31y4x5pnC%2BXVjHEmACcqM%2Bo3I9D6QPaskeGBZijh9%2Bl%2Fa%2Fx%2BeDzy7%2FgTepk8mF&X-Amz-Signature=0844adc0652cc648d61a2a5668f54949f40fd4aee1a63513f2682e269c7388a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY66WJKS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGys7FLmjQajggAW2URh%2FARqvSkvEpW9WbGPXoHbOobCAiEA50p%2FFIY7Dt%2FDuXloZVmhOxz%2FvpdCX9FdHvw6yZYcZRUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDE5NeXQ0vapEPRIK%2FyrcA8vUI%2FrVw5jGWvvEfINPb1l4JnG15CG7cYsZqvSR2lW0XeMNQQouMLlDWXVq%2FGlGsqpNzL0ENS6tge%2FcUOsG2xAB8okgHOP0LZsRatPAq%2Fne7DhrXYJCaIzxRl6jA7hu3fvLAVJ8qbLdTXFGwYpGHvk9RvZFqISbiIqGX6Lg4CF0EszFzxXuuE67a%2BOATm3pxJaat1Bqe7JAatB9qEqG2aksWaMKpupMBc2r7RJgdwwpAsDOskx%2B6%2Fn%2BlU5WIugZuVkfzzOJYoE%2FfCMpT%2BCTCahDIOz3O9H9Gk5fB3GTnvrXKC7dq7Gwb3UjHNH%2Fty1GecvPUza5nbQnD6qWFXJ4cPfbea0tEwaOAo2mPZU4q0iyXdi53U4Uvk9LpHOQz0XckahWB5PDlY4TRQD3tO6d%2Brg6UApBjC43SMt9p%2BEM%2FrgJkDfcevfGy4fYGHWYaUuq9QhKlTJVvvQR1R0d3G2o4gS%2F7Ud01LHuZ1%2B6HpuQPmle3Z52woNo7aBvKf%2FczPM9KjivJfOpcNUfq1x9cIdcmFYClWziJfoMGQtqUY1ycOAtt4XCmswxxC1ZTUIDBBkuZRdLwzbvhMFLa6t0a28mDC4V49F8MsK9wBKsbU3V9fOG1emNYjTJ9QL92gqnMKu8z8kGOqUB4PenPkGUXSMxzpgTgksD%2F5kT6EOzWFX01NuQuOAwa93qdbdJBMhYZME%2BU1jpA0x9fHOPMnmg0Wgc2J1Cg91ht7AfhckVIk8QD4ENvtgGyDYM8pWlO72JrfTvD7Dr4OwE39rE8xgTE0CiX0HZCJN3FRNIf8nQEz31y4x5pnC%2BXVjHEmACcqM%2Bo3I9D6QPaskeGBZijh9%2Bl%2Fa%2Fx%2BeDzy7%2FgTepk8mF&X-Amz-Signature=2147217753a290cd3ba3641a14701878d0577c413223408a7d68896665c260e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
