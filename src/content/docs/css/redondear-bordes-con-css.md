---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNF5LCYK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDkXEL%2BmZ%2BLSHIwgcuzEK9hu%2BSAzHImTYd8uawK8RnH1wIhAOCrbqtVKujyG92dLIqdZLyaeseQbP5ZsZVlcozG6x8OKv8DCD4QABoMNjM3NDIzMTgzODA1IgyGrzvyp5zMb1muyggq3AOXNOHnS9g%2FcayrLxeP1rvip2OiRZFoEVxonUWT1f566zOMh%2Fc8KwcHhEi7yuLiM%2F0jqSxyOGrOYIecKYw0gduZXPIEgn%2Fgs3jA2KlmNUt7QThbIzC9Hn%2ByOR3oiERChrLFh8Ul2SXD1J4tHGhGJNS53%2FnvEFnDsc38qW%2FViCfHbPhcE5tzfR7GgvoS8fTbODpY5fWiisWLlyUcDD3XHiGqsXPTutuxDHT7KedGtI9dZrkq7eE7FjZ7pwt7du2%2Fc0Pi0ZutNV%2BACxUc6aYfzIzXToh6myTtXXRcYUhlI%2FV4A58rIZD9A7c0bk6fmhPIQ98hz66iWu3n5BryiHgey8HmZX3iZt%2B4Q10me69FXWlpZGCVSfGRC4aXfEKjVBAt2gBHsBZoY6RnqJjcElw8XG2KmHVtLFJ3mNy88HtJniK8U582DKB%2B191fmMI%2BcsFMUffnULLFmhj30JG%2BP%2F4eC8XckNjWVk%2Bx1jsPDyY7CahNFQ3f6NqWHHRQc7lm%2FxlWieeW0E5ZaOnsD5IAl5JNo1uRTn0m4v3HGzW7peXSKvkBTouSU%2BLumltT5ASEp5PoYldKAt8dby%2BJRsClRs4HQLcwz5zc%2BwL0lk%2ByH6C0%2BJhVbcPbW2tpHdbXBh%2FyqDDyrsTJBjqkAQM%2BBL4EWXB5fq%2FKEgT9mz6OjJnsjDnjp6iYV71AdMWOPp5ve2Q8geuy6SUNsq%2Fs7dv%2F2IM%2Bi5lJCE4944ZxMGVReQpiJ2mm5gHN2R7kYUuQ5HZa5SItmYg8CMYsc9UKTdF6GCFYXx5HJ8A8voh%2FW2v1uu29tQsT6SRctLytkEfGO05AAdBN0WYiNurTN5Y%2FX9VKVhOJL%2BcT1Mw3%2BbgMRbHW2tEE&X-Amz-Signature=36e5de1eae7c16bbdf67f753e6bd9dddc1145d4303579bff9f17280e4b5ca555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNF5LCYK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDkXEL%2BmZ%2BLSHIwgcuzEK9hu%2BSAzHImTYd8uawK8RnH1wIhAOCrbqtVKujyG92dLIqdZLyaeseQbP5ZsZVlcozG6x8OKv8DCD4QABoMNjM3NDIzMTgzODA1IgyGrzvyp5zMb1muyggq3AOXNOHnS9g%2FcayrLxeP1rvip2OiRZFoEVxonUWT1f566zOMh%2Fc8KwcHhEi7yuLiM%2F0jqSxyOGrOYIecKYw0gduZXPIEgn%2Fgs3jA2KlmNUt7QThbIzC9Hn%2ByOR3oiERChrLFh8Ul2SXD1J4tHGhGJNS53%2FnvEFnDsc38qW%2FViCfHbPhcE5tzfR7GgvoS8fTbODpY5fWiisWLlyUcDD3XHiGqsXPTutuxDHT7KedGtI9dZrkq7eE7FjZ7pwt7du2%2Fc0Pi0ZutNV%2BACxUc6aYfzIzXToh6myTtXXRcYUhlI%2FV4A58rIZD9A7c0bk6fmhPIQ98hz66iWu3n5BryiHgey8HmZX3iZt%2B4Q10me69FXWlpZGCVSfGRC4aXfEKjVBAt2gBHsBZoY6RnqJjcElw8XG2KmHVtLFJ3mNy88HtJniK8U582DKB%2B191fmMI%2BcsFMUffnULLFmhj30JG%2BP%2F4eC8XckNjWVk%2Bx1jsPDyY7CahNFQ3f6NqWHHRQc7lm%2FxlWieeW0E5ZaOnsD5IAl5JNo1uRTn0m4v3HGzW7peXSKvkBTouSU%2BLumltT5ASEp5PoYldKAt8dby%2BJRsClRs4HQLcwz5zc%2BwL0lk%2ByH6C0%2BJhVbcPbW2tpHdbXBh%2FyqDDyrsTJBjqkAQM%2BBL4EWXB5fq%2FKEgT9mz6OjJnsjDnjp6iYV71AdMWOPp5ve2Q8geuy6SUNsq%2Fs7dv%2F2IM%2Bi5lJCE4944ZxMGVReQpiJ2mm5gHN2R7kYUuQ5HZa5SItmYg8CMYsc9UKTdF6GCFYXx5HJ8A8voh%2FW2v1uu29tQsT6SRctLytkEfGO05AAdBN0WYiNurTN5Y%2FX9VKVhOJL%2BcT1Mw3%2BbgMRbHW2tEE&X-Amz-Signature=691fdbb2841014822b8febd661b220d7690a559c60e4286bf11d4e5ff6b38b0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
