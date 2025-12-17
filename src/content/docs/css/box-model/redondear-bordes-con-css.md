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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMFHJJZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQh8DDbgmRhp9DKO%2FDJt6FbHcJiU%2Fg3eWw5a0qHmFEHAiA9DFsxjd1M%2BuqojByBNWS6dCEi36UFSlXkfyBY%2Fb%2BWXSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZz5kxf5vJDHdzJjeKtwDSEHma7vlFGypGg7BwGgms8bl9rTVgrRY3UlD8oYQmRgjY8gs278BsdaZdFPVTeWbhAu1ZZBvi%2FGfmT2m9OmF68ql4g1qC5Ba%2F2VP5FO14tx3jHFE4C4zODw8jV25O9pfVGHV0eijBRwXjM43%2F270vCYH4wxyow2donaZmNWgj%2BnbLIb4dSbX8fehZH0PNxDUxyGxHEIQeJOJ9x%2BFy5AUGqs%2Bw5fAj0YIv9CKzwcpwswYzzWThojUTjZGr0lI3511hm4%2F%2FFYJ82EAzf%2BQlnX13uteiapbSaxGvaADelUUDmI9k0tsoOQnIeBtEbwPf6U9ES%2BazQBbuMDwuP0VU7ihbWKvOoJxYvBsOMR4IgUxkHI5sR%2BDUcOBRhQrbRCKfYipVcGtu1bAyrf0mHug62Ab9EYLrhV%2FjDisKKmtorwFThV4IgOr6pIrHAPp8neK7bGShDTnrdGSEDOEvaNU%2BvDurYrFZJVOeM5oSvMKoO8aJ%2BgFoPPPXycX63qXlBz%2BIsmtpyHL%2BxkpAYJNh9EyFlGaQA1FVKp78nrtybfMwfcihP%2FWyComDKo2pcM6QCDGENkQTTJHlTfNkJPJAPyNWofYKjfGjHwdzcgV3we3GmWqs4IGRGCt0%2FwFS9Jh77kw%2F5%2BLygY6pgFfg0q5gDp6TtM1jfK%2BnEDbwFq2QFzfpQEgCp2tk52lcZ%2B%2Fb3j1Q9cg2XdXyDSVONVr3v6GfgBOhTKKK%2BvJieX5FeUPcTCqH9Vc%2BloTzgHlNCiefggLLXWwLhm0n0VdHghjpHFECGkyZRZFGw3P60ynLD4ynRNIpOadu6E6ax375NQJZw0%2FJp78Y920NHFrMfJHpFwMbwtvXg6T5J9duGqKmUcepZYm&X-Amz-Signature=a425cac2cf8e32d1f5fae52810e020e56fd65beaf52f803b1e7b1e6362a21787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMFHJJZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQh8DDbgmRhp9DKO%2FDJt6FbHcJiU%2Fg3eWw5a0qHmFEHAiA9DFsxjd1M%2BuqojByBNWS6dCEi36UFSlXkfyBY%2Fb%2BWXSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZz5kxf5vJDHdzJjeKtwDSEHma7vlFGypGg7BwGgms8bl9rTVgrRY3UlD8oYQmRgjY8gs278BsdaZdFPVTeWbhAu1ZZBvi%2FGfmT2m9OmF68ql4g1qC5Ba%2F2VP5FO14tx3jHFE4C4zODw8jV25O9pfVGHV0eijBRwXjM43%2F270vCYH4wxyow2donaZmNWgj%2BnbLIb4dSbX8fehZH0PNxDUxyGxHEIQeJOJ9x%2BFy5AUGqs%2Bw5fAj0YIv9CKzwcpwswYzzWThojUTjZGr0lI3511hm4%2F%2FFYJ82EAzf%2BQlnX13uteiapbSaxGvaADelUUDmI9k0tsoOQnIeBtEbwPf6U9ES%2BazQBbuMDwuP0VU7ihbWKvOoJxYvBsOMR4IgUxkHI5sR%2BDUcOBRhQrbRCKfYipVcGtu1bAyrf0mHug62Ab9EYLrhV%2FjDisKKmtorwFThV4IgOr6pIrHAPp8neK7bGShDTnrdGSEDOEvaNU%2BvDurYrFZJVOeM5oSvMKoO8aJ%2BgFoPPPXycX63qXlBz%2BIsmtpyHL%2BxkpAYJNh9EyFlGaQA1FVKp78nrtybfMwfcihP%2FWyComDKo2pcM6QCDGENkQTTJHlTfNkJPJAPyNWofYKjfGjHwdzcgV3we3GmWqs4IGRGCt0%2FwFS9Jh77kw%2F5%2BLygY6pgFfg0q5gDp6TtM1jfK%2BnEDbwFq2QFzfpQEgCp2tk52lcZ%2B%2Fb3j1Q9cg2XdXyDSVONVr3v6GfgBOhTKKK%2BvJieX5FeUPcTCqH9Vc%2BloTzgHlNCiefggLLXWwLhm0n0VdHghjpHFECGkyZRZFGw3P60ynLD4ynRNIpOadu6E6ax375NQJZw0%2FJp78Y920NHFrMfJHpFwMbwtvXg6T5J9duGqKmUcepZYm&X-Amz-Signature=ec0918c81caef992a841506c0ee4830603df2e71a705b405fa96c6bdd366be98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
