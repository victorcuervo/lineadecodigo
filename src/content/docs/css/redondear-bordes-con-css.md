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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWV4E4A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLA8DFdCYK8edjtHIIZk9q99l0EyO9%2Fm%2B5DosehpUBcwIgEnmyQcFwfiu7MSfWcyNQLzXwYo4r7o9bEL104SgLIlkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8WcDt7Iwd%2BTZrfDSrcA6gus48ECtx41EOW8CWWxve4WnfzhdHUEf2K6H12sgDHiQfnfQ0W0%2BOUnFjH71lSYB8jryMGbmPD964TIXH7nQC6VuEiKg029GRwTybxJb1oiGeShRl0fIhhE81LR6cQWv1LezA%2F2QOq6BE4lsjEqFv8muD0YvLE8IHoMb%2B1naRIeD0827mQKIkAK5LrIbWeXv7bZHi3SWtkWeod6BPUgwxHaTZ0HGGQXXFpmIq9lbyLscsPIw%2Fhxgjve4oJDHNN7xfID2CpmvvcMhCyAfceRkr4Au%2F47zFPrMYcRIBFSMiZMFn%2FU6a03Y72TXG9CkK8AsmTW7R50qJ1dFTdnf7x1UoUIOAwNQ3Hr3Syvsrj2TZ1eSdPNxRxyQY94k3%2B%2Bfk7Srs0BELqs63VTaHJFGIiFK5Tod%2B8uEAzEDcXKc7uVjLSe0yYi52bNj%2BusMQc6vYjFafKMGxGhicc5jYVx9gwPAfshuyX9soXaypwpSilXQxbcRONzN1aWz20VlIpW1Ywm%2BFzBLXVbK%2FkJNYI8Q83j7vEWphqFBkZHdwTLz8aRPilS3cu6LGllYmY2kW4qwACRPwDgHssS9Kx3xJZATFgKaUGJtI7sYrU5sJMILfN8ug%2FmkwnQqO6CUjN7SDsMKOa1ckGOqUBWPBKZhnl70Y%2BG95w6kpE6a4XUiSqAI2U6c8Ez1Dj3TVH%2ByT6%2BumbprEDvnH8lXcGZjd9%2BqN6UfCVHQv2nNik4IgiqQ7KbNON7J7x90kfeWK0p%2BSAf70sq1UHe5Z3a2ALcmiw%2FThh104LUsG08Qoooo7Vccf2DHO4JysoLe%2Bhx8zNVyXCwA%2FJQ2CntdiS9LIlms0Wld4O77r3H9upkNfqyjE1S1o0&X-Amz-Signature=a5483143895136218235ed245a4ea08e149eb1f6756ddf04fc44814b65c8e2b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWV4E4A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLA8DFdCYK8edjtHIIZk9q99l0EyO9%2Fm%2B5DosehpUBcwIgEnmyQcFwfiu7MSfWcyNQLzXwYo4r7o9bEL104SgLIlkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8WcDt7Iwd%2BTZrfDSrcA6gus48ECtx41EOW8CWWxve4WnfzhdHUEf2K6H12sgDHiQfnfQ0W0%2BOUnFjH71lSYB8jryMGbmPD964TIXH7nQC6VuEiKg029GRwTybxJb1oiGeShRl0fIhhE81LR6cQWv1LezA%2F2QOq6BE4lsjEqFv8muD0YvLE8IHoMb%2B1naRIeD0827mQKIkAK5LrIbWeXv7bZHi3SWtkWeod6BPUgwxHaTZ0HGGQXXFpmIq9lbyLscsPIw%2Fhxgjve4oJDHNN7xfID2CpmvvcMhCyAfceRkr4Au%2F47zFPrMYcRIBFSMiZMFn%2FU6a03Y72TXG9CkK8AsmTW7R50qJ1dFTdnf7x1UoUIOAwNQ3Hr3Syvsrj2TZ1eSdPNxRxyQY94k3%2B%2Bfk7Srs0BELqs63VTaHJFGIiFK5Tod%2B8uEAzEDcXKc7uVjLSe0yYi52bNj%2BusMQc6vYjFafKMGxGhicc5jYVx9gwPAfshuyX9soXaypwpSilXQxbcRONzN1aWz20VlIpW1Ywm%2BFzBLXVbK%2FkJNYI8Q83j7vEWphqFBkZHdwTLz8aRPilS3cu6LGllYmY2kW4qwACRPwDgHssS9Kx3xJZATFgKaUGJtI7sYrU5sJMILfN8ug%2FmkwnQqO6CUjN7SDsMKOa1ckGOqUBWPBKZhnl70Y%2BG95w6kpE6a4XUiSqAI2U6c8Ez1Dj3TVH%2ByT6%2BumbprEDvnH8lXcGZjd9%2BqN6UfCVHQv2nNik4IgiqQ7KbNON7J7x90kfeWK0p%2BSAf70sq1UHe5Z3a2ALcmiw%2FThh104LUsG08Qoooo7Vccf2DHO4JysoLe%2Bhx8zNVyXCwA%2FJQ2CntdiS9LIlms0Wld4O77r3H9upkNfqyjE1S1o0&X-Amz-Signature=cd2884b016f163e95ca80a037fea79600dd4592d547e9f916a114c9673028d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
