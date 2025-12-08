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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQVX7LHZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ%2Fu9SesU%2FhDLVoN8S%2BzIs1SQ%2Fc96v9eSiIq4bW52gfwIgO2OqKPXKZOcu49Z20yraAJlSz0oRfAQnH6TgsesEcEIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtz4GJB0MHY953xoircA32YHCOqhR4q0hKg2Z%2FGyLNTnmhNNj%2FC5%2FUk3bgze%2FvK%2BIRiwyafbqzLVyRyEnqiMGY4LtDCJT2dtpVQyiHSN%2BEXsJjR1EwaL492WGwB1UZUa359mba9BUmGUBb0KC1DtIY7c0lhfc1cxTEfwMix0rYEDKVOGDwZLu0u2w2a0%2F%2BrEKbwG%2BrgCZyqPJ3j8Kn0IufY%2BMlKF8iP6oVXuVBncXInlKdA837gxtXpKuo8H2b8JH%2F69FnBbL1PZZ7InzZXpbZUfAMDm6TixomKvpW2plhX4pxTZz%2Fza5hEZSnQiWNV8TrCkJkK0dL0KMDPDF5poJ1rFFGHoM%2Be8lvalsP0GONn92e14oCoe28XioxLUVKGZF8QFC%2F%2B5Qjd5FElFVTCbNc1Jhw8eyXT9kJDj%2Fp8lqFR%2FXhAm9sKUugJPaG2bLbH4NcxywlK4bkIg6MVQ7WfSAvVB5Z945Rq0t6sAdCteowxe9oJvkYjfBufYY4P%2Bo8As0pNN8JgxJX%2BD725mN7sxCqfbHpKMYWxbKzkgmg%2BfPtK3kQR8jZwEzpqFFs1RJoMWQAfHfB9K6RR5B5uW0OZFSQ1ywe%2Fs%2BMSiS0jIzsuGS1udEVbA%2FAGeQxUTEFEkE8zxgVBbCDwQqlF1pMLMImH3MkGOqUBNwKQZY2dS8leBU9Y5GPnkTx8X38CaKlKHsqLcZ0yUZJFbOLfoFLhRvo8EQd7UoGEm46BrE8FlE6kLFPcxYeRGCWMM4oebE%2BDU5DcOC2kV%2FT8lRQHjxHzO79y%2BH5ruZmiy6GsA0juybJPaeJ93t1a%2BqHn%2FgMOmGX4hT%2FQrykZI95re4ZiUEGgrzKuxKDFYRYvaVVu3BAxilp9TKetthASmPWJlpB%2B&X-Amz-Signature=d3e30fbb2db1eddc90fe2a465c46bfb781e4dbb85935e49642a750b7fac83156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQVX7LHZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ%2Fu9SesU%2FhDLVoN8S%2BzIs1SQ%2Fc96v9eSiIq4bW52gfwIgO2OqKPXKZOcu49Z20yraAJlSz0oRfAQnH6TgsesEcEIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtz4GJB0MHY953xoircA32YHCOqhR4q0hKg2Z%2FGyLNTnmhNNj%2FC5%2FUk3bgze%2FvK%2BIRiwyafbqzLVyRyEnqiMGY4LtDCJT2dtpVQyiHSN%2BEXsJjR1EwaL492WGwB1UZUa359mba9BUmGUBb0KC1DtIY7c0lhfc1cxTEfwMix0rYEDKVOGDwZLu0u2w2a0%2F%2BrEKbwG%2BrgCZyqPJ3j8Kn0IufY%2BMlKF8iP6oVXuVBncXInlKdA837gxtXpKuo8H2b8JH%2F69FnBbL1PZZ7InzZXpbZUfAMDm6TixomKvpW2plhX4pxTZz%2Fza5hEZSnQiWNV8TrCkJkK0dL0KMDPDF5poJ1rFFGHoM%2Be8lvalsP0GONn92e14oCoe28XioxLUVKGZF8QFC%2F%2B5Qjd5FElFVTCbNc1Jhw8eyXT9kJDj%2Fp8lqFR%2FXhAm9sKUugJPaG2bLbH4NcxywlK4bkIg6MVQ7WfSAvVB5Z945Rq0t6sAdCteowxe9oJvkYjfBufYY4P%2Bo8As0pNN8JgxJX%2BD725mN7sxCqfbHpKMYWxbKzkgmg%2BfPtK3kQR8jZwEzpqFFs1RJoMWQAfHfB9K6RR5B5uW0OZFSQ1ywe%2Fs%2BMSiS0jIzsuGS1udEVbA%2FAGeQxUTEFEkE8zxgVBbCDwQqlF1pMLMImH3MkGOqUBNwKQZY2dS8leBU9Y5GPnkTx8X38CaKlKHsqLcZ0yUZJFbOLfoFLhRvo8EQd7UoGEm46BrE8FlE6kLFPcxYeRGCWMM4oebE%2BDU5DcOC2kV%2FT8lRQHjxHzO79y%2BH5ruZmiy6GsA0juybJPaeJ93t1a%2BqHn%2FgMOmGX4hT%2FQrykZI95re4ZiUEGgrzKuxKDFYRYvaVVu3BAxilp9TKetthASmPWJlpB%2B&X-Amz-Signature=2cb20365eb0452c1d74ab4244e853e085cedc9950639cb13ba7eb8a37928b5da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
