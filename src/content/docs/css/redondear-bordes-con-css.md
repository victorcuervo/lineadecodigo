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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DCOZTKX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEplffnrIeTA8d1y%2BXQ%2FtZIsK4o0IsKnNOqUDMyc2IYCAiAZoET8G5JVgJYn0W5YccLgQSgmfs%2BxDB9kVTiZETrVzyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM3IZhVcFdd8ejK1BVKtwDgZIk1aAc8vj8Aq7nlPYqb0AyUJBKDc2ynFEnLqE0c0GD8XTwqQ921t4tEhsrpFXszz9QPQe5A5CQAqioeWpE4b9rJUB3EBT7dZ2IPlkMbnuaWyXUy2XMEBVqz1l7Cvk%2FmtJkzH%2BEP1x1Pu7Esz4GFIUPbRDYpFqPeFxImhijCOVvoxVh7gXTxJBF%2FPMLzdtoROzgZDUP6uguwXRkvHwtZtGKkxTRFwwcYM0aZSu0kvvp4x0UqgC9FLaL3anNCZIwd12JEwX0HBQecAukacWS1hir4bRHKoKUZ34YVSvuFVufaDwc2xYiHBcBGDQIaZo5K5twotNuD2XIGL%2BOlV56h9VSbZzBEYlnfP6Rb%2BgupRpedyPmMvY3wTXxjph6bYhtVssug2BQrTzXYhxacV2j4B4f5Ic5QkJ9uNU3iE6j3CaJDMeM8poYSClwWe8WIm5L9Q2wCmDAS2lb0GZOGlTHaYIjATDmw%2BZRSyTBMJhRtcnaR%2FbYrljKfJbTkfkFQcMV2ZNWUwZ5GSPADFtxQcVBTKvg95OUG3ITpMpzrhodBcjxU6JO2d3r7BNjuFVB3wCCT61Soo0qRAiQZoHuabbaruYdETXHQK68RAYmM%2BKCRbfGS0p0A45%2F1oDfC4kwz6bQyQY6pgEEbl9qBHWPNkC5MyZwT6yR20Q8AOsKkODb%2BQwmECDo%2FXvqyq7NP2hmYBqBFQyLVdsAAObbnvTQMbX945i%2BfceVN4xLw7e2PcnI3eHndUTEwg%2BF7rP2c%2FZ4XMjWrRyi35ax%2BiYctSu7EeCdpEJBoBfPRvvy%2Bm8dUEUaTLPnhm2LjH%2B4xJ0vPiKFTw0ll5VbL0ZAGoP0MEUtezHPSrBdhEvxUOZ5qHXN&X-Amz-Signature=4826ac41d33e50f0e1d86c45289383c799845bcb380b6ce0491fe2868d85d2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DCOZTKX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEplffnrIeTA8d1y%2BXQ%2FtZIsK4o0IsKnNOqUDMyc2IYCAiAZoET8G5JVgJYn0W5YccLgQSgmfs%2BxDB9kVTiZETrVzyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM3IZhVcFdd8ejK1BVKtwDgZIk1aAc8vj8Aq7nlPYqb0AyUJBKDc2ynFEnLqE0c0GD8XTwqQ921t4tEhsrpFXszz9QPQe5A5CQAqioeWpE4b9rJUB3EBT7dZ2IPlkMbnuaWyXUy2XMEBVqz1l7Cvk%2FmtJkzH%2BEP1x1Pu7Esz4GFIUPbRDYpFqPeFxImhijCOVvoxVh7gXTxJBF%2FPMLzdtoROzgZDUP6uguwXRkvHwtZtGKkxTRFwwcYM0aZSu0kvvp4x0UqgC9FLaL3anNCZIwd12JEwX0HBQecAukacWS1hir4bRHKoKUZ34YVSvuFVufaDwc2xYiHBcBGDQIaZo5K5twotNuD2XIGL%2BOlV56h9VSbZzBEYlnfP6Rb%2BgupRpedyPmMvY3wTXxjph6bYhtVssug2BQrTzXYhxacV2j4B4f5Ic5QkJ9uNU3iE6j3CaJDMeM8poYSClwWe8WIm5L9Q2wCmDAS2lb0GZOGlTHaYIjATDmw%2BZRSyTBMJhRtcnaR%2FbYrljKfJbTkfkFQcMV2ZNWUwZ5GSPADFtxQcVBTKvg95OUG3ITpMpzrhodBcjxU6JO2d3r7BNjuFVB3wCCT61Soo0qRAiQZoHuabbaruYdETXHQK68RAYmM%2BKCRbfGS0p0A45%2F1oDfC4kwz6bQyQY6pgEEbl9qBHWPNkC5MyZwT6yR20Q8AOsKkODb%2BQwmECDo%2FXvqyq7NP2hmYBqBFQyLVdsAAObbnvTQMbX945i%2BfceVN4xLw7e2PcnI3eHndUTEwg%2BF7rP2c%2FZ4XMjWrRyi35ax%2BiYctSu7EeCdpEJBoBfPRvvy%2Bm8dUEUaTLPnhm2LjH%2B4xJ0vPiKFTw0ll5VbL0ZAGoP0MEUtezHPSrBdhEvxUOZ5qHXN&X-Amz-Signature=2e0610e23b1daabfa70a76a6b720edde82301f4416bbb395f02aef6c5c405c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
