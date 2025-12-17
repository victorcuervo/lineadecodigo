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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJEE3XG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHt5NSQ%2FMXRNXt%2ByWi4tL7wmyXs9z9O813zvBwarDiBwAiEAyicp1nvTGNXKb2ZRr%2F9FzgOtiGnR%2FIbiKwrHbxQ7NboqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvr9Gw%2FzCctvR4HiSrcAy96QglMOO50jWnLEJ6CX%2BxGcq0bnJoP1Z%2FnpZNKsQge2r7Q7%2FaTJ0jjKxFjzt%2BKfFHe8YOiAHqV4ds%2B03VWhxt5OZ6F1YReU%2F513j2TaiuftXZwJ1dsE698BIHFZpRE8seht4P%2FgkIRbrSrkZp6cPciESYVOmMtE41wVikxcSsTcsH3zZaTZxrm5RfdsHf%2F2StdS4nr9fGtMHG8IN4sDJbxShsEr9De0GA543a9lTV1GftUn1Q2dxe1DFWY3Y%2F6XbGxVYM0AQJNN%2Fk6ZmajlSr%2Bk9OvPPeKtyxHwA8xxs4aQVTt9VbRJRdCrcaJUbs9S2rGc6M7Czjh7XsoAV3GBHRpWTmzevFGdpICCuN5O3uHQtaGTZiKghllQEjeLJdP7V6YLX54mzGO0h%2Bdy%2BIGEHbBvMFiE7s3Z7hgJlRD0TChKqUfw6RrVu8mss97iReNFiE8qW52SN4i7lC4PogtKz6p6ocjRDromQSv4EK6Lfl3Xt7QylM0YjLb2z5rJC8%2FL5NEnYLSEIpGg2VofmBIJFzvRSk3OXg0N4OL4EXZVxhs5TJAmt1DDGVyaEcLi9mx0VPXRLr0UnwKaENwWrlGJUEUJrpo5W4CfhKa9jqla7t9yxZaGJyIx%2FnZz%2Fz7MOSei8oGOqUBjCIBE%2BSk%2FqpzMwZyhhkbFadQGjK6jtHRh1XVtqWiRGupr9kMQGjF6iWu6X5QPKuQkgoiaeN%2FeS7A8XEpEzT346of9BWWZS1NLxy1O7FM6DougxfijFT6jnhPOZksI0m3Zj0iEorYd7UEl5LJnlWeS%2BQaBs8RnAPF1Rw%2FdRxjH9Up37liTnM3Exa6e1%2B%2F1etQ4UM9H8KVxk4fdhVXjto46h8c5UfV&X-Amz-Signature=7b260de66abddf3711c270fafc27781a6525bdcc6857d0c8f6a6969777e426e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJEE3XG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHt5NSQ%2FMXRNXt%2ByWi4tL7wmyXs9z9O813zvBwarDiBwAiEAyicp1nvTGNXKb2ZRr%2F9FzgOtiGnR%2FIbiKwrHbxQ7NboqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvr9Gw%2FzCctvR4HiSrcAy96QglMOO50jWnLEJ6CX%2BxGcq0bnJoP1Z%2FnpZNKsQge2r7Q7%2FaTJ0jjKxFjzt%2BKfFHe8YOiAHqV4ds%2B03VWhxt5OZ6F1YReU%2F513j2TaiuftXZwJ1dsE698BIHFZpRE8seht4P%2FgkIRbrSrkZp6cPciESYVOmMtE41wVikxcSsTcsH3zZaTZxrm5RfdsHf%2F2StdS4nr9fGtMHG8IN4sDJbxShsEr9De0GA543a9lTV1GftUn1Q2dxe1DFWY3Y%2F6XbGxVYM0AQJNN%2Fk6ZmajlSr%2Bk9OvPPeKtyxHwA8xxs4aQVTt9VbRJRdCrcaJUbs9S2rGc6M7Czjh7XsoAV3GBHRpWTmzevFGdpICCuN5O3uHQtaGTZiKghllQEjeLJdP7V6YLX54mzGO0h%2Bdy%2BIGEHbBvMFiE7s3Z7hgJlRD0TChKqUfw6RrVu8mss97iReNFiE8qW52SN4i7lC4PogtKz6p6ocjRDromQSv4EK6Lfl3Xt7QylM0YjLb2z5rJC8%2FL5NEnYLSEIpGg2VofmBIJFzvRSk3OXg0N4OL4EXZVxhs5TJAmt1DDGVyaEcLi9mx0VPXRLr0UnwKaENwWrlGJUEUJrpo5W4CfhKa9jqla7t9yxZaGJyIx%2FnZz%2Fz7MOSei8oGOqUBjCIBE%2BSk%2FqpzMwZyhhkbFadQGjK6jtHRh1XVtqWiRGupr9kMQGjF6iWu6X5QPKuQkgoiaeN%2FeS7A8XEpEzT346of9BWWZS1NLxy1O7FM6DougxfijFT6jnhPOZksI0m3Zj0iEorYd7UEl5LJnlWeS%2BQaBs8RnAPF1Rw%2FdRxjH9Up37liTnM3Exa6e1%2B%2F1etQ4UM9H8KVxk4fdhVXjto46h8c5UfV&X-Amz-Signature=93016da1f0d6032cedd87f967a04ea4554ca8606813d1d344e9a9f019042b37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
