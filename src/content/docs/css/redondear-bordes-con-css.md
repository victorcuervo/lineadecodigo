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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMBMGV3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T111753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvc9R92l7a78wAtb6WUXR5h1z1YSd9pR238j5FjraBsAiAuJTXhRQUeZInxyMXE58r77DJelKsQ%2BEJJgvmh4VMOQCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMryBQPNpx20cnNemmKtwDNCcos0mwYFXYwezZjFpHKmN1u3ZR5ZfWoz2O%2BKJk6wANOTBVJpf6y%2FhkriJn8lw4WXmTg9O8ZY1Q2fwQhDa6nMWUD1XiLkEBfmYZq1ly9yTvdeqCJ4lmFepG57mcK%2Bj14b%2BUnNWLfrNBgF3lXyR%2BQcHdoE9iD15jMVc5ISRcr%2FYuglcAS%2FDJpZciU7qQn2eUyw5Y5ozCzQdUO4jPEJJhP2xFlSlmC7TzJslRBNHIFRTLv2Mbu5tTN2lI197XIoEwNUhezIjZNr0xemq1wUeBxXSxy%2B9ZhHZncyZq8psZG3yLhboB3n7qqAVQFTRauwJA7meJQ%2BLPQksevtZwD56oUcCMrw3mGxKjDFTuvkFeEbnnlV2Sxk9ArAXV%2Fr8hIo3gLS2feJoqzGsvbDbJrEkIybTP4jGcomqiMnZYf4lGZArT%2BebYxJD3RwvnjxlCd3ZByymZZixidnjf9sQqEO9d5Avd9XpM41qr3ke7iy0oGWjg3VD9dIv2p64h%2BD01g8ag0il3Bgqj9wymt8jsY8rl88H%2FS%2BK8LIk5GoIP289ZOAs06DRM8WED%2BJlUzoHRsXcejTIshpdkKODQIgAqB2GiJfCN0BVtmDRb1F6KByhLnxpBlIhZQKkcWI6ozJIw7ajKyQY6pgGB0jJkw%2FtEt8m%2BMHdlB7rkOASfaH2bLRUaZB3PZoLl9IscEWcCE5QXfeTB3PrrXcwzl9yLbUtb%2BM9Bu9rtlNvc5MfiGrpo170cyVmGq%2F8Me08x7f9m5nWdjkl%2FUl%2Bl3wVj%2BwSHnDJxZpHt2tBwwdpEiOE%2FzcADvIQhnNvuEpI%2B49WYzqSnXCo9oXoFc7MCGdlK0WmIXx49akiMIy4PkRNR28KGC8yK&X-Amz-Signature=c3bf51cbde14b0cea5d2ce153052d262c7070355867edac6c92ea04f1daa0cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMBMGV3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T111753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvc9R92l7a78wAtb6WUXR5h1z1YSd9pR238j5FjraBsAiAuJTXhRQUeZInxyMXE58r77DJelKsQ%2BEJJgvmh4VMOQCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMryBQPNpx20cnNemmKtwDNCcos0mwYFXYwezZjFpHKmN1u3ZR5ZfWoz2O%2BKJk6wANOTBVJpf6y%2FhkriJn8lw4WXmTg9O8ZY1Q2fwQhDa6nMWUD1XiLkEBfmYZq1ly9yTvdeqCJ4lmFepG57mcK%2Bj14b%2BUnNWLfrNBgF3lXyR%2BQcHdoE9iD15jMVc5ISRcr%2FYuglcAS%2FDJpZciU7qQn2eUyw5Y5ozCzQdUO4jPEJJhP2xFlSlmC7TzJslRBNHIFRTLv2Mbu5tTN2lI197XIoEwNUhezIjZNr0xemq1wUeBxXSxy%2B9ZhHZncyZq8psZG3yLhboB3n7qqAVQFTRauwJA7meJQ%2BLPQksevtZwD56oUcCMrw3mGxKjDFTuvkFeEbnnlV2Sxk9ArAXV%2Fr8hIo3gLS2feJoqzGsvbDbJrEkIybTP4jGcomqiMnZYf4lGZArT%2BebYxJD3RwvnjxlCd3ZByymZZixidnjf9sQqEO9d5Avd9XpM41qr3ke7iy0oGWjg3VD9dIv2p64h%2BD01g8ag0il3Bgqj9wymt8jsY8rl88H%2FS%2BK8LIk5GoIP289ZOAs06DRM8WED%2BJlUzoHRsXcejTIshpdkKODQIgAqB2GiJfCN0BVtmDRb1F6KByhLnxpBlIhZQKkcWI6ozJIw7ajKyQY6pgGB0jJkw%2FtEt8m%2BMHdlB7rkOASfaH2bLRUaZB3PZoLl9IscEWcCE5QXfeTB3PrrXcwzl9yLbUtb%2BM9Bu9rtlNvc5MfiGrpo170cyVmGq%2F8Me08x7f9m5nWdjkl%2FUl%2Bl3wVj%2BwSHnDJxZpHt2tBwwdpEiOE%2FzcADvIQhnNvuEpI%2B49WYzqSnXCo9oXoFc7MCGdlK0WmIXx49akiMIy4PkRNR28KGC8yK&X-Amz-Signature=6c01e799b9b61d520adb74703a6eaa2c53ed19a1ee6d28c93a9d610204706fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
