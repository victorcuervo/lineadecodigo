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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVHPQTCE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9tqic8RKO5LXYJ5QmpNeQ5TpaLQEW6zAbawmAQr4oZgIhAPmy0XnVkQblm2NWzE%2FpMCTibLy4KzvXLNawJyitLxf8Kv8DCH0QABoMNjM3NDIzMTgzODA1IgxPfMAAlfmjW5sb9soq3AP31c6RlttqjWd%2FX4jtBUb9KmbT7w6lXYrggUc0H7EROdYuNpJbgXDN5Ha4D8n4RAgI9mOIf%2FvzAdUMWoAofmgIJhxy3Y2FWJJuCNrqw1GahyTvG1czF3iQ0fGLnFVw3IZcWPtrVnadnCo0AB%2Bcw%2FqmQakz3mB3JozzaEmkr%2BRQfQgzp3SrRvM%2B10gf2UYpV4wDd5cGQ9CBZ2X95Py%2Beu8XX5uhULanfFQ8Hi8%2B7%2BFWsivLRmd%2BRCl3E6KJiI6oy5Cw8eP6gAlWJNabb%2FxkQQt3vAeGN3CuXdnLAVx3pHWxUyGxipo%2FiFUaE7TJ98XjydN6iu6VmwvRNvShWCtA%2BuAveixQ6HxIu7sFqcX3mpKvbXIzdWf5W74EWVu4qOJy%2B1dynfHQibA5rk8UeqdP%2F1OKJnf9mOOc4yNeiDsIYu%2F4gqAFPVCgQR9pNT617bd6SwQ0%2FLwkyaL2EozuGnpyMQnSh67VNRzLF0d8eH2QX04boxCt8Byzend7rBlbHPWDajfo5VlAeD97YIzWd2naue4r6DY64b6zhYGcdhuWVhHWlQtyrho0bCoM3qbT7Rm8%2F24744dulRkz%2FJnd19isqUSWwkiyWndi4gnBG3DJBcYhQUzZrshiFmmhyAlcljCxqorKBjqkAUXRWXWFGTRRHZym28wq2I6qjIAc%2FGCjeGxq4nQ8Kcfz0b31vzUCE1bohlo%2Bp3BMNXzkzmkhFUBFQzEwU7bRoajSpY11nXv6uXR8iW9%2FfHpoGWkrNd9UwDvkId%2F6mdI27t9fEa%2BNHKusJvTUWrgZRlf0sdqVhsxzY3csiIUmMoMEuyjV%2B0iC7UuRBRkP%2BTldDUn9LJQJvyEftPI4JqF%2FEnLqN%2BjD&X-Amz-Signature=e04f3f248426df10daecfd3406b0989a0fe196e1a7e68e43bcc8b94aa92558fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVHPQTCE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9tqic8RKO5LXYJ5QmpNeQ5TpaLQEW6zAbawmAQr4oZgIhAPmy0XnVkQblm2NWzE%2FpMCTibLy4KzvXLNawJyitLxf8Kv8DCH0QABoMNjM3NDIzMTgzODA1IgxPfMAAlfmjW5sb9soq3AP31c6RlttqjWd%2FX4jtBUb9KmbT7w6lXYrggUc0H7EROdYuNpJbgXDN5Ha4D8n4RAgI9mOIf%2FvzAdUMWoAofmgIJhxy3Y2FWJJuCNrqw1GahyTvG1czF3iQ0fGLnFVw3IZcWPtrVnadnCo0AB%2Bcw%2FqmQakz3mB3JozzaEmkr%2BRQfQgzp3SrRvM%2B10gf2UYpV4wDd5cGQ9CBZ2X95Py%2Beu8XX5uhULanfFQ8Hi8%2B7%2BFWsivLRmd%2BRCl3E6KJiI6oy5Cw8eP6gAlWJNabb%2FxkQQt3vAeGN3CuXdnLAVx3pHWxUyGxipo%2FiFUaE7TJ98XjydN6iu6VmwvRNvShWCtA%2BuAveixQ6HxIu7sFqcX3mpKvbXIzdWf5W74EWVu4qOJy%2B1dynfHQibA5rk8UeqdP%2F1OKJnf9mOOc4yNeiDsIYu%2F4gqAFPVCgQR9pNT617bd6SwQ0%2FLwkyaL2EozuGnpyMQnSh67VNRzLF0d8eH2QX04boxCt8Byzend7rBlbHPWDajfo5VlAeD97YIzWd2naue4r6DY64b6zhYGcdhuWVhHWlQtyrho0bCoM3qbT7Rm8%2F24744dulRkz%2FJnd19isqUSWwkiyWndi4gnBG3DJBcYhQUzZrshiFmmhyAlcljCxqorKBjqkAUXRWXWFGTRRHZym28wq2I6qjIAc%2FGCjeGxq4nQ8Kcfz0b31vzUCE1bohlo%2Bp3BMNXzkzmkhFUBFQzEwU7bRoajSpY11nXv6uXR8iW9%2FfHpoGWkrNd9UwDvkId%2F6mdI27t9fEa%2BNHKusJvTUWrgZRlf0sdqVhsxzY3csiIUmMoMEuyjV%2B0iC7UuRBRkP%2BTldDUn9LJQJvyEftPI4JqF%2FEnLqN%2BjD&X-Amz-Signature=5d36c865c4a19c50054979f2b7053e2bef902167c3d52bee922b8572acfbbefa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
