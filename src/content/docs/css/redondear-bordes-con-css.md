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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDASFHPM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzVG8eQ%2FgHY6v7XVRBOXepR85GFGb%2FFwQt5WG%2F5myx2wIhAO5hvrV9f%2FyFQVvMvHTyF6zIC5AON32Bf0pmPSJ%2FgoxSKv8DCHAQABoMNjM3NDIzMTgzODA1IgyA20Gh4R7z3BEIHxQq3AOgWyHc7a8jyQ4RXfd1TkFvPgDSRHhKcc5dqgL1gV%2BVPeZHVnfc8qcHMZtvRiYbGlx5NAazRN55J6QsrvojYYjmq8dUxPtGchYpIu9O6fLMx%2F4cbmutIZQtDFuzE3ILFE90vwzpNSewxNMShyIF0fDYaEJm%2BAioDAy%2FyCdxV9a9v7zvhyqF9IYAPzs4JeIX%2BiOjid%2BE4HVxdXUt8NGk%2Fi1mzbi7asEX1HnUs2cvsH5IwyXlZsvsGo%2BGCQxPpBwSGNWTokpOLUnPiI1piY6btqvRlv8fTYnfiXKV5Wd7%2BBUHClWI3KsYBlqCrVWfBjxDHYcqZ9aXSm2pQrJP0OH%2B%2BjqOtZliP2FVfulkMsIwRaQcfLXr92G8BSx8CjFMMqp7dO5pz1aLVgKKFswAr9MDJ%2FFLF3e5MarxdAKcNzMcF9esB9bKu6rqHmwKbxDDbITe99jGPPptcFMpI7Lo91fFAGdBXOnM%2FBMbUy8Y9EAPnnWfFmkVJJzz3XSdyF7dklQxGEToF%2BaTs3jMmTSQbxkCHut4oThxkmCLivFpmAPf1L%2Fel74AE%2BBbdjtMqNoqw6VllOOqpYLSvWiM6Hd7K6SMvLGxFtHV8QSXrqE4xtNQzlsA%2FCs5l7pZCmzue5JSkjDzns%2FJBjqkAUyXn4oNzgDBnw%2FdlyV4WG1WGdOt4kSaG4jDBf5ShKa19%2Bi4UOhABuRY8u4GsfOtgiSXn%2BZfBkezn52rJCZGScrjvI8CSSJ%2FEl%2FRLmGCCtofgkFWBzurRCtLcHe9Zp8IPOidL3Vkvc%2BsQEU%2FM0bDg5IQOmm3cuUPaK5kqyUAz1mKkrPvF7dJZkB4AJvHk2oJl2TIl1WGX%2B9%2B3Ya6n2gueHfK3EUl&X-Amz-Signature=f72a02c97148ef1e614653c3d06acb1f425684333f6873f7469d4b208576b921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDASFHPM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzVG8eQ%2FgHY6v7XVRBOXepR85GFGb%2FFwQt5WG%2F5myx2wIhAO5hvrV9f%2FyFQVvMvHTyF6zIC5AON32Bf0pmPSJ%2FgoxSKv8DCHAQABoMNjM3NDIzMTgzODA1IgyA20Gh4R7z3BEIHxQq3AOgWyHc7a8jyQ4RXfd1TkFvPgDSRHhKcc5dqgL1gV%2BVPeZHVnfc8qcHMZtvRiYbGlx5NAazRN55J6QsrvojYYjmq8dUxPtGchYpIu9O6fLMx%2F4cbmutIZQtDFuzE3ILFE90vwzpNSewxNMShyIF0fDYaEJm%2BAioDAy%2FyCdxV9a9v7zvhyqF9IYAPzs4JeIX%2BiOjid%2BE4HVxdXUt8NGk%2Fi1mzbi7asEX1HnUs2cvsH5IwyXlZsvsGo%2BGCQxPpBwSGNWTokpOLUnPiI1piY6btqvRlv8fTYnfiXKV5Wd7%2BBUHClWI3KsYBlqCrVWfBjxDHYcqZ9aXSm2pQrJP0OH%2B%2BjqOtZliP2FVfulkMsIwRaQcfLXr92G8BSx8CjFMMqp7dO5pz1aLVgKKFswAr9MDJ%2FFLF3e5MarxdAKcNzMcF9esB9bKu6rqHmwKbxDDbITe99jGPPptcFMpI7Lo91fFAGdBXOnM%2FBMbUy8Y9EAPnnWfFmkVJJzz3XSdyF7dklQxGEToF%2BaTs3jMmTSQbxkCHut4oThxkmCLivFpmAPf1L%2Fel74AE%2BBbdjtMqNoqw6VllOOqpYLSvWiM6Hd7K6SMvLGxFtHV8QSXrqE4xtNQzlsA%2FCs5l7pZCmzue5JSkjDzns%2FJBjqkAUyXn4oNzgDBnw%2FdlyV4WG1WGdOt4kSaG4jDBf5ShKa19%2Bi4UOhABuRY8u4GsfOtgiSXn%2BZfBkezn52rJCZGScrjvI8CSSJ%2FEl%2FRLmGCCtofgkFWBzurRCtLcHe9Zp8IPOidL3Vkvc%2BsQEU%2FM0bDg5IQOmm3cuUPaK5kqyUAz1mKkrPvF7dJZkB4AJvHk2oJl2TIl1WGX%2B9%2B3Ya6n2gueHfK3EUl&X-Amz-Signature=246bf1f1a665d3f860868f1c7bf2dec2eb28deae914963887ff9b612580ea81d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
