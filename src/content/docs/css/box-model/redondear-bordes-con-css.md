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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXRTO5J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEVECMIvq9JS4luUt14pRAYbnOv9eyUemchkCyFnVU%2BgIgJ%2FDN9eSw5TikqXnnnjiITO5GiGPQpH7CwOJRMdZzj38qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKqoxg58KqoZMeFhSrcA%2FwF27xHxoqourk5TL7Hj5XDLIUSLavebF0cppOTJbsJXiiphP2lvdX12%2F0JakbDSTHEdT4duKwN8B%2BNqRSOgwzg7n1yzRpv%2BPKWOj6pfmratqyiXJM1VeuLsiAUhO1j4ArZCnNd87C5wzqkM7YtHB6QxcJPiPap6sSZuPnT%2FfbDSBlRV2IAvgKvad6vi9YZxaqGMC2oAwhQT3Dhd7LloRE8vBu2y%2FXiW71f5fGfuPfEcakYAIPfLpFszezm%2FbURZ%2FN7B7w0f%2BURhOOocq35q3oerx1qCh%2B4dTYkmeJe2%2FWKCdTuL88ALVCH%2B0U%2FC%2FqpRookAt0YSgbp%2Bi9s%2FK0WUZL7cRgRoYPRVdF2%2BHwpVDdnPAGqRJR6ocz4uYsnnDKfRaztvdEJgncrquJfKL2LLvb%2Be7dh7aFK3HCLKVjV4iIttzWXLYXdVWq9d8vIyn%2FAgOQz7Tl9aBDivwxc5aoFuq7sMC6t9EYXK8K4wJeeYsCLCJuhBRgZfNnDnf%2B7ngEL%2BiI2Q3uIq2hgBagmSIoowbxGDp7rfmCF2CnL49BNYcG6bqeEFfjH5S8jJt2IFZYM8qjYGNPPdHufT1q9A0qoRcKZUV%2FK5RM22mlhwEBwgdEQHen4I1WOr9vWJTH7MOiLjMoGOqUBU1WnUoT8FxdmHQf%2FbPoI6hqRulRthJIX45uHeThGFxH1VMhjqY4NouLHb5mzhIGVXpDmnjGhatbuFL8ALZvpXTP0hwb9rgaXqeoHejGkH6dRlbH6YWurA%2BzsfuzRwdqaT0m3EC07ebUa%2BvdUX9uxmCjQqbzo3%2BmlPPdkRACcHI3pXgTWpdO27PANmQaIm9VHMzRrRCgqZ7xcG4LYitANb1J3Q%2Btg&X-Amz-Signature=e1283881cb3961d20f8994970a66e1294f40d38dc10d09852ee516455e5edf69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXRTO5J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEVECMIvq9JS4luUt14pRAYbnOv9eyUemchkCyFnVU%2BgIgJ%2FDN9eSw5TikqXnnnjiITO5GiGPQpH7CwOJRMdZzj38qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKqoxg58KqoZMeFhSrcA%2FwF27xHxoqourk5TL7Hj5XDLIUSLavebF0cppOTJbsJXiiphP2lvdX12%2F0JakbDSTHEdT4duKwN8B%2BNqRSOgwzg7n1yzRpv%2BPKWOj6pfmratqyiXJM1VeuLsiAUhO1j4ArZCnNd87C5wzqkM7YtHB6QxcJPiPap6sSZuPnT%2FfbDSBlRV2IAvgKvad6vi9YZxaqGMC2oAwhQT3Dhd7LloRE8vBu2y%2FXiW71f5fGfuPfEcakYAIPfLpFszezm%2FbURZ%2FN7B7w0f%2BURhOOocq35q3oerx1qCh%2B4dTYkmeJe2%2FWKCdTuL88ALVCH%2B0U%2FC%2FqpRookAt0YSgbp%2Bi9s%2FK0WUZL7cRgRoYPRVdF2%2BHwpVDdnPAGqRJR6ocz4uYsnnDKfRaztvdEJgncrquJfKL2LLvb%2Be7dh7aFK3HCLKVjV4iIttzWXLYXdVWq9d8vIyn%2FAgOQz7Tl9aBDivwxc5aoFuq7sMC6t9EYXK8K4wJeeYsCLCJuhBRgZfNnDnf%2B7ngEL%2BiI2Q3uIq2hgBagmSIoowbxGDp7rfmCF2CnL49BNYcG6bqeEFfjH5S8jJt2IFZYM8qjYGNPPdHufT1q9A0qoRcKZUV%2FK5RM22mlhwEBwgdEQHen4I1WOr9vWJTH7MOiLjMoGOqUBU1WnUoT8FxdmHQf%2FbPoI6hqRulRthJIX45uHeThGFxH1VMhjqY4NouLHb5mzhIGVXpDmnjGhatbuFL8ALZvpXTP0hwb9rgaXqeoHejGkH6dRlbH6YWurA%2BzsfuzRwdqaT0m3EC07ebUa%2BvdUX9uxmCjQqbzo3%2BmlPPdkRACcHI3pXgTWpdO27PANmQaIm9VHMzRrRCgqZ7xcG4LYitANb1J3Q%2Btg&X-Amz-Signature=0abde3cb293c6d6aa32999225dc82432d5e15b9a410005d6ec22778a0acc1d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
