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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKDYY6FY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIE2oFFvvNwc%2FNWqJJ5%2FSg1J3EjMvetyOAs%2BO6eGIBNNyAiBFP6jNLb3uQknG%2F9lTuJLaV%2FLMzU0ppSnkl%2BOF5ZpvmCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMGGV9Ug7eA55iUwCkKtwDONWhipT1z2t53H9XgyFqmlJbPPn8RxcjI1YH539xf1Df7MmfntM2XxOvWxs7Ws5Vu9U0OM46BZcnqOyOZF%2Fe45SEODZ0gFkSSD8%2Fk0NFFkIBPOwQuD2QjakCJCMlA33AmGVN%2B9oY38c1aiFNxKH63nHQEujMDxqRVXJIkAMSF7skzqk9BLAxYXVd8zoGq%2B1K1q0P%2BCJhM3lNnFu0Wbnc%2BzdQmx0aKGNuJfiCAu0QSqk2Y3Pf%2BcyYOqDNm%2BA2UEZ3vZ7o4m81E8Wti34zJBLGvjNfYsdLs1eKLZsql4BSdh4WtzlVeiiIp49Mpc6Px7Ub784bgOt62YjXJqbBqcyabHLKO8NoFfrYSF%2Fc5TEPd555ka1RcUa3ET%2FATp4P5EWvZyceokbPXImIqJ7jCmEV8ZiLU18chzUVXIkoTQUgvV1oouZcdtwrMMD5TJ5CwpIJlFA%2FDXkagfAEqc5bKVkI2rNoeX7j%2FWMKH8YJBmDGLMaL0DiwA92eJMuJ7fsGDcACdixt2IbjnbBNtM%2FaQMzItC4XNceVb%2FuMFurPqJ1xDAL3hFiaAYc%2FWWhBYh0oC7nBjD0CD8HHVKvmRUml8%2BnkD0TmAeRsJNSNASoqqbJHdFq2TmnqpNiFaJ88AAcw4q3EyQY6pgEVRZpHNuS%2BTCxwqh30AwDxOitVQtIVfan9tWUH3xy3fuuhl%2B%2BBayX746mpK%2FKuBCRumLCcdFDmjQlPPCEetLc%2FqxyQHFxE6jaqwnv9bBlXEL%2Ft2stJ7015IaFKNnBot8eeSYzmWvQXCSOcL6xwOVeHw%2BU2jotE2dpp1oRxrDyM1CJB2Y3tq3ACBwHQCrsoy1f7fuK3gzCX%2BeRg26ZUeoANiu9r9pSB&X-Amz-Signature=04c0667c7987e0869b81758391334c9067fc48c266307fbfa0d65660e49a94ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKDYY6FY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIE2oFFvvNwc%2FNWqJJ5%2FSg1J3EjMvetyOAs%2BO6eGIBNNyAiBFP6jNLb3uQknG%2F9lTuJLaV%2FLMzU0ppSnkl%2BOF5ZpvmCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMGGV9Ug7eA55iUwCkKtwDONWhipT1z2t53H9XgyFqmlJbPPn8RxcjI1YH539xf1Df7MmfntM2XxOvWxs7Ws5Vu9U0OM46BZcnqOyOZF%2Fe45SEODZ0gFkSSD8%2Fk0NFFkIBPOwQuD2QjakCJCMlA33AmGVN%2B9oY38c1aiFNxKH63nHQEujMDxqRVXJIkAMSF7skzqk9BLAxYXVd8zoGq%2B1K1q0P%2BCJhM3lNnFu0Wbnc%2BzdQmx0aKGNuJfiCAu0QSqk2Y3Pf%2BcyYOqDNm%2BA2UEZ3vZ7o4m81E8Wti34zJBLGvjNfYsdLs1eKLZsql4BSdh4WtzlVeiiIp49Mpc6Px7Ub784bgOt62YjXJqbBqcyabHLKO8NoFfrYSF%2Fc5TEPd555ka1RcUa3ET%2FATp4P5EWvZyceokbPXImIqJ7jCmEV8ZiLU18chzUVXIkoTQUgvV1oouZcdtwrMMD5TJ5CwpIJlFA%2FDXkagfAEqc5bKVkI2rNoeX7j%2FWMKH8YJBmDGLMaL0DiwA92eJMuJ7fsGDcACdixt2IbjnbBNtM%2FaQMzItC4XNceVb%2FuMFurPqJ1xDAL3hFiaAYc%2FWWhBYh0oC7nBjD0CD8HHVKvmRUml8%2BnkD0TmAeRsJNSNASoqqbJHdFq2TmnqpNiFaJ88AAcw4q3EyQY6pgEVRZpHNuS%2BTCxwqh30AwDxOitVQtIVfan9tWUH3xy3fuuhl%2B%2BBayX746mpK%2FKuBCRumLCcdFDmjQlPPCEetLc%2FqxyQHFxE6jaqwnv9bBlXEL%2Ft2stJ7015IaFKNnBot8eeSYzmWvQXCSOcL6xwOVeHw%2BU2jotE2dpp1oRxrDyM1CJB2Y3tq3ACBwHQCrsoy1f7fuK3gzCX%2BeRg26ZUeoANiu9r9pSB&X-Amz-Signature=45397ef6778c210700e5208e632583c1927335ce33bcb94b2ea96338d3258e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
