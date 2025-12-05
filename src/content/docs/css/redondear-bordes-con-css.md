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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4G7NAX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2LmObItopMW7228OtoI6oYw1%2BIZDP9D2i3h8ldn26RAiEAufXGvP5MamyUibEtJAzMILQ%2B2GhX1xTPrpj6vXhnelAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKESL6Ir2RyhJwAY3yrcA1L7%2FFX31A21tNlJkMDn7YByKQBMfre56VfLrK%2F9pqIdCYmNl8iVfaRWmTja5Rf7c0U9MND5jlqa6N63WcA%2FXDlsboyc1yAFQsm6RaXgP7pqYQoip8VP%2Bou0f%2FxTwV3IZmORNgkkAnhGXUEU0ppb4deRYTERaZ7OZavAtURGgothC%2BZLuP%2BTqqP4P9FRU05nxkfjjz%2FYYnkznf2Mh9%2FTvw5oWd052q3LVZuAzqHTYJNY1r%2F%2BsG6BEGBEie3368LTN8Pz7gUV160OaX8TPhbtWZnMQmRx82L%2Fq%2BezUC2Qj2BbIxxzXr4m5KLiDyVpDi3SQbWTkwQVCj37s5zTnZwz86Y%2F%2BWNFzRT3RNcl3RYheTVWKQ8e%2F8QBc9xPki82gIk1h2Jt2gIa58CPhRuwEdQWqDG9fgx2tMyypoLL68sC7ybLqH3k367pairLOFd9cdOwFJYvIDyOdIEWBk%2BWgDzYqD6utCHmY%2BmX%2FoXsZZM5Jr456B64gFdCaOarDZNiaYoPVDur6R6gx6CXPPKDC13yEtVbpBbRcFMStBKjltvCxcbzYc5h5CVlXzNpCF%2Fq1hdwAgXqvAGhJC%2FPBOP%2F8k1notZFcjIiCOzKkTojWZ%2FZkmECaFWH2YF9YWJrFgNMMIOMyMkGOqUBLIErZbkAw486GMNelZTpIByvdjNrVsbipScC%2B3VRgU2RCMAwgKxQnhdjOMnqn5MufQ9t8rjl%2Fv3FTe4uGIRCffbnxe%2BqQNYK%2FBmvGiVbau38W61Ol4QVpHwCuzpPYVpNn9OuhCrOI7iIxYBegrhK2FtaHWkPkUu1yGWfosFV6M1c5XYXCksatyHcz8qtOXA19Om4Pw1gfh9nXQ4M2JBubk7L6X25&X-Amz-Signature=38e0a53a86a0ed7bf3384d66aa87b69d8e7fbd373c9c553a1ea4250a11292d70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4G7NAX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2LmObItopMW7228OtoI6oYw1%2BIZDP9D2i3h8ldn26RAiEAufXGvP5MamyUibEtJAzMILQ%2B2GhX1xTPrpj6vXhnelAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKESL6Ir2RyhJwAY3yrcA1L7%2FFX31A21tNlJkMDn7YByKQBMfre56VfLrK%2F9pqIdCYmNl8iVfaRWmTja5Rf7c0U9MND5jlqa6N63WcA%2FXDlsboyc1yAFQsm6RaXgP7pqYQoip8VP%2Bou0f%2FxTwV3IZmORNgkkAnhGXUEU0ppb4deRYTERaZ7OZavAtURGgothC%2BZLuP%2BTqqP4P9FRU05nxkfjjz%2FYYnkznf2Mh9%2FTvw5oWd052q3LVZuAzqHTYJNY1r%2F%2BsG6BEGBEie3368LTN8Pz7gUV160OaX8TPhbtWZnMQmRx82L%2Fq%2BezUC2Qj2BbIxxzXr4m5KLiDyVpDi3SQbWTkwQVCj37s5zTnZwz86Y%2F%2BWNFzRT3RNcl3RYheTVWKQ8e%2F8QBc9xPki82gIk1h2Jt2gIa58CPhRuwEdQWqDG9fgx2tMyypoLL68sC7ybLqH3k367pairLOFd9cdOwFJYvIDyOdIEWBk%2BWgDzYqD6utCHmY%2BmX%2FoXsZZM5Jr456B64gFdCaOarDZNiaYoPVDur6R6gx6CXPPKDC13yEtVbpBbRcFMStBKjltvCxcbzYc5h5CVlXzNpCF%2Fq1hdwAgXqvAGhJC%2FPBOP%2F8k1notZFcjIiCOzKkTojWZ%2FZkmECaFWH2YF9YWJrFgNMMIOMyMkGOqUBLIErZbkAw486GMNelZTpIByvdjNrVsbipScC%2B3VRgU2RCMAwgKxQnhdjOMnqn5MufQ9t8rjl%2Fv3FTe4uGIRCffbnxe%2BqQNYK%2FBmvGiVbau38W61Ol4QVpHwCuzpPYVpNn9OuhCrOI7iIxYBegrhK2FtaHWkPkUu1yGWfosFV6M1c5XYXCksatyHcz8qtOXA19Om4Pw1gfh9nXQ4M2JBubk7L6X25&X-Amz-Signature=ed3da60649ce6338e9d654cfc8dc360e5e18df1e0974a24ed599e25738554344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
