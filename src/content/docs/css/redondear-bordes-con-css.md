---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W24226ZT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIETm0RoeAigUy7XyUm%2F7xqQvXuhmf4qh7vNe98wF17MCAiBVl%2Fx6ii23XvM%2Ft7h%2FOBPPkSNl0cAamR3Y1Z%2Fg%2FqqsMir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM2Mtjr4YYqR6kJI3wKtwDcTULJucQZMsy25Yu2IjbSrNvCqzISq%2FsrFzq7MeXeR3Yjj7VmvX2dRm6GQJJtu3dTVLfu6fgpuRX9tQkGkbe5qbqJG13q4OTMw%2BIq1siF0Gf3XjYxXRqJy626w0lIAJBgu%2FVWvtUJFfH8mBkPwWQTGUhOeYgh9H2FN8KOtAF3PKuGBnNkv1ZCxb3RgDL%2FnbRcpnPDAKv3UvGlxU9G6UdXmM%2FTT1NUt0ifX0%2BlzckOcq8EATXHXdW0hHYfY1nxD01PV8bayPBWvCVREfCFH%2FgOjIJTzchvb4V50ARXn0ycnJsxGnk%2BOzTgo3nSSVVFvmJmPNorXkBUWE%2FCMAgLs0qS79RpCtrSMXSgh%2BYTLk%2FMudOuKYgXxRzvbq%2B7tQL%2BRFF4f7owd38EnqJsWHl61qYkuhuulsbOAohI6XlRrbTnCB3KuwROz31Terepa%2FdwosdPtRka%2BaRFgiDrmoVxzr2oF4ZvLhsixmuIiLbnw9vQMgmkm4PaU0ct15XJuKpBRZHO7dV8UEiHkT9qWZucHCdYElvL%2BgPj6JMxWt7efII67k%2BGDHptdrQSmGSpTpkTLDO0uZYHqMtWzMIsdvOv1X0KsJqQcp8zVTAwrB1DIG4vKSww59p4am%2B8uQ%2BhJYw1%2FjCyQY6pgGlMNR2WKRrYQ8NzWa%2FQWZ5ceNhCSN9yrLv%2BENc0pbQcswmzL6OBGK5dDOSg5rxfszV4pxh5fC5HAoI28jBayiXapSmm8Mg3wwggvgFNzUE2KtT%2Bcrv1zgMVFv1JdXIuFE7jMYR9l2rza%2BuEuUir%2FQQxaEMxLOq6097Jfnsdn1ZqAiA7ZHvq2zUXhDzyO7%2B21B6kjqKYMksyjQFdFeLoO8g5GkhSxzw&X-Amz-Signature=bc9afbec61abab66915a9ac6af5bb6f40ca30a5b679e8911f88e68eab0559cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W24226ZT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIETm0RoeAigUy7XyUm%2F7xqQvXuhmf4qh7vNe98wF17MCAiBVl%2Fx6ii23XvM%2Ft7h%2FOBPPkSNl0cAamR3Y1Z%2Fg%2FqqsMir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM2Mtjr4YYqR6kJI3wKtwDcTULJucQZMsy25Yu2IjbSrNvCqzISq%2FsrFzq7MeXeR3Yjj7VmvX2dRm6GQJJtu3dTVLfu6fgpuRX9tQkGkbe5qbqJG13q4OTMw%2BIq1siF0Gf3XjYxXRqJy626w0lIAJBgu%2FVWvtUJFfH8mBkPwWQTGUhOeYgh9H2FN8KOtAF3PKuGBnNkv1ZCxb3RgDL%2FnbRcpnPDAKv3UvGlxU9G6UdXmM%2FTT1NUt0ifX0%2BlzckOcq8EATXHXdW0hHYfY1nxD01PV8bayPBWvCVREfCFH%2FgOjIJTzchvb4V50ARXn0ycnJsxGnk%2BOzTgo3nSSVVFvmJmPNorXkBUWE%2FCMAgLs0qS79RpCtrSMXSgh%2BYTLk%2FMudOuKYgXxRzvbq%2B7tQL%2BRFF4f7owd38EnqJsWHl61qYkuhuulsbOAohI6XlRrbTnCB3KuwROz31Terepa%2FdwosdPtRka%2BaRFgiDrmoVxzr2oF4ZvLhsixmuIiLbnw9vQMgmkm4PaU0ct15XJuKpBRZHO7dV8UEiHkT9qWZucHCdYElvL%2BgPj6JMxWt7efII67k%2BGDHptdrQSmGSpTpkTLDO0uZYHqMtWzMIsdvOv1X0KsJqQcp8zVTAwrB1DIG4vKSww59p4am%2B8uQ%2BhJYw1%2FjCyQY6pgGlMNR2WKRrYQ8NzWa%2FQWZ5ceNhCSN9yrLv%2BENc0pbQcswmzL6OBGK5dDOSg5rxfszV4pxh5fC5HAoI28jBayiXapSmm8Mg3wwggvgFNzUE2KtT%2Bcrv1zgMVFv1JdXIuFE7jMYR9l2rza%2BuEuUir%2FQQxaEMxLOq6097Jfnsdn1ZqAiA7ZHvq2zUXhDzyO7%2B21B6kjqKYMksyjQFdFeLoO8g5GkhSxzw&X-Amz-Signature=8a4fba3a8f4e420c229ad3fc0f3032879ce7b34beb4bca2be126a5376879f41d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
