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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665Q3Y6JF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6YhvHS13qXSJWcuXogauOsIJfUECZIsA0Nagt7nHpdQIhAPGXrMfB2%2BMu2%2Ffg60cZlKiaJlwgPfiRfuIigj%2F%2BFkyQKv8DCHsQABoMNjM3NDIzMTgzODA1IgyJ1cfNKa8UoqopuiUq3AMLnz9QDh%2B%2BcAAjR0TMxPjiRNx7ozQ2C%2Fh8Fu%2BZgqrUb%2BG%2FpODykMDnadm0pq3%2Bmx1TGP7qnm2BMYEXFgOdKbOJVwynfMRQQWNEQE2eFcHvakhSWaP7%2FBZqRWzw06W4OmOB6oxapl7VQw7xjzJ2pMQCJLvAINaXcJVyWzXWAlNZzLvG0hGeimumLkyNeJ36H4S7U5WKuHwWmeiN0JQbzZ8nM2DUVE%2BKJitvnUu3s%2BGROxBxn0%2BsaovHXy4BymJmtjEf4HSbVWLgTCyVA7YtwOOny7WlQGWnRnTK9iRUC6gYpSio9ql3L8xv7L%2Bp0QQYQMiBdlfI27wOV5oPmRiz4L%2FPoUTh6dRYIyoDZZzVm3FmHGL5jKauwjHPB%2BT52Ts0nwFX8KAeX30W8omNBum%2B7oEw%2F8%2BynMZF%2F645T6Wn6iI8FjAJG20Iiwf7ydgloeihzqeSq8Uq1IbeHyuNmAWbv000dPj%2Fn%2BwNSDCW4UoAMYWFcrrppMz7oiLsYVxnBazfhs3nu%2Fx86ZuAX5D0n2MRb5bimZDEhKZyL1yomtSIijJu5xGBz0k80AirqGHqp%2BbdaVjVY5tg7GmZ9Gp2LuIDQnniU13t0GeA5O%2Bf1gGxUpPDfVBQhkwLHG6xS7ApazCo8InKBjqkAelVK8QM6yGsAZkWIODFOKwTIR19zz2cDmlp%2B1Lh9aXiTNAWrc%2B5%2BsX528jBw1MtmKAXCiDR9CKPysbIjHv%2BiIQVTyek1mdNYG1JQkOxtXlyf5EwT69zUyMuaq48v1UHgF6pzYbViX9pTxjJYgPLagRekyNzKFDT%2BWijEws5RnMOJ4i9lufxHwwtFX0B9ALF%2FiHDx269mfZ5eWc9MSO0LSoOevGB&X-Amz-Signature=8757ed3605b480c95005cbfa552965b85898e7b66d280a6f4213749661b0ce64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665Q3Y6JF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6YhvHS13qXSJWcuXogauOsIJfUECZIsA0Nagt7nHpdQIhAPGXrMfB2%2BMu2%2Ffg60cZlKiaJlwgPfiRfuIigj%2F%2BFkyQKv8DCHsQABoMNjM3NDIzMTgzODA1IgyJ1cfNKa8UoqopuiUq3AMLnz9QDh%2B%2BcAAjR0TMxPjiRNx7ozQ2C%2Fh8Fu%2BZgqrUb%2BG%2FpODykMDnadm0pq3%2Bmx1TGP7qnm2BMYEXFgOdKbOJVwynfMRQQWNEQE2eFcHvakhSWaP7%2FBZqRWzw06W4OmOB6oxapl7VQw7xjzJ2pMQCJLvAINaXcJVyWzXWAlNZzLvG0hGeimumLkyNeJ36H4S7U5WKuHwWmeiN0JQbzZ8nM2DUVE%2BKJitvnUu3s%2BGROxBxn0%2BsaovHXy4BymJmtjEf4HSbVWLgTCyVA7YtwOOny7WlQGWnRnTK9iRUC6gYpSio9ql3L8xv7L%2Bp0QQYQMiBdlfI27wOV5oPmRiz4L%2FPoUTh6dRYIyoDZZzVm3FmHGL5jKauwjHPB%2BT52Ts0nwFX8KAeX30W8omNBum%2B7oEw%2F8%2BynMZF%2F645T6Wn6iI8FjAJG20Iiwf7ydgloeihzqeSq8Uq1IbeHyuNmAWbv000dPj%2Fn%2BwNSDCW4UoAMYWFcrrppMz7oiLsYVxnBazfhs3nu%2Fx86ZuAX5D0n2MRb5bimZDEhKZyL1yomtSIijJu5xGBz0k80AirqGHqp%2BbdaVjVY5tg7GmZ9Gp2LuIDQnniU13t0GeA5O%2Bf1gGxUpPDfVBQhkwLHG6xS7ApazCo8InKBjqkAelVK8QM6yGsAZkWIODFOKwTIR19zz2cDmlp%2B1Lh9aXiTNAWrc%2B5%2BsX528jBw1MtmKAXCiDR9CKPysbIjHv%2BiIQVTyek1mdNYG1JQkOxtXlyf5EwT69zUyMuaq48v1UHgF6pzYbViX9pTxjJYgPLagRekyNzKFDT%2BWijEws5RnMOJ4i9lufxHwwtFX0B9ALF%2FiHDx269mfZ5eWc9MSO0LSoOevGB&X-Amz-Signature=f7ed316b863b8dbededbb89806fd54cf1b59c5603d5962844d72fb076270cfdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
