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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCNRNTXT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgNoAB%2BpleDQg8L7%2F27X%2Bo0Xymfw0YXbfxXrbX2oW9egIgOjn0ik4G09tURviY%2BJ78uXTVAzjUZd6fhDn4zLAIRwkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDCorjm7nlfcNtILyrcAx2%2BYHIJPfOrzcqRrguifdzM2Ym3BW%2FNSWPV%2BVXfdMZQMSbNTxrklC4AzI4p7mKZZCG1F8Wui%2Fsu7KL2CznYKDjP2ScuzwKGL4SWguJkRcOtXz2pQ%2BB5EBCT95XLMnnd%2FkC74PSIbuEN5WPhTm78lemH9LWVo41SG9S4qygskTpKqVgib8lyKw07PqI2ceynPDvyD7Zr4%2B%2F45PBt1cuRqpntHSW59MJNFr1UdmUvkYb8fL6oaAyfRAEqDgmKo8FDIq34syciTEw%2FEbnfV0OroJMRjcsld8DCfzJZDQvQ8rjui9kK6JVknLG7XTLqCNZ6UgNefXXyhN6DGwCdiI8UnaJbB0fENUXJGF8IAdIoAfMMfhqtQwKiZpx7deroVhODFac6wgYPFPU5ZSxOHh2750WV6NR4IX4rYK9KO0XrKeZMheAGXS1Mfs9aEcXrCmD3GhsvpeocOlT598tRP1XoDLUudlHGegwyk5tsyCOyi1LXWtXD54jFEnI7WorZFrTBuBelHUrBtWgCqTaiuI1xhwTaqWAe5u6ouRe1xZ%2FoDYZuQpbuZUTVxVjfketYIg9kl5tvlDT9WdQHFVccwXC3yU4adcpCzgoa4Wu2t6b%2FtAUGF8xmvjxP1lf91%2FHaMOD90skGOqUBatvXE2km8gmz7Q%2Btu3Df4jwWKCIyNWWNRXzxL4SJldYTne%2BrplMhhYiZm13nMIn6TAHjfLjlN55opuVxUXZskHnzjYCjoU8EriozOEuoWeQXxSgO9eCk8FZqAOKss0W8ag9K%2F32zIzifuGK%2BUI4IkB0GlwLM5SYeQUX9IW7UlMl0s9oZbrzyFyoh9GxnEOx3DyOHSQrwXr5OL0f1og1DA%2BYWCVTr&X-Amz-Signature=0379deb1411230b9e719ae4a52244221e872ac3d1e3d65af1f6aab00f72f4081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCNRNTXT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgNoAB%2BpleDQg8L7%2F27X%2Bo0Xymfw0YXbfxXrbX2oW9egIgOjn0ik4G09tURviY%2BJ78uXTVAzjUZd6fhDn4zLAIRwkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDCorjm7nlfcNtILyrcAx2%2BYHIJPfOrzcqRrguifdzM2Ym3BW%2FNSWPV%2BVXfdMZQMSbNTxrklC4AzI4p7mKZZCG1F8Wui%2Fsu7KL2CznYKDjP2ScuzwKGL4SWguJkRcOtXz2pQ%2BB5EBCT95XLMnnd%2FkC74PSIbuEN5WPhTm78lemH9LWVo41SG9S4qygskTpKqVgib8lyKw07PqI2ceynPDvyD7Zr4%2B%2F45PBt1cuRqpntHSW59MJNFr1UdmUvkYb8fL6oaAyfRAEqDgmKo8FDIq34syciTEw%2FEbnfV0OroJMRjcsld8DCfzJZDQvQ8rjui9kK6JVknLG7XTLqCNZ6UgNefXXyhN6DGwCdiI8UnaJbB0fENUXJGF8IAdIoAfMMfhqtQwKiZpx7deroVhODFac6wgYPFPU5ZSxOHh2750WV6NR4IX4rYK9KO0XrKeZMheAGXS1Mfs9aEcXrCmD3GhsvpeocOlT598tRP1XoDLUudlHGegwyk5tsyCOyi1LXWtXD54jFEnI7WorZFrTBuBelHUrBtWgCqTaiuI1xhwTaqWAe5u6ouRe1xZ%2FoDYZuQpbuZUTVxVjfketYIg9kl5tvlDT9WdQHFVccwXC3yU4adcpCzgoa4Wu2t6b%2FtAUGF8xmvjxP1lf91%2FHaMOD90skGOqUBatvXE2km8gmz7Q%2Btu3Df4jwWKCIyNWWNRXzxL4SJldYTne%2BrplMhhYiZm13nMIn6TAHjfLjlN55opuVxUXZskHnzjYCjoU8EriozOEuoWeQXxSgO9eCk8FZqAOKss0W8ag9K%2F32zIzifuGK%2BUI4IkB0GlwLM5SYeQUX9IW7UlMl0s9oZbrzyFyoh9GxnEOx3DyOHSQrwXr5OL0f1og1DA%2BYWCVTr&X-Amz-Signature=8bb9e58a6d27ca9f2beb0ccd0385c06ec162063878ebc342d5e2821874e7b466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
