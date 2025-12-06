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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B44UCRU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPNhzk3dhliFHm%2FDEDIt45W%2FkLgRD40u7KwIWcUeDebAiEA1e6oaLfr8SZrJEKYwbGITgWPQwFKC2nQM0Jm1oaXa9Yq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDASJ8pYH2%2BxAtrcqfircA2uXkv5qudSbwukf5jFU2BfRLzcswihU0MXsgLT4UoUAxHz5fJ8fAvQN8gFfOs1s82BrmFg%2FoT3jjatupcKRz17kNhwxLzTlN0%2BvAyk3vNYbjSCRfNrLa9QDl7R6OojU37A3ssmOtAUgReukCT5%2F8gVHFJ2KDOmy1Qsygrr9JN%2FMPoNRz0qUIZcW2xxCsDVnLWhEEsRCSAh9MN4ruahtq3LVcrRzy7eshFrahMpY8spvHIlQAlT8BbTWuMXuTL5zfcPcN0Spajx8iM%2FKpbZFHskyqyDvBly3jc%2B87JUxOwC0DnzNsApyWgb8ifTWcWahUg822ivX9a9qJ4xPxdAVGXjCjQtyOIAaUqpzEQc9lDY%2FBaoVtQff15byLQEYJGxm0lNDLeu2F0cgo7mrhBK%2BX5Y2B8JW7KBRJykhb9fIJWC0G7WafrX3Q4nVS4heP8lfPH0Qg%2B%2F2Cds5Ro6I298M%2BCxXk8tT0QOwdyHQZExYOXE8m3XGNVO1H1slSEir%2BLcBLzLvpzIjcQI2%2FpRd7pUVgc06GjTBhnSAknafRqwdflAc0xopJ%2FyTYjKWS9TcIqmt1Ty7TR0YRuFGpMC6II%2BEk0WtaNCHQlp4yDBPP36oKpZiqWZ%2FEBpNu2U1XfAvMLLGzckGOqUBPBgAOX2QzBqO8I3bTrmN8j46yR3aFgKCw5yeyN77AGIkBvhWQ4wf7lt23so4Pg0a3egO4%2BZHPabDUvVP4o73lrXTeSyFWtE55o8AEsreucBD8gen3u3FmRz3FXYKYfefjOiKx4sMRYmLRYeFEzMtl3OQwcO96XOJPtkuS8IxkKkZgOLrOejhCzM5N16w60CMTUU9kWQjzN39KchjhQDw4Ww6vQXm&X-Amz-Signature=2af0e3ec11ebb9662aeedad73d16c26432c8c9c6852feee67df8db6ac87d2ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B44UCRU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPNhzk3dhliFHm%2FDEDIt45W%2FkLgRD40u7KwIWcUeDebAiEA1e6oaLfr8SZrJEKYwbGITgWPQwFKC2nQM0Jm1oaXa9Yq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDASJ8pYH2%2BxAtrcqfircA2uXkv5qudSbwukf5jFU2BfRLzcswihU0MXsgLT4UoUAxHz5fJ8fAvQN8gFfOs1s82BrmFg%2FoT3jjatupcKRz17kNhwxLzTlN0%2BvAyk3vNYbjSCRfNrLa9QDl7R6OojU37A3ssmOtAUgReukCT5%2F8gVHFJ2KDOmy1Qsygrr9JN%2FMPoNRz0qUIZcW2xxCsDVnLWhEEsRCSAh9MN4ruahtq3LVcrRzy7eshFrahMpY8spvHIlQAlT8BbTWuMXuTL5zfcPcN0Spajx8iM%2FKpbZFHskyqyDvBly3jc%2B87JUxOwC0DnzNsApyWgb8ifTWcWahUg822ivX9a9qJ4xPxdAVGXjCjQtyOIAaUqpzEQc9lDY%2FBaoVtQff15byLQEYJGxm0lNDLeu2F0cgo7mrhBK%2BX5Y2B8JW7KBRJykhb9fIJWC0G7WafrX3Q4nVS4heP8lfPH0Qg%2B%2F2Cds5Ro6I298M%2BCxXk8tT0QOwdyHQZExYOXE8m3XGNVO1H1slSEir%2BLcBLzLvpzIjcQI2%2FpRd7pUVgc06GjTBhnSAknafRqwdflAc0xopJ%2FyTYjKWS9TcIqmt1Ty7TR0YRuFGpMC6II%2BEk0WtaNCHQlp4yDBPP36oKpZiqWZ%2FEBpNu2U1XfAvMLLGzckGOqUBPBgAOX2QzBqO8I3bTrmN8j46yR3aFgKCw5yeyN77AGIkBvhWQ4wf7lt23so4Pg0a3egO4%2BZHPabDUvVP4o73lrXTeSyFWtE55o8AEsreucBD8gen3u3FmRz3FXYKYfefjOiKx4sMRYmLRYeFEzMtl3OQwcO96XOJPtkuS8IxkKkZgOLrOejhCzM5N16w60CMTUU9kWQjzN39KchjhQDw4Ww6vQXm&X-Amz-Signature=c2cbd1852321a64c82f5bfe2581d76435dbf180961c590c0c1f7e54223beb9d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
