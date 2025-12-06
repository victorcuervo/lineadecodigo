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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QCYHJQL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvUMPpBOCV9WGPZt2mq0zD8xp2CkDMQv5pA3RE%2BYz0wAiAjbn65Ty0qOuMheQL1B3lALUxxrs8RIkB3wfAb28Qs%2BSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM8OdVolcdKhJWchJNKtwDzjZE2CfpV6EOHATgBY2v6KptdfCe3SBbDEMiLgNb6FzF4OCnY0yLy%2Bb8ISCQyLq%2FHQ1GxgFvm0FhqXsvlEUkb1O8dymjZd252AEwLJzgEQbI1lW6qTjbYPcHbWujkVsmz%2FGZMwPrHsH6GCZWrNpuVsbtoXPy0p%2FZl5wdDj2JtJkqfjd7vaDgH3cuuWAHXJr%2BQheHFy%2FP9OkSqug0S0blLEhl4UQwJVWuhiRHK5WwN7hcZkTTcqjjKCKhK2GaQZCizAEIGRCnbYEJr9ADsUvddvcrdBPi1QA6CawysX%2F7YPX445VW%2FkTfuCk%2FWrzZnzjQMHD6ESY4oZLrXkNdvm8qp%2F9xgZGUL%2BE0aIeebB4z59F91gyisu6WiVXQUoOMhJIQcm9jmkLIHTLKy1wQ95Z%2F%2BdNHDhUzG5DBnIdpQHo2l8%2Ff9jGQ59OCiNxph2CYB9OU6f24YK6y6TE4thlySnooK4uO6u19Z%2F9w34lOvAhmjBUugvFVKCGheI9ptpmTVr1BboGGRaQcdAeI6CimdYDwPkgpZnkRljbfgQyEQfHsukVmjBx6RQsFshvGvWs3LD2T%2B2R%2BO09k3uJKmN8cB2tD6CbNvH2p38qpA4UnYaeO4d9gGnYg%2FRui%2BHEg1y4wvN7OyQY6pgFDhkQshT7gQOYkMwXuqGs9OUQtBFRMZg4dcryO1Ukw%2FY5tZc8x%2B94eNYhY719T%2BJBeQP8DwjdzEaw1LJWqLKthnp63rtVv9bWtvLN9syCT4yLXHzd6c80OtHAxBJq06gTB9qDgXL8PVKKhUWcD75i5nlGCDn3I3cP8OWcOO3S9hirg3f%2BZnfdolaKH5AtkXOf2tAJDT8v54cw4%2Fuzw5svBKyCI7n0x&X-Amz-Signature=4ccf40c61e63ec96a292e30ae14750ae74f291cbe33204a66ebd8df9432ea1b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QCYHJQL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvUMPpBOCV9WGPZt2mq0zD8xp2CkDMQv5pA3RE%2BYz0wAiAjbn65Ty0qOuMheQL1B3lALUxxrs8RIkB3wfAb28Qs%2BSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM8OdVolcdKhJWchJNKtwDzjZE2CfpV6EOHATgBY2v6KptdfCe3SBbDEMiLgNb6FzF4OCnY0yLy%2Bb8ISCQyLq%2FHQ1GxgFvm0FhqXsvlEUkb1O8dymjZd252AEwLJzgEQbI1lW6qTjbYPcHbWujkVsmz%2FGZMwPrHsH6GCZWrNpuVsbtoXPy0p%2FZl5wdDj2JtJkqfjd7vaDgH3cuuWAHXJr%2BQheHFy%2FP9OkSqug0S0blLEhl4UQwJVWuhiRHK5WwN7hcZkTTcqjjKCKhK2GaQZCizAEIGRCnbYEJr9ADsUvddvcrdBPi1QA6CawysX%2F7YPX445VW%2FkTfuCk%2FWrzZnzjQMHD6ESY4oZLrXkNdvm8qp%2F9xgZGUL%2BE0aIeebB4z59F91gyisu6WiVXQUoOMhJIQcm9jmkLIHTLKy1wQ95Z%2F%2BdNHDhUzG5DBnIdpQHo2l8%2Ff9jGQ59OCiNxph2CYB9OU6f24YK6y6TE4thlySnooK4uO6u19Z%2F9w34lOvAhmjBUugvFVKCGheI9ptpmTVr1BboGGRaQcdAeI6CimdYDwPkgpZnkRljbfgQyEQfHsukVmjBx6RQsFshvGvWs3LD2T%2B2R%2BO09k3uJKmN8cB2tD6CbNvH2p38qpA4UnYaeO4d9gGnYg%2FRui%2BHEg1y4wvN7OyQY6pgFDhkQshT7gQOYkMwXuqGs9OUQtBFRMZg4dcryO1Ukw%2FY5tZc8x%2B94eNYhY719T%2BJBeQP8DwjdzEaw1LJWqLKthnp63rtVv9bWtvLN9syCT4yLXHzd6c80OtHAxBJq06gTB9qDgXL8PVKKhUWcD75i5nlGCDn3I3cP8OWcOO3S9hirg3f%2BZnfdolaKH5AtkXOf2tAJDT8v54cw4%2Fuzw5svBKyCI7n0x&X-Amz-Signature=0655f774d8202784fd97a4f443c87099ab94b51d62a0a8a1876aec27bab9b09a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
