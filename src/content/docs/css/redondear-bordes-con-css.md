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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NXFSXFO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5o%2BdSdkqK1t5s0MVC4zvtnP3Ih1f19AVNovraJhM0GAiEAi0%2BrdfuiPm0w%2FgWW49ZN96k%2Bf8PPk8iFKy9aJ4JHoOYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDMPWIlbfE%2BkSh0gt7yrcA7YC1XTPvN4e00h4xGPJ%2FBAl5FNq44GSLHdiyOJSwBdLeD078pu7YSmz0WJ0uHTfKKBDiEfqf6iMD%2BGK2snajvld5I2doqZgwAeNa6R34PRL36Dt5o9tejmK%2BLEjksXrQXL5mDNt43Fib1YEfdcMPbs6zwxOMoiqnm8lnlFWPZh2JH0zA3yXAi%2BQzavYrV8AqlqHRb6ZwGavUFV5g1h0XI%2Faa0WYTf5lUshuv%2Bp%2BOPtOD%2BB%2BFYvP%2FWbC2w5aDJkBAvnrmj4AoA%2BFlsrjd7hK0545qh5wjJ2KEuug6Xjar1ZhzqBdlDtLvI9P55Nh4aTOcISu7CZIdqvx9Tq%2BaPXa9gpGc%2FBAa5mM84lyyzTi9Tmc%2F5wk%2BpMv1GzcgsqrEQ9%2BQ0N%2BtsR4psR0hK6VJkSj%2Bo794vkZpUzgYJyudxGXDGkgA0cbW2EVZZWnOK%2BffJY8Jlu1uU%2FtPLjbK9xVHrfXOuz0ypi1A2H5hUN4IrrnMYVlTk3vwJ1EqK%2F%2BxZaUIjMIPZyzLtVmJNzAOxicEEtR1sZG3ShpNgCs2pQupgup%2F1lyEcadpT65FRkd1pDXVIbGiw7bBCqnLLXGZF2fFdx9C%2FJdylAX9nf0kr45r1VJ9cggQ5ZQJn7WdDHSc9%2FmMNTozckGOqUBMjrtL%2BZciJwQmv2tyFOWrsPmZ%2BsXoCpD6O7rf8N3OoYO04KXFbp7%2BDSAy5qZIlz%2F7xCi4wlCrLBg0rt2zmWFsXD1KEJTZ27G9CODhc2Z35vGxHiSGKf4yXGJQm%2FzmM5GaDqa4ET5r66EL9RpbysgAVn2iig0q2yZMTji9empz4G2orHy%2BeLqKnR1jOy2v20FU3fKIAbIKnE%2B4DlsV3yp5wzNFBRz&X-Amz-Signature=96d2a25135a291ae0a481658236b3413a19b5bafd6d42d060befbd03ecab57fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NXFSXFO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5o%2BdSdkqK1t5s0MVC4zvtnP3Ih1f19AVNovraJhM0GAiEAi0%2BrdfuiPm0w%2FgWW49ZN96k%2Bf8PPk8iFKy9aJ4JHoOYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDMPWIlbfE%2BkSh0gt7yrcA7YC1XTPvN4e00h4xGPJ%2FBAl5FNq44GSLHdiyOJSwBdLeD078pu7YSmz0WJ0uHTfKKBDiEfqf6iMD%2BGK2snajvld5I2doqZgwAeNa6R34PRL36Dt5o9tejmK%2BLEjksXrQXL5mDNt43Fib1YEfdcMPbs6zwxOMoiqnm8lnlFWPZh2JH0zA3yXAi%2BQzavYrV8AqlqHRb6ZwGavUFV5g1h0XI%2Faa0WYTf5lUshuv%2Bp%2BOPtOD%2BB%2BFYvP%2FWbC2w5aDJkBAvnrmj4AoA%2BFlsrjd7hK0545qh5wjJ2KEuug6Xjar1ZhzqBdlDtLvI9P55Nh4aTOcISu7CZIdqvx9Tq%2BaPXa9gpGc%2FBAa5mM84lyyzTi9Tmc%2F5wk%2BpMv1GzcgsqrEQ9%2BQ0N%2BtsR4psR0hK6VJkSj%2Bo794vkZpUzgYJyudxGXDGkgA0cbW2EVZZWnOK%2BffJY8Jlu1uU%2FtPLjbK9xVHrfXOuz0ypi1A2H5hUN4IrrnMYVlTk3vwJ1EqK%2F%2BxZaUIjMIPZyzLtVmJNzAOxicEEtR1sZG3ShpNgCs2pQupgup%2F1lyEcadpT65FRkd1pDXVIbGiw7bBCqnLLXGZF2fFdx9C%2FJdylAX9nf0kr45r1VJ9cggQ5ZQJn7WdDHSc9%2FmMNTozckGOqUBMjrtL%2BZciJwQmv2tyFOWrsPmZ%2BsXoCpD6O7rf8N3OoYO04KXFbp7%2BDSAy5qZIlz%2F7xCi4wlCrLBg0rt2zmWFsXD1KEJTZ27G9CODhc2Z35vGxHiSGKf4yXGJQm%2FzmM5GaDqa4ET5r66EL9RpbysgAVn2iig0q2yZMTji9empz4G2orHy%2BeLqKnR1jOy2v20FU3fKIAbIKnE%2B4DlsV3yp5wzNFBRz&X-Amz-Signature=a751d85e5aed83cbb10f829ea0712e2bc1092ba5fe57d5d87daf405b0cec3767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
