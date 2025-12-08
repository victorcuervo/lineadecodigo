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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2G5QD42%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpNV3arni36Szpp6ji4MT6LqiYeLjEgJAczqQ98sf%2FWAiBg%2BX2Cr9Nf73QDeEZj%2FNBetMKbLtaA2f7Z6%2B0Na%2B2xYCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpCSzHHyf1GcC5aYZKtwD6jYzO%2BwSbhZtzOxR9yKNPjyiorvI56ZjiME1LkcXCVmhmYncKd0vaYNTvdqSIUI3pwJVMPHPytrz8x4FJgEYfyueBLOZumJZRVB56ytPd7y4UoFq4K8zQSPvw1gsCvrFXcTs%2FJHuuiYelMZz%2FMf1lVWTWvhFMo2WpLANjkyG9k7QL2yRvgdpAKwRhRMlp6K63BUO9lVeJh1SjNSpARGcdF8DTF%2Bbuts0%2Bp19zsdoTziga0ui70x%2F7MBptgJ1it%2FYXbjPhfdd8%2B1PTyc4jmIclUkWPYy014OhBeTX2jJzAvNeNE4FzazXLWSToElzJ16f7NXpBqiMupvW9pyovZkeLfNTGOPsjNFel3mcQPIyKUAO5ORG1d3xxtG12KFyPDp8U7TjaLyIE0Tu3ivSsvOjTEcvFhjAJYDbmMKXOiPP6MkNsGlorJtkmNouQqr6gH5fmbViKLK2EBlZW3KsKP5n%2F6St4G3s3xSvNbBXmf95YMFJBdriEKQvxTTlnHbEwwFJgxGRG6cbLZDHzxRnJT6hbYgYd1BtlNNweZaaApfaURvblw0QZY%2FeIV097BEZ%2FVZNPHzxiVIuFgIr7O8ejb%2FySCHx3nW1LOy1VKfGun0PUiz8D7E0l8SHU%2FYuMkcw04%2FbyQY6pgEMTFMsrxYBnhWom1tMiw6v2mxAk36hVQSwXC1G135OweH6hOJDGQn2%2BtO6pl%2FiPZca4Bmp9GRkg0OBtK68%2FxyBnwZTkz%2FoIVcJk1mnQlJuTry1dICsz9aQLw5jgfpdN6qJfURpkfkbvNE1NRmPvzVxC%2FjshvxIWB8IReILYRtJln51BYMbINTm2AkEjSzQzr0UgeV%2FrBylmQPZaC9KuY4FRBVcNQq%2B&X-Amz-Signature=c67cd2cf0f17423cade4bc758cd7bc438033f1e5ed49cd96f876f6ffcc6e77d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2G5QD42%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpNV3arni36Szpp6ji4MT6LqiYeLjEgJAczqQ98sf%2FWAiBg%2BX2Cr9Nf73QDeEZj%2FNBetMKbLtaA2f7Z6%2B0Na%2B2xYCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpCSzHHyf1GcC5aYZKtwD6jYzO%2BwSbhZtzOxR9yKNPjyiorvI56ZjiME1LkcXCVmhmYncKd0vaYNTvdqSIUI3pwJVMPHPytrz8x4FJgEYfyueBLOZumJZRVB56ytPd7y4UoFq4K8zQSPvw1gsCvrFXcTs%2FJHuuiYelMZz%2FMf1lVWTWvhFMo2WpLANjkyG9k7QL2yRvgdpAKwRhRMlp6K63BUO9lVeJh1SjNSpARGcdF8DTF%2Bbuts0%2Bp19zsdoTziga0ui70x%2F7MBptgJ1it%2FYXbjPhfdd8%2B1PTyc4jmIclUkWPYy014OhBeTX2jJzAvNeNE4FzazXLWSToElzJ16f7NXpBqiMupvW9pyovZkeLfNTGOPsjNFel3mcQPIyKUAO5ORG1d3xxtG12KFyPDp8U7TjaLyIE0Tu3ivSsvOjTEcvFhjAJYDbmMKXOiPP6MkNsGlorJtkmNouQqr6gH5fmbViKLK2EBlZW3KsKP5n%2F6St4G3s3xSvNbBXmf95YMFJBdriEKQvxTTlnHbEwwFJgxGRG6cbLZDHzxRnJT6hbYgYd1BtlNNweZaaApfaURvblw0QZY%2FeIV097BEZ%2FVZNPHzxiVIuFgIr7O8ejb%2FySCHx3nW1LOy1VKfGun0PUiz8D7E0l8SHU%2FYuMkcw04%2FbyQY6pgEMTFMsrxYBnhWom1tMiw6v2mxAk36hVQSwXC1G135OweH6hOJDGQn2%2BtO6pl%2FiPZca4Bmp9GRkg0OBtK68%2FxyBnwZTkz%2FoIVcJk1mnQlJuTry1dICsz9aQLw5jgfpdN6qJfURpkfkbvNE1NRmPvzVxC%2FjshvxIWB8IReILYRtJln51BYMbINTm2AkEjSzQzr0UgeV%2FrBylmQPZaC9KuY4FRBVcNQq%2B&X-Amz-Signature=783ac052abaf16b0c23e5edc367ec1f294d1db69db2a8917d799c5bbafb8ada3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
