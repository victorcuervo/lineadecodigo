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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTQ2XAK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl9zWorJosONBTcyWXdiUNwyjt%2FaHcLk5wWZqfGgUUoAIgWXSpk%2FiLcGFSCpvVeKVQCsupis%2Bj3yzeVnvZvOr%2B78oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDD2ktHn205jDieX%2FmSrcA8rNBB6re6x1vVSVomWr67osodwq30YUgRr%2B3dumgHcWF97Tt0EFYJsIyA57dqkbBpYUudyAp4IPhSYnrz5j1VzpMZ8961myWSPTDuLHqYm6vFbLGLAEcPP%2FH2tcBEit76AOXLF30OI%2B7tnAQDGBeJEtP%2B2hjVZ0GoZ656GvH6%2FyOSTNYsWpi3B8nyE6wXQsw4yeJ8kWWD3Kg5R%2F%2Bd3ESadgDagdtmgqaEFpwSqI5gC6fQ5QE2mqWrTxsLOtSDIYpw7zh%2FwD8NsNMFEZjIhPXOWEUHKT7NY3znEl%2BmH6iuljdsQjCD0313F%2FS3xsHBVBHAlCrXHw0HazTvlwqfBmkCg1OKCSSQktwcRiP3vbGIo6At8pTi6ClpJgORQgtXhXQG%2FzUn29yl5%2Bxccib1DnMB3GTG%2Bk2Jlx9ou7MFY96GvpDQM90xng%2BSci9yj8xXcvTVl6yt6dCQr74Vn3Ng7qxb5SIPhKxpqgT38rZ0F3Pdc53SX3fLP2Hi%2BcJ85sTQBmgbrrzdB4JyA2erMlYWtsMOtDsINLoyr400BIOKCpajn4DWx7PJLm4vy%2FlcAIf1cT%2Fp0OGji0SPxYDInaJlCyBkWaJUnLQilboOIQyANo0Y7BhZDbRKgbX11EDkcHMM7OiMoGOqUB1IvWPXHwZNSGbBzHmkgcRL0N7gXCRySBM43K9yAxYmF%2Fw6GtdqgszSUeANB0dsFJeZAK4qiIuFUtrPVSsID3ntSRGKAbnJjZKWHhD3k9uOBh45tXnxqu%2FIv6x4wE3hdEE%2BnDcCBC5c8O%2FNKFySv9XYJORNETJiJ46AXtlK%2BmqUclvqtcKCeAWX1QS7TsHq3OkwIzY4jWPV2KPZqf5aV8oloM60nO&X-Amz-Signature=67688ede5dd6aef9fce24134f0a7a8f24e14fae5762cf3d3c4a746ca1de9abc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTQ2XAK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl9zWorJosONBTcyWXdiUNwyjt%2FaHcLk5wWZqfGgUUoAIgWXSpk%2FiLcGFSCpvVeKVQCsupis%2Bj3yzeVnvZvOr%2B78oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDD2ktHn205jDieX%2FmSrcA8rNBB6re6x1vVSVomWr67osodwq30YUgRr%2B3dumgHcWF97Tt0EFYJsIyA57dqkbBpYUudyAp4IPhSYnrz5j1VzpMZ8961myWSPTDuLHqYm6vFbLGLAEcPP%2FH2tcBEit76AOXLF30OI%2B7tnAQDGBeJEtP%2B2hjVZ0GoZ656GvH6%2FyOSTNYsWpi3B8nyE6wXQsw4yeJ8kWWD3Kg5R%2F%2Bd3ESadgDagdtmgqaEFpwSqI5gC6fQ5QE2mqWrTxsLOtSDIYpw7zh%2FwD8NsNMFEZjIhPXOWEUHKT7NY3znEl%2BmH6iuljdsQjCD0313F%2FS3xsHBVBHAlCrXHw0HazTvlwqfBmkCg1OKCSSQktwcRiP3vbGIo6At8pTi6ClpJgORQgtXhXQG%2FzUn29yl5%2Bxccib1DnMB3GTG%2Bk2Jlx9ou7MFY96GvpDQM90xng%2BSci9yj8xXcvTVl6yt6dCQr74Vn3Ng7qxb5SIPhKxpqgT38rZ0F3Pdc53SX3fLP2Hi%2BcJ85sTQBmgbrrzdB4JyA2erMlYWtsMOtDsINLoyr400BIOKCpajn4DWx7PJLm4vy%2FlcAIf1cT%2Fp0OGji0SPxYDInaJlCyBkWaJUnLQilboOIQyANo0Y7BhZDbRKgbX11EDkcHMM7OiMoGOqUB1IvWPXHwZNSGbBzHmkgcRL0N7gXCRySBM43K9yAxYmF%2Fw6GtdqgszSUeANB0dsFJeZAK4qiIuFUtrPVSsID3ntSRGKAbnJjZKWHhD3k9uOBh45tXnxqu%2FIv6x4wE3hdEE%2BnDcCBC5c8O%2FNKFySv9XYJORNETJiJ46AXtlK%2BmqUclvqtcKCeAWX1QS7TsHq3OkwIzY4jWPV2KPZqf5aV8oloM60nO&X-Amz-Signature=1f6d4824d88c008d83acef1a59816bcd0d44deb028d98211f82e12f209a67a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
