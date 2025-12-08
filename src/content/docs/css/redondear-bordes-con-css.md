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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSXUNA4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2wk%2B4SjgS7w0pOqHbb1ZBtFUJKZSTecPiF9RAzPr1vwIgHQb057mtnbOV%2BAEsbFTapVCoRi4Cb5QHEc6aepmqDKoqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPi3CTZuXAfzQWlhYSrcA2RyCFYzVI1jZnd2K26G5YiMJu%2B%2F48YJC6Sela2OCK3oKhchLbes57Hsmd2H0jHYBBfaJdsY9zq8KoeqwmwpbvHxHl4Ed0AshboOWdEJpsDdxJjed1pF0RPYuS2gVg7XGI5RAnKiZjf6H15BN1cF7%2FQhcWNPltEaLr0EXx6a%2B%2BPLfNU12J5UUIlzptNUJZX0WqW52a4UhPFWwMTtikkh4N8Ew93VGz%2BffHkzmoB%2BfxR6LaBZw00HJU%2B5idu%2FJPX%2BQUMVGema1vPzDdYf%2BEs4VUhGw4l99w8LlIs1S7MYmHh%2FeywHIzPdstA1QwpXF8VOTL2bsx7jOrL2o3wPGsXTmTKoMpEgp7dp9EqZHiAOybIJ%2FwFTAOOvymzzi7o4LZEnFQyyZCy1KMyviaSRzObTZWn54JjVmEv4shPr75XZ6768vkAMv90FE9qUuNGY%2BcpbkCpKDT4gNE%2FcwzcxrM2RdM0wUgqsGkkXqtAqBlkzXoit0Y%2F3UYlrVCs%2BXw2XEWeyTdWa5qLku5EeQ0fKtwRi6FW%2FDZybEvjbhFznRATz1Q92Tc6VSgW8hC1x0AsYVwrxeLLWMBZaXjNJspEJAHcVwteQQDyhYpRwm4lNtZ0uWD3pQeOE0OG35nxgl6kMMMju2MkGOqUBNN3DM%2ByUHzqidcjUSaxRtDYi2qQBRhPfyUcZSL0juZ%2F61zaxjAUtS7knLXDP%2BnWvWai5fgosxUT9C3fMm%2BMX4B9LAd8sv2MlJh7URwADabFMiclujRUgzYfS7uFINoVZMNEBIc3si%2BHC%2BmOBku42t9hnBb%2BNcGyXvdnqXWmg6dE3l2ts%2Fo43LZwhly4ougmt0v01Yvc2R6oCzUv87%2F%2BnGEbAE982&X-Amz-Signature=29c66bba5398f2e53d1c5be4741364f98761e8625f1cb212fba4c20a959f630e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSXUNA4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2wk%2B4SjgS7w0pOqHbb1ZBtFUJKZSTecPiF9RAzPr1vwIgHQb057mtnbOV%2BAEsbFTapVCoRi4Cb5QHEc6aepmqDKoqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPi3CTZuXAfzQWlhYSrcA2RyCFYzVI1jZnd2K26G5YiMJu%2B%2F48YJC6Sela2OCK3oKhchLbes57Hsmd2H0jHYBBfaJdsY9zq8KoeqwmwpbvHxHl4Ed0AshboOWdEJpsDdxJjed1pF0RPYuS2gVg7XGI5RAnKiZjf6H15BN1cF7%2FQhcWNPltEaLr0EXx6a%2B%2BPLfNU12J5UUIlzptNUJZX0WqW52a4UhPFWwMTtikkh4N8Ew93VGz%2BffHkzmoB%2BfxR6LaBZw00HJU%2B5idu%2FJPX%2BQUMVGema1vPzDdYf%2BEs4VUhGw4l99w8LlIs1S7MYmHh%2FeywHIzPdstA1QwpXF8VOTL2bsx7jOrL2o3wPGsXTmTKoMpEgp7dp9EqZHiAOybIJ%2FwFTAOOvymzzi7o4LZEnFQyyZCy1KMyviaSRzObTZWn54JjVmEv4shPr75XZ6768vkAMv90FE9qUuNGY%2BcpbkCpKDT4gNE%2FcwzcxrM2RdM0wUgqsGkkXqtAqBlkzXoit0Y%2F3UYlrVCs%2BXw2XEWeyTdWa5qLku5EeQ0fKtwRi6FW%2FDZybEvjbhFznRATz1Q92Tc6VSgW8hC1x0AsYVwrxeLLWMBZaXjNJspEJAHcVwteQQDyhYpRwm4lNtZ0uWD3pQeOE0OG35nxgl6kMMMju2MkGOqUBNN3DM%2ByUHzqidcjUSaxRtDYi2qQBRhPfyUcZSL0juZ%2F61zaxjAUtS7knLXDP%2BnWvWai5fgosxUT9C3fMm%2BMX4B9LAd8sv2MlJh7URwADabFMiclujRUgzYfS7uFINoVZMNEBIc3si%2BHC%2BmOBku42t9hnBb%2BNcGyXvdnqXWmg6dE3l2ts%2Fo43LZwhly4ougmt0v01Yvc2R6oCzUv87%2F%2BnGEbAE982&X-Amz-Signature=1b3e2bd74b9d6b182fd6b3cfe439f8e3d82994ec4ac58f9942fce6b02e25360f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
