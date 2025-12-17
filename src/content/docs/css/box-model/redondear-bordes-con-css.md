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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LCOOIWW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUFK3VkVRu6rcbIBRSPlf1m6Eerfdk%2F%2F%2BPYWr6dN88pwIhAJNpVb865aL%2Fj9ps4GI5gF3FKtAV%2BRpRY4Qe5eTDkSJ0Kv8DCH0QABoMNjM3NDIzMTgzODA1Igx7MN8p56AMrJWF8D8q3APiwP1Of54BtIfm5w4pu5a50DNPNt7OnBQMcJF1jLWxfit9cWoMXv5WKypLiYIP4Ei6Y3IHXIcApyiQ3QDdQ9AFHBrkcXjOGXLhzaU%2FXsfyIYjb8mCeLvpGSB5VOap8qhiMK40%2FLnAntZNo%2FQNtAOhwNsJBQwX15jHPkiTauKQqdBqiFeVEm1Sklr%2FoiBonvCAhvE%2Fo3wK6TCBsMRYEranaoL%2Bj8ip%2FE%2BabBa7pM2OorFNrbilTWrCkY9BkpJYVd8h2l0%2BwtJ9UQmxBBr1YDDn2oH5XJt5IOxLNb%2B5qaA7t7jzsfbZp3n7ZSC%2FGBJezZWKKsPYyXq8RYSAW900EcODnoeOLpgG8qL9h3m1WGKzlEhg8k70i%2BvriNUZFoxm%2BAGl%2BAuHY8jEWZzAzpYuJFZIO9HjQ7JGbhxhccGWP3Mxv2R8KVPJmSABzFkm3WEjqPU7gInlf8eT8Jtob6y4l8YxcaXxbsiZDSQ75S3cRb5MFWCfrnhGFnwDBf3%2BhFQ4beel0oEVeSQQou1cVpNop6SqDCf1PTSpNymEJyGjjUQLp6L80NzOXN0szBsfZ2W5vvKGZfgcqhftg3CF1P7Qj6FvZYpbebE4tn%2Beo3Tu5dFFlFp%2FUDVEaGUUllGqWVDCAq4rKBjqkAeybuskL1qZjW3iOeu%2Fm%2FW23kaviB3cSnXrOuOmD4CUAUQWFXzWbMqk7wWQjEpB%2BeH12DFnw10NZrdI%2BgU17%2FO%2F8BUSZrQ7LB0lAFAB2dZl11iW%2FrSQeBE4dTXJ6%2BoFaBsUlKS64up%2FCFvLnO1gL%2FZuEVFrcCuFCSm7iGESXRPX3IJLfpJisw3mB%2FkA9xppKQKTVt%2Bp5iWb%2FQPhhUBCn6PsyglR0&X-Amz-Signature=adf38b754bd2c09aa6d7d5e4ffa6be9197d238dad41a988b58726225cf6f89e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LCOOIWW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUFK3VkVRu6rcbIBRSPlf1m6Eerfdk%2F%2F%2BPYWr6dN88pwIhAJNpVb865aL%2Fj9ps4GI5gF3FKtAV%2BRpRY4Qe5eTDkSJ0Kv8DCH0QABoMNjM3NDIzMTgzODA1Igx7MN8p56AMrJWF8D8q3APiwP1Of54BtIfm5w4pu5a50DNPNt7OnBQMcJF1jLWxfit9cWoMXv5WKypLiYIP4Ei6Y3IHXIcApyiQ3QDdQ9AFHBrkcXjOGXLhzaU%2FXsfyIYjb8mCeLvpGSB5VOap8qhiMK40%2FLnAntZNo%2FQNtAOhwNsJBQwX15jHPkiTauKQqdBqiFeVEm1Sklr%2FoiBonvCAhvE%2Fo3wK6TCBsMRYEranaoL%2Bj8ip%2FE%2BabBa7pM2OorFNrbilTWrCkY9BkpJYVd8h2l0%2BwtJ9UQmxBBr1YDDn2oH5XJt5IOxLNb%2B5qaA7t7jzsfbZp3n7ZSC%2FGBJezZWKKsPYyXq8RYSAW900EcODnoeOLpgG8qL9h3m1WGKzlEhg8k70i%2BvriNUZFoxm%2BAGl%2BAuHY8jEWZzAzpYuJFZIO9HjQ7JGbhxhccGWP3Mxv2R8KVPJmSABzFkm3WEjqPU7gInlf8eT8Jtob6y4l8YxcaXxbsiZDSQ75S3cRb5MFWCfrnhGFnwDBf3%2BhFQ4beel0oEVeSQQou1cVpNop6SqDCf1PTSpNymEJyGjjUQLp6L80NzOXN0szBsfZ2W5vvKGZfgcqhftg3CF1P7Qj6FvZYpbebE4tn%2Beo3Tu5dFFlFp%2FUDVEaGUUllGqWVDCAq4rKBjqkAeybuskL1qZjW3iOeu%2Fm%2FW23kaviB3cSnXrOuOmD4CUAUQWFXzWbMqk7wWQjEpB%2BeH12DFnw10NZrdI%2BgU17%2FO%2F8BUSZrQ7LB0lAFAB2dZl11iW%2FrSQeBE4dTXJ6%2BoFaBsUlKS64up%2FCFvLnO1gL%2FZuEVFrcCuFCSm7iGESXRPX3IJLfpJisw3mB%2FkA9xppKQKTVt%2Bp5iWb%2FQPhhUBCn6PsyglR0&X-Amz-Signature=c502f788c3a9d4cebb9eefec4e1866609b6b495289e806182ecec921a9a0b519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
