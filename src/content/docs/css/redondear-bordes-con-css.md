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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642L34UEQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ECOkYXvNZZR%2BN3gtLXxiDbUi1cMlEBFBFD23bVP0MwIhAL9BJ8udCxg7ZmnRzC92O10vCW1sm8mbrp8m3rHdH1o2KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMbbwaqa4SLlkvxt0q3ANxfx4IEDRFNbZ80zKbnWKlOaLPaGW1zYyqn79V8JBJ0q2r32%2FSdXD9VolppwxssDzlWlw1MeQTkus0bLkfKhtdfLuRPdXEhcMKSmpRoX9HxgGIoZJav6t5DSIu5r1W6TnXMAo4OKVnZruRysktbUzbmt7QhGjTidN%2Bcw8vZmCtGzX3PJR7V1wrP5CC7E7N2m51oQpBvZ5arLRzkHgbT5tWpY1%2FK7EwKK2j4nfvegzchQhm0qkvcNxohEdhU%2BcR8o%2BP5DEFhkX5c%2B%2Fiqg8kqCkODQYpdiaLEMCcXFJ9dJyFVkLOaD2qMSDE7Zk56ur73f%2BqmyOT03B27kenhCa0jFHgmkYF8XAnm%2F0%2BDd8%2F6XscoZy73GdLwCW%2FjGYjxee8Hh%2F0%2BOaAxh8xuG5X%2FYVQjcWk2LXDkTKPypynsj%2BUSIgC%2FCZ2Snzmugx0Lh84Oj8k31A5WMpZMHk8QE4ATh4SVyv5d9CH6wtVE4M9ya1fFDIeugRTsFscAsOAVx%2BE8DZKkZpGx5LRIPn1wStFK2IAZbCRm3qba9g%2B4sz5g%2BtZ3%2BmODvDXZEt7jsuC%2BHO%2B8aa58ASkQnMnC6zCM1Gxac2TfUveNl64bD%2FQKCcj4eXF11lvHocEt2QHJoL346SwGDDL%2FdLJBjqkAUOH7ph1d1eyBf30M6LCTLCHXXQeL2tK5RpYn%2BBPDUi9WLbz%2BqBtL5gWQ7%2BALx7JvLjCQxEyu0ZCaPta8SM6aS%2Bf2APn8lW%2Fo6HMdjAclJGBCyThFYOn8era%2Fx7YGXg5qr7W8Nh9RMCuDoSjkhiXkMxGqu7qM8usDS8rCsgepl0toDP5kA%2B5koffV6mxeAM%2BJ7TgnynSR6q7F6Cx3u06idoLB9n1&X-Amz-Signature=362e7a7459dc8f5e80c24f663988fd6e2ba742d621093f76c31938e64a1e7290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642L34UEQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ECOkYXvNZZR%2BN3gtLXxiDbUi1cMlEBFBFD23bVP0MwIhAL9BJ8udCxg7ZmnRzC92O10vCW1sm8mbrp8m3rHdH1o2KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMbbwaqa4SLlkvxt0q3ANxfx4IEDRFNbZ80zKbnWKlOaLPaGW1zYyqn79V8JBJ0q2r32%2FSdXD9VolppwxssDzlWlw1MeQTkus0bLkfKhtdfLuRPdXEhcMKSmpRoX9HxgGIoZJav6t5DSIu5r1W6TnXMAo4OKVnZruRysktbUzbmt7QhGjTidN%2Bcw8vZmCtGzX3PJR7V1wrP5CC7E7N2m51oQpBvZ5arLRzkHgbT5tWpY1%2FK7EwKK2j4nfvegzchQhm0qkvcNxohEdhU%2BcR8o%2BP5DEFhkX5c%2B%2Fiqg8kqCkODQYpdiaLEMCcXFJ9dJyFVkLOaD2qMSDE7Zk56ur73f%2BqmyOT03B27kenhCa0jFHgmkYF8XAnm%2F0%2BDd8%2F6XscoZy73GdLwCW%2FjGYjxee8Hh%2F0%2BOaAxh8xuG5X%2FYVQjcWk2LXDkTKPypynsj%2BUSIgC%2FCZ2Snzmugx0Lh84Oj8k31A5WMpZMHk8QE4ATh4SVyv5d9CH6wtVE4M9ya1fFDIeugRTsFscAsOAVx%2BE8DZKkZpGx5LRIPn1wStFK2IAZbCRm3qba9g%2B4sz5g%2BtZ3%2BmODvDXZEt7jsuC%2BHO%2B8aa58ASkQnMnC6zCM1Gxac2TfUveNl64bD%2FQKCcj4eXF11lvHocEt2QHJoL346SwGDDL%2FdLJBjqkAUOH7ph1d1eyBf30M6LCTLCHXXQeL2tK5RpYn%2BBPDUi9WLbz%2BqBtL5gWQ7%2BALx7JvLjCQxEyu0ZCaPta8SM6aS%2Bf2APn8lW%2Fo6HMdjAclJGBCyThFYOn8era%2Fx7YGXg5qr7W8Nh9RMCuDoSjkhiXkMxGqu7qM8usDS8rCsgepl0toDP5kA%2B5koffV6mxeAM%2BJ7TgnynSR6q7F6Cx3u06idoLB9n1&X-Amz-Signature=4be82d11a384ee58160ec8af25083918ac015a149088392a40271d314fa1d628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
