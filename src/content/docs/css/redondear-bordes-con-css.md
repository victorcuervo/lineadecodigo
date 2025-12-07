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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U46SP5L5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BWybM2XcC1gO1EAK1YRqCzEgPKkmluDGqBZ8%2BuJoUhAIhAOi4ANeGDqgX8GmyePCRsOVXODEXaEHlTtTPFasP%2FB%2BMKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybKd12G6ylEPPSILgq3ANEq5yaxeTdO27QCqMvooABdc3Yh2lGSJmoL1fFeSvA0OI1%2FtmLyUrXrgME7SJW6zF6YI%2FTUxJnLGdembSpRAZfIQTy27AQbZI6PPpmsvCYwmuxbIuggoJY2dxI8ihiKOr3rLmwV%2BvoBhsiVM1VW1Ud9%2F9OaBy6JW6rJ62xXkGlcIphfMgUvceuFFibaM1HPpSiG5vx%2FEwvbIrRlDOpz7YEZdRp0%2FQ1%2By0EQcEj78%2F9AUJwN9V29eYeVDHSUtFtn4d6ftIcSrNY3jodTMXzYtwMUt%2Fk8y7oRf2L38Di%2FDO8hf3khcC3bmdQZsd%2Fbyyd9i1xWCjhKoHb73y0MjsCWNJfdqr0Uvb2vJ8Hm3x0NI3%2FZcta45mAunkBIbL%2FzIME2GiPnJ0zvkzlll%2BqpW4oeALJiIL54lkmO8EAQ4wbI1b3fdmV7sS3LPcHfJj1ktOTfxs%2FlzNOB6cydFvIux9Cw61mcx1UIfZ2OXq3ai2o0jy4QgeP3eGWRQbdA8e6eOvLTDY0iTD854LQazO5DNmbetgaBSGNYqTF7gzNj%2BSvlspnsfXDYS69pdxBFywfSjEZY%2BkJTEm9z1Dh%2B9JjzkQ%2BK4jNy7Yu385J7mbXVPyEXf%2BoeCvMyHSnxen1enQklDCymtXJBjqkAay%2FYrZcuSqnhyp8kGkU0TuKTr1SMAA5qHzpMCh%2F7g8scfjupLthv%2BDq3P%2BXRHWguy0eSvuKYi1vDl4WuSHw3GgiQXR3HRrlAr1%2FXB6lAOG4DuFBTFS2UNEeMib1UQMPQKo4ioaTuHkUPSZ7FZEpBcegJ2AQVR2Zm7pDck7KvYTtLIEwrrB3KheTez6D1QW3f9BBKZlBHSziHAfjCAxiiyvGK00x&X-Amz-Signature=f5854c2d2109027efac3b43d0e4667f9cc334523004f641f407415137bd72567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U46SP5L5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BWybM2XcC1gO1EAK1YRqCzEgPKkmluDGqBZ8%2BuJoUhAIhAOi4ANeGDqgX8GmyePCRsOVXODEXaEHlTtTPFasP%2FB%2BMKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybKd12G6ylEPPSILgq3ANEq5yaxeTdO27QCqMvooABdc3Yh2lGSJmoL1fFeSvA0OI1%2FtmLyUrXrgME7SJW6zF6YI%2FTUxJnLGdembSpRAZfIQTy27AQbZI6PPpmsvCYwmuxbIuggoJY2dxI8ihiKOr3rLmwV%2BvoBhsiVM1VW1Ud9%2F9OaBy6JW6rJ62xXkGlcIphfMgUvceuFFibaM1HPpSiG5vx%2FEwvbIrRlDOpz7YEZdRp0%2FQ1%2By0EQcEj78%2F9AUJwN9V29eYeVDHSUtFtn4d6ftIcSrNY3jodTMXzYtwMUt%2Fk8y7oRf2L38Di%2FDO8hf3khcC3bmdQZsd%2Fbyyd9i1xWCjhKoHb73y0MjsCWNJfdqr0Uvb2vJ8Hm3x0NI3%2FZcta45mAunkBIbL%2FzIME2GiPnJ0zvkzlll%2BqpW4oeALJiIL54lkmO8EAQ4wbI1b3fdmV7sS3LPcHfJj1ktOTfxs%2FlzNOB6cydFvIux9Cw61mcx1UIfZ2OXq3ai2o0jy4QgeP3eGWRQbdA8e6eOvLTDY0iTD854LQazO5DNmbetgaBSGNYqTF7gzNj%2BSvlspnsfXDYS69pdxBFywfSjEZY%2BkJTEm9z1Dh%2B9JjzkQ%2BK4jNy7Yu385J7mbXVPyEXf%2BoeCvMyHSnxen1enQklDCymtXJBjqkAay%2FYrZcuSqnhyp8kGkU0TuKTr1SMAA5qHzpMCh%2F7g8scfjupLthv%2BDq3P%2BXRHWguy0eSvuKYi1vDl4WuSHw3GgiQXR3HRrlAr1%2FXB6lAOG4DuFBTFS2UNEeMib1UQMPQKo4ioaTuHkUPSZ7FZEpBcegJ2AQVR2Zm7pDck7KvYTtLIEwrrB3KheTez6D1QW3f9BBKZlBHSziHAfjCAxiiyvGK00x&X-Amz-Signature=c6ab70ee78ea91a0bf59bf139188c34289c23661748421f8a082a7955366c27d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
