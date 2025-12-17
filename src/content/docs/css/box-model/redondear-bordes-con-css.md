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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L2G3Z5I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUuDNxITHq7fO39ZLTFaJgbv0PpfHVSVYLwqQ7FhqizwIgdu5aIVxkKsw6FylP9CgP43C0%2BcwoAxLD6EjcEl%2F6D4oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJTik6VlNlnBgyOeEyrcA00dd3rPVOCcz7%2BsY0TpUyXwtYOAPcaDq7ZzU0KALzj%2BTraGVdfc9ENLEgBOpAvvWcJw7o%2BFN7FR22holNgA7oNJggrQddx%2Faxvjkpgu4qjr%2Bq60m68obJyo6XkQYSriZ86enGjiKAz6CSkQH0jBWAGcjSrtgYkwFpK8kCqTmLnGj8ygdDjmB%2FE9Fzf8KbM4eL%2FCyVNDaBotxHZbi2yytyrfIWrlP5OT40LnwKOOzvXEicdkyngDnP9jkbO8Y%2FyUUmeq77amtQIMsV%2F2D6%2FbK%2Bi4vJ1MhK%2Bkxb0aIRogCywGXnChX0Q2LTPO%2BWXvwoTEonv5mjfWl5Nmv0qJ%2FVjt9teh5f5GuQQvE%2BB3oHlHhd2e%2FCFoOpCkRXI7EW%2BTR%2FKAfJnRhSIXXLH448pictjEslC8YD9o6aHeVNxXrKl%2FC5vnBESAw4WpICvk0dLbHGwY9D7X8YAIrDf9YL5w133Z7a99y%2Fht%2FjQMXfFNfycYY2Ht8QEUTkp6SZC%2FcZO%2F%2B294EKeqyahoPkkmtxHHPhPTrFpLSa86RwMbgU7d05RQkDdoHrIpjudlSd07qaCUnpyjb2ODfW9BK8fy%2FgQuy3cMwBkPiQYNLXdrjFjkjqjc5WKhLDFfvn2oO0Z5Co3vMIvOiMoGOqUBb178%2BSdbBW9nJrR7vX6YuYCFa%2B4w0BCEFrZAa47C2NxUHGLjPb5t5k8MYujxhSik7c6v72zrEAo1fecsraxppi%2FkXLHINGir2eKDjwDDwKkw%2BNfJonV4lr%2FTaDt%2BRuvUQgxb7GUqhHlR6mSdJGU%2Biq36V8A25Etv6xUGX5kPQ4mt3JXREHzPc3S75a%2BRLRrdNok%2FOMHja4AwI%2FIznmrumEEl3rIV&X-Amz-Signature=2e7817877a089e179eb72c9316bf470d3f343a81b4d596f2f1ee895a3b0c186c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L2G3Z5I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUuDNxITHq7fO39ZLTFaJgbv0PpfHVSVYLwqQ7FhqizwIgdu5aIVxkKsw6FylP9CgP43C0%2BcwoAxLD6EjcEl%2F6D4oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJTik6VlNlnBgyOeEyrcA00dd3rPVOCcz7%2BsY0TpUyXwtYOAPcaDq7ZzU0KALzj%2BTraGVdfc9ENLEgBOpAvvWcJw7o%2BFN7FR22holNgA7oNJggrQddx%2Faxvjkpgu4qjr%2Bq60m68obJyo6XkQYSriZ86enGjiKAz6CSkQH0jBWAGcjSrtgYkwFpK8kCqTmLnGj8ygdDjmB%2FE9Fzf8KbM4eL%2FCyVNDaBotxHZbi2yytyrfIWrlP5OT40LnwKOOzvXEicdkyngDnP9jkbO8Y%2FyUUmeq77amtQIMsV%2F2D6%2FbK%2Bi4vJ1MhK%2Bkxb0aIRogCywGXnChX0Q2LTPO%2BWXvwoTEonv5mjfWl5Nmv0qJ%2FVjt9teh5f5GuQQvE%2BB3oHlHhd2e%2FCFoOpCkRXI7EW%2BTR%2FKAfJnRhSIXXLH448pictjEslC8YD9o6aHeVNxXrKl%2FC5vnBESAw4WpICvk0dLbHGwY9D7X8YAIrDf9YL5w133Z7a99y%2Fht%2FjQMXfFNfycYY2Ht8QEUTkp6SZC%2FcZO%2F%2B294EKeqyahoPkkmtxHHPhPTrFpLSa86RwMbgU7d05RQkDdoHrIpjudlSd07qaCUnpyjb2ODfW9BK8fy%2FgQuy3cMwBkPiQYNLXdrjFjkjqjc5WKhLDFfvn2oO0Z5Co3vMIvOiMoGOqUBb178%2BSdbBW9nJrR7vX6YuYCFa%2B4w0BCEFrZAa47C2NxUHGLjPb5t5k8MYujxhSik7c6v72zrEAo1fecsraxppi%2FkXLHINGir2eKDjwDDwKkw%2BNfJonV4lr%2FTaDt%2BRuvUQgxb7GUqhHlR6mSdJGU%2Biq36V8A25Etv6xUGX5kPQ4mt3JXREHzPc3S75a%2BRLRrdNok%2FOMHja4AwI%2FIznmrumEEl3rIV&X-Amz-Signature=1e7fa93f91dc9243e65a4191c0ff15ed9fc1665d0e5cb5dae31fed11886a1bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
