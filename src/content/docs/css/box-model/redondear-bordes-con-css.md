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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WZ2T75%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxY%2B%2BygPbGBcwc3xIzVIuyxj%2BWgijLU5cE%2BrVSam3vgAiBHkY2yx%2FLp4XYOxXND09xdnJyiCl2Hvsm7q%2FV8mrajzCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB4xHKOcTa77TufOAKtwDPTYkXffHRTyO8FyGnP2JpVctAVIs2EvMquYMHCoWWfSRJ9x%2F%2Fi9wFIXeHbvqOj0Ck%2BWI6CeNyNhbaw08r1c9yW7JEtjExxhYJl%2B5%2Fdyf6g0tKC0PN5ggtQ87YKsL0G%2FaVt4Fv%2FGqNVy29ijP5SnN7P8XNJA%2FUd3AJs1vMz2y%2BM4ziuqttNEc3sm07S6JghdzVtdH8TYp48fcZCx6kyCLC9vUYSt%2Fi3rmZkHllGmaWfJXvxpA9XSXqITsfrlWxWFRPh1%2BOWoG%2FfyhKIEpwcdGqxb8A08teuMCDckgPhOP7yO5Mt6wZRV67Gk44J%2BkPFYx37WHWg1UXJRht%2FMOvENBn13nl6WBnsyUco2C4nh%2FqMygfdUMva9lQocMMwr0IwRwVudTrbGVLo%2FYayMgTJQtZi2PD6R4LUxxdBCuoN3ZKcuQly49cnUxh8ANulhNQXq3Gf%2F8Ci6OeAf6F%2FtG9dyARoYaha4gN%2Bb%2Bepdicb4WsZF%2Fa5yuQacmuwBxT6%2BXhHjTBxMVe9RR8PMi4fcqHabiMNZglNbbPfFTLJBj2vwhACcp%2FQ1HzZIANhb0OKydjo4SK9zv4ICTvf5YCebOM6kNB%2F2FdVwewlL0Ncxw3DHYLNiRvVS3s3kwEi0ouXAw%2B56LygY6pgE%2B%2BhKVKef7X%2F8tulbGj7Ct1GXpA53%2F8daSGn0Lg6DPMwb6ecEo%2BV5bDxTTPb2%2Fo1BMWOFm2SXSu%2FoQEZ%2BJLvFnX%2ByMaUO89O4sfYFCpqXylL2ll9SXOd5X223HLSBWZ2xntzsF4GhgJNIoi0%2BaGnvzqeDku2tiYGXb7vTvWi8juSVtO3N9S1XSWQDyfOjL9mM64iVyKIJDqoZAtMy5M74%2BFxnHHKZw&X-Amz-Signature=21d23361e845c59a5ce5274d15a8eefdc1b21c0905d488487aa76ddae781525a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WZ2T75%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxY%2B%2BygPbGBcwc3xIzVIuyxj%2BWgijLU5cE%2BrVSam3vgAiBHkY2yx%2FLp4XYOxXND09xdnJyiCl2Hvsm7q%2FV8mrajzCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB4xHKOcTa77TufOAKtwDPTYkXffHRTyO8FyGnP2JpVctAVIs2EvMquYMHCoWWfSRJ9x%2F%2Fi9wFIXeHbvqOj0Ck%2BWI6CeNyNhbaw08r1c9yW7JEtjExxhYJl%2B5%2Fdyf6g0tKC0PN5ggtQ87YKsL0G%2FaVt4Fv%2FGqNVy29ijP5SnN7P8XNJA%2FUd3AJs1vMz2y%2BM4ziuqttNEc3sm07S6JghdzVtdH8TYp48fcZCx6kyCLC9vUYSt%2Fi3rmZkHllGmaWfJXvxpA9XSXqITsfrlWxWFRPh1%2BOWoG%2FfyhKIEpwcdGqxb8A08teuMCDckgPhOP7yO5Mt6wZRV67Gk44J%2BkPFYx37WHWg1UXJRht%2FMOvENBn13nl6WBnsyUco2C4nh%2FqMygfdUMva9lQocMMwr0IwRwVudTrbGVLo%2FYayMgTJQtZi2PD6R4LUxxdBCuoN3ZKcuQly49cnUxh8ANulhNQXq3Gf%2F8Ci6OeAf6F%2FtG9dyARoYaha4gN%2Bb%2Bepdicb4WsZF%2Fa5yuQacmuwBxT6%2BXhHjTBxMVe9RR8PMi4fcqHabiMNZglNbbPfFTLJBj2vwhACcp%2FQ1HzZIANhb0OKydjo4SK9zv4ICTvf5YCebOM6kNB%2F2FdVwewlL0Ncxw3DHYLNiRvVS3s3kwEi0ouXAw%2B56LygY6pgE%2B%2BhKVKef7X%2F8tulbGj7Ct1GXpA53%2F8daSGn0Lg6DPMwb6ecEo%2BV5bDxTTPb2%2Fo1BMWOFm2SXSu%2FoQEZ%2BJLvFnX%2ByMaUO89O4sfYFCpqXylL2ll9SXOd5X223HLSBWZ2xntzsF4GhgJNIoi0%2BaGnvzqeDku2tiYGXb7vTvWi8juSVtO3N9S1XSWQDyfOjL9mM64iVyKIJDqoZAtMy5M74%2BFxnHHKZw&X-Amz-Signature=03e746ca1c1d4a702b21a261d9c180dcd80a96240f7836438ac6f8bb6885ac7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
