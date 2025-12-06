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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGDCMRM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPC5hu9w1UD42pkbWTUN%2B%2FgAtwvpnNJLp7yFVkSqLcSAiEAzyI5jar%2BuJF8tZ%2B1XyTR1fMtpjjNBp7iNoqkHo1J4WEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHNh1x9yoikpaama%2FSrcA1%2BMW43iTuRduXPC2i%2FrmWmN9lLAPErEFHzbO3QjOX2kgt%2Brg4Sw8a1ydNxDO20sXxct4CZ5sLYPZf%2ByhtFgRn%2FG5wqCfS%2B%2FqfSr9Qflv%2F8cnuH6QOkY7JcRFFu%2B0KOPTEiDu7nC2bcXXtGV4rLRNJ5vPtF%2BHbIG7mN4aBfIKv0PKQ6VwRHSqitrMx66Z1noLqHNoTv4yBsFG5iLK55hc0B7qe2SRs1msLj4JQkxTaeaK%2BYsbrPWyUQn6UeabSmxv1HTRxJLZVuUI1hBCPzMRJ3E8JXQtvNr5lQheWnLgCfM8N9bJiVIFodU9GG7FK%2B21iCpoh5B0p2IfsvncWlHe3iXPcRV3j4MZ%2FzaC32e5SFBaxymkkwDo7Pd8s2eIH68vMAAodqbns9ScAHY5WzvmNXa6fDjuotZWYtL3pAC5sZGVwHgWoqXiv1y686mflIvIKhc5PA3PvgfQWqrNhV2ARgOi%2BrlaohD48GcNYQQ3EVwihjW1RVe3SxwUxzoy28fbNX76HayMYSiaZMrF18ERQg3TMK0cuRMiEHZk6bXQo7wXP6s0Zo7%2FHyEDHNNb9erFwbvQ9oHskgHSEDbgSraxGridBi6AOz995TRYEbNOt1kcUA5tlXedn1XrVb0MLfN0ckGOqUBfevCxW1AOr8nkO9ncaVOff8IzaZf02w4xJvkj66%2FPYpcu0XyYg6QKhghs8rng1nFoJzyw73dLfO9mTUkTIfz%2BUY6V%2Btdy2DGnW3eNoRcTFfptnLvo6I%2BI2vBoiTyJzINPnlw1lRToi3DJbjq1NajLkwmIqJG8F2tSyNZwls%2B%2FXTvEkPj2LG%2B3leNJUIWxSEOCYr4R9eSWIakGoToyoUJFAO7q0Nf&X-Amz-Signature=b21c2e0e6d359d16e319d8919bf46c4fd3b2552727b3068799df766842591a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGDCMRM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPC5hu9w1UD42pkbWTUN%2B%2FgAtwvpnNJLp7yFVkSqLcSAiEAzyI5jar%2BuJF8tZ%2B1XyTR1fMtpjjNBp7iNoqkHo1J4WEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHNh1x9yoikpaama%2FSrcA1%2BMW43iTuRduXPC2i%2FrmWmN9lLAPErEFHzbO3QjOX2kgt%2Brg4Sw8a1ydNxDO20sXxct4CZ5sLYPZf%2ByhtFgRn%2FG5wqCfS%2B%2FqfSr9Qflv%2F8cnuH6QOkY7JcRFFu%2B0KOPTEiDu7nC2bcXXtGV4rLRNJ5vPtF%2BHbIG7mN4aBfIKv0PKQ6VwRHSqitrMx66Z1noLqHNoTv4yBsFG5iLK55hc0B7qe2SRs1msLj4JQkxTaeaK%2BYsbrPWyUQn6UeabSmxv1HTRxJLZVuUI1hBCPzMRJ3E8JXQtvNr5lQheWnLgCfM8N9bJiVIFodU9GG7FK%2B21iCpoh5B0p2IfsvncWlHe3iXPcRV3j4MZ%2FzaC32e5SFBaxymkkwDo7Pd8s2eIH68vMAAodqbns9ScAHY5WzvmNXa6fDjuotZWYtL3pAC5sZGVwHgWoqXiv1y686mflIvIKhc5PA3PvgfQWqrNhV2ARgOi%2BrlaohD48GcNYQQ3EVwihjW1RVe3SxwUxzoy28fbNX76HayMYSiaZMrF18ERQg3TMK0cuRMiEHZk6bXQo7wXP6s0Zo7%2FHyEDHNNb9erFwbvQ9oHskgHSEDbgSraxGridBi6AOz995TRYEbNOt1kcUA5tlXedn1XrVb0MLfN0ckGOqUBfevCxW1AOr8nkO9ncaVOff8IzaZf02w4xJvkj66%2FPYpcu0XyYg6QKhghs8rng1nFoJzyw73dLfO9mTUkTIfz%2BUY6V%2Btdy2DGnW3eNoRcTFfptnLvo6I%2BI2vBoiTyJzINPnlw1lRToi3DJbjq1NajLkwmIqJG8F2tSyNZwls%2B%2FXTvEkPj2LG%2B3leNJUIWxSEOCYr4R9eSWIakGoToyoUJFAO7q0Nf&X-Amz-Signature=4904ed1829cc384e2e123909788f38070f4b07a1c76038c7195a6e3f1b356723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
