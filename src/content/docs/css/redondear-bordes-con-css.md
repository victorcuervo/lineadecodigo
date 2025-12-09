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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNYSRDL7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyWEr%2BDlPkRWJmU2mLuXbILEVuaOl%2Fi%2F%2FMvxiJRqACJAiA9Hfu2f7VgawE2x9ideDFLB3v%2FhpV%2BzchhKUJZqHSy9SqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbXZW9VZSWGz8EEOzKtwD%2BOJWcTECu8fLcUVNuDpkaqpM0vZJJUxolgpAfnEZqjLjErIZzKKB1EC5ejwDuNRPDo7NPLapurnKawLgsDeSvCHWImlxA1zziZ%2B2RHQd1WRoWrxDSfgZZNReUhy5KWrn6X6vNjZYawmnPCYMeFbiqxmFXfeFZjtOQu8VRQSTh4YY2kVgAS%2BWDHDjlGGGCux29wEGsR0Iw0ZxlwmaS2qgeYFo0ueKi6rW5%2BjLt2OaW5FWVbZlaw6g%2BDpuRClhCfurQt8Fs3DTU0q15uQGVC9clbyCaHwR4HhnoR3vmHZpLrgl0Z8BEY7oGHlDeW%2BAG5uhEPMXZ2jBUBXqvNM%2Fllf%2FITCp%2By1hxmFGiQu8DQm3phI81%2FdqpTP7vuUvTFPO0lGJTyzYKUJYgxcWxkUPU8IsbXf2ybmg4joamopPgFWMF%2FlfY7ShETuIUkExTm8AOKPLMiDjEjXZEe1R75%2FqrRa%2Fx45Kt5YCaUgcez8AlWeR%2BsTmVDc3%2BUC5%2BGgayx7Zbvila7SGq4kIwnriFczIn1fV7SAWTgNn%2FxNw9UYpm%2FSrM4FMTnIMZy2EuX2Lhujbu51yg%2Bwb%2BXFTQ5EcAysiGw3fEaUYeBC39mYliTsWIt2uJ4Mr8RgFDJ3VsCwNFvcwgKXfyQY6pgE4p2qLclwIhrg6d4H8AZMwOzGnEueTRDvR%2F4frXAlg%2B8%2FAAyysAqHtE4E56tHE9ek2VC3Z252NGNEQw5dGyEig5NqGGSiDl3ZRtJu1QvEoInha8ZQEwobwOJ9pO2sixit9hwk4hZe4qttlpZZK%2BQbtN%2BBzxdh6kjC7vrdM1oopsH0khCmV3m4RI%2BLDQd7NMWkRjGZ2wTsft1yuU45GNXyYAQFR4JT3&X-Amz-Signature=092874a57b65b2010c4c690329c8dd1cb805e50f9f19e319b023be3b9312952d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNYSRDL7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyWEr%2BDlPkRWJmU2mLuXbILEVuaOl%2Fi%2F%2FMvxiJRqACJAiA9Hfu2f7VgawE2x9ideDFLB3v%2FhpV%2BzchhKUJZqHSy9SqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbXZW9VZSWGz8EEOzKtwD%2BOJWcTECu8fLcUVNuDpkaqpM0vZJJUxolgpAfnEZqjLjErIZzKKB1EC5ejwDuNRPDo7NPLapurnKawLgsDeSvCHWImlxA1zziZ%2B2RHQd1WRoWrxDSfgZZNReUhy5KWrn6X6vNjZYawmnPCYMeFbiqxmFXfeFZjtOQu8VRQSTh4YY2kVgAS%2BWDHDjlGGGCux29wEGsR0Iw0ZxlwmaS2qgeYFo0ueKi6rW5%2BjLt2OaW5FWVbZlaw6g%2BDpuRClhCfurQt8Fs3DTU0q15uQGVC9clbyCaHwR4HhnoR3vmHZpLrgl0Z8BEY7oGHlDeW%2BAG5uhEPMXZ2jBUBXqvNM%2Fllf%2FITCp%2By1hxmFGiQu8DQm3phI81%2FdqpTP7vuUvTFPO0lGJTyzYKUJYgxcWxkUPU8IsbXf2ybmg4joamopPgFWMF%2FlfY7ShETuIUkExTm8AOKPLMiDjEjXZEe1R75%2FqrRa%2Fx45Kt5YCaUgcez8AlWeR%2BsTmVDc3%2BUC5%2BGgayx7Zbvila7SGq4kIwnriFczIn1fV7SAWTgNn%2FxNw9UYpm%2FSrM4FMTnIMZy2EuX2Lhujbu51yg%2Bwb%2BXFTQ5EcAysiGw3fEaUYeBC39mYliTsWIt2uJ4Mr8RgFDJ3VsCwNFvcwgKXfyQY6pgE4p2qLclwIhrg6d4H8AZMwOzGnEueTRDvR%2F4frXAlg%2B8%2FAAyysAqHtE4E56tHE9ek2VC3Z252NGNEQw5dGyEig5NqGGSiDl3ZRtJu1QvEoInha8ZQEwobwOJ9pO2sixit9hwk4hZe4qttlpZZK%2BQbtN%2BBzxdh6kjC7vrdM1oopsH0khCmV3m4RI%2BLDQd7NMWkRjGZ2wTsft1yuU45GNXyYAQFR4JT3&X-Amz-Signature=a47150985a0c0a987d3056a6a07202e6c6d6ef1ffe7f44fcc0d7912021252b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
