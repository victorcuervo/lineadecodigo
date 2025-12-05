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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGJ5AUY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSHo%2ByPRIjnWAoSwVtAdblsDJ2RiKseBCJt%2FPMIPTWvgIhAI7itrOx576YyVIKKsoETKkYLx7AB22ogsibUqYPev2RKv8DCFUQABoMNjM3NDIzMTgzODA1Igw9tSJ0zD7XWkGHSmoq3AM6fVdtFHRs6Io7Fw4%2FFG7Y48M%2BgnpVRy2SFwa16eYL9AaVTbGh3XIZ3CUgxX1YbreO6ydBYGLIqP3e41r%2FJTPr4vEAtpz5nLs56WaPMxosWgJakB8VMcUCz2JTbpMWIesjXc2j7zaTPjQznZck9FiXiryaWVxPW80QoCvTGJh26G15SKdiT%2BztI9lp7JIYD%2FylxAvkFtOPsqT8VjExykm3PZoyhYA7UN5TJyvWsuYM%2B59vwdJY6QVYFGHe3oCucZnlc6poWq6ouQ%2F29GbbAT2HmA7rvk%2F9KcostK%2F3ftDJmJGrICxBCifM0dDRbbC8%2BMnwvZkpvnlzn3LDNbrVkvzX6UtxMG16k6i2w6TCoxXLxHCqtrRc%2BVExe0lLe8lqKYWPg7NzjdxgTMexdElJ7JJSk%2FI1BUiWUwS3wTjrnJCsHg1KssgDXcvpMe3xwiDCh5kXu%2BpEvJ7kvRNcgCnc%2Ftf0C2CuvE4AvjndMqhfKJSXAgm2OALt3v1aiSFxWY3un7v9eV2ePWheVlSAJQa8jO21MXTuo0WIEHbLnPfMMU8sNHtvgxdVFYOp1SPaYxZ8rs4BwZDRhBMUrQf35GkrQQ5O2YE3FMhDgRnhfyoN5MV7LggV7QAmMXPByAPGUTC3qMnJBjqkASeXKwKf%2B7qg4iI8CP5OCY2yYKjMZzQEW1o51IpYyop4JU3oTaPHkXP%2FMy1Rpdcd0gJHMDCwidX0bMmVrJiZs3qzbW61TPCXgdhyp%2F2nXwwiBvZKVLgi0TN6vjujeXf%2BdyRyjxHzwSzntiXve7axCnF%2FqDtMFCbT%2F1MZSlMfvuuj5eZzPW%2ByHl0sv5FhuquaPQqHZeJV5q88g3RuY2eVXE15XhEJ&X-Amz-Signature=d7e55bc8ae0bf06f7b90eb98b6ad4d8faba2827d396dad1af9d99c5052433609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGJ5AUY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSHo%2ByPRIjnWAoSwVtAdblsDJ2RiKseBCJt%2FPMIPTWvgIhAI7itrOx576YyVIKKsoETKkYLx7AB22ogsibUqYPev2RKv8DCFUQABoMNjM3NDIzMTgzODA1Igw9tSJ0zD7XWkGHSmoq3AM6fVdtFHRs6Io7Fw4%2FFG7Y48M%2BgnpVRy2SFwa16eYL9AaVTbGh3XIZ3CUgxX1YbreO6ydBYGLIqP3e41r%2FJTPr4vEAtpz5nLs56WaPMxosWgJakB8VMcUCz2JTbpMWIesjXc2j7zaTPjQznZck9FiXiryaWVxPW80QoCvTGJh26G15SKdiT%2BztI9lp7JIYD%2FylxAvkFtOPsqT8VjExykm3PZoyhYA7UN5TJyvWsuYM%2B59vwdJY6QVYFGHe3oCucZnlc6poWq6ouQ%2F29GbbAT2HmA7rvk%2F9KcostK%2F3ftDJmJGrICxBCifM0dDRbbC8%2BMnwvZkpvnlzn3LDNbrVkvzX6UtxMG16k6i2w6TCoxXLxHCqtrRc%2BVExe0lLe8lqKYWPg7NzjdxgTMexdElJ7JJSk%2FI1BUiWUwS3wTjrnJCsHg1KssgDXcvpMe3xwiDCh5kXu%2BpEvJ7kvRNcgCnc%2Ftf0C2CuvE4AvjndMqhfKJSXAgm2OALt3v1aiSFxWY3un7v9eV2ePWheVlSAJQa8jO21MXTuo0WIEHbLnPfMMU8sNHtvgxdVFYOp1SPaYxZ8rs4BwZDRhBMUrQf35GkrQQ5O2YE3FMhDgRnhfyoN5MV7LggV7QAmMXPByAPGUTC3qMnJBjqkASeXKwKf%2B7qg4iI8CP5OCY2yYKjMZzQEW1o51IpYyop4JU3oTaPHkXP%2FMy1Rpdcd0gJHMDCwidX0bMmVrJiZs3qzbW61TPCXgdhyp%2F2nXwwiBvZKVLgi0TN6vjujeXf%2BdyRyjxHzwSzntiXve7axCnF%2FqDtMFCbT%2F1MZSlMfvuuj5eZzPW%2ByHl0sv5FhuquaPQqHZeJV5q88g3RuY2eVXE15XhEJ&X-Amz-Signature=f3d19c14a6ba43ae489397e645def99310ed7a11fc98c8fa75d58f3df87e590a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
