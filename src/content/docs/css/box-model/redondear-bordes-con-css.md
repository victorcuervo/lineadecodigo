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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHIDGVI4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2O1gd7atMh9IY%2B5WgUgon%2FgRavZyzsA%2B0y2do9egvbwIgX39bdgMzISiW0SkhBnp3h5FQM00hx42TcPRuB6xI7dcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDuXTvNzOrDCoMVUxircAyLkI4m7esN%2FEAPr533sS%2BOUCgsbK3C4mDCwDfIZYtPtHb4GZ%2FAo5GEni4QPD9sm%2BFBo9%2BUC2qCnA9Z0q4qHf6PfSO6rw1e%2FaEZXySwTH9EMRmXWTuYqfneTiAhY%2Fn5T927j69fkDWeahK%2BiKSmjsxX0Ffhj3SIym3kQUjB8Ld0TFCT1vV1XQ5rpeKcOZCtUghYvka5kfLcTNI36vplkMQbao%2FJHt8a8MrU2xn%2FNX1QI9yiUpmxGHadNjkcLJifpF98d5s0oTIEz1dMK%2B3OX9BRr51YZIMDFpsOLQYKqtknbXz5aANqxUBwHcQbFOwPaUMgEMeuXcttlBXmDlgRhB421LsGtNcGg9Nixj7NmDsxfOwVGSNav9Z90LxVN4z7bwz9ip8qfb7JTtz8lIC0K0URTt7rzqp21KUOcHMgLgQ5t7cXu0PK9tYRFeK8G20EY89x3QbgyTKY3gdYZHzQAyjJMfw%2Bsj2TYvc1i0ksk2D0a0o8sd7cYvdC9WgmkpcD5Y2Ceo5ooeaf4HpDJtjwv4BC5K1OKfKpSqFAy%2F8IuzbW7iR8vEFe4b7sfC7WVPGAt1ZBV1NmZ2g7nyt9JjqyiP8SlwerYT7yH5WML2QSsKRjB%2B27EnXJ%2BczHlch3%2BMJa4icoGOqUBck1i7cOWIN8aXO7Ty4qzqgFYtqFfhh6COKLndK9WOzWx5jfEBEca51ZtYzNnVN1Q4JpfbPPbIXFVePrzKw1yybEMUfbfrIR%2FEzHya%2FddrYCewMuKppXtGOb80JlpqvpxGH6MR8NBVHCyS744xQtsbJVHVUVoU9C9rScPmdiAQh7iOpfhVBVCW7iuteNWku0lGmPcM2BGufaP8dtbhGHKmT4M55Wx&X-Amz-Signature=fe9854cab3b28baac63a183375e509e05bc4710bfeb0a53d11b575226f339f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHIDGVI4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2O1gd7atMh9IY%2B5WgUgon%2FgRavZyzsA%2B0y2do9egvbwIgX39bdgMzISiW0SkhBnp3h5FQM00hx42TcPRuB6xI7dcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDuXTvNzOrDCoMVUxircAyLkI4m7esN%2FEAPr533sS%2BOUCgsbK3C4mDCwDfIZYtPtHb4GZ%2FAo5GEni4QPD9sm%2BFBo9%2BUC2qCnA9Z0q4qHf6PfSO6rw1e%2FaEZXySwTH9EMRmXWTuYqfneTiAhY%2Fn5T927j69fkDWeahK%2BiKSmjsxX0Ffhj3SIym3kQUjB8Ld0TFCT1vV1XQ5rpeKcOZCtUghYvka5kfLcTNI36vplkMQbao%2FJHt8a8MrU2xn%2FNX1QI9yiUpmxGHadNjkcLJifpF98d5s0oTIEz1dMK%2B3OX9BRr51YZIMDFpsOLQYKqtknbXz5aANqxUBwHcQbFOwPaUMgEMeuXcttlBXmDlgRhB421LsGtNcGg9Nixj7NmDsxfOwVGSNav9Z90LxVN4z7bwz9ip8qfb7JTtz8lIC0K0URTt7rzqp21KUOcHMgLgQ5t7cXu0PK9tYRFeK8G20EY89x3QbgyTKY3gdYZHzQAyjJMfw%2Bsj2TYvc1i0ksk2D0a0o8sd7cYvdC9WgmkpcD5Y2Ceo5ooeaf4HpDJtjwv4BC5K1OKfKpSqFAy%2F8IuzbW7iR8vEFe4b7sfC7WVPGAt1ZBV1NmZ2g7nyt9JjqyiP8SlwerYT7yH5WML2QSsKRjB%2B27EnXJ%2BczHlch3%2BMJa4icoGOqUBck1i7cOWIN8aXO7Ty4qzqgFYtqFfhh6COKLndK9WOzWx5jfEBEca51ZtYzNnVN1Q4JpfbPPbIXFVePrzKw1yybEMUfbfrIR%2FEzHya%2FddrYCewMuKppXtGOb80JlpqvpxGH6MR8NBVHCyS744xQtsbJVHVUVoU9C9rScPmdiAQh7iOpfhVBVCW7iuteNWku0lGmPcM2BGufaP8dtbhGHKmT4M55Wx&X-Amz-Signature=65455cfe90b8ecae5a43358d5e5354c6a98a9c6730b1382fab47648401f9fda2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
