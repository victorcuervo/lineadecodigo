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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROAXGSFX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaFh4t2LD0boXt%2BNjZjyacrYEQGKr%2FvtHf%2ByHdNOBkGAIgYLCnCyiQUyLi%2BhB6bvfRCsk9cIyelRAVgu69Hm09wpMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLvRJhZw9cXOEtBpmCrcA0MzzWOiv5YC%2F36e5EqIT0e61QbrXyO1is19BDB72cPdSOXR05G6lCWT4ZHzxBLdCWYU6ji7IYUMQdgkBpKPY8ELqQzGg4KlLLB4lZOPiKXKOZEjqlWFyH2SSrg4lsdyYJrSRgWfHV%2Ffya1MlFGVCJUgCo5C4xvDVBX4LBi8wSFWWOlNlsuFeagWvLE5Gr8viqqNXBYQJzLw7oURfEtZdqNlHVtNYuzAJTYQBmNg4ag4KiK%2FYnTUuN%2FKeGGAVzf6WJCheDyesf5uhi9voOYTL2tf00k9S%2FBR%2F4xdg05EtyWt2LPSOOL7r8LhKlZSDM8GKDKKICaQILufw%2Bt4HeaCIyTZAgdGLZIQAu%2Bj6dZi97DpM4BnaKK7jUjr7E68o8jHgoEN64%2BF%2FgKWm5i1%2BraaFR4UtUS9DUYzu%2BUCzAZV9Tzy%2BHq%2FeeEW4wELSPCgZY%2F1dityReUJFYgOHMrWJ203gkOVKXdxc4BhKWiLDqFJzf2i8siikUYz5NKHe9MWg5SU%2B5SQBN%2Ba71au3b2h2jmS9w7rYFwU8Fn16g%2BgmysIbR6Hm4ArNgZPnCsgwiBA3M1KK8F74tSvpL%2F5vY5LV5N5d%2B%2BlzHM4Z5i8VWEA7EXpSwZ59d0QesSXqgBoZmlXMP3DzskGOqUBJTSSgNCRdY%2Fj7QTSW9eidvO5SgnHpW1aLiMwWXIB3hM998xw0DiMxUwfkFJlwHOVO59sI5ikpdk9VOVWybkkreixdKokG%2F0pEJIq3tQK%2FEcFdRo8aX73%2FiBvxibiwPGG5ZYnyO3SSoAXe2FNP2YL0MLw5DdvUWKl4nz8gvxB190GqH4G7finTD98Psz6geUPyd2H%2FcRpCo8ob%2BlNjb7fOJoDA0%2FD&X-Amz-Signature=011879b784704001f4513ce44c9ca672afc9c5476cca15b0cfc653c712abf930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROAXGSFX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaFh4t2LD0boXt%2BNjZjyacrYEQGKr%2FvtHf%2ByHdNOBkGAIgYLCnCyiQUyLi%2BhB6bvfRCsk9cIyelRAVgu69Hm09wpMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLvRJhZw9cXOEtBpmCrcA0MzzWOiv5YC%2F36e5EqIT0e61QbrXyO1is19BDB72cPdSOXR05G6lCWT4ZHzxBLdCWYU6ji7IYUMQdgkBpKPY8ELqQzGg4KlLLB4lZOPiKXKOZEjqlWFyH2SSrg4lsdyYJrSRgWfHV%2Ffya1MlFGVCJUgCo5C4xvDVBX4LBi8wSFWWOlNlsuFeagWvLE5Gr8viqqNXBYQJzLw7oURfEtZdqNlHVtNYuzAJTYQBmNg4ag4KiK%2FYnTUuN%2FKeGGAVzf6WJCheDyesf5uhi9voOYTL2tf00k9S%2FBR%2F4xdg05EtyWt2LPSOOL7r8LhKlZSDM8GKDKKICaQILufw%2Bt4HeaCIyTZAgdGLZIQAu%2Bj6dZi97DpM4BnaKK7jUjr7E68o8jHgoEN64%2BF%2FgKWm5i1%2BraaFR4UtUS9DUYzu%2BUCzAZV9Tzy%2BHq%2FeeEW4wELSPCgZY%2F1dityReUJFYgOHMrWJ203gkOVKXdxc4BhKWiLDqFJzf2i8siikUYz5NKHe9MWg5SU%2B5SQBN%2Ba71au3b2h2jmS9w7rYFwU8Fn16g%2BgmysIbR6Hm4ArNgZPnCsgwiBA3M1KK8F74tSvpL%2F5vY5LV5N5d%2B%2BlzHM4Z5i8VWEA7EXpSwZ59d0QesSXqgBoZmlXMP3DzskGOqUBJTSSgNCRdY%2Fj7QTSW9eidvO5SgnHpW1aLiMwWXIB3hM998xw0DiMxUwfkFJlwHOVO59sI5ikpdk9VOVWybkkreixdKokG%2F0pEJIq3tQK%2FEcFdRo8aX73%2FiBvxibiwPGG5ZYnyO3SSoAXe2FNP2YL0MLw5DdvUWKl4nz8gvxB190GqH4G7finTD98Psz6geUPyd2H%2FcRpCo8ob%2BlNjb7fOJoDA0%2FD&X-Amz-Signature=d6e1fa680fe530d77690dc140da0ba66628ef2a0e371e6611b4ca8f5738d8528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
