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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663SMPBP5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdOwynZ8dGQqUHM4LldVHSpliCcRmka8VJuyGXaF0cyAiEAyl2AYV2rpsumXprYIIiFvZldkZTryQEJ%2Bn5TBS5uHcMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpFdN1iFUaU0RXMsCrcA1kth4Ch6SIowC2bM6KhWfxL%2BKgZoBKPObpCmvUFpSeqTHLKT2nRxVW%2F3xWO%2FL0lusF6kQDoLfVlFd4OFEBk8DWcPfQq5N8X9xUrbG43KrIDh1shmcx2u5OSJ%2FAr%2F0WFurS6reQEJbpu7FNtWYNhVWDIdoUAhHtI94IROiKgZu56et2Fpr%2Bg33umJyaUdcdaEcJv8ZkWhWs1FtKHFd2tizj6dIaBnM65xm%2BJ9BJ%2BFLKGF1LfveZaRWILP%2BUwlNFgYuIherF3E0yrMxj119O2fvLEY0McgJfDxjggryeGiNqY1CLd7V%2FbKoTtrS%2BwaCWn6%2FOH%2BgumFirhlrXNKQdh54ErPiD2DizIWqHCeQ5IvS7hTJpIll1vGx8Vp3XndK5vsXsRG3XXozPyKSBx6cZMaT6x6k4U6A8G6w4D8Tm7IY6Qm%2BzYIWKXHudKRmrrYeCzFj6hTWuGKbHsU7V3i8XD3pvOjIP0gcegcJveE%2FnUVVdTblyo7dCwNflViUE3OSAkgGJxyqDyJh%2Foxss%2Fu4USMfmqkerDguDraOWjw0EJh87PxhUwPnckpQ4FsWrKhJHJoZWBxcXUAFv06VGB2GSoXiXqBtd%2F5R1wrCOuL1zSyOVv%2Fz6Ekmis1EaeYedFMPmz2ckGOqUBd7ZonguSrv4se6S6VsqAjDqKDwuxdVXCCcpZs304JSQ3b1snz2YSsJ4GRoKw3Il40RqmwP0scLu4cl0%2FWYlPeHMNqibGc8RiWnQkTjfXW%2BI64VWvolR%2FxAT9PpRnc5TbfpwnNvMmofswoH%2Fl11rXwKumJm8knkXk0euRWKw4GENCR0NTl6TzzYrIj7eaU2mRrQqZbUAbjagzLNeDlA2B1Kb7GTmy&X-Amz-Signature=0f7b8209a40c3ec9718a09b9faf112a052b43b4d03efda2e071109a1095a0e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663SMPBP5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdOwynZ8dGQqUHM4LldVHSpliCcRmka8VJuyGXaF0cyAiEAyl2AYV2rpsumXprYIIiFvZldkZTryQEJ%2Bn5TBS5uHcMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpFdN1iFUaU0RXMsCrcA1kth4Ch6SIowC2bM6KhWfxL%2BKgZoBKPObpCmvUFpSeqTHLKT2nRxVW%2F3xWO%2FL0lusF6kQDoLfVlFd4OFEBk8DWcPfQq5N8X9xUrbG43KrIDh1shmcx2u5OSJ%2FAr%2F0WFurS6reQEJbpu7FNtWYNhVWDIdoUAhHtI94IROiKgZu56et2Fpr%2Bg33umJyaUdcdaEcJv8ZkWhWs1FtKHFd2tizj6dIaBnM65xm%2BJ9BJ%2BFLKGF1LfveZaRWILP%2BUwlNFgYuIherF3E0yrMxj119O2fvLEY0McgJfDxjggryeGiNqY1CLd7V%2FbKoTtrS%2BwaCWn6%2FOH%2BgumFirhlrXNKQdh54ErPiD2DizIWqHCeQ5IvS7hTJpIll1vGx8Vp3XndK5vsXsRG3XXozPyKSBx6cZMaT6x6k4U6A8G6w4D8Tm7IY6Qm%2BzYIWKXHudKRmrrYeCzFj6hTWuGKbHsU7V3i8XD3pvOjIP0gcegcJveE%2FnUVVdTblyo7dCwNflViUE3OSAkgGJxyqDyJh%2Foxss%2Fu4USMfmqkerDguDraOWjw0EJh87PxhUwPnckpQ4FsWrKhJHJoZWBxcXUAFv06VGB2GSoXiXqBtd%2F5R1wrCOuL1zSyOVv%2Fz6Ekmis1EaeYedFMPmz2ckGOqUBd7ZonguSrv4se6S6VsqAjDqKDwuxdVXCCcpZs304JSQ3b1snz2YSsJ4GRoKw3Il40RqmwP0scLu4cl0%2FWYlPeHMNqibGc8RiWnQkTjfXW%2BI64VWvolR%2FxAT9PpRnc5TbfpwnNvMmofswoH%2Fl11rXwKumJm8knkXk0euRWKw4GENCR0NTl6TzzYrIj7eaU2mRrQqZbUAbjagzLNeDlA2B1Kb7GTmy&X-Amz-Signature=6a5d34edaec2d67a2e3badbbdbfebdfae1653b9e9ffeeffeb603861c46931b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
