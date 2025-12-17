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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZBGPHI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW2VrfjKsWtvMQTjwuhGJ4X9dpqFZoAihGOtzgQJdGAgIhAKXL0iXWAz%2B%2FmkEJEiAUSmoK%2FjCrHul%2BMzTlUyAID2fSKv8DCHsQABoMNjM3NDIzMTgzODA1Igy835LkkobooycmXtgq3AOhhEwsI3B6eKWGlYn%2BCwAonXSx01AZsWwHgxoqbtK%2FlzcZMqfK8RwdAR%2BtIyx2%2BkPC%2BDNnfVxLyWvtntIwRZ2gxMPVJ97XyF7caETIJtLsRNZa%2FnA3w1K93vmCXCcZEqogl0QboB3fJWB8Mm7UCsPiiV%2FesbLQWH8ogTBNviA7ZDCrGVN9%2F2WQC3RrndqOa3rkjVPD1rTPMQ4sGpcB6pjlEtklO3amKG9IOZY6WcfMzzdAkd6rr7e6avFWiUgw0MEpu4sf4zLzHz9pcHWX9Q2SWOlXzTva%2BystlYMYUAmBHQE3WoaEaVc9ZNCNWbZMEUnuXHXQlu%2FUz3XGrWfz0%2FWhnvb40k8pBxO4j1PZuVIYjgaX1cGBissJ0U4mfVpsoTSFM4aW8BOpulskEy5u2nWJoiRBVf8LNE49ijEZHaAmUJrDq9rbKHG7OwCqwzUmg0zbxbkqFOSXEZcShYcgyif%2FBA97wCUvgJGGLA2lcwamBaggHzkAVw4Q1hQ3ndFo%2BiFkzMDjy%2BwGHeSL1buzJNL1zwanFQOtPLQLPNev%2F9b3zs2hXn0yIP9KWuB8ki7Yax4x3HLLmPizhOqhZzv7cGI%2F4gixhq4kOcFlepH87xvDXzOUp5SU2eOSZ7iN5jC374nKBjqkAdRVk03%2BDoYXRUkzMnm%2Bg9Ibd7Wu4XtDxf9RizIbPPAHndn0TqSedrKC%2BqzO06bsY6sU%2FRR2LVn3jYxwPeIGuG2OvgYiWBCXNVSe4VpRqyEIvVToioCdJJWOSuFtq20Qb5Gzx98qnP5I7UFFqYP9AHWyEJKKWbiFhsN7cGIJoByfEHVWFGnVC%2BgzOhFmudzJWASaarH6lxphjb0JsvSmaXNwBcgZ&X-Amz-Signature=5ac0f394fb4ed7e82255772514cf30d506e717a679ce44a5cae496fb22ff9141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZBGPHI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW2VrfjKsWtvMQTjwuhGJ4X9dpqFZoAihGOtzgQJdGAgIhAKXL0iXWAz%2B%2FmkEJEiAUSmoK%2FjCrHul%2BMzTlUyAID2fSKv8DCHsQABoMNjM3NDIzMTgzODA1Igy835LkkobooycmXtgq3AOhhEwsI3B6eKWGlYn%2BCwAonXSx01AZsWwHgxoqbtK%2FlzcZMqfK8RwdAR%2BtIyx2%2BkPC%2BDNnfVxLyWvtntIwRZ2gxMPVJ97XyF7caETIJtLsRNZa%2FnA3w1K93vmCXCcZEqogl0QboB3fJWB8Mm7UCsPiiV%2FesbLQWH8ogTBNviA7ZDCrGVN9%2F2WQC3RrndqOa3rkjVPD1rTPMQ4sGpcB6pjlEtklO3amKG9IOZY6WcfMzzdAkd6rr7e6avFWiUgw0MEpu4sf4zLzHz9pcHWX9Q2SWOlXzTva%2BystlYMYUAmBHQE3WoaEaVc9ZNCNWbZMEUnuXHXQlu%2FUz3XGrWfz0%2FWhnvb40k8pBxO4j1PZuVIYjgaX1cGBissJ0U4mfVpsoTSFM4aW8BOpulskEy5u2nWJoiRBVf8LNE49ijEZHaAmUJrDq9rbKHG7OwCqwzUmg0zbxbkqFOSXEZcShYcgyif%2FBA97wCUvgJGGLA2lcwamBaggHzkAVw4Q1hQ3ndFo%2BiFkzMDjy%2BwGHeSL1buzJNL1zwanFQOtPLQLPNev%2F9b3zs2hXn0yIP9KWuB8ki7Yax4x3HLLmPizhOqhZzv7cGI%2F4gixhq4kOcFlepH87xvDXzOUp5SU2eOSZ7iN5jC374nKBjqkAdRVk03%2BDoYXRUkzMnm%2Bg9Ibd7Wu4XtDxf9RizIbPPAHndn0TqSedrKC%2BqzO06bsY6sU%2FRR2LVn3jYxwPeIGuG2OvgYiWBCXNVSe4VpRqyEIvVToioCdJJWOSuFtq20Qb5Gzx98qnP5I7UFFqYP9AHWyEJKKWbiFhsN7cGIJoByfEHVWFGnVC%2BgzOhFmudzJWASaarH6lxphjb0JsvSmaXNwBcgZ&X-Amz-Signature=64bb5692426ddb69e981af0eb1b3e885686a51c220eafdeec0ee83f8cf39fd13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
