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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z5MSSJ2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXcUdqV457t6BEphHpAIeihggAZA7l7vhyCLe0RsA48QIgKwUtc8ZG5LSuJETMhDoDip5VotMiCRjLZfU1qgPGx0gq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJvuAbtJ7BkW%2BfwK0CrcAzPgRfT%2FXM80pOTlE6fqee87zvulfL2vD20LErN%2BtqRhiN5FsdoVITBkxW5bmrV7T9voYsbneyVyfFmMnAmB9h8RyHBTc3LK1gXs9K7EClNoQXGHiTQYgCCNE0kyX%2F%2F87e%2FV8eOvI%2BSbsurNNxdoVOxBCIX%2FfPFM6uwgRXHKmNmkxvysMtqaYjSUlkjbSJFWEB3MBRUk%2BeZ0dDTLKpVEs0oLux0btUDd5eWSHb%2BPwe97D6hPNxHVIFnvXcYXCViNhJsB7a2b8kWsulOtLf6xyd3N%2FKL4O6HVwEm2uEInW9XiZionNHW64p5hYGCM4Ah%2BUQY1dsC6u3ZrH3iuhZ5CPBrwg0VQ9rxzvHFMYtMymVqBX%2Bi340uZXr6mz9nzwZJN7rhcvfjOiuSNsKVrlUE08x3mLW%2FKtqilRF9Vz3L5IBgUL8qMLyDnsd3w8CfDz8I%2FpXHwWn9b685H2RCASdLFda7E5oKsaP2CXwcuP1A3xinkZuplZZ7Y4swyVgFGZAKuk3xDTzGa9PGotEGWkMUTwlmNu2zeuSy5MxNU8NeyW%2BE3UimVHXjZpTlF%2FqHsPYgEJPR5OjKSAeVkttWzU3al4mjVIXm3zKWARU5%2FNf2AIBz6TuM1G%2Fp8JpiyChcaMJu3icoGOqUBC8m4Me67z6NTfGfJpWsNPEvwIvzMx7P8sI8Up%2BR5wmLL5yVjJR%2FdjTzuli0Zdd45w%2B36prDd3rKUM%2F19UKqXUrzULmzcW5wLMDy4VSOr8aAdvIn1zzvcEUop5v67bK%2FxUrYUia6K6bQ4Y3Ny7%2FbIyc5kn%2FVXuCdsIbc8s2IDoQo1U3IdwetGhP3anm1RztpkIN62l4eQ%2Fd0O76ySv5RW2HP2XCCj&X-Amz-Signature=326b5eb019674bd3767e3104a4ee250d857e01a4c9f5dbb96eb122182c6fbeae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z5MSSJ2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXcUdqV457t6BEphHpAIeihggAZA7l7vhyCLe0RsA48QIgKwUtc8ZG5LSuJETMhDoDip5VotMiCRjLZfU1qgPGx0gq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJvuAbtJ7BkW%2BfwK0CrcAzPgRfT%2FXM80pOTlE6fqee87zvulfL2vD20LErN%2BtqRhiN5FsdoVITBkxW5bmrV7T9voYsbneyVyfFmMnAmB9h8RyHBTc3LK1gXs9K7EClNoQXGHiTQYgCCNE0kyX%2F%2F87e%2FV8eOvI%2BSbsurNNxdoVOxBCIX%2FfPFM6uwgRXHKmNmkxvysMtqaYjSUlkjbSJFWEB3MBRUk%2BeZ0dDTLKpVEs0oLux0btUDd5eWSHb%2BPwe97D6hPNxHVIFnvXcYXCViNhJsB7a2b8kWsulOtLf6xyd3N%2FKL4O6HVwEm2uEInW9XiZionNHW64p5hYGCM4Ah%2BUQY1dsC6u3ZrH3iuhZ5CPBrwg0VQ9rxzvHFMYtMymVqBX%2Bi340uZXr6mz9nzwZJN7rhcvfjOiuSNsKVrlUE08x3mLW%2FKtqilRF9Vz3L5IBgUL8qMLyDnsd3w8CfDz8I%2FpXHwWn9b685H2RCASdLFda7E5oKsaP2CXwcuP1A3xinkZuplZZ7Y4swyVgFGZAKuk3xDTzGa9PGotEGWkMUTwlmNu2zeuSy5MxNU8NeyW%2BE3UimVHXjZpTlF%2FqHsPYgEJPR5OjKSAeVkttWzU3al4mjVIXm3zKWARU5%2FNf2AIBz6TuM1G%2Fp8JpiyChcaMJu3icoGOqUBC8m4Me67z6NTfGfJpWsNPEvwIvzMx7P8sI8Up%2BR5wmLL5yVjJR%2FdjTzuli0Zdd45w%2B36prDd3rKUM%2F19UKqXUrzULmzcW5wLMDy4VSOr8aAdvIn1zzvcEUop5v67bK%2FxUrYUia6K6bQ4Y3Ny7%2FbIyc5kn%2FVXuCdsIbc8s2IDoQo1U3IdwetGhP3anm1RztpkIN62l4eQ%2Fd0O76ySv5RW2HP2XCCj&X-Amz-Signature=a2a1707c0b79299ad88cb601b47de04d8542e262c9b89fb4b4a36dafefdde1aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
