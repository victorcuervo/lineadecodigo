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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627QCV3YQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKAaDbxdvRDBeFMCtRmdLUN2y6K8A6WlZBNLflBuAoWwIhAIKxyk5nMMOi%2B7LDjbDE%2B3z72P%2FXmSKJWfzXC9b5Vxn1Kv8DCH8QABoMNjM3NDIzMTgzODA1IgxUkdW5lw%2BM8kvUvJwq3AMCFj5AniCBtgAvcECsvu5NAZu4li7WJpWQEmcpIv%2Bu2dZzd3GseSm%2BFox2VccJOuOS5oapeuahwHpbi5NqwgpT3d3%2BlFuyY94KwsraznjwU2%2FxLAOTRntdeMMy58WkZO24O3grOH6CWXK2u9bRyYn8AEnOd%2FARcN35GwLas9CNFMolflY6AEYPU%2FFiCl1ETfTUa5Iy337rYG8c7KSM4v42oCNlpZbWozMbY8nmcRKD%2BHrrUxRBV%2BZ2%2BzWydymRguFTKj3x1mM0mUJpOhIv0olaKEwxX4QlpiebCS9V8MMs%2F477XAJlq01I4QMIv5iKa%2FEGZK78esU8LeXLfjUavVPP6P3El%2FcjWnij6LQn%2BSmBjuTCFNP8PASPqMZVWvx3Dyt1%2F8o%2FeuSOdgfHgyw0nCOq09%2BzN1vW%2F2AVMgFehum5rC0noQXODv5bZUNt9D8I6Wzo17kJufLJM0Sd48fj2kN8hKZ2%2BCBt85RiabPpE5oiHRhLYwGeywSlkyqJcFNGg0gWvyJPl8sliFf8JfUcZsCzw1O6VNhqDWyRfsYQUGdfUkCyU6Rd7KEIBNF9p90K0C8baA0tpDdM4fEKbCEP24KZdKr36XZs5UBzM9nENUHi%2BwmdDtNKENf7PuKuzjCD4orKBjqkAcyObNuZCJ5BNgu%2BmZC6yrlyNlmOlDMrfqpA1bxQJdlgl6cye%2F%2FBkIPXRlI98V9b%2FZhqMFZklSH%2FN2gsYRe0AYXjCkiLex4zuhlxDjDtp5mXkqaMvP2QdXmfElGK6lFKGOfRgyyp62XUxCHQW4BaOUrM92U6%2BPsepTfC%2BrLg%2FjgwX2SgWOZm6Dss6GxeiFLaTfte2HLive9gDxK3ET65Jfc4odog&X-Amz-Signature=48ad258ba55c47742581225413fe772e918ae7d490c415fb8fda3efaad4805ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627QCV3YQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKAaDbxdvRDBeFMCtRmdLUN2y6K8A6WlZBNLflBuAoWwIhAIKxyk5nMMOi%2B7LDjbDE%2B3z72P%2FXmSKJWfzXC9b5Vxn1Kv8DCH8QABoMNjM3NDIzMTgzODA1IgxUkdW5lw%2BM8kvUvJwq3AMCFj5AniCBtgAvcECsvu5NAZu4li7WJpWQEmcpIv%2Bu2dZzd3GseSm%2BFox2VccJOuOS5oapeuahwHpbi5NqwgpT3d3%2BlFuyY94KwsraznjwU2%2FxLAOTRntdeMMy58WkZO24O3grOH6CWXK2u9bRyYn8AEnOd%2FARcN35GwLas9CNFMolflY6AEYPU%2FFiCl1ETfTUa5Iy337rYG8c7KSM4v42oCNlpZbWozMbY8nmcRKD%2BHrrUxRBV%2BZ2%2BzWydymRguFTKj3x1mM0mUJpOhIv0olaKEwxX4QlpiebCS9V8MMs%2F477XAJlq01I4QMIv5iKa%2FEGZK78esU8LeXLfjUavVPP6P3El%2FcjWnij6LQn%2BSmBjuTCFNP8PASPqMZVWvx3Dyt1%2F8o%2FeuSOdgfHgyw0nCOq09%2BzN1vW%2F2AVMgFehum5rC0noQXODv5bZUNt9D8I6Wzo17kJufLJM0Sd48fj2kN8hKZ2%2BCBt85RiabPpE5oiHRhLYwGeywSlkyqJcFNGg0gWvyJPl8sliFf8JfUcZsCzw1O6VNhqDWyRfsYQUGdfUkCyU6Rd7KEIBNF9p90K0C8baA0tpDdM4fEKbCEP24KZdKr36XZs5UBzM9nENUHi%2BwmdDtNKENf7PuKuzjCD4orKBjqkAcyObNuZCJ5BNgu%2BmZC6yrlyNlmOlDMrfqpA1bxQJdlgl6cye%2F%2FBkIPXRlI98V9b%2FZhqMFZklSH%2FN2gsYRe0AYXjCkiLex4zuhlxDjDtp5mXkqaMvP2QdXmfElGK6lFKGOfRgyyp62XUxCHQW4BaOUrM92U6%2BPsepTfC%2BrLg%2FjgwX2SgWOZm6Dss6GxeiFLaTfte2HLive9gDxK3ET65Jfc4odog&X-Amz-Signature=ff0209cabdc1d9d9c78503ed1cf4016dba6af56ff899e8fab7782097fefb7222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
