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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U76A4NO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPUhP0hN8BG8YzFPUJml0J3jBP13MmaVRUZbxyYgxJVgIhAK6TP%2BtFXECBoBVGMagbqTsyZix5uPk%2BkwrGiPBr1JOuKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykhXYb%2B5NcDGg0yVwq3AOz8Q245bfgCAXac3rJt7TMvw%2Fqi40r1WI5MI1KoSoaDfn%2Bh94Y19Bqd5CFp%2FHU3pc6t4tKZaVzTNVityv0dfaI4ndU9VABVTWiQfLCZfbdy7m4LlsNWfa02lAHMubPRZ0DBMjVY%2Bo1z73rmpIatTD%2FZME9a4dlHLNXZeZqkB4CN46D5WWfslR5YFawA%2BTyGp8W%2BW50fsVzLZD%2FUnjucyPmhj%2FoCix5Hq9LZ3zCikjQtqj6mKlfRDQzzlBY4kus2MjqMY8kYMOcC1TtGYyLzfTmnIID5oa%2FFl10e9dcMfWCdRgXST1dp5itx75xndeq1TxX2JG1Z29HEQVD%2BWbB%2BSBixJDFDe8xoA9AzmAHB5a1YN6PemAATcUmm5e0xnidvACF05iaKVqUeOkwVIoF4cHgHttB3AsPSZhyiIHwL4qqohb0UeS4qKAbrroUP9FfL7Eyxr55%2BMDie9GYHR1ra6JzHkSY2%2BV3YWU%2FMfxgI6S03rCwH%2FAfE30KCDZ2OwIyMkhitr7hZXkvKYP9BTN6dyXeAplaDhuFDACTztQ9myH1RgqHO6HdkUHXDXdRczUGJqm%2F11bqej%2B8t9xhGzCuRvTEriMYvl7ZKlBFaBlLBHlejH9r%2FMu6iuhseEs2GjC93NzJBjqkAa6ASc9T6Ed0HxC8bsG3HzZY2y2R1BWl3T7cwgbG7LKA91pRLhpE%2BCPefK9xk2yAJMH36xm3r2hvYwmKaMOE%2BymfUD8MlLEIWNXK0Sr%2BXhnA7H5g7%2Fwn2VI3Y9ytAnEAFZwwsdJgHnQqEoItvme6jByvlqEClSJnYVIKR7lIExdfAvkaesqD7xNxlO%2FOAdgT0whFov%2FHE4MyEI8DXpaXfGN627Le&X-Amz-Signature=7d25c528f9ce1379608471bf7aadc3cc04fe1de5d1381dbca73cb005ec716313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U76A4NO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPUhP0hN8BG8YzFPUJml0J3jBP13MmaVRUZbxyYgxJVgIhAK6TP%2BtFXECBoBVGMagbqTsyZix5uPk%2BkwrGiPBr1JOuKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykhXYb%2B5NcDGg0yVwq3AOz8Q245bfgCAXac3rJt7TMvw%2Fqi40r1WI5MI1KoSoaDfn%2Bh94Y19Bqd5CFp%2FHU3pc6t4tKZaVzTNVityv0dfaI4ndU9VABVTWiQfLCZfbdy7m4LlsNWfa02lAHMubPRZ0DBMjVY%2Bo1z73rmpIatTD%2FZME9a4dlHLNXZeZqkB4CN46D5WWfslR5YFawA%2BTyGp8W%2BW50fsVzLZD%2FUnjucyPmhj%2FoCix5Hq9LZ3zCikjQtqj6mKlfRDQzzlBY4kus2MjqMY8kYMOcC1TtGYyLzfTmnIID5oa%2FFl10e9dcMfWCdRgXST1dp5itx75xndeq1TxX2JG1Z29HEQVD%2BWbB%2BSBixJDFDe8xoA9AzmAHB5a1YN6PemAATcUmm5e0xnidvACF05iaKVqUeOkwVIoF4cHgHttB3AsPSZhyiIHwL4qqohb0UeS4qKAbrroUP9FfL7Eyxr55%2BMDie9GYHR1ra6JzHkSY2%2BV3YWU%2FMfxgI6S03rCwH%2FAfE30KCDZ2OwIyMkhitr7hZXkvKYP9BTN6dyXeAplaDhuFDACTztQ9myH1RgqHO6HdkUHXDXdRczUGJqm%2F11bqej%2B8t9xhGzCuRvTEriMYvl7ZKlBFaBlLBHlejH9r%2FMu6iuhseEs2GjC93NzJBjqkAa6ASc9T6Ed0HxC8bsG3HzZY2y2R1BWl3T7cwgbG7LKA91pRLhpE%2BCPefK9xk2yAJMH36xm3r2hvYwmKaMOE%2BymfUD8MlLEIWNXK0Sr%2BXhnA7H5g7%2Fwn2VI3Y9ytAnEAFZwwsdJgHnQqEoItvme6jByvlqEClSJnYVIKR7lIExdfAvkaesqD7xNxlO%2FOAdgT0whFov%2FHE4MyEI8DXpaXfGN627Le&X-Amz-Signature=8ef4af4ab24760b5c7a434aba0804459cf95a199bd795e1942f1f96056bda3b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
