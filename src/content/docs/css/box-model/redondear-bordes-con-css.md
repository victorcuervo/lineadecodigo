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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXK2EI42%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2XaoFoSXrWgryV5TFmbJV7mkAWTTgrpFnaqXCbUP0YAiAr9gPFyD2W%2BkRroLZTCw4ucsvCQFQadZfX9xQ4r8UGciqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNfgRapX0v4WTy%2BbrKtwDRKaTO8I%2FK735O4Y7bM0QQGqd%2BzQLq%2FZ7gvQbmZtUk%2BX5RWbK4a642t9Hf4jI0u0C3IdS4bAMRZYgD%2BS2vS0fSgWU0LOejOb4PU%2FjyxvBiqukDkHGbcnOcLLHt%2FrzGfRFJGE8WHKbv%2BUbWZ8bYr6RKJkm7qjhXQh%2BGXtjomvZjKquYifOtiDM9VI3TfhT4wBVAA3I1qfn9xCA%2FxlplHfJe9MQba2migQDk06qzpK4QCmJ4AxkDp4FSigqhQm0tVXeu1Pu2UhdyEuFxJfhuAhECFCgldnXJ4kRxZG0Vb%2FbBtbLTr3XLLEHkkFnNzbLdK68J9E1FqA6ase8bcqWctlkeJ6HifWLMJxDRoMEJpnPbHF%2BWQhm4%2B9WwEu8UbFdZjj%2FxQ1G2%2FivxzuUBRKdA%2B0Il%2B6j8oU%2FeuL3Eq0uhaMDFT0edbsl%2FYcRCudGr0znqnzD%2FF30lvF0dLbGABf4zkIcuRAI53btqy3XnxZI8qUhd6D%2F05iBfzCV3SL7qpwDhGOarpPPQKXViByG9nhiX9pOEalTbyLor69P%2BLuB3loIVi%2BrRvbeIT9dfUmI0ve1jHGnxNO3Qutv1BmFwC98VcrITAZ92Jd5VWZLBHgXFm8FNPRYLq3r%2B0LNJwSS%2BcQwwZ%2BLygY6pgHr82%2FZXIIZBnqCuGm5qnIZhxnwstignXbGpZ16URTN88n8JxBCAMF8jWCPrDqKrClOIJ7xoP8%2FFzFkGwXIdgNS%2BPyCJBuH2OJ8UcFV10PeyGKPxA8pO77ZZDipbqyUazUl6TP%2BWXGdXPBlDHlxUQWWDEe1K4dXYpcGoPJ2Lv7Z7d1KXFadRzf9JYu9dg2GctOgb7ystUOLFWSkB%2BfQv7TUHqK6E%2F6T&X-Amz-Signature=fc70509c7cd0051ab2e04cbc20cd373cadc5b1e779d6925cd27e14738004cf9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXK2EI42%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2XaoFoSXrWgryV5TFmbJV7mkAWTTgrpFnaqXCbUP0YAiAr9gPFyD2W%2BkRroLZTCw4ucsvCQFQadZfX9xQ4r8UGciqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNfgRapX0v4WTy%2BbrKtwDRKaTO8I%2FK735O4Y7bM0QQGqd%2BzQLq%2FZ7gvQbmZtUk%2BX5RWbK4a642t9Hf4jI0u0C3IdS4bAMRZYgD%2BS2vS0fSgWU0LOejOb4PU%2FjyxvBiqukDkHGbcnOcLLHt%2FrzGfRFJGE8WHKbv%2BUbWZ8bYr6RKJkm7qjhXQh%2BGXtjomvZjKquYifOtiDM9VI3TfhT4wBVAA3I1qfn9xCA%2FxlplHfJe9MQba2migQDk06qzpK4QCmJ4AxkDp4FSigqhQm0tVXeu1Pu2UhdyEuFxJfhuAhECFCgldnXJ4kRxZG0Vb%2FbBtbLTr3XLLEHkkFnNzbLdK68J9E1FqA6ase8bcqWctlkeJ6HifWLMJxDRoMEJpnPbHF%2BWQhm4%2B9WwEu8UbFdZjj%2FxQ1G2%2FivxzuUBRKdA%2B0Il%2B6j8oU%2FeuL3Eq0uhaMDFT0edbsl%2FYcRCudGr0znqnzD%2FF30lvF0dLbGABf4zkIcuRAI53btqy3XnxZI8qUhd6D%2F05iBfzCV3SL7qpwDhGOarpPPQKXViByG9nhiX9pOEalTbyLor69P%2BLuB3loIVi%2BrRvbeIT9dfUmI0ve1jHGnxNO3Qutv1BmFwC98VcrITAZ92Jd5VWZLBHgXFm8FNPRYLq3r%2B0LNJwSS%2BcQwwZ%2BLygY6pgHr82%2FZXIIZBnqCuGm5qnIZhxnwstignXbGpZ16URTN88n8JxBCAMF8jWCPrDqKrClOIJ7xoP8%2FFzFkGwXIdgNS%2BPyCJBuH2OJ8UcFV10PeyGKPxA8pO77ZZDipbqyUazUl6TP%2BWXGdXPBlDHlxUQWWDEe1K4dXYpcGoPJ2Lv7Z7d1KXFadRzf9JYu9dg2GctOgb7ystUOLFWSkB%2BfQv7TUHqK6E%2F6T&X-Amz-Signature=de416717bba7e44268ac00718f0255c49029f2e90de6fd2e8f7575052468bc93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
