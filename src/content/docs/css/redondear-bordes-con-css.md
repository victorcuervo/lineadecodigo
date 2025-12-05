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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MRPISBM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmNdoA9CJw721C%2B5HV9VMaCi4rBpzrSR9sLEcAc9z75AiBotQ4YhxAbtW78RpOjzA%2BnKIJUCMjF1vxRbt4mYTthcSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIME8k7QCKKnnGoqQE%2BKtwD63qyv3x1jl5aju0G6G7UjijmTuuZnbZCBE8cusH7Bvj%2B9AjbXtJGVxOwORfNWSEWI0gjR%2F31UpTlWGVAVWjjGj8Zl7%2BKi8UANdJvAPIiBHwzJu9su2chy7rq8njCzJMVOCIQjynb1l9QWogw12mYRQNrVuGG9DmFDxgBi3ge0jVcYKNxHB7gYQcKOkJlAN0vFdI9POVvhAXJc7bwMnpPmKEj6ubRuJVt4kIplMRBRs9r3LHKxngndIsNZMTlLvSBcWWxdy1G2oqRKVC%2BeDlwis%2BBtCcraNHYuQLQL2qGNPIIAQ52BWxHGicZkHsK2w%2Fiij8lDS3%2FIkzQ1E6W1SC39P2pD9vfi2tZ%2BfXA88h7qK8Go%2BHUomFjV1h7QqGJda8xqudqFVizwSoRYf1t2DCsyQLIIvlv3k0Q4x9vwfL9QEG%2F6%2FhYs%2BGFcmlKYjIw%2BPx%2F7NlidMBvka83fEGWSrsjhIiXOmd3Yg6p8IMIdeIH7cZxkS2zcSu5WB84bg5q0EKECh3CTXChF8%2Bbi2Bb2zMNvhjY8uPMIujgYu3h6KJQcoDsuH6L5mJFEC9jf1PrAWFiw9Xq81OMLiOqSq8wIPMqzlqJkq7aPTj2p4DruZFR7n0troE9luSNeKNfOLYw7ozIyQY6pgGeY2nR4uzkfDCHPIl3mws7fuKu66%2FGRf%2BwioTMJOApqZualhE2awgV6VSpmt5ylbtzlHr%2Fdwjlc2O9Gfz%2B6QvVED0Ip7snjOvbpuybQR4aWKPQDT4O5avgcCsMSf%2BBPXbmAv8iNKberTyqTNh2JODAFG1TErRTCj4Hm2v3VNRMQp8ugb7KBof%2FamNAvWmoTWjFOcEcCd2lc3wV4M3t%2FhI%2FdSw7LBHC&X-Amz-Signature=7052ec5e0674c0713dabf8ca9a6619bcfced254f76348dfa5b80eed8a0955e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MRPISBM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmNdoA9CJw721C%2B5HV9VMaCi4rBpzrSR9sLEcAc9z75AiBotQ4YhxAbtW78RpOjzA%2BnKIJUCMjF1vxRbt4mYTthcSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIME8k7QCKKnnGoqQE%2BKtwD63qyv3x1jl5aju0G6G7UjijmTuuZnbZCBE8cusH7Bvj%2B9AjbXtJGVxOwORfNWSEWI0gjR%2F31UpTlWGVAVWjjGj8Zl7%2BKi8UANdJvAPIiBHwzJu9su2chy7rq8njCzJMVOCIQjynb1l9QWogw12mYRQNrVuGG9DmFDxgBi3ge0jVcYKNxHB7gYQcKOkJlAN0vFdI9POVvhAXJc7bwMnpPmKEj6ubRuJVt4kIplMRBRs9r3LHKxngndIsNZMTlLvSBcWWxdy1G2oqRKVC%2BeDlwis%2BBtCcraNHYuQLQL2qGNPIIAQ52BWxHGicZkHsK2w%2Fiij8lDS3%2FIkzQ1E6W1SC39P2pD9vfi2tZ%2BfXA88h7qK8Go%2BHUomFjV1h7QqGJda8xqudqFVizwSoRYf1t2DCsyQLIIvlv3k0Q4x9vwfL9QEG%2F6%2FhYs%2BGFcmlKYjIw%2BPx%2F7NlidMBvka83fEGWSrsjhIiXOmd3Yg6p8IMIdeIH7cZxkS2zcSu5WB84bg5q0EKECh3CTXChF8%2Bbi2Bb2zMNvhjY8uPMIujgYu3h6KJQcoDsuH6L5mJFEC9jf1PrAWFiw9Xq81OMLiOqSq8wIPMqzlqJkq7aPTj2p4DruZFR7n0troE9luSNeKNfOLYw7ozIyQY6pgGeY2nR4uzkfDCHPIl3mws7fuKu66%2FGRf%2BwioTMJOApqZualhE2awgV6VSpmt5ylbtzlHr%2Fdwjlc2O9Gfz%2B6QvVED0Ip7snjOvbpuybQR4aWKPQDT4O5avgcCsMSf%2BBPXbmAv8iNKberTyqTNh2JODAFG1TErRTCj4Hm2v3VNRMQp8ugb7KBof%2FamNAvWmoTWjFOcEcCd2lc3wV4M3t%2FhI%2FdSw7LBHC&X-Amz-Signature=208b569c7e5433a1526d4e2c8528bc5bb89c253d346613f10bae746889f67780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
