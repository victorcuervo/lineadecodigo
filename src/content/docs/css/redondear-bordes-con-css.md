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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564Y5ULI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXWvbNKwcO%2F9oAVGukWN9p8lXSCuMBASDu5aAs%2BzxZcAIgeo8HWvf4UD8GQxQGh1Ji6FOgtByxzod%2FPOMo1toYa1UqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2MYjNl0TYlhLfuESrcA1wicSNcqrPcmeZv510j2RMo6f2%2BlArb1hF6fgxaSOJUd8zrjHdxsYQKwHIpVYzgm7fryD7sby%2BHtX5nGac5YjFRoS1xqdxSmM9vfy86p64TBJoHYvVA19gJ9Y3VXNFeN2lY9gzf13zBpVF2ZIfJKcx60%2BTRj7XnTxTvReNEamTcAmrNw9UfZ4Kp9QYKlKWbU9BZBhqX2U0kbJfITMVwATLJkfAJCC6mYLZGBdFlQ%2FHAmOjg8F2L3WFcwbsBuJGYjhnB09PIztfsqB4vB1KO3wR1%2BKqNnt1oPHNgRNq2iyoXQsFiqTun9RuW5Nl9Qnav7J%2B7jE1qXMMymZAodzryuO%2F4rn3Ia57z%2F516TcIjmrHIMvJ8w5V2dN1jaCYCnvmCOsrZS1BYhJGH%2F6uOXHu4jhwiEdXdaOt26oo%2B9bYzkvi0rHucJfNXtJdM9RN82fqfh5IaAHnQUIZYDreKZZ0aaKiTceT3Tmj5v325DWbRzVdpccIHid1O1aEExLeTIz%2FWl%2FbdfvEalqXrPkCyL3oJ9JeFSi2M085S8Xs5Swp8%2BGNg6wIUoc6ZJvYbnXuYVefE2nHX6PstdyrL59xZ3%2BRr43u8qo%2BX7mbzdZ3ser4jfEkmBjGkZ0WrsbdsjY90MPbQ2MkGOqUBiD9XuUlSNVWG5oWlw7SIutoPo%2B1LecrC5wZc8qpIVsnFnkWzpEutlWPPbiJKM7m9NSQ9V3QH%2B0eTjIm%2BqmU5170MVsn7OdPOCm7NgUmRW8LoEyRXndgLXSB2ZJIXJW2jWYlkDjf48srARQ8HMW1GL%2BFKkDwdG1OPceRL9kI7%2B2CIMabEa3Zqn7q2145akEEK9jgrAhUyxL7I3s%2FWZ34SrqUiWqjD&X-Amz-Signature=e90df64c35f0266d0b2130ab3baf7620597e991f1ef70e396e098b2750c0fa78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564Y5ULI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXWvbNKwcO%2F9oAVGukWN9p8lXSCuMBASDu5aAs%2BzxZcAIgeo8HWvf4UD8GQxQGh1Ji6FOgtByxzod%2FPOMo1toYa1UqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2MYjNl0TYlhLfuESrcA1wicSNcqrPcmeZv510j2RMo6f2%2BlArb1hF6fgxaSOJUd8zrjHdxsYQKwHIpVYzgm7fryD7sby%2BHtX5nGac5YjFRoS1xqdxSmM9vfy86p64TBJoHYvVA19gJ9Y3VXNFeN2lY9gzf13zBpVF2ZIfJKcx60%2BTRj7XnTxTvReNEamTcAmrNw9UfZ4Kp9QYKlKWbU9BZBhqX2U0kbJfITMVwATLJkfAJCC6mYLZGBdFlQ%2FHAmOjg8F2L3WFcwbsBuJGYjhnB09PIztfsqB4vB1KO3wR1%2BKqNnt1oPHNgRNq2iyoXQsFiqTun9RuW5Nl9Qnav7J%2B7jE1qXMMymZAodzryuO%2F4rn3Ia57z%2F516TcIjmrHIMvJ8w5V2dN1jaCYCnvmCOsrZS1BYhJGH%2F6uOXHu4jhwiEdXdaOt26oo%2B9bYzkvi0rHucJfNXtJdM9RN82fqfh5IaAHnQUIZYDreKZZ0aaKiTceT3Tmj5v325DWbRzVdpccIHid1O1aEExLeTIz%2FWl%2FbdfvEalqXrPkCyL3oJ9JeFSi2M085S8Xs5Swp8%2BGNg6wIUoc6ZJvYbnXuYVefE2nHX6PstdyrL59xZ3%2BRr43u8qo%2BX7mbzdZ3ser4jfEkmBjGkZ0WrsbdsjY90MPbQ2MkGOqUBiD9XuUlSNVWG5oWlw7SIutoPo%2B1LecrC5wZc8qpIVsnFnkWzpEutlWPPbiJKM7m9NSQ9V3QH%2B0eTjIm%2BqmU5170MVsn7OdPOCm7NgUmRW8LoEyRXndgLXSB2ZJIXJW2jWYlkDjf48srARQ8HMW1GL%2BFKkDwdG1OPceRL9kI7%2B2CIMabEa3Zqn7q2145akEEK9jgrAhUyxL7I3s%2FWZ34SrqUiWqjD&X-Amz-Signature=5ada104f9e6f00345b567327d412958683b95c54782d92b1cd87b21eb186632f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
