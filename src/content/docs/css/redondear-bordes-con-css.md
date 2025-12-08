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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V25PTVC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC72tliP4kaQcPIoH5iZ5HnipEXIDP3yYLqOR6PNuufvgIhAIwobxYowxVEFcqDGmmT5ONa1zsYd8i1ShCTD5kUZ%2BnBKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxal59baLvdw0%2BcL98q3APpAtQ3SiR1ThRzQCjOUjVtkpN2utjDlYwjJR%2FvWmzBu657cZ6fZV5Zzi6Ts7eldn4moIGvBJeYWMznkbLjq5j0E00UfW0hzqmlbPd7lazRdSOlgEES%2B71T%2FiK8kBL95WeBA95TzvBGBlElDDl167gDqSk4HU3e4AIUVgpGCOtLcjt8%2BlvuMpbd97ktmzpTNmU3xglYCY7rd01yLHMiUjCu99oERRtVxlgsehyKnSD6QVnVVNqgTY76pyum6z5cJ%2BkQmMYujPV9MohDQdLy9sb65OsLPyJxqJQEVarTvwQ6PhCcRxgslI3e1ZSNHekrNLn%2FrEFA6hkemco4V0TQQwsEXBI%2FM31vjnLFGuPptUO7%2FFjHZ1U%2BmHqifLuxjW2F9JCjaThNDJBZBj5YFN8XjeYRf1nq2vR3HprI6AI%2F6Xf0ul3BUO2YX1ZovExMqFOMrhjmzmY%2F4RA2FLZf4tNcMbqLCx%2FF802VTRWqYbD%2BDyLUVFYzUsGzQLF2wC6l8wnYH120fgTJnYouGZmqbU5O0WmZ%2BjSoM4bpUDKyQGYWCoT5JHbKgdEvWR2Mkgu%2BDS4nJCzpmQq5dGlD5SZykaM0%2FiB35rY0Uklt6VUaeHSTT7nIbQJ%2BVW%2FKwjMraBHteTDr0NjJBjqkAV9WXlnRJzQLPyfBlRcf1ountyPswfAFnuGus7PxDGeON5R6Nmw4ogNIOLVbCM0bPyyNg8KQhva2TlOkU%2BcpYWejtKQ5Y%2BG7xa2yhKB4IUXI2aDifuXZFWSLzh5EFlgbW%2F2M6neU%2FPl54xZQ9Cyit%2B%2B0NkBrOT3byUVt3x6NCi8CHlGFdTXoCMyT31pYKsI6VRIPqYQnkVAoDDIVjnNHYO6tvA3B&X-Amz-Signature=716c515ff5b4ae28ef0f07f97869426ebd047f188c3ad3c841d9aa74145fbd3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V25PTVC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC72tliP4kaQcPIoH5iZ5HnipEXIDP3yYLqOR6PNuufvgIhAIwobxYowxVEFcqDGmmT5ONa1zsYd8i1ShCTD5kUZ%2BnBKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxal59baLvdw0%2BcL98q3APpAtQ3SiR1ThRzQCjOUjVtkpN2utjDlYwjJR%2FvWmzBu657cZ6fZV5Zzi6Ts7eldn4moIGvBJeYWMznkbLjq5j0E00UfW0hzqmlbPd7lazRdSOlgEES%2B71T%2FiK8kBL95WeBA95TzvBGBlElDDl167gDqSk4HU3e4AIUVgpGCOtLcjt8%2BlvuMpbd97ktmzpTNmU3xglYCY7rd01yLHMiUjCu99oERRtVxlgsehyKnSD6QVnVVNqgTY76pyum6z5cJ%2BkQmMYujPV9MohDQdLy9sb65OsLPyJxqJQEVarTvwQ6PhCcRxgslI3e1ZSNHekrNLn%2FrEFA6hkemco4V0TQQwsEXBI%2FM31vjnLFGuPptUO7%2FFjHZ1U%2BmHqifLuxjW2F9JCjaThNDJBZBj5YFN8XjeYRf1nq2vR3HprI6AI%2F6Xf0ul3BUO2YX1ZovExMqFOMrhjmzmY%2F4RA2FLZf4tNcMbqLCx%2FF802VTRWqYbD%2BDyLUVFYzUsGzQLF2wC6l8wnYH120fgTJnYouGZmqbU5O0WmZ%2BjSoM4bpUDKyQGYWCoT5JHbKgdEvWR2Mkgu%2BDS4nJCzpmQq5dGlD5SZykaM0%2FiB35rY0Uklt6VUaeHSTT7nIbQJ%2BVW%2FKwjMraBHteTDr0NjJBjqkAV9WXlnRJzQLPyfBlRcf1ountyPswfAFnuGus7PxDGeON5R6Nmw4ogNIOLVbCM0bPyyNg8KQhva2TlOkU%2BcpYWejtKQ5Y%2BG7xa2yhKB4IUXI2aDifuXZFWSLzh5EFlgbW%2F2M6neU%2FPl54xZQ9Cyit%2B%2B0NkBrOT3byUVt3x6NCi8CHlGFdTXoCMyT31pYKsI6VRIPqYQnkVAoDDIVjnNHYO6tvA3B&X-Amz-Signature=49113c5d292b064370c10fecdfd01fa9feb4229281798e79b2830daf994432a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
