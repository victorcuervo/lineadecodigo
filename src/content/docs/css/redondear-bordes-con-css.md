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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAOSWAE3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNKnuxP6xXj2D9nN%2BDKZzTQnd5bHvw494ldxjqhrCYgAIhAMu%2FZpB%2FThgrwwlwAFxFfOBQO%2F%2FBfLnq4yqP7Lb%2B7jrqKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BtcF5Ow1LVaNEfKUq3AMrRfxcsWgE2NIxpDFnQ4EO%2FyCKOqVldZbid7rpyV6PmJEgVnaf%2FJbMl3kTUpv0ee2Fnzr3c26JoG1mmiBAbOJu2MuZOspGFwM%2FfsFb4HMmIB6274HkopfVPHk5xjc4ywscr%2FCpzLHK8%2FqwCV9NE4ihXNCgreQg6zOW%2F2VBm4uqZ1uf6o%2BdFP9MnqDNqKJL%2BzxJieZAqIQpMm%2FFTNsUB8zl4NDN6y220UGZ%2FS1eytockjN1h3LkJfc4I5JauVDU8RY%2B9qKmpWXRE0JLHjJPtypaTL5ae9m5BDavPyA0s63TpppwdLtk2ki2S1C1l4dB%2BKI5Rxlu8z3iuw3MTdOcQO9ypt1dzFpVCoD3lC%2BqzqEUFiz1ZOXqPTv2d%2F7iP4HJH8UFy%2FFiubuty81s5r5qew4v51bFSbFqF4vt3cdOKNMpf6L2xztcRWYD7icdpMt4uS6zr0eAFwt%2Fhi3qiguCjX1BEKzeS47XmczBl7ZmMtzrocRzMf37xSU906ILU9BxC1O4VCztLWB41IhlHXbtyQ4K85OwsXyXvyOT%2Bvr0PqztcLSnnemC%2FjoMhvLd7rEdVm%2FFq%2BBJ45CzmdhtVvY%2FIsaxG95pHWaQCqh%2FF6ydRf4Js%2FC%2B13YYl3MsnJeuMDDco9TJBjqkAXD%2FpikJj%2By6buebo%2FFH%2Fh9%2BQ2sQuGTvnliEXz6LptrPpZqAE2TlKhCLHBS79B16mO0mncfouVh40jdLaoduu3tgHrGpWF9KConTf%2BdStlPwq9c7BAnr9Moj%2BgWASiMxxlBaQ%2FaUgHl6X46DM%2FyQOEBU00cH36WTYTnfRdfYwNvzM2A3%2FX%2BYoSY2JOW6%2FvJh%2BN2tufqGg5DKPmN4psEXwzqbLcgr&X-Amz-Signature=ff17c5e009ca96cf4120f76694ff51e84747f6df51811c075215eff319c0087f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAOSWAE3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNKnuxP6xXj2D9nN%2BDKZzTQnd5bHvw494ldxjqhrCYgAIhAMu%2FZpB%2FThgrwwlwAFxFfOBQO%2F%2FBfLnq4yqP7Lb%2B7jrqKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BtcF5Ow1LVaNEfKUq3AMrRfxcsWgE2NIxpDFnQ4EO%2FyCKOqVldZbid7rpyV6PmJEgVnaf%2FJbMl3kTUpv0ee2Fnzr3c26JoG1mmiBAbOJu2MuZOspGFwM%2FfsFb4HMmIB6274HkopfVPHk5xjc4ywscr%2FCpzLHK8%2FqwCV9NE4ihXNCgreQg6zOW%2F2VBm4uqZ1uf6o%2BdFP9MnqDNqKJL%2BzxJieZAqIQpMm%2FFTNsUB8zl4NDN6y220UGZ%2FS1eytockjN1h3LkJfc4I5JauVDU8RY%2B9qKmpWXRE0JLHjJPtypaTL5ae9m5BDavPyA0s63TpppwdLtk2ki2S1C1l4dB%2BKI5Rxlu8z3iuw3MTdOcQO9ypt1dzFpVCoD3lC%2BqzqEUFiz1ZOXqPTv2d%2F7iP4HJH8UFy%2FFiubuty81s5r5qew4v51bFSbFqF4vt3cdOKNMpf6L2xztcRWYD7icdpMt4uS6zr0eAFwt%2Fhi3qiguCjX1BEKzeS47XmczBl7ZmMtzrocRzMf37xSU906ILU9BxC1O4VCztLWB41IhlHXbtyQ4K85OwsXyXvyOT%2Bvr0PqztcLSnnemC%2FjoMhvLd7rEdVm%2FFq%2BBJ45CzmdhtVvY%2FIsaxG95pHWaQCqh%2FF6ydRf4Js%2FC%2B13YYl3MsnJeuMDDco9TJBjqkAXD%2FpikJj%2By6buebo%2FFH%2Fh9%2BQ2sQuGTvnliEXz6LptrPpZqAE2TlKhCLHBS79B16mO0mncfouVh40jdLaoduu3tgHrGpWF9KConTf%2BdStlPwq9c7BAnr9Moj%2BgWASiMxxlBaQ%2FaUgHl6X46DM%2FyQOEBU00cH36WTYTnfRdfYwNvzM2A3%2FX%2BYoSY2JOW6%2FvJh%2BN2tufqGg5DKPmN4psEXwzqbLcgr&X-Amz-Signature=1da1c1fabcf3be8e136530368a1727392588bee8ba1f34368cf78e5dfa7136eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
