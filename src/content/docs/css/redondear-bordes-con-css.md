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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVWQOHLB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoLXGmlmUeCA3wKbn13xAtTsW9ZdC8jFBLHuyn81nl2AiAr3Nk%2Fxnya5N1YMdlqQJlscRaAg4F2GeD%2F9t9nvKD7ByqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvjwM7pa4jcAa%2B1nhKtwDiHir%2F%2FhVWMXyVAVFFAHv0gCz%2BpFVjsFSEcAaWKm9nOo3XrAESA4n1fKwYQpZ1ku%2BD3ZojAcL%2F1mTwRLh3CojASI4u6KYceWRXmEnBmJh%2FY1deL3j5afaXWn8KF1ER6y9XDPoQFPIJRBj1d%2B7O%2BFENNjPNoWHRbDmr3WbNjfpElibC5haaAaInbpjcvkRsS2MPrcRsMNCdC6%2FMOoSRbAFF7tLOSqDulHgk0gKoIkGAzOMUpkQ1PIh1O%2FsNun1U9DPE%2Bz6HvOd7Mu%2FHumZk8b%2B411haYavNOIfxAj%2B%2Fv2%2BddO3rDtJ9N887CkUGEOeP4Aeq%2BG84zQ7g95BlCjM1mDntff5eYx3DO8s05V7scC0r7o22jsk%2BSGfqQG761AcOl5O57v9Aa495gEDfa5rW50qn7vek%2FROk%2BxdrD%2B1eSXwGHPFKW4qsdShoHCx6DUzMOJoc2E4gKVmlR2yGr5S0qAqsRC0qLnYm8aNOO1iQ0krse57s8LLzXLyPZ9RvoRMokP%2FrVCCAt%2B12enZlmQDnwN7jao5xlAdwPevDz%2FQC65Ig%2Bcu7UiccZmmehXaryMgY1gs5Y1coUx%2BNXcL7YPqzRJRIme5s1PsvdGj6JS7SR1bYQ%2F569%2BytJH73Bt6IGgwj%2F7SyQY6pgG4eRsjZbtuFZO26sONW2w%2FbVxYhN4O67iiJg9ztPYrdBrdlTmJv%2F4Y%2Bng10jcwvCm4TurR5FXENJlC6q4rW3p7uOyn%2Bi7kP0PBJFGDmKjzNF5O54yGTR1G5iZhPubXGWLb8IZqHEv818VWuoJ3haqwg8lPQCItNKUqNvEGPUEul1QoWqQu4oimyecjImWtPmV%2Fc2BGWEeqKoDu%2FxOEFUvrDaWxLUhC&X-Amz-Signature=78f8c667d96693e1ec8b5e2bb51ded69b94399566a8debe553a1ce99056433d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVWQOHLB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoLXGmlmUeCA3wKbn13xAtTsW9ZdC8jFBLHuyn81nl2AiAr3Nk%2Fxnya5N1YMdlqQJlscRaAg4F2GeD%2F9t9nvKD7ByqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvjwM7pa4jcAa%2B1nhKtwDiHir%2F%2FhVWMXyVAVFFAHv0gCz%2BpFVjsFSEcAaWKm9nOo3XrAESA4n1fKwYQpZ1ku%2BD3ZojAcL%2F1mTwRLh3CojASI4u6KYceWRXmEnBmJh%2FY1deL3j5afaXWn8KF1ER6y9XDPoQFPIJRBj1d%2B7O%2BFENNjPNoWHRbDmr3WbNjfpElibC5haaAaInbpjcvkRsS2MPrcRsMNCdC6%2FMOoSRbAFF7tLOSqDulHgk0gKoIkGAzOMUpkQ1PIh1O%2FsNun1U9DPE%2Bz6HvOd7Mu%2FHumZk8b%2B411haYavNOIfxAj%2B%2Fv2%2BddO3rDtJ9N887CkUGEOeP4Aeq%2BG84zQ7g95BlCjM1mDntff5eYx3DO8s05V7scC0r7o22jsk%2BSGfqQG761AcOl5O57v9Aa495gEDfa5rW50qn7vek%2FROk%2BxdrD%2B1eSXwGHPFKW4qsdShoHCx6DUzMOJoc2E4gKVmlR2yGr5S0qAqsRC0qLnYm8aNOO1iQ0krse57s8LLzXLyPZ9RvoRMokP%2FrVCCAt%2B12enZlmQDnwN7jao5xlAdwPevDz%2FQC65Ig%2Bcu7UiccZmmehXaryMgY1gs5Y1coUx%2BNXcL7YPqzRJRIme5s1PsvdGj6JS7SR1bYQ%2F569%2BytJH73Bt6IGgwj%2F7SyQY6pgG4eRsjZbtuFZO26sONW2w%2FbVxYhN4O67iiJg9ztPYrdBrdlTmJv%2F4Y%2Bng10jcwvCm4TurR5FXENJlC6q4rW3p7uOyn%2Bi7kP0PBJFGDmKjzNF5O54yGTR1G5iZhPubXGWLb8IZqHEv818VWuoJ3haqwg8lPQCItNKUqNvEGPUEul1QoWqQu4oimyecjImWtPmV%2Fc2BGWEeqKoDu%2FxOEFUvrDaWxLUhC&X-Amz-Signature=ce824d007dbe6b9bc3cb78f2ead987578655311d0c8370aaa6f8b4062cab3e37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
