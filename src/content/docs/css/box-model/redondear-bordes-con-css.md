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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNPMQLCM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiqBtGf645W4%2FyIP%2B%2BE3kUuiuWCC9IpUiGartJNtu0RwIhAMcI0baQD2v%2FuE6DzoAHrmysWALp8puOVtjie14bd6gaKv8DCHEQABoMNjM3NDIzMTgzODA1Igw%2F93bVNYlVpjIW7PQq3APb%2BU2aEHUuBEpC76DrYj1U%2FtxDottjgqev%2BgYk4iIXLHyFETbfgQmEnKhrE0xtGEavWcWp5KX9NYsk8gTvC8qCs2Ojd7tO173%2FfEvmgWQ%2BUsqVjcQqqH5%2BIKGbZ5txuVG5DjXfI5DWnT1ax9EZkZRY3vkQFZ6sT9EtMru%2B4w2lJKgcwsOvSGWcNcsjA3w99jeLbVr6sVCTK9%2F2kjZfQOT6m%2FZ0l0allX0cZJEUeGnhN%2FaliWUKGSwBjg4zniXX2d0XVp20Cf3dB%2BfjdpDBoC9JPr4%2BPJS8NNhxutE45dAWCbXpo%2F7CZYALfAFzes0x6QutQcfzy0lgwQgRY7pvLD59XioA87YLTnjorhPws923Wc7wZMDJ%2Fg8oZBPNNuvKiiu73IqMPFiNQQEQTYqxADAwwqiLxREpCwS8diicZMvJ3VOIO%2BLQ5Q4SnAfCoO4U8fXCNNaDaMH82QRbtnsclGmjo8%2BWrAPj34Ng7PVcI7vXe18Tq%2BvcXo7A70%2B0DJnk6Q%2FNw4r2PsQLSwQZCtnxEfoMPISmozN468JEehroaMX3pOxXfcuAxBE%2BX0um7RK4bRownhlND4Uqh0ERFlrv5w7oqYxTWrkh6MhAYKrsF5MowCKYnPJc3h0O86nYCjDq3ofKBjqkAaq9Q5SuWVRAHKOaET3IPoSmzKgDIXu9lOYaW95gMm%2FDU3BgwI%2BgOFn13l6eA9jzKBj9svGAf4WhBAebLWyLVw0tOhESUBQ9UDFGzl3XBW%2BL8kypPcR5v5ey6PNi28Hf03NDjtHt8tRebPM0IdAw9MfajXliAOz5a1UUQ0MefNx3Dcg8W8%2BGNa8GH7gyIGzIx6qgxhvDDBztKpeFFvUIWd0yo5pu&X-Amz-Signature=6f2c9db83b38296c3de6d1b5135142021f1eff9c71280bb8967a1e9ce23ce3bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNPMQLCM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiqBtGf645W4%2FyIP%2B%2BE3kUuiuWCC9IpUiGartJNtu0RwIhAMcI0baQD2v%2FuE6DzoAHrmysWALp8puOVtjie14bd6gaKv8DCHEQABoMNjM3NDIzMTgzODA1Igw%2F93bVNYlVpjIW7PQq3APb%2BU2aEHUuBEpC76DrYj1U%2FtxDottjgqev%2BgYk4iIXLHyFETbfgQmEnKhrE0xtGEavWcWp5KX9NYsk8gTvC8qCs2Ojd7tO173%2FfEvmgWQ%2BUsqVjcQqqH5%2BIKGbZ5txuVG5DjXfI5DWnT1ax9EZkZRY3vkQFZ6sT9EtMru%2B4w2lJKgcwsOvSGWcNcsjA3w99jeLbVr6sVCTK9%2F2kjZfQOT6m%2FZ0l0allX0cZJEUeGnhN%2FaliWUKGSwBjg4zniXX2d0XVp20Cf3dB%2BfjdpDBoC9JPr4%2BPJS8NNhxutE45dAWCbXpo%2F7CZYALfAFzes0x6QutQcfzy0lgwQgRY7pvLD59XioA87YLTnjorhPws923Wc7wZMDJ%2Fg8oZBPNNuvKiiu73IqMPFiNQQEQTYqxADAwwqiLxREpCwS8diicZMvJ3VOIO%2BLQ5Q4SnAfCoO4U8fXCNNaDaMH82QRbtnsclGmjo8%2BWrAPj34Ng7PVcI7vXe18Tq%2BvcXo7A70%2B0DJnk6Q%2FNw4r2PsQLSwQZCtnxEfoMPISmozN468JEehroaMX3pOxXfcuAxBE%2BX0um7RK4bRownhlND4Uqh0ERFlrv5w7oqYxTWrkh6MhAYKrsF5MowCKYnPJc3h0O86nYCjDq3ofKBjqkAaq9Q5SuWVRAHKOaET3IPoSmzKgDIXu9lOYaW95gMm%2FDU3BgwI%2BgOFn13l6eA9jzKBj9svGAf4WhBAebLWyLVw0tOhESUBQ9UDFGzl3XBW%2BL8kypPcR5v5ey6PNi28Hf03NDjtHt8tRebPM0IdAw9MfajXliAOz5a1UUQ0MefNx3Dcg8W8%2BGNa8GH7gyIGzIx6qgxhvDDBztKpeFFvUIWd0yo5pu&X-Amz-Signature=95d03ab90f86ceb71f7699de4fc3197b190f5fe5e76218b38d7ff99a292528b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
