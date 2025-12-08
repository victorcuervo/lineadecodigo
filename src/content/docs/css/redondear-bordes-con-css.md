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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFTMFUAH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0lFJzlmteEEhwl9cEvVGufYn0E7kcAz1GOAwqtF%2FQIAiEA7g3VSggWv27mobtWJp32Hlh1U9%2Fss092m4cczWWbyJIqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKd4djJbsrZeqrvcyrcA%2BKYfy3FnxHnPb%2FiE%2Bq3%2BP4HuYjxFYqpxbtjQCyAdKHxuBHIW116Af8ScHSgsZUVXwIXfZNskKpmcKmWaC0tWXYPQWbAIBtdoxVXzf91ZiTLFrhaC3zRW4HtIllcHYnDlqtbqKRexuJnAg0Bnoy4V399IPGaG6m9%2FQupIj7tBELZl7Jof5FKHSk7AU09v8KmzZLU2G6HfNQ1m3rw8INmsFcLOkT9RH%2BYTrwCdZGw9hS7D%2BdwOZzD4mOjVmzW8wwNIxiJUrO7KvBJBeDZtU8t2fWYnWkq7zC3gw%2FvPCoBbZs%2FJYcJj4n%2FRlivvCiyHto%2FDKTUKzFYLvULOqNWJVA1G8qcGJclKszp7O0lEXF4t5CDVY8iPhH%2Be8HKKDX5FBNZTNXDj09n1OQeF2KvPDYXEU%2FgUDMt4I2ow67yEe1o%2BqQUFFZJ4qJ0EOhYDL8kr0k%2Fxlgena08OjkJJUD0YA1iyB8AOP9GVut2RMkvE5IT37%2BOib026GLj8C6BsjstcpJeFFVnmmBopjhRo%2FaljRmUAqdtynBt0ltmakgo4VQ7S8RtEwQwEpvnGMnr48%2B3rnqk6aiCPS2a42Ms90Sliacu%2B8AkhH57X1g8NOMDjXn6Ks0FKAlzfbAuGBVA%2Bs4vMNeh2MkGOqUBE7P2wLZvxTrws1NqJJV1KdCkpVtGuDK8k%2BBiBSCqaCkwsJTZebJ3WV0fEUwPzoN3X%2FRtZ7jjB6EIZXK%2BfHO5a%2FYsR2cz0qNogTQ9jC5vpNK6IcBxdOiI1TYIEHQgr1o3DWNanTCJC1EIyep1Ib%2FM1V%2F08xCvamQumeTqSwr3sLc4GwrWqVNYUOmZBOpfQq3fe0JxhiSZH440yHtBlYStYx5mE0qv&X-Amz-Signature=c2727518753ae5906baad1b7c88603f8f6964ea0831bced7b8d7b36c0b56839d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFTMFUAH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0lFJzlmteEEhwl9cEvVGufYn0E7kcAz1GOAwqtF%2FQIAiEA7g3VSggWv27mobtWJp32Hlh1U9%2Fss092m4cczWWbyJIqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKd4djJbsrZeqrvcyrcA%2BKYfy3FnxHnPb%2FiE%2Bq3%2BP4HuYjxFYqpxbtjQCyAdKHxuBHIW116Af8ScHSgsZUVXwIXfZNskKpmcKmWaC0tWXYPQWbAIBtdoxVXzf91ZiTLFrhaC3zRW4HtIllcHYnDlqtbqKRexuJnAg0Bnoy4V399IPGaG6m9%2FQupIj7tBELZl7Jof5FKHSk7AU09v8KmzZLU2G6HfNQ1m3rw8INmsFcLOkT9RH%2BYTrwCdZGw9hS7D%2BdwOZzD4mOjVmzW8wwNIxiJUrO7KvBJBeDZtU8t2fWYnWkq7zC3gw%2FvPCoBbZs%2FJYcJj4n%2FRlivvCiyHto%2FDKTUKzFYLvULOqNWJVA1G8qcGJclKszp7O0lEXF4t5CDVY8iPhH%2Be8HKKDX5FBNZTNXDj09n1OQeF2KvPDYXEU%2FgUDMt4I2ow67yEe1o%2BqQUFFZJ4qJ0EOhYDL8kr0k%2Fxlgena08OjkJJUD0YA1iyB8AOP9GVut2RMkvE5IT37%2BOib026GLj8C6BsjstcpJeFFVnmmBopjhRo%2FaljRmUAqdtynBt0ltmakgo4VQ7S8RtEwQwEpvnGMnr48%2B3rnqk6aiCPS2a42Ms90Sliacu%2B8AkhH57X1g8NOMDjXn6Ks0FKAlzfbAuGBVA%2Bs4vMNeh2MkGOqUBE7P2wLZvxTrws1NqJJV1KdCkpVtGuDK8k%2BBiBSCqaCkwsJTZebJ3WV0fEUwPzoN3X%2FRtZ7jjB6EIZXK%2BfHO5a%2FYsR2cz0qNogTQ9jC5vpNK6IcBxdOiI1TYIEHQgr1o3DWNanTCJC1EIyep1Ib%2FM1V%2F08xCvamQumeTqSwr3sLc4GwrWqVNYUOmZBOpfQq3fe0JxhiSZH440yHtBlYStYx5mE0qv&X-Amz-Signature=e2f1b20b32b228d6dcf28a824fe258cb58d8ae2b9aa5db32649b05d9401b3980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
