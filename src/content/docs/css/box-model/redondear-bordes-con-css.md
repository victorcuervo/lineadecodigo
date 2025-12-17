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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEIWQQAA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrP%2Fgek1bHDhpA%2BAdT4VtBy3eakZsT1b%2B0OIKeSBpXUgIhAK3P8ltu%2F6eNMaAd9zSiyTq%2FN74u2fzLRWCjApxlWJB0KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywDqUck00oQD9jVj4q3ANxXdNZUZgkv%2FK3bY%2FBhcE6XHeS44%2BTQSoce1RGLmuVarvdyk05JbH2sf%2Bod9ZpNfVX515e5LbEBU2ZdI5tOW0VxJAjSC3phrLvOXz27Ma14%2F39V0Q%2BJ6%2FT5QYIT0498%2FJQku5i2uIlVI9T4wSu4PlAXpHM2pDIWLgLc9Z9qD3n536z5r8m88012rbFldgu3wfwOPBLS07iGT1J2m0VfZ9n7IbgLn9gWoO6WagvFNv%2BHWkwCDjhMZ4GvGxX1GB99TaekNNdrLssBOOOg2QDnJJjmDMDXmpPEuhUsNukk8Cph0Vdw5CARug6fNrmcQpn5wFQcOsIf9hzcXHfOJg3DKENFynrrpO%2Fkobh69PiuVOly9XrSFBhydBrmDji5n%2FqmD1t4O4qSpsr58VSsGtnEwnUYP0yy1eNKbS%2BV819iTlWhV2BqrA37zawnvdL6CwRl2Q2hPtFqcP%2FwDMAqxntBXs3xF2JNWJnYfvUcSF4u3P139pLcdOaZmYjNbXkS2YddDSkR%2FtLW5F3i%2BCbtlasqYW0V8siIZIHhaGNRvvT9A5HxHsP%2BTlIXRnnDLeUARWZ%2Bt%2Fryy7NnoCifwNG85z4tLMfopDMM1dkiVgFJ8hbVcZyhh4mWhvsyi%2BfeSsR%2FDC1n4vKBjqkAS%2BFJqCIedHoh3%2B33uoOHtm1VhEL1HXSFhQYXzeiO5K%2B8eDeU44aGDnS9DrSH7BhUhB9HZjdp7c8hziLsdbX%2BgyXc6HS2f0iUDJsxsqym1KSI2BoIUYjAZIOYok%2BSAIbywEaJzC5Z%2BTQoNKA1ZMiCOK%2FKGHP0dEZDmvGROchANzdO%2B%2BYg9jj8D5X1YnX3rgev4NGnhFK77cJib8E84L5h7jb3Adl&X-Amz-Signature=218dcb86bcec266fe3f1a891cd6b5af70ce74445c6c2db9e77351e1d7884e4f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEIWQQAA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrP%2Fgek1bHDhpA%2BAdT4VtBy3eakZsT1b%2B0OIKeSBpXUgIhAK3P8ltu%2F6eNMaAd9zSiyTq%2FN74u2fzLRWCjApxlWJB0KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywDqUck00oQD9jVj4q3ANxXdNZUZgkv%2FK3bY%2FBhcE6XHeS44%2BTQSoce1RGLmuVarvdyk05JbH2sf%2Bod9ZpNfVX515e5LbEBU2ZdI5tOW0VxJAjSC3phrLvOXz27Ma14%2F39V0Q%2BJ6%2FT5QYIT0498%2FJQku5i2uIlVI9T4wSu4PlAXpHM2pDIWLgLc9Z9qD3n536z5r8m88012rbFldgu3wfwOPBLS07iGT1J2m0VfZ9n7IbgLn9gWoO6WagvFNv%2BHWkwCDjhMZ4GvGxX1GB99TaekNNdrLssBOOOg2QDnJJjmDMDXmpPEuhUsNukk8Cph0Vdw5CARug6fNrmcQpn5wFQcOsIf9hzcXHfOJg3DKENFynrrpO%2Fkobh69PiuVOly9XrSFBhydBrmDji5n%2FqmD1t4O4qSpsr58VSsGtnEwnUYP0yy1eNKbS%2BV819iTlWhV2BqrA37zawnvdL6CwRl2Q2hPtFqcP%2FwDMAqxntBXs3xF2JNWJnYfvUcSF4u3P139pLcdOaZmYjNbXkS2YddDSkR%2FtLW5F3i%2BCbtlasqYW0V8siIZIHhaGNRvvT9A5HxHsP%2BTlIXRnnDLeUARWZ%2Bt%2Fryy7NnoCifwNG85z4tLMfopDMM1dkiVgFJ8hbVcZyhh4mWhvsyi%2BfeSsR%2FDC1n4vKBjqkAS%2BFJqCIedHoh3%2B33uoOHtm1VhEL1HXSFhQYXzeiO5K%2B8eDeU44aGDnS9DrSH7BhUhB9HZjdp7c8hziLsdbX%2BgyXc6HS2f0iUDJsxsqym1KSI2BoIUYjAZIOYok%2BSAIbywEaJzC5Z%2BTQoNKA1ZMiCOK%2FKGHP0dEZDmvGROchANzdO%2B%2BYg9jj8D5X1YnX3rgev4NGnhFK77cJib8E84L5h7jb3Adl&X-Amz-Signature=9940cc31f41eac6883c56bc2b443eb6ac07084d3cab268dab07ba2ba5292c2e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
