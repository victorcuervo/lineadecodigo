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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T3UTBPF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkR5qfcOqz6M0u1notU9kJbyZ%2BzE0YcGC362Ce4GeddAIgdP2jCjoGhVPjYrafUY23UIWyXidvHel9tGby0B4xupMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOO9ZepXwa6GS2hDyCrcA%2F%2FCdoILbpZFfQqbvYLUSOBE7F8HJ3mpsqO232ITEg5pGd4gCsHEXntuqaS54RlF6VFLgtpO4AankATtsHEfByIs5%2BDQ%2BPHA%2FgIJf0jbDY%2BVpwbrB7ax9CKj8Lcow%2BfwZ6Wp7SAk5eJlMxSVwY%2FAnXnx6cX0XMkSutH174GaN7Ap%2BUVZrFPvHbkyfVYLQFw4lsj4ggl5AQ3XcuQbgTdvtaA8DUEFppxvpR1ACZgcARBHEm1qZPsS0nbhFdM1E03531HGNzKZ37hWjRNeu1DRxyMPXh%2FRH4uftKxs91Hjns9zjbrCREXoBFmXwPeX6btC74L%2F27a1wK24jZ4SJU5atBNLHH6OwS2uSoYH5IpM4FqFVG9HW6yqhbbu5549lrEQ9Jk82DgBzgUs5ry8EG%2BEw0URWNlbo3p1YJHvTokYQfqV0ikfJz8ECMCH1zWDiOeHHzhNmOdNNUJUbu%2F7LB1bqXh%2B7QYepunB6v6%2BDwvnVCRpJLLNYyiWy9%2Fx2%2FENNXAs6rcwDD0gNkQpLjRGg8Ni4jwPg9RHLyWnUcHNCvJ3%2BMT4fkZ7inoBrpoWXfeawd4p67n2N5BgULv6CxUWD%2F7YHVnr7jIiSHuTm92nGWgzekoqNlGfuK4MQHSITgrtMICi2MkGOqUB8oy2DJFrjjO98XYuiEae5iYEMIsnfb9p7zahOAoTFLUua6NuuazjEVcoYv7o3odv%2BAUv8lcGqcMdvXJFHzvOhOHUXxOUUnr1vS6%2B2tagLZsO%2FQQ1fquGST406qQuVhGWm9%2FG1y0HtAXHbHi4nhz00UxyHcImM7ZjuYepqpVYIY5w51k1MC9TEjTNz6G7ve63iao6UBlSBg0G9RZyptGMsT2u9yRX&X-Amz-Signature=300cc13492eeb97e2063c655bbf57c8264b8b7d14ea3adc8a05308e74173be33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T3UTBPF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkR5qfcOqz6M0u1notU9kJbyZ%2BzE0YcGC362Ce4GeddAIgdP2jCjoGhVPjYrafUY23UIWyXidvHel9tGby0B4xupMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOO9ZepXwa6GS2hDyCrcA%2F%2FCdoILbpZFfQqbvYLUSOBE7F8HJ3mpsqO232ITEg5pGd4gCsHEXntuqaS54RlF6VFLgtpO4AankATtsHEfByIs5%2BDQ%2BPHA%2FgIJf0jbDY%2BVpwbrB7ax9CKj8Lcow%2BfwZ6Wp7SAk5eJlMxSVwY%2FAnXnx6cX0XMkSutH174GaN7Ap%2BUVZrFPvHbkyfVYLQFw4lsj4ggl5AQ3XcuQbgTdvtaA8DUEFppxvpR1ACZgcARBHEm1qZPsS0nbhFdM1E03531HGNzKZ37hWjRNeu1DRxyMPXh%2FRH4uftKxs91Hjns9zjbrCREXoBFmXwPeX6btC74L%2F27a1wK24jZ4SJU5atBNLHH6OwS2uSoYH5IpM4FqFVG9HW6yqhbbu5549lrEQ9Jk82DgBzgUs5ry8EG%2BEw0URWNlbo3p1YJHvTokYQfqV0ikfJz8ECMCH1zWDiOeHHzhNmOdNNUJUbu%2F7LB1bqXh%2B7QYepunB6v6%2BDwvnVCRpJLLNYyiWy9%2Fx2%2FENNXAs6rcwDD0gNkQpLjRGg8Ni4jwPg9RHLyWnUcHNCvJ3%2BMT4fkZ7inoBrpoWXfeawd4p67n2N5BgULv6CxUWD%2F7YHVnr7jIiSHuTm92nGWgzekoqNlGfuK4MQHSITgrtMICi2MkGOqUB8oy2DJFrjjO98XYuiEae5iYEMIsnfb9p7zahOAoTFLUua6NuuazjEVcoYv7o3odv%2BAUv8lcGqcMdvXJFHzvOhOHUXxOUUnr1vS6%2B2tagLZsO%2FQQ1fquGST406qQuVhGWm9%2FG1y0HtAXHbHi4nhz00UxyHcImM7ZjuYepqpVYIY5w51k1MC9TEjTNz6G7ve63iao6UBlSBg0G9RZyptGMsT2u9yRX&X-Amz-Signature=0767b5e62ff5e73ece24343271f0f04d96b2bb66000232011c1c6d85317c6567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
