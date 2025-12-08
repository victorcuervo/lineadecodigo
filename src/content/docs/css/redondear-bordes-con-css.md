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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LE35M56%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpO3P3jKIF7Y7MI2OzCptozXfiXExp%2F3gXoWWLiWLZlAiB0UGYT%2FeUY4kdbEXbcmdsY3xUj0Jga5Jr3Pb%2Fkg1E2niqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5GTHUDAKAZW%2BCpp0KtwD7AMYzTQrZ%2Fz6q%2Bdrfhg4FzuQfbpZt0pDxXrsfbrFIZ8VIY8OPqpGqCYxBy9Wn9A0XfHcH0s%2B72TT1rxtyTHNxkp0%2FOdNHj32qibIQvgqDgHnOXZBzs%2FUYqQElhexfsmi%2FU1QHX%2BrRQ6jzlu3WWxVBXg7OkZTakv%2FE%2FDU33PL%2FrGlNz6lZvXdS%2B8cv7kif8CFC7%2FumvSvwNzZtcLXhyQmPhL8N%2BIqh8bgDESY4KyUggbUQufNckbdLi7TI%2FoXU%2FcNQTMtq0j7a6xoiqOFnFE8PWFXdJLCXQsXFxpy%2BnOUqvyjU4ryXP5jMd1CepWWkmw4HaR9ydVmMgHbYad12%2FFwJPVEu0plOArcWUvKjdKQTefN6rZZQYb2WqX0teOd7tzhweGIAYtNpjzUZa2FiLTBsagosothIdVQW7I5I1%2BBtb6YOMqzUACH7wo4C3of0x6v969E8SRb7tqRMgR7KbIBjXJe6rqsMOEHek7QnVgknRyBETPsG2SP11ScB5B7eUa9xL9iUx%2F2uZSpklXeuk4900JLsI4O6vWE0F8FhBfEGySxyQ8vlf%2BYdrWlHytg6XRYDDPffHe2t1%2BfZfIgwUkuaEox%2BhpsC2iuhNITI%2FpRSEYzZWPeAdjYLhpWCUswjsPdyQY6pgHh1UgwADITRqsUrHIr8st7EeQ6si8qSXXzdobbU9so%2FDgykXeow68OhcnrXH9OQT%2BF8Z5ZEoLoYr2fMlf49Im6GJV7X7rA%2FTOBhN52ZnaE%2BK5BFIadzQasJd%2BxOrXqSs%2BiuX2uzZ9rmxMky5eo3hUDaEY06y1M5zNq1Qyv5RWBkHSOO5wx1qyIMPIn%2FpjTxR1gJqAM%2FNncUOtg5kFj%2FZUo9DSzvQM1&X-Amz-Signature=58fcea7754560be0402107afb2761cebbe3cd47b6b787c3e1ed1be3f790b2b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LE35M56%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpO3P3jKIF7Y7MI2OzCptozXfiXExp%2F3gXoWWLiWLZlAiB0UGYT%2FeUY4kdbEXbcmdsY3xUj0Jga5Jr3Pb%2Fkg1E2niqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5GTHUDAKAZW%2BCpp0KtwD7AMYzTQrZ%2Fz6q%2Bdrfhg4FzuQfbpZt0pDxXrsfbrFIZ8VIY8OPqpGqCYxBy9Wn9A0XfHcH0s%2B72TT1rxtyTHNxkp0%2FOdNHj32qibIQvgqDgHnOXZBzs%2FUYqQElhexfsmi%2FU1QHX%2BrRQ6jzlu3WWxVBXg7OkZTakv%2FE%2FDU33PL%2FrGlNz6lZvXdS%2B8cv7kif8CFC7%2FumvSvwNzZtcLXhyQmPhL8N%2BIqh8bgDESY4KyUggbUQufNckbdLi7TI%2FoXU%2FcNQTMtq0j7a6xoiqOFnFE8PWFXdJLCXQsXFxpy%2BnOUqvyjU4ryXP5jMd1CepWWkmw4HaR9ydVmMgHbYad12%2FFwJPVEu0plOArcWUvKjdKQTefN6rZZQYb2WqX0teOd7tzhweGIAYtNpjzUZa2FiLTBsagosothIdVQW7I5I1%2BBtb6YOMqzUACH7wo4C3of0x6v969E8SRb7tqRMgR7KbIBjXJe6rqsMOEHek7QnVgknRyBETPsG2SP11ScB5B7eUa9xL9iUx%2F2uZSpklXeuk4900JLsI4O6vWE0F8FhBfEGySxyQ8vlf%2BYdrWlHytg6XRYDDPffHe2t1%2BfZfIgwUkuaEox%2BhpsC2iuhNITI%2FpRSEYzZWPeAdjYLhpWCUswjsPdyQY6pgHh1UgwADITRqsUrHIr8st7EeQ6si8qSXXzdobbU9so%2FDgykXeow68OhcnrXH9OQT%2BF8Z5ZEoLoYr2fMlf49Im6GJV7X7rA%2FTOBhN52ZnaE%2BK5BFIadzQasJd%2BxOrXqSs%2BiuX2uzZ9rmxMky5eo3hUDaEY06y1M5zNq1Qyv5RWBkHSOO5wx1qyIMPIn%2FpjTxR1gJqAM%2FNncUOtg5kFj%2FZUo9DSzvQM1&X-Amz-Signature=a27a78d1c22c2e0893d27f6c1ecba92c27497e16cef474591d93cc18d7cbb794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
