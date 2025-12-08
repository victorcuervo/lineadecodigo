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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C6ESQT4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyE%2BU3%2FGiN5rgV6bs4f1sKgGpKeYQia59rH1%2Bzn8MCbAiBCpZCQUiku8oEVTBb%2F23halQkqtQCj9sXwhlHlNd6%2B1iqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbm0VbAQZqrxGOnVLKtwDaT%2BRDpWvtU9197P5CAnrG4njxwlhvxVrLx0zrJ6f2umFxr6IahtR3icZd%2FJUqPkQ7yjA4MB17dOUwDT84X0%2Bo5trR14dfb2P911dA7abjAZ593XnHRyaCRjaqbEMOQ4%2FXCEc4N3LINM2PvHGu3HqSkY2jCjrHaZ9mR5GV6dvkxlG14NFnU6Z66ibY0mr7otjuvkeGpjxvFXtB6xYACtxYj0%2FpoQVrvUGf6xfrhzjSC%2BAp1EvVRal7BSZJGjR%2FY6pmf8cxInYfaaEluDbMbb2kK6PqZNcbmXQYB6r8aKoTVlTxYb6Qqie89Y5301HtaIkWrckVwr6SB9YCst5BCt%2Be33ufUZf8TJeoN2jyI3e03FvfhNzsrPqiS4eHLaYP7y0n8ixwo5oGXB105b3pghUxGla%2FzvBQEWaSMZOZhg%2BgbuycVQNPMzC9tUx9krMnJhnKsszFVVbqShyKW2A1l0L3qgiF1UJ%2BgwYvgkvZJFF6p9SUns%2FCTqFlij23zXZrBPudkt%2FA8rdzu3ahPbMYBt5Os62hZBrTkYW5RJ2zZwFQLU3d0Fwh2qVt1HxRcoUxXpuELlgk3KoXHFqV6E3c8JqcMeeT0fXmFu8m383emlnyU1uEoS8Pf8wHxf8gNUw45TZyQY6pgE8BkYzkI7LLAjVtNUKChUKtd18whdOjOgmCH8WnZ6SAyCyzqkfuQ1pG%2FTASroJmMvUcEjlcZyBMMzDkjHkAE%2BuE5pDid7Ev1vpy%2F64gezrqfF8I8xD5wpZvkpHhFXZkLdYSUyqetRmNizsezwitfQIO3arZ8NJm16urlyT46OGnOGFRof5baLP4e%2FibCAXLOr%2B3UhydwM%2Bi0fSQNya69f8z39XPq%2Bk&X-Amz-Signature=7c96616a52bb303599b7563b42d6cc74bb66855ab2bb0180e1faf2a005274b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C6ESQT4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyE%2BU3%2FGiN5rgV6bs4f1sKgGpKeYQia59rH1%2Bzn8MCbAiBCpZCQUiku8oEVTBb%2F23halQkqtQCj9sXwhlHlNd6%2B1iqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbm0VbAQZqrxGOnVLKtwDaT%2BRDpWvtU9197P5CAnrG4njxwlhvxVrLx0zrJ6f2umFxr6IahtR3icZd%2FJUqPkQ7yjA4MB17dOUwDT84X0%2Bo5trR14dfb2P911dA7abjAZ593XnHRyaCRjaqbEMOQ4%2FXCEc4N3LINM2PvHGu3HqSkY2jCjrHaZ9mR5GV6dvkxlG14NFnU6Z66ibY0mr7otjuvkeGpjxvFXtB6xYACtxYj0%2FpoQVrvUGf6xfrhzjSC%2BAp1EvVRal7BSZJGjR%2FY6pmf8cxInYfaaEluDbMbb2kK6PqZNcbmXQYB6r8aKoTVlTxYb6Qqie89Y5301HtaIkWrckVwr6SB9YCst5BCt%2Be33ufUZf8TJeoN2jyI3e03FvfhNzsrPqiS4eHLaYP7y0n8ixwo5oGXB105b3pghUxGla%2FzvBQEWaSMZOZhg%2BgbuycVQNPMzC9tUx9krMnJhnKsszFVVbqShyKW2A1l0L3qgiF1UJ%2BgwYvgkvZJFF6p9SUns%2FCTqFlij23zXZrBPudkt%2FA8rdzu3ahPbMYBt5Os62hZBrTkYW5RJ2zZwFQLU3d0Fwh2qVt1HxRcoUxXpuELlgk3KoXHFqV6E3c8JqcMeeT0fXmFu8m383emlnyU1uEoS8Pf8wHxf8gNUw45TZyQY6pgE8BkYzkI7LLAjVtNUKChUKtd18whdOjOgmCH8WnZ6SAyCyzqkfuQ1pG%2FTASroJmMvUcEjlcZyBMMzDkjHkAE%2BuE5pDid7Ev1vpy%2F64gezrqfF8I8xD5wpZvkpHhFXZkLdYSUyqetRmNizsezwitfQIO3arZ8NJm16urlyT46OGnOGFRof5baLP4e%2FibCAXLOr%2B3UhydwM%2Bi0fSQNya69f8z39XPq%2Bk&X-Amz-Signature=7ca7b44c3e67f6ef8deb7cf0fe4c4399bc6df31e8b639948de3b7b894f713037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
