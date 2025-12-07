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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPRW7JRP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEa6yeXN%2BKpEI7r2nazLbYh%2FJ3P310pB%2FDLkM7qjZoRAiB88jaI%2FhhUsYkRyAzxPe9ousuUUL1tEWEi9KMc2j1FRyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHYuhbqm9RDTBsQtGKtwDVe%2BYcSdVuxtG7CdBJaa2DQfc2eDhDfWkZ%2FertxCg0MkdeSWSx1oaR%2BtQlxd5stabelArV%2B66BhKB3zDZa4lMZuyOK7bs2479QB3aR99qmZcU8jzYtrlwRo6%2FdvRpAmwJM7183T8alwxv5l38sShsgwAQPvFoHFwvlOH7CWp6OA%2BxsaAaP%2Ff%2FD1%2BoYf%2F1uMIPfYXCVZa3CfFazsxiwpE0cUHSjt1t0rU0KktKMafiak0E%2Fr34wOrf5YUMI2kpyu2OcOENWtQweQQJ9%2FY4q8Pt%2FAi1kP%2BkvFAlza%2BdmWti1tWUyxLgSSxaGQoFvwA5cnqD4rmMNPBKBkvxaB6r8CHMJvfekBn6QPcyQ%2FvQgYbeGKXAVLp8RG2nEodZxYF3bzBPQwE50hRoRvp0hxqI%2F7oLt%2BnEqA1W0zzAHn1eZ5iVF9SqDVOmoccyK2Hp6t1WaZyT68ZcaxSn6s2Sy%2FbFmXR9lv%2FCnhwUQcbobix9J2I1zSTYyaVkzHZDLyYTmox%2F03X3x%2BnJgNANR9lITWZ4SdbDqPF6vx5HoRHq1rTt99C2Qdi2Gvic4ryzae1reg0r5I3CI84jfUjVZACP7DNKyHHy%2FiD7HRdDJk%2FXspESQN6Jeb1%2BO699lv4VAlV4KR0wzZrVyQY6pgHOkuVO%2Foqv4ctLVNj6qwmWe02Bg9xK%2BKl5Fttj%2B2DY5v9JkgOXyrJq7Tb9vmAeXhryVxhE6FWHqjEY%2FrsBugyRY2QZga2fBqR3XCZYD4iUk82QlwNR38fKZEwQzkJOF3N0hf%2FmWyCacLu3LpQ2uto%2BIlt0FXo8O231c81ANCMp4Vn7Rc9jrH2eoW6%2BDEqqvfL7krI9ScqpAPqhIxPMJuMvFMwIFfgk&X-Amz-Signature=9c89b63ec103515c2dc92854f747a01757f7cb0737f9fc01174ac184abf42438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPRW7JRP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEa6yeXN%2BKpEI7r2nazLbYh%2FJ3P310pB%2FDLkM7qjZoRAiB88jaI%2FhhUsYkRyAzxPe9ousuUUL1tEWEi9KMc2j1FRyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHYuhbqm9RDTBsQtGKtwDVe%2BYcSdVuxtG7CdBJaa2DQfc2eDhDfWkZ%2FertxCg0MkdeSWSx1oaR%2BtQlxd5stabelArV%2B66BhKB3zDZa4lMZuyOK7bs2479QB3aR99qmZcU8jzYtrlwRo6%2FdvRpAmwJM7183T8alwxv5l38sShsgwAQPvFoHFwvlOH7CWp6OA%2BxsaAaP%2Ff%2FD1%2BoYf%2F1uMIPfYXCVZa3CfFazsxiwpE0cUHSjt1t0rU0KktKMafiak0E%2Fr34wOrf5YUMI2kpyu2OcOENWtQweQQJ9%2FY4q8Pt%2FAi1kP%2BkvFAlza%2BdmWti1tWUyxLgSSxaGQoFvwA5cnqD4rmMNPBKBkvxaB6r8CHMJvfekBn6QPcyQ%2FvQgYbeGKXAVLp8RG2nEodZxYF3bzBPQwE50hRoRvp0hxqI%2F7oLt%2BnEqA1W0zzAHn1eZ5iVF9SqDVOmoccyK2Hp6t1WaZyT68ZcaxSn6s2Sy%2FbFmXR9lv%2FCnhwUQcbobix9J2I1zSTYyaVkzHZDLyYTmox%2F03X3x%2BnJgNANR9lITWZ4SdbDqPF6vx5HoRHq1rTt99C2Qdi2Gvic4ryzae1reg0r5I3CI84jfUjVZACP7DNKyHHy%2FiD7HRdDJk%2FXspESQN6Jeb1%2BO699lv4VAlV4KR0wzZrVyQY6pgHOkuVO%2Foqv4ctLVNj6qwmWe02Bg9xK%2BKl5Fttj%2B2DY5v9JkgOXyrJq7Tb9vmAeXhryVxhE6FWHqjEY%2FrsBugyRY2QZga2fBqR3XCZYD4iUk82QlwNR38fKZEwQzkJOF3N0hf%2FmWyCacLu3LpQ2uto%2BIlt0FXo8O231c81ANCMp4Vn7Rc9jrH2eoW6%2BDEqqvfL7krI9ScqpAPqhIxPMJuMvFMwIFfgk&X-Amz-Signature=9f198e429fbc44620a163fb308c98c336379a97b089b64a55221e4a7eadc8446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
