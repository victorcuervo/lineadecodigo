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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNQXW4NI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdKFcueKGDtKCikSlHSCL9JVcqhV2lDNxsdW%2FJ6FzqZAiAT52uZHfU8fq4Sa3XUkI1nEYbFCsF2HHWyO1E3MNvmpyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMmvhySnNBVUG1EXqZKtwDzKvpCJzXTgv%2BD95%2FAE153IA0487%2FG1Ot1J0dty5dkLUwJv8WnkGGlfuhmBYiQhrjtVMgG4SiFU8OlehF378d3othtgP1bwgshc9H8GzpnbcAYHHV%2F%2Be5SfSGYni5GPqiN9sEQ1lZhQ%2FPrD7kIeNKdA%2FqiqGZ0KQJLVXXwwd6SY8QvCP8CA25MJ%2BxOXJEpUsvw9ihYrmB8nXIgWbTZ5m0sGos%2F1CvyGbvmcNC2UlWBQ9H0bMay6dL0ovhkMg1CGoDQoCoLe0Ln9K%2F6RCG4cHn4xuICaGyOSjWXduqDzAmdv0wJIOwME8NywjFxMQcEL%2B6JhYBPunU1ZZLtrEk2Kstr0MsJvpMSaJMVjzAUlkYmAozcvlN5DhkG4ZeEjUt9Cg8LCotOFGxCDkAJoWHUblOq5wd%2BeGdyE87vReoJEEkDNZD8F0jiHieQEJrWHHRoBLqqlO4fL30MKjZ%2BX6OScau%2B2YMI1dDgjRPxRerVMbB8Wrjy47Y8tXwOkz%2BnpzadAMWNO40eQ1RwmhfCwa5PRzbwIJaQKCRt2%2BzH%2FkYLoPxZJnbr4zYQzNSjDZWcUvOI5Z6vY8YyNI4I%2FP2MCQ%2BhqNIRW0gQldwBNwrzKtwqbmWhRQEiQYnG79KxYt%2BeyEwnM3KyQY6pgE0mkcfUXGInorUlaVgLI5NvRQ8OcSs6VFvc6H3emyovYYcE5MfhWXGnRdofIOf7REb68lsuKOCtAsNvnT4X0uaksEF%2ByYDSfZaxAATT9xW%2BWl3x%2FvFCnerRyprXMPJy1CIOWwiPlDibYX0S0iEDPMQnzjbxBPKeNKfsIsq1qxvc2oq8QqCX3l3Kfmgf4dby5vwwHpXyFD57B9DdhsH2h%2Bui7NyxwQ6&X-Amz-Signature=5ed2176873b79570f5ec43c0c7ce829fab77e4239131bd868ccc58065ff29dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNQXW4NI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdKFcueKGDtKCikSlHSCL9JVcqhV2lDNxsdW%2FJ6FzqZAiAT52uZHfU8fq4Sa3XUkI1nEYbFCsF2HHWyO1E3MNvmpyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMmvhySnNBVUG1EXqZKtwDzKvpCJzXTgv%2BD95%2FAE153IA0487%2FG1Ot1J0dty5dkLUwJv8WnkGGlfuhmBYiQhrjtVMgG4SiFU8OlehF378d3othtgP1bwgshc9H8GzpnbcAYHHV%2F%2Be5SfSGYni5GPqiN9sEQ1lZhQ%2FPrD7kIeNKdA%2FqiqGZ0KQJLVXXwwd6SY8QvCP8CA25MJ%2BxOXJEpUsvw9ihYrmB8nXIgWbTZ5m0sGos%2F1CvyGbvmcNC2UlWBQ9H0bMay6dL0ovhkMg1CGoDQoCoLe0Ln9K%2F6RCG4cHn4xuICaGyOSjWXduqDzAmdv0wJIOwME8NywjFxMQcEL%2B6JhYBPunU1ZZLtrEk2Kstr0MsJvpMSaJMVjzAUlkYmAozcvlN5DhkG4ZeEjUt9Cg8LCotOFGxCDkAJoWHUblOq5wd%2BeGdyE87vReoJEEkDNZD8F0jiHieQEJrWHHRoBLqqlO4fL30MKjZ%2BX6OScau%2B2YMI1dDgjRPxRerVMbB8Wrjy47Y8tXwOkz%2BnpzadAMWNO40eQ1RwmhfCwa5PRzbwIJaQKCRt2%2BzH%2FkYLoPxZJnbr4zYQzNSjDZWcUvOI5Z6vY8YyNI4I%2FP2MCQ%2BhqNIRW0gQldwBNwrzKtwqbmWhRQEiQYnG79KxYt%2BeyEwnM3KyQY6pgE0mkcfUXGInorUlaVgLI5NvRQ8OcSs6VFvc6H3emyovYYcE5MfhWXGnRdofIOf7REb68lsuKOCtAsNvnT4X0uaksEF%2ByYDSfZaxAATT9xW%2BWl3x%2FvFCnerRyprXMPJy1CIOWwiPlDibYX0S0iEDPMQnzjbxBPKeNKfsIsq1qxvc2oq8QqCX3l3Kfmgf4dby5vwwHpXyFD57B9DdhsH2h%2Bui7NyxwQ6&X-Amz-Signature=c008039d55a571de6602a406b6a8b59c73b9e0ccf25f73f663a8e3740724b114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
