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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGWMLYYC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsXVFO7eLvoG0QSoc2lPFyjeP3SCzNNwAY18tH6F6kEwIgGNEyc7SLllGt6YSNwE%2FtdSTD0qOf%2FEATfSeECnN%2Fd3kq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBIHmd6XvRruPfdZzCrcAx7cr6LZcl9t7Rc62qrJA9w%2F3SQXndf8HypcHq6Ar6Bh3n%2BR7JdSXh5l%2FSgp7UU3g9BiLxkKYN9hi0oJd%2BTvJyPRSHRlmac%2Firfyub7KieRc0N%2FaeRb0eD3%2F0soBpsRp6qVGMo9lpRhVrKOizEA%2BP5ZL4PUO5SVYlMexFdAJxF28JrEljA1aRrf%2B6dkJGeKcjiOtYjt05qS1OoNGPSmOgPZysILyuECY3Qd5iUkHhpSRd24Cd3AFBf0iOdBkQYCUngfZMbNmm7ScA29HHLIL43tnirRyj3RSL13c38NeSSyofVGy%2FRGqDawk7gBNhMuTv55Gq3GPmGPAEOeFGzjNCy8Kv4U8Wov2Ee9L6tlIpk3JxxNeZMcULFYTIbeGumvenzhjydz3%2BGDoubdsp5OpnqTPHLnPOFSpALXQYwvgsaN3K8v4C%2FW%2FipTGdm9wd6EsJ9ls095%2FpHQ%2FlHqqc%2FPnAzuIyeuhzLG5D1KNxjbwUTbXF%2B%2BYtVFc4UrMUI69NfHJ3xorRzvSW6qdB0%2FF9%2Bcki2TUQEppWDOpgpZrHo%2BUZpaM3vQky5nsX2T5t7VwC3ydoinMk2HYTqWL0l8fBqoBv0ymGGYbFrgdgy4McgobQGcXAW%2BloSTdX6a%2BsPwSMP3QicoGOqUBKxSe1xhl5gV9lygadsfw2XJHkM1PJdhi5KKNw1NXIfA7i4g1YbhFz%2FH%2FtvWsaf3P8KqrVIyk9emsur%2BYw99byCHakxpsHYUuC4%2F7wjjrYLQx6a6VJeTAN0jXgYalWnT6Ga3WZ5aKBDuGfAZGnTGX4RsJFRJpOQ7HhZ6ViQPy9H1TYcUvTsJuJS1eMnhn0dzm6a26ypy%2FvZ6ZODKX3R5u6Mpzb%2BsC&X-Amz-Signature=d4be0434a197ad176cb4778d6924639c8c0d9db27d6788eb8a13e1b35157ca94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGWMLYYC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsXVFO7eLvoG0QSoc2lPFyjeP3SCzNNwAY18tH6F6kEwIgGNEyc7SLllGt6YSNwE%2FtdSTD0qOf%2FEATfSeECnN%2Fd3kq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBIHmd6XvRruPfdZzCrcAx7cr6LZcl9t7Rc62qrJA9w%2F3SQXndf8HypcHq6Ar6Bh3n%2BR7JdSXh5l%2FSgp7UU3g9BiLxkKYN9hi0oJd%2BTvJyPRSHRlmac%2Firfyub7KieRc0N%2FaeRb0eD3%2F0soBpsRp6qVGMo9lpRhVrKOizEA%2BP5ZL4PUO5SVYlMexFdAJxF28JrEljA1aRrf%2B6dkJGeKcjiOtYjt05qS1OoNGPSmOgPZysILyuECY3Qd5iUkHhpSRd24Cd3AFBf0iOdBkQYCUngfZMbNmm7ScA29HHLIL43tnirRyj3RSL13c38NeSSyofVGy%2FRGqDawk7gBNhMuTv55Gq3GPmGPAEOeFGzjNCy8Kv4U8Wov2Ee9L6tlIpk3JxxNeZMcULFYTIbeGumvenzhjydz3%2BGDoubdsp5OpnqTPHLnPOFSpALXQYwvgsaN3K8v4C%2FW%2FipTGdm9wd6EsJ9ls095%2FpHQ%2FlHqqc%2FPnAzuIyeuhzLG5D1KNxjbwUTbXF%2B%2BYtVFc4UrMUI69NfHJ3xorRzvSW6qdB0%2FF9%2Bcki2TUQEppWDOpgpZrHo%2BUZpaM3vQky5nsX2T5t7VwC3ydoinMk2HYTqWL0l8fBqoBv0ymGGYbFrgdgy4McgobQGcXAW%2BloSTdX6a%2BsPwSMP3QicoGOqUBKxSe1xhl5gV9lygadsfw2XJHkM1PJdhi5KKNw1NXIfA7i4g1YbhFz%2FH%2FtvWsaf3P8KqrVIyk9emsur%2BYw99byCHakxpsHYUuC4%2F7wjjrYLQx6a6VJeTAN0jXgYalWnT6Ga3WZ5aKBDuGfAZGnTGX4RsJFRJpOQ7HhZ6ViQPy9H1TYcUvTsJuJS1eMnhn0dzm6a26ypy%2FvZ6ZODKX3R5u6Mpzb%2BsC&X-Amz-Signature=991f073879f18d228c2acb30de6b1915f42da462ab1c1519cd9e6a37547758b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
