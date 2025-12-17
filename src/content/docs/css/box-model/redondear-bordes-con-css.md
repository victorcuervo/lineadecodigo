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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDL5GYCY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2QqE5IrczbNJn71Sf9NXJ3ukwoketEaz0oK7h8Q7CXAiBXWaH3EX7XHI8qvLoOMcdmWjSmTYgqxRiUtsqN3ARW6yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM0DmI%2FklohCQ0V8kJKtwDaMsBTCgS%2Bm5mQMwPjny2oGG%2B75s80%2Br%2FF9p0wO6YV3LGJKdGAEu9gVx1bLIdf3oTY%2BGy7G57TRLa9MgBTPv%2BNQ9AxViGd9mS0ETftnLXWN%2BUT7gWr41YKJbAsMg%2FUuvEe3VqjcfJgnbLGwI8ntD9I6rILqh9cvANHeg0i0vdXZfyDgvgnAauOiXQSLJRzJb7gAZCSF7JomX%2FrSYgR10xBMXEA%2Fljhr6iIkgoVP%2Bd3opiN7eNQzIyqe8TT95%2Fr%2BPlIAP%2F6smSAlAWKn9%2B%2F5lA%2B7ucTltcV3ve671hJww%2B0yMHR%2BwhuQAtX6%2B5n3M94Qrr2MqpCGcIRz0Q%2BbQ2r8UscccQoNKrfS5MRGZ8G9lBBOQB5Rdx2N%2BxnCFOMbYRHwI53b9QALIPwJOG29jkloFQIVFzQYl5y73nDPjlZkQnORreRTkRRhGaQMXGEepIs9MCbx%2F5wMFpJFLymmaHZayfJYTo63hbfxVdVdhFlmsa0aFywBPx13N%2BdO4cdiFVh8eR8%2BnmwbiachRyKS4X67WtjboMJu9OsgaA1OrJG4sFK%2FlU41bVjQeo0mjJgVAiuuMyZuTCZ3lKUEIfhKsVtdzF3GVVrpuOPE%2B6VpaLMfAEelol9KjYhCFH9I0uBiownIOJygY6pgGX6RR%2FZseYrVZL1hnTijl2eKleaHvSfrYYEJQOhKW6DF%2BA5tAOnETPbCHkRygSmXBniQ66GswcZNjbJmat94x80CwDYVLeHFG6GGZWI9YpV5P0s%2FjrgKXpQSgzSPtrWvLl%2BCDZtlOltnebRm%2BksbwsDdFA9uqJjFd7mobEyFZc4luLy1JkmgeKM%2FoKH1jG4JCT%2BsGL1fooSwAl%2BsbOa3gFeZpQ6eQE&X-Amz-Signature=416857debbbdcffef6fedfa789baf4a8d8582c2eea6727e7c70f6d4b28fd2735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDL5GYCY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2QqE5IrczbNJn71Sf9NXJ3ukwoketEaz0oK7h8Q7CXAiBXWaH3EX7XHI8qvLoOMcdmWjSmTYgqxRiUtsqN3ARW6yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM0DmI%2FklohCQ0V8kJKtwDaMsBTCgS%2Bm5mQMwPjny2oGG%2B75s80%2Br%2FF9p0wO6YV3LGJKdGAEu9gVx1bLIdf3oTY%2BGy7G57TRLa9MgBTPv%2BNQ9AxViGd9mS0ETftnLXWN%2BUT7gWr41YKJbAsMg%2FUuvEe3VqjcfJgnbLGwI8ntD9I6rILqh9cvANHeg0i0vdXZfyDgvgnAauOiXQSLJRzJb7gAZCSF7JomX%2FrSYgR10xBMXEA%2Fljhr6iIkgoVP%2Bd3opiN7eNQzIyqe8TT95%2Fr%2BPlIAP%2F6smSAlAWKn9%2B%2F5lA%2B7ucTltcV3ve671hJww%2B0yMHR%2BwhuQAtX6%2B5n3M94Qrr2MqpCGcIRz0Q%2BbQ2r8UscccQoNKrfS5MRGZ8G9lBBOQB5Rdx2N%2BxnCFOMbYRHwI53b9QALIPwJOG29jkloFQIVFzQYl5y73nDPjlZkQnORreRTkRRhGaQMXGEepIs9MCbx%2F5wMFpJFLymmaHZayfJYTo63hbfxVdVdhFlmsa0aFywBPx13N%2BdO4cdiFVh8eR8%2BnmwbiachRyKS4X67WtjboMJu9OsgaA1OrJG4sFK%2FlU41bVjQeo0mjJgVAiuuMyZuTCZ3lKUEIfhKsVtdzF3GVVrpuOPE%2B6VpaLMfAEelol9KjYhCFH9I0uBiownIOJygY6pgGX6RR%2FZseYrVZL1hnTijl2eKleaHvSfrYYEJQOhKW6DF%2BA5tAOnETPbCHkRygSmXBniQ66GswcZNjbJmat94x80CwDYVLeHFG6GGZWI9YpV5P0s%2FjrgKXpQSgzSPtrWvLl%2BCDZtlOltnebRm%2BksbwsDdFA9uqJjFd7mobEyFZc4luLy1JkmgeKM%2FoKH1jG4JCT%2BsGL1fooSwAl%2BsbOa3gFeZpQ6eQE&X-Amz-Signature=e3efe947ddb0fb36232ec9264a78d215ea45584ccee494b912e7860321ffb396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
