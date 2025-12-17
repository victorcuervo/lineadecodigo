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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663G3A3OM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV6YgOL75yGYb4H6J72owRl53Bs5ynFYrg4LYsmzJlIAIhAPQ7nMdykApLKlRVA66c9DLUpxtsHMQ48OMtojWmQ%2F1hKv8DCH4QABoMNjM3NDIzMTgzODA1Igw58IF%2Fuaw8gOwlPOUq3AMb%2Fdst5C40hR6moW6Nxv1NVsvlI0fCCZK4zw7lDpkoV7yfp3Z9tW%2BHm%2FdcV9jbOZ18Gyusdu0tpm5u%2FAdTV57QmWAJR4y3Uu%2Ffqq7jR00iCvElU7ab5ExozSRaFGpxOGwPH1oyrz1WEZo8aK9JXeUvwRUScIwWzoXCuJ4wnAQY%2BKtOTw%2F5vY0iugxocy1ObP59cRJDyWNFIhTfj6egC6kXTPHc5bZL4tZMWHPt0veo6Z8UrYZfWNCerTRDaqDvFaTwdBHqiJo1MG6v9AxnjX1qsSNBjdLDaZF5IdVjsYB7sffcalWEmfZjNhDplYk4VqYS1BSqssHHUC3y1NevWn7ks4dD%2FbUVHTljLwp6%2FYW2Su2g4l0mJP7aUkr4SPKms1hVlCxstMH3QG9JPWEwbQTD3rW0zMjZfnfb1S6uu8EGeucwIi5w2oP66HX3fcYpmHzsPPyPxxOqml32%2B3riEt%2F4kaCYRVwL3RpMF9HmJPanQ5IZF6xDqa56XZJeSorhYpSGVaye62Q5kJ4gHg7D8zy%2FMp6lTCL5ySMbZMZxwQLmPtpu3bM7IhA4EvdGJ%2B%2BQOTtZN7f7QkPZgZNR05eZCkX2T6nwVCGNxtcgWEUziXTe1A8CRYvEGe7oHh69FjDpxYrKBjqkAeV%2Bjr%2BqwWlgkeqZMT8RupWvuEECNnc9Sj0LPWklbTnZNJ5BaTZtmpLJjfR%2FU5FF2AhuXiLruqCUWCIUk67t0oUJuFYYyqpp9ig4QdpOX5uyqboSrRoX4aKlhv1TgPF6vDpSDR9UITF1q0ulNMycboQVSWD8BlX7lF1Pj8XZ5RaujIkoFEAz6D%2B3r3ksdTVyC3cYTtd1jDqUnjP9%2FB6tBSNKIRGK&X-Amz-Signature=9859f61cfe4fdb52096c6c8a298cf7d959e28ebfd3d76d214c9463cb11e9e910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663G3A3OM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV6YgOL75yGYb4H6J72owRl53Bs5ynFYrg4LYsmzJlIAIhAPQ7nMdykApLKlRVA66c9DLUpxtsHMQ48OMtojWmQ%2F1hKv8DCH4QABoMNjM3NDIzMTgzODA1Igw58IF%2Fuaw8gOwlPOUq3AMb%2Fdst5C40hR6moW6Nxv1NVsvlI0fCCZK4zw7lDpkoV7yfp3Z9tW%2BHm%2FdcV9jbOZ18Gyusdu0tpm5u%2FAdTV57QmWAJR4y3Uu%2Ffqq7jR00iCvElU7ab5ExozSRaFGpxOGwPH1oyrz1WEZo8aK9JXeUvwRUScIwWzoXCuJ4wnAQY%2BKtOTw%2F5vY0iugxocy1ObP59cRJDyWNFIhTfj6egC6kXTPHc5bZL4tZMWHPt0veo6Z8UrYZfWNCerTRDaqDvFaTwdBHqiJo1MG6v9AxnjX1qsSNBjdLDaZF5IdVjsYB7sffcalWEmfZjNhDplYk4VqYS1BSqssHHUC3y1NevWn7ks4dD%2FbUVHTljLwp6%2FYW2Su2g4l0mJP7aUkr4SPKms1hVlCxstMH3QG9JPWEwbQTD3rW0zMjZfnfb1S6uu8EGeucwIi5w2oP66HX3fcYpmHzsPPyPxxOqml32%2B3riEt%2F4kaCYRVwL3RpMF9HmJPanQ5IZF6xDqa56XZJeSorhYpSGVaye62Q5kJ4gHg7D8zy%2FMp6lTCL5ySMbZMZxwQLmPtpu3bM7IhA4EvdGJ%2B%2BQOTtZN7f7QkPZgZNR05eZCkX2T6nwVCGNxtcgWEUziXTe1A8CRYvEGe7oHh69FjDpxYrKBjqkAeV%2Bjr%2BqwWlgkeqZMT8RupWvuEECNnc9Sj0LPWklbTnZNJ5BaTZtmpLJjfR%2FU5FF2AhuXiLruqCUWCIUk67t0oUJuFYYyqpp9ig4QdpOX5uyqboSrRoX4aKlhv1TgPF6vDpSDR9UITF1q0ulNMycboQVSWD8BlX7lF1Pj8XZ5RaujIkoFEAz6D%2B3r3ksdTVyC3cYTtd1jDqUnjP9%2FB6tBSNKIRGK&X-Amz-Signature=d51b2e6e032c4721ae105ad5ed4fa762e69a9f950ea0e70b3bba5faded5223ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
