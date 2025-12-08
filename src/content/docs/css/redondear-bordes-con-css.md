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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTD7RHK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrCmR7QNMNB3HMpRBM3nGCakC0fcktIsolWyUBLpiQKAIhANJT7J2VpuNZp46fxcB4wFc4yUMiHZ%2B2tOHzuDLstPv6KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6A%2Fiyqj%2FRxyg4QUkq3APLrbn5JJx2%2BmXNY96ox733z362jAqCMic5ZA16D%2Blteng6y5RbKTlUpQY7NU6BYyJQJZMpAGvsgUeNlucU2BQPUycvSxw9rBb9EgfmcwMMTUZAQvg8wKPk00jqusg05iZsJPwb8DaObW5p0Mow22pE9sRJxDUcllT9fR2wU1WULw2MgFY20KXZ%2FpUhsorSAeBzma4HgngC7hcBYwK8HpiqfNF9ZV33cXWFrn3AAYBL4PkIsROABilhisPlxmlqtk4uarjGbC8ebexuNM0WI5R9oIghaK%2FvuGN%2FkUtF9Xsx1AlqBJFEgLGLoJ5UWSydOhtIfMBtdyax7DxStBaDQK0oCYakBHD9A1JcyX%2F%2FjGx17tcWGrC%2BS4JNN1m89%2BxN4a0KuVGUuK3nPgtPPwxKGvp%2BBtnCKvWTd2G8jQYiNhxW8Qktp2oeCwjcc8Ie2x8uhPypsT%2FePkmqKL2DkHovhBJ%2BQsKZAcMTpysTUfhIrRI23Qb9Y%2F1ukhb8s0jr43OZDpgksdXTmYyN9VPUOk7XAKuQamd6AaTUvawb35umwr04NvVQ7a%2BhQUukR5bp43NuPRt8dkvMLrXgKho%2BzG97jjpusTi3J4WgvSQ3LOmH2DRIeqDm7wdUpc%2BzuEfF3zDLtNnJBjqkAW1l3jjKBHGRhQsj7%2FHI%2Fqo%2Bhs4UaJim%2BILCOnpR%2FFGWswM%2BQFuhYdm3w77rwt8kRfVkf7ymgp6Sy6uRxnh7U0lNPNcbL%2BeoZJxw8Z6L49KIBfQ7FVX2RTin0UUDEfa0BteyjP16hDBN26Cy22%2BKh1NXiKzds3ERoBraHy5XjA%2FCQiaLjLEi803fj3u5Ei7I73mnFE2crIKQ6FHUY1rC4S9FaA4v&X-Amz-Signature=6f4c8bc79489994a82ec8ff8b48add46f9973f8a68bfcac42f921cbf56ee84c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTD7RHK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrCmR7QNMNB3HMpRBM3nGCakC0fcktIsolWyUBLpiQKAIhANJT7J2VpuNZp46fxcB4wFc4yUMiHZ%2B2tOHzuDLstPv6KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6A%2Fiyqj%2FRxyg4QUkq3APLrbn5JJx2%2BmXNY96ox733z362jAqCMic5ZA16D%2Blteng6y5RbKTlUpQY7NU6BYyJQJZMpAGvsgUeNlucU2BQPUycvSxw9rBb9EgfmcwMMTUZAQvg8wKPk00jqusg05iZsJPwb8DaObW5p0Mow22pE9sRJxDUcllT9fR2wU1WULw2MgFY20KXZ%2FpUhsorSAeBzma4HgngC7hcBYwK8HpiqfNF9ZV33cXWFrn3AAYBL4PkIsROABilhisPlxmlqtk4uarjGbC8ebexuNM0WI5R9oIghaK%2FvuGN%2FkUtF9Xsx1AlqBJFEgLGLoJ5UWSydOhtIfMBtdyax7DxStBaDQK0oCYakBHD9A1JcyX%2F%2FjGx17tcWGrC%2BS4JNN1m89%2BxN4a0KuVGUuK3nPgtPPwxKGvp%2BBtnCKvWTd2G8jQYiNhxW8Qktp2oeCwjcc8Ie2x8uhPypsT%2FePkmqKL2DkHovhBJ%2BQsKZAcMTpysTUfhIrRI23Qb9Y%2F1ukhb8s0jr43OZDpgksdXTmYyN9VPUOk7XAKuQamd6AaTUvawb35umwr04NvVQ7a%2BhQUukR5bp43NuPRt8dkvMLrXgKho%2BzG97jjpusTi3J4WgvSQ3LOmH2DRIeqDm7wdUpc%2BzuEfF3zDLtNnJBjqkAW1l3jjKBHGRhQsj7%2FHI%2Fqo%2Bhs4UaJim%2BILCOnpR%2FFGWswM%2BQFuhYdm3w77rwt8kRfVkf7ymgp6Sy6uRxnh7U0lNPNcbL%2BeoZJxw8Z6L49KIBfQ7FVX2RTin0UUDEfa0BteyjP16hDBN26Cy22%2BKh1NXiKzds3ERoBraHy5XjA%2FCQiaLjLEi803fj3u5Ei7I73mnFE2crIKQ6FHUY1rC4S9FaA4v&X-Amz-Signature=1a45cca54c170adf364856b8e3a69a939672cca425ea65443368255188a89e0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
