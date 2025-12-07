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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCRWW4B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICB0IamrhMl8uXc9JXY8V853x5thisJkT6uDcjpZitTMAiEAreQGIyThXRGiq2MrB3BGe74mNYRuPaeXH2YO%2FQfWMUkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdtKTZ3y7ZX6inuYyrcA0uIWj7m2bviM%2BeHGGSRkSSmJOE4j%2FLWEFAr%2FaECWqbN6STEMZ3yV9r%2Ffmbe1stZ8Pu4G3g7qjzAGAQZJa8rRqRXvqiGJdPyb6P2%2B%2FXWTCW%2B9Tvgj3m1B1q%2FXdcbrvrGREoIH1Q1RCA%2BclCTQQ2qcPRnSIruA8Q7Gw69OyeOcfjfiHcauLq0ScInvwmgrCUgt51NKc3Lis748rB6dHEfQbpMEWm%2FSDf659Rm2428uzUkJVzJhWqWZTfGfWJw3vNF34HKZpFQnfqX0R5dbNo3tKvzHzbyEGsjrtrluv4YGLUqDi2oCTP1reW7hUTzIgMUR1uS8z6jrEsudTdiMpxXVFqDMAKDSe%2FL27Ly1mRlICB52gc0UtVaX0bgMpLqoGXMi2%2FvTXiempqbYldbB7GUWgaMSSo1T6xKypocgjuwqO1VArfaRcd25DpB7J4%2BmTsEB9Rxu%2FGzAAAueAy2D73iu%2FFDvXwr8AVWd0o6E14F2rXeWMdViaS%2ButF6NhNkxLkVFye7ZIEjKwWYFGFvhslojD1swaFDcZhH50NiYnXuQjAZpWx%2BKzA68IiNNl0qVKyrC4C2nUDnbvrhWXfGD8d8EEFaFuKexiykb%2FU%2Bg3Yv0SjCvddHi4wjxi5ma%2B2DMILI18kGOqUBS4K%2F6IXFCnQK1k%2BWEzNvv1sVEvNnqsldem%2FhUXddu8dXlUTj30I82hBNGCVuxyU7hHgGS2DxMD5lds0ro5Qd6%2FB6YDf4rwL%2BUHwrXUpbHvZUHlRKOgRhhnSp3fJoimHyGByVn5Qegd7NIo8SEwLCA7Dzbafh9RPUFF92794AdeXSujVyvxA%2Bk9vm8vHH2u7Dr3OVQKMepENKQpDHxsgVdiTFFeo4&X-Amz-Signature=84c2187bd3e458ef9a7c5c31ec84d69c9dd2d9fc1f0be559efd188ae1854114c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCRWW4B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICB0IamrhMl8uXc9JXY8V853x5thisJkT6uDcjpZitTMAiEAreQGIyThXRGiq2MrB3BGe74mNYRuPaeXH2YO%2FQfWMUkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdtKTZ3y7ZX6inuYyrcA0uIWj7m2bviM%2BeHGGSRkSSmJOE4j%2FLWEFAr%2FaECWqbN6STEMZ3yV9r%2Ffmbe1stZ8Pu4G3g7qjzAGAQZJa8rRqRXvqiGJdPyb6P2%2B%2FXWTCW%2B9Tvgj3m1B1q%2FXdcbrvrGREoIH1Q1RCA%2BclCTQQ2qcPRnSIruA8Q7Gw69OyeOcfjfiHcauLq0ScInvwmgrCUgt51NKc3Lis748rB6dHEfQbpMEWm%2FSDf659Rm2428uzUkJVzJhWqWZTfGfWJw3vNF34HKZpFQnfqX0R5dbNo3tKvzHzbyEGsjrtrluv4YGLUqDi2oCTP1reW7hUTzIgMUR1uS8z6jrEsudTdiMpxXVFqDMAKDSe%2FL27Ly1mRlICB52gc0UtVaX0bgMpLqoGXMi2%2FvTXiempqbYldbB7GUWgaMSSo1T6xKypocgjuwqO1VArfaRcd25DpB7J4%2BmTsEB9Rxu%2FGzAAAueAy2D73iu%2FFDvXwr8AVWd0o6E14F2rXeWMdViaS%2ButF6NhNkxLkVFye7ZIEjKwWYFGFvhslojD1swaFDcZhH50NiYnXuQjAZpWx%2BKzA68IiNNl0qVKyrC4C2nUDnbvrhWXfGD8d8EEFaFuKexiykb%2FU%2Bg3Yv0SjCvddHi4wjxi5ma%2B2DMILI18kGOqUBS4K%2F6IXFCnQK1k%2BWEzNvv1sVEvNnqsldem%2FhUXddu8dXlUTj30I82hBNGCVuxyU7hHgGS2DxMD5lds0ro5Qd6%2FB6YDf4rwL%2BUHwrXUpbHvZUHlRKOgRhhnSp3fJoimHyGByVn5Qegd7NIo8SEwLCA7Dzbafh9RPUFF92794AdeXSujVyvxA%2Bk9vm8vHH2u7Dr3OVQKMepENKQpDHxsgVdiTFFeo4&X-Amz-Signature=fe5e078f53807b6b166dd44e4138ce5cc7c5da77bc5652e96339a187b9fbcb55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
