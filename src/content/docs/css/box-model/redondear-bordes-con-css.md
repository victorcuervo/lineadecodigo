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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDKHJQCJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDssQPhFEPur7TtFqhDR06gIjbTXvUkg79WvekyP9uhBgIgJEFm5f2J4xHfWW46QAynXkoBo7EqZJcQxm7FGBAHTIcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPEaJ7PhpRA5cnrcgircA4cq1h5%2FNPepsfZUALKB2LI4IKyqV4JUPqnYdij2Q9isFkX%2B4QkPba9s8q%2FqifhEHjqvq70foczF3Yo3xignJObzeUBO6mNMpq%2FtDDsWRnp9wFa8jj2KDva3vACV75eac%2FDH9Rg78nL93xFUxHZJ3oj13Qeakf5NYfL9rptzPeegtB5QUI3fz2J7vfyo8ZbAZcGhPwhNQkxcagKEHkkL0ZtVANkWGwGMKvoZ3Rb56n0ePAgltVQkgbRFAajsIUc6%2FUm%2BDylTOs2OvLeqOh64oOzYpt4yNsMp5JiRqFhMpvfC4oNBKvr6k28MFuGLy3iynF4bPoI%2Bz%2Bqay8c65BZYih0QcScYahB6XPE6AjkXyYCSWyuE7BXMl9Cov32vaDusNdNSsqksU4laueMVCIaOnnHq9uVD3lPndAHlSmcN6tKpEmTP9rmmT2qCn6oSlh0Ry6uveXktJRsqYDgziVl3Wd65rsiRgdibNdhkWjkPfVvn9rF8xQUbKACJzCyF8Aby3ANZuGVikY4KOKWgGWOF%2Bf4ny%2Foe1hKTTP7NijElwnYj%2FdfQyWFEFSzAg5iLH6NHsP%2BlFieUoMPXZAjUiCcgyOaU5RTOOQKAXlvhHXHEXUO3cKwZYNH0kPgvqbxTMNLOiMoGOqUBvivzmLrG1FOKM5wawgwCRgtCy%2B2oM2wdCHdXYvZynkP5BY0A8wU5iQBqBRAPdcJKQFyuITnoc%2FXy3mCEs3NtUI%2FKh0loSQR7mY1xArZrhi%2FvqeB6UWkHB5JMTPsVncRlXH1tKsz3TUa1JmAGfrIekN6tFtTQt5pGMAn158c0FEBv4pm8DgihSAQwI2CUmQ4MrmwYAt5XU3lTTGzQ4H9TLJXREpQg&X-Amz-Signature=712c7dee6b402b8a5dbcb655db7f01483cc5bd2a28e478383a35507be23b9c49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDKHJQCJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDssQPhFEPur7TtFqhDR06gIjbTXvUkg79WvekyP9uhBgIgJEFm5f2J4xHfWW46QAynXkoBo7EqZJcQxm7FGBAHTIcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPEaJ7PhpRA5cnrcgircA4cq1h5%2FNPepsfZUALKB2LI4IKyqV4JUPqnYdij2Q9isFkX%2B4QkPba9s8q%2FqifhEHjqvq70foczF3Yo3xignJObzeUBO6mNMpq%2FtDDsWRnp9wFa8jj2KDva3vACV75eac%2FDH9Rg78nL93xFUxHZJ3oj13Qeakf5NYfL9rptzPeegtB5QUI3fz2J7vfyo8ZbAZcGhPwhNQkxcagKEHkkL0ZtVANkWGwGMKvoZ3Rb56n0ePAgltVQkgbRFAajsIUc6%2FUm%2BDylTOs2OvLeqOh64oOzYpt4yNsMp5JiRqFhMpvfC4oNBKvr6k28MFuGLy3iynF4bPoI%2Bz%2Bqay8c65BZYih0QcScYahB6XPE6AjkXyYCSWyuE7BXMl9Cov32vaDusNdNSsqksU4laueMVCIaOnnHq9uVD3lPndAHlSmcN6tKpEmTP9rmmT2qCn6oSlh0Ry6uveXktJRsqYDgziVl3Wd65rsiRgdibNdhkWjkPfVvn9rF8xQUbKACJzCyF8Aby3ANZuGVikY4KOKWgGWOF%2Bf4ny%2Foe1hKTTP7NijElwnYj%2FdfQyWFEFSzAg5iLH6NHsP%2BlFieUoMPXZAjUiCcgyOaU5RTOOQKAXlvhHXHEXUO3cKwZYNH0kPgvqbxTMNLOiMoGOqUBvivzmLrG1FOKM5wawgwCRgtCy%2B2oM2wdCHdXYvZynkP5BY0A8wU5iQBqBRAPdcJKQFyuITnoc%2FXy3mCEs3NtUI%2FKh0loSQR7mY1xArZrhi%2FvqeB6UWkHB5JMTPsVncRlXH1tKsz3TUa1JmAGfrIekN6tFtTQt5pGMAn158c0FEBv4pm8DgihSAQwI2CUmQ4MrmwYAt5XU3lTTGzQ4H9TLJXREpQg&X-Amz-Signature=0c258f6f2655ff0bb49dfd1477dac61062379345c52e5cf80a93c57fa980d06f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
