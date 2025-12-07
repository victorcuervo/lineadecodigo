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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626BYI4AL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg4NdQZO6USC11s3RQRVhp3TtoX9MxzVCd6wlnEe%2FpgAIgVbi4NaIdaFxCldQ3A6J5N3PHNcmfbhViYN8K0ncVqVwqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRFSsUZs4skK%2Bdp8SrcAzxRAddb9GWHAmBQj9JQN4vkgMmnOf%2BQZ3svMPWxmXBEM0vbHWF%2Fa85%2FxrTQ5FyRMB3eHdfgWs5Nb1tAgaAMIsdOtmoY1P6NpfjagS5fsKt1j3DKxKKgdaEz7PTa0HhsFOG18%2FTKaCTJ5IPiNQZIDvekx5EvGNfx7WQFqnZCxHQc4JOTtcBK5qzmNDJ144qQdt7hH1x4mY%2F5oYxMFcjFeWCJWtvX7Fr1EcuGn4a4iiJLQsWQFiK7qgwh5UPDnYmR3WHeaMvQsa8ImkOhYxd3UiXl2%2FJ0gToRhkuQk3lZgZ311dQYQSiw6iotSP9A6fBjj2CpiWXq4qzxEF65BmaVHoKVplRIKlb6RH%2BNIYqrhbTWjYueS%2BQS914isF72v0W7QV2cmcNqX3%2FCIOM5rrrEGbDpruoOGl04eVQLp%2FekRRULLwoRd2rcVxMszpJAyVWYBG0KlmfX%2FhuKNs1j9cq3N5fhmflAW3i%2FEUxqHEf%2Bsu3yD%2FiHAOIl6Lwr7IEg%2BFO5Fcw7aY2naEnpLCsuqSoGUU4Dp2zcGBt3HiCt0%2F9UQ9pD7ZyBUhF0uenqWp2wTYixrv1EduLhpZ7WXJNZ%2FhANwBnGQQhPEXl0cXI5pL%2BYV7GgL6%2B5LArEgnUCDKE4MP%2BE2MkGOqUBxPbRw5Do%2FSsfqfJO8FaF541OMSH66u%2BNBwS2iIo49g9nxxVyR4vMSdovDgSpfcIzpctJUkJarhKuIm1nVbfxBWAu%2BRun6mquCDAhEgAqVUQZIFO%2BKmuhC%2FureNrj2Q84TQCCjPLz80myjratCgLSoGRhsAozz%2BLjVvyAiT1yVsVqtjK07MQseDKH1HtLr7pQLYE%2BerpPBym%2BEo5aQNZM2hX%2F5MRZ&X-Amz-Signature=01f0811180b265844b09eeca942276c4e18ce4d85a1869fd2283daddfb5ba1fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626BYI4AL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg4NdQZO6USC11s3RQRVhp3TtoX9MxzVCd6wlnEe%2FpgAIgVbi4NaIdaFxCldQ3A6J5N3PHNcmfbhViYN8K0ncVqVwqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRFSsUZs4skK%2Bdp8SrcAzxRAddb9GWHAmBQj9JQN4vkgMmnOf%2BQZ3svMPWxmXBEM0vbHWF%2Fa85%2FxrTQ5FyRMB3eHdfgWs5Nb1tAgaAMIsdOtmoY1P6NpfjagS5fsKt1j3DKxKKgdaEz7PTa0HhsFOG18%2FTKaCTJ5IPiNQZIDvekx5EvGNfx7WQFqnZCxHQc4JOTtcBK5qzmNDJ144qQdt7hH1x4mY%2F5oYxMFcjFeWCJWtvX7Fr1EcuGn4a4iiJLQsWQFiK7qgwh5UPDnYmR3WHeaMvQsa8ImkOhYxd3UiXl2%2FJ0gToRhkuQk3lZgZ311dQYQSiw6iotSP9A6fBjj2CpiWXq4qzxEF65BmaVHoKVplRIKlb6RH%2BNIYqrhbTWjYueS%2BQS914isF72v0W7QV2cmcNqX3%2FCIOM5rrrEGbDpruoOGl04eVQLp%2FekRRULLwoRd2rcVxMszpJAyVWYBG0KlmfX%2FhuKNs1j9cq3N5fhmflAW3i%2FEUxqHEf%2Bsu3yD%2FiHAOIl6Lwr7IEg%2BFO5Fcw7aY2naEnpLCsuqSoGUU4Dp2zcGBt3HiCt0%2F9UQ9pD7ZyBUhF0uenqWp2wTYixrv1EduLhpZ7WXJNZ%2FhANwBnGQQhPEXl0cXI5pL%2BYV7GgL6%2B5LArEgnUCDKE4MP%2BE2MkGOqUBxPbRw5Do%2FSsfqfJO8FaF541OMSH66u%2BNBwS2iIo49g9nxxVyR4vMSdovDgSpfcIzpctJUkJarhKuIm1nVbfxBWAu%2BRun6mquCDAhEgAqVUQZIFO%2BKmuhC%2FureNrj2Q84TQCCjPLz80myjratCgLSoGRhsAozz%2BLjVvyAiT1yVsVqtjK07MQseDKH1HtLr7pQLYE%2BerpPBym%2BEo5aQNZM2hX%2F5MRZ&X-Amz-Signature=57d9f0964eacb257b926b3382ffc9e973216ae0c8c7ec27d67357d403df120ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
