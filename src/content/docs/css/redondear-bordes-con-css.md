---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666APYRQFF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD9uaoyX8FUmobzH%2FZ0z3ldpXQSdMOHmgWY%2Bug2%2B8h7xAIhAMGACNoQv64c9EWYLyjitqqDzd3o049FJoDe8v3zYhpyKv8DCDYQABoMNjM3NDIzMTgzODA1IgylFdejMfPmFl70GY0q3AN5W3wRgedA8Aqsc%2BNQUPivp6Ar7rI428TWiYu%2FxVJd6cxEc4oJDoWK8R%2BwqRtDw8zX6%2BVdgtnHKB1%2BCnAVg4ejfo1GAilGMbhGQ3OLqWUjCaHsTZLdAGQADGpP8b3KQaQeib3jw57f9XbHRX%2BPjWfgiITvo5uWEz%2BcAuzNNqoBISrGd1xBI4p1IgAa1c27NdBhzZG1I5EXaZAH10U2bCwSLvFeA24hk1rM%2F27ct%2BGI840%2BTXJxBUZFx%2FDvSM6qfznAGVP%2B7LGtyOIbxhcTyC%2BAUhUjOwTTtv%2FOtH8E1lCu3fxTjPnat%2FsWlc7WOLgSQr9Cb1LDNxv18vNWHnv42VP9weal0GvsRGTLO1aq2egrycWdDvU3nenpythCjDYXGX%2FgvToCEBNcVes%2F%2BVRK7x3%2F52uwBrp4xWn8ffcvXOq6DWLDRfTBfwUYmHbffb%2Fnt9lTX78q8SdlAHuAy1phFLxyVbvYqhKasOGZHa4NrZCPMON4i4bX5aJB8PgRe9sEnj8OUgLckpDy7i4Z2qE%2BRJViEsU%2FJzYjyKP6ZeQe6FUI%2FMZRqHnaF6USbrG9hZR0bCsL6zP%2FR9w45gP3HaRw%2FgsqkrfVkmU1o6eIkHYU731h7jWpWWeFGL1dVtjfmjClvcLJBjqkAcerD3kdAMYl75p%2BO6Gb1P22Cyh2t%2FUyIIuPWEH40BHb9z4wSoDuiuF5IteR01R7eMlVkbVxsSbU9HG8hHtKaC0fQ5q2Y1x7GsPtVEfBZMEjWfPCvXl5jplH6l8ardoUhWBeuXarLq9mldTrOjU6D3Y3peZpnjrDwsUk8jk618J1HF1zAvg4GzbxZVEeswEKmTUuPdo09Jzk75MO3T1wULq0s9hz&X-Amz-Signature=468679adf1f958289ede6ba4db58988040c2c168d545e6f5559ed26b62200c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666APYRQFF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD9uaoyX8FUmobzH%2FZ0z3ldpXQSdMOHmgWY%2Bug2%2B8h7xAIhAMGACNoQv64c9EWYLyjitqqDzd3o049FJoDe8v3zYhpyKv8DCDYQABoMNjM3NDIzMTgzODA1IgylFdejMfPmFl70GY0q3AN5W3wRgedA8Aqsc%2BNQUPivp6Ar7rI428TWiYu%2FxVJd6cxEc4oJDoWK8R%2BwqRtDw8zX6%2BVdgtnHKB1%2BCnAVg4ejfo1GAilGMbhGQ3OLqWUjCaHsTZLdAGQADGpP8b3KQaQeib3jw57f9XbHRX%2BPjWfgiITvo5uWEz%2BcAuzNNqoBISrGd1xBI4p1IgAa1c27NdBhzZG1I5EXaZAH10U2bCwSLvFeA24hk1rM%2F27ct%2BGI840%2BTXJxBUZFx%2FDvSM6qfznAGVP%2B7LGtyOIbxhcTyC%2BAUhUjOwTTtv%2FOtH8E1lCu3fxTjPnat%2FsWlc7WOLgSQr9Cb1LDNxv18vNWHnv42VP9weal0GvsRGTLO1aq2egrycWdDvU3nenpythCjDYXGX%2FgvToCEBNcVes%2F%2BVRK7x3%2F52uwBrp4xWn8ffcvXOq6DWLDRfTBfwUYmHbffb%2Fnt9lTX78q8SdlAHuAy1phFLxyVbvYqhKasOGZHa4NrZCPMON4i4bX5aJB8PgRe9sEnj8OUgLckpDy7i4Z2qE%2BRJViEsU%2FJzYjyKP6ZeQe6FUI%2FMZRqHnaF6USbrG9hZR0bCsL6zP%2FR9w45gP3HaRw%2FgsqkrfVkmU1o6eIkHYU731h7jWpWWeFGL1dVtjfmjClvcLJBjqkAcerD3kdAMYl75p%2BO6Gb1P22Cyh2t%2FUyIIuPWEH40BHb9z4wSoDuiuF5IteR01R7eMlVkbVxsSbU9HG8hHtKaC0fQ5q2Y1x7GsPtVEfBZMEjWfPCvXl5jplH6l8ardoUhWBeuXarLq9mldTrOjU6D3Y3peZpnjrDwsUk8jk618J1HF1zAvg4GzbxZVEeswEKmTUuPdo09Jzk75MO3T1wULq0s9hz&X-Amz-Signature=9f3634caf0da5919e994e1f0d8c25fc321d573109bf2d3629211e0ca90ad02b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
