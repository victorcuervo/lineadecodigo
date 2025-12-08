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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VKR3IKC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsNnt9I75GfCxuk7PIP1tJWGh7s2JSh%2FeWjOh8rXLfagIhAJsnVLWgX9Q6GxRGOFg9eikc%2Bphzs1dyX81FZT5I9nGQKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt602A8iH0CJ7HvU8q3APx8gFRk%2F18p8G3q4rt3J2Jj6nurpisOBCWoCTVqgSSbD1EHY2x9npigSrKoBovJ13iqXUCKVVjEf8wUW3tgRuaRuyKghN%2BEHuhK8FPxC11myPZMXpSFj4E3m6pKmYFDml6kRIlxdWEux0SoHccUuS%2BiK6oHvutePKnoR4VHLCDgR7a85ZNW0IHY3Ag3Ds8Oti5yxhRfmON7Go93HzQmiBo9Teaz2l3BXQffBwBrbE959bU9gRDV3r%2Fu1uDwZ7zoyfn5Lyysx3sCsIakLETngfNRqbTDIukyZCelslfxh13GiJHAq00u%2FUjXKAikFS7TnPPwUJjZOUwpDNi5OYU%2FLDxVzbiLaWEuDrduUjYoMElTDfv20QN3S9rms8T5nAG95hXSuEWLkYkZKwaaI10xRbu76aHdmgkSjEGI%2F4KIROXkdK15Cu1uppoHgMEii3ArrgNY%2Ff8EUodxYz8QQdPDh2iL%2FSPWlAd7H8QdZbNJj0NH5UZoFOXaoaavVtOgh0cZEchC4pTss9Nq2fw%2BOn%2Fbyz4c6WjQUyKA3mHF4OybWqyFCUp9tbKgX5CdcIX%2Fu84MylwYptHX0aFjNpMHid27bzt8ZA33s4mLY4WvGWlqlJumpJztw%2F5qkSSmAtH2zDg7dnJBjqkAfBkMCUFalDG3kzg5Y3IF%2BqSI2%2F8leiwhyXXL%2FPasS2DdjHLDNlM%2BpU12gd0ncqy037diHAerh3bj5Mhv2j0X1CWZyR3ygzgYFSy4eLPDzy3Xw3ddxlXg1bnRhyZ2oPUOvTSOt4UMuvYEZCOGJ7aub%2B32R3zAL82NU6hXBN7GYcSU8HbWqK4ZKNeruQq5i9Kl7yHN44EYPT6Iy8PsoHFa10EJTig&X-Amz-Signature=5c65946afbf9f78aae9ff1e228dbf1c146d47d8cfd02a6eb8852fb1696c001a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VKR3IKC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsNnt9I75GfCxuk7PIP1tJWGh7s2JSh%2FeWjOh8rXLfagIhAJsnVLWgX9Q6GxRGOFg9eikc%2Bphzs1dyX81FZT5I9nGQKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt602A8iH0CJ7HvU8q3APx8gFRk%2F18p8G3q4rt3J2Jj6nurpisOBCWoCTVqgSSbD1EHY2x9npigSrKoBovJ13iqXUCKVVjEf8wUW3tgRuaRuyKghN%2BEHuhK8FPxC11myPZMXpSFj4E3m6pKmYFDml6kRIlxdWEux0SoHccUuS%2BiK6oHvutePKnoR4VHLCDgR7a85ZNW0IHY3Ag3Ds8Oti5yxhRfmON7Go93HzQmiBo9Teaz2l3BXQffBwBrbE959bU9gRDV3r%2Fu1uDwZ7zoyfn5Lyysx3sCsIakLETngfNRqbTDIukyZCelslfxh13GiJHAq00u%2FUjXKAikFS7TnPPwUJjZOUwpDNi5OYU%2FLDxVzbiLaWEuDrduUjYoMElTDfv20QN3S9rms8T5nAG95hXSuEWLkYkZKwaaI10xRbu76aHdmgkSjEGI%2F4KIROXkdK15Cu1uppoHgMEii3ArrgNY%2Ff8EUodxYz8QQdPDh2iL%2FSPWlAd7H8QdZbNJj0NH5UZoFOXaoaavVtOgh0cZEchC4pTss9Nq2fw%2BOn%2Fbyz4c6WjQUyKA3mHF4OybWqyFCUp9tbKgX5CdcIX%2Fu84MylwYptHX0aFjNpMHid27bzt8ZA33s4mLY4WvGWlqlJumpJztw%2F5qkSSmAtH2zDg7dnJBjqkAfBkMCUFalDG3kzg5Y3IF%2BqSI2%2F8leiwhyXXL%2FPasS2DdjHLDNlM%2BpU12gd0ncqy037diHAerh3bj5Mhv2j0X1CWZyR3ygzgYFSy4eLPDzy3Xw3ddxlXg1bnRhyZ2oPUOvTSOt4UMuvYEZCOGJ7aub%2B32R3zAL82NU6hXBN7GYcSU8HbWqK4ZKNeruQq5i9Kl7yHN44EYPT6Iy8PsoHFa10EJTig&X-Amz-Signature=9a03184f837f3b6a537e10966afe812b110520ede51a36210dee8f47d17c91d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
