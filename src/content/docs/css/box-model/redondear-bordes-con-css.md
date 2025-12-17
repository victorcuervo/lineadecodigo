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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRCJRDJG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDq9xrIt4Avqq9IL7AsrddYfzR7%2B3lRzfWlzXJtC3cynAiAsrk7xV%2BvTcSt3A1uHRvlbiPQIMNT2N6gNUUXGE%2Fu9tCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM%2FgqJfMkkvfnfUMpNKtwDGG2GTk9uN%2FdSGYRD4SXDtkVNndw0Dzns%2ByPswbCKTAKaTr11quHQPGjqDlqH4RmShlhxYMGcZmHmZ1TNrUPo%2FBgBBhgRhaHaNfQT78oukvbSkl%2FcTxtxEj6WgwS4h%2BzAD6oREWftOhfF84e6JXLL3gP4e7o%2B1bPtfiPZLOVVNyFJYTuiWBWJ3DYC2zv8%2B4g9q9EjOe6CygI3sHZ87XKCOOGYZofnYn0EHdvSLiuVi5dLufEgqV7zstvwf1BufLJZvZ%2F9WpLOHCm0Q1R33TxiFnm8UNuBJG3A1HE8dEO9wpcp1IaQsRxc15DzqqmRcbODPiL0iBG%2BP%2BsntoToS3wZ14ap3GllBpSyDhAv0IQL07CNNSrbIiKfu20v0x4clvMzm4FZV1tDfomfkdF7xbvDBR3bf4xDlVd986Av0VF3iCepi5IaiNjgbN1AHhKs4LFzPlUM0V%2BfCMCBf2nPdxlVYqXWgIbaD7uCn%2Fgn5rKZl0khOmeTZ%2FzrzhTRxiNiH9JvG3qkgTCO5OGwkgQsTpuTWc0%2FA11VkbxQxVPeFy574SbhQcA3MZXyGHzP9It7HVgijbgbrBIB%2BiGI498yvMXWTr3l%2FhahDK33xw0byI4kL5ORv7M2qZopdZbK%2FhEwvbGIygY6pgEK%2FEImg2tQR2%2FEG%2B85vjLTN24wCFTJoUHW7eVzl7S9IcaJYFypPp%2FRA63E7d06ogzULSyaylx2OJeOeBS%2Br%2B3lE1dom9Cm7O2KG0GjxkYOlfAx4PQ4ehNILAVpec2376Gn0eeoTNSRl71sDnHYez8UYl9hUHL9Lx%2Fy5Zzz4WjlvlQ0tjTp%2Fqo%2FvpFMKtVYgRArmQwfpXhs6oRU%2B83%2FxxO38lT1qM5z&X-Amz-Signature=8f3882d5244e32f56f50b5ae1d5dbd7624e13332d7a12521c527ffe6b69b6b75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRCJRDJG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDq9xrIt4Avqq9IL7AsrddYfzR7%2B3lRzfWlzXJtC3cynAiAsrk7xV%2BvTcSt3A1uHRvlbiPQIMNT2N6gNUUXGE%2Fu9tCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM%2FgqJfMkkvfnfUMpNKtwDGG2GTk9uN%2FdSGYRD4SXDtkVNndw0Dzns%2ByPswbCKTAKaTr11quHQPGjqDlqH4RmShlhxYMGcZmHmZ1TNrUPo%2FBgBBhgRhaHaNfQT78oukvbSkl%2FcTxtxEj6WgwS4h%2BzAD6oREWftOhfF84e6JXLL3gP4e7o%2B1bPtfiPZLOVVNyFJYTuiWBWJ3DYC2zv8%2B4g9q9EjOe6CygI3sHZ87XKCOOGYZofnYn0EHdvSLiuVi5dLufEgqV7zstvwf1BufLJZvZ%2F9WpLOHCm0Q1R33TxiFnm8UNuBJG3A1HE8dEO9wpcp1IaQsRxc15DzqqmRcbODPiL0iBG%2BP%2BsntoToS3wZ14ap3GllBpSyDhAv0IQL07CNNSrbIiKfu20v0x4clvMzm4FZV1tDfomfkdF7xbvDBR3bf4xDlVd986Av0VF3iCepi5IaiNjgbN1AHhKs4LFzPlUM0V%2BfCMCBf2nPdxlVYqXWgIbaD7uCn%2Fgn5rKZl0khOmeTZ%2FzrzhTRxiNiH9JvG3qkgTCO5OGwkgQsTpuTWc0%2FA11VkbxQxVPeFy574SbhQcA3MZXyGHzP9It7HVgijbgbrBIB%2BiGI498yvMXWTr3l%2FhahDK33xw0byI4kL5ORv7M2qZopdZbK%2FhEwvbGIygY6pgEK%2FEImg2tQR2%2FEG%2B85vjLTN24wCFTJoUHW7eVzl7S9IcaJYFypPp%2FRA63E7d06ogzULSyaylx2OJeOeBS%2Br%2B3lE1dom9Cm7O2KG0GjxkYOlfAx4PQ4ehNILAVpec2376Gn0eeoTNSRl71sDnHYez8UYl9hUHL9Lx%2Fy5Zzz4WjlvlQ0tjTp%2Fqo%2FvpFMKtVYgRArmQwfpXhs6oRU%2B83%2FxxO38lT1qM5z&X-Amz-Signature=9c4ce7b6376fba1df459b6e3b22844b3497a4da8256bf8f8c7be3caff25d328f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
