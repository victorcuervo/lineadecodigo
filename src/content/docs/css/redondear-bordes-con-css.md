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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644AFJAOV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2cjwMsDf7rTPkyXirb%2F2AhEt2FHP%2BQ%2F0v3nFGtRA9HgIhAMNMK1YkqHWB6gBEzRi3qrEXpdX4NWQocB9489l9qh%2BGKv8DCGAQABoMNjM3NDIzMTgzODA1IgzVjvy3ey1Hlllqyvcq3AN582cHHVHVIJ1JQ0wdFxpOBsMsBF1QhvkDK9BuAXriazeElUQMJpn%2Bisw0eZrztyzrN7I5Z6t4ywJHSkZVApDguN45doj9iVEufM0Kbfjv0NbW9kegIz8ZgPfqkKIKwlqa4LJZ9lnLALieMyndeff9HBfA8moVuqdufdIF0weDU7bAzM86JDaOHq3PliLrT7twBLZ6AyFRV7FaDLPhCBsYyqX%2F5qUrqeCiu9PocetNvinVg7kPZGcDG42haDqChGGBWRDAgxIhJXPoOV%2FziCaXhQaE81zAYHzefM9FtaO6USipPOalPxmAGjZjDlT4zxTjI3Zbyxha9RoYRsy%2FTA6qO72obXHZEsexZ9C3HLiExdFZ%2B1ZqyQKEzxZaFS5IhUee42%2BulTaPiROm7Mspk2oun6KkVjnr2zO7GlBbkJl9IRyFIrbmd7biXMEncE%2FNQgGylNPJmS9KCJTFmDFw%2BopoJPQotmL9HAtOgLxwfVYTUa7ITZhYkbNdFu0U5Uwy465P9FBw0I9Qp8qKNWyGYM7br1Dn8bAK%2FsiLQbc6R%2B817YK2iIZPoCnXqTpbVobVcDWZV%2BqEJb6rbPBPOMtc4CBf1XvpB4sLhUHR8nmQLe7tteZXrQkzc2TwCA0pHzCe4svJBjqkAVHdEsfHY5%2BzYuevIAkD%2FWXXtbFpEzu0ultQC8NYKzHzDGnI0iHMlahqx5AS0AmpICtijEk%2FM8KJpmf2uUDFTUuKRqIKsh8Hjs9WcduXGdl9aceseq7rR66EnVUwvu397IYEVM1U8OB2nZ5eJ9G9wAtVu3dDBxlsfViwW23phgNbpeN%2FLmh3aA1otA%2FWw%2B%2Fs%2FlI6%2FT9mziGr5Mo308fFBkpFiQfA&X-Amz-Signature=1c44e74eb90049678f218dcf988e557807a5094398f43db53c4c6ca5c02bcfd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644AFJAOV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2cjwMsDf7rTPkyXirb%2F2AhEt2FHP%2BQ%2F0v3nFGtRA9HgIhAMNMK1YkqHWB6gBEzRi3qrEXpdX4NWQocB9489l9qh%2BGKv8DCGAQABoMNjM3NDIzMTgzODA1IgzVjvy3ey1Hlllqyvcq3AN582cHHVHVIJ1JQ0wdFxpOBsMsBF1QhvkDK9BuAXriazeElUQMJpn%2Bisw0eZrztyzrN7I5Z6t4ywJHSkZVApDguN45doj9iVEufM0Kbfjv0NbW9kegIz8ZgPfqkKIKwlqa4LJZ9lnLALieMyndeff9HBfA8moVuqdufdIF0weDU7bAzM86JDaOHq3PliLrT7twBLZ6AyFRV7FaDLPhCBsYyqX%2F5qUrqeCiu9PocetNvinVg7kPZGcDG42haDqChGGBWRDAgxIhJXPoOV%2FziCaXhQaE81zAYHzefM9FtaO6USipPOalPxmAGjZjDlT4zxTjI3Zbyxha9RoYRsy%2FTA6qO72obXHZEsexZ9C3HLiExdFZ%2B1ZqyQKEzxZaFS5IhUee42%2BulTaPiROm7Mspk2oun6KkVjnr2zO7GlBbkJl9IRyFIrbmd7biXMEncE%2FNQgGylNPJmS9KCJTFmDFw%2BopoJPQotmL9HAtOgLxwfVYTUa7ITZhYkbNdFu0U5Uwy465P9FBw0I9Qp8qKNWyGYM7br1Dn8bAK%2FsiLQbc6R%2B817YK2iIZPoCnXqTpbVobVcDWZV%2BqEJb6rbPBPOMtc4CBf1XvpB4sLhUHR8nmQLe7tteZXrQkzc2TwCA0pHzCe4svJBjqkAVHdEsfHY5%2BzYuevIAkD%2FWXXtbFpEzu0ultQC8NYKzHzDGnI0iHMlahqx5AS0AmpICtijEk%2FM8KJpmf2uUDFTUuKRqIKsh8Hjs9WcduXGdl9aceseq7rR66EnVUwvu397IYEVM1U8OB2nZ5eJ9G9wAtVu3dDBxlsfViwW23phgNbpeN%2FLmh3aA1otA%2FWw%2B%2Fs%2FlI6%2FT9mziGr5Mo308fFBkpFiQfA&X-Amz-Signature=7f15c630b0bd099d46089ebcdfdf008b774eb552cc5dd121e538e513532fae39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
