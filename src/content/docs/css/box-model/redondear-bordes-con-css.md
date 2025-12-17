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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWH46T7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlm0lFid87c4388YVLiCIIGew4aIl4i2WecAe0%2FOJ80QIgWGdQkZAD9XqCEz6u9V4ptORzAPdU7h8%2FTfCigLIDOVoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDP11vaJ4r1SV725K8ircA%2BeEPbJB5jfs9Sj%2FaOCidU26Ab94J2raI%2BObdSQrLbkY6N9QDdaIHcsmdCqLv1X2vkvc0eRXjgZzCGrWKqAYS7fLhqB2idP1muptwC4VTkm%2ByRHyDXRC2yVpZE5YY73nJ1IcS4uksqVMvUAJuClfrDgdbqbcIr3jsO1%2FCSroFTYd3%2B6kWSRUqo7w5xudQVzRFWadGmCP1dsvPPSg8k9ry%2B69JIcDV8PduW4b79upl1Hn4vfCj0QeVKmp6YKO%2Bc2J9jb2i7l7u61OpzEiq7lEpGn6KqNVg%2BwVjmEk15z3FtdMHz%2FpCvNRwo4sRlswjzBlCteFRa%2BmrFwMFXA9ooER08CBobOYow2TQobus0%2Fk%2FeHzdM3CVBcVHxdqHi%2F%2Bfh%2BcdKfPFiPRPALhlkn5By%2BLcFTWOfOnAiqrtZn0M%2BUv5GrtvsuFOACqENy2nmJVmHq00yAC%2Fi7x1ldUIyPmHr2UBRkd78e1WSHc%2F3rkRzJgFnQ%2F8zJi4ZjPkNmK%2BF8FduwKhbEL5mx%2Fii1WdPlmXkPcjwo2l4RWAvbVkRdibV2C1RMMOL6wCdp3ML6OFP3wLjdP1K6RyJ1PzIbPDKlVPPBy9Le8u45enKVD0lFidOvFyCbey8pn%2FQlgP4GYDhxQMK7vicoGOqUBAwH%2FR3%2BNSANL%2BX9LK4lEtEjzhnNSsd05D%2F3wiMJOjBtpSb%2B%2BlYhYHrXExjRucgSEHRehj%2FatiS143OjHRmph8JP%2FgiRuJ0W6eY6t%2FU2soQCsHu8Z0Qk21I2zSZM0emFEaTZo87UvBmzKxMZkW%2FFNmYfMqPsXLLB6%2Bkfjbdp%2B%2FOzMtiBde%2FFEan9dGuxIW%2FNCC%2Fr0vPRr1lHYk3eGmeLR8Ijv69q1&X-Amz-Signature=b9b9bb7e5c754ae67d0d9167ea560b5433ef8357404740398c1f0221666404d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWH46T7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlm0lFid87c4388YVLiCIIGew4aIl4i2WecAe0%2FOJ80QIgWGdQkZAD9XqCEz6u9V4ptORzAPdU7h8%2FTfCigLIDOVoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDP11vaJ4r1SV725K8ircA%2BeEPbJB5jfs9Sj%2FaOCidU26Ab94J2raI%2BObdSQrLbkY6N9QDdaIHcsmdCqLv1X2vkvc0eRXjgZzCGrWKqAYS7fLhqB2idP1muptwC4VTkm%2ByRHyDXRC2yVpZE5YY73nJ1IcS4uksqVMvUAJuClfrDgdbqbcIr3jsO1%2FCSroFTYd3%2B6kWSRUqo7w5xudQVzRFWadGmCP1dsvPPSg8k9ry%2B69JIcDV8PduW4b79upl1Hn4vfCj0QeVKmp6YKO%2Bc2J9jb2i7l7u61OpzEiq7lEpGn6KqNVg%2BwVjmEk15z3FtdMHz%2FpCvNRwo4sRlswjzBlCteFRa%2BmrFwMFXA9ooER08CBobOYow2TQobus0%2Fk%2FeHzdM3CVBcVHxdqHi%2F%2Bfh%2BcdKfPFiPRPALhlkn5By%2BLcFTWOfOnAiqrtZn0M%2BUv5GrtvsuFOACqENy2nmJVmHq00yAC%2Fi7x1ldUIyPmHr2UBRkd78e1WSHc%2F3rkRzJgFnQ%2F8zJi4ZjPkNmK%2BF8FduwKhbEL5mx%2Fii1WdPlmXkPcjwo2l4RWAvbVkRdibV2C1RMMOL6wCdp3ML6OFP3wLjdP1K6RyJ1PzIbPDKlVPPBy9Le8u45enKVD0lFidOvFyCbey8pn%2FQlgP4GYDhxQMK7vicoGOqUBAwH%2FR3%2BNSANL%2BX9LK4lEtEjzhnNSsd05D%2F3wiMJOjBtpSb%2B%2BlYhYHrXExjRucgSEHRehj%2FatiS143OjHRmph8JP%2FgiRuJ0W6eY6t%2FU2soQCsHu8Z0Qk21I2zSZM0emFEaTZo87UvBmzKxMZkW%2FFNmYfMqPsXLLB6%2Bkfjbdp%2B%2FOzMtiBde%2FFEan9dGuxIW%2FNCC%2Fr0vPRr1lHYk3eGmeLR8Ijv69q1&X-Amz-Signature=f236e8e04b7a51ca8bb506815494fe24592ae97b3ae96a3bee867f9e38135003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
