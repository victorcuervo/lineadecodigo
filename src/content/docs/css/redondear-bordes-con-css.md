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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IEEHY2Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFy8vukyF4lQtJOFZ8yG6Ow8i8gVhWt4KWk8hJtAzGsrAiBDsJ0oNSVjcKoFpv9ZmkqzkD0bzC8iyG8td0yvUtnwayr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM8FZqmhc4jDXhaOhiKtwD45PbwFSd%2BpgsBZA%2Fuh8ns7aoSv%2FNc2CqwPUEO804IZzHYHYQ1Jklp6zr7fT89xgtl4ujqIRtf9y5sWw5wrcR9a2TAZQzkNU1YtYFGarU0JanYj2TT9NMjQHILHJUchWdjRKISisuXpecJt%2FBv0JeCTWJGS0kUTCua%2FGmHJa7zFljf2iPFvnA%2Bteih18S2PfcdtUwp07QuEkhj6KTTyFCdxMyCtKrOBU40shwq5%2BkmOOlNwPaGHPa7xKfnPtWIvy9iDD9P6a680A0%2FPZIDGZ066fOXZvMvL6abKUCrE58%2BebYToYOoNvYjCKlBzSYtMuugePk6gUalgOtvjwKv3n%2FFB1x7T1tWqd%2BPWCfr3BgWMMXG%2BJ4%2BSd5FXQfBpn%2FnV7Qhr7OfAGkAadxuF9bqp3%2FykKttg%2BTrDN3PGG9itywyBRLLozc47HJiOQWHQ%2BMfsPAQ%2BFWgMH21R6JjTvogVMPqaGsloV39afd7h1VUdIA6znUK3nnJEO7i4Hb7WsLBJXODt0lpWMV2VOVQR1VEgxhS8vElW9y7YF3jQ0w30vrVDl8t0ieYa8BJ73gZtOhWMH6r%2F0P2KWpD6jxgqwqOJjBwDO2n3oxUnud43v7PW730afjvsx7aHUeYyvVw60wgMXRyQY6pgHcROIBdrlV65abuR05B%2BSY6FUz6Ah%2FZGn8h%2BQ0woPc6jhOoi%2Fw0oJ6liU1BkTfXayQ4uUcYueqLefiJ6YhotDtHDGl0SYR%2B61nEGP04G%2FjlqB%2BSOJa5rxP2A7uC42PSmVXqmhp53D7tGWjsl7shnlCm4KXzxDdwOTJ6j1xsZ2DzsbkHnfP5%2FpvA7KAY1b99UwTQtgy8%2Bf6DkQ1gEqJgsfIyNO3eCFU&X-Amz-Signature=65a87b8394334cdab1f870b2d33c1b3b35a0cca500e7453b07c20f890e60f80d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IEEHY2Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFy8vukyF4lQtJOFZ8yG6Ow8i8gVhWt4KWk8hJtAzGsrAiBDsJ0oNSVjcKoFpv9ZmkqzkD0bzC8iyG8td0yvUtnwayr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM8FZqmhc4jDXhaOhiKtwD45PbwFSd%2BpgsBZA%2Fuh8ns7aoSv%2FNc2CqwPUEO804IZzHYHYQ1Jklp6zr7fT89xgtl4ujqIRtf9y5sWw5wrcR9a2TAZQzkNU1YtYFGarU0JanYj2TT9NMjQHILHJUchWdjRKISisuXpecJt%2FBv0JeCTWJGS0kUTCua%2FGmHJa7zFljf2iPFvnA%2Bteih18S2PfcdtUwp07QuEkhj6KTTyFCdxMyCtKrOBU40shwq5%2BkmOOlNwPaGHPa7xKfnPtWIvy9iDD9P6a680A0%2FPZIDGZ066fOXZvMvL6abKUCrE58%2BebYToYOoNvYjCKlBzSYtMuugePk6gUalgOtvjwKv3n%2FFB1x7T1tWqd%2BPWCfr3BgWMMXG%2BJ4%2BSd5FXQfBpn%2FnV7Qhr7OfAGkAadxuF9bqp3%2FykKttg%2BTrDN3PGG9itywyBRLLozc47HJiOQWHQ%2BMfsPAQ%2BFWgMH21R6JjTvogVMPqaGsloV39afd7h1VUdIA6znUK3nnJEO7i4Hb7WsLBJXODt0lpWMV2VOVQR1VEgxhS8vElW9y7YF3jQ0w30vrVDl8t0ieYa8BJ73gZtOhWMH6r%2F0P2KWpD6jxgqwqOJjBwDO2n3oxUnud43v7PW730afjvsx7aHUeYyvVw60wgMXRyQY6pgHcROIBdrlV65abuR05B%2BSY6FUz6Ah%2FZGn8h%2BQ0woPc6jhOoi%2Fw0oJ6liU1BkTfXayQ4uUcYueqLefiJ6YhotDtHDGl0SYR%2B61nEGP04G%2FjlqB%2BSOJa5rxP2A7uC42PSmVXqmhp53D7tGWjsl7shnlCm4KXzxDdwOTJ6j1xsZ2DzsbkHnfP5%2FpvA7KAY1b99UwTQtgy8%2Bf6DkQ1gEqJgsfIyNO3eCFU&X-Amz-Signature=944def633785a50825756c4118298acdc55472648b176413ad90de0c3a07c777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
