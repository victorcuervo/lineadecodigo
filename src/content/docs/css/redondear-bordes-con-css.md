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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BCGFKWV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEDdAUYRnVuz%2F%2BfjixOWebdCudLXOirymP2RiQZMIr6wIgaaT4j0KN21hnUqzYpHqjdEpnfVYh%2FID7S8xYDi7HtMcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDM%2BSO4a0RGt7EsQeIircA6sp5ycgvThsUDRwdD9a4gkRGxCRcKPPrv2diTt0Bei4dqyzIv9tkZoYx0GgN0yrLwquDcYNemqBVDdC51v85QOvZKWZYM0n4JN2T%2Fl5CisW50mTCenQqCO1B2K6YOW6NTZSGeIfhiDQJ1pTQOXNzqkmCk%2Bas2GTZJW%2Bzw28kJ6QlTXWFtPawrIGzBc7ez37PtTcj%2B167AVyZRdDXxuGpg6jr5tIWAbTWPzeVIdJd618ClYFYooBFogkirYnqt33%2FWln%2B0ROT%2Br0dMkpQXPsQ4C%2FuKhuK2nt34XRTlWlr4OAhjVocSv2QkKsbuIcF42jH0hVFnJZZiRg7bNbv2FfaWQXWZ%2BDDnP2zAqGcHnrAkEagaFOgoUqjNbMqYJQMzkTQk8DNtdM%2FVohY%2FXkapbeq%2B1lwZHyaD5eaT4WoEz%2BRywOlWRCHVzPA23VZFdoh947MrPitkJIXdXaY52a2Nzdw7JHlTxwXlUJz5mEmpbkNCg379FJh0o8jMnL8FRSGN44XGVce0kxTckKJ7%2BN5IRavBNwS9Fw9CvR%2Bg4oQgGKysBJnh0leC%2Ff47aCPiAVl%2FbZ6WvwEw6aCyeDR8kCvg%2FTyRX2LK%2BMu5HCAeDHrVp74jL%2BTOrj6jij3twX5o58MPHKy8kGOqUB0sJ95aUM0ZubYy42P9mhFVn2OM6gX8Gdqnsoj67Ip43%2BMBiVmutYt92KnVHldn%2FsyY7vfzRaRH08PvJJ5GWdnqD77hPCS4QfKYr6VykQjD2%2Br6nOoG4ozHxq%2F8lmDVlxtUsIUHXougp6aTSVUzrwmzfVco3Tl1nEhyppYiIt95CI0bd1wPtXFfBcjGiJSFHSmpHht0U2FMx%2BUG%2Bl2IDC31mdsnGB&X-Amz-Signature=c98d58f4f7ff19f33949621d7db5e89b85d486154b8f295a0912cb68e908775e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BCGFKWV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEDdAUYRnVuz%2F%2BfjixOWebdCudLXOirymP2RiQZMIr6wIgaaT4j0KN21hnUqzYpHqjdEpnfVYh%2FID7S8xYDi7HtMcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDM%2BSO4a0RGt7EsQeIircA6sp5ycgvThsUDRwdD9a4gkRGxCRcKPPrv2diTt0Bei4dqyzIv9tkZoYx0GgN0yrLwquDcYNemqBVDdC51v85QOvZKWZYM0n4JN2T%2Fl5CisW50mTCenQqCO1B2K6YOW6NTZSGeIfhiDQJ1pTQOXNzqkmCk%2Bas2GTZJW%2Bzw28kJ6QlTXWFtPawrIGzBc7ez37PtTcj%2B167AVyZRdDXxuGpg6jr5tIWAbTWPzeVIdJd618ClYFYooBFogkirYnqt33%2FWln%2B0ROT%2Br0dMkpQXPsQ4C%2FuKhuK2nt34XRTlWlr4OAhjVocSv2QkKsbuIcF42jH0hVFnJZZiRg7bNbv2FfaWQXWZ%2BDDnP2zAqGcHnrAkEagaFOgoUqjNbMqYJQMzkTQk8DNtdM%2FVohY%2FXkapbeq%2B1lwZHyaD5eaT4WoEz%2BRywOlWRCHVzPA23VZFdoh947MrPitkJIXdXaY52a2Nzdw7JHlTxwXlUJz5mEmpbkNCg379FJh0o8jMnL8FRSGN44XGVce0kxTckKJ7%2BN5IRavBNwS9Fw9CvR%2Bg4oQgGKysBJnh0leC%2Ff47aCPiAVl%2FbZ6WvwEw6aCyeDR8kCvg%2FTyRX2LK%2BMu5HCAeDHrVp74jL%2BTOrj6jij3twX5o58MPHKy8kGOqUB0sJ95aUM0ZubYy42P9mhFVn2OM6gX8Gdqnsoj67Ip43%2BMBiVmutYt92KnVHldn%2FsyY7vfzRaRH08PvJJ5GWdnqD77hPCS4QfKYr6VykQjD2%2Br6nOoG4ozHxq%2F8lmDVlxtUsIUHXougp6aTSVUzrwmzfVco3Tl1nEhyppYiIt95CI0bd1wPtXFfBcjGiJSFHSmpHht0U2FMx%2BUG%2Bl2IDC31mdsnGB&X-Amz-Signature=5323a1ad4a36ded08b97a897c0963037e32af4e54cccdb32ab439dac37f2a9c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
