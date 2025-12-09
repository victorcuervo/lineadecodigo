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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNMV6SMC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj267udgT4irKi4WhTLTzCPGkptpImhG4VzUmENXuLuAIhAI4pwUJisOoCgTwwVZikghai7jvh8ItI3rPktSuP5IwgKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqnxWoJIell518zz4q3AN9McBPpYQUOIL2KmQrSJIsHe1d%2FwBxrDDd1UttzEZCUXIahT9UTBOBK6erVtMGC27Q5DUccxb6L9R7oNvs6b5n8utN5d9jR9uVkhcqMJG5C4g4NHvdE0syhEPDBiksMAjudczIDGEnPV6mDNw%2F7HtTHAyLdTi52izjgf5t01UfyqpyLqpq43KoILRuXaFcvXSHdXTUh1hUUEmehaDTaZYakyDBr2fVeIaKDn%2B5BPFbc8czjx9gx%2FPwjVZcC20LpktKPA3MYZXMTENMVvCvRjBZsn8US017I%2Bm0q8f7vnwfaBHNm2B6CcMisp4wO01VDOFJVcrtp0AO%2FAm4%2FtT6fsZknxPN1ASB9aT3W33gzBAdA9of1CWtoVTCkMAjJqBiJrT2Fd9eg0sf%2B%2FTTFJ1iuIicEEt%2FXBTUhRcpiJzBE5k2QxEp%2Bo%2BDmk4xJDOwxBLRbXSOP626l17vAsJ57y4RGmIm1eevnmxiN8Uh0BMV9oZbDmtvQpVDklsgS0uM8a7QD3bMs9d32Uezjx3n%2F3hRyQ0jR8SkbwbdJ4qug4vpc35LB7y9nWPJv0WR6sgcinXMfp7iKPm%2BicoV7AcTfMRRKo5DAqzqRFbjYHIRI7EZid1OEb7Va5YcYX%2BNFDiduzDxjt7JBjqkAS3nvM%2FMdt%2B%2Ft3JnV4OZnbhSbRZF%2BSdAFFl0L9t0eSGE9%2F6kZ195HDA%2FPxWYsGwXZHtZJq4m%2BtRT0V%2BijOCNp3lE5yqMCHyM0Y5REkhmwvEJMNNN%2FElRFmHP5YbDuaJvRlujyIa7AnquJtLHYOOZhF0%2B%2BdQ4vFniSz3tvo7cx7N5HQp0q6rrSpaedyArctkGAKTNQWrONGYR41kZt7VWxudM8o7S&X-Amz-Signature=64edb6e7b1bdb96311264dd41aa7f3d6e5211ad6a812a69ed6d16117bf4f405e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNMV6SMC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj267udgT4irKi4WhTLTzCPGkptpImhG4VzUmENXuLuAIhAI4pwUJisOoCgTwwVZikghai7jvh8ItI3rPktSuP5IwgKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqnxWoJIell518zz4q3AN9McBPpYQUOIL2KmQrSJIsHe1d%2FwBxrDDd1UttzEZCUXIahT9UTBOBK6erVtMGC27Q5DUccxb6L9R7oNvs6b5n8utN5d9jR9uVkhcqMJG5C4g4NHvdE0syhEPDBiksMAjudczIDGEnPV6mDNw%2F7HtTHAyLdTi52izjgf5t01UfyqpyLqpq43KoILRuXaFcvXSHdXTUh1hUUEmehaDTaZYakyDBr2fVeIaKDn%2B5BPFbc8czjx9gx%2FPwjVZcC20LpktKPA3MYZXMTENMVvCvRjBZsn8US017I%2Bm0q8f7vnwfaBHNm2B6CcMisp4wO01VDOFJVcrtp0AO%2FAm4%2FtT6fsZknxPN1ASB9aT3W33gzBAdA9of1CWtoVTCkMAjJqBiJrT2Fd9eg0sf%2B%2FTTFJ1iuIicEEt%2FXBTUhRcpiJzBE5k2QxEp%2Bo%2BDmk4xJDOwxBLRbXSOP626l17vAsJ57y4RGmIm1eevnmxiN8Uh0BMV9oZbDmtvQpVDklsgS0uM8a7QD3bMs9d32Uezjx3n%2F3hRyQ0jR8SkbwbdJ4qug4vpc35LB7y9nWPJv0WR6sgcinXMfp7iKPm%2BicoV7AcTfMRRKo5DAqzqRFbjYHIRI7EZid1OEb7Va5YcYX%2BNFDiduzDxjt7JBjqkAS3nvM%2FMdt%2B%2Ft3JnV4OZnbhSbRZF%2BSdAFFl0L9t0eSGE9%2F6kZ195HDA%2FPxWYsGwXZHtZJq4m%2BtRT0V%2BijOCNp3lE5yqMCHyM0Y5REkhmwvEJMNNN%2FElRFmHP5YbDuaJvRlujyIa7AnquJtLHYOOZhF0%2B%2BdQ4vFniSz3tvo7cx7N5HQp0q6rrSpaedyArctkGAKTNQWrONGYR41kZt7VWxudM8o7S&X-Amz-Signature=31cee0ed975e2a005fdcb58281aca21fb1f622d794e0d127471d66b6f9fd5d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
