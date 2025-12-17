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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKCRGDG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyUOujR6LNdn2RFjLvMFny%2By6beScsbR27q1Kg2cvISAiEA9ZZzog0zjEI8USUVhmneKxcfiVxxNhSMtEQHTPX26SAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8yPSbRQpBJvTRBySrcAwlDHV8qb5TLANAlITKX4I925odI2blobxuTSzXMwHUv7u%2FDa8u06HJ8seSnYSlJ%2BJKsF2hTuk1QrhKph43OqBqZQR31IewJzyHNw1g6DfxbyySLepQrRiZ76n%2BKfSaGAB2RZA0iu0dlMbOOsZLpMZB7HrHDrALCgtNDIEwm8C%2BWL2PfuU6ajAYAeUOc7IG5cqbssXKnXq9TsoTYbbCep2cIHCJRzpkG2%2BWzQBvHlmuExU5TQOkVDqaTuYTzGkGOvy1ADnAFdwHWspJjEjqY2Fk4kh5nKfB1FkLB0mRuUjK5bOdJuozm1r2nGCp7pfr232V%2BmqgUbActXKGwRWAoeerf20BbB3jyKew5SkvZVQ0%2BYCLi98uVeEx%2BSNYdl%2BsL%2BZO3ugaSQsNhNltuV5HVw2Rwk0SJs0RVy9RVcmjNWYoClqTKpvn1KDxY2meLMFUuudN6qtG7DkzeD9VcfU6Vao3sAql7Ze%2F7lqiGjICftV00OavhOJstieL0O%2FqhwSIVTZZsDYbC%2BiSnacx4ZVzY%2FseNkWIHMjamDp%2FWw6K7L7CSNgaqr%2BWG5bjZ8GCHv78n2DwYjk0Lpxj8b5imDg9TKJBaCWrICIfMxbedWZb2QouQNDxL%2FiVsckPmYfQqMJ2gi8oGOqUBZfbyNFdjPQQbdJEYMpK%2Flr6Pdsa8Y5q9EZZt6wqUBc%2Ffv2QC2xukX7X8v%2FC9WF4uFJpvxyLJQsSVfyRWUiHELBJFjjvkXF%2FHA8FixOX1DYhpxsbnPd1ftJhGN3gLM0KlL%2Bjr7G2slD%2F8FwfDD9Lx0vtbbI6Os4BZ3LSUL6XIoQ8LYA5FCPpFEUrrMjq4nSxx4sdXj5QDzKBERfZDeCCH6TTbKI4x&X-Amz-Signature=6dcd2acd9fc7d4b1b2399d1f83ca8bd9a98b90702f018ec7e25701f702b81a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKCRGDG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyUOujR6LNdn2RFjLvMFny%2By6beScsbR27q1Kg2cvISAiEA9ZZzog0zjEI8USUVhmneKxcfiVxxNhSMtEQHTPX26SAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8yPSbRQpBJvTRBySrcAwlDHV8qb5TLANAlITKX4I925odI2blobxuTSzXMwHUv7u%2FDa8u06HJ8seSnYSlJ%2BJKsF2hTuk1QrhKph43OqBqZQR31IewJzyHNw1g6DfxbyySLepQrRiZ76n%2BKfSaGAB2RZA0iu0dlMbOOsZLpMZB7HrHDrALCgtNDIEwm8C%2BWL2PfuU6ajAYAeUOc7IG5cqbssXKnXq9TsoTYbbCep2cIHCJRzpkG2%2BWzQBvHlmuExU5TQOkVDqaTuYTzGkGOvy1ADnAFdwHWspJjEjqY2Fk4kh5nKfB1FkLB0mRuUjK5bOdJuozm1r2nGCp7pfr232V%2BmqgUbActXKGwRWAoeerf20BbB3jyKew5SkvZVQ0%2BYCLi98uVeEx%2BSNYdl%2BsL%2BZO3ugaSQsNhNltuV5HVw2Rwk0SJs0RVy9RVcmjNWYoClqTKpvn1KDxY2meLMFUuudN6qtG7DkzeD9VcfU6Vao3sAql7Ze%2F7lqiGjICftV00OavhOJstieL0O%2FqhwSIVTZZsDYbC%2BiSnacx4ZVzY%2FseNkWIHMjamDp%2FWw6K7L7CSNgaqr%2BWG5bjZ8GCHv78n2DwYjk0Lpxj8b5imDg9TKJBaCWrICIfMxbedWZb2QouQNDxL%2FiVsckPmYfQqMJ2gi8oGOqUBZfbyNFdjPQQbdJEYMpK%2Flr6Pdsa8Y5q9EZZt6wqUBc%2Ffv2QC2xukX7X8v%2FC9WF4uFJpvxyLJQsSVfyRWUiHELBJFjjvkXF%2FHA8FixOX1DYhpxsbnPd1ftJhGN3gLM0KlL%2Bjr7G2slD%2F8FwfDD9Lx0vtbbI6Os4BZ3LSUL6XIoQ8LYA5FCPpFEUrrMjq4nSxx4sdXj5QDzKBERfZDeCCH6TTbKI4x&X-Amz-Signature=9d1644f6022a47ff8540f5b109ec7b6c9a7e1aa1646f5164a51851a068ef0843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
