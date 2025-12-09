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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUNWTO6O%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxbX2Puip8yVO6uH2mOPS6sP2DBZmcT8d1i20s4vgRDAiEAkClv6CNcoQo93xRl%2BR5PlVjnCrefohyz9xG3Q9OU39UqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWfHUa80LCZJDc7yyrcA54jlk6KIzZun%2Bs0nBSS2fqcy1P8oa54oE6wilhJ5oGLtYuLazodXjpTlmAQzlfkwLH2680f%2B9ouG331FyMyKTmZcGvuqDK8f%2BXTSNUe7CHxzLcl5AP2RvqF%2FIFh35OF2TTJZG2IpfokOMbJF7OcrLB9tLMWw9A8CberMeIv%2F%2B19CWuKh9MXvz6k%2FzOCOvUvYC%2F2mcgH%2FtqW51cF9DQyRaMYLY0BoijeCZ2GWwbyOhLZKx18xKd%2BtEpZRN9n8w4ElmvuJFaLGqRr%2Fo55Xkoo8KeKtRbHtAnL9qpTfjlOjvnBVhAA7iJySKq%2FbDfTGlTQfFIM0bEANYWEig0bBfvViQx8LhoioQEgnWz2KnVNf0N12j2WQebFC77mFAyBeUwTzk25Gq9Bk5g%2BlJq1cQmId%2BRPUb5OsQGbMSH7EU3Z3eDfpwTwFY%2FgjIA2nd1Dgu%2Fq9ruFgW0Ti5Thji7HMNdlxmJMm1ct0RMEDCiRqg2T2SCHEL%2FeSjbzoGBiFYbqzpoQvHMpx3JubwH1XJJqozACSDpikKiOQsl7OW66UXugGB6CfPBtVLGFnCP8a%2BD1z1YINQRXvtPYqX%2BMFFpenr9IvzqunugmUOL0F99P6DhV81GDvKSGHLYD0b0J8xvdMMaH38kGOqUBjsgr1VUpbfMnXZOadmK8q%2BPvInDOa2%2BfteLbsKj7XOpEKyHNTlfzrbabQ%2FZctjtVqKNuGde%2BuV%2FZ9eZHqhCJyzUNCFwu4pSua%2B4GE9Uypm0C3ql6PtfZZvkFlI%2FLdAdAi%2BFhFh4jo13sVbpYGJK35111Qaz25xwvyMw7OY%2Bi60g57kO%2FnTrTDSGpC9lO4jE6fM7R7JrFFp4EIZNm7opiWxgSB5mi&X-Amz-Signature=baaedae7bad15636cd329851b4edc2e95512f572eeb502b518b575bf5acf28b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUNWTO6O%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxbX2Puip8yVO6uH2mOPS6sP2DBZmcT8d1i20s4vgRDAiEAkClv6CNcoQo93xRl%2BR5PlVjnCrefohyz9xG3Q9OU39UqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWfHUa80LCZJDc7yyrcA54jlk6KIzZun%2Bs0nBSS2fqcy1P8oa54oE6wilhJ5oGLtYuLazodXjpTlmAQzlfkwLH2680f%2B9ouG331FyMyKTmZcGvuqDK8f%2BXTSNUe7CHxzLcl5AP2RvqF%2FIFh35OF2TTJZG2IpfokOMbJF7OcrLB9tLMWw9A8CberMeIv%2F%2B19CWuKh9MXvz6k%2FzOCOvUvYC%2F2mcgH%2FtqW51cF9DQyRaMYLY0BoijeCZ2GWwbyOhLZKx18xKd%2BtEpZRN9n8w4ElmvuJFaLGqRr%2Fo55Xkoo8KeKtRbHtAnL9qpTfjlOjvnBVhAA7iJySKq%2FbDfTGlTQfFIM0bEANYWEig0bBfvViQx8LhoioQEgnWz2KnVNf0N12j2WQebFC77mFAyBeUwTzk25Gq9Bk5g%2BlJq1cQmId%2BRPUb5OsQGbMSH7EU3Z3eDfpwTwFY%2FgjIA2nd1Dgu%2Fq9ruFgW0Ti5Thji7HMNdlxmJMm1ct0RMEDCiRqg2T2SCHEL%2FeSjbzoGBiFYbqzpoQvHMpx3JubwH1XJJqozACSDpikKiOQsl7OW66UXugGB6CfPBtVLGFnCP8a%2BD1z1YINQRXvtPYqX%2BMFFpenr9IvzqunugmUOL0F99P6DhV81GDvKSGHLYD0b0J8xvdMMaH38kGOqUBjsgr1VUpbfMnXZOadmK8q%2BPvInDOa2%2BfteLbsKj7XOpEKyHNTlfzrbabQ%2FZctjtVqKNuGde%2BuV%2FZ9eZHqhCJyzUNCFwu4pSua%2B4GE9Uypm0C3ql6PtfZZvkFlI%2FLdAdAi%2BFhFh4jo13sVbpYGJK35111Qaz25xwvyMw7OY%2Bi60g57kO%2FnTrTDSGpC9lO4jE6fM7R7JrFFp4EIZNm7opiWxgSB5mi&X-Amz-Signature=ab04e5ec88e4fda50517c7c1689847a06cdb2281c4bb3deb000bcb63b5b460e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
