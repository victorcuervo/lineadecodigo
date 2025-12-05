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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2SQGEMV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESg7ZH95HIVCi30BRWszY%2F5l8G1YpD0odc6QOQWvoTzAiEAj357NlXN3sG%2F5yradRHCEzE1XIrcQrHvSQLj8XKnblUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIt%2F1GE9fWcgI9fQ4yrcAxlV%2BKNMqaKnHiYW2MoquY6oZXCBioPGJgrgpDaINg8%2FsMU%2Ba%2FBtL4bhIsLjpidgfRXKwFI%2BTyeLz5jiO1h53OJPNF2X7sM52CxLGVzbNth1XKjRhaJEtgo%2BLsfKKD0YZemZwDMwGgs76JWYauMUtWtJdHQPej%2BBSmUR4rz4jIxERZbVilSlMesigg9j%2BHrMzu7iqs7l1cDvc3%2FiZ3WPwc8CD3v2TCPTQ4lO4NcILhAFj%2FK9jmM%2FqrHfAwR2g4hW8ksQFFRPxVMT%2BZzTA7JaHyoAa4cIXia%2FIq1OGa7i9b4hStSIHm1zsCTG7fhrLZwIj8wrpYjBJPtEpmpdnx2ib2UTJjz%2B9Uqmmuv5HVaJkLa3Kb1Ph840o22rgsokE29nWKS5XC1U32hLP7C3foFU51m6AMGN2IZzYR2ZjqxJxHKX2%2B8LQl7iESlF1Iy3JASC4ELY6Jp8CMNLuhR5ADjgtvPTN8oDeS%2Fc3d1iNxQ%2FOBVSryxKp4gJlps29dVRc4tfcKZNertmqMpGgUa5z8xB1lsqs6EzOMcE8LJAr7a7oVYlxi8XuO8kr9jdYinRKG7WugkkzxqUBwOh9cro1Nos2yupuVeuEVIgqdv7MGFChTIeXWu%2FrVCMA4JGkqlBMIjGzckGOqUBkqf8UuHzXsUViFxddLERdAKMZw5lluay9WpoVqf57LhbzfQ3R9p62jejNToiTEmBMMqBRsHIcPPHiZ%2F0vmhuRnUHTW3ZUpGjUUZlf7%2BLig1N5vFWTa%2FXx6C%2Bz2szyK8aE6gtzmkHjqzRZp69bbgMH%2FI8rLoSALkn9h6xafkFzWLirpow1A459qC9jPQOFwwxN7Ld1Aj3vvsNhOkPBu6KGEehCKRg&X-Amz-Signature=eb8c66e376fc813cecc25bf1efaf0128e7208e59ee4cd6791ea643bc075bd7c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2SQGEMV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESg7ZH95HIVCi30BRWszY%2F5l8G1YpD0odc6QOQWvoTzAiEAj357NlXN3sG%2F5yradRHCEzE1XIrcQrHvSQLj8XKnblUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIt%2F1GE9fWcgI9fQ4yrcAxlV%2BKNMqaKnHiYW2MoquY6oZXCBioPGJgrgpDaINg8%2FsMU%2Ba%2FBtL4bhIsLjpidgfRXKwFI%2BTyeLz5jiO1h53OJPNF2X7sM52CxLGVzbNth1XKjRhaJEtgo%2BLsfKKD0YZemZwDMwGgs76JWYauMUtWtJdHQPej%2BBSmUR4rz4jIxERZbVilSlMesigg9j%2BHrMzu7iqs7l1cDvc3%2FiZ3WPwc8CD3v2TCPTQ4lO4NcILhAFj%2FK9jmM%2FqrHfAwR2g4hW8ksQFFRPxVMT%2BZzTA7JaHyoAa4cIXia%2FIq1OGa7i9b4hStSIHm1zsCTG7fhrLZwIj8wrpYjBJPtEpmpdnx2ib2UTJjz%2B9Uqmmuv5HVaJkLa3Kb1Ph840o22rgsokE29nWKS5XC1U32hLP7C3foFU51m6AMGN2IZzYR2ZjqxJxHKX2%2B8LQl7iESlF1Iy3JASC4ELY6Jp8CMNLuhR5ADjgtvPTN8oDeS%2Fc3d1iNxQ%2FOBVSryxKp4gJlps29dVRc4tfcKZNertmqMpGgUa5z8xB1lsqs6EzOMcE8LJAr7a7oVYlxi8XuO8kr9jdYinRKG7WugkkzxqUBwOh9cro1Nos2yupuVeuEVIgqdv7MGFChTIeXWu%2FrVCMA4JGkqlBMIjGzckGOqUBkqf8UuHzXsUViFxddLERdAKMZw5lluay9WpoVqf57LhbzfQ3R9p62jejNToiTEmBMMqBRsHIcPPHiZ%2F0vmhuRnUHTW3ZUpGjUUZlf7%2BLig1N5vFWTa%2FXx6C%2Bz2szyK8aE6gtzmkHjqzRZp69bbgMH%2FI8rLoSALkn9h6xafkFzWLirpow1A459qC9jPQOFwwxN7Ld1Aj3vvsNhOkPBu6KGEehCKRg&X-Amz-Signature=9ecb45d15c5ca606b47041f6fd85e5c1ad145b08b8e7c0259aa6d368da55e7d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
