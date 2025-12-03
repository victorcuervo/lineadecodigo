---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WXZQQNS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGl5MimniyGKy2yqDXSe8yyub13Oxor0rmSXM4urzl4tAiATRgZcPPOW8GJikJF1f59qlk%2FHnutskPUjnvDAJ%2B40Hyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMZ%2FGspfVtaurj647DKtwDZfKowH7Ca9sMzMq7cW1UyXblsf%2FIaSlSe9KiNjNUDZIhZ76PrKoS%2FeQSHwqMM6438yNKNPFyk0bqaRAtRBNz8CJAH%2FGkdKjv%2FFfhMUdPYoH4Ftka9Aw2zh72SZj%2FJbNXu5DQ%2F7s%2F46OahyeIcAUjPXbN4W40bTEfPx1sHgzJUdg7n0BmnUJZlxDwmfablvb49shkhE0rG81uCUpFtEbeHami9he8ntqxoB0U9rP8DM%2FjOcLZycKJkmCSknFwNsgYfprKt5L%2FLWOCeXnVGpAQTGWJU1Lrwd4gXDv3R%2F5ifgpdMbl242WRW%2FKWBDcPMPd50F7Fh%2BsiIg1ghWhzROO8n2fivWzsMPsTN3LiWRFKmkK7hhLYXgJaCtM%2BXTCHURk8Qwil%2BKK%2Bxd1N0w6rXM%2FvtJpXUDg0oUi6fU0r3C8rfP7H%2FZ6abgwTYWoBdFqwSUG%2F0UO%2BJnOc%2Fm4wH6HBtqEvQIzadUnin4sbr9HnszP%2BTOuyZHBaz4Ap4k8DalyjheRRIdIii942vsTscV1ZL6E3J1WjcJtLPTRen0LYS5hMVXl5PKa044h9f2t8l5dn639g8cVKcJ9IFTXEstPfiikwfUL9xq%2BTQ4Q97kSCdsDcSCqtpeYANITD4MXKhg8w6L3CyQY6pgHEhWBdE5vuYnVGBf9h0amHtUcROahwLj348LfeU%2FEqGxQ9NTjFSqhsajBE40yVK6aRHbZkZ0CizwFwmi%2F79M5S2kB9jlRkLkZGQKT2PUOLLS%2Fft4XcZ9zGIj%2BrYHPWD5p0b6Io1qQOtelHDsbAvlgRpsA6WiRxXttoTKmf3Vq5pzjVXGgkRhie%2BvSo9eW2BtqWyLcUHopBAhwSy7sTtUOuHWxht9Uk&X-Amz-Signature=879dc162bc1e947b9f865ce2e4b41cf57fa5cc78161963e9efc9666bded4ce71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WXZQQNS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGl5MimniyGKy2yqDXSe8yyub13Oxor0rmSXM4urzl4tAiATRgZcPPOW8GJikJF1f59qlk%2FHnutskPUjnvDAJ%2B40Hyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMZ%2FGspfVtaurj647DKtwDZfKowH7Ca9sMzMq7cW1UyXblsf%2FIaSlSe9KiNjNUDZIhZ76PrKoS%2FeQSHwqMM6438yNKNPFyk0bqaRAtRBNz8CJAH%2FGkdKjv%2FFfhMUdPYoH4Ftka9Aw2zh72SZj%2FJbNXu5DQ%2F7s%2F46OahyeIcAUjPXbN4W40bTEfPx1sHgzJUdg7n0BmnUJZlxDwmfablvb49shkhE0rG81uCUpFtEbeHami9he8ntqxoB0U9rP8DM%2FjOcLZycKJkmCSknFwNsgYfprKt5L%2FLWOCeXnVGpAQTGWJU1Lrwd4gXDv3R%2F5ifgpdMbl242WRW%2FKWBDcPMPd50F7Fh%2BsiIg1ghWhzROO8n2fivWzsMPsTN3LiWRFKmkK7hhLYXgJaCtM%2BXTCHURk8Qwil%2BKK%2Bxd1N0w6rXM%2FvtJpXUDg0oUi6fU0r3C8rfP7H%2FZ6abgwTYWoBdFqwSUG%2F0UO%2BJnOc%2Fm4wH6HBtqEvQIzadUnin4sbr9HnszP%2BTOuyZHBaz4Ap4k8DalyjheRRIdIii942vsTscV1ZL6E3J1WjcJtLPTRen0LYS5hMVXl5PKa044h9f2t8l5dn639g8cVKcJ9IFTXEstPfiikwfUL9xq%2BTQ4Q97kSCdsDcSCqtpeYANITD4MXKhg8w6L3CyQY6pgHEhWBdE5vuYnVGBf9h0amHtUcROahwLj348LfeU%2FEqGxQ9NTjFSqhsajBE40yVK6aRHbZkZ0CizwFwmi%2F79M5S2kB9jlRkLkZGQKT2PUOLLS%2Fft4XcZ9zGIj%2BrYHPWD5p0b6Io1qQOtelHDsbAvlgRpsA6WiRxXttoTKmf3Vq5pzjVXGgkRhie%2BvSo9eW2BtqWyLcUHopBAhwSy7sTtUOuHWxht9Uk&X-Amz-Signature=cef63edf296e9effc9d78b66df251a7b4b516ba298b79cf00f093b8851f8f94d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
