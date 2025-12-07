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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FT4Z5U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBl%2FcM%2FMRH3vfiFJQlJjX9Ay4TgcKFcWR16qNh7ChxpgAiEAp6QIJ9PzT0izYBiWpIapcLMgjqvtZpUVArqez2REdr0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmxqYp1EiJ5cahn0CrcA%2BlLgX%2Fl2B3YAgGS0pdYH3oj86X%2FukkvsqXx4sJ6x%2BLLIqVOQBd%2BXuXJf%2FqTfXurMyz91P%2BTLsWWEwEJmeehFnVK%2FQL8Q5gthD%2BwdihvY3L4Rf2BgBm56uT54tMrFERHXk9np0lZKqRnri6EVT6UN8AL7NyOEjJIb2RLwWKDiqfpiezCSh02hbdUSZzBNPJM42EB48KtPX7%2FkbI6xvQ9ENlhpATGnMPzbbmNgVbuI6yFT4aePmpcsR4AA3irPy5zZcPNyT5i%2ByrbiUQ7k%2FjmNWfJjX9LkSoRrnRX6o%2BYIwrHprt0EievAZe8RDo4Ox%2BdeH89OolyDH3CvYuQ1IsaqzZOn0wxXyXqMlF%2FUxQj0C10K1DJIqknyvldiLqhoj%2BoF2%2FXHh7utkV%2BA%2F%2FDvp4uH2%2FbWoQSLUSc%2FTIxYLB7yvqrQozzkqB1W8Q6jcv%2B7X%2F92saXfTWAoNqN%2BBffr1uFf1PdfEozziMJFNwnP3CWSMUzn6xy3OiJgNM%2BxHhEqUMI2YGAVvIx46aiZhJmXDj5dGSW2bnBzxImsWjp7pmnZNLHI%2FWlYRdxqUs9vsQxAPST9nOsxIDmcSNZUj%2FiwVK8iZkb4Y6Bvw0wn029x7QsBPKKIkb%2Fil3vRouRJM%2BqML2g1MkGOqUBuA%2FEoyOLlHC2kDNEpBAqkV8W6ZQm1dsC%2FlQqDqDMCAFcfQLSRtLDYok4ZSZnVoa2XYDZoi6BBdCABF7Ju4a0%2BEoj0nn4DIuV2%2BkaQDHKL8sn3x80zrgmjs7A4aDsBcm%2BmzEWuZRYcbxqIieBf0%2BwBgCs3OsdI%2BO94rDI32Na1XjyXE4LC6kJ1U1GFWYAgT0k4sszESN43Lw3C1eHRqXZLR%2Bm6taO&X-Amz-Signature=aa9e14fd0c8a64b8f3c3e020711aa180adefb40dcaad19155dc54387b516b89f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FT4Z5U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBl%2FcM%2FMRH3vfiFJQlJjX9Ay4TgcKFcWR16qNh7ChxpgAiEAp6QIJ9PzT0izYBiWpIapcLMgjqvtZpUVArqez2REdr0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmxqYp1EiJ5cahn0CrcA%2BlLgX%2Fl2B3YAgGS0pdYH3oj86X%2FukkvsqXx4sJ6x%2BLLIqVOQBd%2BXuXJf%2FqTfXurMyz91P%2BTLsWWEwEJmeehFnVK%2FQL8Q5gthD%2BwdihvY3L4Rf2BgBm56uT54tMrFERHXk9np0lZKqRnri6EVT6UN8AL7NyOEjJIb2RLwWKDiqfpiezCSh02hbdUSZzBNPJM42EB48KtPX7%2FkbI6xvQ9ENlhpATGnMPzbbmNgVbuI6yFT4aePmpcsR4AA3irPy5zZcPNyT5i%2ByrbiUQ7k%2FjmNWfJjX9LkSoRrnRX6o%2BYIwrHprt0EievAZe8RDo4Ox%2BdeH89OolyDH3CvYuQ1IsaqzZOn0wxXyXqMlF%2FUxQj0C10K1DJIqknyvldiLqhoj%2BoF2%2FXHh7utkV%2BA%2F%2FDvp4uH2%2FbWoQSLUSc%2FTIxYLB7yvqrQozzkqB1W8Q6jcv%2B7X%2F92saXfTWAoNqN%2BBffr1uFf1PdfEozziMJFNwnP3CWSMUzn6xy3OiJgNM%2BxHhEqUMI2YGAVvIx46aiZhJmXDj5dGSW2bnBzxImsWjp7pmnZNLHI%2FWlYRdxqUs9vsQxAPST9nOsxIDmcSNZUj%2FiwVK8iZkb4Y6Bvw0wn029x7QsBPKKIkb%2Fil3vRouRJM%2BqML2g1MkGOqUBuA%2FEoyOLlHC2kDNEpBAqkV8W6ZQm1dsC%2FlQqDqDMCAFcfQLSRtLDYok4ZSZnVoa2XYDZoi6BBdCABF7Ju4a0%2BEoj0nn4DIuV2%2BkaQDHKL8sn3x80zrgmjs7A4aDsBcm%2BmzEWuZRYcbxqIieBf0%2BwBgCs3OsdI%2BO94rDI32Na1XjyXE4LC6kJ1U1GFWYAgT0k4sszESN43Lw3C1eHRqXZLR%2Bm6taO&X-Amz-Signature=fee64e33df596a7e2ce79de2898ba0ef7e3b7bc2020d55551da1f992886d7d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
