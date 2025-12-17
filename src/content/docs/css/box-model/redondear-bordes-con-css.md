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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDY622Z2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtiqwtU1k0fqyiSuMffWkE4ZMYcabs%2Fuxx3u0k52FU6AIhAIBmRptmFmMCExJ2lm4LacA1%2FZfzJEd5zluiYMWH9B6vKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhomLgHfQf4O%2Bi5N0q3ANtEYGM1k%2FYdUpGhMYqSraeiAfMVlW%2FfHW%2FxxuzDaTmDUmy9s2pWRx4YswoxgMnqYxOby82vuj0gTIfq2%2BFFZ8i5MtfP9lI%2F5a05YmHve%2BIaN0uWuLsKPaR8Pk3R%2BAifqay3Y%2BtD72SnLZYIJMCbbMLE48ie4K5LJv7%2FagKWdordIfxL9NQyyIQi79lmfuliAOtYDNLMbVWU%2BcDZ%2BxQklAAaNhhdQiAj8T3PB95O91VsYYjxTYA8DLY%2BaVOW1TKuZp8QNUnI%2B0TJpdLeVTGYPPc64e03leJCATnL5jkib2opLPLm0i7HdH%2Fq7xZSKQUbWl3Ab0VhX9pbbnw1LqUSNxQ%2BrPL87y1vnjPoKVzE%2FMWteLH4I9Wy7jFyRBHMpfMBGFJ%2FLqokIXUtHOJBsxsc7qsG3LEjHE7Xdv1SnxYdpVNvCp9ZcWXxaOb89D8gw6S6AI81fL%2FnP4LK7kX361Wof7wS4GempGoCy8n%2F8F60s3PbnfXH%2FcyiFNUq2X5QDKi8T%2BtuGc6%2BxeSOg4Qp5M5o1yje3dNg%2Foy6Ay8y5nS1w7J%2FHxwjQkXFj5SGzekdNKbY%2B%2B%2B%2FUqifTbvYBYWVymRGFjRz0pAhSkSJXhbUw1F0RAqUA1v%2FB2T7z%2B6Xvp8RTDeoIvKBjqkAZ6E4S8rX6ZaQ%2F2kL4A95Jj7uEj0giamxlPkMy84JjiK2aSBsVINGlMxqxAyrClhfMcHz5muxOqpOc3hweek%2BcVC8UwasLJzw25EEY7y1FGjaUtje1V0j8tS3thUZRlNT4ObGvKWUZRRGopRt%2Bg3BVwkNUb%2BWi%2BYLwpFmk3NjS0WA7VMsTtJN6YWNx9YIJWJ1f7zSuZCQrzmbbNyuvDCrshqHyCS&X-Amz-Signature=816f4a4d2fb73ea20db271f9b2ac383f7f12f417f507f56a33deb56020ae6caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDY622Z2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtiqwtU1k0fqyiSuMffWkE4ZMYcabs%2Fuxx3u0k52FU6AIhAIBmRptmFmMCExJ2lm4LacA1%2FZfzJEd5zluiYMWH9B6vKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhomLgHfQf4O%2Bi5N0q3ANtEYGM1k%2FYdUpGhMYqSraeiAfMVlW%2FfHW%2FxxuzDaTmDUmy9s2pWRx4YswoxgMnqYxOby82vuj0gTIfq2%2BFFZ8i5MtfP9lI%2F5a05YmHve%2BIaN0uWuLsKPaR8Pk3R%2BAifqay3Y%2BtD72SnLZYIJMCbbMLE48ie4K5LJv7%2FagKWdordIfxL9NQyyIQi79lmfuliAOtYDNLMbVWU%2BcDZ%2BxQklAAaNhhdQiAj8T3PB95O91VsYYjxTYA8DLY%2BaVOW1TKuZp8QNUnI%2B0TJpdLeVTGYPPc64e03leJCATnL5jkib2opLPLm0i7HdH%2Fq7xZSKQUbWl3Ab0VhX9pbbnw1LqUSNxQ%2BrPL87y1vnjPoKVzE%2FMWteLH4I9Wy7jFyRBHMpfMBGFJ%2FLqokIXUtHOJBsxsc7qsG3LEjHE7Xdv1SnxYdpVNvCp9ZcWXxaOb89D8gw6S6AI81fL%2FnP4LK7kX361Wof7wS4GempGoCy8n%2F8F60s3PbnfXH%2FcyiFNUq2X5QDKi8T%2BtuGc6%2BxeSOg4Qp5M5o1yje3dNg%2Foy6Ay8y5nS1w7J%2FHxwjQkXFj5SGzekdNKbY%2B%2B%2B%2FUqifTbvYBYWVymRGFjRz0pAhSkSJXhbUw1F0RAqUA1v%2FB2T7z%2B6Xvp8RTDeoIvKBjqkAZ6E4S8rX6ZaQ%2F2kL4A95Jj7uEj0giamxlPkMy84JjiK2aSBsVINGlMxqxAyrClhfMcHz5muxOqpOc3hweek%2BcVC8UwasLJzw25EEY7y1FGjaUtje1V0j8tS3thUZRlNT4ObGvKWUZRRGopRt%2Bg3BVwkNUb%2BWi%2BYLwpFmk3NjS0WA7VMsTtJN6YWNx9YIJWJ1f7zSuZCQrzmbbNyuvDCrshqHyCS&X-Amz-Signature=7aec3bdb620ac5915e281d98cc56bc1bd91d6cdd22942edaa59b71211cc0fa69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
