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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCRTLOBX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7BIBOpupFZRQL9IbmVZJK9zUhsi4KXo4FzFRscVR8BAIhAN2VAX2WdOeH4h%2B%2FR5y%2FNJMY6KlwiRZKUvdgS09JuBx7Kv8DCHMQABoMNjM3NDIzMTgzODA1IgwOGQeursUCIHywbu4q3AOsZzgLsiPFbYLh82mWvVB3WCas2AbP7hlXl0UEaBJWvIIqeZW4h6QNbYo67%2Fk4HCxcAmfNwyETgf6XVm1dIszxbzqgH2LFY4srCV9%2Boso0MP8XS0z0o1j2y9N6sv6AJLQeMFWLwYEDg%2BKHlrIH2KOgJxkxFDQVSFyCyojJiC%2BNi9rhkMxj2BHWF8ExWxddg7QfMG4uZSFEmJr0JbB6OeRv2Eygd0EvGLMCxObaS3pia6BVlB%2BwwxlKuyrbKd8eKujmaVVJ99xbCO%2BQzKajnZYxpdrSuolUOmL9dIK5yrWeYvfciFQuWuREWGCMWUAaUtAYo9BnIxOibrm%2BeTOiEFHUEPOvJYUZQYw%2F8%2FNtlYDE7tmj5BaublAFpNbGIEjNpw0tskbHs3IntK%2FanR9t9th%2BCaMCszce8nq2D%2BwLLOATOZeRtumE6XT4Ndqtff9zRo19rzGLPGw4wU6geoheRnneYKRzFc9gQrP9JHT%2BUJOgzNQsv59rsh1GfxauLaINh93l9x3GyZIleggoDbwCu3wOA39fi6EggDoEr8CvK825Zi2lBfv5eeX%2BGXnztm6eBOKEX6cix0X37RFbeDUvxZ4SOUPbAOOJ%2BAuSxztldfx%2F1repgJpM9%2BecEsM6PDD5lojKBjqkAcPc65MS7T%2BIh7hMILB9PewsjYyhBSG4DUF5RpPCM9Ee4p25VwlKRPBdivb%2FsMZbrDcWvV9Iz6oHBV9pFai2JbvPGEYO%2F%2BKK8EOETL9bvqYf7%2B6RpAinMWdKpekBT%2BqPjXylOnIJI%2FeA7ScLYzBOu24KfVGfmASMR0AxWtzKUftL2UQlFLJKOk0j79Rxf3Ws3W5YWLP5LWnIfZAu9%2FYZwHCcY2fo&X-Amz-Signature=88575285d3afb3ffd316abf659de0fe43b697cf0f4d4f44a5c201cf4d870a94a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCRTLOBX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7BIBOpupFZRQL9IbmVZJK9zUhsi4KXo4FzFRscVR8BAIhAN2VAX2WdOeH4h%2B%2FR5y%2FNJMY6KlwiRZKUvdgS09JuBx7Kv8DCHMQABoMNjM3NDIzMTgzODA1IgwOGQeursUCIHywbu4q3AOsZzgLsiPFbYLh82mWvVB3WCas2AbP7hlXl0UEaBJWvIIqeZW4h6QNbYo67%2Fk4HCxcAmfNwyETgf6XVm1dIszxbzqgH2LFY4srCV9%2Boso0MP8XS0z0o1j2y9N6sv6AJLQeMFWLwYEDg%2BKHlrIH2KOgJxkxFDQVSFyCyojJiC%2BNi9rhkMxj2BHWF8ExWxddg7QfMG4uZSFEmJr0JbB6OeRv2Eygd0EvGLMCxObaS3pia6BVlB%2BwwxlKuyrbKd8eKujmaVVJ99xbCO%2BQzKajnZYxpdrSuolUOmL9dIK5yrWeYvfciFQuWuREWGCMWUAaUtAYo9BnIxOibrm%2BeTOiEFHUEPOvJYUZQYw%2F8%2FNtlYDE7tmj5BaublAFpNbGIEjNpw0tskbHs3IntK%2FanR9t9th%2BCaMCszce8nq2D%2BwLLOATOZeRtumE6XT4Ndqtff9zRo19rzGLPGw4wU6geoheRnneYKRzFc9gQrP9JHT%2BUJOgzNQsv59rsh1GfxauLaINh93l9x3GyZIleggoDbwCu3wOA39fi6EggDoEr8CvK825Zi2lBfv5eeX%2BGXnztm6eBOKEX6cix0X37RFbeDUvxZ4SOUPbAOOJ%2BAuSxztldfx%2F1repgJpM9%2BecEsM6PDD5lojKBjqkAcPc65MS7T%2BIh7hMILB9PewsjYyhBSG4DUF5RpPCM9Ee4p25VwlKRPBdivb%2FsMZbrDcWvV9Iz6oHBV9pFai2JbvPGEYO%2F%2BKK8EOETL9bvqYf7%2B6RpAinMWdKpekBT%2BqPjXylOnIJI%2FeA7ScLYzBOu24KfVGfmASMR0AxWtzKUftL2UQlFLJKOk0j79Rxf3Ws3W5YWLP5LWnIfZAu9%2FYZwHCcY2fo&X-Amz-Signature=e7d3e5ce5d51e7b8e343d7001a2de7ee2dfe33016dc943b46c0c9436f49bd8b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
