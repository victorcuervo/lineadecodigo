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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBLFBXA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwSeVmRyZFWEUtIn0ZN5A0XGGYC%2BYaOi4lzmhrLLgAdQIhALNluILGaCjAq5%2BQ%2BjPNzSTiepR1vCIv1e%2FVGrdEyLEQKv8DCGsQABoMNjM3NDIzMTgzODA1Igy4k0gOAGG6CTazANIq3AP2MZWpkRZHA6C3VXvYhpmVFeiF2dxwxAwWFIJlBZY1ZQ6M6gKKlSTD8aOjoKWkO%2BshGEC2GNjebuIjF%2Fm4c7tBTtqDZqAa1IrsQze1lhzB21NyfRsNyhsnsP5OX65oRjuhdjr8SXEL0dSXhuAShzUXTkY4gVV3uM5Me9e9EwJ25Pg0AYfzttCdplhxmrOmgkvhYd%2BaWM6fjTKxZCVEul8%2B%2Bxdr0WN1t%2FkqaN%2B792yBcBpyzNuDKDoNZbCWbrhAcDYT5aYuBVexK4Yi4iFdNEb0nZ1XAHm6%2FRqxRF%2FQNUvlmMo%2Fztm%2Bi8kc3d6f4yKTUhhURKK3ts0CUsv4wiBOrOjafMxHdzkx1wle%2FigjEQTdsXmbjiG%2BmiWS22zJXVtNkZC8nXh1WaFtURjlgvmfSWVDthkQfR7sVf5LdJhI5y4gvDsFUsgp8YtEpGjcswZ8ocN3s83A6f1FJvmqYKhaZaNpAzbj5JXj8wtp20V%2FA%2FtYh1IBTnpizJhXiMRdSt8AzBH4vBiBtLeH8FUno6C%2BXhLMdiSTgSVD9Z5nqxzJfJacloHYeUutZz3WEJq4ShMHM9Carlzw3IjtzmqLoa5kKV8azH7c9ifXaVPZgg8BrbI676VgbeJoabzNxI8AOTCVp87JBjqkAWL1Z6qymtf3NoRA2m1%2BIIv9hDmUfCiaFhoAAM353yEvEtfp2kh4usHaVkwd9m8npegssV8bu0q5XZSkOCWfo43IzcKUm3c9UIakZE%2BYm3WUfhy9srfZf9AxuK7KMIBCJ8P1j6PqlHsHUOTHoSCbpDVGhYsLDn0sH5l9%2BI8uyRWEeXxiHt7Ixgy5pyTdW2CSWA1EYRSS30me8IA9FQffRlqYseI9&X-Amz-Signature=7560b5a5599333b8c6a80ef1103c5827484e7f2d102d1954a49ad3eb2e0abce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBLFBXA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwSeVmRyZFWEUtIn0ZN5A0XGGYC%2BYaOi4lzmhrLLgAdQIhALNluILGaCjAq5%2BQ%2BjPNzSTiepR1vCIv1e%2FVGrdEyLEQKv8DCGsQABoMNjM3NDIzMTgzODA1Igy4k0gOAGG6CTazANIq3AP2MZWpkRZHA6C3VXvYhpmVFeiF2dxwxAwWFIJlBZY1ZQ6M6gKKlSTD8aOjoKWkO%2BshGEC2GNjebuIjF%2Fm4c7tBTtqDZqAa1IrsQze1lhzB21NyfRsNyhsnsP5OX65oRjuhdjr8SXEL0dSXhuAShzUXTkY4gVV3uM5Me9e9EwJ25Pg0AYfzttCdplhxmrOmgkvhYd%2BaWM6fjTKxZCVEul8%2B%2Bxdr0WN1t%2FkqaN%2B792yBcBpyzNuDKDoNZbCWbrhAcDYT5aYuBVexK4Yi4iFdNEb0nZ1XAHm6%2FRqxRF%2FQNUvlmMo%2Fztm%2Bi8kc3d6f4yKTUhhURKK3ts0CUsv4wiBOrOjafMxHdzkx1wle%2FigjEQTdsXmbjiG%2BmiWS22zJXVtNkZC8nXh1WaFtURjlgvmfSWVDthkQfR7sVf5LdJhI5y4gvDsFUsgp8YtEpGjcswZ8ocN3s83A6f1FJvmqYKhaZaNpAzbj5JXj8wtp20V%2FA%2FtYh1IBTnpizJhXiMRdSt8AzBH4vBiBtLeH8FUno6C%2BXhLMdiSTgSVD9Z5nqxzJfJacloHYeUutZz3WEJq4ShMHM9Carlzw3IjtzmqLoa5kKV8azH7c9ifXaVPZgg8BrbI676VgbeJoabzNxI8AOTCVp87JBjqkAWL1Z6qymtf3NoRA2m1%2BIIv9hDmUfCiaFhoAAM353yEvEtfp2kh4usHaVkwd9m8npegssV8bu0q5XZSkOCWfo43IzcKUm3c9UIakZE%2BYm3WUfhy9srfZf9AxuK7KMIBCJ8P1j6PqlHsHUOTHoSCbpDVGhYsLDn0sH5l9%2BI8uyRWEeXxiHt7Ixgy5pyTdW2CSWA1EYRSS30me8IA9FQffRlqYseI9&X-Amz-Signature=1bb649efeabd1c2ae17d268bf717ee22499d78d34502790d466edfb1a98ed3ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
