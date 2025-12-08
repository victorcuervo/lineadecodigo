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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T34VIQSF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWM0jd8m0eWoTBYLOu4K2yxKjzIZo4uoZvWdOss0R%2FEAiApQqWjunBFigFUqk%2BfK%2Fr9ISAP221dQpaMbBeOILMQDiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM36jaYFxNZuVXETqtKtwDHBXQYiVheQDyHEVGiB9MyWgKswwcBJia0%2Bbt224rcy7Ci1hWfpouqSYWMS2P4ck278yi0TsCFoi7DfF5djizu9TiDLCCdOzz6NkAdV9RzqjqeHhp%2FgUxR8cSyYRfl5aQ10AncZwYxA2GesP6YlxhiwOcinY62lJU9Me3qWmvb1lDftVHe2nZiPridXFDuBZ4fmYo6AKtw4izGZCdJ6Oj7BDdL%2B6wUo1a4EdJ9VPJ8dlHmDipky4tBRyzyil49nESzpgL86cGlK9BX2kI3YDZqRWswNwqRhgDon8c%2F5a2Qx0H%2BtpC96Gv9BX5v%2FCKf16DsXRULxvAprZ33ZeWoPl1%2FLKsN66%2FXoG%2BhnB7Tg5JqvktDFkoteEsyhU3L%2BV5HViHM9QoBZ7etADwS8m1gmzpvWY4Bda25pAgrRXwZSP3VZ%2Bdz9XK09K%2FAwkQQJUYzMsZgHoCuSrXzS7KXYdVLWQZYAuCIVEquzfLqCKMukGyE1IGZBjRjGrkjK%2BwutfgYNAi5Nrd6dx7aRahCVYEs%2Fjn0%2BDKj5uuxVJGR%2B3qFxs7tQQQmUlRf3mikEsz5qjpvgKSklYGmtRy2DpDJ0afY%2FYEi0eCfSTcINbUCb1WtkugsLVqDS%2BYVNFhZnmE0sQw0NHYyQY6pgGlupbPyC%2BzzDRqnH7anemKMKhmbp746Fg4rpbsUTAiw0qUWHjHJUPljtoPTLVzjBplyJFYYtlmd8iCcrkDV08l1nIRKjVlEpQBL5oU9%2F2Hc1QhLo5WhEnZyaoLvZWzjQ%2FSBWcBw98dYBUhH04QXhTqL0soB1sLc9YtET5Ifp7P%2BLUzLEbCkxlnsG946dwZ%2BMUUG7kN9AI5xKWrFAU6pHlznMXQUMml&X-Amz-Signature=f8d6be650bb96a870bc975081660789795caf590286160e94cd2bda4d705c33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T34VIQSF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWM0jd8m0eWoTBYLOu4K2yxKjzIZo4uoZvWdOss0R%2FEAiApQqWjunBFigFUqk%2BfK%2Fr9ISAP221dQpaMbBeOILMQDiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM36jaYFxNZuVXETqtKtwDHBXQYiVheQDyHEVGiB9MyWgKswwcBJia0%2Bbt224rcy7Ci1hWfpouqSYWMS2P4ck278yi0TsCFoi7DfF5djizu9TiDLCCdOzz6NkAdV9RzqjqeHhp%2FgUxR8cSyYRfl5aQ10AncZwYxA2GesP6YlxhiwOcinY62lJU9Me3qWmvb1lDftVHe2nZiPridXFDuBZ4fmYo6AKtw4izGZCdJ6Oj7BDdL%2B6wUo1a4EdJ9VPJ8dlHmDipky4tBRyzyil49nESzpgL86cGlK9BX2kI3YDZqRWswNwqRhgDon8c%2F5a2Qx0H%2BtpC96Gv9BX5v%2FCKf16DsXRULxvAprZ33ZeWoPl1%2FLKsN66%2FXoG%2BhnB7Tg5JqvktDFkoteEsyhU3L%2BV5HViHM9QoBZ7etADwS8m1gmzpvWY4Bda25pAgrRXwZSP3VZ%2Bdz9XK09K%2FAwkQQJUYzMsZgHoCuSrXzS7KXYdVLWQZYAuCIVEquzfLqCKMukGyE1IGZBjRjGrkjK%2BwutfgYNAi5Nrd6dx7aRahCVYEs%2Fjn0%2BDKj5uuxVJGR%2B3qFxs7tQQQmUlRf3mikEsz5qjpvgKSklYGmtRy2DpDJ0afY%2FYEi0eCfSTcINbUCb1WtkugsLVqDS%2BYVNFhZnmE0sQw0NHYyQY6pgGlupbPyC%2BzzDRqnH7anemKMKhmbp746Fg4rpbsUTAiw0qUWHjHJUPljtoPTLVzjBplyJFYYtlmd8iCcrkDV08l1nIRKjVlEpQBL5oU9%2F2Hc1QhLo5WhEnZyaoLvZWzjQ%2FSBWcBw98dYBUhH04QXhTqL0soB1sLc9YtET5Ifp7P%2BLUzLEbCkxlnsG946dwZ%2BMUUG7kN9AI5xKWrFAU6pHlznMXQUMml&X-Amz-Signature=4ad522c0859bf125ce205e4ca189c263690fed221ad6a15ea37408185009fbf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
