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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JRRC2SK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo4G5RKCnEuVcpYo1TBvQO5IjJWS%2BzDssxj%2FyHGeIlrAiEAyiSVjqGsEmjrX0m08YFulW6CQ7tpAkyRTx7MO%2B%2F6lpkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDH7WXdvvu7JmI3nBYircA1xbQiauAAhHyDxIkQgZ8KIkykXvV6%2F3efFVv975UFgJteFOC5Gpc%2Bp0L5doRYSn7BIXwEwBxF991xfz2d4%2Bh%2FprgIeJAdD67EGTa1%2FHi6hcN7ox%2F4pWa5mTo473nuMLqWjP8PolivYWlkcpQ%2BnnkgnnMjbP74Duhb62gE5E5QfkeuhpZ%2Bw7sHFMhze8fFsV2BtLWISHDESSrW%2Bu6hA9YygF%2F6Q1zci1rC62V1qQrQ22gTDluprfAg4DnysTb42BXBP6wysURmatNcUcmfZpnNqueY1%2F8oNiV4DHLGa3Q%2BYiTBOKMi0slUwEbZRSpresdIveUkqjw%2BbNQ3jUXTnsKOC6vPXOyn%2BMrZmt%2F3eu7Ir2VC3FEwhu%2FblfsL6WHfCDIBI9kVeUNzy4euhn0BaRU1cOV6uhAyICczN8ngeXZn8dufN10B%2B%2BJdWUpF6x4QdVktQEGREZEKzrFPXCn%2BR1wD5PKs2iaAVLqMWXwa5YB%2BmCLAPwd6LiLoOL9fkCgGH7xxe5ZoLxVjcbN6JTJJjOpnZ6H787Sm6ym5Uc6jpHnO0qlhq%2BCEJ%2BRLzLKTNBk4g0DBTwPDXP%2Frq5qXVq1XbICqe0KT0%2FGUB6Ke6I8wVLrtDB6HpqJkKMXawEVWxjMKLT0skGOqUBZcGuUSbluqNF2TP24qKEt%2Bfpqo4sN2kJxmf2VOTMTZDMvMyoqF2vVyfaG%2BPjKHYAGYc2ps2a7Iasdt8Kl5MqpoRw7nCDI%2F%2FSKgBXEXHGmYHTRHPI3SfVodGXJ7uMQ0bL8N4ToLQ3IjyLJ%2BZD6gA529I9JPKIZO7MPB3fmOLnUi4HpnBa%2Fo7AprbYy4uRjt8K6AfKwxL%2FEogC1sC7wX2%2FDQJFS8M3&X-Amz-Signature=f824513662e0eb7d16a7daddf09656e22aa4206a71f3ef4854388b1d074ab612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JRRC2SK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo4G5RKCnEuVcpYo1TBvQO5IjJWS%2BzDssxj%2FyHGeIlrAiEAyiSVjqGsEmjrX0m08YFulW6CQ7tpAkyRTx7MO%2B%2F6lpkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDH7WXdvvu7JmI3nBYircA1xbQiauAAhHyDxIkQgZ8KIkykXvV6%2F3efFVv975UFgJteFOC5Gpc%2Bp0L5doRYSn7BIXwEwBxF991xfz2d4%2Bh%2FprgIeJAdD67EGTa1%2FHi6hcN7ox%2F4pWa5mTo473nuMLqWjP8PolivYWlkcpQ%2BnnkgnnMjbP74Duhb62gE5E5QfkeuhpZ%2Bw7sHFMhze8fFsV2BtLWISHDESSrW%2Bu6hA9YygF%2F6Q1zci1rC62V1qQrQ22gTDluprfAg4DnysTb42BXBP6wysURmatNcUcmfZpnNqueY1%2F8oNiV4DHLGa3Q%2BYiTBOKMi0slUwEbZRSpresdIveUkqjw%2BbNQ3jUXTnsKOC6vPXOyn%2BMrZmt%2F3eu7Ir2VC3FEwhu%2FblfsL6WHfCDIBI9kVeUNzy4euhn0BaRU1cOV6uhAyICczN8ngeXZn8dufN10B%2B%2BJdWUpF6x4QdVktQEGREZEKzrFPXCn%2BR1wD5PKs2iaAVLqMWXwa5YB%2BmCLAPwd6LiLoOL9fkCgGH7xxe5ZoLxVjcbN6JTJJjOpnZ6H787Sm6ym5Uc6jpHnO0qlhq%2BCEJ%2BRLzLKTNBk4g0DBTwPDXP%2Frq5qXVq1XbICqe0KT0%2FGUB6Ke6I8wVLrtDB6HpqJkKMXawEVWxjMKLT0skGOqUBZcGuUSbluqNF2TP24qKEt%2Bfpqo4sN2kJxmf2VOTMTZDMvMyoqF2vVyfaG%2BPjKHYAGYc2ps2a7Iasdt8Kl5MqpoRw7nCDI%2F%2FSKgBXEXHGmYHTRHPI3SfVodGXJ7uMQ0bL8N4ToLQ3IjyLJ%2BZD6gA529I9JPKIZO7MPB3fmOLnUi4HpnBa%2Fo7AprbYy4uRjt8K6AfKwxL%2FEogC1sC7wX2%2FDQJFS8M3&X-Amz-Signature=cd3204c34398bd6cd960dab25ef2ebb3e946f96eef0d08d3bc6054138a2aa463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
