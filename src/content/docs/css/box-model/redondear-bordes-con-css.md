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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB7RUII5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDftmK2ubo0KPZia5ZCxyBlvEBpTpOpa4MkP3dOvrHnkAIgM8ZxKm1blauqjJUkXkOJVnjGQRTNRbPsmFqJUhx2E%2Bcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKsC2kPtkqifH0QF9SrcA0nBaWB2e8%2BAJpcpEWTK%2FC5noDNrH%2Fd6POdkFuYjro%2FeXYNpujfxldsNMaUIo%2F6q36NYCvNLlhrfI0LtVMrqJSJDySaze30epgq52qzIJCgKv%2FazCr7D%2BTICSp9TxGaR0wcS%2BJ08mUJ4A9aEIWNs5cXl9nED4aXGx9D%2FI5zC3LVPoTCeTh0qUrfcSvxu%2BKU1DTp1r6tSfZ9GyDY6fsxi62dPLk56ItWZ%2B6%2BGhYEnPvReAi6sJSJi8hFDirmq0OTv6B%2F%2B1fi4z4KX4s04neNi0p2uIpQWnFBCrym229luKZXhpnLW34sA%2BFCY0wrN67QIwof2ZJemjMYC%2FfTOeAruMXFDDA5oi32d8XAZZQSM1mvGcJ1RLljGHYNbq4hnheJenIleFFUjN93nzk%2BuLji741Ulz50ri6%2BQOriOM4Xv1XZafuxoMVgXSiDu4ojZH47rZ19lVIhFD0jxMHprmTi%2B%2F2ciDbHJ9z73KPJD6mxqV0YXEqu1otdjOo8erkitSH%2FebPgPpTgBcwART9ArKuHGW7EJSrtzPkgyfnLwypz3Brv0Z%2BKtvdOA%2Boptyi0uFk29EZo0qgKfmn47tW%2BxiYPnwsBG%2BwvUrNdHTZaxtbBKpCNJ9jpbWK0wu5DGquhCMM6OisoGOqUBpSIk07S7gpOVVOvFCN47gIYdLB0EkkUSTuweUe7HdTJRUZeL7I6rpGwH%2FfTjfy0sIrbQYmzaBrv7n8Q1o5QUmhq7tsYdkQr4oqVtXcr7bo%2FCGdbY5t0IrtTRkTdzlOfikOtTTbI1uURQ%2BOOkBVyUAPUJANms3Q6yAAGZ5MuH8iVEvPWP8ZzTp3bvIQk%2BjmHuuaLjLFRDZvGwf0Pe%2Bny2sYx0vG6B&X-Amz-Signature=9bef577de680aa621bd2eae3734786d873063cfbe94d67bcbf3ba8a83b900737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB7RUII5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDftmK2ubo0KPZia5ZCxyBlvEBpTpOpa4MkP3dOvrHnkAIgM8ZxKm1blauqjJUkXkOJVnjGQRTNRbPsmFqJUhx2E%2Bcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKsC2kPtkqifH0QF9SrcA0nBaWB2e8%2BAJpcpEWTK%2FC5noDNrH%2Fd6POdkFuYjro%2FeXYNpujfxldsNMaUIo%2F6q36NYCvNLlhrfI0LtVMrqJSJDySaze30epgq52qzIJCgKv%2FazCr7D%2BTICSp9TxGaR0wcS%2BJ08mUJ4A9aEIWNs5cXl9nED4aXGx9D%2FI5zC3LVPoTCeTh0qUrfcSvxu%2BKU1DTp1r6tSfZ9GyDY6fsxi62dPLk56ItWZ%2B6%2BGhYEnPvReAi6sJSJi8hFDirmq0OTv6B%2F%2B1fi4z4KX4s04neNi0p2uIpQWnFBCrym229luKZXhpnLW34sA%2BFCY0wrN67QIwof2ZJemjMYC%2FfTOeAruMXFDDA5oi32d8XAZZQSM1mvGcJ1RLljGHYNbq4hnheJenIleFFUjN93nzk%2BuLji741Ulz50ri6%2BQOriOM4Xv1XZafuxoMVgXSiDu4ojZH47rZ19lVIhFD0jxMHprmTi%2B%2F2ciDbHJ9z73KPJD6mxqV0YXEqu1otdjOo8erkitSH%2FebPgPpTgBcwART9ArKuHGW7EJSrtzPkgyfnLwypz3Brv0Z%2BKtvdOA%2Boptyi0uFk29EZo0qgKfmn47tW%2BxiYPnwsBG%2BwvUrNdHTZaxtbBKpCNJ9jpbWK0wu5DGquhCMM6OisoGOqUBpSIk07S7gpOVVOvFCN47gIYdLB0EkkUSTuweUe7HdTJRUZeL7I6rpGwH%2FfTjfy0sIrbQYmzaBrv7n8Q1o5QUmhq7tsYdkQr4oqVtXcr7bo%2FCGdbY5t0IrtTRkTdzlOfikOtTTbI1uURQ%2BOOkBVyUAPUJANms3Q6yAAGZ5MuH8iVEvPWP8ZzTp3bvIQk%2BjmHuuaLjLFRDZvGwf0Pe%2Bny2sYx0vG6B&X-Amz-Signature=9fed11d97dfdab8327b340ab7fedd4d7c40c94d9d19b66e4b5c215537398d61f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
