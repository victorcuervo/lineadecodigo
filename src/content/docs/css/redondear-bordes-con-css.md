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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWJZLUOF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FnIa8Xr%2BbX%2BN%2FfLl2cEQIeF4OjPphfFl4oF%2F2jOH26wIgemCCzkMZ0QypDH%2FBmjn%2BUnnHH4g9lBRBVaj47I8aAU8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDH%2BkSjeyQDYk56PWYCrcA2TMWHEzDZy%2FPXZGa9akqiLU6dhYk5q6zDresBjm37T4LH6fBdw6cBWub6ZC9iyPgCP8U4DT0nWCRsfJwJjeja8zly3UXEQLtsLn7kV5xSTZciEPAe3ORdBgCwyyvDbVJ1LwJcxVP1WCs4A6FMdYo2Bl6kmtA4UHS3q1DEpFkDC6BxP6NdaoOByJ64Zz8Z9gY4rMh4Vsr5RRRjzJzWkVFvIGIe5BRpglwoQ32AG49OzODKWGrmoyR5x0oRN6nth4%2BCES%2BiUJTkscESuxPT5mned%2Bdh89jP3bAfIp7Nu58RkOEQ2C6An6fglmWCUcHvMEdgXbQD0Ed%2FWcPxub5ysjyLS7Y%2FZVrp1BInZ1Qgu%2BVJQ0UiBqBniat5jkBTug7wYt4cmi2TBlze%2BhjMOOtiX42jHqJchC%2FOFbrHf%2B%2BYlVn0UclZqIbjoMmBs%2FtwAuscPRaOABm3n0ZPKvf32x8emwe5DFdaxHwjhfQIjQn1VErCUxyT1A2LVt7a8Aoj4Qty%2FBUpM%2F0o5xkZt7RRpezX4v9eIyjCIeLjvLeCXDaS8I00re7h5ZblpRnQwjwznaUVNNaQpPNxUvpdsi3L%2FTn8izkdxfz9JVea6hBcWHp9uNj17DpwBtnfHggMGLIiPxMNv6xskGOqUB74lUIuGCTbF71BUJQSR3Tnw8xcjuZnKAXtGNK%2F9E6theMxpcURe2Hz5XBPwOo8JvXMdIUaqkBqaqZFKRDsmHYcKsw8SCsp9jsb3QkfSga4Ub40reZYMRX25V%2BhcdcbLUygMGRuuQhcN3RMyErVj89YiMC7xHrpxuV7SRmKxyLkuNDfvKa3hY7oc9ipA0EzWbj8DnGz%2Balg6N3oTopYiQizQ853VF&X-Amz-Signature=25e1c5ad4fd977310215d24a154e713203064bccbe3a1bfed6f0104c8aad6282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWJZLUOF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FnIa8Xr%2BbX%2BN%2FfLl2cEQIeF4OjPphfFl4oF%2F2jOH26wIgemCCzkMZ0QypDH%2FBmjn%2BUnnHH4g9lBRBVaj47I8aAU8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDH%2BkSjeyQDYk56PWYCrcA2TMWHEzDZy%2FPXZGa9akqiLU6dhYk5q6zDresBjm37T4LH6fBdw6cBWub6ZC9iyPgCP8U4DT0nWCRsfJwJjeja8zly3UXEQLtsLn7kV5xSTZciEPAe3ORdBgCwyyvDbVJ1LwJcxVP1WCs4A6FMdYo2Bl6kmtA4UHS3q1DEpFkDC6BxP6NdaoOByJ64Zz8Z9gY4rMh4Vsr5RRRjzJzWkVFvIGIe5BRpglwoQ32AG49OzODKWGrmoyR5x0oRN6nth4%2BCES%2BiUJTkscESuxPT5mned%2Bdh89jP3bAfIp7Nu58RkOEQ2C6An6fglmWCUcHvMEdgXbQD0Ed%2FWcPxub5ysjyLS7Y%2FZVrp1BInZ1Qgu%2BVJQ0UiBqBniat5jkBTug7wYt4cmi2TBlze%2BhjMOOtiX42jHqJchC%2FOFbrHf%2B%2BYlVn0UclZqIbjoMmBs%2FtwAuscPRaOABm3n0ZPKvf32x8emwe5DFdaxHwjhfQIjQn1VErCUxyT1A2LVt7a8Aoj4Qty%2FBUpM%2F0o5xkZt7RRpezX4v9eIyjCIeLjvLeCXDaS8I00re7h5ZblpRnQwjwznaUVNNaQpPNxUvpdsi3L%2FTn8izkdxfz9JVea6hBcWHp9uNj17DpwBtnfHggMGLIiPxMNv6xskGOqUB74lUIuGCTbF71BUJQSR3Tnw8xcjuZnKAXtGNK%2F9E6theMxpcURe2Hz5XBPwOo8JvXMdIUaqkBqaqZFKRDsmHYcKsw8SCsp9jsb3QkfSga4Ub40reZYMRX25V%2BhcdcbLUygMGRuuQhcN3RMyErVj89YiMC7xHrpxuV7SRmKxyLkuNDfvKa3hY7oc9ipA0EzWbj8DnGz%2Balg6N3oTopYiQizQ853VF&X-Amz-Signature=bf2c537e3484ce444bdcc09b472f81a28511c32ccd954a22a233f0dc5acb3bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
