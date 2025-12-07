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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S7H2WYJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkwnlYM3PgNVNJzrwDJEhK4ioSS984ZC1Nbh%2FKvtZy%2FwIhAPWolTc%2FdY6vo%2F3a5202fhlw4KqYAAMLv5ZQ51wNxOfvKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzarfxZLnjGQDDFgowq3ANgGKoH5HraCQxbu7D4KJckYHdJpmhPq%2FWiGmGqkI76nmee5BKWfiGLJrKsVZ11cr7%2FWJuBOqEuIWJIMtZy74ESoQ3MuE43Kw1eXrSjCDGUZ3%2FEbJ%2B2Pitlbmxv8tM%2FOXt%2BFGrXZwFDyNFIxwXd1a9ZcgxEMtq3agcRchPGnIZ%2Fr81VX2fPImAcrk%2Bv7PXmoe1tlf1jTpFfJQc3zTmB6dQ0uCbno95fiHd4ECWQdcU1mffmrABlyEhjJqlGipZVu8kNVvzM51nYs1E2KqxgVKAYqeWFvRK4mFtgPN65WWpgLzvVSklrNMknW24UN5Arfab07ChtI6ga9Il4XjEkWQU3NvUCA5payj84SM6iJ%2FFAqTES8cSVjaNBAa9XYk2KdzbdBpHp36j9SIay6QENzrazj0jrVPUy90fQVsUKT67i%2BfF9hLlSMNO24gnPx6QxTdptqcPc8CCahQSX0tKlZk9vVX0GUnVuG2Np0tKjvp%2FuUx3TCHuyfJ4jigat0qnBZ2MND7sBtd7LemBnyGgviOrDVyUgimGRUVESaGP1357zgr8wBKZ6oLtNkfGg%2FPKIsabjUz2sfe5%2BOxYmnLdKtd7%2FLdYTAa%2BM1FK4WsF7edIqrK0joWNce3nX3DKg9TD1o9TJBjqkAVsfzH%2BZnerzz1Wj9oOO%2BGHcu5%2BCGRjzcCHRkM2VkDhq3deYa3EV%2FXgoxi3xdhzSnqb%2BijUzwZAQYdFQZ4feYW6us%2FKHro2t3LG4dqU4a6vd02AjbdglspVtgvtwCU9pQK1AvjdrFFHwVXsC1zvBcXDeARt%2BxJKqSVwfn5SwTyN0U2HmL%2FL9Q5EtFm%2FzIv11DxUoO2XlFOrf09pBIAzMefcmx0LN&X-Amz-Signature=02bb84e960e4c77e5a98dd1fb8a350b8e06083da8e450bf878ac4bb6dab6ca76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S7H2WYJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkwnlYM3PgNVNJzrwDJEhK4ioSS984ZC1Nbh%2FKvtZy%2FwIhAPWolTc%2FdY6vo%2F3a5202fhlw4KqYAAMLv5ZQ51wNxOfvKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzarfxZLnjGQDDFgowq3ANgGKoH5HraCQxbu7D4KJckYHdJpmhPq%2FWiGmGqkI76nmee5BKWfiGLJrKsVZ11cr7%2FWJuBOqEuIWJIMtZy74ESoQ3MuE43Kw1eXrSjCDGUZ3%2FEbJ%2B2Pitlbmxv8tM%2FOXt%2BFGrXZwFDyNFIxwXd1a9ZcgxEMtq3agcRchPGnIZ%2Fr81VX2fPImAcrk%2Bv7PXmoe1tlf1jTpFfJQc3zTmB6dQ0uCbno95fiHd4ECWQdcU1mffmrABlyEhjJqlGipZVu8kNVvzM51nYs1E2KqxgVKAYqeWFvRK4mFtgPN65WWpgLzvVSklrNMknW24UN5Arfab07ChtI6ga9Il4XjEkWQU3NvUCA5payj84SM6iJ%2FFAqTES8cSVjaNBAa9XYk2KdzbdBpHp36j9SIay6QENzrazj0jrVPUy90fQVsUKT67i%2BfF9hLlSMNO24gnPx6QxTdptqcPc8CCahQSX0tKlZk9vVX0GUnVuG2Np0tKjvp%2FuUx3TCHuyfJ4jigat0qnBZ2MND7sBtd7LemBnyGgviOrDVyUgimGRUVESaGP1357zgr8wBKZ6oLtNkfGg%2FPKIsabjUz2sfe5%2BOxYmnLdKtd7%2FLdYTAa%2BM1FK4WsF7edIqrK0joWNce3nX3DKg9TD1o9TJBjqkAVsfzH%2BZnerzz1Wj9oOO%2BGHcu5%2BCGRjzcCHRkM2VkDhq3deYa3EV%2FXgoxi3xdhzSnqb%2BijUzwZAQYdFQZ4feYW6us%2FKHro2t3LG4dqU4a6vd02AjbdglspVtgvtwCU9pQK1AvjdrFFHwVXsC1zvBcXDeARt%2BxJKqSVwfn5SwTyN0U2HmL%2FL9Q5EtFm%2FzIv11DxUoO2XlFOrf09pBIAzMefcmx0LN&X-Amz-Signature=30f7dfb16a29d50151a733f19c7135924ecd7ec7c954360bc6c4c77fc3290bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
