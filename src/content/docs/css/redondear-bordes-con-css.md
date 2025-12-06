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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX7OODBT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAttRACGKZoKJQohzXPVjDmvp0FLTzQMp1uYYpSiX27AiEA93yKBoGVG37Hb1UZpLjuT5kY2A%2FHNGR5NR723ETLRLIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJTgl0JFAJ0lB2ETAyrcA5f9UYiFmiGHzcihj3AfXdnsXGybDx8FzoGz8%2BAX1S0DBP8s4DRB8qMAGAZlo7HFgQlUJAiLJU5SsnU44kFvy4wa37uwmrhVmuzjPb59aZN2E3yyb%2FOWDHNf2MymVoe%2FGZx0dRQZMkvTTYo3u%2BEyPYIHaBfG9ZukFsVYYSmt0b26HwNBSkDafyyo%2Byr9FkldGT95QsBKGePzWixNqYO4yG5anHywCXsYCVouH2OnZ%2F4Wb6qlQTPA%2FgTiuBd3jbaiwOs3fvZ2GvOXvg4MY5KUTDh72IxR2BBS4FuSC0pOz%2BOCz9EurcmNqybXrk5%2B%2BGNHno6Fe4nmME7wKVJaxy%2Fed1NU5ZkNGBNrVL1sT%2BlyHzJ8bQXm5WcZK5bxvJ5INmBhJIIoQVyitPvCP5rXHB83fQ92CpzvnBDvPPVNRFRiyTFeB4N1SmsbJ3p6lmgQIfqVo32HPCGYZ5HAf%2FSQyGlNVLoMXy62uGY32I%2BwLxDRORcV0FMlSjlGnfbBUowvNqK1HI3yxJudZBKjrqgBF4%2F42aE5Z4uPVa%2BJf5GMry5KDJHaobWMHSOZz76d718XXHZlw5i54q4CvUmpoPfLPLr3tzR1UT%2FR%2FrpVk0GtkLEJkGdAdaVmzRjBRX3YbyzZMKbDzskGOqUB9jPSOKyGLxjpyuKPZqlN3VjAZ3rbN8MbQiAk8BmA9p1PMiXVQBvET2ZRCtBjgRko73AP4crn1Pe5gK%2FWEcyBC9rHz8hsUVL7waVkwv%2Bv985XGMahYFNLDKyGeMGmf6pvt3C%2BSKnjc8Xo4jGAnOh%2Bq4%2FL5%2FZrhV3O715Byr2U18lbD34Gvlodz8%2FFi13kf4kzjBG6BGewp6cOTqVsEKxPnon6FJic&X-Amz-Signature=9079c5d7ffb0f5d8a984083a8199a8f97d8b91117f0fc0b32518e7b0f7eaf098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX7OODBT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAttRACGKZoKJQohzXPVjDmvp0FLTzQMp1uYYpSiX27AiEA93yKBoGVG37Hb1UZpLjuT5kY2A%2FHNGR5NR723ETLRLIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJTgl0JFAJ0lB2ETAyrcA5f9UYiFmiGHzcihj3AfXdnsXGybDx8FzoGz8%2BAX1S0DBP8s4DRB8qMAGAZlo7HFgQlUJAiLJU5SsnU44kFvy4wa37uwmrhVmuzjPb59aZN2E3yyb%2FOWDHNf2MymVoe%2FGZx0dRQZMkvTTYo3u%2BEyPYIHaBfG9ZukFsVYYSmt0b26HwNBSkDafyyo%2Byr9FkldGT95QsBKGePzWixNqYO4yG5anHywCXsYCVouH2OnZ%2F4Wb6qlQTPA%2FgTiuBd3jbaiwOs3fvZ2GvOXvg4MY5KUTDh72IxR2BBS4FuSC0pOz%2BOCz9EurcmNqybXrk5%2B%2BGNHno6Fe4nmME7wKVJaxy%2Fed1NU5ZkNGBNrVL1sT%2BlyHzJ8bQXm5WcZK5bxvJ5INmBhJIIoQVyitPvCP5rXHB83fQ92CpzvnBDvPPVNRFRiyTFeB4N1SmsbJ3p6lmgQIfqVo32HPCGYZ5HAf%2FSQyGlNVLoMXy62uGY32I%2BwLxDRORcV0FMlSjlGnfbBUowvNqK1HI3yxJudZBKjrqgBF4%2F42aE5Z4uPVa%2BJf5GMry5KDJHaobWMHSOZz76d718XXHZlw5i54q4CvUmpoPfLPLr3tzR1UT%2FR%2FrpVk0GtkLEJkGdAdaVmzRjBRX3YbyzZMKbDzskGOqUB9jPSOKyGLxjpyuKPZqlN3VjAZ3rbN8MbQiAk8BmA9p1PMiXVQBvET2ZRCtBjgRko73AP4crn1Pe5gK%2FWEcyBC9rHz8hsUVL7waVkwv%2Bv985XGMahYFNLDKyGeMGmf6pvt3C%2BSKnjc8Xo4jGAnOh%2Bq4%2FL5%2FZrhV3O715Byr2U18lbD34Gvlodz8%2FFi13kf4kzjBG6BGewp6cOTqVsEKxPnon6FJic&X-Amz-Signature=098eadda9c6d699c75e01db9712cfeb8aa94cb6a375e15d3fe78aadf97d15623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
