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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CUZJDG3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNC1sa0pX6gJOESelFVJ8JUhmUAcJ7XiQKtGrqjmegQgIhAK4kb0oaSkXyo4DRjmb4Dcdbhy4U63oW28RpUUiCC%2B8zKv8DCHYQABoMNjM3NDIzMTgzODA1IgyCDuzMJfiyyNFfsf8q3ANBHKZmFewnhKkO6sATmAEfiGMr%2F32KkqXwk%2FxEZSJwv0amds2PpnzorUvuHcdnZAKWyM%2FyzGTGA7XY6QNm9OfXQ0o%2FkRFCXvRwkiBJvTw0WcLDQVmDVcRAYZB%2FJ1czqyIgn9HTByqrDGOSJBsEOKMR8GjL3wqNN28DNv9qKtvhvDBIMWiyeitNhJ2l97NTCeHi5ILS%2BssIoMX9ohsg64%2BK8MoGbWvAsYe95NL6mxCg2bQFtQpqbOE10yN%2FW%2Fx88b7%2Fn%2B%2BsFcFQLsriKNHpvz%2BvCdnXeQgQrZZgIwP1AX%2FCLEqHmXg946eOycPNFWZFvd0wz1eCPheVMMb68rFWU3q7%2BqZrqaS0%2F%2Fy8Fw4GqNpAwiq9VPxb8LDhwUBaErSWxrylTRnIEqT6zjtaQeWptuBL1HzOsgJtGhTJplV9EVfKOOVq3gVHY1Sgblf5HkgmuhJQaevDuh0t999GJB1sl865v%2Bz755ZQvuRHqI1OT9%2F5h%2BofigJpYMPvyE9l90oLCaj2HjpRN1Wt1h4Sm6UZ4SunuUbhj0gkjRYVVJ%2FBigTyCfixxvi%2B6mNDWJygFm3%2B9TRktqQGDLWqxYMbGVO3b7gCdRRRl4dbsyfsWie3AL8hRiKlAnqkS7Grwb%2BuvjCR6YjKBjqkARw7nLXSLR0T3xYPMlFrrllboMLn7%2FiDRO7pPXQXs1EpZdY6JXI8lpRm6hdv%2FEahAJQPaQMNZyV4PWUMGqd0IrVK7CQD9CEleoARX%2BQFI9e9POrKX2kJ48jQfnTsba705Vw4GnPdL1CA9maSXzH3R%2F3D4ZkS%2Fqo0i5sAiP9AHlwAH%2BkanZz%2FXcMv2NfU%2Fow8vDEJs1ESnjoYu6SP4QWLyxWqNw5s&X-Amz-Signature=9c98f186afb1f6af28737d0a3a7c67cd77cad012aaf83dd92f9fc6c0850afeee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CUZJDG3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNC1sa0pX6gJOESelFVJ8JUhmUAcJ7XiQKtGrqjmegQgIhAK4kb0oaSkXyo4DRjmb4Dcdbhy4U63oW28RpUUiCC%2B8zKv8DCHYQABoMNjM3NDIzMTgzODA1IgyCDuzMJfiyyNFfsf8q3ANBHKZmFewnhKkO6sATmAEfiGMr%2F32KkqXwk%2FxEZSJwv0amds2PpnzorUvuHcdnZAKWyM%2FyzGTGA7XY6QNm9OfXQ0o%2FkRFCXvRwkiBJvTw0WcLDQVmDVcRAYZB%2FJ1czqyIgn9HTByqrDGOSJBsEOKMR8GjL3wqNN28DNv9qKtvhvDBIMWiyeitNhJ2l97NTCeHi5ILS%2BssIoMX9ohsg64%2BK8MoGbWvAsYe95NL6mxCg2bQFtQpqbOE10yN%2FW%2Fx88b7%2Fn%2B%2BsFcFQLsriKNHpvz%2BvCdnXeQgQrZZgIwP1AX%2FCLEqHmXg946eOycPNFWZFvd0wz1eCPheVMMb68rFWU3q7%2BqZrqaS0%2F%2Fy8Fw4GqNpAwiq9VPxb8LDhwUBaErSWxrylTRnIEqT6zjtaQeWptuBL1HzOsgJtGhTJplV9EVfKOOVq3gVHY1Sgblf5HkgmuhJQaevDuh0t999GJB1sl865v%2Bz755ZQvuRHqI1OT9%2F5h%2BofigJpYMPvyE9l90oLCaj2HjpRN1Wt1h4Sm6UZ4SunuUbhj0gkjRYVVJ%2FBigTyCfixxvi%2B6mNDWJygFm3%2B9TRktqQGDLWqxYMbGVO3b7gCdRRRl4dbsyfsWie3AL8hRiKlAnqkS7Grwb%2BuvjCR6YjKBjqkARw7nLXSLR0T3xYPMlFrrllboMLn7%2FiDRO7pPXQXs1EpZdY6JXI8lpRm6hdv%2FEahAJQPaQMNZyV4PWUMGqd0IrVK7CQD9CEleoARX%2BQFI9e9POrKX2kJ48jQfnTsba705Vw4GnPdL1CA9maSXzH3R%2F3D4ZkS%2Fqo0i5sAiP9AHlwAH%2BkanZz%2FXcMv2NfU%2Fow8vDEJs1ESnjoYu6SP4QWLyxWqNw5s&X-Amz-Signature=9c67a02770d5d166e89451f0da2b4b844918ceadbccdaf112a43a9c18057350b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
