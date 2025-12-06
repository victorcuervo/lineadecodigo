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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THEEXIRQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bn7osv6sIQlwICnnTw9Iw91ZHxhGA2jjq7mtnlPMQ7AIhAKo00Anfes3DpkJZ97n0MbPUGJ4yzT4VFHJ5W77PF3cmKv8DCG0QABoMNjM3NDIzMTgzODA1Igy%2F7lwNbVpQsFGbnawq3AOWt9tMVv6Qp4GCHmaUAlbFpOIpbp09lXdpT6HvxIpSaaRBcuxt9ywygj4sgDrLBdB3QiawU3w2VJk4latqBRnOQRL7Zfke1Ls3Ayk0Kc0pgqB9ocuJJQmcrEvJGEta37HK1oflfewNlExvitCt%2FWZUs3MqXo6vLY1iFyz2clTHjzfboOQNf3C3Rp%2B6ZhiJIjJbAz51y%2FqP9ONrBu9XFiVIBsmI7wp3FiK1UAsL0yw%2FNih8PGQXGM8BAyhSsRixY%2F7rtInZJePdvLZHVCgMWbQlH6IxaW4H9S7NAfIOIdOpN7QxJVZDKl%2FF5Dbe%2F%2FKXUa4wO65Vxwuvb7%2FKLE2v9oFpLhMoGpU7oLYrib%2BHTvKBMqaaX4zP%2BX3extl%2BvYvtNknz%2BkJJnmUVVKamxfeJ4aSmkiGc3gf0ni6aBdkMcTbE4xGz4g3HN2TX0E8MjeHYBEi5n0QNEoM5X8zoZcMh6YmGn48LAuB9kA%2Fzo6toI3Itg%2FLwlZQ%2F%2F974xicArCIcuOTUr97uCauY9DObv8iZFWb35QBBWLYfFhkXP8Xpy3AnT2ynqA9TJaZhgj2IyuIbwbRV2c3C7AfLufP6EMoFOei0W5jJL9f8iD3OqibC25j9wBX9cRojG%2BivCZa7yjCd3s7JBjqkAfefu%2FJv6O3w0wBk2IZJRiBoVlls0QxdVYCDSaE0AUpJoR8r15EZ%2BLYqWYdf82IcHnWMxNULbGFqpC6uzbiqNm12d3nZSFhyoah7GOUqJ8bXMN92ObMtTaarJJL%2F03%2BcVHzh%2F5NP2mWTUNLa9OwBHKHoeJBe7n38il49lzQ6%2BnkEAscsOUlm3bzPk2VNk3bZk3%2BvhMAo2x9tQwmkagLI9AfWV7Ti&X-Amz-Signature=2c19a5b841ae123121d5f91da499fe52c67d0a7fc4a2a61cead9f03419735c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THEEXIRQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bn7osv6sIQlwICnnTw9Iw91ZHxhGA2jjq7mtnlPMQ7AIhAKo00Anfes3DpkJZ97n0MbPUGJ4yzT4VFHJ5W77PF3cmKv8DCG0QABoMNjM3NDIzMTgzODA1Igy%2F7lwNbVpQsFGbnawq3AOWt9tMVv6Qp4GCHmaUAlbFpOIpbp09lXdpT6HvxIpSaaRBcuxt9ywygj4sgDrLBdB3QiawU3w2VJk4latqBRnOQRL7Zfke1Ls3Ayk0Kc0pgqB9ocuJJQmcrEvJGEta37HK1oflfewNlExvitCt%2FWZUs3MqXo6vLY1iFyz2clTHjzfboOQNf3C3Rp%2B6ZhiJIjJbAz51y%2FqP9ONrBu9XFiVIBsmI7wp3FiK1UAsL0yw%2FNih8PGQXGM8BAyhSsRixY%2F7rtInZJePdvLZHVCgMWbQlH6IxaW4H9S7NAfIOIdOpN7QxJVZDKl%2FF5Dbe%2F%2FKXUa4wO65Vxwuvb7%2FKLE2v9oFpLhMoGpU7oLYrib%2BHTvKBMqaaX4zP%2BX3extl%2BvYvtNknz%2BkJJnmUVVKamxfeJ4aSmkiGc3gf0ni6aBdkMcTbE4xGz4g3HN2TX0E8MjeHYBEi5n0QNEoM5X8zoZcMh6YmGn48LAuB9kA%2Fzo6toI3Itg%2FLwlZQ%2F%2F974xicArCIcuOTUr97uCauY9DObv8iZFWb35QBBWLYfFhkXP8Xpy3AnT2ynqA9TJaZhgj2IyuIbwbRV2c3C7AfLufP6EMoFOei0W5jJL9f8iD3OqibC25j9wBX9cRojG%2BivCZa7yjCd3s7JBjqkAfefu%2FJv6O3w0wBk2IZJRiBoVlls0QxdVYCDSaE0AUpJoR8r15EZ%2BLYqWYdf82IcHnWMxNULbGFqpC6uzbiqNm12d3nZSFhyoah7GOUqJ8bXMN92ObMtTaarJJL%2F03%2BcVHzh%2F5NP2mWTUNLa9OwBHKHoeJBe7n38il49lzQ6%2BnkEAscsOUlm3bzPk2VNk3bZk3%2BvhMAo2x9tQwmkagLI9AfWV7Ti&X-Amz-Signature=5c793e0afb8b4dc2fa74206225d62a6550994ce24c6a32a838f0c1e949fabd40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
