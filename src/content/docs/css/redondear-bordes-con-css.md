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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBQGM3JH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCx3cXbcY6MkXV6Uwok5das7ZstYT%2FPMOQF9TtLGUO3sQIhAMQjh43HxHlT8jDZfsvsk5NyImqtRgoPk7pgWbYqpAmkKv8DCEUQABoMNjM3NDIzMTgzODA1IgwWskHJgvSuTv82y%2Fgq3AMfSEA5NAjGYZDFjmHowoVDPjiOaYCjYMkAJm6vLL%2BZlMBxIZgGnmniTwY0mgl4bEtE2NlnHSnQ9WcjHmJ%2FIYi1ZzCUVJc7eUI53ZlVbnIwFsg9KToct5%2F82qEKNBCq3dM7OCVNi%2FhY7wiKgUh6doK90EtgOlOft5Bei%2FPMFfzEjxGh54BQ0moPj1Ee1gW20AXn81lxWExznPe0aIxxsbVWRizEVq2BBAHTbfIPftCDVo2YcW1UCy5Hlclal7%2Bh6%2FMKQL6%2BmNOmq0P0MlOBrHnQEVtxT1abd9dCzfJseUlVJYLps4Xip9yUbRWUF80k3iNp2%2FVW4CGWusydgBwlZ21Eaw5TLLk7kUn8688dUp%2BPu3EWAMcqZnHV7deK%2B6oUsOyo2c98Rs%2BMywTvJVI9Rgvl%2FPsVxINogpsvdwKZIHbXNoWW4XphKIx4PelhlCb45U75vIwsPb1cHqEqegYuQceckg6M7L%2BNt27cJAeF2BGJQ6M2XXv%2BmRq6DaLjd6GhqbQV18x2RshiJc0iZh4qpQF4Vl3HynEpJ3PSsvLPCZahp2NVPNU3NgMCVPaI%2FutV1sYgdGWGHFOSHutOiBxWA15uYsE7Yz5S918mOPAYYPc6wRvwmhqpdDy4A3O0yDC158XJBjqkAWFwIQG91%2FDyWezI%2BpVPKZyLDA6tc1tzItuuAsJTM1zugm8cOBddUcw2swRxArYQWRTUCM1YYqeKaZZSXUw1goSRcbbHHta2yksjlmfLShW2mYIUWhZEbvKELOvxVIwcgk8KCCeH%2B5Ccj3GJEtOT6nR7%2BTHJKyqHc0h0lr1Y9i3hiU1UYJLnWk2PXjMv2gbfc4gZ%2F6FexChpLQq82gTcWRFtmRPi&X-Amz-Signature=6fddfa4a51842f99389371a870a33a420da9bde558e2b016f07ed1657173d090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBQGM3JH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCx3cXbcY6MkXV6Uwok5das7ZstYT%2FPMOQF9TtLGUO3sQIhAMQjh43HxHlT8jDZfsvsk5NyImqtRgoPk7pgWbYqpAmkKv8DCEUQABoMNjM3NDIzMTgzODA1IgwWskHJgvSuTv82y%2Fgq3AMfSEA5NAjGYZDFjmHowoVDPjiOaYCjYMkAJm6vLL%2BZlMBxIZgGnmniTwY0mgl4bEtE2NlnHSnQ9WcjHmJ%2FIYi1ZzCUVJc7eUI53ZlVbnIwFsg9KToct5%2F82qEKNBCq3dM7OCVNi%2FhY7wiKgUh6doK90EtgOlOft5Bei%2FPMFfzEjxGh54BQ0moPj1Ee1gW20AXn81lxWExznPe0aIxxsbVWRizEVq2BBAHTbfIPftCDVo2YcW1UCy5Hlclal7%2Bh6%2FMKQL6%2BmNOmq0P0MlOBrHnQEVtxT1abd9dCzfJseUlVJYLps4Xip9yUbRWUF80k3iNp2%2FVW4CGWusydgBwlZ21Eaw5TLLk7kUn8688dUp%2BPu3EWAMcqZnHV7deK%2B6oUsOyo2c98Rs%2BMywTvJVI9Rgvl%2FPsVxINogpsvdwKZIHbXNoWW4XphKIx4PelhlCb45U75vIwsPb1cHqEqegYuQceckg6M7L%2BNt27cJAeF2BGJQ6M2XXv%2BmRq6DaLjd6GhqbQV18x2RshiJc0iZh4qpQF4Vl3HynEpJ3PSsvLPCZahp2NVPNU3NgMCVPaI%2FutV1sYgdGWGHFOSHutOiBxWA15uYsE7Yz5S918mOPAYYPc6wRvwmhqpdDy4A3O0yDC158XJBjqkAWFwIQG91%2FDyWezI%2BpVPKZyLDA6tc1tzItuuAsJTM1zugm8cOBddUcw2swRxArYQWRTUCM1YYqeKaZZSXUw1goSRcbbHHta2yksjlmfLShW2mYIUWhZEbvKELOvxVIwcgk8KCCeH%2B5Ccj3GJEtOT6nR7%2BTHJKyqHc0h0lr1Y9i3hiU1UYJLnWk2PXjMv2gbfc4gZ%2F6FexChpLQq82gTcWRFtmRPi&X-Amz-Signature=1aa453fc6183f4fe3e48a5a70e43af66404643b174990b2437d084c44ec6d091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
