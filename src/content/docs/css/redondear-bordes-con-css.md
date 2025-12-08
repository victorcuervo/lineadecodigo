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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WXR4TXV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgNjaqOhfnCfKL4jYiFguKJuZhsFyzT53ArAMv0pLkeQIhAM6UYqHPA7Fg%2Bw7MKFrBIPNsviPKN60FRmmUzwcM9vn8KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH9NRzSMxdKVXG2EYq3AOq94jE%2BwyFpLn8kEpL0zPLLjr5Y40qX3NUaIAsMPDWWKQrMdZZN9%2F8SpQFTDBkOL2F5Y42%2B6MohN%2B%2FfEb3fPDVYPVeELrgUdvQ3KPi1tamT5bBMyh6tOMkYg17dT06mu6u58LOAxCADQyU%2FBpN3x1O5qfvOL3n9bjZ%2BZs%2BLYuDPOgox48ogXk4GWhWT42FibKgFLAPbjpVEUgaNWz4Epp55nHmMVg7tZhFMOQJ1IfRAkJ8SSa9bQWKUsVyvmnL7nA204s9YCOVblFzLNbtU5snLQioIhnyIgL0zxvIO%2FjlwNrxU56cpSOlf06I2PsWdStyiByf0q0ZdLpTFQfL0GPimWbsziT%2BFOtLrHnEsCZggwAIBymvdhKBCpYVPzBXOG4ZBufm5NcSHLu3BGAWGR10%2BjBnZjBLEaSn9MQwzWmaW1DbhlFEcapnqZL986tggqZ8KNG7XqS6%2F7zB4Hr2SQKjOfoZQojtW2jQ5QpMyJ%2FByYR%2ByJXE%2BotYbqaEZrNhQIiITs4iAN0ElK2%2F9d25Z7NySjBiAVS4p%2FmMTJHlKUVjuLMtFNXvru399GhWDFEW9SbrA4g3%2F0rjmRNiA%2BRDuZUCCQ%2B%2FZKvG0VvEADVZ5Xp1%2F86FujwJZ2kDKE2tUjCVgN3JBjqkAWc5vl2vLLgm06N5m8P51y0yR26rGai7fwBoY35%2F9z2g9h9IRz43gNRh%2FLAVsmWdnay0d28cqf55ysDGxNVn0IfXuguyPsG5YZTv8UYq7YalSO5fBUbvxlt2rMclXKQvDtNNhC803GIv1WXYWy%2F3EuaLmQiLyoGNGgDCHw3vTbEQX%2FAvEX0O3w6XTybpTZllBQysgJPKT4QEj5nc%2F4p%2BGht112Qj&X-Amz-Signature=e74ebd51d4501ac7e9aad2112a9ab3f100db6656c07113ef153920df9c68f56e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WXR4TXV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgNjaqOhfnCfKL4jYiFguKJuZhsFyzT53ArAMv0pLkeQIhAM6UYqHPA7Fg%2Bw7MKFrBIPNsviPKN60FRmmUzwcM9vn8KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH9NRzSMxdKVXG2EYq3AOq94jE%2BwyFpLn8kEpL0zPLLjr5Y40qX3NUaIAsMPDWWKQrMdZZN9%2F8SpQFTDBkOL2F5Y42%2B6MohN%2B%2FfEb3fPDVYPVeELrgUdvQ3KPi1tamT5bBMyh6tOMkYg17dT06mu6u58LOAxCADQyU%2FBpN3x1O5qfvOL3n9bjZ%2BZs%2BLYuDPOgox48ogXk4GWhWT42FibKgFLAPbjpVEUgaNWz4Epp55nHmMVg7tZhFMOQJ1IfRAkJ8SSa9bQWKUsVyvmnL7nA204s9YCOVblFzLNbtU5snLQioIhnyIgL0zxvIO%2FjlwNrxU56cpSOlf06I2PsWdStyiByf0q0ZdLpTFQfL0GPimWbsziT%2BFOtLrHnEsCZggwAIBymvdhKBCpYVPzBXOG4ZBufm5NcSHLu3BGAWGR10%2BjBnZjBLEaSn9MQwzWmaW1DbhlFEcapnqZL986tggqZ8KNG7XqS6%2F7zB4Hr2SQKjOfoZQojtW2jQ5QpMyJ%2FByYR%2ByJXE%2BotYbqaEZrNhQIiITs4iAN0ElK2%2F9d25Z7NySjBiAVS4p%2FmMTJHlKUVjuLMtFNXvru399GhWDFEW9SbrA4g3%2F0rjmRNiA%2BRDuZUCCQ%2B%2FZKvG0VvEADVZ5Xp1%2F86FujwJZ2kDKE2tUjCVgN3JBjqkAWc5vl2vLLgm06N5m8P51y0yR26rGai7fwBoY35%2F9z2g9h9IRz43gNRh%2FLAVsmWdnay0d28cqf55ysDGxNVn0IfXuguyPsG5YZTv8UYq7YalSO5fBUbvxlt2rMclXKQvDtNNhC803GIv1WXYWy%2F3EuaLmQiLyoGNGgDCHw3vTbEQX%2FAvEX0O3w6XTybpTZllBQysgJPKT4QEj5nc%2F4p%2BGht112Qj&X-Amz-Signature=ca66768d876fc33b4222cdd9c9e783101389ac748042849501c5ad6d72576b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
