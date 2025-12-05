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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EEH2YWP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGqtD9FCTRubOekKgYPe42I4sa9Rn4KAtZHzbXXgLnAgIhAI1d8wv9jpW1FYTm0QscDPNPX0DRK7XftP2%2B2IKlzoxgKv8DCE8QABoMNjM3NDIzMTgzODA1IgyY2jquK24REhV%2Buooq3APTZBIo%2FkZbGfCUwrlFndPawjPJLAH%2FamyVFud%2BFjx4WSrdWP4r4diV3xgxNnC9PB0kK%2BLrfK68zXRqqJsS0CWsldOAuFiYQOhxFL1%2BTP6ZOQM9d7EF1LNzupqickiJhtFI5%2FSsfF%2BH4mTL%2B%2F3iQOkNayBJFZGp%2F5VOM8L8KkC9d3QaqcMZtqxJskKctXeTTa9JhuG2%2FjJOd3ysWYNnri4ObToUSj1ZdXuLCbxm6QLvQJAxYP2nPYKklPjAsY97F9cnaXcDQxHOyDwpIJMtlF0s6IZJlOVLslF8kIujUmeCTs0TF%2Bqu79TaKFBObiDjEyuqlc6GM24VTmlu9UGhMjVzfotPyl9nYD2mlhLw5SqZUTl470K%2FOHJk%2BswgKnY%2BB5KjVxSJtIHosjhOiZ5MqLi5UVKJ6nVg%2BipTWYTZkT0yFAWowfilBCbi4o9V1XI6h9LRZGbBf8qfj12TD444p%2BdeSs6Q3CBHSfd26yrEfLKMCCVlqbJOH7MickKw1BLmrNBFONejsnGPe0mOGnqeqIoVQVf3b%2F89%2FC1zdQghTGTkiIjV5zcdEd9xc2F5IBDJuRiLS%2BZq0yHN256OeRf1aLhCCDlDno8aBRi%2F5VOAxKZSdAwHlhHDngQeQQxIrTCqjMjJBjqkAWC1RX0ne8FRJUS6s3xvpQi5jl4VmzqOxyAguZrJE%2F0IK9OHyL%2Ft9qY50hDZ2rwjSFRHyVHci7VFRJ9qJBWUgfUOTZXwbzGHTkig3Hacn8C5Rux8Y%2F7ujW8bK2prYTv2yv%2F9zLyOTdk8h9C8uYr50s3pMjzJQHWzlX7mE960hpxhBHfO0aG4EDXMIF8shlfk8m4YjADDnpT3FvowZM%2FBbqr7YTER&X-Amz-Signature=06cd3ac98301e15e648d57e620bf03541c33b8b8e2c65393f21c32df1153b9ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EEH2YWP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGqtD9FCTRubOekKgYPe42I4sa9Rn4KAtZHzbXXgLnAgIhAI1d8wv9jpW1FYTm0QscDPNPX0DRK7XftP2%2B2IKlzoxgKv8DCE8QABoMNjM3NDIzMTgzODA1IgyY2jquK24REhV%2Buooq3APTZBIo%2FkZbGfCUwrlFndPawjPJLAH%2FamyVFud%2BFjx4WSrdWP4r4diV3xgxNnC9PB0kK%2BLrfK68zXRqqJsS0CWsldOAuFiYQOhxFL1%2BTP6ZOQM9d7EF1LNzupqickiJhtFI5%2FSsfF%2BH4mTL%2B%2F3iQOkNayBJFZGp%2F5VOM8L8KkC9d3QaqcMZtqxJskKctXeTTa9JhuG2%2FjJOd3ysWYNnri4ObToUSj1ZdXuLCbxm6QLvQJAxYP2nPYKklPjAsY97F9cnaXcDQxHOyDwpIJMtlF0s6IZJlOVLslF8kIujUmeCTs0TF%2Bqu79TaKFBObiDjEyuqlc6GM24VTmlu9UGhMjVzfotPyl9nYD2mlhLw5SqZUTl470K%2FOHJk%2BswgKnY%2BB5KjVxSJtIHosjhOiZ5MqLi5UVKJ6nVg%2BipTWYTZkT0yFAWowfilBCbi4o9V1XI6h9LRZGbBf8qfj12TD444p%2BdeSs6Q3CBHSfd26yrEfLKMCCVlqbJOH7MickKw1BLmrNBFONejsnGPe0mOGnqeqIoVQVf3b%2F89%2FC1zdQghTGTkiIjV5zcdEd9xc2F5IBDJuRiLS%2BZq0yHN256OeRf1aLhCCDlDno8aBRi%2F5VOAxKZSdAwHlhHDngQeQQxIrTCqjMjJBjqkAWC1RX0ne8FRJUS6s3xvpQi5jl4VmzqOxyAguZrJE%2F0IK9OHyL%2Ft9qY50hDZ2rwjSFRHyVHci7VFRJ9qJBWUgfUOTZXwbzGHTkig3Hacn8C5Rux8Y%2F7ujW8bK2prYTv2yv%2F9zLyOTdk8h9C8uYr50s3pMjzJQHWzlX7mE960hpxhBHfO0aG4EDXMIF8shlfk8m4YjADDnpT3FvowZM%2FBbqr7YTER&X-Amz-Signature=76cd57e3da2bc6098ae0b163a99f599e87a39ac84a3d578c8cece38487a520b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
