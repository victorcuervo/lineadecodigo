---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AATPE4Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCv7v4cUdyXPnjwW4rKmX2pRNWfGXVvDknZcZhX19akDQIhANpdEVEdhnlwwr4UYyixloN9jJvGT6x0qim%2FzxJL9mBeKv8DCEgQABoMNjM3NDIzMTgzODA1IgzZ2zyxgLgYFCmcWNYq3APdkcWY%2BNjTRfDFeKYBmsYX1q09puS1AR%2BIZIrO5FYimKSR3KydPZtfVcKavqqWMr9Z4F9Fn%2BFyQ7D8kGkU1Cu9ROTLlnL5ZihXx0oZBra8n6rfP3trKo64gC9Ck0dCXbN5IYbhQtPLbEYDHnAOsmKoo0wunQPNvnv4nhAAHab1ECNmcG3BGma3D8wwoPT1%2BVfl%2FEFhvra%2B33h7Q%2F%2B%2BHqLCLQOBilzBL4BhXki60DruXCwlqzH4JHF8WvjoAagy21wWuLNXcUCH472QL2cTBI2NzVrTIZz%2Fhm%2FvsvS28Ja2wGPpI9454RIOty3GSZs%2FzDQlI48MuoLPll91Q4dI4%2FCRy%2B7IIfwUj5gfjjBucV0ukgPZmtIDdvhuf1MwtIDdOIgh%2F2uDwTSWRhlDeGYX6%2FWaUl5I46ta3pSpoa43PdYT5Ix4BZLPiSREsLfm3r8RRFeRs94moWdrtm3f3kxdgFQllZzoJlj5HD8yc4heOROmz2Nn%2F9gDB3Sv0J5LnDnnjz1DS4UfHZDzFEHROUyFMfF7bALHvh1%2BZ5p9WTc9WqH7lVvgND8Y6LDq00A1U9VRPsnJ3DQ1gbOXU4kz6i8EKEiqwD%2FWA5u1QMIczzm88G58b3GqazoUPy3KM%2B49AjDHvsbJBjqkAcJ2rp9hHMDS6eb4f5OVAmg1dAl0L1cufM8lHNwusK6aHFNHGJHHr4vtGQL0X11nAWdntm41Ax0%2FElNbUBqt02UAjEjMOZ%2FDA8KimlgJKW0ZWS%2BZvD%2FaBTbzjYYdP3WHSQqXsgGC%2B6iXSXpNahNuS88P%2BRuuitjsR%2BWec1pC90c4shOokoBCaLmEjAAo3A0jJNJGEocQDEKxVAEEfMlJ2AV%2FOb9I&X-Amz-Signature=a1302b1e3d918637c8157ac041344a513096afe4a5394159a06ca78bca9ae48a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AATPE4Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCv7v4cUdyXPnjwW4rKmX2pRNWfGXVvDknZcZhX19akDQIhANpdEVEdhnlwwr4UYyixloN9jJvGT6x0qim%2FzxJL9mBeKv8DCEgQABoMNjM3NDIzMTgzODA1IgzZ2zyxgLgYFCmcWNYq3APdkcWY%2BNjTRfDFeKYBmsYX1q09puS1AR%2BIZIrO5FYimKSR3KydPZtfVcKavqqWMr9Z4F9Fn%2BFyQ7D8kGkU1Cu9ROTLlnL5ZihXx0oZBra8n6rfP3trKo64gC9Ck0dCXbN5IYbhQtPLbEYDHnAOsmKoo0wunQPNvnv4nhAAHab1ECNmcG3BGma3D8wwoPT1%2BVfl%2FEFhvra%2B33h7Q%2F%2B%2BHqLCLQOBilzBL4BhXki60DruXCwlqzH4JHF8WvjoAagy21wWuLNXcUCH472QL2cTBI2NzVrTIZz%2Fhm%2FvsvS28Ja2wGPpI9454RIOty3GSZs%2FzDQlI48MuoLPll91Q4dI4%2FCRy%2B7IIfwUj5gfjjBucV0ukgPZmtIDdvhuf1MwtIDdOIgh%2F2uDwTSWRhlDeGYX6%2FWaUl5I46ta3pSpoa43PdYT5Ix4BZLPiSREsLfm3r8RRFeRs94moWdrtm3f3kxdgFQllZzoJlj5HD8yc4heOROmz2Nn%2F9gDB3Sv0J5LnDnnjz1DS4UfHZDzFEHROUyFMfF7bALHvh1%2BZ5p9WTc9WqH7lVvgND8Y6LDq00A1U9VRPsnJ3DQ1gbOXU4kz6i8EKEiqwD%2FWA5u1QMIczzm88G58b3GqazoUPy3KM%2B49AjDHvsbJBjqkAcJ2rp9hHMDS6eb4f5OVAmg1dAl0L1cufM8lHNwusK6aHFNHGJHHr4vtGQL0X11nAWdntm41Ax0%2FElNbUBqt02UAjEjMOZ%2FDA8KimlgJKW0ZWS%2BZvD%2FaBTbzjYYdP3WHSQqXsgGC%2B6iXSXpNahNuS88P%2BRuuitjsR%2BWec1pC90c4shOokoBCaLmEjAAo3A0jJNJGEocQDEKxVAEEfMlJ2AV%2FOb9I&X-Amz-Signature=e5b2010cbbbf29ded655a4ac15f1b38e511572f692fb39e5e55466fb04493fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
