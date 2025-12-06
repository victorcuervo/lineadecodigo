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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466365RFWIP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX7vuvHhe5ZacuIi7esMmHaZuVr7%2Fp7V%2FMqzjsLSgbTgIgJAnvwrLpo7osQwUL6ffEtf8fDWKJuLxIV441pDbR%2Bxoq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMIh6zUm20XZ%2B4XvtircA4skCX26ONBDCvw4lsTpj%2FNZ5jyFb9VQ%2BGQZ9Hk2UZg%2BgjBBJUewInXh1M95l09BGeJ%2FwyTsaPtYHThWfu%2FhbjXgXOWlodrwGAf1yKgMGKuKWAiiyZcxPnFXip3%2FoDar4GxWHfeaNgGlltYESmCW9INalZ9sg8lGyQB9FvjEMH3WcWlfrrTxq8oyE9qLhvTPJqyYIn7tT20snq0Ln0lHKa0fmJgfYIX%2BllLpyvUzGgSvfPtK5zIJu1JgqfgLsyIYu6oHCd5kIUqkU8%2FWJ51ZgDfDUA%2FAJ4pQA1RSCPxeibELCGv3Gl1KBBc0HUHmcUlsgWYe32sPKtJg5N8n7Haxw3LSg%2BQ8OiNrvAF1NFio58e9IgPgUEXQALjF99eZsvNvS81mbx4zwAk94dDeubI1FwSZCiGc%2FtRt%2BD6cZNLaupPpr6VVIZ188TrYyI8T0a7eZ%2BCHgMUcaoquAZufo%2FMxZlUd%2BP30Scae5Kd0wwH9sau71CF7G11ddkhh6isIYfls49gV1fMxQlkYxdxXqaEWMrhpjx2t3Z8FGU7cI52UlgUuI2%2F4h2kfL3I%2FmvCLrIX7WtPk%2F3%2FlgMVGaao%2Fnz%2BTlxxRCs5A6sVY1KotiqH4LY2uA%2BoqYDHH17d6WgNSMJj9zskGOqUBB43LL9KDl7352U4kTn4FvU2T2He%2BkA%2Brbw0HVIHLCDjdTMCFYio2OCAZRlI4qnWHlFV4DE84cfTCQVP1Po8F4e5cjnY%2B9MTNFOIgzurDHEuBBOw17mYLdVHeTGEXvyuWHoOKn4EqTAlavyVYZDQ8k2OF3PdLWf%2F%2FcWcLusNNy6587LngWMs%2FmazHviuKJ%2BAts7s%2BKG4yXp6hc4EZzSnIeuDvNNRW&X-Amz-Signature=13dbe841eac8fb906b5062748175860ecd453397f2116c643f9d241343e351c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466365RFWIP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX7vuvHhe5ZacuIi7esMmHaZuVr7%2Fp7V%2FMqzjsLSgbTgIgJAnvwrLpo7osQwUL6ffEtf8fDWKJuLxIV441pDbR%2Bxoq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMIh6zUm20XZ%2B4XvtircA4skCX26ONBDCvw4lsTpj%2FNZ5jyFb9VQ%2BGQZ9Hk2UZg%2BgjBBJUewInXh1M95l09BGeJ%2FwyTsaPtYHThWfu%2FhbjXgXOWlodrwGAf1yKgMGKuKWAiiyZcxPnFXip3%2FoDar4GxWHfeaNgGlltYESmCW9INalZ9sg8lGyQB9FvjEMH3WcWlfrrTxq8oyE9qLhvTPJqyYIn7tT20snq0Ln0lHKa0fmJgfYIX%2BllLpyvUzGgSvfPtK5zIJu1JgqfgLsyIYu6oHCd5kIUqkU8%2FWJ51ZgDfDUA%2FAJ4pQA1RSCPxeibELCGv3Gl1KBBc0HUHmcUlsgWYe32sPKtJg5N8n7Haxw3LSg%2BQ8OiNrvAF1NFio58e9IgPgUEXQALjF99eZsvNvS81mbx4zwAk94dDeubI1FwSZCiGc%2FtRt%2BD6cZNLaupPpr6VVIZ188TrYyI8T0a7eZ%2BCHgMUcaoquAZufo%2FMxZlUd%2BP30Scae5Kd0wwH9sau71CF7G11ddkhh6isIYfls49gV1fMxQlkYxdxXqaEWMrhpjx2t3Z8FGU7cI52UlgUuI2%2F4h2kfL3I%2FmvCLrIX7WtPk%2F3%2FlgMVGaao%2Fnz%2BTlxxRCs5A6sVY1KotiqH4LY2uA%2BoqYDHH17d6WgNSMJj9zskGOqUBB43LL9KDl7352U4kTn4FvU2T2He%2BkA%2Brbw0HVIHLCDjdTMCFYio2OCAZRlI4qnWHlFV4DE84cfTCQVP1Po8F4e5cjnY%2B9MTNFOIgzurDHEuBBOw17mYLdVHeTGEXvyuWHoOKn4EqTAlavyVYZDQ8k2OF3PdLWf%2F%2FcWcLusNNy6587LngWMs%2FmazHviuKJ%2BAts7s%2BKG4yXp6hc4EZzSnIeuDvNNRW&X-Amz-Signature=7c29691002a4a5dfab7e56bd217837c6db75f15116508475ef15ef554ec23c84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
