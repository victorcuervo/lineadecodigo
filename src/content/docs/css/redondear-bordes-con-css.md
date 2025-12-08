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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VPTGWZ7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH51Hq0TVf%2FlkAsDkz4yipELTj2sItMtauYp0t%2FqOc6EAiAHQwU3ytT60der4E%2F0ok%2BwqA7EA53Oc3JtVwTKd0sRyCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7DJB6DGB%2BWDLpqjFKtwDB6WtWd089dj%2FibjJ3vIrS8Wnf2TDYniC9GUHJoAlf7t4LEAPpvRMXK5%2FokrXKaQIKVnWj85vzFR5AjIpA9%2FTdn9d95VkAGPduCVQe%2FWBIeGS%2BdPFkgrSsyO6N7Xxkybt6Ke%2FOpG7emoDeAxVfjjQC25hLwnbQ84p6rLwIFtcaoph4IqC0uTfuPFPXmOfck1UqxK2TpgcJD9hIYVljn%2FMKnyRzRl4xAoie%2F1ajeM61osPw8vbDGk0uZktM0%2Bw4A50zlauE4yHeUQUCQpxN0f0ZKJI48S2sWL5lWRvWbeLLSnaDlUat7WdeaDmMkBagB5dyRIyHLULSKPiscRZ3xBso4XZ4QpxgYU73YOSBjAF0spq%2Bpxfh610u1Luj4sTu5amz3ggcxQ7%2Fib12FoSCZIFqb5QqWsnnjULlAbL5rgzRkV%2BW%2BmdYl%2FlOs%2FI7%2BB0%2BKRsN7ZA7nNrCqmmLN%2FDLAmM3FKjF5%2Ff1F0eEcsR%2FIPS3WBQsqe8iCO%2FX8vIq7Hmkrk48q1QVWq0bEKpqq26ZcrvM54CxGuQvvjK3OxbTUzV42rdw6K1YRAFzLhWpVXVwqcXD%2Bf5WCv0Fwam4oMsQNl3DoZUtXjPPB40d0jyynIw94BncH%2F1d9t8nJcpkjMw09zcyQY6pgFGw31bbKQNacBM8e%2B9InSgMyDchYBVbw1XD%2FsKmhvWx9S1TKudb4hJB3zSzEvVBIFLVUtaeHrhhRXfzbF1J474k0PvpGsYXgRyJOGqzAb6ntYjKGChUCnjcyRqfV7pwrlZkwfVlTpC2e9wUVaMqKLe0vm79S5OBq5m73n1GgOHdjgDk65zLu9QjMTjGLzmtnsvRmUG3i3thleqJLvBc%2BPj8HWZHsD3&X-Amz-Signature=ce74b53631068b8ee7464a07e3afbf229ff9d2a38eceb12c505f842877265768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VPTGWZ7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH51Hq0TVf%2FlkAsDkz4yipELTj2sItMtauYp0t%2FqOc6EAiAHQwU3ytT60der4E%2F0ok%2BwqA7EA53Oc3JtVwTKd0sRyCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7DJB6DGB%2BWDLpqjFKtwDB6WtWd089dj%2FibjJ3vIrS8Wnf2TDYniC9GUHJoAlf7t4LEAPpvRMXK5%2FokrXKaQIKVnWj85vzFR5AjIpA9%2FTdn9d95VkAGPduCVQe%2FWBIeGS%2BdPFkgrSsyO6N7Xxkybt6Ke%2FOpG7emoDeAxVfjjQC25hLwnbQ84p6rLwIFtcaoph4IqC0uTfuPFPXmOfck1UqxK2TpgcJD9hIYVljn%2FMKnyRzRl4xAoie%2F1ajeM61osPw8vbDGk0uZktM0%2Bw4A50zlauE4yHeUQUCQpxN0f0ZKJI48S2sWL5lWRvWbeLLSnaDlUat7WdeaDmMkBagB5dyRIyHLULSKPiscRZ3xBso4XZ4QpxgYU73YOSBjAF0spq%2Bpxfh610u1Luj4sTu5amz3ggcxQ7%2Fib12FoSCZIFqb5QqWsnnjULlAbL5rgzRkV%2BW%2BmdYl%2FlOs%2FI7%2BB0%2BKRsN7ZA7nNrCqmmLN%2FDLAmM3FKjF5%2Ff1F0eEcsR%2FIPS3WBQsqe8iCO%2FX8vIq7Hmkrk48q1QVWq0bEKpqq26ZcrvM54CxGuQvvjK3OxbTUzV42rdw6K1YRAFzLhWpVXVwqcXD%2Bf5WCv0Fwam4oMsQNl3DoZUtXjPPB40d0jyynIw94BncH%2F1d9t8nJcpkjMw09zcyQY6pgFGw31bbKQNacBM8e%2B9InSgMyDchYBVbw1XD%2FsKmhvWx9S1TKudb4hJB3zSzEvVBIFLVUtaeHrhhRXfzbF1J474k0PvpGsYXgRyJOGqzAb6ntYjKGChUCnjcyRqfV7pwrlZkwfVlTpC2e9wUVaMqKLe0vm79S5OBq5m73n1GgOHdjgDk65zLu9QjMTjGLzmtnsvRmUG3i3thleqJLvBc%2BPj8HWZHsD3&X-Amz-Signature=c78893d25d6248cf6f1373955d8909dcfed8e7f5575010e8c13a082b80e6233f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
