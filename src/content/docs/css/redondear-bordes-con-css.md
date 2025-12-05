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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNV2XJR2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTSp%2BDE3kHPQh6Gvl1p3XbMEDTM5h%2BqRl8x%2BqMjy82rAIhAJtwrP0Ymrgx3%2BD3hqFfjPwO6tQ638p0GRC%2B%2BdgGf5x0Kv8DCFUQABoMNjM3NDIzMTgzODA1IgxKo%2FIDtO5HcAlGg44q3ANvMqmIlsc83xbILvUfTkEHSNjtgveLfxVSKkVHFXxAWK4r%2BBVjrAEyH8pYb0RiH6gpdzcQMTfscOOD6ueePlyPto8XkM%2Fa96qzfkSI0I0WsYJj8PjnUAz21wvLYQDPs4gp%2FA7Bmup9SBd2a0Ndgx%2FNn72Dv0KJrnZHJUVQo9mtrsWXkA2SchGlP3Xc%2FkPRcJEpKNO%2Fdgsuao0JzLzacwo4nDF9DljlgzLKL7gyvLs%2FKuqE8y6P6mhsvry1RLGsp1wdvphtCitNZVuxavDC1c8BR8uNON504hZufPTCF6Z5jdclNBEnL%2B4PZ%2Bu2IJqckuR6tPCoqi6oIUM4NrOukWsdVujPesq7UfKFcSl6TrFHucMQUPKob3DKuT08lmeK4p1Rsjahexn87uII59FXufYy%2BinHutM8dOmJMCI96%2FB%2B2vshaCDTe5FqvRmyHPyfsNkTUCM6eWk65El3bH2V0MAzWaABcbSszMNYKvF90G6HjNCHB8w6ZIDBF9FmtSS2Yy%2Bg%2B%2BYqBkVBcDutc9n%2FHGxHzh0JDJNgocmnY92iFvGTkkmwxZrElLc0%2FgKgnyAQfjprP%2BRn4GNdDb7LIuJ1oUfsFl7mgA6LcvbmCwfsLwZVNP0oKxSWFOfkneAN4zC%2Fr8nJBjqkAc2JlF7PJ0uuuQT%2B6pHfQtN%2FPIDUspb%2Bx%2BjTroDS08mAvT8n38QqSLs8hXQbKgYhIU23LRe3HPX9W%2F%2FEIAYdCJaFsafK8EQWNo5uABBw7upPwEq55IT0aXjtSf9vfPRNJJPchmMyrF8Ay%2BIkNuMk9GrzdeAmWJs%2F6W9syVrxTj8HQ2ZQdqkcYpCO6TfZVOLTA7auHU9Jvpf8mL%2FR8jiQmL1yjcWX&X-Amz-Signature=f31a7547e65f346af58ab828ab4b56c07be5bb60660064aa169acb3b08b06e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNV2XJR2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTSp%2BDE3kHPQh6Gvl1p3XbMEDTM5h%2BqRl8x%2BqMjy82rAIhAJtwrP0Ymrgx3%2BD3hqFfjPwO6tQ638p0GRC%2B%2BdgGf5x0Kv8DCFUQABoMNjM3NDIzMTgzODA1IgxKo%2FIDtO5HcAlGg44q3ANvMqmIlsc83xbILvUfTkEHSNjtgveLfxVSKkVHFXxAWK4r%2BBVjrAEyH8pYb0RiH6gpdzcQMTfscOOD6ueePlyPto8XkM%2Fa96qzfkSI0I0WsYJj8PjnUAz21wvLYQDPs4gp%2FA7Bmup9SBd2a0Ndgx%2FNn72Dv0KJrnZHJUVQo9mtrsWXkA2SchGlP3Xc%2FkPRcJEpKNO%2Fdgsuao0JzLzacwo4nDF9DljlgzLKL7gyvLs%2FKuqE8y6P6mhsvry1RLGsp1wdvphtCitNZVuxavDC1c8BR8uNON504hZufPTCF6Z5jdclNBEnL%2B4PZ%2Bu2IJqckuR6tPCoqi6oIUM4NrOukWsdVujPesq7UfKFcSl6TrFHucMQUPKob3DKuT08lmeK4p1Rsjahexn87uII59FXufYy%2BinHutM8dOmJMCI96%2FB%2B2vshaCDTe5FqvRmyHPyfsNkTUCM6eWk65El3bH2V0MAzWaABcbSszMNYKvF90G6HjNCHB8w6ZIDBF9FmtSS2Yy%2Bg%2B%2BYqBkVBcDutc9n%2FHGxHzh0JDJNgocmnY92iFvGTkkmwxZrElLc0%2FgKgnyAQfjprP%2BRn4GNdDb7LIuJ1oUfsFl7mgA6LcvbmCwfsLwZVNP0oKxSWFOfkneAN4zC%2Fr8nJBjqkAc2JlF7PJ0uuuQT%2B6pHfQtN%2FPIDUspb%2Bx%2BjTroDS08mAvT8n38QqSLs8hXQbKgYhIU23LRe3HPX9W%2F%2FEIAYdCJaFsafK8EQWNo5uABBw7upPwEq55IT0aXjtSf9vfPRNJJPchmMyrF8Ay%2BIkNuMk9GrzdeAmWJs%2F6W9syVrxTj8HQ2ZQdqkcYpCO6TfZVOLTA7auHU9Jvpf8mL%2FR8jiQmL1yjcWX&X-Amz-Signature=05a8673030318278412da55ca995d8ce420c67c9be8d1200cc91b993edfffb05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
