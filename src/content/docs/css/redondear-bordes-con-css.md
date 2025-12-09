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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675CBAW7N%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2WowFFqJBNGxIRqYRO6sR7b2xl6WyktooS29NoqT%2BlwIgTxco9cPCJ5GhgcghgHr0VBfAycjfppoO0Q0%2BbKE3Q9cqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqc%2BZJ07HnnhpT70yrcA0mTaR635QYI46evBdyUV9o0j3blpPjvD%2Fe84nmdnSpNkf5dF63z2D4qcBKQvqo2zhGwnpklJ32qsdU7Y7Ep%2FLzQRCDOmQQEeMkPv1nDu3g9BMpxsMlk9d5q%2B3jic51lK0f0yLQD2ZnI8m9G3j4AGRe0tUqdFuaG5%2F3o16fm4Ur4rtIOAykURWL0MnnbD7%2B78AJAHpYTU90VZDpL2Vd0n1o3xzB6bkYZU7LAocCODFL%2Fj6G6y4JPJiE7Aa1gA7fkdvU%2Ftsc2t3D%2Fhx%2FMF%2F9UyscI04XgNWb2H99cxMdJaTZPOeHFAujqVZhWpGvAgh29ggkoj5GsO669cLY2Y%2F0%2Ft7M7hw%2FmJRfSEOJuZAhnSu%2BcWm61%2BKLJNMbFiFC9KwtBE0cERTFStvUImq0YBeIKlWIyHETb4WtMkxE4FVPzEjMrq8FkfSGag0eju6qqjzveps6IAvrZd%2F1H9wKTDhZTS8Dth0kUDAkssLCgv%2FFEoFfq%2BmrbWls4HkFOnRSzKvAA%2B0tpApJQ6nZDcpyT%2B%2B1UceKPCiHQDXXjAncH0MFqcgFevXSQwQmJ7zfjYvAt3uxeF6QIwaZ7r%2B1zjmsOiJprU%2FKmXpnJ9wABLaFh6pgcqSWRIJGL72miXkElGj2PMNbK3skGOqUBrjxb9i2G4ghLJM3Tm0%2BB3v20gl9LbHtPxGmuGU5%2FcGLw%2FHKJ3UZRFuZ6M1O2ofVx%2BLRFPFRaV%2FAi39VpuElSrvduwS1%2FEFv1lOP6CEYwgPW35mj6FBGsZIkEoqB98YcYLTjMYq8UVGTV3xq6pjy5UuOfz5J99LplL%2FY0JnVRrqiJxiVhVmn%2BUUNyZsR8kKgyW5kFxlBGsU8ZEqmUa1jKv613Lgpu&X-Amz-Signature=12572da7b32522c79f3abbe799c486fea65f37429ff9fa4c7232d1d8cc81f201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675CBAW7N%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2WowFFqJBNGxIRqYRO6sR7b2xl6WyktooS29NoqT%2BlwIgTxco9cPCJ5GhgcghgHr0VBfAycjfppoO0Q0%2BbKE3Q9cqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqc%2BZJ07HnnhpT70yrcA0mTaR635QYI46evBdyUV9o0j3blpPjvD%2Fe84nmdnSpNkf5dF63z2D4qcBKQvqo2zhGwnpklJ32qsdU7Y7Ep%2FLzQRCDOmQQEeMkPv1nDu3g9BMpxsMlk9d5q%2B3jic51lK0f0yLQD2ZnI8m9G3j4AGRe0tUqdFuaG5%2F3o16fm4Ur4rtIOAykURWL0MnnbD7%2B78AJAHpYTU90VZDpL2Vd0n1o3xzB6bkYZU7LAocCODFL%2Fj6G6y4JPJiE7Aa1gA7fkdvU%2Ftsc2t3D%2Fhx%2FMF%2F9UyscI04XgNWb2H99cxMdJaTZPOeHFAujqVZhWpGvAgh29ggkoj5GsO669cLY2Y%2F0%2Ft7M7hw%2FmJRfSEOJuZAhnSu%2BcWm61%2BKLJNMbFiFC9KwtBE0cERTFStvUImq0YBeIKlWIyHETb4WtMkxE4FVPzEjMrq8FkfSGag0eju6qqjzveps6IAvrZd%2F1H9wKTDhZTS8Dth0kUDAkssLCgv%2FFEoFfq%2BmrbWls4HkFOnRSzKvAA%2B0tpApJQ6nZDcpyT%2B%2B1UceKPCiHQDXXjAncH0MFqcgFevXSQwQmJ7zfjYvAt3uxeF6QIwaZ7r%2B1zjmsOiJprU%2FKmXpnJ9wABLaFh6pgcqSWRIJGL72miXkElGj2PMNbK3skGOqUBrjxb9i2G4ghLJM3Tm0%2BB3v20gl9LbHtPxGmuGU5%2FcGLw%2FHKJ3UZRFuZ6M1O2ofVx%2BLRFPFRaV%2FAi39VpuElSrvduwS1%2FEFv1lOP6CEYwgPW35mj6FBGsZIkEoqB98YcYLTjMYq8UVGTV3xq6pjy5UuOfz5J99LplL%2FY0JnVRrqiJxiVhVmn%2BUUNyZsR8kKgyW5kFxlBGsU8ZEqmUa1jKv613Lgpu&X-Amz-Signature=57ccc49873c95c0d23b0866b83ffff66b1f01d3cd1a3b1b9c418bfeb0e61dc1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
