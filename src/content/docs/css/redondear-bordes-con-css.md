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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PBZSZWE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFeD8RAGwdBVM%2FoMCY68nNO9sStlHjjYuauk2JoTWI7gIhAIPhmBB3OmdQnoVbuIXpiNopR2NqA7LrFZtR5zv7RR7PKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BADmNkqMi%2BuDrWD4q3AMN1dXEb%2FAU3ZixlvuCDBOR1SDwtWLsmqALqVCK0nXGxqMfaU6dPXUG5nlACtXJWA5jAp9VYoTphC8NwfPSb8EOApicsS6HzvBAo6AUDPXVWUuqk7pIlWkxPJ2FHPzFVUgoqDQUREVbk2lYT41PSFayQOPnue8%2FCdhnBcp04zSZod1ni5gEW%2FJHHaK8y6XoNKwzsEwE1Y8flZJhq4OqUDlGv%2FprTz8ZTpQFL9w%2BPN0RjJy9MLTGb12ZwcM3vJUeUVkhEk6IBMAp1f4QFPg15Cqe6vMOZoufKHMEOP%2F4SnG8XVP4h1aPW1hwpeGj6gIGUObDum2JYM%2FRGgBTAzJNQA2Ve1Mw6ObrFheDYD7v8X6bUN9S%2FWYvP1oCWqOkyfZQ%2FtliuECkZ7rUjR%2Fv9v3W493vW7oP5c6U00dczQy2wkCNlZdrCgP%2Bhn53xavIKIGs6EJH%2FjKct%2B5ab%2FokGBTd5at7yvutBvU%2FiZQxijoa9Jmlsom0MbTSX2hQktCI6uCZEWpRUbjkolxR7iI%2B9SgZrzwzvpYcPA5RU%2Fz%2BpI63uTZgK5LUV%2FZ%2F58SckUuLIjhTW%2FW1OsmwSuonoc%2FKCp%2Fy9E0fve7JZ7pxySWIpI6v2EPMJIl61F%2BJmVL6ntCa0DDRmdXJBjqkAc8Y5zU4COst95TBF6Lvb9yGQU5mUVeW7D%2B9f2UMxjcs%2FQ8nF5nvSCE21KI44hlLeRS6vRNPgiBaYWxz3icliLx8sVZN7UbA%2BIAY4q%2BiFgFoDA4bvxqbBXsAV%2BWE7njkUnzYeClVGJjx9JNkMMY9ih812h32BOfkKJ9aiwkXtITOh6Z3k0T2JPKbw57EON5%2FNdYsIGotD9Q7T6HIdnfqvDxfVJPg&X-Amz-Signature=7fb8ef10ce9ad51989fae8db96d075627be8e1b8d572c6a01ef7f47182c5d908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PBZSZWE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFeD8RAGwdBVM%2FoMCY68nNO9sStlHjjYuauk2JoTWI7gIhAIPhmBB3OmdQnoVbuIXpiNopR2NqA7LrFZtR5zv7RR7PKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BADmNkqMi%2BuDrWD4q3AMN1dXEb%2FAU3ZixlvuCDBOR1SDwtWLsmqALqVCK0nXGxqMfaU6dPXUG5nlACtXJWA5jAp9VYoTphC8NwfPSb8EOApicsS6HzvBAo6AUDPXVWUuqk7pIlWkxPJ2FHPzFVUgoqDQUREVbk2lYT41PSFayQOPnue8%2FCdhnBcp04zSZod1ni5gEW%2FJHHaK8y6XoNKwzsEwE1Y8flZJhq4OqUDlGv%2FprTz8ZTpQFL9w%2BPN0RjJy9MLTGb12ZwcM3vJUeUVkhEk6IBMAp1f4QFPg15Cqe6vMOZoufKHMEOP%2F4SnG8XVP4h1aPW1hwpeGj6gIGUObDum2JYM%2FRGgBTAzJNQA2Ve1Mw6ObrFheDYD7v8X6bUN9S%2FWYvP1oCWqOkyfZQ%2FtliuECkZ7rUjR%2Fv9v3W493vW7oP5c6U00dczQy2wkCNlZdrCgP%2Bhn53xavIKIGs6EJH%2FjKct%2B5ab%2FokGBTd5at7yvutBvU%2FiZQxijoa9Jmlsom0MbTSX2hQktCI6uCZEWpRUbjkolxR7iI%2B9SgZrzwzvpYcPA5RU%2Fz%2BpI63uTZgK5LUV%2FZ%2F58SckUuLIjhTW%2FW1OsmwSuonoc%2FKCp%2Fy9E0fve7JZ7pxySWIpI6v2EPMJIl61F%2BJmVL6ntCa0DDRmdXJBjqkAc8Y5zU4COst95TBF6Lvb9yGQU5mUVeW7D%2B9f2UMxjcs%2FQ8nF5nvSCE21KI44hlLeRS6vRNPgiBaYWxz3icliLx8sVZN7UbA%2BIAY4q%2BiFgFoDA4bvxqbBXsAV%2BWE7njkUnzYeClVGJjx9JNkMMY9ih812h32BOfkKJ9aiwkXtITOh6Z3k0T2JPKbw57EON5%2FNdYsIGotD9Q7T6HIdnfqvDxfVJPg&X-Amz-Signature=b0b732470f928911a506769ff480f8c52df98996bffe0eea2591f9e9f3fb7a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
