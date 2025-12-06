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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OO52STQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPMm%2Ba7ZnentTHq9XB0qIP8xSkSy8R1HtnBwbyGfB4QAiEA9SoHiic8Vffxja%2BZfCG7nAiubN6hNTVhHt88wQK6k%2Bcq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHWdHWHGvyGwWFoVLyrcA%2F35qQqdd%2Fwgxq40d5gyny9joOb%2Frw5tV9%2B1x8Ku1n2%2FYSlKuQrSYg7oCVAOIi6XhtB19vw%2F6O3ea3PBHm22wD3uvh0BwdUVaV9G1HHAYhvU%2BGOFHUCml5reNo%2Fmu3YFnFtSFOxoYjPYDRkz%2BXSTjNytOTSw2UtkBCAFKyrjkZuxKUK0sFUp%2F0gQ63zlArNxR0ixHuzh8DO1zXdnl4iKkwtbeh%2BfN2PTR%2BFazbCPzuWnWJvqaSTUPs4OmoYfpKoM6z2e29ybW9RjOjtTDuqwFQks45wsKyXuOfPAxh8JDo63TvozUjBF1zda5oBjky%2BPy0q8Qm84pIWo%2FV9TDPDdmuX5wDYWH64W%2BxWQwb%2FgaGR5FRG1Mtz0TqDK8DDmD02kxSqH9brs6HPAc6brHXBkkrZjRA3JBEGkjRO%2BVknw7RNyR91RVK44iLkVtMOQprsKSGaaxwE8ams%2FBN4lyaPsvAGYRb5Mq0N57aghRlWVmRuY7jJPz92cgP9bsaeib9EC4VAcqHO6TA0PhTgxk0JbdJL1u%2FooVBXNrxhVlyCyI3hYhnkS7WskMPgx%2BvcMacVWxqwxnOvytuSMRzTolwO789xiIjhogUn4s%2FO4gAQLkanhxR2dCUpjrccaKTE%2BMLjezskGOqUBCCLDdOzpvkB%2FeqNVX4LB273XAR95kF%2B6aa4OjL6DZBHcW8uDKmz3C4vWDqpi7IwE6%2FPICMhqNmFroF1%2B84gvvDHqwE8XlfdpqzXaZ6FqRmIxt1YLe87blYAtqkkzgVOeG1QkzC0YQN8m04gzeIq2we6F1x%2BUFcb9%2BLYQL4zSxKnTqBgfcCgxagqp0XsZEjLkbL3%2BlgxkSDorOrZ4Fgcz9Gmmg6JL&X-Amz-Signature=708b4f45e5b1bd08e7b1e3d81db8aa9f38ab5aa1ac178c515ade588790f59e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OO52STQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPMm%2Ba7ZnentTHq9XB0qIP8xSkSy8R1HtnBwbyGfB4QAiEA9SoHiic8Vffxja%2BZfCG7nAiubN6hNTVhHt88wQK6k%2Bcq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHWdHWHGvyGwWFoVLyrcA%2F35qQqdd%2Fwgxq40d5gyny9joOb%2Frw5tV9%2B1x8Ku1n2%2FYSlKuQrSYg7oCVAOIi6XhtB19vw%2F6O3ea3PBHm22wD3uvh0BwdUVaV9G1HHAYhvU%2BGOFHUCml5reNo%2Fmu3YFnFtSFOxoYjPYDRkz%2BXSTjNytOTSw2UtkBCAFKyrjkZuxKUK0sFUp%2F0gQ63zlArNxR0ixHuzh8DO1zXdnl4iKkwtbeh%2BfN2PTR%2BFazbCPzuWnWJvqaSTUPs4OmoYfpKoM6z2e29ybW9RjOjtTDuqwFQks45wsKyXuOfPAxh8JDo63TvozUjBF1zda5oBjky%2BPy0q8Qm84pIWo%2FV9TDPDdmuX5wDYWH64W%2BxWQwb%2FgaGR5FRG1Mtz0TqDK8DDmD02kxSqH9brs6HPAc6brHXBkkrZjRA3JBEGkjRO%2BVknw7RNyR91RVK44iLkVtMOQprsKSGaaxwE8ams%2FBN4lyaPsvAGYRb5Mq0N57aghRlWVmRuY7jJPz92cgP9bsaeib9EC4VAcqHO6TA0PhTgxk0JbdJL1u%2FooVBXNrxhVlyCyI3hYhnkS7WskMPgx%2BvcMacVWxqwxnOvytuSMRzTolwO789xiIjhogUn4s%2FO4gAQLkanhxR2dCUpjrccaKTE%2BMLjezskGOqUBCCLDdOzpvkB%2FeqNVX4LB273XAR95kF%2B6aa4OjL6DZBHcW8uDKmz3C4vWDqpi7IwE6%2FPICMhqNmFroF1%2B84gvvDHqwE8XlfdpqzXaZ6FqRmIxt1YLe87blYAtqkkzgVOeG1QkzC0YQN8m04gzeIq2we6F1x%2BUFcb9%2BLYQL4zSxKnTqBgfcCgxagqp0XsZEjLkbL3%2BlgxkSDorOrZ4Fgcz9Gmmg6JL&X-Amz-Signature=1d84d2a50dcca2add571d901af17c52110e68ac0be5b722aa8930cf7d0bbefca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
