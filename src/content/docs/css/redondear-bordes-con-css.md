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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU5TQ53K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDicg5qubpfnhknxmT%2FgNWs6NkIm8PzoOo0zcSZaAA5yAIgctMx0Gr2ge59E7w%2FtREyjdPc%2FMYIqoY3VPuVqvrbrf8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPsG49zNYjtR4FtyhSrcA1EcuPv6Csqq5na2qdO9ry7vwisQkgleCFt1R5mTEsRVW6k3Apa0Iy95%2Fj90kYJ4PeyPVAMyd4E53hNQSLZqSEHouJ6eozObW5bZgBLVdaV%2B9sYaeLxt5ZCqkhEM6y%2BkbcqgTheJf744KItgt%2BdpBIQQNEnX7Sg5dN9HbnaGHn6TU8xxYNaxe5Typ7xNyWRitVq57JZLOdRiCQ%2BppKV5OdLYQ2cEoRsAvl4GCjeJWCaeewHHwtxfjEsFqTOzthrH6sTsq5aX2G8QCro3UcYABLt89tSB6%2Be2e474Y5NiDKiRWRviwn0I6Dto7bXQKiXx0WGj0ilQV1ytgm4TUe1BPSTcW8KpWRXWfYiQwe05bNbqyAiVeEeDO1OAgClHAMXOOsPtD493nit9WYJ2vkJwuBEl5vZSUFCaHI68llEqCDH%2BFjTDQT4oCkYIVqT9zuPDVkX3Q77QII1%2FoQmjJPIT3kMeCUgBeMfoL3gKNdRzdePpWF8GIsjPxs%2FFRtd8Yh19s7jriOl67%2F0vvD4a2DTr4%2BcvEuWsjc5Pg9uscBZBA2bIVNfv1SLoPgRnir21FGY7p2r44aWG6Lr70uGD9e62ucP0ZlbS3oCMI0AHxizM%2FUi2MDcg1GyFp9z%2ByY%2FDMPTdzskGOqUBKeiborietT%2Fyv2BLun4XImKc7Zmzq4ah88uJuvVQTb%2F27Z7gnhaxYTPpq9VqucYEN1ZqWqwzJbNo0y7uNKU2hC4WwvKwU9bCHeSHFm6DFhpxUMsDHdYfQOxMlwji1jYct4bFfGm40uqfBAGDJLF3owFt7QARQG5v8296PjDh%2FLGNSnt7ZwnPhaMIAdisZWDoWs7U1JioqAZi3ohdbXTwoB5g0Mia&X-Amz-Signature=625157c0e56b1f96a68d679318d4171e4948d0d15c8beb0dccc3f425709b445b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU5TQ53K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDicg5qubpfnhknxmT%2FgNWs6NkIm8PzoOo0zcSZaAA5yAIgctMx0Gr2ge59E7w%2FtREyjdPc%2FMYIqoY3VPuVqvrbrf8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPsG49zNYjtR4FtyhSrcA1EcuPv6Csqq5na2qdO9ry7vwisQkgleCFt1R5mTEsRVW6k3Apa0Iy95%2Fj90kYJ4PeyPVAMyd4E53hNQSLZqSEHouJ6eozObW5bZgBLVdaV%2B9sYaeLxt5ZCqkhEM6y%2BkbcqgTheJf744KItgt%2BdpBIQQNEnX7Sg5dN9HbnaGHn6TU8xxYNaxe5Typ7xNyWRitVq57JZLOdRiCQ%2BppKV5OdLYQ2cEoRsAvl4GCjeJWCaeewHHwtxfjEsFqTOzthrH6sTsq5aX2G8QCro3UcYABLt89tSB6%2Be2e474Y5NiDKiRWRviwn0I6Dto7bXQKiXx0WGj0ilQV1ytgm4TUe1BPSTcW8KpWRXWfYiQwe05bNbqyAiVeEeDO1OAgClHAMXOOsPtD493nit9WYJ2vkJwuBEl5vZSUFCaHI68llEqCDH%2BFjTDQT4oCkYIVqT9zuPDVkX3Q77QII1%2FoQmjJPIT3kMeCUgBeMfoL3gKNdRzdePpWF8GIsjPxs%2FFRtd8Yh19s7jriOl67%2F0vvD4a2DTr4%2BcvEuWsjc5Pg9uscBZBA2bIVNfv1SLoPgRnir21FGY7p2r44aWG6Lr70uGD9e62ucP0ZlbS3oCMI0AHxizM%2FUi2MDcg1GyFp9z%2ByY%2FDMPTdzskGOqUBKeiborietT%2Fyv2BLun4XImKc7Zmzq4ah88uJuvVQTb%2F27Z7gnhaxYTPpq9VqucYEN1ZqWqwzJbNo0y7uNKU2hC4WwvKwU9bCHeSHFm6DFhpxUMsDHdYfQOxMlwji1jYct4bFfGm40uqfBAGDJLF3owFt7QARQG5v8296PjDh%2FLGNSnt7ZwnPhaMIAdisZWDoWs7U1JioqAZi3ohdbXTwoB5g0Mia&X-Amz-Signature=7099556548feafd779a058e30f1120b29ea9d16b97005124f843f6ba64321405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
