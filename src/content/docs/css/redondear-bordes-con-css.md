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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R7K2UBW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC8OjiqznKtoYAJbZFEmB4kdIXfjj1xFKCxqB0TC0H6AiEA%2BY5wyqU5GaqelPMIIyx3uxiL%2BB%2BWbWHzyHLarOaCmLQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDI4VBtff0S5tesN1iCrcAz6Y8CdQIfG9FElKouLqbVOjm8dRGPI1M7XBIBWztq9kt1jF%2Bnod0jr9TB2jr7%2FGsPkXGGAF0bJk9ssJ6zPQzvw2xjkUR4CUmUidDS9qnxH02hkYIunjHQNdKNupmAQYM%2Bkvv8k6PkT7nkpUnPVH269Z%2FtBiuz1R6hIKjS3DuCZZvStL0G1RTJuuY1EWHKZXbtdKXjzLltVwTth%2Bg%2BKeUr0VuFU6t9ALnCFy2tjSv11xnP89V7jYIfkn9Fol5iWWbkQk4aIU%2BAw0rHRpmeGC3Y6DwgY%2BXwZOiLtembwXaGM2HPW5tuiKMzUEXoewl8uk9WJWv%2Fz6fzGKdA1Ne4qCfYf99N6NAq9Fb7YHnp3TpYqmGewBSp91J%2F9KZipsJ9SGd%2FLRICqmcQm%2F%2BZoWoJuAcaXo%2FjUkngi7F%2BOP8UHQ0uEeu%2BRsR0sUuW4unypLyLLEiukyR4Nf8vMrCNV8N0BQkJ8BS5uR24lTmD1XkONuwDfLrjI9DfPXCZB7aeJyWF9u%2FyqBrJcBkUNeJBOaj%2BpFMb2yvDNjiByuiB3q5rdDTZje2X4XQ%2BG73NHQeO%2BwtlLuRVXwFEYHVYkct1%2BL3l5QE55yZ1XOum90AatHQf%2FIE4%2B2UoiUKcI1jfzM9b42MJPT0skGOqUBj%2F%2BAwiPaje9oBWi6RRgjvDbNoidLCnaZCkuTr2iI29xDWiYXCgTcS12aY%2FswqvvNmpbVKbfOoSA0XwyJxLwdoxTgVdkpPMD63oze0mEp2VIQeM4eMSJgAP6%2B3IxXmYMJ8hmqH%2FAhWhJRVjwYPHBAUoinJdTy9L497rKXUmXzlPZx1%2Ft7DaKv%2B67GkE5GB6S9LI8DrvgQ05rqOKk511OvjYkSbBUb&X-Amz-Signature=4c3325aa1ea9cd736d33766a493b06b7148c875e5cea68f9d7a953c9fdbe0bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R7K2UBW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC8OjiqznKtoYAJbZFEmB4kdIXfjj1xFKCxqB0TC0H6AiEA%2BY5wyqU5GaqelPMIIyx3uxiL%2BB%2BWbWHzyHLarOaCmLQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDI4VBtff0S5tesN1iCrcAz6Y8CdQIfG9FElKouLqbVOjm8dRGPI1M7XBIBWztq9kt1jF%2Bnod0jr9TB2jr7%2FGsPkXGGAF0bJk9ssJ6zPQzvw2xjkUR4CUmUidDS9qnxH02hkYIunjHQNdKNupmAQYM%2Bkvv8k6PkT7nkpUnPVH269Z%2FtBiuz1R6hIKjS3DuCZZvStL0G1RTJuuY1EWHKZXbtdKXjzLltVwTth%2Bg%2BKeUr0VuFU6t9ALnCFy2tjSv11xnP89V7jYIfkn9Fol5iWWbkQk4aIU%2BAw0rHRpmeGC3Y6DwgY%2BXwZOiLtembwXaGM2HPW5tuiKMzUEXoewl8uk9WJWv%2Fz6fzGKdA1Ne4qCfYf99N6NAq9Fb7YHnp3TpYqmGewBSp91J%2F9KZipsJ9SGd%2FLRICqmcQm%2F%2BZoWoJuAcaXo%2FjUkngi7F%2BOP8UHQ0uEeu%2BRsR0sUuW4unypLyLLEiukyR4Nf8vMrCNV8N0BQkJ8BS5uR24lTmD1XkONuwDfLrjI9DfPXCZB7aeJyWF9u%2FyqBrJcBkUNeJBOaj%2BpFMb2yvDNjiByuiB3q5rdDTZje2X4XQ%2BG73NHQeO%2BwtlLuRVXwFEYHVYkct1%2BL3l5QE55yZ1XOum90AatHQf%2FIE4%2B2UoiUKcI1jfzM9b42MJPT0skGOqUBj%2F%2BAwiPaje9oBWi6RRgjvDbNoidLCnaZCkuTr2iI29xDWiYXCgTcS12aY%2FswqvvNmpbVKbfOoSA0XwyJxLwdoxTgVdkpPMD63oze0mEp2VIQeM4eMSJgAP6%2B3IxXmYMJ8hmqH%2FAhWhJRVjwYPHBAUoinJdTy9L497rKXUmXzlPZx1%2Ft7DaKv%2B67GkE5GB6S9LI8DrvgQ05rqOKk511OvjYkSbBUb&X-Amz-Signature=36450ac85100bbbc717657c7bc9df2a7d7571381dff098042015d23a459cf9d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
