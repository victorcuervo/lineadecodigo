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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KNEXXO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBb6Hu4LRY0tQMRkwWKs8Y67WDEDQY6%2FmHFcOE3Ccf4AiEAoK%2FJfMzz5cUnso7sphQhyAKFdB4tGsBFDQeWRUYRRuUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEgqf7n4scKvbfz1XircAyF3W9E6bifJSwb79k%2Ba1U4gZz2t4BNO1Yjdz0X0FksP2Gh%2BBUmWmPfEusoMUnueeBsaeqA1VwG9eBe2Y3%2Bz3wS3YUzqL7e8PnUyHWlQdqAsPzm%2B5YrNgcDouM0RTBQVXSJurs0ZuoXfpyJBgTf15TVIfCAFZYuAapSwi4HE8Vo3poxuk7OWZ3PiuT7dfv8zdEnWgDk84Rlf39kfecWlSR0FQC3RJT4JH4cnzz9teT0qDAEaAcT4OX9Rx6OiKnZNn2MLViCU7LJYjfIIRo1GT7gUrIWwWN1ZbAtPOdDw9CuGh4hexjmsPkSsPx4giGGU2jXFDLRgOVFG6dVXJkH31MTZ1KQJUK5mp4P7%2FsnlM5nOcGOdS5zs5sYYlVq64A4Uq4%2BvniW7yaR2QxA3lAliKqyCLx6rl6XrvUqcgqkeMev72c8XDqo2UiJQlAlDw5aGa1v69MnxXIp4o5xRwfTMOeLSN7Czcum09iRYVxnLb6Che3B4zak7xrXQLGmnUoAx2fSvd05CGNzcqKMnUW0xxDEoBisKUlf%2FaAe%2FUJ%2BbkZ3kW1o5NPg8QGp6lnygRhp7Fahkr8ucKIw6MC%2B6V8az9bySI5yDy3j4ISJZ3%2FVXkVlLyADXZ7LYH32%2FCrbJMOqqisoGOqUBVtyN%2BiURrpcx0exw6q2mJmx%2FIoM%2BGEO7NsjaFILsGK2V3NTziuZ8rgU65NH7BKCppW0DXJznE3y1mYoeMdeNM9vdaDxCipUBnu%2F3myo0MSWFD156wabwzFDFWxLkeBpzL77xglzd%2FwgDe21s2nCJuwvr72T2TIED424dLFyNbqHVfiLorm9ny%2B%2F%2F0j7t%2FkW1S8Yk8qoEWaLRG19b0VhSYqnH0HtO&X-Amz-Signature=b072de5a1b4d0b1b92afae9f53efbdb3596df05b3914e3f46b2ce3597a3c3c13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KNEXXO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBb6Hu4LRY0tQMRkwWKs8Y67WDEDQY6%2FmHFcOE3Ccf4AiEAoK%2FJfMzz5cUnso7sphQhyAKFdB4tGsBFDQeWRUYRRuUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEgqf7n4scKvbfz1XircAyF3W9E6bifJSwb79k%2Ba1U4gZz2t4BNO1Yjdz0X0FksP2Gh%2BBUmWmPfEusoMUnueeBsaeqA1VwG9eBe2Y3%2Bz3wS3YUzqL7e8PnUyHWlQdqAsPzm%2B5YrNgcDouM0RTBQVXSJurs0ZuoXfpyJBgTf15TVIfCAFZYuAapSwi4HE8Vo3poxuk7OWZ3PiuT7dfv8zdEnWgDk84Rlf39kfecWlSR0FQC3RJT4JH4cnzz9teT0qDAEaAcT4OX9Rx6OiKnZNn2MLViCU7LJYjfIIRo1GT7gUrIWwWN1ZbAtPOdDw9CuGh4hexjmsPkSsPx4giGGU2jXFDLRgOVFG6dVXJkH31MTZ1KQJUK5mp4P7%2FsnlM5nOcGOdS5zs5sYYlVq64A4Uq4%2BvniW7yaR2QxA3lAliKqyCLx6rl6XrvUqcgqkeMev72c8XDqo2UiJQlAlDw5aGa1v69MnxXIp4o5xRwfTMOeLSN7Czcum09iRYVxnLb6Che3B4zak7xrXQLGmnUoAx2fSvd05CGNzcqKMnUW0xxDEoBisKUlf%2FaAe%2FUJ%2BbkZ3kW1o5NPg8QGp6lnygRhp7Fahkr8ucKIw6MC%2B6V8az9bySI5yDy3j4ISJZ3%2FVXkVlLyADXZ7LYH32%2FCrbJMOqqisoGOqUBVtyN%2BiURrpcx0exw6q2mJmx%2FIoM%2BGEO7NsjaFILsGK2V3NTziuZ8rgU65NH7BKCppW0DXJznE3y1mYoeMdeNM9vdaDxCipUBnu%2F3myo0MSWFD156wabwzFDFWxLkeBpzL77xglzd%2FwgDe21s2nCJuwvr72T2TIED424dLFyNbqHVfiLorm9ny%2B%2F%2F0j7t%2FkW1S8Yk8qoEWaLRG19b0VhSYqnH0HtO&X-Amz-Signature=1a0ab5b655038c7815833f5cf71c7d79c34344d4a94a585a7a6b63b109e29058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
