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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644325VPY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa5HisuTzpdVHnOtyLEwyQtt7LMneB%2BPsLoLpXp9a%2BoAiEAqcmzGhFsd%2Bi0oYofblYM0R8Wa9hck4U6b7gAKczN45IqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0jY%2B1cm5eL%2BJvFOCrcAwTE1GSBb0hP64Vj%2F70MQXCSY%2FWQghcOA9jOheYY2onkcBj2d5LwM2yOWGaTYM9%2BQYdrQT%2FZ8DHYDdybX013swR3slZ%2FRRREZK3w0pqYKLDfoMs49rpCto1u%2BYvv4xY4WZzR9%2F41wa95lo8qXZrMGvQVSB62Tq5hWkby4xmtRsGm9yXM4UvNwAQWxF677SXBj%2BBemTjbiJyxvd05ual8DH%2B6UWoDNKZrWiJvA3vex5enkvOPnwGL1OD4kFrVgRyOsyYsHn%2Bspi9Mwepao3k%2FHdEHHPtrSkxB4jXc80U6wP16Jzm0gQfq5h52uqrs8XD5N1U0WLt%2BDl%2FyGW068v5190sH5ZBgFh5%2BfDUYshyAxYwhLZhdhstOoTiyqNAQ5MRXsZLjCIS6MHhaB%2F94hqVCOoGpxD7HTCK9B5ybFXLjwws9EqEX0a84alBJ%2Fki5IUjWZMv3Vm79Q5xFBtoykrCWPxD01KXx1NKh8srFX%2FRA4fJIxN4VZHQ1qUiN4o2MLyONIRVrz%2BSuib5t0tJwBaqNwl%2BSA2VOlwitFn5jE9sCDUAHkNkUMuhCviu3JuYHHBfcb8FiFJEwWySk5CQFZimhLJj%2FvkL0O%2BBek%2FyAMmvIiAO739m4E3Zj6%2FgVn2QLMMiZ1ckGOqUBOBsBQa8FM8uMllHMScWytm8czDBHrM%2ByozL2q33XSR4hizg6%2BcewevoXk9c185Fn7%2BCJChHWwAwIhZGvdPiUZBbMhHHsKY%2BCTo6Skw7d4C4%2F9ufNAT7S%2BkCVwOdarRnTBrfGmBNfYZFDbWGygrxyA1zyR1MyOuMytLqZ2C416cAkGkxwNvpCXZs1EPFJAhc24ufM5bV9c7Lys1QykQIK%2FL%2BMsxi%2F&X-Amz-Signature=b657d02e6b9c61b93da2c678d4eb71261ec63694ed88438c8155a063cfe06da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644325VPY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa5HisuTzpdVHnOtyLEwyQtt7LMneB%2BPsLoLpXp9a%2BoAiEAqcmzGhFsd%2Bi0oYofblYM0R8Wa9hck4U6b7gAKczN45IqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0jY%2B1cm5eL%2BJvFOCrcAwTE1GSBb0hP64Vj%2F70MQXCSY%2FWQghcOA9jOheYY2onkcBj2d5LwM2yOWGaTYM9%2BQYdrQT%2FZ8DHYDdybX013swR3slZ%2FRRREZK3w0pqYKLDfoMs49rpCto1u%2BYvv4xY4WZzR9%2F41wa95lo8qXZrMGvQVSB62Tq5hWkby4xmtRsGm9yXM4UvNwAQWxF677SXBj%2BBemTjbiJyxvd05ual8DH%2B6UWoDNKZrWiJvA3vex5enkvOPnwGL1OD4kFrVgRyOsyYsHn%2Bspi9Mwepao3k%2FHdEHHPtrSkxB4jXc80U6wP16Jzm0gQfq5h52uqrs8XD5N1U0WLt%2BDl%2FyGW068v5190sH5ZBgFh5%2BfDUYshyAxYwhLZhdhstOoTiyqNAQ5MRXsZLjCIS6MHhaB%2F94hqVCOoGpxD7HTCK9B5ybFXLjwws9EqEX0a84alBJ%2Fki5IUjWZMv3Vm79Q5xFBtoykrCWPxD01KXx1NKh8srFX%2FRA4fJIxN4VZHQ1qUiN4o2MLyONIRVrz%2BSuib5t0tJwBaqNwl%2BSA2VOlwitFn5jE9sCDUAHkNkUMuhCviu3JuYHHBfcb8FiFJEwWySk5CQFZimhLJj%2FvkL0O%2BBek%2FyAMmvIiAO739m4E3Zj6%2FgVn2QLMMiZ1ckGOqUBOBsBQa8FM8uMllHMScWytm8czDBHrM%2ByozL2q33XSR4hizg6%2BcewevoXk9c185Fn7%2BCJChHWwAwIhZGvdPiUZBbMhHHsKY%2BCTo6Skw7d4C4%2F9ufNAT7S%2BkCVwOdarRnTBrfGmBNfYZFDbWGygrxyA1zyR1MyOuMytLqZ2C416cAkGkxwNvpCXZs1EPFJAhc24ufM5bV9c7Lys1QykQIK%2FL%2BMsxi%2F&X-Amz-Signature=ac85e0dcb984402ef7ff39753f05656ca88b0714d7acb6849a819cdf3d6c6b2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
