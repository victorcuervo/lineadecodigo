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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R3JXIVV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyWn3Uw%2BTL1zaoubHMS%2BZpdAGJ2xUXiw0k03ch6RuwaAIhAMKQ%2BYczqPQMCiQu3B52u4I1vlEqQ%2FPsMDwkTM3yvtCkKv8DCHYQABoMNjM3NDIzMTgzODA1Igwu3T0EAvNEggflrBIq3APC1HIdywMc9NiUIgaf1d5QHfNnanFTvbqGa5q2H6PezqC8tHMs%2BdukSeMzXryxdluD68e2bTuZarHSMANK%2BRKfHSjwrAlacEX0h9gFBYKonQgyfiQUnKojKN5fOV0%2Fz%2B%2FLI4WatO6%2FgkpgxCTCbvJqCGdmY%2BjX4n8dZmn37AJs08XKnns2vlGAgdYpjOmhknEH9eOJwpi7zkguYTlJerdZIE6ux%2BLyLLkuSQrkFCmU4v4WjiPHS35701JV0kcr%2BxzeCTDV6E5AqK5q7dNoi5OVDkQk2lseW28Sze6%2BIoZaHkHJKSBRm3jgQCfjL9Uux5jNpob%2BA5iluHZ5oDL%2BxBGs67rmL3lhqD3pZeRTdGu1nnpcnadNHwx1Jh6AhypouLseifDvGrM9%2FiNHu1YLRlktlZ%2FD8KEWWN7afYbv%2BOO4l%2FajKgAKojsUT5lNkbRnzDyE4OcFdx%2FSIaLj6%2FTMyE%2FB957c8Id7dt1ScDk7jQh5hpgO5F%2FbsU4i%2FQ0Vc9AirA1IqEzzug2ERfDmTs46DWKMd7CVH1yNfMtJfW8Pc2O4XWBgxrvnqtRuzXNUVOFKEPtYMl51Rvs9Nnnnchb9pq4h5EDVzN%2F77lTIDSK2rz1Y34si6nMnSt7Dan5KejCH6ojKBjqkAS%2Bw%2BtpJ8eZKehjCgQo7xIqFUIqMfN3SbmSk9uZuln6v%2F76VH9rP3nzzf%2FGMVTeoYstNjuyMXUSC179giHnD7uI0nc2%2B71SHNz30XWZhKoTbPv1yzAY%2FErAbto1U6kofSdB1KT8NtnGECMG8yn9l8pe1bSYjojSkRg0QXSGUpECBrBkmfLV0bL45Bo%2FxoyRcjvOty6rQ2IuTqj062tC98puDIkVM&X-Amz-Signature=78650c03859e2a859de10b20a6c42c11adf9e6098d8bcd022be0fc17f4587f6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R3JXIVV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyWn3Uw%2BTL1zaoubHMS%2BZpdAGJ2xUXiw0k03ch6RuwaAIhAMKQ%2BYczqPQMCiQu3B52u4I1vlEqQ%2FPsMDwkTM3yvtCkKv8DCHYQABoMNjM3NDIzMTgzODA1Igwu3T0EAvNEggflrBIq3APC1HIdywMc9NiUIgaf1d5QHfNnanFTvbqGa5q2H6PezqC8tHMs%2BdukSeMzXryxdluD68e2bTuZarHSMANK%2BRKfHSjwrAlacEX0h9gFBYKonQgyfiQUnKojKN5fOV0%2Fz%2B%2FLI4WatO6%2FgkpgxCTCbvJqCGdmY%2BjX4n8dZmn37AJs08XKnns2vlGAgdYpjOmhknEH9eOJwpi7zkguYTlJerdZIE6ux%2BLyLLkuSQrkFCmU4v4WjiPHS35701JV0kcr%2BxzeCTDV6E5AqK5q7dNoi5OVDkQk2lseW28Sze6%2BIoZaHkHJKSBRm3jgQCfjL9Uux5jNpob%2BA5iluHZ5oDL%2BxBGs67rmL3lhqD3pZeRTdGu1nnpcnadNHwx1Jh6AhypouLseifDvGrM9%2FiNHu1YLRlktlZ%2FD8KEWWN7afYbv%2BOO4l%2FajKgAKojsUT5lNkbRnzDyE4OcFdx%2FSIaLj6%2FTMyE%2FB957c8Id7dt1ScDk7jQh5hpgO5F%2FbsU4i%2FQ0Vc9AirA1IqEzzug2ERfDmTs46DWKMd7CVH1yNfMtJfW8Pc2O4XWBgxrvnqtRuzXNUVOFKEPtYMl51Rvs9Nnnnchb9pq4h5EDVzN%2F77lTIDSK2rz1Y34si6nMnSt7Dan5KejCH6ojKBjqkAS%2Bw%2BtpJ8eZKehjCgQo7xIqFUIqMfN3SbmSk9uZuln6v%2F76VH9rP3nzzf%2FGMVTeoYstNjuyMXUSC179giHnD7uI0nc2%2B71SHNz30XWZhKoTbPv1yzAY%2FErAbto1U6kofSdB1KT8NtnGECMG8yn9l8pe1bSYjojSkRg0QXSGUpECBrBkmfLV0bL45Bo%2FxoyRcjvOty6rQ2IuTqj062tC98puDIkVM&X-Amz-Signature=3e63d1f4d5bda7d4bff31b289663c56eb8aa127865d51406be501b4cb4e2cd3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
