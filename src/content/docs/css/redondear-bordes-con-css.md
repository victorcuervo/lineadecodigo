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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYHLYBX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSa1amm0n7tk7hfe2qmybn940P6c7Xk0GbPX8E2QsOfAiATjfid9lhZB6GuP9jTD0MSyxotn0y%2BbhcLk6SBq%2BMfnCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzLpwJ%2BqdpXqey%2F7QKtwDLiSOdH1AvO7k5o9jgpQ%2B8%2BTI68TjuaF31TPjkFgmtkaDEppm8%2BnbQEl9gQWToF47jJABhVqzIu3nP5ZuAH%2BdNU9eIij0Q9KdZ83Fxf4s3y0qHQrWLVlVTJOuegNEgbivv2HOdq4ov%2F1164p5EMKt4Am3A0Rh6D4v3gJVCHhIdOl7h7AkDALFSiaaHfkQeR60iKKhtB6EvYxNmQ7ddmV7X2FSE0Z%2FiyT4rdQdAAz1YEfu4kFUhpvtshmepXKIDSahYFTjp6SATHJKUgteyL0QvUJRdu088bS8LdX8LiPxhSgqowWir%2FfywfubPLY0YK7%2F3mzsAhqQg0GuytEpP%2B%2BoCaNoGppETnwSo8y%2B3dvdQLPOimMT6KcEflWARNpwZ018RqF2SUhZVXtKMubnxhx%2BPylKah2t9HC8r46XN5lvGPKUl14MsgEI2D%2BCE8fDzUvw7Ntcgmxq5ehHtXrly7mqLpBdvIZ%2BLAQvywHVHUCPlXA%2BEif8ClkPzq33WZ08BnUvhkY22WJfGiZQfaILniUuYBB6e03vgHJlw4NpZKm5ZfjdAD74iW7zz5SQn8Xndx2B7MtlG8VWplV%2FrobJaknu0VvT%2BIkegSS7Kkb1cEnoXlPRELt5MzIoYIcMblkwnJnVyQY6pgEuGGYpsDJVTj1t6UoKXMx1MMKf5E0XbAOay8v9lqJgnGoGMDWnlRrtIjx2eWNM5hFwZqG%2B4FxoW1T9FpB0k25yDhq1Fgwp9jRjJjoleJPc5JggGlMOuz44OFliLsraDjw6cViudO%2Bmv7j0uy63dNlR5TcrGBoUYVYZEAUQIyDgdQPSosjUPOzRjXsh%2FyiIafAeTrXJaAVPf%2FSQ2Tk8YNTrzNEOKiJs&X-Amz-Signature=6bec55be136ff83820e300a167159784dc5720e60ddf168afb802cce0548ba82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYHLYBX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSa1amm0n7tk7hfe2qmybn940P6c7Xk0GbPX8E2QsOfAiATjfid9lhZB6GuP9jTD0MSyxotn0y%2BbhcLk6SBq%2BMfnCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzLpwJ%2BqdpXqey%2F7QKtwDLiSOdH1AvO7k5o9jgpQ%2B8%2BTI68TjuaF31TPjkFgmtkaDEppm8%2BnbQEl9gQWToF47jJABhVqzIu3nP5ZuAH%2BdNU9eIij0Q9KdZ83Fxf4s3y0qHQrWLVlVTJOuegNEgbivv2HOdq4ov%2F1164p5EMKt4Am3A0Rh6D4v3gJVCHhIdOl7h7AkDALFSiaaHfkQeR60iKKhtB6EvYxNmQ7ddmV7X2FSE0Z%2FiyT4rdQdAAz1YEfu4kFUhpvtshmepXKIDSahYFTjp6SATHJKUgteyL0QvUJRdu088bS8LdX8LiPxhSgqowWir%2FfywfubPLY0YK7%2F3mzsAhqQg0GuytEpP%2B%2BoCaNoGppETnwSo8y%2B3dvdQLPOimMT6KcEflWARNpwZ018RqF2SUhZVXtKMubnxhx%2BPylKah2t9HC8r46XN5lvGPKUl14MsgEI2D%2BCE8fDzUvw7Ntcgmxq5ehHtXrly7mqLpBdvIZ%2BLAQvywHVHUCPlXA%2BEif8ClkPzq33WZ08BnUvhkY22WJfGiZQfaILniUuYBB6e03vgHJlw4NpZKm5ZfjdAD74iW7zz5SQn8Xndx2B7MtlG8VWplV%2FrobJaknu0VvT%2BIkegSS7Kkb1cEnoXlPRELt5MzIoYIcMblkwnJnVyQY6pgEuGGYpsDJVTj1t6UoKXMx1MMKf5E0XbAOay8v9lqJgnGoGMDWnlRrtIjx2eWNM5hFwZqG%2B4FxoW1T9FpB0k25yDhq1Fgwp9jRjJjoleJPc5JggGlMOuz44OFliLsraDjw6cViudO%2Bmv7j0uy63dNlR5TcrGBoUYVYZEAUQIyDgdQPSosjUPOzRjXsh%2FyiIafAeTrXJaAVPf%2FSQ2Tk8YNTrzNEOKiJs&X-Amz-Signature=4d539d02120e5db9d22ec03896bff07828698479d8f6472c899088061355e2a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
