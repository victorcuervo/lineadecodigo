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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666B4XPWM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC86bJGON9oO4HsoPIvrAG%2FSY5ftjSX6HBe3o8%2FBjVx7QIganQqd1OWWgXuN3XZngCU%2BK%2BY9oPTDY28FTvY6TWqBxkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKS10oxwWqcuQqDvXSrcA%2BxXzMtCHfy4dIjLNYvghIXpu8087aDzXjBC%2BWlKy4jFLdkCLmBS8U7k2Xmztczcr7EUK%2FzObIEKcFhW4SAEgt5Ek5rfTFzyVOOgFjcumM954N%2FJ155%2Bt3vYW9E8rm0SI2jh71gcBvubEagOOtFxCIwcJHVI1MCBFOzENTpFkvPIQH%2BajTvORg8j16VhhjlArmKHloRcmKsI8UpANF1NII%2FpUEoqMo%2BICIjnzy9SBe7FPmmod9lVD6KC1dnFRt1HmQVBRW19rfnJxHJNskjV3V9BgyxjZMxle7GmdTz6hdsZ7SUyIMaX2qinQ1yb0m1bZNOCpb%2F7o5f%2BaUiFfsJaat4b8O0os6UonsNdFzj9loRAqQ0xn1EH0ZIxMM23Di8d%2BWgeRadalPtKtOyXjqM2iF6dNaAPmtgI0JGhUtvc2ML3kwSCOTvCK4u8iifK0d98DUlES3fRDRJL7FEdfsu1RfuqDsH9IS5e7zGhFkqsnm7Tbj4nxpcFFf97Oi8ICyC3zIsnMCPL4eL6cu%2FZhtZH3DnaIuXLEKLmEwb%2FPQhXcGmB9%2FMWTQ6EkZPH7pUXz6JXHltqZFVa7BlaHXTvKZu8iADDVf3Uvy%2FX2Yys%2BQpdWF9uSGphKOnMQ%2Bns%2BbcJMOyCicoGOqUBql8pDWvkRkdJNy9J6YenvzpA7UP38HRzA3M2UVvgw2g9n%2FFoLeM96wZLezvNJJ8Le%2FCKUCLsJSJF%2FHMmJy8OSGgdlyYULTwCvhEog%2FTgmqMYTzrZETA79TgC7UNfJSMk2Gd6DOv7MJvqkd5lSaKlmvqDgYSwoVY3Z4HjGDh0v4R4ZAjG%2BxcYtMjGoqfGscEC9TRZSkV4sRkjmgwu6%2FZeA%2Bm7fuxZ&X-Amz-Signature=e5fee6f6abd1e8c4606281824d8a86e378e6422aa0227573d366b05eed2a21a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666B4XPWM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC86bJGON9oO4HsoPIvrAG%2FSY5ftjSX6HBe3o8%2FBjVx7QIganQqd1OWWgXuN3XZngCU%2BK%2BY9oPTDY28FTvY6TWqBxkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKS10oxwWqcuQqDvXSrcA%2BxXzMtCHfy4dIjLNYvghIXpu8087aDzXjBC%2BWlKy4jFLdkCLmBS8U7k2Xmztczcr7EUK%2FzObIEKcFhW4SAEgt5Ek5rfTFzyVOOgFjcumM954N%2FJ155%2Bt3vYW9E8rm0SI2jh71gcBvubEagOOtFxCIwcJHVI1MCBFOzENTpFkvPIQH%2BajTvORg8j16VhhjlArmKHloRcmKsI8UpANF1NII%2FpUEoqMo%2BICIjnzy9SBe7FPmmod9lVD6KC1dnFRt1HmQVBRW19rfnJxHJNskjV3V9BgyxjZMxle7GmdTz6hdsZ7SUyIMaX2qinQ1yb0m1bZNOCpb%2F7o5f%2BaUiFfsJaat4b8O0os6UonsNdFzj9loRAqQ0xn1EH0ZIxMM23Di8d%2BWgeRadalPtKtOyXjqM2iF6dNaAPmtgI0JGhUtvc2ML3kwSCOTvCK4u8iifK0d98DUlES3fRDRJL7FEdfsu1RfuqDsH9IS5e7zGhFkqsnm7Tbj4nxpcFFf97Oi8ICyC3zIsnMCPL4eL6cu%2FZhtZH3DnaIuXLEKLmEwb%2FPQhXcGmB9%2FMWTQ6EkZPH7pUXz6JXHltqZFVa7BlaHXTvKZu8iADDVf3Uvy%2FX2Yys%2BQpdWF9uSGphKOnMQ%2Bns%2BbcJMOyCicoGOqUBql8pDWvkRkdJNy9J6YenvzpA7UP38HRzA3M2UVvgw2g9n%2FFoLeM96wZLezvNJJ8Le%2FCKUCLsJSJF%2FHMmJy8OSGgdlyYULTwCvhEog%2FTgmqMYTzrZETA79TgC7UNfJSMk2Gd6DOv7MJvqkd5lSaKlmvqDgYSwoVY3Z4HjGDh0v4R4ZAjG%2BxcYtMjGoqfGscEC9TRZSkV4sRkjmgwu6%2FZeA%2Bm7fuxZ&X-Amz-Signature=6f4136a289619a1cff73d22616eb7ec548a3a1532dba8df202e4d9b31d099e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
