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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTXU22V3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnLk1Cbv9%2FM6V7nbenzjxKeZpbwsjoYJkz6rkMiCnAwIhAP%2Bq1ACybPMAQxGpSY%2F1FxzVf7K1xnyCwWGxthDuZRADKv8DCGEQABoMNjM3NDIzMTgzODA1Igxkie5MH0v3e2pRYL0q3APiNWW%2FemhWbFtcZgp3edSHtODJLoK4qpys7lgKKIriIPZlyTbEMn8%2Fg5zhvfhG%2BwLqbHV2tugpGr25FTFSokikI6o2zxzFxW%2Bc%2BoKeh425Fw%2BvZ0bqy99eVTuXjZ1OAinf029929%2BRxBEbltEGv9o%2FAK93hkbnE6bDczTkqbRCmPZqb1nFEYIzO%2BDHN80f4UEUiJYE6P33RU6IFNbUy8qONxWNDIZqNV6%2FBkfYewaioQQCyH2DWFHz03wQ5ZnL79x0nbMb56FHh4Kb05i2d0%2FvJ7HMYg8lpOOf23eGjHBMHe9XHtoLEMSHFNqec85EoynY3YESMxdhAzUiN8%2B7emCkYRk2tIDvAZ8p6BvpsabulZIzq%2FWRfZ4xTFRrFCUUSnxDN%2BmSRCk5U7M5asDPdrYvu8st23w6SA7tWLJ%2BNZvFgUHvo4IiI%2FPYf9WobvCwSfzPeE265nAGn04wqacAXt3BWCH631r9RKhgUdwMC%2Fj7WZ0qnuHFLwl2G3l8a3S%2BejsCvG8C65l9BfWAGzfJw2bGqIUbqe1lIwUrQVYpQh%2FCv1ArNDX%2BywNu7wF7cfxrcMJqsu8jK1qPay8xJx75bcCM3cwUeOZYalbgrhUyzBVs3xrAxkrt075%2BqKO44zCR9MvJBjqkAZk1Zwf5aluXhXkZr2tstjWQiQATAd0i7HqEbJPfRWpNFv8reBHr9jJgRcxzpYcPchT5g5UgXLukQ%2B%2BpXEMlFIcfqHWU2WNxqPRqe8u8Fylcq0UM7oowTZpN78I9wISx0D0NmlqfmJHLjkvFAXOor6WiR3FpyD9rZ7uFQY3tkUnoEKc%2FSasqYobV8IbmAVKLRRlDFNlmH6uJpD6VJsDqzZaq1Zza&X-Amz-Signature=b5ef350e375ade56dd1305d3ef773c6d83ff0509e38c3e43ecbf5d4b9965609c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTXU22V3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnLk1Cbv9%2FM6V7nbenzjxKeZpbwsjoYJkz6rkMiCnAwIhAP%2Bq1ACybPMAQxGpSY%2F1FxzVf7K1xnyCwWGxthDuZRADKv8DCGEQABoMNjM3NDIzMTgzODA1Igxkie5MH0v3e2pRYL0q3APiNWW%2FemhWbFtcZgp3edSHtODJLoK4qpys7lgKKIriIPZlyTbEMn8%2Fg5zhvfhG%2BwLqbHV2tugpGr25FTFSokikI6o2zxzFxW%2Bc%2BoKeh425Fw%2BvZ0bqy99eVTuXjZ1OAinf029929%2BRxBEbltEGv9o%2FAK93hkbnE6bDczTkqbRCmPZqb1nFEYIzO%2BDHN80f4UEUiJYE6P33RU6IFNbUy8qONxWNDIZqNV6%2FBkfYewaioQQCyH2DWFHz03wQ5ZnL79x0nbMb56FHh4Kb05i2d0%2FvJ7HMYg8lpOOf23eGjHBMHe9XHtoLEMSHFNqec85EoynY3YESMxdhAzUiN8%2B7emCkYRk2tIDvAZ8p6BvpsabulZIzq%2FWRfZ4xTFRrFCUUSnxDN%2BmSRCk5U7M5asDPdrYvu8st23w6SA7tWLJ%2BNZvFgUHvo4IiI%2FPYf9WobvCwSfzPeE265nAGn04wqacAXt3BWCH631r9RKhgUdwMC%2Fj7WZ0qnuHFLwl2G3l8a3S%2BejsCvG8C65l9BfWAGzfJw2bGqIUbqe1lIwUrQVYpQh%2FCv1ArNDX%2BywNu7wF7cfxrcMJqsu8jK1qPay8xJx75bcCM3cwUeOZYalbgrhUyzBVs3xrAxkrt075%2BqKO44zCR9MvJBjqkAZk1Zwf5aluXhXkZr2tstjWQiQATAd0i7HqEbJPfRWpNFv8reBHr9jJgRcxzpYcPchT5g5UgXLukQ%2B%2BpXEMlFIcfqHWU2WNxqPRqe8u8Fylcq0UM7oowTZpN78I9wISx0D0NmlqfmJHLjkvFAXOor6WiR3FpyD9rZ7uFQY3tkUnoEKc%2FSasqYobV8IbmAVKLRRlDFNlmH6uJpD6VJsDqzZaq1Zza&X-Amz-Signature=1c0297abfa3505679f5f9ade4643e11bf72fea5cef25522f5d6b61bc380b9343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
