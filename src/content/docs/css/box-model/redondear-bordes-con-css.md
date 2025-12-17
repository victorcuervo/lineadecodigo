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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHFC6OJG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG92MAQ8ed9XY5PnmlIn4ueIZA2MpqPM60Y30KTQ26IrAiEAzB4uyBPb%2F003RRyNtELkGJbTTs7uCdyNlxCgBYECOYwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BqBBxBN7q00mZJjircA3IzXbi2eboIKJ0f3SGLVkCTHcPA6sTbiPm4vrvdp8cIfEBIlCb7LUOTE%2F1x5kyu3hjBCkAplGdWjOmLbGDoKQQNdJ99qjdWkJDoxewApHB3AMoa17%2Bl7T%2FvcCg8ZwVXp%2BsuDAjkjrQYCQbXxQh9D1keC7C%2BuXj1nqhee6Nj3kF%2BCTtuhCMoBfP8RzwOeIWbLh9%2B%2BCJNQDFEPSpRiulLSX0uTnxtNVt6O3zLNE3OifxNDiKxxIzjvBDXGNV8tUOqjAGWHzzaq2d%2BCL1UXbtANcElV7W%2BihBqCJUkyvZf8IT%2F%2Fg%2FpYRNC4tv5N9DME2qCKWVi7mOIF%2BJdsbkjct3ryT%2FSdJDJjY43er%2B71HO0JMLrKQ0fyd9AJxy86Ia4Z1ncp5A7VSffgjWYfdHO1nQTfLSQkW6cM6ZKgDXUNpwCKIhCcrZ4jVyBCH95yI4VC5PVcDxcspB3mgLQaHgs8lkUuQjUXh%2Bdmt7uLWTen7Bwtc%2FVhj2zZX%2B70PW0Va%2BdzIbsSzAAXmFuizjo5c3%2FqH%2FyYFLppDMfZOo98Y53%2FZR2O3DpET%2FHK43RrFhxIDQsppOJF84tPhX7jogBfss9iZxjBgAfwr1G3fDamGjnc1Pefvb0VO8XeClKvpo9ityeMJ%2Bgi8oGOqUB%2FfZhRruNOh7cMkDLteAuzzB%2BbKWPs%2F9Kay%2FzPZvWXz5sUNiSpRp3eR3NEWjhV%2FjQ4BGPeTbyLZd1rkT8LMsvDJlRzPlR9ph3MamnWQxcjpJjDLjq0LS5tNGQbvUD5AKzU6zrYtgyJ%2BTosSGeppSXa0RZZXbwK3dhCANYB3iOPQl1SJORZKsBIzzYf0Xl2vL0a%2FZdUocDpHwGT2FEF9D5c%2FYzLUea&X-Amz-Signature=093dad26793c1bd8002236c8f7ccf5b97d6523fcd0e1ee218b41da9f4779527a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHFC6OJG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG92MAQ8ed9XY5PnmlIn4ueIZA2MpqPM60Y30KTQ26IrAiEAzB4uyBPb%2F003RRyNtELkGJbTTs7uCdyNlxCgBYECOYwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BqBBxBN7q00mZJjircA3IzXbi2eboIKJ0f3SGLVkCTHcPA6sTbiPm4vrvdp8cIfEBIlCb7LUOTE%2F1x5kyu3hjBCkAplGdWjOmLbGDoKQQNdJ99qjdWkJDoxewApHB3AMoa17%2Bl7T%2FvcCg8ZwVXp%2BsuDAjkjrQYCQbXxQh9D1keC7C%2BuXj1nqhee6Nj3kF%2BCTtuhCMoBfP8RzwOeIWbLh9%2B%2BCJNQDFEPSpRiulLSX0uTnxtNVt6O3zLNE3OifxNDiKxxIzjvBDXGNV8tUOqjAGWHzzaq2d%2BCL1UXbtANcElV7W%2BihBqCJUkyvZf8IT%2F%2Fg%2FpYRNC4tv5N9DME2qCKWVi7mOIF%2BJdsbkjct3ryT%2FSdJDJjY43er%2B71HO0JMLrKQ0fyd9AJxy86Ia4Z1ncp5A7VSffgjWYfdHO1nQTfLSQkW6cM6ZKgDXUNpwCKIhCcrZ4jVyBCH95yI4VC5PVcDxcspB3mgLQaHgs8lkUuQjUXh%2Bdmt7uLWTen7Bwtc%2FVhj2zZX%2B70PW0Va%2BdzIbsSzAAXmFuizjo5c3%2FqH%2FyYFLppDMfZOo98Y53%2FZR2O3DpET%2FHK43RrFhxIDQsppOJF84tPhX7jogBfss9iZxjBgAfwr1G3fDamGjnc1Pefvb0VO8XeClKvpo9ityeMJ%2Bgi8oGOqUB%2FfZhRruNOh7cMkDLteAuzzB%2BbKWPs%2F9Kay%2FzPZvWXz5sUNiSpRp3eR3NEWjhV%2FjQ4BGPeTbyLZd1rkT8LMsvDJlRzPlR9ph3MamnWQxcjpJjDLjq0LS5tNGQbvUD5AKzU6zrYtgyJ%2BTosSGeppSXa0RZZXbwK3dhCANYB3iOPQl1SJORZKsBIzzYf0Xl2vL0a%2FZdUocDpHwGT2FEF9D5c%2FYzLUea&X-Amz-Signature=3914d403b687c142b91aecae02416eade9c4fa5bebfc8fae28f2c2cf78410010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
