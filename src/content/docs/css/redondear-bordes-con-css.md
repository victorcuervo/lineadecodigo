---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYKESMZ7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDZ6fGn%2BDeVpShRZ0r5tr74TYeUMU9e2Ew3%2FnrN6H7sRgIhAPAOM4y1YZDiZ2wb8IDk8lJvwHIL%2BlnUMxVPVYkM22wjKv8DCDQQABoMNjM3NDIzMTgzODA1IgxQgrG0UrsRYKPs8lAq3ANu1KMCmZsWZyUJDcAdTQK78NKFowkaK%2BI5uRYUsRoww%2FsK0jBTtaT3BCZxPo04o60stXPz42CNWtVE1H5hJn5zp8KMMt2wAfXrb%2Fpcn2MuWRZV8CyKGXV60Lkrv8l6krQUO%2FJ%2FQsfRO%2ByByOdGJYRV1iFNVO2ACSLxLXeMLZTS0f1dE1wZHqDTRoKbxPgV%2BHVq1RM68LCTgFW0jXdALS0Cr2zLHtLtYzYawQ8W3JBlA450MPAN0dKewNPg4xJIxltESOCcxU6guOH%2Fhf%2Fh7WZwcoJiH30C8WSJsEve8cq1uIBhm4JbvS8lahNkBe858cgqj1JEk3lhEjsKPG%2FPCeSIxeybPeDobP5EaJMlr%2FKsP26P%2Fsm8PN%2FxboeiSUQcNrzaAIT0HiM8rgNQdQkIe5fxxAwMuCoOaTXLIeATzVr2LwaZWKvFGykYOwcHrnd77K3dVHlSnYK8JDkH7DP7Ts8Jzyk6fYo2e%2BwWESScMDGtcqYnvHuOhIDs3Xmas7joSr6nWLlrwFT38ALiXYVvaMsoaSjVr7yoE0gOaZv4CGnUKSSc5aB4LKpvGa8PYlN%2F2fIc7Dx7SQpXhI7bOmwPI%2B8wIUdkb%2FCFUryXtmi0eBlNt1R%2BQPDtXp0qvTUQFTDWkcLJBjqkAZedYdiiNArKuTzZBe2%2F2b0hdmMLLyoVvAinj7fKDygq9ICVA3gVhYDcW0jfkxXjTFsyAIVd0hNZ65jSnnysditMtan7djTSIBGYWfU7oHwyxDsE7Gp38%2FqcI0Y3qg5UsfvRdAi3oUj%2BMmLNPc65alNssDzqHf5lc%2BoFs8VlT37mweX5nF35MdZIR3lag%2FyTV%2FMcEl7z%2FBjvE89VhY62uER5guvF&X-Amz-Signature=40d5309085ce585eb3a91a11abe238ff897ca348e88f658e7c40a5464632c8fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYKESMZ7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDZ6fGn%2BDeVpShRZ0r5tr74TYeUMU9e2Ew3%2FnrN6H7sRgIhAPAOM4y1YZDiZ2wb8IDk8lJvwHIL%2BlnUMxVPVYkM22wjKv8DCDQQABoMNjM3NDIzMTgzODA1IgxQgrG0UrsRYKPs8lAq3ANu1KMCmZsWZyUJDcAdTQK78NKFowkaK%2BI5uRYUsRoww%2FsK0jBTtaT3BCZxPo04o60stXPz42CNWtVE1H5hJn5zp8KMMt2wAfXrb%2Fpcn2MuWRZV8CyKGXV60Lkrv8l6krQUO%2FJ%2FQsfRO%2ByByOdGJYRV1iFNVO2ACSLxLXeMLZTS0f1dE1wZHqDTRoKbxPgV%2BHVq1RM68LCTgFW0jXdALS0Cr2zLHtLtYzYawQ8W3JBlA450MPAN0dKewNPg4xJIxltESOCcxU6guOH%2Fhf%2Fh7WZwcoJiH30C8WSJsEve8cq1uIBhm4JbvS8lahNkBe858cgqj1JEk3lhEjsKPG%2FPCeSIxeybPeDobP5EaJMlr%2FKsP26P%2Fsm8PN%2FxboeiSUQcNrzaAIT0HiM8rgNQdQkIe5fxxAwMuCoOaTXLIeATzVr2LwaZWKvFGykYOwcHrnd77K3dVHlSnYK8JDkH7DP7Ts8Jzyk6fYo2e%2BwWESScMDGtcqYnvHuOhIDs3Xmas7joSr6nWLlrwFT38ALiXYVvaMsoaSjVr7yoE0gOaZv4CGnUKSSc5aB4LKpvGa8PYlN%2F2fIc7Dx7SQpXhI7bOmwPI%2B8wIUdkb%2FCFUryXtmi0eBlNt1R%2BQPDtXp0qvTUQFTDWkcLJBjqkAZedYdiiNArKuTzZBe2%2F2b0hdmMLLyoVvAinj7fKDygq9ICVA3gVhYDcW0jfkxXjTFsyAIVd0hNZ65jSnnysditMtan7djTSIBGYWfU7oHwyxDsE7Gp38%2FqcI0Y3qg5UsfvRdAi3oUj%2BMmLNPc65alNssDzqHf5lc%2BoFs8VlT37mweX5nF35MdZIR3lag%2FyTV%2FMcEl7z%2FBjvE89VhY62uER5guvF&X-Amz-Signature=de923d4ec7e1a70cf3fb3132a644091e7f0b2cfea26af0b83b554f842ccbbd4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
