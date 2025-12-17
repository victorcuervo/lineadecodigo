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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D34MWK5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Fbq%2F5ftCeS2a4M3q76PwTS8OjcXRPFZSRZT3jlphQYAiB4ASO0zJZ5iAOYxB4c4h3rNYRpQDrTlPggdZv%2BxikvUCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkETODDHx3aiEcfWSKtwD2a88lr6CVByy6TFAe8CkYRGyN7S%2Ffgo9k45UHv0EQgR0qPn%2FxSdxzEbWMhlI%2B4O1yyqpohUyFUdhLBx4dit4wAGYxWKKwpPw%2Fs7d7g4YTKsU2R5W9OmXZqz4TYJuuc5EvJ3PcGdjmLWXIxcbabgye83Wl%2FsoAw2AMTF8%2ByRfFZuJ%2FwGrJ1jfN46KUbK7x6F2XQyZI05qWczGbecEu4n32B3dU3KAE8zLGIFjiPwq6Zm0IYuL0a0yQgnLmUbcn8VW%2FQj9HmsNkyvwMvZjn6ZwSw48PPG%2BuMfLQ%2FgvUNrPDpzv1izNqa0z7nIRJ1SufIZMZuPXhd55aq1ybvx7ExlV6pWqCvWjwA8GvnAFBTIx1C3HKX0IBRTSSVWvot4Efr3UjIhSHNi6t%2FmfJlAUKID16r2pDWUg8spFt67GjPRmwbDQj2Hge3y6dpO%2FGShv%2BjorRXlNJ%2BQYOE%2FmkNh2v2aQ7xX8mT3%2Fh11GRZEyJ2myKlUMG9BFyvnSpg9xv%2FfHUB0w0BYM9KLIlu1vP8vMQ4SRl9MytdmBu06onW7%2BmavJJluVTOh%2BMDpz%2FPm%2BpYtLGywY%2FmZ%2Fe%2BKsj3qyEsfM31buWDEXc3jteBT6iW5vtGn%2BjBvPwpZyfq6EOuNT5qkws66MygY6pgFDezql%2BHLtlySuZ1cYXk4VYOHeV8hn7KQS64ckn3uY9Hse1t129fOB0ZUSAMHUah%2BxCYqreyB8qVreB4%2BAUpnfXKNJyYsggbWU47TAtOyOo2bDS8ZhjD0uW4t%2FxoQkAZsxcWY1SsYO8hgkJEzGF1j0qo5AGriPjdQOJjAsOQg6344Xb%2BARJqPX6zFw4PvsJulzRu1kpIZJZUZEIrARXdvDwAIiYnVK&X-Amz-Signature=929205228ecfe7c8c045ccae8026ba453490005a1b939c284561a7fc835d42ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D34MWK5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Fbq%2F5ftCeS2a4M3q76PwTS8OjcXRPFZSRZT3jlphQYAiB4ASO0zJZ5iAOYxB4c4h3rNYRpQDrTlPggdZv%2BxikvUCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkETODDHx3aiEcfWSKtwD2a88lr6CVByy6TFAe8CkYRGyN7S%2Ffgo9k45UHv0EQgR0qPn%2FxSdxzEbWMhlI%2B4O1yyqpohUyFUdhLBx4dit4wAGYxWKKwpPw%2Fs7d7g4YTKsU2R5W9OmXZqz4TYJuuc5EvJ3PcGdjmLWXIxcbabgye83Wl%2FsoAw2AMTF8%2ByRfFZuJ%2FwGrJ1jfN46KUbK7x6F2XQyZI05qWczGbecEu4n32B3dU3KAE8zLGIFjiPwq6Zm0IYuL0a0yQgnLmUbcn8VW%2FQj9HmsNkyvwMvZjn6ZwSw48PPG%2BuMfLQ%2FgvUNrPDpzv1izNqa0z7nIRJ1SufIZMZuPXhd55aq1ybvx7ExlV6pWqCvWjwA8GvnAFBTIx1C3HKX0IBRTSSVWvot4Efr3UjIhSHNi6t%2FmfJlAUKID16r2pDWUg8spFt67GjPRmwbDQj2Hge3y6dpO%2FGShv%2BjorRXlNJ%2BQYOE%2FmkNh2v2aQ7xX8mT3%2Fh11GRZEyJ2myKlUMG9BFyvnSpg9xv%2FfHUB0w0BYM9KLIlu1vP8vMQ4SRl9MytdmBu06onW7%2BmavJJluVTOh%2BMDpz%2FPm%2BpYtLGywY%2FmZ%2Fe%2BKsj3qyEsfM31buWDEXc3jteBT6iW5vtGn%2BjBvPwpZyfq6EOuNT5qkws66MygY6pgFDezql%2BHLtlySuZ1cYXk4VYOHeV8hn7KQS64ckn3uY9Hse1t129fOB0ZUSAMHUah%2BxCYqreyB8qVreB4%2BAUpnfXKNJyYsggbWU47TAtOyOo2bDS8ZhjD0uW4t%2FxoQkAZsxcWY1SsYO8hgkJEzGF1j0qo5AGriPjdQOJjAsOQg6344Xb%2BARJqPX6zFw4PvsJulzRu1kpIZJZUZEIrARXdvDwAIiYnVK&X-Amz-Signature=a40faca16c531ea38aa55ce01a9faa0d27210e6693f6bf3ebacc5797ac6cfd66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
