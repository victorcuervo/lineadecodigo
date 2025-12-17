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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RLW2HUA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhEaE8juMbw9qgqk8RkljTVFccxkyh7ZZWnOBAMCIxIAiEA2m53SN3YXaLUcnoMxsVWLBlpo%2FyACuSHtaW53pD3wekq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAseVpzZ0rdJuLgDBircAxncaO0Q%2FktiIxGx594Dwgz3Oo2ch%2BuLcn02WPdA%2BSL5xr5RJ4DX6K0EQcTzGf%2F3lKc8DvV3NMRzUKiTetrZ3jyzi08%2BYFO2do4y%2FN%2F1wTnAK1AJ9CnqZHJZY7xF6DtQCZrX8AWgPMTQ4Mj%2B%2FZAp3FnyjIiorEKwvIgmcR4tmr7icb659A5QOkal9gPLwO2IPfAd73uAHjJQnYBMEfPNijUCsxU3JbH0%2Br7X3G8dP66yBWCQDkQBfG%2BxNNdmrNcWGIlAKnp8BfcvNTP26%2FEN2urO%2FwRH71NL3HCfk0B0Q7TLeQVMDTYivVKVjXSAA%2FHq39qdIErmkkEkZFE9hxERlVxbqAQ9eugGWFtbGrCrZCFdnTQtB4M3BG1Wz%2BcXqvPMLvovpzsk%2BRy35rZi7uNCjfq6M4BsTb3GUwQoOdU0tmgHdlLqLbNlmrrmPqbB0x9F%2F95bnM6Uq%2FXq%2F0ANijbPHwmbQk3lTjEQ1FtTkcb%2F0SwcDa5kfYcOFTbXxDmLRU%2FbsfNu7Ne1%2FgUewRqXEvKHJGuhZM0vpfa1RkfA7AXwZn7qphyHr3M9rSZywtgWS%2FUVXJaY46AmhlCP56O9%2FPqgPe1ptUKMn4uGYNJfBURQVcdMInzXmZgKkFCbYb8BMJPwicoGOqUBlyOCu3UOsSDuKK7aM%2BgrKNwo1jCYnnvDoxCEs6OrDuRtLCG%2F%2FttXHO4jj%2FroE5Hcm%2BMurBHeBk0DesOk1J5BBDm3Hl9Gk5PlDL3saj0%2FDhxJA6MU70%2Ft79WveEL0%2FyWYYNDhnJsf%2BLqZFEgmvqDz7YUv6QfcHkSWVrdxO8a90tO8m7XiM%2Fa3Fid3uUtTCap5Ca1G76QNalHvmtCgOA4QJEudln7T&X-Amz-Signature=e150355b65c78ede1e1209229e8382c4eea5414c8eb3d73daa833a49f3d04806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RLW2HUA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhEaE8juMbw9qgqk8RkljTVFccxkyh7ZZWnOBAMCIxIAiEA2m53SN3YXaLUcnoMxsVWLBlpo%2FyACuSHtaW53pD3wekq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAseVpzZ0rdJuLgDBircAxncaO0Q%2FktiIxGx594Dwgz3Oo2ch%2BuLcn02WPdA%2BSL5xr5RJ4DX6K0EQcTzGf%2F3lKc8DvV3NMRzUKiTetrZ3jyzi08%2BYFO2do4y%2FN%2F1wTnAK1AJ9CnqZHJZY7xF6DtQCZrX8AWgPMTQ4Mj%2B%2FZAp3FnyjIiorEKwvIgmcR4tmr7icb659A5QOkal9gPLwO2IPfAd73uAHjJQnYBMEfPNijUCsxU3JbH0%2Br7X3G8dP66yBWCQDkQBfG%2BxNNdmrNcWGIlAKnp8BfcvNTP26%2FEN2urO%2FwRH71NL3HCfk0B0Q7TLeQVMDTYivVKVjXSAA%2FHq39qdIErmkkEkZFE9hxERlVxbqAQ9eugGWFtbGrCrZCFdnTQtB4M3BG1Wz%2BcXqvPMLvovpzsk%2BRy35rZi7uNCjfq6M4BsTb3GUwQoOdU0tmgHdlLqLbNlmrrmPqbB0x9F%2F95bnM6Uq%2FXq%2F0ANijbPHwmbQk3lTjEQ1FtTkcb%2F0SwcDa5kfYcOFTbXxDmLRU%2FbsfNu7Ne1%2FgUewRqXEvKHJGuhZM0vpfa1RkfA7AXwZn7qphyHr3M9rSZywtgWS%2FUVXJaY46AmhlCP56O9%2FPqgPe1ptUKMn4uGYNJfBURQVcdMInzXmZgKkFCbYb8BMJPwicoGOqUBlyOCu3UOsSDuKK7aM%2BgrKNwo1jCYnnvDoxCEs6OrDuRtLCG%2F%2FttXHO4jj%2FroE5Hcm%2BMurBHeBk0DesOk1J5BBDm3Hl9Gk5PlDL3saj0%2FDhxJA6MU70%2Ft79WveEL0%2FyWYYNDhnJsf%2BLqZFEgmvqDz7YUv6QfcHkSWVrdxO8a90tO8m7XiM%2Fa3Fid3uUtTCap5Ca1G76QNalHvmtCgOA4QJEudln7T&X-Amz-Signature=e4d8221c52a292935b3d6b373677c7531b4604db5e5613647a65901860edb425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
