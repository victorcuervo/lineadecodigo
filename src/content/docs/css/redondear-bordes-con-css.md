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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFAU5VT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdOnxm6xXjvMd%2BpsPFRidaKeVhju9WG4MCUVNQJC2nNAiAh8B%2BG0aXtMPhMfwJf0U0e8KNc0C4mB0LhYpHBuFhgKCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl%2FW%2BEeyBVDTIutwNKtwD5oNpTJbQ2A5dbQ%2FIubql62Mtq526pvWqYq2YfxqzpBMXsi4GMk%2FYxXaII6Cy8zkrr3ubjWgu%2BX6Yu8upz6F0L5SutrXx6AbdjAa1LJEFfVDTTYhO1AoP%2F3J5CEW4EQkX0q7ClDdHAjTcWBTW5BBoYjXndIKVyb0Jcb8nR2taN5pHZdaNLrzvL7gCrkQW6xRlyWkiUcTju%2F9QGmxS8ygG9xANqCB1wEN629mcEIcWzfyFueHtgqOIQRQQ8Xq1R4XwH3i%2B8g4zm3ymz0MhDuXz0K8x%2F7PY9%2BBYjICbHvSdhGuEqtMvHFcfF8YV469ngU1UrNmKW75WuvQ3gJZuI4akJcPR7h%2B7T%2FR16uPtp6jMdIyv6eWa31JwP7%2FlJ4ALSOJ8lfOyD7ngfT4qqwiLmlRzk75FZ%2FfqnRcSA%2B4ThuHXi4zeHnw%2BfZawBDTFsBzxQ%2B3V2gukgqaZo0jSQ6NYR2uhX6TY%2B988NCvu2o6jtheDhunB8uGLe%2FTNrIJdLtF9vk2q6MIakFT0hRlZ1R8rq6XNxT3fhtHhVRreX%2BX%2BYKykX6j9DKluWtOqt2mK%2FioIhayW41e7HV9%2FGb0UiDr9gHq7%2FrQ2IOv1RQb%2F0FopVm5k%2FB7sjC5Re1L1iBPKoQ8w%2Fo%2FbyQY6pgHI87GELKy4F8K4pjQPgZmAMW9XZ%2BC4ne61SWjbxZM0hqPkldPq%2FWSwLj1rkHUhwgg2%2BFrirWf9cyIiDsfjHciNtk4kz0KrQx5XSJUwpdb3yqugs0c0YZC0ubaqOglvG7diWfQmwrRkzZtrMlnr1S5XTf5Dh5zddN8%2FzW6hE9C66ED9rzylE%2B02n76SraU6cbIwdcdnAzaBlDbO5QSUKz24HzKaXdir&X-Amz-Signature=8cbe109941acdc01fb5b50e07fcb765e819cc2e4ccec126966c8640c482649db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFAU5VT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdOnxm6xXjvMd%2BpsPFRidaKeVhju9WG4MCUVNQJC2nNAiAh8B%2BG0aXtMPhMfwJf0U0e8KNc0C4mB0LhYpHBuFhgKCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl%2FW%2BEeyBVDTIutwNKtwD5oNpTJbQ2A5dbQ%2FIubql62Mtq526pvWqYq2YfxqzpBMXsi4GMk%2FYxXaII6Cy8zkrr3ubjWgu%2BX6Yu8upz6F0L5SutrXx6AbdjAa1LJEFfVDTTYhO1AoP%2F3J5CEW4EQkX0q7ClDdHAjTcWBTW5BBoYjXndIKVyb0Jcb8nR2taN5pHZdaNLrzvL7gCrkQW6xRlyWkiUcTju%2F9QGmxS8ygG9xANqCB1wEN629mcEIcWzfyFueHtgqOIQRQQ8Xq1R4XwH3i%2B8g4zm3ymz0MhDuXz0K8x%2F7PY9%2BBYjICbHvSdhGuEqtMvHFcfF8YV469ngU1UrNmKW75WuvQ3gJZuI4akJcPR7h%2B7T%2FR16uPtp6jMdIyv6eWa31JwP7%2FlJ4ALSOJ8lfOyD7ngfT4qqwiLmlRzk75FZ%2FfqnRcSA%2B4ThuHXi4zeHnw%2BfZawBDTFsBzxQ%2B3V2gukgqaZo0jSQ6NYR2uhX6TY%2B988NCvu2o6jtheDhunB8uGLe%2FTNrIJdLtF9vk2q6MIakFT0hRlZ1R8rq6XNxT3fhtHhVRreX%2BX%2BYKykX6j9DKluWtOqt2mK%2FioIhayW41e7HV9%2FGb0UiDr9gHq7%2FrQ2IOv1RQb%2F0FopVm5k%2FB7sjC5Re1L1iBPKoQ8w%2Fo%2FbyQY6pgHI87GELKy4F8K4pjQPgZmAMW9XZ%2BC4ne61SWjbxZM0hqPkldPq%2FWSwLj1rkHUhwgg2%2BFrirWf9cyIiDsfjHciNtk4kz0KrQx5XSJUwpdb3yqugs0c0YZC0ubaqOglvG7diWfQmwrRkzZtrMlnr1S5XTf5Dh5zddN8%2FzW6hE9C66ED9rzylE%2B02n76SraU6cbIwdcdnAzaBlDbO5QSUKz24HzKaXdir&X-Amz-Signature=bd2d54d8eb4459e83ebe25b9f1044e33c2f7c0f4a2263eaa119fc31d32c3cadc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
