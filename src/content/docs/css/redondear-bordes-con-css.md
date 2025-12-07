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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ45RWSA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJMlgdlzzMt9ntNeqbYnmT8L1c6dkIDO%2BXKfVOmU664QIgaskrfZvQtwVu26FEavwPb1Fomv8CkRRGC0TNVb%2FacisqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkwL%2Fzcx1vm5URhiCrcA8PwSwTg%2BjjrvHqnZA1iJMzh78DV4St%2B0WnyZADcG1Rd4JkytROjqNmImZpUIimNoJj4MAw62Ky9aPZsgkt4CSdStiR7ctjKMSByUELnKUKswZBIbT3NFB7lc4d0aBgFXIy22tNdQSc5ROhshd3Qw3f%2FKCMqETXDcd3hlAKR9JhGhPpCO5bf8SKUe2Vxyebz3jBYIlP%2BaNQnQHiBTvkQzhM8qvgx267uYtrYjYNrOpmQkJYTJ3MY6plENLPZngYMT7mKeBdIilI7RCo2OCrHTMfy9q1I3q2yN8bXj1mQOLwDgeDC6hUEJdKZ988rfFKU6BEFlRLEcP1KpVkcfrBwEbt7hjs0LT9Ssp4%2BYMFH0T3ra72SIp34zT0LE7wEoWdnOHPDz%2FRHPlBAnRBBfpJjCn4NVLcr31k0CRUbsoNBlQ3PHje9LzwV%2BUBrGrvZnk9dNX4wn%2Bd9t7GiLXqLm0rDn9vUu0IwPX1z%2Fex543YmqD5%2BYctS0zDmvqfq9PS10%2FcHylLbseFxtWVRxy9uhC1l41LJUCBx0lunWfWQzNWBxrb08Pol6%2BU5xWhmi9YlBzGSe751M5W6E9ZgjQ%2Fvw89gW%2FE%2FIZLqEq80EJTNo4tferJXv0ma5ddfSohDCzPIMI7%2B0skGOqUByTZ6ioBIbFGcavvp5dlrjbuGDEaZqngCIhKHVoGAXTDUWGV5pemvXO9Q1F9N1oGKH4vtbfMq9N%2FYbk1rKEqoGBh2MyX36TymTzoqGWH2BgQekcQM0xkywm7XWS7i6P7xzaBL00%2BRi4OM4R8aazK7%2FbwMLHWEpltepIUXgl6V4qYbbQGu9P9y2DJ8Nisdg5C4SSnXfprjqRvN80%2FYmu5kJdkf3wVa&X-Amz-Signature=a03eabbbc5fdfbfed2d6993f71672757601a525f096828efe83918126f82ada6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ45RWSA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJMlgdlzzMt9ntNeqbYnmT8L1c6dkIDO%2BXKfVOmU664QIgaskrfZvQtwVu26FEavwPb1Fomv8CkRRGC0TNVb%2FacisqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkwL%2Fzcx1vm5URhiCrcA8PwSwTg%2BjjrvHqnZA1iJMzh78DV4St%2B0WnyZADcG1Rd4JkytROjqNmImZpUIimNoJj4MAw62Ky9aPZsgkt4CSdStiR7ctjKMSByUELnKUKswZBIbT3NFB7lc4d0aBgFXIy22tNdQSc5ROhshd3Qw3f%2FKCMqETXDcd3hlAKR9JhGhPpCO5bf8SKUe2Vxyebz3jBYIlP%2BaNQnQHiBTvkQzhM8qvgx267uYtrYjYNrOpmQkJYTJ3MY6plENLPZngYMT7mKeBdIilI7RCo2OCrHTMfy9q1I3q2yN8bXj1mQOLwDgeDC6hUEJdKZ988rfFKU6BEFlRLEcP1KpVkcfrBwEbt7hjs0LT9Ssp4%2BYMFH0T3ra72SIp34zT0LE7wEoWdnOHPDz%2FRHPlBAnRBBfpJjCn4NVLcr31k0CRUbsoNBlQ3PHje9LzwV%2BUBrGrvZnk9dNX4wn%2Bd9t7GiLXqLm0rDn9vUu0IwPX1z%2Fex543YmqD5%2BYctS0zDmvqfq9PS10%2FcHylLbseFxtWVRxy9uhC1l41LJUCBx0lunWfWQzNWBxrb08Pol6%2BU5xWhmi9YlBzGSe751M5W6E9ZgjQ%2Fvw89gW%2FE%2FIZLqEq80EJTNo4tferJXv0ma5ddfSohDCzPIMI7%2B0skGOqUByTZ6ioBIbFGcavvp5dlrjbuGDEaZqngCIhKHVoGAXTDUWGV5pemvXO9Q1F9N1oGKH4vtbfMq9N%2FYbk1rKEqoGBh2MyX36TymTzoqGWH2BgQekcQM0xkywm7XWS7i6P7xzaBL00%2BRi4OM4R8aazK7%2FbwMLHWEpltepIUXgl6V4qYbbQGu9P9y2DJ8Nisdg5C4SSnXfprjqRvN80%2FYmu5kJdkf3wVa&X-Amz-Signature=e0bc2a8ff2c23a629cce8c8a851e5c3c38340b45f3e049fd57da4982a396a29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
