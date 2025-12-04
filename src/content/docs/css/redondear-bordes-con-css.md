---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTW5CLM3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCBNbU6pznSTuR9242d3y8Iq5vDPM9kbG6KmPpObTDt%2FQIhALkTeb93NcsGl5zE1J67J0oW4ZhiLryZTLP%2FFi3fa4J5Kv8DCD0QABoMNjM3NDIzMTgzODA1IgwERedR70H%2BvGSr1NIq3AMT49wTRLUUqs8H265iV0uUPlKD624sJJuXrjCleWLYfgXJZI9WO6RUoQQj7zNmoYDllVjXNYI9FzdjG8YYpT%2FwHJldpqG%2FUkV%2Bl8BlOllGcxfdaO9vr2NM0YgBZ%2BhRx9o1oubVaQY9CTyQ2fhjQlYxFWGdnJ48%2BWUQLZVK3XVfYQWV%2F%2BLBS4bLCLiSGudrFAerW4CLTkWQ4633y%2BOfHdS7Y%2BV0z9iFS1IBjVqECZOWCvSVjYmQLB7Tfu4IXc2rry1giAibmCgYozRfrBBb441hBCcLoOD5fBlxZCu2Q498Sl0fH5UX%2BBakd%2FLTz5CzHabCxHjCQTkQj6DxSlnhjXTIuKTTPPJgOh4xmQNuPTyZiW0yXmUUD9fRLrhynm6MUn2a%2Brrcg0I8mr6ftK0qMXi9IzpF%2BOLh%2B00%2FyiNlRTyUxo6%2BGSSrU0ryrhWE%2Bdj4iIKAZvk2VcHCRNya%2BrPvxKafLXFbs2sFR4%2F8TMndCH5X6OrH5oSvdEDo6bwWMLDp8CJdAQOgvEQjo9PT%2BWjGWig%2BoqtboHX%2BbtT7P38PK9%2F9gdAiM35tvHqdHwRcHCTNbikyhDY7osAVv%2F4e%2BzWfqL6iyrpQlPwKKSoE%2Bedxx8ATQlHjI1%2FHNgDvjzaYZTDHkMTJBjqkAY4blM7kavjI4gIow1vaAOrZne1PpspsFHDWSvThsymKmJFsuS7kZolkEWl759oGTOpWvdMilzQ8HN1PxJXau5mbt3HFLHHbmbXnjJcegpHKv%2BTRnpznxLCqCkiDpAiAWZQ%2F1pT0%2BqvDht9SadGIQSVzILWvjc3UUOgS8wKKiFh4zrGyAB30nOSH1%2F038muIl2C0pobTpZ0TuOitv2KBoOvfB28%2F&X-Amz-Signature=135d27321b8e3edde868ad94a21cc8a1bf813c00b89f2bb80d35629580642cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTW5CLM3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCBNbU6pznSTuR9242d3y8Iq5vDPM9kbG6KmPpObTDt%2FQIhALkTeb93NcsGl5zE1J67J0oW4ZhiLryZTLP%2FFi3fa4J5Kv8DCD0QABoMNjM3NDIzMTgzODA1IgwERedR70H%2BvGSr1NIq3AMT49wTRLUUqs8H265iV0uUPlKD624sJJuXrjCleWLYfgXJZI9WO6RUoQQj7zNmoYDllVjXNYI9FzdjG8YYpT%2FwHJldpqG%2FUkV%2Bl8BlOllGcxfdaO9vr2NM0YgBZ%2BhRx9o1oubVaQY9CTyQ2fhjQlYxFWGdnJ48%2BWUQLZVK3XVfYQWV%2F%2BLBS4bLCLiSGudrFAerW4CLTkWQ4633y%2BOfHdS7Y%2BV0z9iFS1IBjVqECZOWCvSVjYmQLB7Tfu4IXc2rry1giAibmCgYozRfrBBb441hBCcLoOD5fBlxZCu2Q498Sl0fH5UX%2BBakd%2FLTz5CzHabCxHjCQTkQj6DxSlnhjXTIuKTTPPJgOh4xmQNuPTyZiW0yXmUUD9fRLrhynm6MUn2a%2Brrcg0I8mr6ftK0qMXi9IzpF%2BOLh%2B00%2FyiNlRTyUxo6%2BGSSrU0ryrhWE%2Bdj4iIKAZvk2VcHCRNya%2BrPvxKafLXFbs2sFR4%2F8TMndCH5X6OrH5oSvdEDo6bwWMLDp8CJdAQOgvEQjo9PT%2BWjGWig%2BoqtboHX%2BbtT7P38PK9%2F9gdAiM35tvHqdHwRcHCTNbikyhDY7osAVv%2F4e%2BzWfqL6iyrpQlPwKKSoE%2Bedxx8ATQlHjI1%2FHNgDvjzaYZTDHkMTJBjqkAY4blM7kavjI4gIow1vaAOrZne1PpspsFHDWSvThsymKmJFsuS7kZolkEWl759oGTOpWvdMilzQ8HN1PxJXau5mbt3HFLHHbmbXnjJcegpHKv%2BTRnpznxLCqCkiDpAiAWZQ%2F1pT0%2BqvDht9SadGIQSVzILWvjc3UUOgS8wKKiFh4zrGyAB30nOSH1%2F038muIl2C0pobTpZ0TuOitv2KBoOvfB28%2F&X-Amz-Signature=7f50df75392d7bf665bd54f1b51957f82ed041fd4acc8c56a535eb8101a117d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
