---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NIHDPXK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCAxV%2BenAhdahXCFHj3dSwA65DiPr53OwWh0%2BTRlB6vyAIhAPeJVr5cr1J7IrkFrdta0f1%2Bjz1M0TEHmdWQWZsCkVGSKv8DCDsQABoMNjM3NDIzMTgzODA1IgxkoGIn1txZQ5f2z0oq3AMrYNSt0M1X7ZsCoswsELHkQoZdJmt2KfLNjszmzOsGiGv0lWgtWoO270lM4o4TBNBU9LpjL40rlGbrk%2FKNmgj0%2BK3zqQXIf%2BeyM8Hi8iPPWYe62kkYsOuh3TdjemrFz%2BJxfsXfuMU6oId%2BQexii%2FWOB0L3%2FbHjv9IQMLGYzUiFlkhQcBYDZlob7PVh4CL3YlOZnzp7EOglt27Roa89h9s3MQQ1Alw40RyxWa%2BbyUjvqMP6XpEkLGimT1odUg5s4PMh8kONSnRsOs7yi3b8Uxz7SyKsdr78ePWrJCI2wAtzC0TOwvKGQKi%2Fq7HQmDs%2F0fpNUMu%2BYGhojDZ9mF5LIfB0QVrGv%2Fv3BM20dNLT%2F109%2BVDI3J1g488527lWmQBrStHooums6AhX9uY%2BLs%2FaRM7QrIdupW9CBWZndE1lqCfug9XsZDM7mZPCmB8GQ13HAKfFhAkfymYY0%2BtSFJ%2F4UOTK5vnmbanzzWumc%2Fc3ayRVqdPAZ0dyqgoFFMweZbqouVfe6NJlDbz7Qow9DHpDEYcgZY9fgGFEgTabB%2B6IAiU7MmACyG5v2srEELaIjkeSaF5bzl2Zt9t%2F9MtwbsnGjC71GSvT5mu825l6iy4DhZBq3VmYxZy7w3SLtSSYJzCO1cPJBjqkAcsE5msc99djnMgwHweBvxMnFz8spHytMXIf4FGxj7wjP0HFrz1Ivwl5PH7V%2B2zV1bWWQFKnzLzobjNSZSJ72K8S561zn70FMruIH8Oy1Tdg2H5AW%2Bow%2FQfbONYX4N6dsj1uGHretUbl8A6Fj%2BlZDTe%2F%2B%2FMfRHkE2KANRuaQGyxx1Sqwr77QbRWrP%2FaSocpVZLmRhmW%2BrZOnnj0ODZZ7Cq7LRzeB&X-Amz-Signature=79eef4a9ac55358efe43f04296b5df0293ee0d1e833d59c69a12216f7509ff86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NIHDPXK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCAxV%2BenAhdahXCFHj3dSwA65DiPr53OwWh0%2BTRlB6vyAIhAPeJVr5cr1J7IrkFrdta0f1%2Bjz1M0TEHmdWQWZsCkVGSKv8DCDsQABoMNjM3NDIzMTgzODA1IgxkoGIn1txZQ5f2z0oq3AMrYNSt0M1X7ZsCoswsELHkQoZdJmt2KfLNjszmzOsGiGv0lWgtWoO270lM4o4TBNBU9LpjL40rlGbrk%2FKNmgj0%2BK3zqQXIf%2BeyM8Hi8iPPWYe62kkYsOuh3TdjemrFz%2BJxfsXfuMU6oId%2BQexii%2FWOB0L3%2FbHjv9IQMLGYzUiFlkhQcBYDZlob7PVh4CL3YlOZnzp7EOglt27Roa89h9s3MQQ1Alw40RyxWa%2BbyUjvqMP6XpEkLGimT1odUg5s4PMh8kONSnRsOs7yi3b8Uxz7SyKsdr78ePWrJCI2wAtzC0TOwvKGQKi%2Fq7HQmDs%2F0fpNUMu%2BYGhojDZ9mF5LIfB0QVrGv%2Fv3BM20dNLT%2F109%2BVDI3J1g488527lWmQBrStHooums6AhX9uY%2BLs%2FaRM7QrIdupW9CBWZndE1lqCfug9XsZDM7mZPCmB8GQ13HAKfFhAkfymYY0%2BtSFJ%2F4UOTK5vnmbanzzWumc%2Fc3ayRVqdPAZ0dyqgoFFMweZbqouVfe6NJlDbz7Qow9DHpDEYcgZY9fgGFEgTabB%2B6IAiU7MmACyG5v2srEELaIjkeSaF5bzl2Zt9t%2F9MtwbsnGjC71GSvT5mu825l6iy4DhZBq3VmYxZy7w3SLtSSYJzCO1cPJBjqkAcsE5msc99djnMgwHweBvxMnFz8spHytMXIf4FGxj7wjP0HFrz1Ivwl5PH7V%2B2zV1bWWQFKnzLzobjNSZSJ72K8S561zn70FMruIH8Oy1Tdg2H5AW%2Bow%2FQfbONYX4N6dsj1uGHretUbl8A6Fj%2BlZDTe%2F%2B%2FMfRHkE2KANRuaQGyxx1Sqwr77QbRWrP%2FaSocpVZLmRhmW%2BrZOnnj0ODZZ7Cq7LRzeB&X-Amz-Signature=fdcd569e2e70deda6fe0bc46a5fa51af70c8e6ce9e8edd1ac672ebcde3525438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
