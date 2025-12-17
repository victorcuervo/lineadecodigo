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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AQIVGW6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2MNKorK6wr4HyWB0hyXhrXGiv1LIb5MdXkQvYxHIklwIhALTRDZXTvmy6JYitditxMluLMFYw07KyG4TrvP5B964wKv8DCH8QABoMNjM3NDIzMTgzODA1IgynGxe0ZrDA3rMwbMsq3AMQyqlBCXlaoENePKUjjlLalh2midEMoVp9rn89j%2F%2BsJOm4ax9Exl4yaeVgTW4pa1O6DRYA67CFcy7qLJQz4Jlxr5XXoc9EYvxG9IIzUFIHlAllFpEdsAUSJ5DejOMYep3oqxdA2sMT7Hodx4VvpJwPOi3Fj%2BPlNY42lNqkeL6%2Bm%2FaA2oC8%2B8kisfkJMB10ZA1OpyP9Kemad7rlkx598gA36wKhgTdsX2jRVkukRpzJyviMgaHGOKuXjHuD4Y%2BObhLGGMHDo5QnAIE0zdOfhCVTCu8H0WhBtuTCCC9zFU%2B6EfOB0huvh0NU8vmgIyzSbNUrzlWXWiay0Hz4ALjs0%2BQswsN%2FmjIIf3bUO7udhAyPVBBy0eExt%2BbDAIcN2RbLtGRqpL5881oN7cNu596onn0lvvmbeygMUJkILhxW0OpIaT523NSPgfdsnNHrBzNgSAECK%2BBddY9pjI3MThRB9E5j85AIHHmyCavvKTgT4RREqdLQwcZqZKx8OUY5JNu6qjayVusiac6JQK3E3m2Ft81G4XNQWfQxpoTaGdLgG3lf9t4PRFrydwbpmG6giJan9YK9T7DXj1aEzB6sQ%2BolWZ1P8mHzyGseu%2FMA9aahStm8%2BxAyX4v1z3NxavviiTCA4orKBjqkAfNpgD8hx6L%2FTLKpDXdx0UAVFXH3DZk8xE6Rjsf0wvTkhz7jeEqtW5BCtTDAzhoE6RTY%2FQY6y45wYck6Nia6PstPeR3TVKoj8NH7IzNhAqMZ8rx2kjPjBOdffQTNXm6k5gy0Ab5shsCo5bx6F%2BiSW0VJSF5Y5JqJfJBC5392qSt%2FJATw5M6RDz1Koao9MW2TySSHqExuTmSocWBgyisBPVhSJw%2Bu&X-Amz-Signature=f66f944088cd14ce71a30fcaa0128030d87443d65a141065a224789e9f9ccec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AQIVGW6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2MNKorK6wr4HyWB0hyXhrXGiv1LIb5MdXkQvYxHIklwIhALTRDZXTvmy6JYitditxMluLMFYw07KyG4TrvP5B964wKv8DCH8QABoMNjM3NDIzMTgzODA1IgynGxe0ZrDA3rMwbMsq3AMQyqlBCXlaoENePKUjjlLalh2midEMoVp9rn89j%2F%2BsJOm4ax9Exl4yaeVgTW4pa1O6DRYA67CFcy7qLJQz4Jlxr5XXoc9EYvxG9IIzUFIHlAllFpEdsAUSJ5DejOMYep3oqxdA2sMT7Hodx4VvpJwPOi3Fj%2BPlNY42lNqkeL6%2Bm%2FaA2oC8%2B8kisfkJMB10ZA1OpyP9Kemad7rlkx598gA36wKhgTdsX2jRVkukRpzJyviMgaHGOKuXjHuD4Y%2BObhLGGMHDo5QnAIE0zdOfhCVTCu8H0WhBtuTCCC9zFU%2B6EfOB0huvh0NU8vmgIyzSbNUrzlWXWiay0Hz4ALjs0%2BQswsN%2FmjIIf3bUO7udhAyPVBBy0eExt%2BbDAIcN2RbLtGRqpL5881oN7cNu596onn0lvvmbeygMUJkILhxW0OpIaT523NSPgfdsnNHrBzNgSAECK%2BBddY9pjI3MThRB9E5j85AIHHmyCavvKTgT4RREqdLQwcZqZKx8OUY5JNu6qjayVusiac6JQK3E3m2Ft81G4XNQWfQxpoTaGdLgG3lf9t4PRFrydwbpmG6giJan9YK9T7DXj1aEzB6sQ%2BolWZ1P8mHzyGseu%2FMA9aahStm8%2BxAyX4v1z3NxavviiTCA4orKBjqkAfNpgD8hx6L%2FTLKpDXdx0UAVFXH3DZk8xE6Rjsf0wvTkhz7jeEqtW5BCtTDAzhoE6RTY%2FQY6y45wYck6Nia6PstPeR3TVKoj8NH7IzNhAqMZ8rx2kjPjBOdffQTNXm6k5gy0Ab5shsCo5bx6F%2BiSW0VJSF5Y5JqJfJBC5392qSt%2FJATw5M6RDz1Koao9MW2TySSHqExuTmSocWBgyisBPVhSJw%2Bu&X-Amz-Signature=aa8bb47685b1dd984bf8db1bcfac294071ae2dfdbea92b31d6e63c2718779f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
