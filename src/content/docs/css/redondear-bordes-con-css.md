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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBNBZ5AH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFa0TlP9wlMDYQF7%2B4FBIlI8QE%2BzvyI254ItS5kODfQHAiAWO85%2FOZRqbKn3itKQP%2FI%2BHpuDmrAEGV9n6w2KFF4x1CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMd4raG1V3eLBL39oKtwDJNok7VurPLNtWBu58QcxNJ2a9ExxjPAiE0nCgiC6P2cbQkUHnpa8ioWbKa5ODE2jzoGkJf7qhL%2BKTbYhcPm3d9J4tQNIYUUsE58K9UDIxEWVU2SXuteqMIlkvfrP%2BxkNvT0XC8116f9MvFryJKesMQ3xguJgMCTkcbZytOB2A7nKSF4dzp5CfWPubd4puZfv5PiUmCDwKiwoyuYq34GP3TUsYlzNYTicw0EV7Q0IKbzIi%2FDFRVv3%2BXNCgd5Mbw1aUb%2BsXF5H%2B3ACysVW2XJj4Kr8WmO5XV7pEwQXYt1wplJ6VkJO0fCMYTwKfyTwmxk42EOjp3B3F3wqoLLqK9cadnhQ0sKOxIxneW%2FRajx%2Fs41U4lbrH1R2cn5e%2BFdG%2FXm7JDazMK6GQkErs0%2BV90LSH8bIAYTrrurP3cY9srsPFOUZCZEQGB3e8lfxDUxW29GKRGtgtCsuuskgVLkgeMGoo%2BNXezwquoegJZKIdP2b%2BWHYUm7etpv5cY3OjXq%2FxRHXW1kQjNeWomN1gbBPPDdu%2BAuw0qDmwyj0d%2BuJjg1EAk2f66s30dpCqv3NV%2FO8%2BT84ETLGil2H3X1TWyjpDKkbsRxOrl%2Bn%2FiLUl1te36cenUWnS5g0wcgztkDFEhAwjv3SyQY6pgEugb180YKvvZt6hXINax7Nie8RdOUZcBfcf1mnTAc%2B%2FyKb07FBoDH6yjdJ8gR8mLp3%2Bn%2F5Qomf3ygy%2BMYKdssWq7HVKhDFVWRHmCCP5Z60xjpaOmE3T5GIw17xGgnahukUjHzTOF%2BaOI8lUsiFlWZLsgTca%2B5eSqAorF1IljhTb2jmbZSGAlYQ6uvWFwVi7Eu4vGw%2B6rkFC%2B5cmln7MAg2%2FHfRbvIU&X-Amz-Signature=3814d1c041483f4ef0acfbe01c500e96d0a79550772624ba07a6201ea282f896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBNBZ5AH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFa0TlP9wlMDYQF7%2B4FBIlI8QE%2BzvyI254ItS5kODfQHAiAWO85%2FOZRqbKn3itKQP%2FI%2BHpuDmrAEGV9n6w2KFF4x1CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMd4raG1V3eLBL39oKtwDJNok7VurPLNtWBu58QcxNJ2a9ExxjPAiE0nCgiC6P2cbQkUHnpa8ioWbKa5ODE2jzoGkJf7qhL%2BKTbYhcPm3d9J4tQNIYUUsE58K9UDIxEWVU2SXuteqMIlkvfrP%2BxkNvT0XC8116f9MvFryJKesMQ3xguJgMCTkcbZytOB2A7nKSF4dzp5CfWPubd4puZfv5PiUmCDwKiwoyuYq34GP3TUsYlzNYTicw0EV7Q0IKbzIi%2FDFRVv3%2BXNCgd5Mbw1aUb%2BsXF5H%2B3ACysVW2XJj4Kr8WmO5XV7pEwQXYt1wplJ6VkJO0fCMYTwKfyTwmxk42EOjp3B3F3wqoLLqK9cadnhQ0sKOxIxneW%2FRajx%2Fs41U4lbrH1R2cn5e%2BFdG%2FXm7JDazMK6GQkErs0%2BV90LSH8bIAYTrrurP3cY9srsPFOUZCZEQGB3e8lfxDUxW29GKRGtgtCsuuskgVLkgeMGoo%2BNXezwquoegJZKIdP2b%2BWHYUm7etpv5cY3OjXq%2FxRHXW1kQjNeWomN1gbBPPDdu%2BAuw0qDmwyj0d%2BuJjg1EAk2f66s30dpCqv3NV%2FO8%2BT84ETLGil2H3X1TWyjpDKkbsRxOrl%2Bn%2FiLUl1te36cenUWnS5g0wcgztkDFEhAwjv3SyQY6pgEugb180YKvvZt6hXINax7Nie8RdOUZcBfcf1mnTAc%2B%2FyKb07FBoDH6yjdJ8gR8mLp3%2Bn%2F5Qomf3ygy%2BMYKdssWq7HVKhDFVWRHmCCP5Z60xjpaOmE3T5GIw17xGgnahukUjHzTOF%2BaOI8lUsiFlWZLsgTca%2B5eSqAorF1IljhTb2jmbZSGAlYQ6uvWFwVi7Eu4vGw%2B6rkFC%2B5cmln7MAg2%2FHfRbvIU&X-Amz-Signature=ae5eadbba2105e2fe716387fef06961cd0ae23ee747494f29b10ebc4941995c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
