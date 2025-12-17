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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TIIQLTB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmHXDv6ctASe08rXFGFl8ZIZWOh0RkqQm61IxNR0mFlAiEA5UTdvMUaKrS%2FpmkDl3kFlkMTKk6%2FSluUxzGcqiEINeYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKaixn3JaOaOOjI87SrcA6tPpmG9UrPmWaY0khklg2kIWfllPt6sceqg6Mp4Pdezbj4bqge3%2Brw%2BTfXj%2FhsH13ng31XJUjJDvayZYGEM5kkDRi%2Bl54Vf6PfG3lDkKeaG%2Bd9Z3zKV%2B7uVq6QhKKbuHsS2ViIazhHFssA5MI2gOLxWUWjQjr74fivdidkX8gD%2ByV0bcQ%2BQlzP5%2Bk%2BRY%2F7UX2c3fmN7dCIYpYWXqkMz56KHzBash8wT7sx9hkSiMSzjcCplcyxENqLNqfWIIsLllE%2FaYRRjpq6YAOes9CG4y63R2ZXquecN6IZ1OC1Z8r4L1t%2BvzeRq%2FKKSyKOTiDU01%2BmHT3enipDWfKOfnxPUkpde3CSoHBEa%2FINBsBQKgmmJArp2vebBQv5aBicWr5PTHuz45%2B4oKBroDJXVOeS3vBMIS6q41qrpqXIVI5yTfVWETHlfT%2Fha9TgJyMHwznecWAHQgQJT5mNWwXZXLX06yFrOeYZJ8vz1RIbfIK%2F5ygGnDO3Ib9jZf7xAOLL0swCvjpaGftfXF1Osv9EgIp9QljcNDE0KC44cTWFat%2FznTYPoNUrrj0nghoMRcSfH4T9u9GYq6g6LFZ3HyIFAxkIqdVB4ULkW2CCVSJkdBrPNoWjb%2FEI5RAXOQkR%2BWz1oMO2XiMoGOqUBuhW6%2BGs1i%2FEa2q9XRSFLcwD4oVX95Q4N4nzOZzzY332RIENQmgncdioAkwTM4dVvX8v9KXre4cWrc3ywIS0YoLTcxpqUrpRrJQ0oUBvB%2F%2BQIcicZ78AOAAFMAYj%2BR6G0cwqLdtM76pS306FcjV9slrcj5uAFxeUV9dy1rvB9a41DGuyIZ07rQZgsf%2BtdyLmGNXI%2Ft%2FyI0AU038uoX8VgmTiKVx1h&X-Amz-Signature=959212c9edce03c195540ff2e9655b17ca7a68c6c4d4723c6874255ae4c942bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TIIQLTB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmHXDv6ctASe08rXFGFl8ZIZWOh0RkqQm61IxNR0mFlAiEA5UTdvMUaKrS%2FpmkDl3kFlkMTKk6%2FSluUxzGcqiEINeYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKaixn3JaOaOOjI87SrcA6tPpmG9UrPmWaY0khklg2kIWfllPt6sceqg6Mp4Pdezbj4bqge3%2Brw%2BTfXj%2FhsH13ng31XJUjJDvayZYGEM5kkDRi%2Bl54Vf6PfG3lDkKeaG%2Bd9Z3zKV%2B7uVq6QhKKbuHsS2ViIazhHFssA5MI2gOLxWUWjQjr74fivdidkX8gD%2ByV0bcQ%2BQlzP5%2Bk%2BRY%2F7UX2c3fmN7dCIYpYWXqkMz56KHzBash8wT7sx9hkSiMSzjcCplcyxENqLNqfWIIsLllE%2FaYRRjpq6YAOes9CG4y63R2ZXquecN6IZ1OC1Z8r4L1t%2BvzeRq%2FKKSyKOTiDU01%2BmHT3enipDWfKOfnxPUkpde3CSoHBEa%2FINBsBQKgmmJArp2vebBQv5aBicWr5PTHuz45%2B4oKBroDJXVOeS3vBMIS6q41qrpqXIVI5yTfVWETHlfT%2Fha9TgJyMHwznecWAHQgQJT5mNWwXZXLX06yFrOeYZJ8vz1RIbfIK%2F5ygGnDO3Ib9jZf7xAOLL0swCvjpaGftfXF1Osv9EgIp9QljcNDE0KC44cTWFat%2FznTYPoNUrrj0nghoMRcSfH4T9u9GYq6g6LFZ3HyIFAxkIqdVB4ULkW2CCVSJkdBrPNoWjb%2FEI5RAXOQkR%2BWz1oMO2XiMoGOqUBuhW6%2BGs1i%2FEa2q9XRSFLcwD4oVX95Q4N4nzOZzzY332RIENQmgncdioAkwTM4dVvX8v9KXre4cWrc3ywIS0YoLTcxpqUrpRrJQ0oUBvB%2F%2BQIcicZ78AOAAFMAYj%2BR6G0cwqLdtM76pS306FcjV9slrcj5uAFxeUV9dy1rvB9a41DGuyIZ07rQZgsf%2BtdyLmGNXI%2Ft%2FyI0AU038uoX8VgmTiKVx1h&X-Amz-Signature=05b8f0b56cd2b678318ed786472aaded520b2fcd96db0713ad492a1dd3852cff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
