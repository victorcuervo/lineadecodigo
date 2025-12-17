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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REJPT5HC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUIMYe9iVcPSudUlxWDrBORRzj0aK%2FMmUFEXB748wG8AiAJ6q4iRLBnaYHjuXD7zN1520cWcKogc2EVelimmfbIsCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDhc4z%2F0V6ZYRilxDKtwD3oncZdk%2BQJe8bm5k222NCpEpSPvXBRSN4kY%2FsRrLxvr3QBQnl3t2Bs2zwTRFolkQg0%2B4W31kecJkNQ2g%2B4ZSm5U5dA0LAVRICOExH4bzOF%2FZ%2BwLU9YD6OH4H%2B9tPi7YD3mEaoWjvxogi1JzUkS6LKg%2Fc0x2IxloSccpXRgNBhpLGHQw%2Fzj8OhxH5Nex7HLkeJEzLxDt90PTH6%2BkTpUH%2FPedFAiAgVC2b75EFv5zrsqfNYZ6ZrKRyIAgw7By2oLVBWV4FAOnMka2LiFk6nSgMMvkGDaXiyr6aQvv3vsQ%2BORVVYQbT2JkwaAB7%2BJwT%2FLZ4YvB%2FCV0oBcp1gzpTwFIqUoV2OyYq9Ifi6D4yc7OsAUKOYWCYZsFN6ozi0uSJfURiaQiMKoqRA%2FhB83WCEz2T6EfpV5Dc8dVNfR9NbGoagjI4YPPldzsO1ivboW576PIPjQyU2bKAdE1AzGFLX3qazSdvNXimWpTZzy8eOCHWSjQWx59RObzrqxfVOC8nIgooGDzGA1yQWW8MmI5%2BT4W9AECJ3PNWSfRCPhipCi5WL7Ks%2F1ycBJjaSM2mYI1VHHNamcHbWM%2B4F4h8bstS%2FJvBnUbYvtdk1NX6tDAnLEhwXSuMyGcxP%2FdKjDnCLRQw%2Fo6KygY6pgFWJWvQvOtC0krQKmJJXqQZZl1UAkKm4MLoMjEc2YkH6SPvRZQSXaa7B8oAWdAHPe9uQtIUXlmglzTWCwK5%2FHyCziqh%2FM74u6tznaPyeB3hYnE4Tubmz65rL13G5JhIo%2F95s%2FJcfLg8%2BHensNNwYEzjNx%2Bsn7CWJz1I5jI2phCcl%2Bmn7WreaMgi5F12tlazK5iRl1oP6LKo3xAhSTKdizKPoDJObFnL&X-Amz-Signature=c904ed25b3bf6aa00b9323d10606f9a31f0c568684a1bb334bf347dbb51d16b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REJPT5HC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUIMYe9iVcPSudUlxWDrBORRzj0aK%2FMmUFEXB748wG8AiAJ6q4iRLBnaYHjuXD7zN1520cWcKogc2EVelimmfbIsCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDhc4z%2F0V6ZYRilxDKtwD3oncZdk%2BQJe8bm5k222NCpEpSPvXBRSN4kY%2FsRrLxvr3QBQnl3t2Bs2zwTRFolkQg0%2B4W31kecJkNQ2g%2B4ZSm5U5dA0LAVRICOExH4bzOF%2FZ%2BwLU9YD6OH4H%2B9tPi7YD3mEaoWjvxogi1JzUkS6LKg%2Fc0x2IxloSccpXRgNBhpLGHQw%2Fzj8OhxH5Nex7HLkeJEzLxDt90PTH6%2BkTpUH%2FPedFAiAgVC2b75EFv5zrsqfNYZ6ZrKRyIAgw7By2oLVBWV4FAOnMka2LiFk6nSgMMvkGDaXiyr6aQvv3vsQ%2BORVVYQbT2JkwaAB7%2BJwT%2FLZ4YvB%2FCV0oBcp1gzpTwFIqUoV2OyYq9Ifi6D4yc7OsAUKOYWCYZsFN6ozi0uSJfURiaQiMKoqRA%2FhB83WCEz2T6EfpV5Dc8dVNfR9NbGoagjI4YPPldzsO1ivboW576PIPjQyU2bKAdE1AzGFLX3qazSdvNXimWpTZzy8eOCHWSjQWx59RObzrqxfVOC8nIgooGDzGA1yQWW8MmI5%2BT4W9AECJ3PNWSfRCPhipCi5WL7Ks%2F1ycBJjaSM2mYI1VHHNamcHbWM%2B4F4h8bstS%2FJvBnUbYvtdk1NX6tDAnLEhwXSuMyGcxP%2FdKjDnCLRQw%2Fo6KygY6pgFWJWvQvOtC0krQKmJJXqQZZl1UAkKm4MLoMjEc2YkH6SPvRZQSXaa7B8oAWdAHPe9uQtIUXlmglzTWCwK5%2FHyCziqh%2FM74u6tznaPyeB3hYnE4Tubmz65rL13G5JhIo%2F95s%2FJcfLg8%2BHensNNwYEzjNx%2Bsn7CWJz1I5jI2phCcl%2Bmn7WreaMgi5F12tlazK5iRl1oP6LKo3xAhSTKdizKPoDJObFnL&X-Amz-Signature=d5299f03569c0ecce9c61431edee22a55e0f8fec1b2586c74b6a13332eeba702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
