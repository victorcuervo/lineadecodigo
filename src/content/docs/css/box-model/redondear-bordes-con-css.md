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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE2IP5UM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk4h4TN8LUzzAb8RRth3lP3P5RDwfFahRulvM9hpEFSwIhANyWI%2BoQFpMrzxL5%2FfWifOVoO%2BiLKJC22EsT%2B8aItXNjKv8DCHcQABoMNjM3NDIzMTgzODA1Igy2p6JBJOLG8XH%2F1b4q3AMeTQ2al6vPvYDAsXLEU5i7XMfzAIzgnon1n9VjD1QL0ghBSffgH9h00wGj6qGusrDDVOVNVl3Ro6KzBLWDqUABplKgJcTkalJM39F%2BWBoEqZWNaSP4vfNPeYyAMADDp68dEDuqHd6Wp%2FKRretrckxF2IUPsCzXxUhC0lARFt6PfGRI44R0Xl3%2FIlcSF8ZR2vegLvyJHKtX1W6SNsYB0dHa2hGBOYLAvE7Ibr3wpeAmdxF0s9j8hJjUCQcgEq9Ok9iQ7vnlxErEgwIPg3QlxrTRUtjuq0nK2GKADz57DeuvKdMCHRNsgiTDs0%2Bk5lHjlZ2Py7Fj8pN0uwUETTU0DUbuK31yYamXCuhp6FLsnKBeaJ7R%2FfsDNTFY%2FUCaaOLlYs4tpxjKMCTdzm6aITv1HTW1vECpPOmFkMJ8F%2BNW%2FVYm4wKQJ20s59%2Fg3s0zWkCAvrItaLLYf3f0r4LCQq2wjvVR8WQr2rZT3fWr4PM2%2BRCjlDkItmUJUBnnVgXtC3zcfQgcI%2F%2Bs9V2N1AkfiJDnnG9qd7eE5FZeUoflmgh7u4tALBsZ%2Bl%2F%2BjMcI%2FoFzhftE%2FoQ27hvDcNL4W5f5zYBe3OflP6ZotTvR4p8Eyi2JrxzYm1Wsm5O0Ly7RnoYUDDCEg4nKBjqkAa4fNsUmmJO%2BPcPezIm4mYI3GHJROe1Ryr0Y8vmYS1sO52QE2zXdtJ%2BuG%2BSj0dlc788bGT5tF3oMCX56GIqPgH7degch7j5PVvNrMKdv3VG3%2BYCp5%2Fs3vTEQ48dPhVA37NYQZEURLcRiBikSJ4wqE68ox%2FsEu5N2NwHZZsGCUi%2F2Dem51g6TBucMIUBAjWROZOWrtjIR0HOLqnJVbpADjZf%2BqJbh&X-Amz-Signature=942150f4940ae95abf194ebe5cce1f1da21c66ae1ad09f928392da9e71acba75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE2IP5UM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk4h4TN8LUzzAb8RRth3lP3P5RDwfFahRulvM9hpEFSwIhANyWI%2BoQFpMrzxL5%2FfWifOVoO%2BiLKJC22EsT%2B8aItXNjKv8DCHcQABoMNjM3NDIzMTgzODA1Igy2p6JBJOLG8XH%2F1b4q3AMeTQ2al6vPvYDAsXLEU5i7XMfzAIzgnon1n9VjD1QL0ghBSffgH9h00wGj6qGusrDDVOVNVl3Ro6KzBLWDqUABplKgJcTkalJM39F%2BWBoEqZWNaSP4vfNPeYyAMADDp68dEDuqHd6Wp%2FKRretrckxF2IUPsCzXxUhC0lARFt6PfGRI44R0Xl3%2FIlcSF8ZR2vegLvyJHKtX1W6SNsYB0dHa2hGBOYLAvE7Ibr3wpeAmdxF0s9j8hJjUCQcgEq9Ok9iQ7vnlxErEgwIPg3QlxrTRUtjuq0nK2GKADz57DeuvKdMCHRNsgiTDs0%2Bk5lHjlZ2Py7Fj8pN0uwUETTU0DUbuK31yYamXCuhp6FLsnKBeaJ7R%2FfsDNTFY%2FUCaaOLlYs4tpxjKMCTdzm6aITv1HTW1vECpPOmFkMJ8F%2BNW%2FVYm4wKQJ20s59%2Fg3s0zWkCAvrItaLLYf3f0r4LCQq2wjvVR8WQr2rZT3fWr4PM2%2BRCjlDkItmUJUBnnVgXtC3zcfQgcI%2F%2Bs9V2N1AkfiJDnnG9qd7eE5FZeUoflmgh7u4tALBsZ%2Bl%2F%2BjMcI%2FoFzhftE%2FoQ27hvDcNL4W5f5zYBe3OflP6ZotTvR4p8Eyi2JrxzYm1Wsm5O0Ly7RnoYUDDCEg4nKBjqkAa4fNsUmmJO%2BPcPezIm4mYI3GHJROe1Ryr0Y8vmYS1sO52QE2zXdtJ%2BuG%2BSj0dlc788bGT5tF3oMCX56GIqPgH7degch7j5PVvNrMKdv3VG3%2BYCp5%2Fs3vTEQ48dPhVA37NYQZEURLcRiBikSJ4wqE68ox%2FsEu5N2NwHZZsGCUi%2F2Dem51g6TBucMIUBAjWROZOWrtjIR0HOLqnJVbpADjZf%2BqJbh&X-Amz-Signature=624877efc0ce3f6dfb7ec921bf3fcb81e20798e45e5d9be8d2730e40f9a987ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
