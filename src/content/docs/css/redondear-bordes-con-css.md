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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WDPKBVB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGt5AIJlSaBdmNLIDeYJQPL87ksMaG66yjFnb3so8toAiAJw9ZG%2FZWVV%2BNsKi43x9bElssjfTpfdsnkUPbtdYDJ6Sr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMSwRKiTw915mjGDoMKtwDqExIxyh2nd9%2BNfUj58uKApCubeEdlUv%2FYdoq5vG5SfHrNXrIFlzwtPctFkwIN2fPcQvN1CGd%2FUQn6Z388VbusSAM8%2Bzmu5ACf13bSUsrjRos3dyLV0JnmAvGhg3VVS9b9yvND%2FLyDXGowXX5%2Fj%2BYs3sSDTepgINRs6bi6UWSmwQuU4SLX18bFMdtVqKgLqzKg9gQ0YnAeX3yofmcqIYhHkVK%2FbBx6DmlWfThK3ucrJ3cukA9VOZ4wGsVV4EiCUbB83y9AHfPN3wSIJUcdtIgxDLOibsXwoKDb1W1KU6I6VvQBm5pKPJbB%2FR6C2y8GcKlpH%2BWy%2Bt1JIzH9YWzPEhh0Zxfkx0EERoV%2BQ9sNPxiZjyJ6UYxTgWES7wg8Oc0CDQe24OLUIRjd2bcRqLGV3OyUroTwLLroim6BSWsjqKkz7%2Fxvw3a3MZfrjnX8HlNVL42gB8RYgvHNkV8rUU%2FL3NdeKMKW2QyvZ8QwmMtebl9RV66AJeBY1bPfUmeER%2FG7Ae8sM%2F8%2FOCJTBKfO%2BeL095Z27aqG37OQZEwEmHLoFHkdHdSXul5UOChENfmjQkF56OLPliLUqFxQbRGcYoxAvaxxu1SRWD1OzzmRK5ffBqUzSK08wxRTqe06fUtpHMwjYrQyQY6pgGWWtIBnMBpolqFl%2F64%2F8SYxOv26XuB%2BH0YUZO0stQovha8y4kCQa%2FtrieiqzFP6hVG%2BEBCR2GoWmUtfFhrXTua9Xr1FLmMFnRFd%2F%2FIS516m97fGW8qNYX9ipxZnFQllVut2SUOPG%2BiH8SUAIg7yUDgkJWz5UVgbctkfgQEcNu0yvA6O7vv%2FIc6x4HAYvMQDm%2B9Kux1nQpfm25cJ7AMdjW3S4ZRAJ90&X-Amz-Signature=83ad8c836f789dd965d4032d739ee94a393f3e881e194ae6c549c8e170ba2787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WDPKBVB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGt5AIJlSaBdmNLIDeYJQPL87ksMaG66yjFnb3so8toAiAJw9ZG%2FZWVV%2BNsKi43x9bElssjfTpfdsnkUPbtdYDJ6Sr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMSwRKiTw915mjGDoMKtwDqExIxyh2nd9%2BNfUj58uKApCubeEdlUv%2FYdoq5vG5SfHrNXrIFlzwtPctFkwIN2fPcQvN1CGd%2FUQn6Z388VbusSAM8%2Bzmu5ACf13bSUsrjRos3dyLV0JnmAvGhg3VVS9b9yvND%2FLyDXGowXX5%2Fj%2BYs3sSDTepgINRs6bi6UWSmwQuU4SLX18bFMdtVqKgLqzKg9gQ0YnAeX3yofmcqIYhHkVK%2FbBx6DmlWfThK3ucrJ3cukA9VOZ4wGsVV4EiCUbB83y9AHfPN3wSIJUcdtIgxDLOibsXwoKDb1W1KU6I6VvQBm5pKPJbB%2FR6C2y8GcKlpH%2BWy%2Bt1JIzH9YWzPEhh0Zxfkx0EERoV%2BQ9sNPxiZjyJ6UYxTgWES7wg8Oc0CDQe24OLUIRjd2bcRqLGV3OyUroTwLLroim6BSWsjqKkz7%2Fxvw3a3MZfrjnX8HlNVL42gB8RYgvHNkV8rUU%2FL3NdeKMKW2QyvZ8QwmMtebl9RV66AJeBY1bPfUmeER%2FG7Ae8sM%2F8%2FOCJTBKfO%2BeL095Z27aqG37OQZEwEmHLoFHkdHdSXul5UOChENfmjQkF56OLPliLUqFxQbRGcYoxAvaxxu1SRWD1OzzmRK5ffBqUzSK08wxRTqe06fUtpHMwjYrQyQY6pgGWWtIBnMBpolqFl%2F64%2F8SYxOv26XuB%2BH0YUZO0stQovha8y4kCQa%2FtrieiqzFP6hVG%2BEBCR2GoWmUtfFhrXTua9Xr1FLmMFnRFd%2F%2FIS516m97fGW8qNYX9ipxZnFQllVut2SUOPG%2BiH8SUAIg7yUDgkJWz5UVgbctkfgQEcNu0yvA6O7vv%2FIc6x4HAYvMQDm%2B9Kux1nQpfm25cJ7AMdjW3S4ZRAJ90&X-Amz-Signature=1d970992ebc90415d1e982fe354450d50a868a718914252b112ee358a19b9137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
