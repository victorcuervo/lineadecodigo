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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TO5GETM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFqNN1IS4WNn%2BgTo0JrU%2FTcPYEwBdEBKOkY85xRcWbqAIhALY%2B%2Fk2AFbDIcYSd7bH578jRhj%2BoUNg8N6YDSOSANAQkKv8DCG4QABoMNjM3NDIzMTgzODA1IgyJZHU9zUV3t7t5VBIq3ANWJNz9GO6zMFvDX2puoqvUfRA2y60su7uxAEXOqZ5UZo43CFxMaBN0IpMJpOl0Ae4kUfNUaouV7ZHWfZ14fL%2Bj5hkgQDhjq2X4NeHUlbsf%2BTlyB9FDOsAIG1LfR04SIlMVVAlah51s0opJ7Vp6R%2B4JajOa1EN2H%2FFPo27eJeBWa8PMv5CnCpQkEhK07KEMH8XOK1X2cW2xZNeIcIwRYqKqpk0GKxQ6PTCyTgQUYAWEPcTqeZcXqw0MEuFefn3bD0wI9op4EUdyXH0SiatZcbXdCvciMMh4%2BKAycscizlswcg%2BIEO5t1ttgnpZXi2Z8hPNjp%2Bi34UJGy7s8moeAp587ZV4lVdc5Iv5ax26uDD4GnPeJYoeFiMtCOwtH02U%2F2RII3XvU%2BLOQRuP4Reh5fsmisCxVAKzLV7IMgQRfkn8Aq7im%2FIwFoudAwji2DugYmXsEbdPE2Ru0wn%2FKHUGI15nm5h8eW6PRVgnRbq0%2FL3PDaXD6mO7vvkaZUMHt9jh2lok39rkl6SP991RRECFEEIPrmErYz1Ef1piRZK0fzAuW4DPzssgBhQXt%2B7VR1d9dnIJDDOhmDicID2fu0PbvqMC6pRcUtnzI9I1WihrkyyMedtmttEe%2BhsdWMbKqWDD7%2FM7JBjqkAYpvg9z3iKPy8PZwbRt8LGXnA0eA5vAcX3scjfpB8lf0My001FL4KoqZ53V0uZye1F%2BpIbA6u8hd4Py%2FcouaJzlL9y%2Fy%2BjaxIB0xZ2ehuCrbGX2%2BRJY9oSZAqtaomnBWk9JQIFrilyAeyD%2B0QRS4x5%2FbfqZ90px20SEu51%2B%2Br%2BQ06lg%2BCQ%2BEtrkBr7mVYNtodB6u3lpmJl2JVOfOdN1cBvAXOjLg&X-Amz-Signature=e82572ed845eb13203fab52fac3560a46c3dce0b849143b28d6578d95958bb99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TO5GETM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFqNN1IS4WNn%2BgTo0JrU%2FTcPYEwBdEBKOkY85xRcWbqAIhALY%2B%2Fk2AFbDIcYSd7bH578jRhj%2BoUNg8N6YDSOSANAQkKv8DCG4QABoMNjM3NDIzMTgzODA1IgyJZHU9zUV3t7t5VBIq3ANWJNz9GO6zMFvDX2puoqvUfRA2y60su7uxAEXOqZ5UZo43CFxMaBN0IpMJpOl0Ae4kUfNUaouV7ZHWfZ14fL%2Bj5hkgQDhjq2X4NeHUlbsf%2BTlyB9FDOsAIG1LfR04SIlMVVAlah51s0opJ7Vp6R%2B4JajOa1EN2H%2FFPo27eJeBWa8PMv5CnCpQkEhK07KEMH8XOK1X2cW2xZNeIcIwRYqKqpk0GKxQ6PTCyTgQUYAWEPcTqeZcXqw0MEuFefn3bD0wI9op4EUdyXH0SiatZcbXdCvciMMh4%2BKAycscizlswcg%2BIEO5t1ttgnpZXi2Z8hPNjp%2Bi34UJGy7s8moeAp587ZV4lVdc5Iv5ax26uDD4GnPeJYoeFiMtCOwtH02U%2F2RII3XvU%2BLOQRuP4Reh5fsmisCxVAKzLV7IMgQRfkn8Aq7im%2FIwFoudAwji2DugYmXsEbdPE2Ru0wn%2FKHUGI15nm5h8eW6PRVgnRbq0%2FL3PDaXD6mO7vvkaZUMHt9jh2lok39rkl6SP991RRECFEEIPrmErYz1Ef1piRZK0fzAuW4DPzssgBhQXt%2B7VR1d9dnIJDDOhmDicID2fu0PbvqMC6pRcUtnzI9I1WihrkyyMedtmttEe%2BhsdWMbKqWDD7%2FM7JBjqkAYpvg9z3iKPy8PZwbRt8LGXnA0eA5vAcX3scjfpB8lf0My001FL4KoqZ53V0uZye1F%2BpIbA6u8hd4Py%2FcouaJzlL9y%2Fy%2BjaxIB0xZ2ehuCrbGX2%2BRJY9oSZAqtaomnBWk9JQIFrilyAeyD%2B0QRS4x5%2FbfqZ90px20SEu51%2B%2Br%2BQ06lg%2BCQ%2BEtrkBr7mVYNtodB6u3lpmJl2JVOfOdN1cBvAXOjLg&X-Amz-Signature=7aef300db93aaeb6014968ffd5006d5c8329b44ed886d10a995f592babf2b572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
