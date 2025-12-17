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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PTM6L5R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyy6nmxcTKDlH%2B1kkF7Ko7Olu%2BBL40djdtD4DmSYZJTwIhAPmxIoOVjr9Zl7WEitC%2BPuREqpn%2BXH39HqX550%2Bp7PE4Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwYp%2BoK3bE2qbckusYq3ANInI0yduPtlwp8T1QGusTy%2F1%2BBI8z1DRwynxYdoBBDGL7gOh5qDfOnNDps2n6T0UYHXObEJuC5wMQhR3ywJ9gzVEkibAYVGnEku%2FbHBoDCn%2BiB%2F7tL%2F2LhTWMBKIXxCmlhig%2FVeFcR2sfVhHK6%2FnUV53dsfUCgaYzzfysMnhCaDw8wERLed0GdS6XHZN12pYiuBotUzcwmEYNIewZzTNtRIZdlJ%2BgA7HgS99%2FZ1DTM%2FIEziaoYfHT1AqqtR2kZun1vizwgm7ICK6sEyBcXWA9H2cQlH3FJIcNpKRS36Bp8rwCyU2AAT%2F23gE3o8PjhJtVB2vZG6oS9LOJAhP14HBBJFPTuOt8hWSAxZ4KwQK0CMmTLeHbpO5OHQ3w1e8md2ZC%2BzrmrtZ3JORtTg4%2BjF%2BTxHRDFithjNQuHeR56ABYmHPgQiMzduBJsgGf8Ojftgn4vfgsLXBt0VPryLyj%2F%2B1OEU1G0cjrzrFCDLk0sNRkcFK21tADLhYRwJ613d8xbierqCwKi4f8sEAupwy6zRqJEioJwsUUViS8AI2mZ6BVtRp8ZUBs8Wy34LfMC9clymhjrCKbcvw7xajxVM2k%2FhMCapEwu1G12m3Fu0liyU6W7qnYTTI3BZiowknBNaDDUxYrKBjqkAYJxGCf0homeOm4X5TVHsLZRrPYI2mOLbPO2eCpNWuUNYe6WShepifoRFZ%2Foq62qGQ9VBmLtZyiTd%2BrCiuy2iKIqkhvNSrXKDDekv7QHYTa%2BZNJk%2F%2F3ItlOxgc%2Fr93oK5jc0pKX9TLQ9Qi4xTa7MecDwJItkPCvpRU58QNl7ktcv7oGiYvDnGjDd3ftL4fNDuQ01lJhmTedM%2BTkW%2BqTRg0FizEdS&X-Amz-Signature=a515f692061f892eb9e5a89ecef4fdd6a6e515fa704234571dd2168fa450030b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PTM6L5R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyy6nmxcTKDlH%2B1kkF7Ko7Olu%2BBL40djdtD4DmSYZJTwIhAPmxIoOVjr9Zl7WEitC%2BPuREqpn%2BXH39HqX550%2Bp7PE4Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwYp%2BoK3bE2qbckusYq3ANInI0yduPtlwp8T1QGusTy%2F1%2BBI8z1DRwynxYdoBBDGL7gOh5qDfOnNDps2n6T0UYHXObEJuC5wMQhR3ywJ9gzVEkibAYVGnEku%2FbHBoDCn%2BiB%2F7tL%2F2LhTWMBKIXxCmlhig%2FVeFcR2sfVhHK6%2FnUV53dsfUCgaYzzfysMnhCaDw8wERLed0GdS6XHZN12pYiuBotUzcwmEYNIewZzTNtRIZdlJ%2BgA7HgS99%2FZ1DTM%2FIEziaoYfHT1AqqtR2kZun1vizwgm7ICK6sEyBcXWA9H2cQlH3FJIcNpKRS36Bp8rwCyU2AAT%2F23gE3o8PjhJtVB2vZG6oS9LOJAhP14HBBJFPTuOt8hWSAxZ4KwQK0CMmTLeHbpO5OHQ3w1e8md2ZC%2BzrmrtZ3JORtTg4%2BjF%2BTxHRDFithjNQuHeR56ABYmHPgQiMzduBJsgGf8Ojftgn4vfgsLXBt0VPryLyj%2F%2B1OEU1G0cjrzrFCDLk0sNRkcFK21tADLhYRwJ613d8xbierqCwKi4f8sEAupwy6zRqJEioJwsUUViS8AI2mZ6BVtRp8ZUBs8Wy34LfMC9clymhjrCKbcvw7xajxVM2k%2FhMCapEwu1G12m3Fu0liyU6W7qnYTTI3BZiowknBNaDDUxYrKBjqkAYJxGCf0homeOm4X5TVHsLZRrPYI2mOLbPO2eCpNWuUNYe6WShepifoRFZ%2Foq62qGQ9VBmLtZyiTd%2BrCiuy2iKIqkhvNSrXKDDekv7QHYTa%2BZNJk%2F%2F3ItlOxgc%2Fr93oK5jc0pKX9TLQ9Qi4xTa7MecDwJItkPCvpRU58QNl7ktcv7oGiYvDnGjDd3ftL4fNDuQ01lJhmTedM%2BTkW%2BqTRg0FizEdS&X-Amz-Signature=a7046029c7be5d9ad16dd9e16ac34585994532ade304d09121145964fe0f2ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
