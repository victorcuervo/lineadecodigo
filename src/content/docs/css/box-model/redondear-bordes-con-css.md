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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOHB6WNS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQzkwT%2BpUT0SxRecTWn9pe7atCk30H2rzsXEudpZKiJAiEA%2BmwVZ1H%2F3Nk8YTE6Pc4lqOS8J9KN8NVPYKltHuwvxOAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDBC5gldbMij6fLvb%2FSrcAxlP7Et36TfhUsH5AOnB7Qs1Oqa0rtG%2BSrWZk52CRSlybjSN8pAZJo3gOQYVNx4SceZLOQRQlJyAVyg1NkFvPTwTBLV3lNg5Q5o%2FoxIqMmoK54M4qCPg8J1XT6h6l8co2OsRcgOHXDHEAqFsgv81AofxMuLoYuYHFYdcKnTz8vtKSuQIRyFSFNBLG7l61%2B3MZy51p%2B7W6ZJJa7d413ov9ps1ZNz8xgX9WHnt7g9Rrsfr2NsN4pvIbejxXN290c%2F0tPVgfG7V%2FOC9XpCHnyWKzxwAIa7vEgYtGAN%2BErAP%2FY47SRnClRmGkzfgqGcAhyNyy2eaAP19mnkEMaWAgqJRroEsFPlCQN3On800SK58DeYUBPBYHzb3iU5%2Fj6Geniax%2F3x8tuB89WdZhIEJGMvULVjPFz%2Fegi%2FCqqSNaGGml%2BQIqnrmIupnt%2FK8X6tq9x%2BdV4rhl7J3XPA6APpV3cUVefxuNqKHehEpFfy0995Go%2BezIfC684m%2Binhf6lBrWGU2WsBaX6lO9rRrc0KRJ0pEqstSOgLKjd9zj7sDnEayH3UXBMQ0fcRmm9eJBveAxXFF13HI5LV%2Fyqwe0oBSiB8p8heK2Ed1QlldepBmv4%2B8INTAYH8ziqe4UoJaIsgyMOrhisoGOqUB3%2BuDHvnWiklLRY%2BJSalYXmMLDPR1CRWDd9WR9Qj1ivYkbp6LONMJsjyD4ANj%2FhV2J0OAPr0MSCw2I%2BM3JgwLPSiSzzyixsjycZR2mtvy%2B0sjoHKDY2hXkoIni5tKFUfLW6YRkOsefUY3nTxUZioJsbPR%2BRMehoHKaRtyd2J%2FA6Ms6LBtJ%2Bqx61gioOs%2FYYgjTcvC%2FrdaDvOA5piVSXZ434nWdyet&X-Amz-Signature=e66170cd14b07a9918aacfd2d05a2b418aab47cc3a458333c7ec48c185bdf8eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOHB6WNS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQzkwT%2BpUT0SxRecTWn9pe7atCk30H2rzsXEudpZKiJAiEA%2BmwVZ1H%2F3Nk8YTE6Pc4lqOS8J9KN8NVPYKltHuwvxOAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDBC5gldbMij6fLvb%2FSrcAxlP7Et36TfhUsH5AOnB7Qs1Oqa0rtG%2BSrWZk52CRSlybjSN8pAZJo3gOQYVNx4SceZLOQRQlJyAVyg1NkFvPTwTBLV3lNg5Q5o%2FoxIqMmoK54M4qCPg8J1XT6h6l8co2OsRcgOHXDHEAqFsgv81AofxMuLoYuYHFYdcKnTz8vtKSuQIRyFSFNBLG7l61%2B3MZy51p%2B7W6ZJJa7d413ov9ps1ZNz8xgX9WHnt7g9Rrsfr2NsN4pvIbejxXN290c%2F0tPVgfG7V%2FOC9XpCHnyWKzxwAIa7vEgYtGAN%2BErAP%2FY47SRnClRmGkzfgqGcAhyNyy2eaAP19mnkEMaWAgqJRroEsFPlCQN3On800SK58DeYUBPBYHzb3iU5%2Fj6Geniax%2F3x8tuB89WdZhIEJGMvULVjPFz%2Fegi%2FCqqSNaGGml%2BQIqnrmIupnt%2FK8X6tq9x%2BdV4rhl7J3XPA6APpV3cUVefxuNqKHehEpFfy0995Go%2BezIfC684m%2Binhf6lBrWGU2WsBaX6lO9rRrc0KRJ0pEqstSOgLKjd9zj7sDnEayH3UXBMQ0fcRmm9eJBveAxXFF13HI5LV%2Fyqwe0oBSiB8p8heK2Ed1QlldepBmv4%2B8INTAYH8ziqe4UoJaIsgyMOrhisoGOqUB3%2BuDHvnWiklLRY%2BJSalYXmMLDPR1CRWDd9WR9Qj1ivYkbp6LONMJsjyD4ANj%2FhV2J0OAPr0MSCw2I%2BM3JgwLPSiSzzyixsjycZR2mtvy%2B0sjoHKDY2hXkoIni5tKFUfLW6YRkOsefUY3nTxUZioJsbPR%2BRMehoHKaRtyd2J%2FA6Ms6LBtJ%2Bqx61gioOs%2FYYgjTcvC%2FrdaDvOA5piVSXZ434nWdyet&X-Amz-Signature=5b37246a01447b0ce201c6d842166456b8f27af37ba7424ce4babcd21ea0fe34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
