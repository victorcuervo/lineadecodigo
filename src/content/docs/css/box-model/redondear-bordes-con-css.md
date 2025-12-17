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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBFR7J2A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3jfq9oG%2FiZMvfW8S2ANGtmasB%2BdgcukiBLRl9loY63AiEAtJq1c%2BWw3CUzcdRKL6tdUilnhHtco5qqH75Q7gHaL4oq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIlGzaw558W%2Bh6xECyrcAyk%2FEjZWz1sgA%2FmEZMWqhxdZIo6T0pXsZlROUYb0qlQmqNxSrKWUkvKPb6bvzW6tFq%2F%2FJCWPviPe0nfb0P8MH%2FZpBJDPC5SCYkf4yO5KJT2XN%2FogLSVk%2Frtmcqdohm55RAicm1HDQ5vL%2B8smsjm88HUYHUtWqdnMXsh8xt%2FJvxMIV%2FC6bB7y6CfgBzq7Qcv5KdedDZML0E%2BwoC4gIVukcQaQhbCX%2Fxv0TPBOQjOTPcNk0oNMHRQfk5RVv39BgNZ6bnzue4BHiLzbnWy%2B42GMo1929BEvfv7116gNSimWIkKV9FzCWlaUOLF90R7xCRDV%2BJso2utwbALa%2BKqFebonqJf0seRmTRHnXuxXVF7kaQMImNG9BrwUN6PpNvvRYgosaffcfu%2Bb1LQLpzl%2BqdEHL6NT6HEfhQSo0OmNuEnA8FhJ4TGA3u6wgf7Qzpvop%2BadFzJjyMNMtTD7S2g%2FDb0QWeQdKCbyiD356VIfjttCiCVpMI6%2BzLFLpCB2%2BclxMpVgjGurD%2ByptgRmNaM%2FH%2FstYCaCiF9XACCHMiz7MDsRaTiKqJkFWsepeQAw6dQurrjobWVX5ElwSln8k479U%2F0kkeCuEZDjoF6bwU4pQCRyGAkblXKGdQz%2F0Nr7cZCdMO63icoGOqUB%2F%2Bl8V31B4abX0Es9meieHDu49XaOwUju970gJVjO9O6wYE7kwiUtgu9ITrDR%2BhdPrK%2F%2FfTgwSLDZL3Z53yrCvkSsiFwOmG3tEWUKpL3s2O%2BqkIRulStqebVWEoHTH%2BsiPj08o3Bn7PGYyOi%2B749FLJrtvUY1QUx86LRBAybZEnKM8IKTv7g3R1rKvoe9E%2FF8t1G5LoabrNhZVDjjn0yN6HmLHhxj&X-Amz-Signature=cc47561c59667ae079f80a142f243bac7bca0594f001156e5d45dfe879fff312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBFR7J2A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3jfq9oG%2FiZMvfW8S2ANGtmasB%2BdgcukiBLRl9loY63AiEAtJq1c%2BWw3CUzcdRKL6tdUilnhHtco5qqH75Q7gHaL4oq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIlGzaw558W%2Bh6xECyrcAyk%2FEjZWz1sgA%2FmEZMWqhxdZIo6T0pXsZlROUYb0qlQmqNxSrKWUkvKPb6bvzW6tFq%2F%2FJCWPviPe0nfb0P8MH%2FZpBJDPC5SCYkf4yO5KJT2XN%2FogLSVk%2Frtmcqdohm55RAicm1HDQ5vL%2B8smsjm88HUYHUtWqdnMXsh8xt%2FJvxMIV%2FC6bB7y6CfgBzq7Qcv5KdedDZML0E%2BwoC4gIVukcQaQhbCX%2Fxv0TPBOQjOTPcNk0oNMHRQfk5RVv39BgNZ6bnzue4BHiLzbnWy%2B42GMo1929BEvfv7116gNSimWIkKV9FzCWlaUOLF90R7xCRDV%2BJso2utwbALa%2BKqFebonqJf0seRmTRHnXuxXVF7kaQMImNG9BrwUN6PpNvvRYgosaffcfu%2Bb1LQLpzl%2BqdEHL6NT6HEfhQSo0OmNuEnA8FhJ4TGA3u6wgf7Qzpvop%2BadFzJjyMNMtTD7S2g%2FDb0QWeQdKCbyiD356VIfjttCiCVpMI6%2BzLFLpCB2%2BclxMpVgjGurD%2ByptgRmNaM%2FH%2FstYCaCiF9XACCHMiz7MDsRaTiKqJkFWsepeQAw6dQurrjobWVX5ElwSln8k479U%2F0kkeCuEZDjoF6bwU4pQCRyGAkblXKGdQz%2F0Nr7cZCdMO63icoGOqUB%2F%2Bl8V31B4abX0Es9meieHDu49XaOwUju970gJVjO9O6wYE7kwiUtgu9ITrDR%2BhdPrK%2F%2FfTgwSLDZL3Z53yrCvkSsiFwOmG3tEWUKpL3s2O%2BqkIRulStqebVWEoHTH%2BsiPj08o3Bn7PGYyOi%2B749FLJrtvUY1QUx86LRBAybZEnKM8IKTv7g3R1rKvoe9E%2FF8t1G5LoabrNhZVDjjn0yN6HmLHhxj&X-Amz-Signature=72c3ebe27cbcbed7a4b1496fa4d42bab2ce06bac9ecc9860ca31d15a56fff4dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
