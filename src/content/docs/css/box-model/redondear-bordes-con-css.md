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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5TZMAJR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhVBpsZWKeZrPXqVkAVk0adhTtdpKZX9M7DSsNFWg22wIgOrMGHHkA8d4XfYS%2F1tne5Z6dkO8pMqAIeup09b4gtIgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDB%2BvK2m%2FSHoK2j2coircAxV8LyOXKrMbvnXQSU5EJxAbwVEYp3f4sSWTXqL%2FJ7M7JQy8r05EdaIWrDNoun4QCFmMkr3mz1leA9Nihv58OpHnzVuTB%2BIBsJoOt9caufTQgoUO8APJ8f7jJJGI8WGACKRIKhMuQnmE9PKS0OSHFIWMwey57Jeg6hnLDBD3nJtP79Q8PYoRbDbDfmvNnnl%2F4KMM2oCw07Yv4UGg3XvTagHa3YEIzmW9MnHt102VrDSXTX48v1dojNIBYRcO4jPZayoJwurYNdqSclDG4XFT15z2vtrAniMjLVEtkcc3S9gQg6FojpJsIvQVv4ikgBT%2F%2FUlGbqal2xNyKMXMXAPWOd%2BAcH%2BfElRLwzPExwzKv23Jiztl4Hb8eYAhUNx0jJUFx0NUf7aQOPrPt3PpfdnD2rL%2B1uVGL6%2BanLiMn59hDWMa8fiAO3VT6RNDZnZxXkhbGXAXinqRheNLf7Rq%2FqaU4T2%2FjhRaTpjo02Ht8DGNmmkGliB%2Bk37RgT40av1gj0pkCg9TdtDPpmeXmIldfhTP20TjpOCxfWftyKtH1FZATUsuqkQJ7ygQU%2B9ylUb2Gr1DDWHV%2FZmtsL9NSFzU756dzfVbWqDHwTtG%2FYAkJ4x%2FKLLc65hdPx0cYRPI3gibMN%2FhisoGOqUBViv1p1vCCcAgrIS04dfNv15p4ALBDPl6MjB0nvvkIVgRdP1XdZzqqEGNDrdEAfPtTcFr%2FGrLFPtTnW8bkx5A13rcRLRfNxU9MjD7rJ%2FqMkpnYzGDiHNkj0pgFHFtTGVUWg9DDwTN6Cnl33r5O0aXUJ0lNbknGMfoHXBX12AL7PgivFqi6G%2FT8XDEMUbX25RJsaCQ%2Bx9I5V%2Bndzk4%2BezD9CY4BugY&X-Amz-Signature=d7b7e943ecbace115706ca00dc2253ed70fdf20da710188d11036f188301a8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5TZMAJR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhVBpsZWKeZrPXqVkAVk0adhTtdpKZX9M7DSsNFWg22wIgOrMGHHkA8d4XfYS%2F1tne5Z6dkO8pMqAIeup09b4gtIgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDB%2BvK2m%2FSHoK2j2coircAxV8LyOXKrMbvnXQSU5EJxAbwVEYp3f4sSWTXqL%2FJ7M7JQy8r05EdaIWrDNoun4QCFmMkr3mz1leA9Nihv58OpHnzVuTB%2BIBsJoOt9caufTQgoUO8APJ8f7jJJGI8WGACKRIKhMuQnmE9PKS0OSHFIWMwey57Jeg6hnLDBD3nJtP79Q8PYoRbDbDfmvNnnl%2F4KMM2oCw07Yv4UGg3XvTagHa3YEIzmW9MnHt102VrDSXTX48v1dojNIBYRcO4jPZayoJwurYNdqSclDG4XFT15z2vtrAniMjLVEtkcc3S9gQg6FojpJsIvQVv4ikgBT%2F%2FUlGbqal2xNyKMXMXAPWOd%2BAcH%2BfElRLwzPExwzKv23Jiztl4Hb8eYAhUNx0jJUFx0NUf7aQOPrPt3PpfdnD2rL%2B1uVGL6%2BanLiMn59hDWMa8fiAO3VT6RNDZnZxXkhbGXAXinqRheNLf7Rq%2FqaU4T2%2FjhRaTpjo02Ht8DGNmmkGliB%2Bk37RgT40av1gj0pkCg9TdtDPpmeXmIldfhTP20TjpOCxfWftyKtH1FZATUsuqkQJ7ygQU%2B9ylUb2Gr1DDWHV%2FZmtsL9NSFzU756dzfVbWqDHwTtG%2FYAkJ4x%2FKLLc65hdPx0cYRPI3gibMN%2FhisoGOqUBViv1p1vCCcAgrIS04dfNv15p4ALBDPl6MjB0nvvkIVgRdP1XdZzqqEGNDrdEAfPtTcFr%2FGrLFPtTnW8bkx5A13rcRLRfNxU9MjD7rJ%2FqMkpnYzGDiHNkj0pgFHFtTGVUWg9DDwTN6Cnl33r5O0aXUJ0lNbknGMfoHXBX12AL7PgivFqi6G%2FT8XDEMUbX25RJsaCQ%2Bx9I5V%2Bndzk4%2BezD9CY4BugY&X-Amz-Signature=8f046e3f59836be0f1af7d3147ee006b0c0724116909b66dc3872debab403183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
