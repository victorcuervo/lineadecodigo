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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVT3UJE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEIXnzfrWDIv86woC90FPULNnob2qZ1qZAZciXBQSUeAiAsnVY%2B9rg0YZJKoLTVpX4lwWmmJ1cHvy%2FyuDPd1xw4gSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM0nt%2B7rle1a0%2BoCgqKtwDNe1JKSd4Ure3wGHSeWKEuOkJ6AAH%2BFuCJe104hoI31PkdY8WpcBiH%2BbdT%2FVvlSPPgofXiAe1AIEnxMpOKJowOcuXto0agTztkA1hh9GkJpMUtqKLnQ2Yq0C31HiYoiq79nQIBBpT9ROwQtH1Ab7kuSVwJoOJD9XG92UaI4xSCNc%2F5S5nx3phnnIbdi1%2Buhvqeo5OG4IcttDzS1S292VWlt3UQRsidlx03fME4KjsKvjYr1GbPpUP2uWsqsHT%2F7Jr4bbmcGrZGwDT3Kudl%2F7HZaF56rBy1Bv7I3BHaVRVaOlvdEdFcBZspUgg%2FeGD39fcm7bltaDQZeieoKG%2BeITgtTo5bF2f8JdZLdcwMJXKo7oS2Gl1fGrD6vxlBvrPTVSPjuLIJKT4CMlc1FGG%2F89vIEbPWb3fE8AKsiyTtmFhqLtKjd4KtztM7nIFrABYcq6jt9tg%2BfjbVh%2BctnYgp9T4aaUjXyTknK7lbt9kkaDBCu9%2B2Vs1keSPcVEXym3o54I0yHtPEhW4tJ913E6KV%2ByEnfbu2hzS3axMY4oAZy1hrcIBVppjvJ%2FWNcJFzrSmN2HtMRs28VZ3j5rdJgSR%2BVE6yv5oQe3Q3EnLe%2F0aDVuyxf0tJ8BWENxcRes%2B7Pcwj7OIygY6pgHVC4UVYv1rzACw%2F%2F%2Ft0RmChDzP7G0L2GecdEgx6OKpUlHDMscjSDpne6iMSne2DbtKN4t0Arm2oyz5yNEM2qyHcwiu9vts8e9BDB5W%2F6drT8QZAe3g3BO8Q%2Baw0l6WnuJeyUHHIBRkAiFRzjQbTKOld9o29YovHLYs70l7kvgp7LVIfsxPqXWGAmvWbdawKxKvcwQ3r9j%2BFGFBy%2BtXvMPJKXqjy7bH&X-Amz-Signature=62eab154371e4a91a3ee650ecb3f18613072147c0e557293bb5805302d932f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVT3UJE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEIXnzfrWDIv86woC90FPULNnob2qZ1qZAZciXBQSUeAiAsnVY%2B9rg0YZJKoLTVpX4lwWmmJ1cHvy%2FyuDPd1xw4gSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM0nt%2B7rle1a0%2BoCgqKtwDNe1JKSd4Ure3wGHSeWKEuOkJ6AAH%2BFuCJe104hoI31PkdY8WpcBiH%2BbdT%2FVvlSPPgofXiAe1AIEnxMpOKJowOcuXto0agTztkA1hh9GkJpMUtqKLnQ2Yq0C31HiYoiq79nQIBBpT9ROwQtH1Ab7kuSVwJoOJD9XG92UaI4xSCNc%2F5S5nx3phnnIbdi1%2Buhvqeo5OG4IcttDzS1S292VWlt3UQRsidlx03fME4KjsKvjYr1GbPpUP2uWsqsHT%2F7Jr4bbmcGrZGwDT3Kudl%2F7HZaF56rBy1Bv7I3BHaVRVaOlvdEdFcBZspUgg%2FeGD39fcm7bltaDQZeieoKG%2BeITgtTo5bF2f8JdZLdcwMJXKo7oS2Gl1fGrD6vxlBvrPTVSPjuLIJKT4CMlc1FGG%2F89vIEbPWb3fE8AKsiyTtmFhqLtKjd4KtztM7nIFrABYcq6jt9tg%2BfjbVh%2BctnYgp9T4aaUjXyTknK7lbt9kkaDBCu9%2B2Vs1keSPcVEXym3o54I0yHtPEhW4tJ913E6KV%2ByEnfbu2hzS3axMY4oAZy1hrcIBVppjvJ%2FWNcJFzrSmN2HtMRs28VZ3j5rdJgSR%2BVE6yv5oQe3Q3EnLe%2F0aDVuyxf0tJ8BWENxcRes%2B7Pcwj7OIygY6pgHVC4UVYv1rzACw%2F%2F%2Ft0RmChDzP7G0L2GecdEgx6OKpUlHDMscjSDpne6iMSne2DbtKN4t0Arm2oyz5yNEM2qyHcwiu9vts8e9BDB5W%2F6drT8QZAe3g3BO8Q%2Baw0l6WnuJeyUHHIBRkAiFRzjQbTKOld9o29YovHLYs70l7kvgp7LVIfsxPqXWGAmvWbdawKxKvcwQ3r9j%2BFGFBy%2BtXvMPJKXqjy7bH&X-Amz-Signature=188cfb5cd37a130c072c9a384983936a0894c0a8775e01511c6f660ffce908ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
