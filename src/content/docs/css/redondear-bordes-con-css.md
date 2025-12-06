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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTT5V7L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH8jBHF4GIEotR4q3oGz6cIIr1k8Nog8cvE1yLwFgGBgIhAJ10a5DVYnWFv%2FsqBQWWahxoUcYecdsqxI2KQSsitE7zKv8DCG0QABoMNjM3NDIzMTgzODA1IgzZxfTV%2FVAJrLbx4S4q3AO%2FGduIkBof15%2FwWq6a8ryqO4lyhC%2Ff5sv31%2FwUgv4%2F8Yp9HyH1CNvG9kknfREoI80Jvysl4x3CK%2BWrwR8WJF24jNcH7wivbLDDB%2BcjZjK6AedOtoh2qcDmE6V8byzxqGwn7oOw%2BsuUcY8ZfJa9qfGZJMEel4pIP3y3icaCQ5U%2FzHdiofnaC9g1RLuEQYP2BLRYDgDzg305%2F7AAPlH4%2F2wG7mIeWjX9QSd4UD24yznZLzV4GapQO2FyDRD6ilRoUlCv1MY2aMrD%2BRd1guYjnsiu0OzlGLyThZq7fb9RTYLMpsw2DvqeROyon%2BNBT7jG5GaeYgxPnlZmIaU5E3olhPNkyLbpLzhC4JgQ1nrEteD6ah84s4iVUQc0NH3cxlG4nWlwvYh7qda%2FUM7KL1vlza7n76Yqj7I%2BD%2BGrN6PSmOG5jMMyEe7OUOtX2XKXWuGxLUjejJZm1qqnGIuG%2F8boXj15zdl%2F2jhH3edku1caVYSf4XRLUtDH%2BBja0%2BM0%2BB%2Frv%2FdfP%2FQA6Wk%2F70Is0aA8rfISaHwCfKcKENYrnujab1KfREQNccOPzWVkI64xhA7Fim%2BjKPfuzPASE7nJxL6fZjjXnSNF8uJTV%2FviOXR7cSl9nkOOeE3g53ymiaOfjDCew87JBjqkAQZ5So3oNgFyA7zquooUNazI9ynzIavxUuQgfSmlBhiJicpt3tzhj9jQkgWQp7WA6qjWt89itajbDgDbQoVzkC%2BvKqndT0rm0L%2BZgqH3re%2FAeb8nyieixch8QUkb813FiKv6tTjhzB3GmEKme7FwWWgtTjhpOqfP9ogAervqMfzd%2FgFXi76a75ESQ0AL8ypTwqk%2BsqqBi4dzFxZ3WhlbMQyCUdXk&X-Amz-Signature=429db2ce67b384447c6ac53bcca796ac8718257833d51d60f6e55eba7b4da9c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTT5V7L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH8jBHF4GIEotR4q3oGz6cIIr1k8Nog8cvE1yLwFgGBgIhAJ10a5DVYnWFv%2FsqBQWWahxoUcYecdsqxI2KQSsitE7zKv8DCG0QABoMNjM3NDIzMTgzODA1IgzZxfTV%2FVAJrLbx4S4q3AO%2FGduIkBof15%2FwWq6a8ryqO4lyhC%2Ff5sv31%2FwUgv4%2F8Yp9HyH1CNvG9kknfREoI80Jvysl4x3CK%2BWrwR8WJF24jNcH7wivbLDDB%2BcjZjK6AedOtoh2qcDmE6V8byzxqGwn7oOw%2BsuUcY8ZfJa9qfGZJMEel4pIP3y3icaCQ5U%2FzHdiofnaC9g1RLuEQYP2BLRYDgDzg305%2F7AAPlH4%2F2wG7mIeWjX9QSd4UD24yznZLzV4GapQO2FyDRD6ilRoUlCv1MY2aMrD%2BRd1guYjnsiu0OzlGLyThZq7fb9RTYLMpsw2DvqeROyon%2BNBT7jG5GaeYgxPnlZmIaU5E3olhPNkyLbpLzhC4JgQ1nrEteD6ah84s4iVUQc0NH3cxlG4nWlwvYh7qda%2FUM7KL1vlza7n76Yqj7I%2BD%2BGrN6PSmOG5jMMyEe7OUOtX2XKXWuGxLUjejJZm1qqnGIuG%2F8boXj15zdl%2F2jhH3edku1caVYSf4XRLUtDH%2BBja0%2BM0%2BB%2Frv%2FdfP%2FQA6Wk%2F70Is0aA8rfISaHwCfKcKENYrnujab1KfREQNccOPzWVkI64xhA7Fim%2BjKPfuzPASE7nJxL6fZjjXnSNF8uJTV%2FviOXR7cSl9nkOOeE3g53ymiaOfjDCew87JBjqkAQZ5So3oNgFyA7zquooUNazI9ynzIavxUuQgfSmlBhiJicpt3tzhj9jQkgWQp7WA6qjWt89itajbDgDbQoVzkC%2BvKqndT0rm0L%2BZgqH3re%2FAeb8nyieixch8QUkb813FiKv6tTjhzB3GmEKme7FwWWgtTjhpOqfP9ogAervqMfzd%2FgFXi76a75ESQ0AL8ypTwqk%2BsqqBi4dzFxZ3WhlbMQyCUdXk&X-Amz-Signature=4fc252e632f99c369af8fbc6696b7e5fccd138a40386e2ad576a001154024077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
