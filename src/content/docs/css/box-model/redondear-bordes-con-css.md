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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5QLVDT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMvR9x5Ox92G3vyIpwJ0wmMvwMoyxNkcRsX8LTzN7nTAiEAkr0ZDJLNxSRli0l7Lu67X54AURCHAXwcvaZbqZXdA2oq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJdaBuqS5RsK33hFSircA3nEoaOh65J7qJUlTHtbSfJmx3uqCkqK3RpANtXpedIMnJyf0BhFrKkj18Jx5vB9J8GB92PoGeG%2Ftb%2BiQvQmex3c7kXHLEQAFtKUdSILSv83SEuku9K6CjR%2BtN1qReARh83lAbFfWXfxbZeLeHeMI39y5E%2Beyf0dRkbtgzJcAtvquzldEZv59k7IA6svyPg3%2BdNUJ3HyfYBX6o89VUt%2BWWX4fcKkPrJN9QUtSre7Y5QVhzYJ2bELjkLhCJkdPXVFIlyIFrQsN4wLtgbuIt4sQELN2pWAMXb9ivgwMfYEPaizHlBfKyNownEj99H%2Bjn8mBXPdK8nsqcSpnDT9iL%2F2xKNjMQdZAB2NQw%2B6S53NnaqLuOh1o%2BKZKBaGevo2n5bavXokSRx5ZpBmjCl9GbMi4cDGwS1uI6sSpTvYvrl65C%2F0thd%2BzWuBbT4Qqo1kqAdbVVPf8UwhrzO%2FF9LLym3Ws6cOpfvLir%2BktKfisXmA9anH2vzKYp9gvhMNvZGdd%2FFBt0zhrSBoj0oofPXQUeMP32ZJCEgKM5hfUVa35shyBrGFdLL7wLf7f8jeV%2F6xrJuTlPfE8DZMIUqplm6ER8iqpBVtijd7OT2p9vOd7ajOVplh%2F%2Fc8we1FER%2FmkBQFMJqrisoGOqUB93ADUVNBB5GbwTxO4ELCnVPXGg9T4zkc7M1A9Ea2ankybIUohioFMbkcHd8Avz3lXvNuZgvsvJ1azQWFTTU2d8TIFu20q4ejGeRg3ZnCYfPHWGNfnws%2Fd4Z4BmbmMM4C29b5EpPiCyRbSUm5PExnkgD2lq9rT0DrHBigc4sdFDlei6MpDH%2BV6RaVVeqW1V2%2F1ZbwYOiK7xeeNdUd2%2ByBdRN1oAJB&X-Amz-Signature=b38986063ce50b5f3ee419932d760a03b6904cc979b67fb1b49e891cd7a22967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5QLVDT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMvR9x5Ox92G3vyIpwJ0wmMvwMoyxNkcRsX8LTzN7nTAiEAkr0ZDJLNxSRli0l7Lu67X54AURCHAXwcvaZbqZXdA2oq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJdaBuqS5RsK33hFSircA3nEoaOh65J7qJUlTHtbSfJmx3uqCkqK3RpANtXpedIMnJyf0BhFrKkj18Jx5vB9J8GB92PoGeG%2Ftb%2BiQvQmex3c7kXHLEQAFtKUdSILSv83SEuku9K6CjR%2BtN1qReARh83lAbFfWXfxbZeLeHeMI39y5E%2Beyf0dRkbtgzJcAtvquzldEZv59k7IA6svyPg3%2BdNUJ3HyfYBX6o89VUt%2BWWX4fcKkPrJN9QUtSre7Y5QVhzYJ2bELjkLhCJkdPXVFIlyIFrQsN4wLtgbuIt4sQELN2pWAMXb9ivgwMfYEPaizHlBfKyNownEj99H%2Bjn8mBXPdK8nsqcSpnDT9iL%2F2xKNjMQdZAB2NQw%2B6S53NnaqLuOh1o%2BKZKBaGevo2n5bavXokSRx5ZpBmjCl9GbMi4cDGwS1uI6sSpTvYvrl65C%2F0thd%2BzWuBbT4Qqo1kqAdbVVPf8UwhrzO%2FF9LLym3Ws6cOpfvLir%2BktKfisXmA9anH2vzKYp9gvhMNvZGdd%2FFBt0zhrSBoj0oofPXQUeMP32ZJCEgKM5hfUVa35shyBrGFdLL7wLf7f8jeV%2F6xrJuTlPfE8DZMIUqplm6ER8iqpBVtijd7OT2p9vOd7ajOVplh%2F%2Fc8we1FER%2FmkBQFMJqrisoGOqUB93ADUVNBB5GbwTxO4ELCnVPXGg9T4zkc7M1A9Ea2ankybIUohioFMbkcHd8Avz3lXvNuZgvsvJ1azQWFTTU2d8TIFu20q4ejGeRg3ZnCYfPHWGNfnws%2Fd4Z4BmbmMM4C29b5EpPiCyRbSUm5PExnkgD2lq9rT0DrHBigc4sdFDlei6MpDH%2BV6RaVVeqW1V2%2F1ZbwYOiK7xeeNdUd2%2ByBdRN1oAJB&X-Amz-Signature=d54f56e5f7d8744b6c3df855997da2931b2bb2fad2665d2ab3e5bd4e128ea9eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
