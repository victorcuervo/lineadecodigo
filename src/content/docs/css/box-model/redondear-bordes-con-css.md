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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GU3DF2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATccYJbv91mpP31fg3O1r7jWOKMjStZRbIiJrR4haaOAiEAw0W1cFHo%2FHkpg6AJ8woXPU%2BxV14uJyG6Q3tcjq3Ol5IqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP55p3zO8WCbOTpzTSrcA%2Frh2R5HuYEhWhhOxrqBV617rzWfJjsT2Kb2uOYKOj9xc4W3qpJkFVdNr8%2FcBp8TftZ%2BZLemAkwLWtSMvhNaXxd2FsTtXDnsBcOQKd%2BqR1juQ9ejobDEv5t1QI4Jr%2B9o%2FR%2FZhnmptPK6RuXF9N276il3%2FBbvrsoWcPa5vbnEp7x9z1Q5RjjciaBu5zr7TPOP6wk1EbUXVLiN%2BP%2FWJGCI6auKY87ThGfJlvu%2BJ18lTn8ZOqELRADk72vMX1WIKS%2FBlbj29pU3Xw6fg4JIjg%2FTCU4DerVFhVcFIddc1HwF79chnTbaRt21Ovhp7vmfjSydG08LFuqTkYBDb31xevOkxCKH%2BPG0tWUEpQWTx%2Fyt6p%2BB6QG0auPXijUD1NCKLgC8DbQFOUkzMKw6d9ygfZcX0q3%2BV4VZ8zJ%2F4TKgO4NJr1cT3gGP3LeBc06O52TVrfWYMMhM%2FM8XLfv1XyktR%2F8w238CfrKh9%2BWF0n3zAYyGY%2B1jqmGVoYLEMIUs7iJktqGtUjAAwg5idvFHrnyYeMAhoUTRdS9UBya70woTI8OqIemMUvW9G4x%2FscOLwWunKtxCQ9yFbX3FimUF8gtUObp9M6m26GDx%2BGjoJqQT1dXWYNKP2778IKTgECctpo7TMPGAi8oGOqUB0mfRkIUkqfQIwOxU9H7TugnRgrDtMA68pdTQLdqilERI4p7JZt%2BosnQk8O4O97pc0szoDjhLzkjD9tHAqkTQj2mEGbmoJXXHVwLhIBIGT5FvfOVTc62o%2FEYALp7Ee4RNZCmPQnlVA%2BFyxDK2DSq%2BrKqauFcYIp5h1xSZCWwZ2uAZkOWyokcscWAKOqYvn5W1H1xALq4ZdJKJmTVdTkXkaohhQhjO&X-Amz-Signature=70024513a587b8253f626fb346dfa03b0c8d44efe230ea9b42b330586a2539c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GU3DF2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATccYJbv91mpP31fg3O1r7jWOKMjStZRbIiJrR4haaOAiEAw0W1cFHo%2FHkpg6AJ8woXPU%2BxV14uJyG6Q3tcjq3Ol5IqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP55p3zO8WCbOTpzTSrcA%2Frh2R5HuYEhWhhOxrqBV617rzWfJjsT2Kb2uOYKOj9xc4W3qpJkFVdNr8%2FcBp8TftZ%2BZLemAkwLWtSMvhNaXxd2FsTtXDnsBcOQKd%2BqR1juQ9ejobDEv5t1QI4Jr%2B9o%2FR%2FZhnmptPK6RuXF9N276il3%2FBbvrsoWcPa5vbnEp7x9z1Q5RjjciaBu5zr7TPOP6wk1EbUXVLiN%2BP%2FWJGCI6auKY87ThGfJlvu%2BJ18lTn8ZOqELRADk72vMX1WIKS%2FBlbj29pU3Xw6fg4JIjg%2FTCU4DerVFhVcFIddc1HwF79chnTbaRt21Ovhp7vmfjSydG08LFuqTkYBDb31xevOkxCKH%2BPG0tWUEpQWTx%2Fyt6p%2BB6QG0auPXijUD1NCKLgC8DbQFOUkzMKw6d9ygfZcX0q3%2BV4VZ8zJ%2F4TKgO4NJr1cT3gGP3LeBc06O52TVrfWYMMhM%2FM8XLfv1XyktR%2F8w238CfrKh9%2BWF0n3zAYyGY%2B1jqmGVoYLEMIUs7iJktqGtUjAAwg5idvFHrnyYeMAhoUTRdS9UBya70woTI8OqIemMUvW9G4x%2FscOLwWunKtxCQ9yFbX3FimUF8gtUObp9M6m26GDx%2BGjoJqQT1dXWYNKP2778IKTgECctpo7TMPGAi8oGOqUB0mfRkIUkqfQIwOxU9H7TugnRgrDtMA68pdTQLdqilERI4p7JZt%2BosnQk8O4O97pc0szoDjhLzkjD9tHAqkTQj2mEGbmoJXXHVwLhIBIGT5FvfOVTc62o%2FEYALp7Ee4RNZCmPQnlVA%2BFyxDK2DSq%2BrKqauFcYIp5h1xSZCWwZ2uAZkOWyokcscWAKOqYvn5W1H1xALq4ZdJKJmTVdTkXkaohhQhjO&X-Amz-Signature=bdccb3451d1b44c804a9681ccb26a0dcf758b0489120abdc5dcd2ad00b427b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
