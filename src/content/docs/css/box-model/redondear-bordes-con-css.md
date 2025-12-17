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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4ZABIZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxZmHzAz5F4p0zYZc8hy8sPhHQvs2y6FSKYAG5frRRGwIgQUTyvcftLqdQjpK7fbu4TpZaJ8N08ivAunkfTlQPQSUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDM07bdldv%2BfiDPAo1SrcA3Dwh3y3PYWvvF%2FbAzJFYL5aJBhU3iAzikN%2Bm1bxW7pkDwtXjS6zvX1aWmLerPtbeeRql4i5RP9bpIycLqLsPcWQsWXC2y%2FNoWFeHV7UHmnxKzj4kRh6PyQNCQPByOK1NOahhnuaAZRa9kLPDqvXviVfnCPqeKKcLsyqOPgDRddWEkGu%2BMQ5aYGn5ZzaqojZgNiq%2BcmvxkoXpcyX49fGdM02NdJfV%2Ft7y8kzxQcjQarUS3Bezk%2F5i7gqwA5zqB3fxZL6hlLgzbGS%2F4DhkjRDYrRePBbjqGs93hmydg0wSKZqHHGWPqGHs%2BQQzOoXmPjxLGEgotYGpGKpJ1%2Bgp5XFw8p3e5saeq9OVNRKpmo6i9%2B%2Fh3SzilGybfjj0Es25ymjVD0QQCJK%2FwJfPg7CZV6G0Zipj%2FuoDyt31LMkkusarPzYHFoqEgO1SU2wqiXVgeMzc8cirUQInp6Z3xOWLU16erOqN4am9%2FJzKqirOK6%2FzvzEqhLkYZp8YzeD42ck0qqZ06tUS3aPeaZ%2BWyHoh32tqOmNVkcAkwS2hdBUjBithZ9PEq7Nu1G%2BAwSYA5ruDJOR5sNmKV6PNYY7JAuyern83oope2k5BQR5OT50jUKXtuL4skvf62efRNJyyA5nMN3OiMoGOqUBgTyO0piRH9YhdQYDGEAH9rswG%2BXltFLDLiUDELCkfSNnVv77PfHBqHwAmj2hFZ7K%2Fd2gTExO5j52Efx3%2BVjYu9hk%2B%2BSe5ahCsKdyh5A7M4mKAHlWilkLmJ4QbKfNKNwuAB8IQvIdImZsy8NWxj59S%2FHlMitfnesALJ0ASVzvE%2B3agA86GO%2BfOGlM7ZZEQeLeB5ktxZqp%2F36VyVlqtmx1G5rin88p&X-Amz-Signature=7aeb3b365d97ba66bb6fe47e29f953897fe824d11dc1e7126c2395463e092bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4ZABIZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxZmHzAz5F4p0zYZc8hy8sPhHQvs2y6FSKYAG5frRRGwIgQUTyvcftLqdQjpK7fbu4TpZaJ8N08ivAunkfTlQPQSUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDM07bdldv%2BfiDPAo1SrcA3Dwh3y3PYWvvF%2FbAzJFYL5aJBhU3iAzikN%2Bm1bxW7pkDwtXjS6zvX1aWmLerPtbeeRql4i5RP9bpIycLqLsPcWQsWXC2y%2FNoWFeHV7UHmnxKzj4kRh6PyQNCQPByOK1NOahhnuaAZRa9kLPDqvXviVfnCPqeKKcLsyqOPgDRddWEkGu%2BMQ5aYGn5ZzaqojZgNiq%2BcmvxkoXpcyX49fGdM02NdJfV%2Ft7y8kzxQcjQarUS3Bezk%2F5i7gqwA5zqB3fxZL6hlLgzbGS%2F4DhkjRDYrRePBbjqGs93hmydg0wSKZqHHGWPqGHs%2BQQzOoXmPjxLGEgotYGpGKpJ1%2Bgp5XFw8p3e5saeq9OVNRKpmo6i9%2B%2Fh3SzilGybfjj0Es25ymjVD0QQCJK%2FwJfPg7CZV6G0Zipj%2FuoDyt31LMkkusarPzYHFoqEgO1SU2wqiXVgeMzc8cirUQInp6Z3xOWLU16erOqN4am9%2FJzKqirOK6%2FzvzEqhLkYZp8YzeD42ck0qqZ06tUS3aPeaZ%2BWyHoh32tqOmNVkcAkwS2hdBUjBithZ9PEq7Nu1G%2BAwSYA5ruDJOR5sNmKV6PNYY7JAuyern83oope2k5BQR5OT50jUKXtuL4skvf62efRNJyyA5nMN3OiMoGOqUBgTyO0piRH9YhdQYDGEAH9rswG%2BXltFLDLiUDELCkfSNnVv77PfHBqHwAmj2hFZ7K%2Fd2gTExO5j52Efx3%2BVjYu9hk%2B%2BSe5ahCsKdyh5A7M4mKAHlWilkLmJ4QbKfNKNwuAB8IQvIdImZsy8NWxj59S%2FHlMitfnesALJ0ASVzvE%2B3agA86GO%2BfOGlM7ZZEQeLeB5ktxZqp%2F36VyVlqtmx1G5rin88p&X-Amz-Signature=df8e520bc099c4a11c4dbddbc6a226b78af2ca5e4f92721ce0dbb36107a71480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
