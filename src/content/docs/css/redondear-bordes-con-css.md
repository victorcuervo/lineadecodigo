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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNAEILNQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWDQUwmMhE9IJ72ZhmfLTVb8i29Np%2FOiasritsVWZkaAiEA97t%2FSeLUaOebOlrPSK3XpTWy1rI%2BElzqBHduDZdj8ocqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmnd5OLdkJRIFvKJCrcA0cUEDQliKyVTEpy02tjxgfIBeZft50iAC%2Buo5ZGIQa3PBbbFZOGSVcuPLzc5hHzoPzFlYEAAi%2B1Na7c%2Bjp2U3BkRdMQojp5A9haY4Eb7hd4LUvU38zVVPr8ALkqSVqY7p8QJT1aKsjqsHO11z9LwkIcS2JhocfAs9Y0LF9ZIF6JGBWC0xeFVP3uRDw7OX1Vk46Pq9Evya1jofJbdnFsPv%2F2xNXRQVJjYlYzEy7e%2FbGlpGInqkRVOo2c3h2dI3Zbf%2B5fyhOwkJOmDaa0TmjLCk6cuZr0YzV2HoFobFeNUi%2Bi29s0%2Fz3MT0qq%2BrHyznN39IXQEKAfI24VHiHcnYD2od39nB3yPFHKMzOWgOS%2FAs3FS4j7kUHeNUy75r78usD9Y%2BcVEBZiCxAefy5SB%2Bz7kVkIvmQcqUjHBBdpRUpOu05NWXe3u97%2FCizQx9OYlyg4G2FTdzW1srWMBMReXFymWk8cvgHYk6ZaP0jCOkCkvbbAWbifp6SEws3BSUvLCOPVN2xSeZY5B6aEMUQ6y%2FcrN32b1z%2FqaROkZ%2BgJYRWNYAhSofgdpQCUBERzH%2FLmQIfCDouuP6meI329WIw59%2B9BZfI1aHbOhs3jSRVpTQEGn56CCHSM%2BQVKNt3OO65EMNmU2ckGOqUBBUw%2FffLehu921nKCvQSBSx6amqWrReeudvd4sAvqbprCyl%2FQx8fkaMwDYuNGiusR4x5Nhkhkk9yVzU3hRaQ88KILcAR0gNfMsVnW7DajwPlxeDFH%2FG5HHTkejBf5GJ3aWXfj1eA5OXshrokl4bXqNFBV4F2ve3ITG2MBEx2pUGHGRMu25z%2FyJAnwsxHea%2FzEq6hRrHqRTn3YtGXlzoSnkcN7bF1a&X-Amz-Signature=eff942bbaaa8e8c332c9d9369be18f53b98b44bf90d3d82c9dc84552a88b9f16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNAEILNQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWDQUwmMhE9IJ72ZhmfLTVb8i29Np%2FOiasritsVWZkaAiEA97t%2FSeLUaOebOlrPSK3XpTWy1rI%2BElzqBHduDZdj8ocqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmnd5OLdkJRIFvKJCrcA0cUEDQliKyVTEpy02tjxgfIBeZft50iAC%2Buo5ZGIQa3PBbbFZOGSVcuPLzc5hHzoPzFlYEAAi%2B1Na7c%2Bjp2U3BkRdMQojp5A9haY4Eb7hd4LUvU38zVVPr8ALkqSVqY7p8QJT1aKsjqsHO11z9LwkIcS2JhocfAs9Y0LF9ZIF6JGBWC0xeFVP3uRDw7OX1Vk46Pq9Evya1jofJbdnFsPv%2F2xNXRQVJjYlYzEy7e%2FbGlpGInqkRVOo2c3h2dI3Zbf%2B5fyhOwkJOmDaa0TmjLCk6cuZr0YzV2HoFobFeNUi%2Bi29s0%2Fz3MT0qq%2BrHyznN39IXQEKAfI24VHiHcnYD2od39nB3yPFHKMzOWgOS%2FAs3FS4j7kUHeNUy75r78usD9Y%2BcVEBZiCxAefy5SB%2Bz7kVkIvmQcqUjHBBdpRUpOu05NWXe3u97%2FCizQx9OYlyg4G2FTdzW1srWMBMReXFymWk8cvgHYk6ZaP0jCOkCkvbbAWbifp6SEws3BSUvLCOPVN2xSeZY5B6aEMUQ6y%2FcrN32b1z%2FqaROkZ%2BgJYRWNYAhSofgdpQCUBERzH%2FLmQIfCDouuP6meI329WIw59%2B9BZfI1aHbOhs3jSRVpTQEGn56CCHSM%2BQVKNt3OO65EMNmU2ckGOqUBBUw%2FffLehu921nKCvQSBSx6amqWrReeudvd4sAvqbprCyl%2FQx8fkaMwDYuNGiusR4x5Nhkhkk9yVzU3hRaQ88KILcAR0gNfMsVnW7DajwPlxeDFH%2FG5HHTkejBf5GJ3aWXfj1eA5OXshrokl4bXqNFBV4F2ve3ITG2MBEx2pUGHGRMu25z%2FyJAnwsxHea%2FzEq6hRrHqRTn3YtGXlzoSnkcN7bF1a&X-Amz-Signature=4dc65c865411d110141207a6a2a4bc898f335806755beeac11f69483ddc42f10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
