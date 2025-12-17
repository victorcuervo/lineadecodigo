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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZIBWEVL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSpYc%2FiMCMGEnY2%2B7We8ia%2B5ViZYeXsb05CEIuMOPM7AiAaz4T5h7tcHASq84IsmnuzXqKXbylQnfTeabtVmTCPEir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMNkjb0Tzqdstrv7ffKtwD7jnMgFH6BxuKa9dT2lk9OOszSf3cF%2FUvKE%2BJlgc5jG%2F4gxxLffbyFC0xwp6uzejM0TQK7NQUhdbntnGm0P5QZUEGkfqd%2BaSOyj%2FnDxCPlUsKNJvwAZqUo7HQJGYBqZyjbAUja8SPQeMfJsuds56OdH6rQklo7MMViO7CTbMFG%2B3mxfsOzLmuO78j2rtzgv1pxNh99vzx6tMx%2B4cJA%2BEwomEm7Tk3ecqbyauHpH95anmS%2FBX3zuE3tFJ0iUej1BzbEUwnnO1ad2Ydn8v4TXfUZg4JuQajMOJ8Z%2Bf0CrLGlNTYtuHKrd8qPQXowBBuvu9FnsW0dlUCI4gIUc5Q4PJM8PWMzOVZ6cwXGJ5KUxJVEDzPFZRYRRFQUCoxmbhxLN%2F9hXHOrnLYNIbn7Th4VytAXgf4ohvQR%2F12rvYt6spnUGAkkQ95v8NFuZ%2F1yg1O0B66fDVTrAgdO0kONQ5gOR3TCiJasxbZLz1rnmHIgRmBC4tEhIESj2Tscax22WBEBxsmB3mMEftdvZHCfh%2Fjl%2BI9t4AbyjrqXY8o%2F1eaA8dkbPQkpgVwfKUaBGzV%2Bt4UKSf%2BURGHgv6jv%2B1H7pO1gSQ3emgrMSmgQN8IRV%2Bbnl6PapwJDv8qotpjMgrbGXIw0p2JygY6pgGFlXW4mYIl7nCjnPNB7U%2BCCmx0S0kZu040sv3NVWcGy6xxo5HTOQUDoiaoeVYL45gGMaYghFzJcHnuXUYlzrLmBCtAHFHsT%2FJw%2FNGLzUt4Ha4KrkT6OfaBfuPwG7QmRSnPCJ1xiWdkfcJEegNNVefZkikPVzd3w46byZKvcfzYP97fw5bzfp%2Bx%2Baizt%2BBNpcAmGpjj3yvESDV3g%2BI3wv6jA6E7RDAS&X-Amz-Signature=b276b4cf9ee25c1b4900d7e3cba444e55f10fcdcf96567e9fc5a9667e1c4dfc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZIBWEVL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSpYc%2FiMCMGEnY2%2B7We8ia%2B5ViZYeXsb05CEIuMOPM7AiAaz4T5h7tcHASq84IsmnuzXqKXbylQnfTeabtVmTCPEir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMNkjb0Tzqdstrv7ffKtwD7jnMgFH6BxuKa9dT2lk9OOszSf3cF%2FUvKE%2BJlgc5jG%2F4gxxLffbyFC0xwp6uzejM0TQK7NQUhdbntnGm0P5QZUEGkfqd%2BaSOyj%2FnDxCPlUsKNJvwAZqUo7HQJGYBqZyjbAUja8SPQeMfJsuds56OdH6rQklo7MMViO7CTbMFG%2B3mxfsOzLmuO78j2rtzgv1pxNh99vzx6tMx%2B4cJA%2BEwomEm7Tk3ecqbyauHpH95anmS%2FBX3zuE3tFJ0iUej1BzbEUwnnO1ad2Ydn8v4TXfUZg4JuQajMOJ8Z%2Bf0CrLGlNTYtuHKrd8qPQXowBBuvu9FnsW0dlUCI4gIUc5Q4PJM8PWMzOVZ6cwXGJ5KUxJVEDzPFZRYRRFQUCoxmbhxLN%2F9hXHOrnLYNIbn7Th4VytAXgf4ohvQR%2F12rvYt6spnUGAkkQ95v8NFuZ%2F1yg1O0B66fDVTrAgdO0kONQ5gOR3TCiJasxbZLz1rnmHIgRmBC4tEhIESj2Tscax22WBEBxsmB3mMEftdvZHCfh%2Fjl%2BI9t4AbyjrqXY8o%2F1eaA8dkbPQkpgVwfKUaBGzV%2Bt4UKSf%2BURGHgv6jv%2B1H7pO1gSQ3emgrMSmgQN8IRV%2Bbnl6PapwJDv8qotpjMgrbGXIw0p2JygY6pgGFlXW4mYIl7nCjnPNB7U%2BCCmx0S0kZu040sv3NVWcGy6xxo5HTOQUDoiaoeVYL45gGMaYghFzJcHnuXUYlzrLmBCtAHFHsT%2FJw%2FNGLzUt4Ha4KrkT6OfaBfuPwG7QmRSnPCJ1xiWdkfcJEegNNVefZkikPVzd3w46byZKvcfzYP97fw5bzfp%2Bx%2Baizt%2BBNpcAmGpjj3yvESDV3g%2BI3wv6jA6E7RDAS&X-Amz-Signature=ea604f114c84ee378f4f80032761082cd6d429e7a54466ffd7dc3e51a98121f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
