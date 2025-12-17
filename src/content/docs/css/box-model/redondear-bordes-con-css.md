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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2A2KYWZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2R5r6hq%2BZ65PofensubkYlrJgB2omZqo%2B0%2F%2F1WatQ7gIhAO%2F7TXO5B%2FTW8N3xWH7Y6xDAy0L2njbbGMDzyxEhJqbNKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2emR%2BgAPbyug1Hxwq3AOg%2FnIEt5HHTXuEU9LcYdFjogsSkO9ALcUYQs77grE%2BoK8kWQaKhyFuRhMrXmF7Tk2Eqg6Us%2BupV00TCjSMPcccgAsKjHbZ2g%2BHqjcSIcG85RQ%2FF2cFN6tw%2FIBi2gW3Imeok8%2Fli1iVj7moydsE724aRqNBHP7DNan2iAzBcWEDl6bG%2BPe0W%2FMxOo2lRuTGS5CbsgyXNFpjBZUJvs2ht81ev4eoM8YxCzVmUNuFQ2ko8mKicfYgwoEiJW6w612tiDuede2y%2FEvQN0B3sce9Gd596EMCRxNdfLAzvDMBXpZfULyPcvy6VGvcANNHi%2BZYdCew0ouCjmkUsjBVD68%2B1UfEKZqzTTH9Ik68CjYNPdMNxuBITAt8621QKRKQtaY%2BC%2F6e6b0zx4aIs434bUqPaxAcokJ3Dfjjpw9CdsMyD0yV9PlK2RzmvKK0dHfdpRDEIcvjlKdD4BrjXinlAa33httdJXaxP4A4Rjd7zkravloQuRot%2Bp0wbyIOgxLtayF8Pi1IEbC6NtxTOO01EPLlt%2FSrxckgzaz0Gk8YU1FmpieCDQarD%2BQjrkJsnJmHhE7jtLSQaQcYlIuvkCBmPiciWPLnLSCos1BQyFu36bLZf%2Be2a8Qa37aMWEJXfhf2YDCyjIzKBjqkARa711ayunVz%2B7O5QR71ZaQrFNVqKJ20J1taRAy%2BZxTuwrMe4EPA4kKPR6eLFHU1Yrt%2F4v%2FwTOVD8ijkHV0fhgR1acM%2F8TDE4rKLfy1CMcgznYEZ9R6gkHAjomIBqyKOhg1rwxQBRUqGMZZg1fQpE9ZLpiUN3Ib6LgqOIYNF3ivwYgfBXyhGdfIgpI8SqfNq%2FiQ367Lf0QIsYRmKl0KBcax%2Bw6jO&X-Amz-Signature=d4be58e21b0bbc264db5549a5d3ff212b1909b93d6a5cda16b60f9ee3ab93f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2A2KYWZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2R5r6hq%2BZ65PofensubkYlrJgB2omZqo%2B0%2F%2F1WatQ7gIhAO%2F7TXO5B%2FTW8N3xWH7Y6xDAy0L2njbbGMDzyxEhJqbNKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2emR%2BgAPbyug1Hxwq3AOg%2FnIEt5HHTXuEU9LcYdFjogsSkO9ALcUYQs77grE%2BoK8kWQaKhyFuRhMrXmF7Tk2Eqg6Us%2BupV00TCjSMPcccgAsKjHbZ2g%2BHqjcSIcG85RQ%2FF2cFN6tw%2FIBi2gW3Imeok8%2Fli1iVj7moydsE724aRqNBHP7DNan2iAzBcWEDl6bG%2BPe0W%2FMxOo2lRuTGS5CbsgyXNFpjBZUJvs2ht81ev4eoM8YxCzVmUNuFQ2ko8mKicfYgwoEiJW6w612tiDuede2y%2FEvQN0B3sce9Gd596EMCRxNdfLAzvDMBXpZfULyPcvy6VGvcANNHi%2BZYdCew0ouCjmkUsjBVD68%2B1UfEKZqzTTH9Ik68CjYNPdMNxuBITAt8621QKRKQtaY%2BC%2F6e6b0zx4aIs434bUqPaxAcokJ3Dfjjpw9CdsMyD0yV9PlK2RzmvKK0dHfdpRDEIcvjlKdD4BrjXinlAa33httdJXaxP4A4Rjd7zkravloQuRot%2Bp0wbyIOgxLtayF8Pi1IEbC6NtxTOO01EPLlt%2FSrxckgzaz0Gk8YU1FmpieCDQarD%2BQjrkJsnJmHhE7jtLSQaQcYlIuvkCBmPiciWPLnLSCos1BQyFu36bLZf%2Be2a8Qa37aMWEJXfhf2YDCyjIzKBjqkARa711ayunVz%2B7O5QR71ZaQrFNVqKJ20J1taRAy%2BZxTuwrMe4EPA4kKPR6eLFHU1Yrt%2F4v%2FwTOVD8ijkHV0fhgR1acM%2F8TDE4rKLfy1CMcgznYEZ9R6gkHAjomIBqyKOhg1rwxQBRUqGMZZg1fQpE9ZLpiUN3Ib6LgqOIYNF3ivwYgfBXyhGdfIgpI8SqfNq%2FiQ367Lf0QIsYRmKl0KBcax%2Bw6jO&X-Amz-Signature=db37900b7affde2d9cf63d3143fd0134b75a8f559bf2078261d5b8605b3a3c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
