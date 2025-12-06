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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPVUKQ3C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo8o4G%2FbTrUzFQgloDIq2qpiR4zx3DXMesb8t4Z1DTqAiAsg2eL40KVKk%2Fow0iyQiYJFaiTzCfy4L2Da%2FZJB8e02Cr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM%2BYuDFZMbtd0xIm22KtwD0cOx0VMwv%2BgYTwBr3H%2FKVdiF78jUoa2tt0lz%2B42xA2JGyuhsi7hxUiTIIq3W0YeONmp4sDNfIPJ05PUcb0Is%2FyaV4k9ci8i%2FQlBi5LQgUD37JBc%2FGe8iZMtjC3rx6cfptNeNozNdzoDYgJirAosC5Ue0vioP9JWdFBTKljiiQnimU9wWT4gjNiic%2Bf3UMMOfkK2WfSlWTR3tu0iZey4kAaxNXBBViCVNn%2BOPOW98QURBVZBJRGFMcWRxFDNVAD6Q0XxiqyZTF3Q5aD%2FNn3oI3AoYhEO4IbwypzZdlKOyxQebjc6E%2F2%2BHeiEaNZFj24AQwqxvTw28OarAy4VNFHYIwsg6unlpbXGis%2FPdubtz%2FbTQ7sEoudXjUn3whWiW6%2Bg8zodPkuE3mU%2BrXygQbHO%2BPfwUIArNuQoEIVNoxY6drnSNI%2FdUeHGVkwQFify5c%2BV8d5tvb5yn%2FU2Bjy8qzQKAyb1HoZVSnZwO2COPXBL4N%2B8UyHo3v75x%2FqTzCVGkupM71JsNwGFLBUSVL8yfOIIO4YoGhGE9JR0z3f3YcvwwhEeWC%2F4G%2B9y4%2BeqStfXAEQgetSNQgxxKYtJDLnJ0wbvXaMxxvx4Cg%2FwIR1t0ac5ApMmU0LeDxJsREVbW%2BCEw2qbQyQY6pgF4G92uGAP1TNLJqY1dyA8jAHmoFymDVtgLMqa5Nax7Zk%2Bo094Ys2WJBIDgPZKD11BxbD%2FSm400pYq7Dnmw%2BF7ZYtoBlhxECiPRV5ZFG24NzRiNIYv436w7qPuOWdyTjtqCtWU7KxX6%2FxFU5vL%2BTfzp82wuhopodlwUpMWXTlNy5ORQ9Q%2Bt6Ebovi3ezyRQtHhBKlVaEE56mmPgWjDDbxGOuCA%2Fs2oc&X-Amz-Signature=c318d740efb38927d9191abb0f900fd04a46afb1ae85854bb5b2273b9e3765e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPVUKQ3C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo8o4G%2FbTrUzFQgloDIq2qpiR4zx3DXMesb8t4Z1DTqAiAsg2eL40KVKk%2Fow0iyQiYJFaiTzCfy4L2Da%2FZJB8e02Cr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM%2BYuDFZMbtd0xIm22KtwD0cOx0VMwv%2BgYTwBr3H%2FKVdiF78jUoa2tt0lz%2B42xA2JGyuhsi7hxUiTIIq3W0YeONmp4sDNfIPJ05PUcb0Is%2FyaV4k9ci8i%2FQlBi5LQgUD37JBc%2FGe8iZMtjC3rx6cfptNeNozNdzoDYgJirAosC5Ue0vioP9JWdFBTKljiiQnimU9wWT4gjNiic%2Bf3UMMOfkK2WfSlWTR3tu0iZey4kAaxNXBBViCVNn%2BOPOW98QURBVZBJRGFMcWRxFDNVAD6Q0XxiqyZTF3Q5aD%2FNn3oI3AoYhEO4IbwypzZdlKOyxQebjc6E%2F2%2BHeiEaNZFj24AQwqxvTw28OarAy4VNFHYIwsg6unlpbXGis%2FPdubtz%2FbTQ7sEoudXjUn3whWiW6%2Bg8zodPkuE3mU%2BrXygQbHO%2BPfwUIArNuQoEIVNoxY6drnSNI%2FdUeHGVkwQFify5c%2BV8d5tvb5yn%2FU2Bjy8qzQKAyb1HoZVSnZwO2COPXBL4N%2B8UyHo3v75x%2FqTzCVGkupM71JsNwGFLBUSVL8yfOIIO4YoGhGE9JR0z3f3YcvwwhEeWC%2F4G%2B9y4%2BeqStfXAEQgetSNQgxxKYtJDLnJ0wbvXaMxxvx4Cg%2FwIR1t0ac5ApMmU0LeDxJsREVbW%2BCEw2qbQyQY6pgF4G92uGAP1TNLJqY1dyA8jAHmoFymDVtgLMqa5Nax7Zk%2Bo094Ys2WJBIDgPZKD11BxbD%2FSm400pYq7Dnmw%2BF7ZYtoBlhxECiPRV5ZFG24NzRiNIYv436w7qPuOWdyTjtqCtWU7KxX6%2FxFU5vL%2BTfzp82wuhopodlwUpMWXTlNy5ORQ9Q%2Bt6Ebovi3ezyRQtHhBKlVaEE56mmPgWjDDbxGOuCA%2Fs2oc&X-Amz-Signature=d7a9d37739bce648b915ad859fcdc890183b85395f6df0fb3572948ccd867100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
