---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5WSNQN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIG0Oy8HMxRONc3SQPu8kA%2B6jbHdQgKWVn%2BQCaJeSc5%2FmAiEAiRkeIe5C%2FMuDL3y9WKy5jXARjfkNZyPBv7KfE1aefTsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDx2WCU0L5LICWtZJSrcA%2B3RSL5Yil3Jzlnw4mQRTTi2Fbm1c7zxX20EzgvYWnxmdu75vF5R42aEAFW99PBf0osvfjgPW4czgInm9gdWb2EXs4LYbJ%2Bg2g568ErSZXL3q8IG3vFzng5d4kcFibLnZZzi0rilWRvK22Jpq6eIBFOJVR4xLK5zAdoCy7rdRfU6G2eh4hLRFHR1kuxiPoyv3yVfbKjPgAOW31FhOMwBcN6rn%2FIm2hBPaG8I70ahyvpJ3hIHHOVBJ1bdmabAIjR2bUvRsXs2Un6S6EAVKyCByhuqEqPgPSIqhF6mtt0mec1ImCxgLv6froestsLPLoVl%2FrnzNFz5VdnILIv3VKndGZus0noKj6fX2hQrPXtqe5yEzUwRwQfJjHPlOq6%2F3f3HDZDOF9PG7mZC8hHEEAD4A3NWTR6mney7sfJSZhHbhUjbQnMBsr0HvN5veR2k6EXMZx%2FWDRr1S5950Gj%2F4M1DKdC2NoTUqMRlUTJVFesQMRd0Mz6XAND2zUftJuHyuxW6i4r25Qnlu4mQfe%2BRxm00Cl3cD%2F%2FwG6XSOIdKOMKjJEGgK1NDtBN5%2BYDZifne%2FlF1EIGzy7vkQW%2FXoFjufgJPfOWJ1dftZmuVN7UNtzQ70pZVBvkW0V97J2482BRaMNGgxskGOqUB%2BunPU1uL%2BTSLapcRI8m5sBAqT5qFoafyX6w9fqqugRgkKJk4mZkFLwSxIBgm4LuuQFutx3jI4HnTRzaJmOmzFSLK6bSGKsO12Xe0j1Y4boIpx%2FY9KKgPFp2g%2FHY2N9ksz6%2F1x9qglqSSgv9vG90xf2a74Be0NWtrsf8zhMjqoa9dTppVZDaTYe30Fe6KTEOTXk31KuCsVAEtPtwXNVBmoIZ5ui0D&X-Amz-Signature=83a2a2aba15773c92dc92e6cec3f5b4cda82d257ba29b7baa03296f72ad5c8ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5WSNQN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIG0Oy8HMxRONc3SQPu8kA%2B6jbHdQgKWVn%2BQCaJeSc5%2FmAiEAiRkeIe5C%2FMuDL3y9WKy5jXARjfkNZyPBv7KfE1aefTsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDx2WCU0L5LICWtZJSrcA%2B3RSL5Yil3Jzlnw4mQRTTi2Fbm1c7zxX20EzgvYWnxmdu75vF5R42aEAFW99PBf0osvfjgPW4czgInm9gdWb2EXs4LYbJ%2Bg2g568ErSZXL3q8IG3vFzng5d4kcFibLnZZzi0rilWRvK22Jpq6eIBFOJVR4xLK5zAdoCy7rdRfU6G2eh4hLRFHR1kuxiPoyv3yVfbKjPgAOW31FhOMwBcN6rn%2FIm2hBPaG8I70ahyvpJ3hIHHOVBJ1bdmabAIjR2bUvRsXs2Un6S6EAVKyCByhuqEqPgPSIqhF6mtt0mec1ImCxgLv6froestsLPLoVl%2FrnzNFz5VdnILIv3VKndGZus0noKj6fX2hQrPXtqe5yEzUwRwQfJjHPlOq6%2F3f3HDZDOF9PG7mZC8hHEEAD4A3NWTR6mney7sfJSZhHbhUjbQnMBsr0HvN5veR2k6EXMZx%2FWDRr1S5950Gj%2F4M1DKdC2NoTUqMRlUTJVFesQMRd0Mz6XAND2zUftJuHyuxW6i4r25Qnlu4mQfe%2BRxm00Cl3cD%2F%2FwG6XSOIdKOMKjJEGgK1NDtBN5%2BYDZifne%2FlF1EIGzy7vkQW%2FXoFjufgJPfOWJ1dftZmuVN7UNtzQ70pZVBvkW0V97J2482BRaMNGgxskGOqUB%2BunPU1uL%2BTSLapcRI8m5sBAqT5qFoafyX6w9fqqugRgkKJk4mZkFLwSxIBgm4LuuQFutx3jI4HnTRzaJmOmzFSLK6bSGKsO12Xe0j1Y4boIpx%2FY9KKgPFp2g%2FHY2N9ksz6%2F1x9qglqSSgv9vG90xf2a74Be0NWtrsf8zhMjqoa9dTppVZDaTYe30Fe6KTEOTXk31KuCsVAEtPtwXNVBmoIZ5ui0D&X-Amz-Signature=256532920bc6b5f282041921c5b8a7df5d4736f5703592e21e4f216f0c5fa3cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
