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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2M32HGY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2NRf1u5GHyDIU%2FFuWxecdbSmr1DI0KckoJFx3YJGXYQIgQ2fGPWtMRG806UJ4GHNESoO%2FY6w%2BmZSSAyNm1rBPGuMqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRQqnbYDuUFG2wsRircA0mgDlPKn9grc7Itd0PPFnQa097s%2BCk5r3FML3YfpIgnFRTitk6uLftFh4qMFK0iwyOilcv2KdrmqnGdrCMI0%2F%2BIJ72Xk%2Blu2eSu3pQch3b%2BRPbdZfLrPzd0IitUWUuTcKGKc%2BrW941utxtohhTtDjpTQILBIpdUgV3Euqz5RqA075uqBRaihDajPaUO9kVUhfDvJnMpdYuDvb2lxOmOGlZh6RaDbcbbNprrx2bP3NfC%2BJ%2FHremxSfyZ%2FB1r1humvlRhvOklY1BGjidrYJjBX1DrFF5DBkS%2FjWDZX7Gr6eSyC6jD9Syzpap72%2BW3NOHPf0RygH0DUf4KtDEIzy9OQnWpI%2FsbP4z3Pu%2FvS1JWSjR3%2FNngkOh4bviH1AjZN3LhET%2FayeZM1U0BGZ%2Fs4xPEEptmS8P7uz21QbdGb1f0gwo4sudEoK6QvZXOlwI5DTwd6JRND%2FlnUhbP0UqB3H6IwwrRdgxw2%2F0RhpiRuiwmD0bZ8UpBridNyDQ0j%2Ba7F5aOFOMgL9HljAxpa3sv1sXhs3it7SkIWiiXhpKzOLP1X%2FMdUeFWWNLG%2B3OSvJI5xDRPdyviUullm2YbPfGz0HMamdcZuK5m5vQYutkDmYe3852xGE%2FBF6FWhVKM2NUfMMqz1skGOqUBI%2BPk9zpadU5u0IAt4NSMDNeGlgV%2BiitwlfFMkKNzud%2F%2FtF1VdQjX9iyTGD%2BgPkIZBW6YA3bV0LcpZSHiTrRjXtOJK41HuybX9n17E5QMc3MppZAdh9XBtSBYt5iExVJEh8gDNU1PP8QhoTMDoiP2dei4xH9mc836ZaZeme2gg6Vkg9bV5B5dU4rc01wl4JnNZt%2FXFPs3cMGh%2FIjUE1xZjIeMz0FX&X-Amz-Signature=88b038f36e6c6bf9bdb67a253b6f9c340256e4b3bef9df059006736c6ae0e78d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2M32HGY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2NRf1u5GHyDIU%2FFuWxecdbSmr1DI0KckoJFx3YJGXYQIgQ2fGPWtMRG806UJ4GHNESoO%2FY6w%2BmZSSAyNm1rBPGuMqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRQqnbYDuUFG2wsRircA0mgDlPKn9grc7Itd0PPFnQa097s%2BCk5r3FML3YfpIgnFRTitk6uLftFh4qMFK0iwyOilcv2KdrmqnGdrCMI0%2F%2BIJ72Xk%2Blu2eSu3pQch3b%2BRPbdZfLrPzd0IitUWUuTcKGKc%2BrW941utxtohhTtDjpTQILBIpdUgV3Euqz5RqA075uqBRaihDajPaUO9kVUhfDvJnMpdYuDvb2lxOmOGlZh6RaDbcbbNprrx2bP3NfC%2BJ%2FHremxSfyZ%2FB1r1humvlRhvOklY1BGjidrYJjBX1DrFF5DBkS%2FjWDZX7Gr6eSyC6jD9Syzpap72%2BW3NOHPf0RygH0DUf4KtDEIzy9OQnWpI%2FsbP4z3Pu%2FvS1JWSjR3%2FNngkOh4bviH1AjZN3LhET%2FayeZM1U0BGZ%2Fs4xPEEptmS8P7uz21QbdGb1f0gwo4sudEoK6QvZXOlwI5DTwd6JRND%2FlnUhbP0UqB3H6IwwrRdgxw2%2F0RhpiRuiwmD0bZ8UpBridNyDQ0j%2Ba7F5aOFOMgL9HljAxpa3sv1sXhs3it7SkIWiiXhpKzOLP1X%2FMdUeFWWNLG%2B3OSvJI5xDRPdyviUullm2YbPfGz0HMamdcZuK5m5vQYutkDmYe3852xGE%2FBF6FWhVKM2NUfMMqz1skGOqUBI%2BPk9zpadU5u0IAt4NSMDNeGlgV%2BiitwlfFMkKNzud%2F%2FtF1VdQjX9iyTGD%2BgPkIZBW6YA3bV0LcpZSHiTrRjXtOJK41HuybX9n17E5QMc3MppZAdh9XBtSBYt5iExVJEh8gDNU1PP8QhoTMDoiP2dei4xH9mc836ZaZeme2gg6Vkg9bV5B5dU4rc01wl4JnNZt%2FXFPs3cMGh%2FIjUE1xZjIeMz0FX&X-Amz-Signature=bad4ada1e643c07f5dd3c8cf8b05d5a226d948b36d0dbed10ee2720cf39d955d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
