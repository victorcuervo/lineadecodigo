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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UIHJHEW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAb8aE14nPHJxevjR9ZkkHZJuTHeRD4gQImWeOWcgkPgIhANXp9MTVJn2Snf0JVpUhiWdRuenULIVVOZ2tIUp4yExhKv8DCHIQABoMNjM3NDIzMTgzODA1Igz5G3dOw1IurodafZYq3ANJcefgiYVChG7B1lqbg%2BaehSPwPuNQVux4E%2FyRWYzqBLttmlCdIatilagAjuGy0GwA9gPPJvYi7qo9F6XbOyEtg4fUOzvJxy6IimhTop45YMoPEFuiReFrdc7wXrifxN4V%2Bqyi7okW6GKbWH%2FmDZOngVMjkipKh%2BkzEijf4jDAPFTLJsQNSJjRI%2F1APv%2BWHMpwwxBTXqEPnTOAdJMpcHDGk3JTSzogGCU0yvdiZlAK6G61IS19b08KD0lBX7wxE46JFRbd4AJUWswUZHMt%2BaQB5ymSQBftegrPjxlX%2Fm12zMXiRUq1cISofqWThJ6FBMwptJZdjE84FQPxUa4uCMsRIIGXS1vBnmW0famtK5Rke%2FBiKc4ijkJ6o7nzqq7dg7HBYLaCycTu3vrlM3Ixd7bkU%2BwJXY4dt%2BsTOQty8MmIf5Bdru6HMhjSayjQ2MHC1L7tiCckXQgSEXSKuti0su2M9ZZgR1%2FKJ9Rig7ObuZzAmj304KOs6Hv7XkJmeU5vqJgBQ9VzBYBGm0c4mCE7i2IWt4h5rWLhJwSEU2piTnn9bf%2FbjVpHYMmDpf8ig8VfGMdgYI7oMqzszG6%2BBKh5%2BybNYujfbEfyubE4QQ1hjZRFt0V%2BqHa4fT2w1nOD1DCR68%2FJBjqkAZLGx4%2BDRsI6Y5b3aaTVBOrhkAwDo44sRSpYPSOLI8cNQq6I9xqjye16dMxh37ZjYBWgu7xWzYEZ6OPHOZFQGTeZk6VxEl%2BVAZsNQzzJ25ycyBfpo5ZmwsaqvmYoYA4TqFsi%2BTMkz84ahtx5k4vk906Y3EqJMprNQsrb1%2FKdkGR%2FoheU9KDZPgzxrmWUT%2FnRTmBYT2Ame5Z8VwBMzqJC54kmRA6N&X-Amz-Signature=f3ac5d6e362f27668ec166d4a6910e6cc81da933152c9bfcba6a0f18c955706a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UIHJHEW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAb8aE14nPHJxevjR9ZkkHZJuTHeRD4gQImWeOWcgkPgIhANXp9MTVJn2Snf0JVpUhiWdRuenULIVVOZ2tIUp4yExhKv8DCHIQABoMNjM3NDIzMTgzODA1Igz5G3dOw1IurodafZYq3ANJcefgiYVChG7B1lqbg%2BaehSPwPuNQVux4E%2FyRWYzqBLttmlCdIatilagAjuGy0GwA9gPPJvYi7qo9F6XbOyEtg4fUOzvJxy6IimhTop45YMoPEFuiReFrdc7wXrifxN4V%2Bqyi7okW6GKbWH%2FmDZOngVMjkipKh%2BkzEijf4jDAPFTLJsQNSJjRI%2F1APv%2BWHMpwwxBTXqEPnTOAdJMpcHDGk3JTSzogGCU0yvdiZlAK6G61IS19b08KD0lBX7wxE46JFRbd4AJUWswUZHMt%2BaQB5ymSQBftegrPjxlX%2Fm12zMXiRUq1cISofqWThJ6FBMwptJZdjE84FQPxUa4uCMsRIIGXS1vBnmW0famtK5Rke%2FBiKc4ijkJ6o7nzqq7dg7HBYLaCycTu3vrlM3Ixd7bkU%2BwJXY4dt%2BsTOQty8MmIf5Bdru6HMhjSayjQ2MHC1L7tiCckXQgSEXSKuti0su2M9ZZgR1%2FKJ9Rig7ObuZzAmj304KOs6Hv7XkJmeU5vqJgBQ9VzBYBGm0c4mCE7i2IWt4h5rWLhJwSEU2piTnn9bf%2FbjVpHYMmDpf8ig8VfGMdgYI7oMqzszG6%2BBKh5%2BybNYujfbEfyubE4QQ1hjZRFt0V%2BqHa4fT2w1nOD1DCR68%2FJBjqkAZLGx4%2BDRsI6Y5b3aaTVBOrhkAwDo44sRSpYPSOLI8cNQq6I9xqjye16dMxh37ZjYBWgu7xWzYEZ6OPHOZFQGTeZk6VxEl%2BVAZsNQzzJ25ycyBfpo5ZmwsaqvmYoYA4TqFsi%2BTMkz84ahtx5k4vk906Y3EqJMprNQsrb1%2FKdkGR%2FoheU9KDZPgzxrmWUT%2FnRTmBYT2Ame5Z8VwBMzqJC54kmRA6N&X-Amz-Signature=00f319cafd0a2d2b57ff301d1b0d9be25e2fc447bfce23a87d80f39d5fc81e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
