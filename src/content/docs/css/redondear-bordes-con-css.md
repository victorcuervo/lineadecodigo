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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5JKQY7Z%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEpvzUIgReiZCSK2WxiYHiuRqd78RWjzT2YhCcUBIzNAiA3KTNOqONEQaK%2BJnM5Y6UcrliDeyAolvX9%2FX958opxKiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhQrbhYcAPJ04d%2FXHKtwDmvadY6vqvB%2F3Z5gnWH0aDLffSI5Du7wJynodcK7K3Y7kE%2FAE8%2B9V%2BGJ5D2MQxRAHF7FRCLY4uVIDLLtFIl%2FnDuIC8oZWuaVkOwhWmNWH%2BVY8IVEhcLtk0riW76sFDKYBCtwPcQh4XLF40AC9go494rOqTMI%2BhUf5vycVXDYusNMF7xc3WHUdjXCT5UhC2m0rh1wZkrhXOa7KY%2BRYAtKvltIhqS4VODtblg7oIAHztGIWtScK9525XkeD2uqHolnaioqlLE7TdhTaVBuz7w7tHkG4s693cK8lDXPvxyResGbid%2FfvyURjUrFoqW5ip3pz8dQE6SKTiH%2Fc0Q71ex6OO8NINvFBDvgHiS9ZYNGJekR6EF5og4q23kzsYCBPTLiKYLPauoXZMzMEImMcpqQwJtJAFkM7jzPtfdzMWxTLnlvYBl%2Fn73ucLdbLbmyAHqdU6BGPX2E%2Bcc4UDNfLcW7qVFRA4tb5Yvz2TvwmStnEsEOLXeqteviPzMvcH3sR0mQFvIX9uAwtnpIQCUZsTSOI7eXI4TyxXcXS7Fz6xSQVHf5cVasXCtKgTlo0H8HztWg%2FQfCKi0FYm3lfzEkTKQmoDSjAWMB8JlFthL%2Fi9Fh0eWPYQugBMMsEbMtwWDMw3P3SyQY6pgFL6PwgNBePaJ89rexxqapT0RtES6D4ju8aotazxVGw03CGZpa0Vu1SiYpMz8l9qVRWpSzXr5VMuQuQebX3I5XxwfrbnDvjk8L89GatpbEWqG%2BQQT6ULYwcJJ6kS1KwNtGENlegn9KgQ8um5ke0WoJMHQfOjRm2i7iSG93g5VuJnLg149jnuA8lu8N77%2F9tkpAkg%2FqQHE%2FWM097Mb1lWudKLRE%2BQfxU&X-Amz-Signature=4b97fd0675d0d97e8d98d61f74c461d02f83fc29dc1ae1c3dae648bdd69e66d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5JKQY7Z%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEpvzUIgReiZCSK2WxiYHiuRqd78RWjzT2YhCcUBIzNAiA3KTNOqONEQaK%2BJnM5Y6UcrliDeyAolvX9%2FX958opxKiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhQrbhYcAPJ04d%2FXHKtwDmvadY6vqvB%2F3Z5gnWH0aDLffSI5Du7wJynodcK7K3Y7kE%2FAE8%2B9V%2BGJ5D2MQxRAHF7FRCLY4uVIDLLtFIl%2FnDuIC8oZWuaVkOwhWmNWH%2BVY8IVEhcLtk0riW76sFDKYBCtwPcQh4XLF40AC9go494rOqTMI%2BhUf5vycVXDYusNMF7xc3WHUdjXCT5UhC2m0rh1wZkrhXOa7KY%2BRYAtKvltIhqS4VODtblg7oIAHztGIWtScK9525XkeD2uqHolnaioqlLE7TdhTaVBuz7w7tHkG4s693cK8lDXPvxyResGbid%2FfvyURjUrFoqW5ip3pz8dQE6SKTiH%2Fc0Q71ex6OO8NINvFBDvgHiS9ZYNGJekR6EF5og4q23kzsYCBPTLiKYLPauoXZMzMEImMcpqQwJtJAFkM7jzPtfdzMWxTLnlvYBl%2Fn73ucLdbLbmyAHqdU6BGPX2E%2Bcc4UDNfLcW7qVFRA4tb5Yvz2TvwmStnEsEOLXeqteviPzMvcH3sR0mQFvIX9uAwtnpIQCUZsTSOI7eXI4TyxXcXS7Fz6xSQVHf5cVasXCtKgTlo0H8HztWg%2FQfCKi0FYm3lfzEkTKQmoDSjAWMB8JlFthL%2Fi9Fh0eWPYQugBMMsEbMtwWDMw3P3SyQY6pgFL6PwgNBePaJ89rexxqapT0RtES6D4ju8aotazxVGw03CGZpa0Vu1SiYpMz8l9qVRWpSzXr5VMuQuQebX3I5XxwfrbnDvjk8L89GatpbEWqG%2BQQT6ULYwcJJ6kS1KwNtGENlegn9KgQ8um5ke0WoJMHQfOjRm2i7iSG93g5VuJnLg149jnuA8lu8N77%2F9tkpAkg%2FqQHE%2FWM097Mb1lWudKLRE%2BQfxU&X-Amz-Signature=c6701ba0206bfff976af3d493ee467932641793046a6615d3c918be41fbb07bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
