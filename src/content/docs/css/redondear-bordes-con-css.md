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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U35IU5H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYnXgqWnCAXiIvUshJFXWZ49yhH97V8qcM%2FNxq2gnX9AiEAzL%2F1zTHVtQnIwJVeBVLyaq%2BNZlk%2BrcXZ%2B%2FVCXarIb6oq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGPIi%2BsIBtGjf%2B0ZSCrcA3kPkXRxbbATce5bqp4eM7GzJaeEzbpp62%2FgcPncY1J5EOUzLQn5NRz%2Bvt6BV1%2Bk3mB54cZBneoydhD7LlsUJ86iBq%2BK%2Fka3skxepDOZ%2F9C2AU2n1GuOAWhYCmtFEImoxNaANCe0xeBR83LrGUuLiQCmt59V5M7Db%2FXdXEB%2B2%2FQ7Eyb08TGwegfo3CiC9gBUKi5ILmnNs4ybvDelO5JtpVaxPvlszxKjG757PCNDb4BGcb%2BMqbBf9pLM%2FdzQ7%2BiyeK7oJE%2F8nkN4J0wNc0XT3tlC7wINyZzIk9ho%2FJZPVNRWnXe2OcatpXdkVoXGPzioqRqqX3b12y6Zk30aLN9RQxDwPK2S%2BPw2gNKJ03M5rIHVJW6Lsf5UUnqA3s9NDXYcjNORXY3X4RE3hIyIqJ%2BT1xLZTbVV6Y3Qoz9bGNLt3PH0layU4Ny82WfiGas9gvEnlsAV0snlwVXL2Q3%2FD3ImG4K9q4YpynVG%2BPKzRjGsuBbcw17aiEBgWIsbrmYmghhZcJ6iKCYNSyIydsQs9KWhD23cYoDULvGOd%2Fmk2xsWLs9dYLMcCwUSIDrDndJUb5uT2IlBVBcjdUNCPRKkDY5RLVcaFx0XHhI%2FhlGVv7pn2uV6C7Mjhm5lj6%2FitsGYMKXRyskGOqUB5Ac3JZyM3uPvJOYbGcqRW5a0cgGUc6Db6WXk7xJ0KXHgXHN%2BJwNSB0YpHg5wC4BmeEiMGwcV1%2BBZK4lfUWk%2F9Ya09ArTDUu5VML1vGmpN1pRcOFTKBrbvMWjypMfIduVoIisg1soAqECJgBg3mxFRc92u4xQ%2FvMzxHjciRBqShw9%2Fz3ocoMbh2TdvW52q0%2FrMEYLYdMIKQvwybLqff53qk8HMDYg&X-Amz-Signature=67d4280bb9354a3e0be1a7bc4f640d94c563d8bc0b8eddb607ea4125e3b1e363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U35IU5H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYnXgqWnCAXiIvUshJFXWZ49yhH97V8qcM%2FNxq2gnX9AiEAzL%2F1zTHVtQnIwJVeBVLyaq%2BNZlk%2BrcXZ%2B%2FVCXarIb6oq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGPIi%2BsIBtGjf%2B0ZSCrcA3kPkXRxbbATce5bqp4eM7GzJaeEzbpp62%2FgcPncY1J5EOUzLQn5NRz%2Bvt6BV1%2Bk3mB54cZBneoydhD7LlsUJ86iBq%2BK%2Fka3skxepDOZ%2F9C2AU2n1GuOAWhYCmtFEImoxNaANCe0xeBR83LrGUuLiQCmt59V5M7Db%2FXdXEB%2B2%2FQ7Eyb08TGwegfo3CiC9gBUKi5ILmnNs4ybvDelO5JtpVaxPvlszxKjG757PCNDb4BGcb%2BMqbBf9pLM%2FdzQ7%2BiyeK7oJE%2F8nkN4J0wNc0XT3tlC7wINyZzIk9ho%2FJZPVNRWnXe2OcatpXdkVoXGPzioqRqqX3b12y6Zk30aLN9RQxDwPK2S%2BPw2gNKJ03M5rIHVJW6Lsf5UUnqA3s9NDXYcjNORXY3X4RE3hIyIqJ%2BT1xLZTbVV6Y3Qoz9bGNLt3PH0layU4Ny82WfiGas9gvEnlsAV0snlwVXL2Q3%2FD3ImG4K9q4YpynVG%2BPKzRjGsuBbcw17aiEBgWIsbrmYmghhZcJ6iKCYNSyIydsQs9KWhD23cYoDULvGOd%2Fmk2xsWLs9dYLMcCwUSIDrDndJUb5uT2IlBVBcjdUNCPRKkDY5RLVcaFx0XHhI%2FhlGVv7pn2uV6C7Mjhm5lj6%2FitsGYMKXRyskGOqUB5Ac3JZyM3uPvJOYbGcqRW5a0cgGUc6Db6WXk7xJ0KXHgXHN%2BJwNSB0YpHg5wC4BmeEiMGwcV1%2BBZK4lfUWk%2F9Ya09ArTDUu5VML1vGmpN1pRcOFTKBrbvMWjypMfIduVoIisg1soAqECJgBg3mxFRc92u4xQ%2FvMzxHjciRBqShw9%2Fz3ocoMbh2TdvW52q0%2FrMEYLYdMIKQvwybLqff53qk8HMDYg&X-Amz-Signature=dc1633561346708b9230b8a2bafe415e4e4472b75e818103394b1d401a29dd66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
