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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSLBWCKF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbsuFSedoUUb1Xms0v5og8VqW%2B6IisS8s57Ea%2FhDMM%2BQIhAJnxRmEVVRVdWtrPUPERrwiELrlu6PF86RT%2FBV%2Bx1GfCKv8DCHcQABoMNjM3NDIzMTgzODA1IgzilO4Q00E%2FJZB5nH8q3AP3xJvQhkA1g0YnED%2BjK20Ml%2FuFAbGIQ%2FZm%2FJaL36QeCkeqlEbL3kBkxNFyLcxBFQji76RJ9eF8xUOxPSYsE1%2F8O1yE4lwnDKVSutD60F0rPg%2BOk3RSaa8xFFOGiDTpQcv8JlED095qWQy8vMS22D%2F%2BDoCYgZVTWMCbrRGKHj%2F0z6LmI%2Bd9RpiFw0rGvLrv1Mmp4u9OiOWWH3tHfF5bV2jGtivOHtYsCH%2BxClmOwXnqG9%2BHZ4Qs16iDy8icE52tAwVt0GkN7DZkfBADqFohxTCF211Db4xplGXjyMLC5y61zELWgyimfQ3oC%2F7bb0smoC5SrMPJZg%2BQWFtcIVjbP3UHfm0TNLAtDu%2FPed7qByuDubpqcQ4hMBKRRdF%2BPr2kATKNfmYqTAtTXIu1SA5Qu5XK6RqnArKTg41ZbJyYh%2Fx0izli24UjMGNx%2FWvRRxc0XS9J4OLS%2FyoDVvGHBud1gZgxkJv5CX%2FJFOXWtolQogYVkdNXD37CwqKfY%2FkO5IR1J01CfLF51DqtDH3nJtEbDAagFigJrrQaMS%2FHl4%2FCqhzJ2ZSS3wYwLX5HBnPADLCLVv0mve2vxQHkWrbgJysukVP9XvlpOgX9iELj1KCfIA9ll3xz5ZNgP1pusqXtlDCYg4nKBjqkAZWbHa2vLQjUgNptG6roBWx3eVVmjYq6FASesZPVQREU3juthqO3fGGqeIRoHp4BAMkCJSmrJPJI%2BN6v%2Fe7%2FriE0RKPdN0BrEs2bLqZp5jipDBy%2FgA6MUITi8%2FWqT9ZO7QGoi0DVsmZXSBd%2B3wULNwNNoGfBYY0jQYhzDVcrBfcDKpyNrt7qsitVDb3QtZE5nVomFMXRJYe3KZusQRXI5qVdI8TI&X-Amz-Signature=55374b28c6364fd32dce08a66d80820ab81500a7582e6f3609e2b21dabeb0561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSLBWCKF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbsuFSedoUUb1Xms0v5og8VqW%2B6IisS8s57Ea%2FhDMM%2BQIhAJnxRmEVVRVdWtrPUPERrwiELrlu6PF86RT%2FBV%2Bx1GfCKv8DCHcQABoMNjM3NDIzMTgzODA1IgzilO4Q00E%2FJZB5nH8q3AP3xJvQhkA1g0YnED%2BjK20Ml%2FuFAbGIQ%2FZm%2FJaL36QeCkeqlEbL3kBkxNFyLcxBFQji76RJ9eF8xUOxPSYsE1%2F8O1yE4lwnDKVSutD60F0rPg%2BOk3RSaa8xFFOGiDTpQcv8JlED095qWQy8vMS22D%2F%2BDoCYgZVTWMCbrRGKHj%2F0z6LmI%2Bd9RpiFw0rGvLrv1Mmp4u9OiOWWH3tHfF5bV2jGtivOHtYsCH%2BxClmOwXnqG9%2BHZ4Qs16iDy8icE52tAwVt0GkN7DZkfBADqFohxTCF211Db4xplGXjyMLC5y61zELWgyimfQ3oC%2F7bb0smoC5SrMPJZg%2BQWFtcIVjbP3UHfm0TNLAtDu%2FPed7qByuDubpqcQ4hMBKRRdF%2BPr2kATKNfmYqTAtTXIu1SA5Qu5XK6RqnArKTg41ZbJyYh%2Fx0izli24UjMGNx%2FWvRRxc0XS9J4OLS%2FyoDVvGHBud1gZgxkJv5CX%2FJFOXWtolQogYVkdNXD37CwqKfY%2FkO5IR1J01CfLF51DqtDH3nJtEbDAagFigJrrQaMS%2FHl4%2FCqhzJ2ZSS3wYwLX5HBnPADLCLVv0mve2vxQHkWrbgJysukVP9XvlpOgX9iELj1KCfIA9ll3xz5ZNgP1pusqXtlDCYg4nKBjqkAZWbHa2vLQjUgNptG6roBWx3eVVmjYq6FASesZPVQREU3juthqO3fGGqeIRoHp4BAMkCJSmrJPJI%2BN6v%2Fe7%2FriE0RKPdN0BrEs2bLqZp5jipDBy%2FgA6MUITi8%2FWqT9ZO7QGoi0DVsmZXSBd%2B3wULNwNNoGfBYY0jQYhzDVcrBfcDKpyNrt7qsitVDb3QtZE5nVomFMXRJYe3KZusQRXI5qVdI8TI&X-Amz-Signature=bf8e2c2910575cff61e432289b77601b3adc6ecb5f3e613b3cd7e0eb19510091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
