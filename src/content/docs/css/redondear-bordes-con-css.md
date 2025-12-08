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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVBHPZ24%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZ4X9xeVXnRinHBnpixnCqZ07%2F4Ms19ijq5931HE9R0AiBBZtz8KgFaPqCUF36LVbkYk6EfcO%2BSe3jQ5n2%2B8GFmzSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0xEHZITxuYT%2FpGVSKtwD5cAvEnEebYSDQIWtNxV1dsXkb4dyHO%2FGIMe%2B%2FZyC8u4P6XfmeAtKDbifN1qvUlRjKPvb%2F%2FUOcrxrm83JdSwQA3Wd%2BNa1DwqcdAVzKTrx4kIcVfsfKKxB4IQO8HhFb6vXgByVUaOQnhtRfa4mAQjzn%2FWPhS41jEtDh0bG84SRFl%2BSN156Ou5SVN%2B98Ss9J3IQ0vs5tkf37%2Fch2YmlJMnAMtWMvOZ%2BTFvLQBcbHb26H3WIrqwa1ZIsV0VCIsO5q4jsqgwLcJyxveuOjrrc3kmsl7CGwe6Y5%2F%2BrygsW7cCP7zQ2hRsUUNc5ipSRTY7V5GcWAI%2FQPbEJIVUQPHatz9TLLESr9%2BfqYgBrT%2BkkFmn1AS%2BNQ6%2BLmZb2CUGHZ95MtrxIcya7Nf2zIkMMxSdpvY0pdOxSf0q%2FXbXX0KaJsLV%2BXCAZMP%2BMe5CxBmEjTfrIawdqmEg1Iw8Ew369d2uSIoMfo%2FrehXORMK0TMxtERtvu4n411uozVvV7yWHBEanxkkALxDp8WWT7Iv9U4WRQ%2BClf8T2wl8IJrN%2FiwqvzG6rF8ebFF48ZiJcG9E73E7XslAZGEH%2FG8rNNEGhxK5tZMoDruY%2FXi2KBl24VgbvwUtMd9fFb9QXj9wbjcNGlytow%2BqHYyQY6pgGetZrLLwgCTdopVK%2FBTQXPUDq7sgaf6r4aWmMbnwmSg0J7WNH1AR1JDFkdbenYH8g55PM9YyJJPDGSz9ih9lZyj8jO97XvKZLLvP%2BZVDTkwr7UIgW7alNW%2B5E%2Bbzh4yYwq59Ot7XM7HfOtVEe5IOrtYycIRgcnhMvOnffzSy%2FulIz5YI0eXn6d%2B%2FxsUbA%2BqBbP7tPy1sZNtMvomV3iyT61T2bnsBgi&X-Amz-Signature=79b733f458255e6660b27bbc81e7e994184c8157ea0c05e145997480c139fd56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVBHPZ24%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZ4X9xeVXnRinHBnpixnCqZ07%2F4Ms19ijq5931HE9R0AiBBZtz8KgFaPqCUF36LVbkYk6EfcO%2BSe3jQ5n2%2B8GFmzSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0xEHZITxuYT%2FpGVSKtwD5cAvEnEebYSDQIWtNxV1dsXkb4dyHO%2FGIMe%2B%2FZyC8u4P6XfmeAtKDbifN1qvUlRjKPvb%2F%2FUOcrxrm83JdSwQA3Wd%2BNa1DwqcdAVzKTrx4kIcVfsfKKxB4IQO8HhFb6vXgByVUaOQnhtRfa4mAQjzn%2FWPhS41jEtDh0bG84SRFl%2BSN156Ou5SVN%2B98Ss9J3IQ0vs5tkf37%2Fch2YmlJMnAMtWMvOZ%2BTFvLQBcbHb26H3WIrqwa1ZIsV0VCIsO5q4jsqgwLcJyxveuOjrrc3kmsl7CGwe6Y5%2F%2BrygsW7cCP7zQ2hRsUUNc5ipSRTY7V5GcWAI%2FQPbEJIVUQPHatz9TLLESr9%2BfqYgBrT%2BkkFmn1AS%2BNQ6%2BLmZb2CUGHZ95MtrxIcya7Nf2zIkMMxSdpvY0pdOxSf0q%2FXbXX0KaJsLV%2BXCAZMP%2BMe5CxBmEjTfrIawdqmEg1Iw8Ew369d2uSIoMfo%2FrehXORMK0TMxtERtvu4n411uozVvV7yWHBEanxkkALxDp8WWT7Iv9U4WRQ%2BClf8T2wl8IJrN%2FiwqvzG6rF8ebFF48ZiJcG9E73E7XslAZGEH%2FG8rNNEGhxK5tZMoDruY%2FXi2KBl24VgbvwUtMd9fFb9QXj9wbjcNGlytow%2BqHYyQY6pgGetZrLLwgCTdopVK%2FBTQXPUDq7sgaf6r4aWmMbnwmSg0J7WNH1AR1JDFkdbenYH8g55PM9YyJJPDGSz9ih9lZyj8jO97XvKZLLvP%2BZVDTkwr7UIgW7alNW%2B5E%2Bbzh4yYwq59Ot7XM7HfOtVEe5IOrtYycIRgcnhMvOnffzSy%2FulIz5YI0eXn6d%2B%2FxsUbA%2BqBbP7tPy1sZNtMvomV3iyT61T2bnsBgi&X-Amz-Signature=e83ca54e70fcb7653821df3983e246dbea66329d0ae4053da7d9fd7861ca272a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
