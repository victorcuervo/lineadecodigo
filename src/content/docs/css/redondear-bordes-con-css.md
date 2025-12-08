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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSPGGN3C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZZnolcKZhzv4N1k0ujJlU8SJDkiR8Aaot19695EW%2ByAiBs1xvPCBICN8%2BSk%2FEyj5uvMawpyK5GnWk8Ia%2F3jn2aeCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B4%2FhhDo%2BUV47gZ%2FaKtwDQKAFAQGl%2BlG%2BU1hVjeb9NSp3HY3hhAIok0saJy0%2BV4pyu42obQuXO9qrF8racP3G%2FWdK4%2FdAx5MYz7lhkYCt2StnbVxROD1DEuRSTIRNHrD4LFWJFG818Q%2Fhuh62KN%2B3AYJWNBGzqW2a4V9ouJQAG9vLHm%2BQcoSwpOETfLFOhjATAsS1ZAJUmbInOHdtK%2FpK7wTvE%2BVdpw77WvxflqxDXaUh0NFtGu5jJR1eb3UmXCN59X5UbQ2THI7YNR81FdpxwiGswtQYPIffWOPWaXiQJ01JErFilWgHVt1IlXGwF6NRuopN9MMbeBp1BtiIyeOAYTEQ%2F%2B72DVGlVhreg09hKWPlbQfNPM1gobJB681GMMwufAOPmthwBy0r%2BbXFFD7Tvm7idbBoJ4eyb%2F7o37G0ZAMwNfVez98bN90rrpQJLO6%2F1jXtPtQ%2Bahqt%2B0Kt2ydZuv7kCMk5lJ517Qgs4xMK1M9R3qmOjJG%2BGERO%2F1LR6bsbRUzzJsxVdB%2F6zNhI%2BnDLpYO2rrv8aWjUQHVqAZeHg9ZQm1tHn5%2FEbWlWTfPYrH4LowmX9rBlCAKTHPeM4olHUVqZCyhx8jAb6a1KrYY6%2FSb7Z7YscPCGHOSXC5u99Gqg6%2FoGKp9azcs3dAAw0dHYyQY6pgFbQ0sW64GuG2yxj3l%2FIx0V2uRC4guQlZx4dXGzZu3r%2Feagw%2FVr4V6aiyNeKPOaSSksZQcD%2BIFjbqJh6w0zIcxy7qRlPniUfPK0goa6D6Z88f0%2BSu4HypKnOw7PFIno2JNZ9g59JUV8kZv05Y%2BBLj1%2Fuc18kDdTtotDQaM3hsHKzR9HUNRcys2bZHgHUlS7r1Vy8H0mGaQU6l8VDUii1a0LTJ2Mp7uf&X-Amz-Signature=2ecf130ac1022697e9f9045a34e841981b722ade2d923a768dd6ed2cd7c36973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSPGGN3C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZZnolcKZhzv4N1k0ujJlU8SJDkiR8Aaot19695EW%2ByAiBs1xvPCBICN8%2BSk%2FEyj5uvMawpyK5GnWk8Ia%2F3jn2aeCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B4%2FhhDo%2BUV47gZ%2FaKtwDQKAFAQGl%2BlG%2BU1hVjeb9NSp3HY3hhAIok0saJy0%2BV4pyu42obQuXO9qrF8racP3G%2FWdK4%2FdAx5MYz7lhkYCt2StnbVxROD1DEuRSTIRNHrD4LFWJFG818Q%2Fhuh62KN%2B3AYJWNBGzqW2a4V9ouJQAG9vLHm%2BQcoSwpOETfLFOhjATAsS1ZAJUmbInOHdtK%2FpK7wTvE%2BVdpw77WvxflqxDXaUh0NFtGu5jJR1eb3UmXCN59X5UbQ2THI7YNR81FdpxwiGswtQYPIffWOPWaXiQJ01JErFilWgHVt1IlXGwF6NRuopN9MMbeBp1BtiIyeOAYTEQ%2F%2B72DVGlVhreg09hKWPlbQfNPM1gobJB681GMMwufAOPmthwBy0r%2BbXFFD7Tvm7idbBoJ4eyb%2F7o37G0ZAMwNfVez98bN90rrpQJLO6%2F1jXtPtQ%2Bahqt%2B0Kt2ydZuv7kCMk5lJ517Qgs4xMK1M9R3qmOjJG%2BGERO%2F1LR6bsbRUzzJsxVdB%2F6zNhI%2BnDLpYO2rrv8aWjUQHVqAZeHg9ZQm1tHn5%2FEbWlWTfPYrH4LowmX9rBlCAKTHPeM4olHUVqZCyhx8jAb6a1KrYY6%2FSb7Z7YscPCGHOSXC5u99Gqg6%2FoGKp9azcs3dAAw0dHYyQY6pgFbQ0sW64GuG2yxj3l%2FIx0V2uRC4guQlZx4dXGzZu3r%2Feagw%2FVr4V6aiyNeKPOaSSksZQcD%2BIFjbqJh6w0zIcxy7qRlPniUfPK0goa6D6Z88f0%2BSu4HypKnOw7PFIno2JNZ9g59JUV8kZv05Y%2BBLj1%2Fuc18kDdTtotDQaM3hsHKzR9HUNRcys2bZHgHUlS7r1Vy8H0mGaQU6l8VDUii1a0LTJ2Mp7uf&X-Amz-Signature=a0f1c6bdcb773cef9dcb4c03f13fbc9dd8707013570125be90609534cd638cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
