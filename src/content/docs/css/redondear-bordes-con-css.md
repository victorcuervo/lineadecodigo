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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R2N3347%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXQiJuJGay9hJBfjjSAdxxyXmPnemXe5JsDbCdMkvyEAiEAmG66ufGqzS7TEBNyb90kltZfCvcvmOV2tdguAuAOEGwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdMmBCcv%2FcLo8HUaircAz1d33ngBKnvay6c9vkGWtq0CMc%2BXNHUfXNJKUaywHfMxYnHAp9wzni70y0c1TOEDsVOo6YERYWp5vrzUVqTE4tlcRY3U21WfWeCKWncs%2Bx%2FxTqqszM1eJHebyRSTA%2Bb1eb2IDaHWihM67d8eGtJ8l005bRlrgG3vUuDtOeyt1Ea1iI9QYfGqTSNpzie3SFoXXYp9iQP5bLbqHTOOrt2XSaXFNPUZgsyqGeXTUn8y8RDJqs8E7fpHTPiZLdgyzCWHyQ7Tb1VWwFIgMTAAclNpt%2B71ZFhYvH07qexfS62Ds%2BYr5okDb60CKuPvG%2F1jq4EHQOZgFqQ388WNyk9zRFH4RU2xddt8D7MyUUIZLUDmSKjB8%2Fl%2FsjckfeUugHAbOwVzoEsPUDJV66CM6UXox5kgUbvj6A%2FHpYQZmhz72XjspCyVwHmMFF%2FIXu4osUAmXtTBhgr6ms%2Bh1iBf6LT29pBhAP3W7anS9PEmGbZC8H6n2%2Fg0K1lGWzauJ5kUW0ZOWOegH7rl8xNYb4y4b9t69zyyX1t4Cpuc%2B%2BIPIdj%2Bh37nkQlwL2y8lFd9w6C2pS9%2FRvmr00NgIA1qGxgGhpdGzcyNsAacIP0%2FyOQS8GI0TEsbGLuw9J0a1c1R5ArTLexMICQ28kGOqUB8I2FVg5sWmStXcz60UJWTffkdFq6QzMYdp3z0gCJhma0YEpE25a8ad7vfkpyjakfqLIopqbRJnOP1Fs35iUQqzlY3%2BmgRaeaZZFle6ET3u%2FGmFL2jMaM1OLmBXs5phkBW13ybh%2BAP5%2B54wInbprk50kfPuRLPtsq5JgiWfZUKIgszmiIJ6XcMcofhEYaj7%2FZiE0vtsQTN6lRdzmunLqNtcCRrGIj&X-Amz-Signature=7775c22e62c2267f71a038498656ab17af03ebd035217c91b94eceb1d5d5b8e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R2N3347%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXQiJuJGay9hJBfjjSAdxxyXmPnemXe5JsDbCdMkvyEAiEAmG66ufGqzS7TEBNyb90kltZfCvcvmOV2tdguAuAOEGwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdMmBCcv%2FcLo8HUaircAz1d33ngBKnvay6c9vkGWtq0CMc%2BXNHUfXNJKUaywHfMxYnHAp9wzni70y0c1TOEDsVOo6YERYWp5vrzUVqTE4tlcRY3U21WfWeCKWncs%2Bx%2FxTqqszM1eJHebyRSTA%2Bb1eb2IDaHWihM67d8eGtJ8l005bRlrgG3vUuDtOeyt1Ea1iI9QYfGqTSNpzie3SFoXXYp9iQP5bLbqHTOOrt2XSaXFNPUZgsyqGeXTUn8y8RDJqs8E7fpHTPiZLdgyzCWHyQ7Tb1VWwFIgMTAAclNpt%2B71ZFhYvH07qexfS62Ds%2BYr5okDb60CKuPvG%2F1jq4EHQOZgFqQ388WNyk9zRFH4RU2xddt8D7MyUUIZLUDmSKjB8%2Fl%2FsjckfeUugHAbOwVzoEsPUDJV66CM6UXox5kgUbvj6A%2FHpYQZmhz72XjspCyVwHmMFF%2FIXu4osUAmXtTBhgr6ms%2Bh1iBf6LT29pBhAP3W7anS9PEmGbZC8H6n2%2Fg0K1lGWzauJ5kUW0ZOWOegH7rl8xNYb4y4b9t69zyyX1t4Cpuc%2B%2BIPIdj%2Bh37nkQlwL2y8lFd9w6C2pS9%2FRvmr00NgIA1qGxgGhpdGzcyNsAacIP0%2FyOQS8GI0TEsbGLuw9J0a1c1R5ArTLexMICQ28kGOqUB8I2FVg5sWmStXcz60UJWTffkdFq6QzMYdp3z0gCJhma0YEpE25a8ad7vfkpyjakfqLIopqbRJnOP1Fs35iUQqzlY3%2BmgRaeaZZFle6ET3u%2FGmFL2jMaM1OLmBXs5phkBW13ybh%2BAP5%2B54wInbprk50kfPuRLPtsq5JgiWfZUKIgszmiIJ6XcMcofhEYaj7%2FZiE0vtsQTN6lRdzmunLqNtcCRrGIj&X-Amz-Signature=05b69c2c757217ab6028e397d434e67589de2ad98009b07ae65044c4dc1744db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
