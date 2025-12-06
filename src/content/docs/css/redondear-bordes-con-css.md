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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H7GT4TC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRnaOey40l2sTyF%2FhcJE%2Fnl2WMJY0VYg693ac754A6XwIgX6ZwHZ4bleYH8GU6NdNOjKwD9VggKjmvCvuImzsCA7Yq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHrx%2Be41UJgdyJmWmCrcAzbKOApyJ7X1NIjyKLyblzFI5yJBBVlkD5%2BIpS%2FkBPCS9HQEEZleWRDVOQBlcpnovCEVnYJYl0hGE46NdrPFO5SEMzwM0bCUZKRYAy2nn7yLVyA9BlK%2FrmhPv%2BDZs4f3hWKIac4nvTsFneC3YMnRBEo1JWaon0UNW907umT6j1XvaIzCjVUS5%2BAIAd5o3U%2FpLRXgpXZYQNSAcYomGUMJRYGRTJJkXZHd56PoqKg7U7bwof3OlzMM9Rf0kg9U7JVbjkxN6ku3luCPaFnv7hwSvtpqe1Uct0qT%2BQ6cg%2FvAcNaYfdr%2BsHf11WRHQe3iZX4OV1hRYFLFJr9xjZHoxZEffEECMWiKPaATDmsVroJpSNT5WGUA0vuFox04OPVP%2BBf9vU6TIZktZXFgzM8QqN%2BDXI0PEodInPnSeRpVO2YKCFjuU%2FWnr3zBj10MYARGw%2FHnlgFzQiFOvnxGCZ%2FfBZS0KT04wsR0G3reC8kzLnELCR30isV5pPfYMzCOh62Yi1GZVR2tpLZa4Pxwq8Ort66nTZa6v37yE1d7kiwhZg%2Bcg6rG7pv%2BA2EXPJcuQubM30Ladk7tIKjSJ3DSsfvmqIEMuvl8TvtY2xW4gxPnOpBKVWkCTdP6SAaDG4wGjlGsMKzU0skGOqUBQ29l5kavl4k12emN27k4FnrM5eq%2F1udoF1ElE9xG2Tk5NGRyHBScUlxMfJhNkQ2gNTUKQnXbsRKi6obpLB%2BCVXihPNyzymYhShOmHeJ%2FT8hkC7ih2TBIJptR1JH6l%2Bd9vEyHHEmZIA%2Bo3DpzGxYCc7wVwXuZJvB9X9h5vHcQc78wZT%2FrQO6qQMIzBHskgLZ80Den6eL2hfLFdlMIP7Qtxlo1C6F4&X-Amz-Signature=f03dbf2c526c31db2edda59e51286b0225927788440f38269ba0814c481635c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H7GT4TC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRnaOey40l2sTyF%2FhcJE%2Fnl2WMJY0VYg693ac754A6XwIgX6ZwHZ4bleYH8GU6NdNOjKwD9VggKjmvCvuImzsCA7Yq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHrx%2Be41UJgdyJmWmCrcAzbKOApyJ7X1NIjyKLyblzFI5yJBBVlkD5%2BIpS%2FkBPCS9HQEEZleWRDVOQBlcpnovCEVnYJYl0hGE46NdrPFO5SEMzwM0bCUZKRYAy2nn7yLVyA9BlK%2FrmhPv%2BDZs4f3hWKIac4nvTsFneC3YMnRBEo1JWaon0UNW907umT6j1XvaIzCjVUS5%2BAIAd5o3U%2FpLRXgpXZYQNSAcYomGUMJRYGRTJJkXZHd56PoqKg7U7bwof3OlzMM9Rf0kg9U7JVbjkxN6ku3luCPaFnv7hwSvtpqe1Uct0qT%2BQ6cg%2FvAcNaYfdr%2BsHf11WRHQe3iZX4OV1hRYFLFJr9xjZHoxZEffEECMWiKPaATDmsVroJpSNT5WGUA0vuFox04OPVP%2BBf9vU6TIZktZXFgzM8QqN%2BDXI0PEodInPnSeRpVO2YKCFjuU%2FWnr3zBj10MYARGw%2FHnlgFzQiFOvnxGCZ%2FfBZS0KT04wsR0G3reC8kzLnELCR30isV5pPfYMzCOh62Yi1GZVR2tpLZa4Pxwq8Ort66nTZa6v37yE1d7kiwhZg%2Bcg6rG7pv%2BA2EXPJcuQubM30Ladk7tIKjSJ3DSsfvmqIEMuvl8TvtY2xW4gxPnOpBKVWkCTdP6SAaDG4wGjlGsMKzU0skGOqUBQ29l5kavl4k12emN27k4FnrM5eq%2F1udoF1ElE9xG2Tk5NGRyHBScUlxMfJhNkQ2gNTUKQnXbsRKi6obpLB%2BCVXihPNyzymYhShOmHeJ%2FT8hkC7ih2TBIJptR1JH6l%2Bd9vEyHHEmZIA%2Bo3DpzGxYCc7wVwXuZJvB9X9h5vHcQc78wZT%2FrQO6qQMIzBHskgLZ80Den6eL2hfLFdlMIP7Qtxlo1C6F4&X-Amz-Signature=37aeb2b2cb8b59f345366a5db92aacf9c6edcfedc5e75b066612b227391d4b4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
