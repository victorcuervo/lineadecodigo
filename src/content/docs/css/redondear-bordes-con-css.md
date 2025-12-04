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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIILNE62%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDSiKR8Bt3svOdO%2F4snNmI7cUhXV%2Fn8exUaHMYvFEesZAIhAP0ZyiJ%2FKHqW8DbPDdiCo9IcRwmtmDcihepBcPvRO6TyKv8DCDsQABoMNjM3NDIzMTgzODA1IgzYGIX8PPLOEiMUrFIq3AN%2FnWSEm6MgGT7AKyYm0iDocwi00Hn5I7PAN5mhay%2BGQt%2FZyEB7nB7SYvKe73usjF8iRCwPzCXV9cVacbeuLl9UV5elFwHi5a63ymYrwzy6wOfQJi6oScoDORxRn1B5Yhr6BgHmRmiV7ZoOjgF95pD7aJIp8YcgBqkAYWVmclV6%2BJc8U%2Buv2I2u4b6ifsibod761hhV%2Be6N2KNDtCGuhjzyEOne4aMOlJs5TfAETd%2FxcwC8gaVlcN11yoAfr49FGEGKfnTfL2XZg%2BPbgzqQNE5QDUO66WJ9sf1axSOcRDwPk%2FxETI2swm3uVOYSD992vSmFNjna51PyRhtqFxKlL%2F%2BdPtCjtCd1hSSrm9h8Rs2JOslgR2qL7Rq658Zo15RuW%2FRlee0Gv8%2FERts9QXWUjURcrx%2BgjyDNyWeq0CRHd68KezUM%2F7MQ0jkBQLKiB3Gu8wGtxP6XOrElqbmaWZ%2FhcmwjC1sAzpQlqZ%2BXKqvicg0xGhX9xQNYQf7orAJZTg5g43O1RLA9bE%2FnsCK41vdcg%2FaDjjVAMHt1wXdvivz2Jdy3J3V79bXp5IfXYMDx4uaEbs9GxBaH7LSHj5gCLlfLCTrLKS4r94iBPclc8s0xa6g9kqxcE1s5I6zEs%2FfaGzDk08PJBjqkAYjWVn8J7z1KlK79NlYqZeJQ56RzeW2nExQgNgUqpT53dDlw2p7ITlJ6g3zxi8xIkrtF4inqxwU9HCuzs7hsmlqVMiHj%2B%2FE%2F67nUam0UrUmXEpfNOcSfIX7VmxO0a%2FAJDiKKRGOkwMmxclL5Ou%2F3DfgK3Y7guJEf0pyTXmNr%2FNuK2GIXjOMeNAExpGLaJk71YYhqOXOtbAUoIjBdjkEb5i5vDab1&X-Amz-Signature=406c2592bc2022aee473d6c7023e904b7dd9496af94e64a20270c72c4bd9bea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIILNE62%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDSiKR8Bt3svOdO%2F4snNmI7cUhXV%2Fn8exUaHMYvFEesZAIhAP0ZyiJ%2FKHqW8DbPDdiCo9IcRwmtmDcihepBcPvRO6TyKv8DCDsQABoMNjM3NDIzMTgzODA1IgzYGIX8PPLOEiMUrFIq3AN%2FnWSEm6MgGT7AKyYm0iDocwi00Hn5I7PAN5mhay%2BGQt%2FZyEB7nB7SYvKe73usjF8iRCwPzCXV9cVacbeuLl9UV5elFwHi5a63ymYrwzy6wOfQJi6oScoDORxRn1B5Yhr6BgHmRmiV7ZoOjgF95pD7aJIp8YcgBqkAYWVmclV6%2BJc8U%2Buv2I2u4b6ifsibod761hhV%2Be6N2KNDtCGuhjzyEOne4aMOlJs5TfAETd%2FxcwC8gaVlcN11yoAfr49FGEGKfnTfL2XZg%2BPbgzqQNE5QDUO66WJ9sf1axSOcRDwPk%2FxETI2swm3uVOYSD992vSmFNjna51PyRhtqFxKlL%2F%2BdPtCjtCd1hSSrm9h8Rs2JOslgR2qL7Rq658Zo15RuW%2FRlee0Gv8%2FERts9QXWUjURcrx%2BgjyDNyWeq0CRHd68KezUM%2F7MQ0jkBQLKiB3Gu8wGtxP6XOrElqbmaWZ%2FhcmwjC1sAzpQlqZ%2BXKqvicg0xGhX9xQNYQf7orAJZTg5g43O1RLA9bE%2FnsCK41vdcg%2FaDjjVAMHt1wXdvivz2Jdy3J3V79bXp5IfXYMDx4uaEbs9GxBaH7LSHj5gCLlfLCTrLKS4r94iBPclc8s0xa6g9kqxcE1s5I6zEs%2FfaGzDk08PJBjqkAYjWVn8J7z1KlK79NlYqZeJQ56RzeW2nExQgNgUqpT53dDlw2p7ITlJ6g3zxi8xIkrtF4inqxwU9HCuzs7hsmlqVMiHj%2B%2FE%2F67nUam0UrUmXEpfNOcSfIX7VmxO0a%2FAJDiKKRGOkwMmxclL5Ou%2F3DfgK3Y7guJEf0pyTXmNr%2FNuK2GIXjOMeNAExpGLaJk71YYhqOXOtbAUoIjBdjkEb5i5vDab1&X-Amz-Signature=62785b8541c82fc1469f385c3badb93d10469698bb5c67029c03bc951577f990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
