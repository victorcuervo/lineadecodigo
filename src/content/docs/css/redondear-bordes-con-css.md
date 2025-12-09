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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIFBRPD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClIfEfQc5Jfu2qM5nHbzijOEIMz%2F0ucyE32%2B6QkQx0XAiEAy5dLb73m8mZnw2Psry57vHDNLuxnDEq2Vifnb51yfWMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWxk3SYjCLcjgTggyrcAzQIS89geN%2FkLh6oyX7HpBWLr9wUiUpdlrQXJlh01P7dS0nw66R8xnAW7sH%2Ffit%2BYWCl%2FVhpy9HumhW0zGghXLnTGOZkfqUs6PJcGaFphzjjJFoVZHEOWZtIUKM%2Fw2Bd4RRShcKdp6gd4rDlZwCkYeLpsx74uhInIGicsU7yAWoaa75C3Yj1GnJ9ViiSssfkxkFOeKnfiXCyHvLEOOKxK5%2BKt%2FJqw4q2xvSqjeH4ZVwZW3OeV%2Bc%2BK%2BD%2B8aqf7Xzr4GL4%2FTBrYwjeI%2BwSsjo8jNzaFiO7AT%2FXxUm0KznfA31t7%2BZafXi4BcE6xFIbV8CxlR6Ud%2BanVVD1IiKL7nAYmlkxte%2F99%2BCBWWrQUAX4gGC8oS4NDx6oKVtSX8YjiVIrcq5PYDokuwXnGGNePoQwPwu6WyYPhMV1vw9ALFucIuO%2F3vwnQiFzc%2FecYNUDnj9X4lbMKyTQTDnRurSJSydDDhTaVGH73uU%2BPioQZFzgY%2FtlMy3D4vhiU6rL8bFH3yO6AEpS41%2FdV%2BmAb7Vnh%2Byf3%2FTWPMezQpoJf7VhRVp5%2BVHuNt1gcYOdfyZcncvg9Coixw8G7YSWCt94aAK%2FjOn8Pnwb3S%2FaC%2FoSbwsPPF8XE0%2BxQYAZbYwdtmsE%2FeJIMMOQ3skGOqUBi3vhiHf7E2DhbJgeDb4Qt9tVcakk5IZC6Bm3SS5uKLyP0zZbm0OVRDcuxSsiIlQ8Gd1TnIbqT5%2Fuj42dKpHD8JzOJZt3SsuPd%2BhoqT3aQe5gFJgX7OlxAbtdG6fHXZCCFJvHSePUcUIWiTFUJId2P%2FKMA51NwZMQmJybQ%2F0TJNLVHcKpmcMCLVMByJrNmvgdt31QV06E2ZwR3l5RIuP0LWN8CJ1A&X-Amz-Signature=a270ef3658d3762ade9b51f15caac578879e3e2eabb35997017df28084d940b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIFBRPD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClIfEfQc5Jfu2qM5nHbzijOEIMz%2F0ucyE32%2B6QkQx0XAiEAy5dLb73m8mZnw2Psry57vHDNLuxnDEq2Vifnb51yfWMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWxk3SYjCLcjgTggyrcAzQIS89geN%2FkLh6oyX7HpBWLr9wUiUpdlrQXJlh01P7dS0nw66R8xnAW7sH%2Ffit%2BYWCl%2FVhpy9HumhW0zGghXLnTGOZkfqUs6PJcGaFphzjjJFoVZHEOWZtIUKM%2Fw2Bd4RRShcKdp6gd4rDlZwCkYeLpsx74uhInIGicsU7yAWoaa75C3Yj1GnJ9ViiSssfkxkFOeKnfiXCyHvLEOOKxK5%2BKt%2FJqw4q2xvSqjeH4ZVwZW3OeV%2Bc%2BK%2BD%2B8aqf7Xzr4GL4%2FTBrYwjeI%2BwSsjo8jNzaFiO7AT%2FXxUm0KznfA31t7%2BZafXi4BcE6xFIbV8CxlR6Ud%2BanVVD1IiKL7nAYmlkxte%2F99%2BCBWWrQUAX4gGC8oS4NDx6oKVtSX8YjiVIrcq5PYDokuwXnGGNePoQwPwu6WyYPhMV1vw9ALFucIuO%2F3vwnQiFzc%2FecYNUDnj9X4lbMKyTQTDnRurSJSydDDhTaVGH73uU%2BPioQZFzgY%2FtlMy3D4vhiU6rL8bFH3yO6AEpS41%2FdV%2BmAb7Vnh%2Byf3%2FTWPMezQpoJf7VhRVp5%2BVHuNt1gcYOdfyZcncvg9Coixw8G7YSWCt94aAK%2FjOn8Pnwb3S%2FaC%2FoSbwsPPF8XE0%2BxQYAZbYwdtmsE%2FeJIMMOQ3skGOqUBi3vhiHf7E2DhbJgeDb4Qt9tVcakk5IZC6Bm3SS5uKLyP0zZbm0OVRDcuxSsiIlQ8Gd1TnIbqT5%2Fuj42dKpHD8JzOJZt3SsuPd%2BhoqT3aQe5gFJgX7OlxAbtdG6fHXZCCFJvHSePUcUIWiTFUJId2P%2FKMA51NwZMQmJybQ%2F0TJNLVHcKpmcMCLVMByJrNmvgdt31QV06E2ZwR3l5RIuP0LWN8CJ1A&X-Amz-Signature=8955ae96f18ba0ed2e68ef0bb8b873b3b3e11129f6b4605d79e90f935d85dc5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
