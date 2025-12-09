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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPKCHPNT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhUPMrzBKpSAfbZJowPizhj6YyZvEBXu3CrXiuz0u67AiAc%2Fy4359Dbh%2BwYVbW6CY8QeG8iavgzoUGXJCX2Hxy%2B0SqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Mi6V2mmXyipIIhaKtwDqU8KEvudKFq27W2nMPM0w1S9NwD96aMuHJM8YJ%2BjKQZ1C09acsOA8PO4GWB8j98SaugcbKAOlOF%2BQow%2F6rQKNfVYJZYpAU8WccBYxeP4fFPh%2F2GlarI11viaGbrTrR0JEAxH9iapBfJnOY%2B8CZrwroNBV1WKgya1iAor6a1KNBWqlfuOsOcYZ1cSdI1BCZPWfrTlG8ezya909MquViWXZwx4nuiHQT9%2BVnqwtKrHJQm8eLwwWSOdpIFmB3zYhprTSkBLuTqaTX5dG9dDsZmBkIWCHD%2B%2FPidVuwKdUjWap75a9Ar64nhT%2B1F%2Fx%2FR6P%2F1UHu4L12oe4L6dTzQpXT%2B1bGG3jVnJQjN%2FmGC8wD27Too1VxIf3AtryXT%2Be%2FuYV51BPRmebEDPqKlwJrBO2l2kqo25%2F6Ao5Nlf3JDQzwNnyMogBKGPJoWT7gx7xGNVV0fPSXi08M6r44LYCxmlIhknlUWFM6uIZXiPxTXPfo878mOnygLM8gnvYnJzANptxpromG35zqlLrlgrrOn3d8rjZRnwWWh92822a%2B6JulJInlH4jsMrb6tAlB7R2JOSmXS47QFahf1nB%2F9Iwn0ckzu4mV1fkF%2FYl%2B9eyRjOTetkq73id8oX8pcCqWPHx5Ywt8TfyQY6pgELfOpWbQUY4X0C7vV3gRFon6Mre4f1QPb9gR4oKd4mLzpi2d15Kk36TZiGErAMQmxEhrKeXkPkr4w5yqIZ6BVAL5gufO9hGJlNGUcue%2F8E1hd2ZcOLBJZZeBQ1hX7scWb3%2BEHu751HDQxPWLsYnih6u0ditGYf8aaB03u3IYlb7R5Yc2x5AqlXAdPLcv4ww87EZjeyKDkg2jXfDAS9IOStEDpCelLR&X-Amz-Signature=101d5a0b722ca71fc49d47b011a7c9541be4b5ba03932ddc7d4df138dd814bb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPKCHPNT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhUPMrzBKpSAfbZJowPizhj6YyZvEBXu3CrXiuz0u67AiAc%2Fy4359Dbh%2BwYVbW6CY8QeG8iavgzoUGXJCX2Hxy%2B0SqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Mi6V2mmXyipIIhaKtwDqU8KEvudKFq27W2nMPM0w1S9NwD96aMuHJM8YJ%2BjKQZ1C09acsOA8PO4GWB8j98SaugcbKAOlOF%2BQow%2F6rQKNfVYJZYpAU8WccBYxeP4fFPh%2F2GlarI11viaGbrTrR0JEAxH9iapBfJnOY%2B8CZrwroNBV1WKgya1iAor6a1KNBWqlfuOsOcYZ1cSdI1BCZPWfrTlG8ezya909MquViWXZwx4nuiHQT9%2BVnqwtKrHJQm8eLwwWSOdpIFmB3zYhprTSkBLuTqaTX5dG9dDsZmBkIWCHD%2B%2FPidVuwKdUjWap75a9Ar64nhT%2B1F%2Fx%2FR6P%2F1UHu4L12oe4L6dTzQpXT%2B1bGG3jVnJQjN%2FmGC8wD27Too1VxIf3AtryXT%2Be%2FuYV51BPRmebEDPqKlwJrBO2l2kqo25%2F6Ao5Nlf3JDQzwNnyMogBKGPJoWT7gx7xGNVV0fPSXi08M6r44LYCxmlIhknlUWFM6uIZXiPxTXPfo878mOnygLM8gnvYnJzANptxpromG35zqlLrlgrrOn3d8rjZRnwWWh92822a%2B6JulJInlH4jsMrb6tAlB7R2JOSmXS47QFahf1nB%2F9Iwn0ckzu4mV1fkF%2FYl%2B9eyRjOTetkq73id8oX8pcCqWPHx5Ywt8TfyQY6pgELfOpWbQUY4X0C7vV3gRFon6Mre4f1QPb9gR4oKd4mLzpi2d15Kk36TZiGErAMQmxEhrKeXkPkr4w5yqIZ6BVAL5gufO9hGJlNGUcue%2F8E1hd2ZcOLBJZZeBQ1hX7scWb3%2BEHu751HDQxPWLsYnih6u0ditGYf8aaB03u3IYlb7R5Yc2x5AqlXAdPLcv4ww87EZjeyKDkg2jXfDAS9IOStEDpCelLR&X-Amz-Signature=c4d07ae262c1e1d013c98196769d8a40a9aa4a2ae3629c1f259f16d1e40ebc37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
