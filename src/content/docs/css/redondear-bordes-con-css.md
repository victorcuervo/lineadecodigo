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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZKPIJ4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBW0nYEK40d5tWZEIpQEzUvW0TyZgJcgVo7S8VzL3xJrAiEApMOS%2FcguuieZG6CiMcSHJkaEslzAsgoq5r6%2FtHV%2Fh8Eq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJUr77wjbYtxBcUp6ircA%2FxW3rDqYSzP6CsiXI07sKzACFzIC64AKw3v4L7jRK5Y5JUXYdBgfnVvXVQsplxTywDLcHckalkQdiSnY7uXnbIK%2BmmJt1NWlzXg2C5V8jaYYFAZokOnE%2Bvcme5gP4AnhSnG6RZMp7WsqA%2Fs8ssWBlGJRZrSIPzG5ZlHrydf3DFdxCvh4NRNU729UgNoqPBYWRUxKdh6xA%2FJXcppdssJgBqU6EEnRwZvCYW3mxfUDWctPn9J6yW0BO9qfwYBKkMqPTIrqMXxeJ0Jac%2BIc4J71e7QY1OmHIs%2Bj232uYl9xzuB5wy3DJ1scRSGG5B1uvMAz8zQtQE%2FFALZMYpPgrfAK93Evk8JQARyE3%2F8ejcXIgLBL%2F%2Frn3QPVGulqtB8mZVWp%2BYCN5ZLpTi6ZKtRhgE6mVG9JsDE6UwudvsINVG5bZiuwUCQYuJxnABqFbgLbhJ3TEjoKx4tXkQkepZR8ypYllky%2FX73WLK%2FISc%2B4c2tehMI0gzN6GsrcRWVN6GQcg5jtc18qz8ry7frkuayhyiLZlIaRqSTC6Unroofjf6ESGMhqvdxbHUz8dMTYMUeTZ%2B2wrorC4s1Aq48t5o1ue8UquZItHv24s3ZzM9tKvaHoDsOVOJjMOfg7lbIfTY1MNTU0skGOqUBrWU81ZLCTFDeF8oHzPh%2FjMfbRKYWZiWl7%2B0o1QbXo%2B%2F79GfqV90OnRbyWrnmQl%2BrzI%2B7YRWi%2FXoEKnRPUeeQYPuxZQ%2BIUJdzfj%2B5Vp0qVJh4ad1HNXM2xtRKOvEp83iIL1tsheNszoS2GnZIr%2B5yjGbZflWTXxf34Q%2BNtJOJSEwOnSENdgvL2m512gs0bI9ajRF2yDOg0qBLooVHm%2BlOSWXdu47Y&X-Amz-Signature=153c1c8c7d415e42e349484db63fd2b19492dc0988e8b8ec0d4137fe75f3e302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZKPIJ4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBW0nYEK40d5tWZEIpQEzUvW0TyZgJcgVo7S8VzL3xJrAiEApMOS%2FcguuieZG6CiMcSHJkaEslzAsgoq5r6%2FtHV%2Fh8Eq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJUr77wjbYtxBcUp6ircA%2FxW3rDqYSzP6CsiXI07sKzACFzIC64AKw3v4L7jRK5Y5JUXYdBgfnVvXVQsplxTywDLcHckalkQdiSnY7uXnbIK%2BmmJt1NWlzXg2C5V8jaYYFAZokOnE%2Bvcme5gP4AnhSnG6RZMp7WsqA%2Fs8ssWBlGJRZrSIPzG5ZlHrydf3DFdxCvh4NRNU729UgNoqPBYWRUxKdh6xA%2FJXcppdssJgBqU6EEnRwZvCYW3mxfUDWctPn9J6yW0BO9qfwYBKkMqPTIrqMXxeJ0Jac%2BIc4J71e7QY1OmHIs%2Bj232uYl9xzuB5wy3DJ1scRSGG5B1uvMAz8zQtQE%2FFALZMYpPgrfAK93Evk8JQARyE3%2F8ejcXIgLBL%2F%2Frn3QPVGulqtB8mZVWp%2BYCN5ZLpTi6ZKtRhgE6mVG9JsDE6UwudvsINVG5bZiuwUCQYuJxnABqFbgLbhJ3TEjoKx4tXkQkepZR8ypYllky%2FX73WLK%2FISc%2B4c2tehMI0gzN6GsrcRWVN6GQcg5jtc18qz8ry7frkuayhyiLZlIaRqSTC6Unroofjf6ESGMhqvdxbHUz8dMTYMUeTZ%2B2wrorC4s1Aq48t5o1ue8UquZItHv24s3ZzM9tKvaHoDsOVOJjMOfg7lbIfTY1MNTU0skGOqUBrWU81ZLCTFDeF8oHzPh%2FjMfbRKYWZiWl7%2B0o1QbXo%2B%2F79GfqV90OnRbyWrnmQl%2BrzI%2B7YRWi%2FXoEKnRPUeeQYPuxZQ%2BIUJdzfj%2B5Vp0qVJh4ad1HNXM2xtRKOvEp83iIL1tsheNszoS2GnZIr%2B5yjGbZflWTXxf34Q%2BNtJOJSEwOnSENdgvL2m512gs0bI9ajRF2yDOg0qBLooVHm%2BlOSWXdu47Y&X-Amz-Signature=cc80ced37ec56b05bd2d882ec4d072e35621cc9557cae895fee78b28b0138d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
