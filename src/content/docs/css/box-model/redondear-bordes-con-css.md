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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T4CLUSU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAn6vEkozkocVoBuQ38Q4lPspmY0OpVvoY%2BVO6Vd3TRlAiEAsMPq9rtKlhPfurwzQG8YUGIya5dD686tCSd0AIBICkAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDSDqbzOhpKgD%2Foz%2ByrcA3ZPrJql%2B9WbmuUL7F3emEO%2Fad0R42yHi5CxxousqCC%2BT5QRcvdoiwqBEiq%2Fu3i53xyWl2aNNK3tyZlTXEhmtyk5%2Bi7LIs21yu75J54PCAYi0fiD8TWlbZFYNF2jjf3QaNqKcAVxBDcb04Xii%2FaqHDlGz3Ozux20atRa%2BmOJZa%2FyCkd37LVkwSCD2D6tZfW3Qe0qEfEvlLHVMckZwCF%2F7pp4pI9Nz5GsS8mLk8rvg7LVcxtor0NRRHcbiAbTxxgnmxqmimF09xmNRDnwZ9wlYKk%2BGKAZyR2BeUqdA1W%2FgDhsN0mepgDr4JCZBETd4sw5vk4fXP32VD25vgCQWAoknk5NVfhY0rcS1aXxgHGB9IsYnRzwq7Ha%2BjdOolTfdf0mZztzydQ3kDkruCztXDoraKpYf8yRSAfYHhHyy8uDdVVnkBnrDdzQ87sxXTiM%2FQnZlDlBYt9L0nbZR%2FGCAU32paQ10w6%2BLXm2t9%2FRqtZvpYQYrK1jqAyVSpiC%2FJn6B7pYARcvw1RzzvfC1zxUIWsCqPJoVZBDB6WKmfdAj%2FllxswJj7Dw6kcQXn8Kc2oFe7qTB6nO9D8lSSMZ%2BfxG84%2By9ytjB9asbO9T1gG8buO90%2FD%2BYX5O7ONFWeSmwJzdMPCOisoGOqUBGcltq0XHpr4E03DOaMlkCd2MdP4NNZl1m6lv39GboVYBX4DWE8yVObmhrjXnoe2eq1SPqgz4fARpqMkG0%2BIrGS7v98JVXWYuQI0oWSrZcJzJhE5aQ%2BL%2BZBIDaJaru7gY7MmRLSmN4ByjZYL0vLnjbniWEMDpgyPHXZJZPulnH7o7%2FQtPvAes97s1%2FLfG1t98P5QKsT54pyjPv0q78yVra2WL%2FQHY&X-Amz-Signature=7d4723bd6a5462e7826128540bde871e0e0b850ebe02df0d28cc6aae0f516e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T4CLUSU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAn6vEkozkocVoBuQ38Q4lPspmY0OpVvoY%2BVO6Vd3TRlAiEAsMPq9rtKlhPfurwzQG8YUGIya5dD686tCSd0AIBICkAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDSDqbzOhpKgD%2Foz%2ByrcA3ZPrJql%2B9WbmuUL7F3emEO%2Fad0R42yHi5CxxousqCC%2BT5QRcvdoiwqBEiq%2Fu3i53xyWl2aNNK3tyZlTXEhmtyk5%2Bi7LIs21yu75J54PCAYi0fiD8TWlbZFYNF2jjf3QaNqKcAVxBDcb04Xii%2FaqHDlGz3Ozux20atRa%2BmOJZa%2FyCkd37LVkwSCD2D6tZfW3Qe0qEfEvlLHVMckZwCF%2F7pp4pI9Nz5GsS8mLk8rvg7LVcxtor0NRRHcbiAbTxxgnmxqmimF09xmNRDnwZ9wlYKk%2BGKAZyR2BeUqdA1W%2FgDhsN0mepgDr4JCZBETd4sw5vk4fXP32VD25vgCQWAoknk5NVfhY0rcS1aXxgHGB9IsYnRzwq7Ha%2BjdOolTfdf0mZztzydQ3kDkruCztXDoraKpYf8yRSAfYHhHyy8uDdVVnkBnrDdzQ87sxXTiM%2FQnZlDlBYt9L0nbZR%2FGCAU32paQ10w6%2BLXm2t9%2FRqtZvpYQYrK1jqAyVSpiC%2FJn6B7pYARcvw1RzzvfC1zxUIWsCqPJoVZBDB6WKmfdAj%2FllxswJj7Dw6kcQXn8Kc2oFe7qTB6nO9D8lSSMZ%2BfxG84%2By9ytjB9asbO9T1gG8buO90%2FD%2BYX5O7ONFWeSmwJzdMPCOisoGOqUBGcltq0XHpr4E03DOaMlkCd2MdP4NNZl1m6lv39GboVYBX4DWE8yVObmhrjXnoe2eq1SPqgz4fARpqMkG0%2BIrGS7v98JVXWYuQI0oWSrZcJzJhE5aQ%2BL%2BZBIDaJaru7gY7MmRLSmN4ByjZYL0vLnjbniWEMDpgyPHXZJZPulnH7o7%2FQtPvAes97s1%2FLfG1t98P5QKsT54pyjPv0q78yVra2WL%2FQHY&X-Amz-Signature=4b7c826d1d9bf21745ee61976f918d21314a398a2f64d89f7ce55b10fcf4f1c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
