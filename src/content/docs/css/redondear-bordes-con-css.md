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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS67BRSB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn9a9fkp6%2BWscd%2BZnXx0Er1gpT85Kb1NmCwMnCoyVKIAIgDZ4VDgvcgs3itiiixh%2BM4ClMEIJLd0oxTzQ75XDNe1wqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXrswXiOj9KpHRUoSrcA0pPvjLwWzEiwTnlrtrcX6LbcYUCCMljBraiqe9dE4%2BSYw1Cy9knXQUNuQe8bOABZWDB2jU%2B9OyX7VJ2M%2BVgwVQj9aLDuNRT7ntzF12xHBurO131x9gpoIzmT6YfrZEizwRINwsPt4KMEy9nwNdrsh7a8sv9GnGO5Y1ly0z8sipnaiCLVV9aVj2QxUtDSnd28hfyUuO%2F0xu64da7Zl3uklirQ%2Blve%2FuT6m%2BYLJUvYv3UyqW0WjA9p1MiQg1inI70kVQWaTYUt%2BGomYF7lGusr7wmicgvQTah%2BOcK9hgOOGaAKyKbHcj2H9M%2BEPODMfTLCsQKvg7r73t4HnsHYwG3LTFqrEV45ISQssjvHBFPOy8AS8HUO5rA7iCZhDMpWGTWE6Vk%2Fdn91j9RViWc%2FbQ1NNdoVeW1MOC4B2%2FuZDGiorMf9n1f6sxuX2HsvxG6a6C2SGcQ2pDkGJ5gGo8uPnlmgU5lnkBXVmuC%2FuAfQ7J7m8GtLp0DwIHAfr%2FK6p1O6M2odkVHIuUoAmwubNkZmD2sJtYnZZpxldw3KEjZMMXBC%2B7HtoY3t4bo7wW4n9Eaw9m6PbWsUtlVO0vRjCkIQIlE85F5791k%2FI0CrvTeq7KDindhOn4s8%2FT9uQfa0vKXMJrQ2ckGOqUBZ%2F%2BKWvoWYCGBu%2Fy2FEiDeADrhU5vWdkwMJ2GXAU17RtSXSztvS7Dq1S0GIKC%2Fh%2Fle8TLeGjKkUi29Py4fp0wAaB4wSiXo57jHYEV5WBlHr%2F1gObiGvg4mO8vwiYLyp5Uf62MQ%2FN8pCYvIZvEGqTHWYb5ZU3WJEcGeH3Dn2AQddiXaDm%2FLgzVZMyHWZ6pZIelrTUX4scxLbbAN9EcOSqT6OUCQQ8k&X-Amz-Signature=86d3dd1435fde5f12cf15ee3a080ad21bb31ced6893fa6b58e043e912dc6f3cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS67BRSB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn9a9fkp6%2BWscd%2BZnXx0Er1gpT85Kb1NmCwMnCoyVKIAIgDZ4VDgvcgs3itiiixh%2BM4ClMEIJLd0oxTzQ75XDNe1wqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXrswXiOj9KpHRUoSrcA0pPvjLwWzEiwTnlrtrcX6LbcYUCCMljBraiqe9dE4%2BSYw1Cy9knXQUNuQe8bOABZWDB2jU%2B9OyX7VJ2M%2BVgwVQj9aLDuNRT7ntzF12xHBurO131x9gpoIzmT6YfrZEizwRINwsPt4KMEy9nwNdrsh7a8sv9GnGO5Y1ly0z8sipnaiCLVV9aVj2QxUtDSnd28hfyUuO%2F0xu64da7Zl3uklirQ%2Blve%2FuT6m%2BYLJUvYv3UyqW0WjA9p1MiQg1inI70kVQWaTYUt%2BGomYF7lGusr7wmicgvQTah%2BOcK9hgOOGaAKyKbHcj2H9M%2BEPODMfTLCsQKvg7r73t4HnsHYwG3LTFqrEV45ISQssjvHBFPOy8AS8HUO5rA7iCZhDMpWGTWE6Vk%2Fdn91j9RViWc%2FbQ1NNdoVeW1MOC4B2%2FuZDGiorMf9n1f6sxuX2HsvxG6a6C2SGcQ2pDkGJ5gGo8uPnlmgU5lnkBXVmuC%2FuAfQ7J7m8GtLp0DwIHAfr%2FK6p1O6M2odkVHIuUoAmwubNkZmD2sJtYnZZpxldw3KEjZMMXBC%2B7HtoY3t4bo7wW4n9Eaw9m6PbWsUtlVO0vRjCkIQIlE85F5791k%2FI0CrvTeq7KDindhOn4s8%2FT9uQfa0vKXMJrQ2ckGOqUBZ%2F%2BKWvoWYCGBu%2Fy2FEiDeADrhU5vWdkwMJ2GXAU17RtSXSztvS7Dq1S0GIKC%2Fh%2Fle8TLeGjKkUi29Py4fp0wAaB4wSiXo57jHYEV5WBlHr%2F1gObiGvg4mO8vwiYLyp5Uf62MQ%2FN8pCYvIZvEGqTHWYb5ZU3WJEcGeH3Dn2AQddiXaDm%2FLgzVZMyHWZ6pZIelrTUX4scxLbbAN9EcOSqT6OUCQQ8k&X-Amz-Signature=07b6176496a6fbc8de1912945187927407ef21bc93ca1e39f5f92bd2ace549a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
