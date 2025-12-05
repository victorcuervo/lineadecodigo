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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JSNSLWM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAd2B0P09EoQIWPaIboOIe0p751GvZjPZc%2BqGSjXjK1AIhAN0OPaxAIwx8yAAsDJ8Z7WkYh5z%2BrNYOGk2FjzwA7cKbKv8DCFsQABoMNjM3NDIzMTgzODA1IgyNukTmfGm5dyyHmCkq3AMwsXf6JOqrStUoLj5YJz%2BWm3ZydWrcM%2B2ei19lVpOR0XwaKAGgP8vUSXERHG3wIHoforTibRtCZCSWKhzdgFRtCM3uB7TDztqvFvC6gJ3kNT9ara4qfZPnSZP8E5s1z4tWEnKtmI0%2FPsJ%2F5pkMMcCuexNH0YlgOm1vAzpowgPjxv63ZH6V8FpkrrSQM9AOsMV%2BTU1l8f4XtdbyNJgwwjyDtaSs5h0RQ6vXf4p1OHj05vJ%2BIq7AjU3xx1kDQ2LsMOGQnclqaV319KfwM0mm2CHOz6Kdy21eTqBQvIiJA1snegoygWqh1xmxUbdCKUj%2FFiJ%2Bos6XpSrtLR8ARrMIquPSm8KJqegegpFVaEnoPR9YaFHC2zf7r0T72eiRzgHvnBh1xZt%2B2T%2B1%2B7bgzw0W07Ip5sSZbKU0qufGxFURK6GO0qkMKwVMaHar9wVtnTOPJBsKmUaDYWXK1uo0VFyHjAuZrX9JlB8e2kR%2FSTyE62TRHbCf8PezUojzRaIZBzFcj7onPJMSm5WIVngH0oE%2Bum1a7MLfnopr5LtGmLCyPLvm38beq%2F9FwNynUVVVvS2TU4OmG5ys3KiGF5lGfvyQQscuWYnwGKmeCqBOBUtnIkcaDkVgUH2mROWCCTM6NDCn3srJBjqkAURlgMohRY9aPFCQ3l1HewWWMTGS21vAyo6zRqNztPwd7%2FEPL%2BkTJcJvYEhs2kBUehgJMBxl26vkX8onMl2r9IxkFfCE5cIG1JBj%2FNW6kcRI%2BQ5HerOllD2VsxA9%2BRqzD4zo4HRqXLv%2B6q%2FXVHYekQ9%2BFg29NXF8g3OGpEye8qGh8nDTmj4WvEoNNnQYBD1OPKern5rMqzp6BZv9gB%2BU2507iPif&X-Amz-Signature=9d166e46d47d5e739d491b22a8c1c6876b0463298d2cd30dd7d2d5fb1a81d2a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JSNSLWM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAd2B0P09EoQIWPaIboOIe0p751GvZjPZc%2BqGSjXjK1AIhAN0OPaxAIwx8yAAsDJ8Z7WkYh5z%2BrNYOGk2FjzwA7cKbKv8DCFsQABoMNjM3NDIzMTgzODA1IgyNukTmfGm5dyyHmCkq3AMwsXf6JOqrStUoLj5YJz%2BWm3ZydWrcM%2B2ei19lVpOR0XwaKAGgP8vUSXERHG3wIHoforTibRtCZCSWKhzdgFRtCM3uB7TDztqvFvC6gJ3kNT9ara4qfZPnSZP8E5s1z4tWEnKtmI0%2FPsJ%2F5pkMMcCuexNH0YlgOm1vAzpowgPjxv63ZH6V8FpkrrSQM9AOsMV%2BTU1l8f4XtdbyNJgwwjyDtaSs5h0RQ6vXf4p1OHj05vJ%2BIq7AjU3xx1kDQ2LsMOGQnclqaV319KfwM0mm2CHOz6Kdy21eTqBQvIiJA1snegoygWqh1xmxUbdCKUj%2FFiJ%2Bos6XpSrtLR8ARrMIquPSm8KJqegegpFVaEnoPR9YaFHC2zf7r0T72eiRzgHvnBh1xZt%2B2T%2B1%2B7bgzw0W07Ip5sSZbKU0qufGxFURK6GO0qkMKwVMaHar9wVtnTOPJBsKmUaDYWXK1uo0VFyHjAuZrX9JlB8e2kR%2FSTyE62TRHbCf8PezUojzRaIZBzFcj7onPJMSm5WIVngH0oE%2Bum1a7MLfnopr5LtGmLCyPLvm38beq%2F9FwNynUVVVvS2TU4OmG5ys3KiGF5lGfvyQQscuWYnwGKmeCqBOBUtnIkcaDkVgUH2mROWCCTM6NDCn3srJBjqkAURlgMohRY9aPFCQ3l1HewWWMTGS21vAyo6zRqNztPwd7%2FEPL%2BkTJcJvYEhs2kBUehgJMBxl26vkX8onMl2r9IxkFfCE5cIG1JBj%2FNW6kcRI%2BQ5HerOllD2VsxA9%2BRqzD4zo4HRqXLv%2B6q%2FXVHYekQ9%2BFg29NXF8g3OGpEye8qGh8nDTmj4WvEoNNnQYBD1OPKern5rMqzp6BZv9gB%2BU2507iPif&X-Amz-Signature=fdd86bb2f5c839e269191a27f98479b71501f1ccd5b004dbf369fc61563c01c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
