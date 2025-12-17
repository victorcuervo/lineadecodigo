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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VADU2KN5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi5MuNud27%2BAA0%2F3HQh%2BizcMwLS3d0t%2FPLYvWexIXeagIhAO7hqqaNPmt2rXS9ENgeIkeqkLqfqZSNz%2Bvo9yN3Cj8SKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsUKd%2F%2FY8%2FwF74lPQq3AP3i%2F36BJZyYvXWmPElLgrQAljDDUfE1rlXTGqEgZQ%2FInPuoUsdJSwYDbPB%2FV2EE%2BLtoXqtselLGBdf%2ByCrJIHBKRmoqwp7EZYbINLSU1rJyt9ZK0t0KYeXvPm9xCpI2k5qp%2BaPeMrKJa58pU%2BMMZ6X78YUYauG1uipBlZwgBI%2FtNt3rIxUhMcPGlbtQznrLri0lWO2nvyL4LbKT7mJnGdKQ33hEPCmC5AoI%2Be2CmX6DJYC83tym5Kz3EvwFNw2cab3riiLNB2axt7lhEvWyEWmO85mZAv6R%2BWQ%2BwMU4P2YStEszRXFduGtEeqAoRQkvW200hy0wfMy53ivoMAJLIJ251irrPSM5ICPT4Lskigu1P6YcxAczHNlh1HQi%2BDg8QmxUTyBsUDqlnI3MiAWFRiPnNrGhqNeovwhUz%2FiKfjoGK3mCxdlf%2FS224GSqeBlmbpyT%2BcMtZAhNqCWiTQHdnR9PUrt69CTSsYcvtHXCEORkTX5XF%2F%2F4coayHjAY9Scer6q5BRhtjLPTnaLoRDDVqK7WN3AoxCoZfcd4zT591eLRo%2FqCTPV1KC5Iv7o8G5lDsuGRqpaRreQo23sYl6IAn6Q66iBUzbuUtux9ZVgmjG2p0CkZViIbjSqP07YMjCCoIvKBjqkAa3K%2B73%2Fc8v3hJjrSJ%2FM%2FLtn%2BJd6ifMZ3pWeiv2VzZX8zP4CmhPC2tkFDBmu1irdNPVbhsr2habOa19tFTR76v2nM6kjqDYG%2FWbT%2BCNSQ5h1YJZpGpmxJ653k7n1HImLXK8af5vuitrFpUf1bJp9CDsOwhK0R6Mm1i3r8KQrj7NsvPoEC9JxTaoOTdUUS0dT9h7bEJP%2FyxyZ%2BsowT52Zv4zmML8y&X-Amz-Signature=c97c677e823b33e39df3b61d7f3147168d3b22b8310b5a21e464b28e0da1fcc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VADU2KN5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi5MuNud27%2BAA0%2F3HQh%2BizcMwLS3d0t%2FPLYvWexIXeagIhAO7hqqaNPmt2rXS9ENgeIkeqkLqfqZSNz%2Bvo9yN3Cj8SKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsUKd%2F%2FY8%2FwF74lPQq3AP3i%2F36BJZyYvXWmPElLgrQAljDDUfE1rlXTGqEgZQ%2FInPuoUsdJSwYDbPB%2FV2EE%2BLtoXqtselLGBdf%2ByCrJIHBKRmoqwp7EZYbINLSU1rJyt9ZK0t0KYeXvPm9xCpI2k5qp%2BaPeMrKJa58pU%2BMMZ6X78YUYauG1uipBlZwgBI%2FtNt3rIxUhMcPGlbtQznrLri0lWO2nvyL4LbKT7mJnGdKQ33hEPCmC5AoI%2Be2CmX6DJYC83tym5Kz3EvwFNw2cab3riiLNB2axt7lhEvWyEWmO85mZAv6R%2BWQ%2BwMU4P2YStEszRXFduGtEeqAoRQkvW200hy0wfMy53ivoMAJLIJ251irrPSM5ICPT4Lskigu1P6YcxAczHNlh1HQi%2BDg8QmxUTyBsUDqlnI3MiAWFRiPnNrGhqNeovwhUz%2FiKfjoGK3mCxdlf%2FS224GSqeBlmbpyT%2BcMtZAhNqCWiTQHdnR9PUrt69CTSsYcvtHXCEORkTX5XF%2F%2F4coayHjAY9Scer6q5BRhtjLPTnaLoRDDVqK7WN3AoxCoZfcd4zT591eLRo%2FqCTPV1KC5Iv7o8G5lDsuGRqpaRreQo23sYl6IAn6Q66iBUzbuUtux9ZVgmjG2p0CkZViIbjSqP07YMjCCoIvKBjqkAa3K%2B73%2Fc8v3hJjrSJ%2FM%2FLtn%2BJd6ifMZ3pWeiv2VzZX8zP4CmhPC2tkFDBmu1irdNPVbhsr2habOa19tFTR76v2nM6kjqDYG%2FWbT%2BCNSQ5h1YJZpGpmxJ653k7n1HImLXK8af5vuitrFpUf1bJp9CDsOwhK0R6Mm1i3r8KQrj7NsvPoEC9JxTaoOTdUUS0dT9h7bEJP%2FyxyZ%2BsowT52Zv4zmML8y&X-Amz-Signature=58bf6cfa99ec54309d022060d22e0ea01eb639df91909f8d9c8778862ce30c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
