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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIEJTYGD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpAgJ5HFTCqTknG0wONQ5XX02CWA2S4WSdVFEqShG9vAIhAN9nD5glMTohlnPkkepGiNKeIkkByPcr%2FI6F84Gc4uJ4KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQwjKOMNMldVWGBEcq3APlfDxQAWPN5z8y7AFyfzO7ccFaxKSqLXAJotIk1f9gGdDQpnFk5VAcCkfpAuHRPYTw%2B35A4tWqsrJNiYs%2BxyQA4DgeXur4vODNuHtF5XaQJkjHaPq%2F3f%2BK%2B%2BFnaqZ%2FmBxXIwkCMtyKJ1wmff1Qho%2F3T8GwVQdZOindoiovU3%2FqyvqrQlTa4Vix8%2BZ8R4fwTR4Kyyn1GvDrbfKp4ZwpCatZMqYBhDWOb60u2VmJmUGVvZvfFFC3HfBsPdVKoVmQgvj%2BhZwXj0xiKHPxcCS%2FXnP%2F3MjsQOvptmlHtVHZqk5XboIxTewnltaCCib1%2BZbBmZEB4IxcnIEflaCeIbjUFvKDyoBErHbK8FK%2FrXE510n4bXgn3PEqWo7bAKi%2FtxpDN2EoK3BBx4VLtsnwrEAp8EHWT4A4XxM4BFB2L3W%2Fu6%2F2wZxv6YbW5faAq0CpS%2FRllpb9OfWcauD03sT0F%2FBWKlJMqEv5MXBaAPkR389bwf6YBEXTkW9%2BQC%2BkaohSk9xm%2BJqy7W5O%2BqmdNm2yg3P4%2BEd5jQHeJFHJ8EJ5O9Q6nt3ctqnGhsXX6GlCOV2Ms%2FySjDUhUpbwekTsDtv5OU44IIChwQsNlIS2DhCoOt9dKuswS5N0KLmedGpV63s%2FdjCQyt7JBjqkATBe66OZG%2Bz6EHqOzUzWaVcc6JLUKjuhkrIrQLKNpPsEuEsOQpPDe3riNpJkikl0xtkrnS6h68n7oTHTH0wgN90BzT%2FaI3EhZV2jg3Q5%2B3YrxKoxNl1aWyknCYzn%2BeLC4wuowLNuiXZDisbQBBvRj59MIiHHb5BTulH%2BlO9OiwQ7zWiia6y539w%2BZICV2vgiN4wxYBE0aK8O8%2B1yi%2FhmYEaE%2Fsh5&X-Amz-Signature=3d8b76f6793f6b5cca662fa5d830e060702ed25fb9976a7e7933b681a25183a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIEJTYGD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpAgJ5HFTCqTknG0wONQ5XX02CWA2S4WSdVFEqShG9vAIhAN9nD5glMTohlnPkkepGiNKeIkkByPcr%2FI6F84Gc4uJ4KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQwjKOMNMldVWGBEcq3APlfDxQAWPN5z8y7AFyfzO7ccFaxKSqLXAJotIk1f9gGdDQpnFk5VAcCkfpAuHRPYTw%2B35A4tWqsrJNiYs%2BxyQA4DgeXur4vODNuHtF5XaQJkjHaPq%2F3f%2BK%2B%2BFnaqZ%2FmBxXIwkCMtyKJ1wmff1Qho%2F3T8GwVQdZOindoiovU3%2FqyvqrQlTa4Vix8%2BZ8R4fwTR4Kyyn1GvDrbfKp4ZwpCatZMqYBhDWOb60u2VmJmUGVvZvfFFC3HfBsPdVKoVmQgvj%2BhZwXj0xiKHPxcCS%2FXnP%2F3MjsQOvptmlHtVHZqk5XboIxTewnltaCCib1%2BZbBmZEB4IxcnIEflaCeIbjUFvKDyoBErHbK8FK%2FrXE510n4bXgn3PEqWo7bAKi%2FtxpDN2EoK3BBx4VLtsnwrEAp8EHWT4A4XxM4BFB2L3W%2Fu6%2F2wZxv6YbW5faAq0CpS%2FRllpb9OfWcauD03sT0F%2FBWKlJMqEv5MXBaAPkR389bwf6YBEXTkW9%2BQC%2BkaohSk9xm%2BJqy7W5O%2BqmdNm2yg3P4%2BEd5jQHeJFHJ8EJ5O9Q6nt3ctqnGhsXX6GlCOV2Ms%2FySjDUhUpbwekTsDtv5OU44IIChwQsNlIS2DhCoOt9dKuswS5N0KLmedGpV63s%2FdjCQyt7JBjqkATBe66OZG%2Bz6EHqOzUzWaVcc6JLUKjuhkrIrQLKNpPsEuEsOQpPDe3riNpJkikl0xtkrnS6h68n7oTHTH0wgN90BzT%2FaI3EhZV2jg3Q5%2B3YrxKoxNl1aWyknCYzn%2BeLC4wuowLNuiXZDisbQBBvRj59MIiHHb5BTulH%2BlO9OiwQ7zWiia6y539w%2BZICV2vgiN4wxYBE0aK8O8%2B1yi%2FhmYEaE%2Fsh5&X-Amz-Signature=2c1d43318cd3d06750cb667e8c3bb40fe14e0a89c34a260d996d84e89c1a8e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
