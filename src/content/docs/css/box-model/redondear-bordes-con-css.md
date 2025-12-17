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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GCXR5FH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQF4R9ZL8Su6uD4uLIBnUKukC%2BkukxpaI0sfCCJbooogIhAM7Pva00feb7nIGjI5ItLN4xFddwd6jCCq0SoVYF3OVNKv8DCHQQABoMNjM3NDIzMTgzODA1IgybYhhFVSooOyuo5xUq3AO0SYqT8RTy8mPOmtZweUVtAfoblD59DN0IvRfgEwOmteP%2Fy9wveyhi6IMV6oF6k4p5tn6Vwc8CCIyR4tVP6rZxQOni4Z7NeJt1Ycxx%2B40LwAqZvQJan5jl62HHeXCMW%2BKe8TwRN3I17SUh6h0K%2BFYmmYjREoQrZY9gyAAUekcGcu1%2FWj9XqAvrNbwYetkX6ttPFwu8CsSOKmpgHjkQbGmok3AopB70mjzAEuCgS4UceRUDMxZ8pBMvWwv33eI92WzMf7WxOqJis9l95UFAhg6X%2BTs82AcZ4nwDSQUMyZ5kY4ehyQlIEVIIFY2B2rUIRMmcpOWN9IB8bekmEX9vKhZzX5iN%2FFD2Pg5tqJfVuLQV6fAkyCpG1QdZgR6RHrq7AAxPiU1rlkPxZeMljNZnbQoPYzCRvSPSukVdjeLi05qr%2BdKPGAEN5K6AOaBF7i1Y7oykVI8OzNeuCeFCktlpQ4YxKAA87jhwZUEz0iqKdGamFfF6EVNgMvCBPh%2FWtOOLL%2B2qF18DzVBne1%2FCoB3IMQi14y5QDgeZCt8fTXg%2BounaHMjavNkfXVO3dfBQYgsRPvV3ZvyaBYURQmKG%2FxeouWLSJvdYOEBW4ZcD81jZDU9hBKTOw2it8LD8wAHfSzDpsojKBjqkAa2i3w4k%2FeP%2FboFFmoqoqqUv5yGDnnOlVX02%2FDYVZ06ebEARkCrKzXHKn0DhUP6FcmOoWK%2BNbqqZ4wArcjCS%2BrhYods%2Bs7nwTeaCe3CuskEAeqITZR3tKjLvJO7OfN5Boj4ggKts63Ca02xJCEFRGiK0BN9y16vyZdcwZYw3krxVQrcNaO0wwC%2FNkj0orMs7t5iFZqfK%2BoLHfVCQ3Cn6kjBwHrNj&X-Amz-Signature=53a8ed203780845063a83927f6ea622f39efa3ba5a3c2dd2bbc4b094b94950af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GCXR5FH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQF4R9ZL8Su6uD4uLIBnUKukC%2BkukxpaI0sfCCJbooogIhAM7Pva00feb7nIGjI5ItLN4xFddwd6jCCq0SoVYF3OVNKv8DCHQQABoMNjM3NDIzMTgzODA1IgybYhhFVSooOyuo5xUq3AO0SYqT8RTy8mPOmtZweUVtAfoblD59DN0IvRfgEwOmteP%2Fy9wveyhi6IMV6oF6k4p5tn6Vwc8CCIyR4tVP6rZxQOni4Z7NeJt1Ycxx%2B40LwAqZvQJan5jl62HHeXCMW%2BKe8TwRN3I17SUh6h0K%2BFYmmYjREoQrZY9gyAAUekcGcu1%2FWj9XqAvrNbwYetkX6ttPFwu8CsSOKmpgHjkQbGmok3AopB70mjzAEuCgS4UceRUDMxZ8pBMvWwv33eI92WzMf7WxOqJis9l95UFAhg6X%2BTs82AcZ4nwDSQUMyZ5kY4ehyQlIEVIIFY2B2rUIRMmcpOWN9IB8bekmEX9vKhZzX5iN%2FFD2Pg5tqJfVuLQV6fAkyCpG1QdZgR6RHrq7AAxPiU1rlkPxZeMljNZnbQoPYzCRvSPSukVdjeLi05qr%2BdKPGAEN5K6AOaBF7i1Y7oykVI8OzNeuCeFCktlpQ4YxKAA87jhwZUEz0iqKdGamFfF6EVNgMvCBPh%2FWtOOLL%2B2qF18DzVBne1%2FCoB3IMQi14y5QDgeZCt8fTXg%2BounaHMjavNkfXVO3dfBQYgsRPvV3ZvyaBYURQmKG%2FxeouWLSJvdYOEBW4ZcD81jZDU9hBKTOw2it8LD8wAHfSzDpsojKBjqkAa2i3w4k%2FeP%2FboFFmoqoqqUv5yGDnnOlVX02%2FDYVZ06ebEARkCrKzXHKn0DhUP6FcmOoWK%2BNbqqZ4wArcjCS%2BrhYods%2Bs7nwTeaCe3CuskEAeqITZR3tKjLvJO7OfN5Boj4ggKts63Ca02xJCEFRGiK0BN9y16vyZdcwZYw3krxVQrcNaO0wwC%2FNkj0orMs7t5iFZqfK%2BoLHfVCQ3Cn6kjBwHrNj&X-Amz-Signature=608e0dbf2eed5750f6fc8d151fba72069e78f15d0755fc920c095ea1d0fb7541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
