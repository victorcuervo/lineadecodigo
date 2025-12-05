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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RY35Z3W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBK0FQ0xG50GyY1MrmsTIELIz%2F5S2RiSsrHyhX28xcrkAiB8RnOMqWU1ZmsL1H32QkP4u6wqk9lgNH%2FnaKLS9RBMOCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMyVzI%2Fod6xoWHAV%2B6KtwDWqGoI55kM7mTjXEnDmrXfQygCD7imGj6W7Esd9CRjhYkS204G7Kz45O3MMviKjWa0ENW5HEo0UI3u8TC40P3a8tTv2OSrDx%2BXIIAkTIaWUpi3Tv7JaQNUr2A0w4MyPosyuJoVfo87GXbWNncv%2BFAMdENdhZryciM1mvfvy8tV%2BbzCFxLmfV7ISYa2LNjmyQENeqmT%2Fo195FZsjfuwBb5XzRWrRYhZ%2BPus3HLLc69mXFvkUcKAndc5DIFW87RrhJQbeYD9f5g2qnuxewLYu4kdIGrG6JLwaQr2UL9dH8SWEuEx1nXMSW6AyiOHtU6ysNDfPbiChuuldRUmHV5RiJxZAanBWYbAWrlUsdyWLYys0wiVMHoUVQ3LSeASpxoNz4aYx4BZD%2Fnm8vbKvtv798RUPS%2BoR4D3292ODwTBOM8Z0YP0PX0KB5x4PmTL7%2F1kxCeOi9Tl37pN6aPSq%2BpE8gHfZ2GEVEjAwAv%2FeQXqHW2LroDGEuzrfxikoo0LnuoJyir%2BDeGeNxch18f88DtEnv6fvowl60T3ghqzU8Ct65n7YKtH6moh%2F2pB%2BYNkMkQ24VyyoXZAfGpTdzshiJV%2F1CE9FnirfEIloWlWx6lzg%2BcA9nsK2Kc02l5lzz6hoIw5OfLyQY6pgEfRihEDPq%2BuhEu4W%2BozYsaiyTwcATMSHhSAydeUz%2F1XbvwV7szs%2F%2FQR1qM1Y6ajAF%2FyRYXAVlJJ3VNyj%2BrgDkBWSDwmMASfcU8vm5LUgYwSdPAtBJ4bc7tY9VgWIabgmgR4e5xvOVlFVfEZY2GLXt6MfxkFLFXwaKow4pUZkwuaM3RMEFu1xOFUMB7w%2FmKtKdpFYoeLHBlxlGHf0oazMwV87qcaTWz&X-Amz-Signature=3bbbf52770ce172b23ffb0cb56443df44c22fa2a621ba5223b3a1bc10f3e79fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RY35Z3W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBK0FQ0xG50GyY1MrmsTIELIz%2F5S2RiSsrHyhX28xcrkAiB8RnOMqWU1ZmsL1H32QkP4u6wqk9lgNH%2FnaKLS9RBMOCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMyVzI%2Fod6xoWHAV%2B6KtwDWqGoI55kM7mTjXEnDmrXfQygCD7imGj6W7Esd9CRjhYkS204G7Kz45O3MMviKjWa0ENW5HEo0UI3u8TC40P3a8tTv2OSrDx%2BXIIAkTIaWUpi3Tv7JaQNUr2A0w4MyPosyuJoVfo87GXbWNncv%2BFAMdENdhZryciM1mvfvy8tV%2BbzCFxLmfV7ISYa2LNjmyQENeqmT%2Fo195FZsjfuwBb5XzRWrRYhZ%2BPus3HLLc69mXFvkUcKAndc5DIFW87RrhJQbeYD9f5g2qnuxewLYu4kdIGrG6JLwaQr2UL9dH8SWEuEx1nXMSW6AyiOHtU6ysNDfPbiChuuldRUmHV5RiJxZAanBWYbAWrlUsdyWLYys0wiVMHoUVQ3LSeASpxoNz4aYx4BZD%2Fnm8vbKvtv798RUPS%2BoR4D3292ODwTBOM8Z0YP0PX0KB5x4PmTL7%2F1kxCeOi9Tl37pN6aPSq%2BpE8gHfZ2GEVEjAwAv%2FeQXqHW2LroDGEuzrfxikoo0LnuoJyir%2BDeGeNxch18f88DtEnv6fvowl60T3ghqzU8Ct65n7YKtH6moh%2F2pB%2BYNkMkQ24VyyoXZAfGpTdzshiJV%2F1CE9FnirfEIloWlWx6lzg%2BcA9nsK2Kc02l5lzz6hoIw5OfLyQY6pgEfRihEDPq%2BuhEu4W%2BozYsaiyTwcATMSHhSAydeUz%2F1XbvwV7szs%2F%2FQR1qM1Y6ajAF%2FyRYXAVlJJ3VNyj%2BrgDkBWSDwmMASfcU8vm5LUgYwSdPAtBJ4bc7tY9VgWIabgmgR4e5xvOVlFVfEZY2GLXt6MfxkFLFXwaKow4pUZkwuaM3RMEFu1xOFUMB7w%2FmKtKdpFYoeLHBlxlGHf0oazMwV87qcaTWz&X-Amz-Signature=b1614f88f43fec0a825ece48a8a7d086eb92c05853531cc847937321a297e50e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
