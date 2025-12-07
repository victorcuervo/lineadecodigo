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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROZBIEO4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGM90ISWZFbyg6ECe6Y35WNyGYtLLKDGLdKNaJzGLhwpAiEA7pH%2FKdHpicur7BOOgy%2FnAqjmgxNyBXvwlDpGs9lWXXkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BQp6ABXAj%2BXWIB1ircA0oXYZ1YQvTcHxHuaWJ9SVDthkDn0qwJFblO1sb2gzWMJvGhtCkLOr8BLGd%2BtoLBumeidTiVctsUId%2FThpfAGPF%2BApJ3DyvtqVKh7Suc5akPl0viykwigaufrbAfndcYlVNifDP7dfhMobxYylDcMsNXX9ghO%2FLeSaTMET6g4LOgObCvIQtfg9oAUaRrQDnVI1OmIfepxwF9cJr1XOvkiHDHoiDGbvSXVKRbVoQUsKRg2IU%2FpFGeEJMpzHDVn8CSPGBLTFiLJLxO3TJUEyfXvCQFj5WlJklMX7xDq14WmOd5lVeiXlZzdk09PQzsxj16ZHhtzZKoQe%2BBkYB5%2FrhMywwQ%2FLkiXqBbLbRpjssiV0CDkCAGLvcHlmaKQ5axAdzZwqjoac5fd0gbgeiv%2B8kn3JqoN7gRUHkAMn8gEx2jBqKKWIzcmeN4q0UBRBqIsIJFvM5cE23m2w%2FRwafybeE0ydHrmC6qDnL5PbQP%2FSwFLEsfE6N2aTpIubnbvKEXfi%2BYLImIhzJOH51CiW%2FtRJFA8P4PYeMe8PZUhQWTlcaQWm5BKFjNMK34PYtGtUbxm9jxlqU4AkpPT7poo3dYKldDkI5%2F3bNu%2BMQn3i64wKGunJHuJFu2%2FyyCV83ChtcBMJr90skGOqUByfiVi4NthjPYkBtUsBGXzHJbjcdhhCpcWP%2B4%2FjJcVMcK%2BohYUdcMqCtaje4zUw12Iq%2FpFrelNxaB%2FknTCgvkgy4Lr2WC8Kn%2BRSMYUiUetyB9f8u4Ok7n4cytvp73O%2FkICKwu6l1q38WTwQCM7X1khMh7IhsZ19OgNua1ElxJdJqkEwRZ%2BYS%2Bt%2FAtr9KSjImjmO66Bxyw5IrFZ8C%2BV6%2FVpyd8kV63&X-Amz-Signature=e3ed1372988b5d1714439ae2404f506ec36c43295fe375bb42f4b9b4718adf5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROZBIEO4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGM90ISWZFbyg6ECe6Y35WNyGYtLLKDGLdKNaJzGLhwpAiEA7pH%2FKdHpicur7BOOgy%2FnAqjmgxNyBXvwlDpGs9lWXXkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BQp6ABXAj%2BXWIB1ircA0oXYZ1YQvTcHxHuaWJ9SVDthkDn0qwJFblO1sb2gzWMJvGhtCkLOr8BLGd%2BtoLBumeidTiVctsUId%2FThpfAGPF%2BApJ3DyvtqVKh7Suc5akPl0viykwigaufrbAfndcYlVNifDP7dfhMobxYylDcMsNXX9ghO%2FLeSaTMET6g4LOgObCvIQtfg9oAUaRrQDnVI1OmIfepxwF9cJr1XOvkiHDHoiDGbvSXVKRbVoQUsKRg2IU%2FpFGeEJMpzHDVn8CSPGBLTFiLJLxO3TJUEyfXvCQFj5WlJklMX7xDq14WmOd5lVeiXlZzdk09PQzsxj16ZHhtzZKoQe%2BBkYB5%2FrhMywwQ%2FLkiXqBbLbRpjssiV0CDkCAGLvcHlmaKQ5axAdzZwqjoac5fd0gbgeiv%2B8kn3JqoN7gRUHkAMn8gEx2jBqKKWIzcmeN4q0UBRBqIsIJFvM5cE23m2w%2FRwafybeE0ydHrmC6qDnL5PbQP%2FSwFLEsfE6N2aTpIubnbvKEXfi%2BYLImIhzJOH51CiW%2FtRJFA8P4PYeMe8PZUhQWTlcaQWm5BKFjNMK34PYtGtUbxm9jxlqU4AkpPT7poo3dYKldDkI5%2F3bNu%2BMQn3i64wKGunJHuJFu2%2FyyCV83ChtcBMJr90skGOqUByfiVi4NthjPYkBtUsBGXzHJbjcdhhCpcWP%2B4%2FjJcVMcK%2BohYUdcMqCtaje4zUw12Iq%2FpFrelNxaB%2FknTCgvkgy4Lr2WC8Kn%2BRSMYUiUetyB9f8u4Ok7n4cytvp73O%2FkICKwu6l1q38WTwQCM7X1khMh7IhsZ19OgNua1ElxJdJqkEwRZ%2BYS%2Bt%2FAtr9KSjImjmO66Bxyw5IrFZ8C%2BV6%2FVpyd8kV63&X-Amz-Signature=60b92a262a027ffae6910a808a0da88cf37467480069c9ffe4a2eb1f4bb9359e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
