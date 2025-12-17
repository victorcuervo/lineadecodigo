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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TLXAKZT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFti0%2B3uXVeBfNloXJcRhmQmEGTmk0URyFlT06KIutLyAiBk1U%2Blz%2Fqw4yVCNyDPs4hHhkB4eEwVg%2F%2BpjXQCJL7dlir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMyZiRJ0zCYHqvdwUgKtwDW5Nv0UY1oMuJ7TleiB5emU%2FGPCbbkugzTZB5njbLgiWfT23nNVpSAR8lF8nTXH7Ags86tNplwNHbFdFK2sF454%2By17dtnICy8aK88rx2qym9Y%2BGbpy0ccVFmYbKNRb9abgqXXELJkzoSsuS4GdY%2Fcc4aAxYJzYE4so0OFkLv13f7huCkwHU0IygbwjoIFU1RFZNgAGytV6kkTdFQSnlrZlXI9om9I5uPpoi9ZvUhJfgQIizIqv1QPgDMZao5nhmj3FajLKL2x3p1QMjoQTVDxUrM4Limkb1zX8Yckq3Yj50x9vu4EiRFJc4iI8kxGMpEoCSDXm96bTHLSi%2F1HUPLMPqs3op2n5TdPNlHlrXtTicpku8cDRL4IwcrKbrVdPrwM5w65xavN87MuEoJavSnJGEIEthQirPhUxToOmwcayx%2FJ9iOsQnrK0YYMDuYxgFfvjhlNX6p47%2FlLdp8Xq%2Bq8RYTLknDBE7VckfsuK5Dk64zOhlq4NiKDQ1%2F52PTslzHeWQdsoqDqb3gbaZ0Zv8j8usBuWvwd8E0Dam3L6viyuBr44gOo2N9SMOMc0D8PdIVC0kHUhrK6VTk91esPFNIwE6rq6vMJ1g4ny%2FfRMxl8a8iaKDR9sY65wXDGzcwyvCJygY6pgG5GayQuBO6LULNwWMOT7fgZZ1cVHKdXn3tZ1ZUrMgwcj%2FLTBFT5qLjua6hGH%2FUm12U%2FsSRRnFADnR%2F%2FsbJ6nuGEfQYuF57J84YtygoKrjCUZU2t4JbJsx6tByPjeASZ%2Fl%2BIwGQB0NkMTzx54kjYdzLmaERRBJbFqMUC5EeF626d4vnbkMAGxMpHwWFlgtH8PCgkQeNYtHKCwfuFmaveKb3FhrEBelS&X-Amz-Signature=545970dc450ac9a5cba92277bd60de44694a75187de3f623d5b106fd63767b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TLXAKZT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFti0%2B3uXVeBfNloXJcRhmQmEGTmk0URyFlT06KIutLyAiBk1U%2Blz%2Fqw4yVCNyDPs4hHhkB4eEwVg%2F%2BpjXQCJL7dlir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMyZiRJ0zCYHqvdwUgKtwDW5Nv0UY1oMuJ7TleiB5emU%2FGPCbbkugzTZB5njbLgiWfT23nNVpSAR8lF8nTXH7Ags86tNplwNHbFdFK2sF454%2By17dtnICy8aK88rx2qym9Y%2BGbpy0ccVFmYbKNRb9abgqXXELJkzoSsuS4GdY%2Fcc4aAxYJzYE4so0OFkLv13f7huCkwHU0IygbwjoIFU1RFZNgAGytV6kkTdFQSnlrZlXI9om9I5uPpoi9ZvUhJfgQIizIqv1QPgDMZao5nhmj3FajLKL2x3p1QMjoQTVDxUrM4Limkb1zX8Yckq3Yj50x9vu4EiRFJc4iI8kxGMpEoCSDXm96bTHLSi%2F1HUPLMPqs3op2n5TdPNlHlrXtTicpku8cDRL4IwcrKbrVdPrwM5w65xavN87MuEoJavSnJGEIEthQirPhUxToOmwcayx%2FJ9iOsQnrK0YYMDuYxgFfvjhlNX6p47%2FlLdp8Xq%2Bq8RYTLknDBE7VckfsuK5Dk64zOhlq4NiKDQ1%2F52PTslzHeWQdsoqDqb3gbaZ0Zv8j8usBuWvwd8E0Dam3L6viyuBr44gOo2N9SMOMc0D8PdIVC0kHUhrK6VTk91esPFNIwE6rq6vMJ1g4ny%2FfRMxl8a8iaKDR9sY65wXDGzcwyvCJygY6pgG5GayQuBO6LULNwWMOT7fgZZ1cVHKdXn3tZ1ZUrMgwcj%2FLTBFT5qLjua6hGH%2FUm12U%2FsSRRnFADnR%2F%2FsbJ6nuGEfQYuF57J84YtygoKrjCUZU2t4JbJsx6tByPjeASZ%2Fl%2BIwGQB0NkMTzx54kjYdzLmaERRBJbFqMUC5EeF626d4vnbkMAGxMpHwWFlgtH8PCgkQeNYtHKCwfuFmaveKb3FhrEBelS&X-Amz-Signature=a6db887293e90c78434b7aab876ffc37182a060e17606b5fd073b977a52b3425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
