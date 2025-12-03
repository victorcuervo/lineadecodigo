---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYHN7LYA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEoTCU8Kqd10Rj8hP3FXiXDhR8clGCvM%2BnM7uwy52p4EAiEA8Q1VSHOy3jwXf%2F7qT0FvwZ9RbxNj3OmjBTlMZERD3SEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJizORYla5zj3lOENircA1RfuzbVZfZyLyTqZVGxwXmgII6WRiKeeyj7KttD1r1Zjxg83zzoGPIRfEDaFKDlYiKKDoSNEp%2FP9WaAoOcXrAQnZrX5HXOXX7DuIRRo3T87sCR2xPdS9tWZDcVeXm%2BjdKxBqOb%2BjG5u8a2egr6%2Fnop%2BhMis8rO1cSqVzEI%2FdOlTrhemzoSBOpYvVoifDVgYSR9O7LVJY0KyWTjrHxAB350RAyt4Jgq%2BnLT8tG7NuMihwRB2QC1lWZA0N2jKGgMM3wGM9xyNdguz4bmUobOGyhsZZ8u0K4nzL8pxWbHFjBK2%2BHhuvn9Nqt9Ns2ljfy4aJ5Sjssqix0P%2FCogIP48nUVlz9kiZhHJ6wpr3hg7DXcy6OwPLJwy%2FRORkCQpZnqWlFZwzF3t%2BcclRMoZSpRm9KSrTr3crc8rvBTjp7UVEQkEhDspiwcMPsZOtXDlXVNp1Szbv2BeuswyWLD3tUJ7K7d2D%2BeFmSwK5FLl3D5%2BPG2RCUNSd50DNMVecqiS6qN5SZG2F6H20A%2B6RBLAlR0YexBqjqk3gjrJVJ4p9XtYJYFfu5WtAmjJU3oGkmE2GriFFtbCw%2F9Y9Mg96hLKAreC0%2B9A71VEOB2IAYRDn8uephjKvb8tf1cJ7RVPmDJU8MKmRwskGOqUBnxsPCDSFDzielE6VjHmB50KJcXQGYHo9mv3bWfEsgEP%2BEc3Fbhm2UbS9Y%2BAjT248TODCGuno4tqSUe0vW7dmviDOaegbJCp8O4cPe1wWPSg1u9ZJnS7pVN2ICG6tOvjQS7d7w0W0DmCYr02l7H45gtp4YQ3XJfscyyqPHrpqO1Bss4suAFmEbaODPfXgLoL2fA6SayIFYCdCvPkQ57l8xmIwVe7S&X-Amz-Signature=3598ec2a1781ec4cca3c3674a3545d5b94825816abf8b05ab37fcaa564354782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYHN7LYA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEoTCU8Kqd10Rj8hP3FXiXDhR8clGCvM%2BnM7uwy52p4EAiEA8Q1VSHOy3jwXf%2F7qT0FvwZ9RbxNj3OmjBTlMZERD3SEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJizORYla5zj3lOENircA1RfuzbVZfZyLyTqZVGxwXmgII6WRiKeeyj7KttD1r1Zjxg83zzoGPIRfEDaFKDlYiKKDoSNEp%2FP9WaAoOcXrAQnZrX5HXOXX7DuIRRo3T87sCR2xPdS9tWZDcVeXm%2BjdKxBqOb%2BjG5u8a2egr6%2Fnop%2BhMis8rO1cSqVzEI%2FdOlTrhemzoSBOpYvVoifDVgYSR9O7LVJY0KyWTjrHxAB350RAyt4Jgq%2BnLT8tG7NuMihwRB2QC1lWZA0N2jKGgMM3wGM9xyNdguz4bmUobOGyhsZZ8u0K4nzL8pxWbHFjBK2%2BHhuvn9Nqt9Ns2ljfy4aJ5Sjssqix0P%2FCogIP48nUVlz9kiZhHJ6wpr3hg7DXcy6OwPLJwy%2FRORkCQpZnqWlFZwzF3t%2BcclRMoZSpRm9KSrTr3crc8rvBTjp7UVEQkEhDspiwcMPsZOtXDlXVNp1Szbv2BeuswyWLD3tUJ7K7d2D%2BeFmSwK5FLl3D5%2BPG2RCUNSd50DNMVecqiS6qN5SZG2F6H20A%2B6RBLAlR0YexBqjqk3gjrJVJ4p9XtYJYFfu5WtAmjJU3oGkmE2GriFFtbCw%2F9Y9Mg96hLKAreC0%2B9A71VEOB2IAYRDn8uephjKvb8tf1cJ7RVPmDJU8MKmRwskGOqUBnxsPCDSFDzielE6VjHmB50KJcXQGYHo9mv3bWfEsgEP%2BEc3Fbhm2UbS9Y%2BAjT248TODCGuno4tqSUe0vW7dmviDOaegbJCp8O4cPe1wWPSg1u9ZJnS7pVN2ICG6tOvjQS7d7w0W0DmCYr02l7H45gtp4YQ3XJfscyyqPHrpqO1Bss4suAFmEbaODPfXgLoL2fA6SayIFYCdCvPkQ57l8xmIwVe7S&X-Amz-Signature=b3fa993ab8836d410e1644c263893a19eb254bf44e194410934a5b41e10b4eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
