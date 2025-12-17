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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4SNY6U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2CGqJHmHKvb%2FhfOzDqeec8PEjCT8JJI0lYzKtwqreEAiEAmyzqvFFxuQdK3Gb4LaPu1VpA8hy8l7IheTN5IDJzBAkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMcWG9teFCQ7scqOwircA%2Bqekc5B8EqPcXBkqlSzA7lxltXJzSO9I8tNJ1sFqcr69VBociVKmh%2Fmp9X3azAAvNXl6g2jdwR8UszYKZ82WiIWIOpjelr%2BFfLvWOp6o9G%2FkxjRya4fj6CGVWE514PalWbkzeRkb9gJJEvI3pXCauIb1CZFa2WRVANf3q1gtDplXSWZaPxJsWFL%2BYLlEl%2FQj1mcYWmdwIHESh06lswfYB2EZ83HYf%2FilhC59hWM27oGUcaPKWp3IiWskKXEXGCKimw4tAk5ZjrqGs4E4Huc6fQNmN92j4XJrUnbnKNhEQGuCEhOaDHeoEA2uDfugBbOFP5%2Bu8sdJPWBpwexCGRm8Ntw3IjA8VtISwECIkRCm%2Bo%2Fd9PIersjbFcalbV%2Bbe591yOfX1oZkmHrTMPnBJBE%2BnBuvjUkQJmc%2BRrvNepEpAgc9CJOlW5NwjGjofp6Wf%2Fo8VyZYPc3hLhg8qwOv4RSzjxCwWU2fFqBWE%2BWHdc493ilAMOdt7t56bB1JNnZVtOqDWA%2FmCM5tjfB7d2L%2BrQtKGG9%2BZwgRbMIILiGJyh9Jn8275KFFGtv9K%2By%2Fkh6zAgmWyD4EKMLu4g5B1c433zfsGMv5oVP9NKe4TWdSxznHNZ%2BxyQMJpbcK1QgiAqWMKWCicoGOqUBTA%2BkfplE9%2FCiu8J7bT83mekadwFApFYxB0cOzwlwLGNwOuZqIkID8q0KFoIJnNqXqNSYjKOL5ukTlhnwr9VnsbHCCl5jqpYA5eDbPtbjHfGpxMQfYzqvYOEsKmqjYGub0bUQrlhFfNEQU%2Fy2UuVyOcdWTedVTaKgOeZMUS5BhVl7uq67kf1LKiH02u8eUul%2Ft%2BZxI7Ay7dLddGzCtFBoaKUmP0%2Ff&X-Amz-Signature=c82bd5e118caf80bdbe314ec8157f77c4a9b79ebe5063e97938f69923efa65a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4SNY6U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2CGqJHmHKvb%2FhfOzDqeec8PEjCT8JJI0lYzKtwqreEAiEAmyzqvFFxuQdK3Gb4LaPu1VpA8hy8l7IheTN5IDJzBAkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMcWG9teFCQ7scqOwircA%2Bqekc5B8EqPcXBkqlSzA7lxltXJzSO9I8tNJ1sFqcr69VBociVKmh%2Fmp9X3azAAvNXl6g2jdwR8UszYKZ82WiIWIOpjelr%2BFfLvWOp6o9G%2FkxjRya4fj6CGVWE514PalWbkzeRkb9gJJEvI3pXCauIb1CZFa2WRVANf3q1gtDplXSWZaPxJsWFL%2BYLlEl%2FQj1mcYWmdwIHESh06lswfYB2EZ83HYf%2FilhC59hWM27oGUcaPKWp3IiWskKXEXGCKimw4tAk5ZjrqGs4E4Huc6fQNmN92j4XJrUnbnKNhEQGuCEhOaDHeoEA2uDfugBbOFP5%2Bu8sdJPWBpwexCGRm8Ntw3IjA8VtISwECIkRCm%2Bo%2Fd9PIersjbFcalbV%2Bbe591yOfX1oZkmHrTMPnBJBE%2BnBuvjUkQJmc%2BRrvNepEpAgc9CJOlW5NwjGjofp6Wf%2Fo8VyZYPc3hLhg8qwOv4RSzjxCwWU2fFqBWE%2BWHdc493ilAMOdt7t56bB1JNnZVtOqDWA%2FmCM5tjfB7d2L%2BrQtKGG9%2BZwgRbMIILiGJyh9Jn8275KFFGtv9K%2By%2Fkh6zAgmWyD4EKMLu4g5B1c433zfsGMv5oVP9NKe4TWdSxznHNZ%2BxyQMJpbcK1QgiAqWMKWCicoGOqUBTA%2BkfplE9%2FCiu8J7bT83mekadwFApFYxB0cOzwlwLGNwOuZqIkID8q0KFoIJnNqXqNSYjKOL5ukTlhnwr9VnsbHCCl5jqpYA5eDbPtbjHfGpxMQfYzqvYOEsKmqjYGub0bUQrlhFfNEQU%2Fy2UuVyOcdWTedVTaKgOeZMUS5BhVl7uq67kf1LKiH02u8eUul%2Ft%2BZxI7Ay7dLddGzCtFBoaKUmP0%2Ff&X-Amz-Signature=e32056cc568c6b55fea5031450297d681427c1893b9f9172f6f625086027e782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
