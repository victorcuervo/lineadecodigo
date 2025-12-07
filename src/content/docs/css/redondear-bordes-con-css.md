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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2BHZXMC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATRpDKdV7zEMdIt7FxMkOWmre0jY3mNOlrPgNjLTMmZAiB5d9sS6deDkzMmFNs%2Fy2xGG7SnlK15jcVCjrLHn1BUEiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx%2FeJvKnu32uEHv5AKtwDapB1a7k4QCQmMzs48Z3Yw0XpiNDzMIgkFqqSIRDP5OGkEQ3jTT8bn7kgWXXfDP5cF2esK9VTVP%2B9mjcnn50LCU6ENLA6z2WRMBq2tC4N%2BCJFXXzNt0XdMQDXD81eXmiIBZyMTNS3mJW354%2BbAxkVxI5sQ%2B0u2MkyYnpWf9ZPvSspsqLV9R9yHow1Bye%2FwAC4baO8GFjGCFSPtdOoB2vP72RWbfVEpxUy5w1s9oHKAANPMqbPi80kPU10PF5zOMplBmkPs0d8apU4wGBKd55UBbtAsdC6eP11zj67oRmycsidUWL3jtQ%2Br25kRNBS%2F0hAYiiBctzhXMxJwBhkjI8FLnRiLY9s3qPSv%2BMZSpDxAUZ98dNvTxR%2FEdWzOjMjPcvu0o4u%2BkOrO26EAB2Cfph8adxW%2FPsnQWjoZTrIwsC58JQjc3PrxUQW5YIm3MLW9PMmpcpbQqpbLAZjNzZhq8gZ6FyUpWRcLCHsM35QPBor3mC6UdxpUodUwjjB3ssC0BqJfFHQoujVI72NLxifraAXYRFGpJx66AUK2c4FvSqtfVOo5PFLLzUxfpwMx6kqhXU7QnpJhGvoReKYs1w4ppenFzaddpRYNGph3vUDUlDwlV%2BzTTb89QCCPe2eRKswrJnVyQY6pgHled1186SK1TaiDUXB4xcqK0ilX3F9w0p1BDneUHNbbdiUGgPNluUpFf3olR2SscHIFh70yZnKRm5lYlHS1OpjfoS8Bonq3IQ51s5itkBTi%2BK6oaC01DSw8m8kpkklggFr35xSzfgfwYjQdsBMa9tVKW4CcXrINH%2BLaspK7jK2YhHVsZVO8YACyhp%2FWDb3i0x2J50D8KJV7oY5dl6IDVtEeVaLVz5Q&X-Amz-Signature=3921b0462171f26175af70a63fbae0dce2bbaaac3a417d48186df36843791c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2BHZXMC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATRpDKdV7zEMdIt7FxMkOWmre0jY3mNOlrPgNjLTMmZAiB5d9sS6deDkzMmFNs%2Fy2xGG7SnlK15jcVCjrLHn1BUEiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx%2FeJvKnu32uEHv5AKtwDapB1a7k4QCQmMzs48Z3Yw0XpiNDzMIgkFqqSIRDP5OGkEQ3jTT8bn7kgWXXfDP5cF2esK9VTVP%2B9mjcnn50LCU6ENLA6z2WRMBq2tC4N%2BCJFXXzNt0XdMQDXD81eXmiIBZyMTNS3mJW354%2BbAxkVxI5sQ%2B0u2MkyYnpWf9ZPvSspsqLV9R9yHow1Bye%2FwAC4baO8GFjGCFSPtdOoB2vP72RWbfVEpxUy5w1s9oHKAANPMqbPi80kPU10PF5zOMplBmkPs0d8apU4wGBKd55UBbtAsdC6eP11zj67oRmycsidUWL3jtQ%2Br25kRNBS%2F0hAYiiBctzhXMxJwBhkjI8FLnRiLY9s3qPSv%2BMZSpDxAUZ98dNvTxR%2FEdWzOjMjPcvu0o4u%2BkOrO26EAB2Cfph8adxW%2FPsnQWjoZTrIwsC58JQjc3PrxUQW5YIm3MLW9PMmpcpbQqpbLAZjNzZhq8gZ6FyUpWRcLCHsM35QPBor3mC6UdxpUodUwjjB3ssC0BqJfFHQoujVI72NLxifraAXYRFGpJx66AUK2c4FvSqtfVOo5PFLLzUxfpwMx6kqhXU7QnpJhGvoReKYs1w4ppenFzaddpRYNGph3vUDUlDwlV%2BzTTb89QCCPe2eRKswrJnVyQY6pgHled1186SK1TaiDUXB4xcqK0ilX3F9w0p1BDneUHNbbdiUGgPNluUpFf3olR2SscHIFh70yZnKRm5lYlHS1OpjfoS8Bonq3IQ51s5itkBTi%2BK6oaC01DSw8m8kpkklggFr35xSzfgfwYjQdsBMa9tVKW4CcXrINH%2BLaspK7jK2YhHVsZVO8YACyhp%2FWDb3i0x2J50D8KJV7oY5dl6IDVtEeVaLVz5Q&X-Amz-Signature=0995569e8dc4a980cabedd184b3866b54c2c9a30700b364c86f418af887dbcb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
