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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOYKQ3KD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVGEfASClsrUq3FHKNBxkSgBmeJMCzQQPVk0RAjrLzAwIhAKdjP7wZ9pT3SNuzYVWpon7phfrDsOIlhyWrETGWetB6KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzB%2Bo4QNx23V%2FGSlPgq3APbuATl2Qhn3iHdMxZ6bhjDluroFTbT8NSGa%2B4hhsFO4raLcxgJXxsoBfreMhRkjvbLWhlE1Ul%2F8aLqpwO5RuOuHcSQJPBzwcuJwsR7KznzJgH9dR0l%2BmYvbtI03R%2BIAZspgFIHl%2Ba2IVxTBqz77O3nNcyDiwuzdVteammCCXAmGeefDlpIWleGjBwerG9X7NRNieB5L4ku9FaGvSRTwhWL1eFr6SuWGEudDmZoFde1RBl7h97P0mvg9U%2BpyqFy7NfM736DHseZsQrrpbwtjVDFvZJml56MBVjAZsXPOKA40hZZBgiPDjxVe8HMyj2%2FDMJgdUv8n1mRUFheyXRJjoxr3WlRZR3BEo9c1vCWCBDm3Ayt8b62skqPnYD95uhiChXP2%2B6c0%2F%2BcFjQy4Snxx1fjjinM67U%2BPG9ikx6R8zb5gCf8%2Fk3L1UqgWewzo8afZbJnRgnN93z36f3rgOBNQcENunXAVCgU%2BhpgtySr9A46PbnDezWxX6%2Fi3vEuziKij23DreoLNMZXhAbNQgSs8ktkLZu681UL3kyHPSf7Crrpq1E2rYMHfzLIuQAm3Ab0%2FyIile2fa67gA6fK4liNELs3LRG12PlwAqHcR8ck7qeoZVhmUaQ0zXfjeiHJPzCjtNnJBjqkAda3Svd9jm72ycp3pyHzrm0OkvRY10hYpVwYE0mD1KneVQtqQki1Lmt7frckkduqhZxNKdCzyd5CqmnrICnKFtavt3sZXn8Luw%2BekJoe8%2FO23h2dOUf4PrKmOpfWOBNi8TssfIy5konb71c9nrOxNhtZtdreMuWj5C05LxLC425gmxb4KujNrER0wMUJiEFwECQKFyMJSRRLxguzpS4lPmQaYDIW&X-Amz-Signature=2338f7b695fe290aa57a082eca1ac4fce306ff20e0cdbd01b9cab5de95a732bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOYKQ3KD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVGEfASClsrUq3FHKNBxkSgBmeJMCzQQPVk0RAjrLzAwIhAKdjP7wZ9pT3SNuzYVWpon7phfrDsOIlhyWrETGWetB6KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzB%2Bo4QNx23V%2FGSlPgq3APbuATl2Qhn3iHdMxZ6bhjDluroFTbT8NSGa%2B4hhsFO4raLcxgJXxsoBfreMhRkjvbLWhlE1Ul%2F8aLqpwO5RuOuHcSQJPBzwcuJwsR7KznzJgH9dR0l%2BmYvbtI03R%2BIAZspgFIHl%2Ba2IVxTBqz77O3nNcyDiwuzdVteammCCXAmGeefDlpIWleGjBwerG9X7NRNieB5L4ku9FaGvSRTwhWL1eFr6SuWGEudDmZoFde1RBl7h97P0mvg9U%2BpyqFy7NfM736DHseZsQrrpbwtjVDFvZJml56MBVjAZsXPOKA40hZZBgiPDjxVe8HMyj2%2FDMJgdUv8n1mRUFheyXRJjoxr3WlRZR3BEo9c1vCWCBDm3Ayt8b62skqPnYD95uhiChXP2%2B6c0%2F%2BcFjQy4Snxx1fjjinM67U%2BPG9ikx6R8zb5gCf8%2Fk3L1UqgWewzo8afZbJnRgnN93z36f3rgOBNQcENunXAVCgU%2BhpgtySr9A46PbnDezWxX6%2Fi3vEuziKij23DreoLNMZXhAbNQgSs8ktkLZu681UL3kyHPSf7Crrpq1E2rYMHfzLIuQAm3Ab0%2FyIile2fa67gA6fK4liNELs3LRG12PlwAqHcR8ck7qeoZVhmUaQ0zXfjeiHJPzCjtNnJBjqkAda3Svd9jm72ycp3pyHzrm0OkvRY10hYpVwYE0mD1KneVQtqQki1Lmt7frckkduqhZxNKdCzyd5CqmnrICnKFtavt3sZXn8Luw%2BekJoe8%2FO23h2dOUf4PrKmOpfWOBNi8TssfIy5konb71c9nrOxNhtZtdreMuWj5C05LxLC425gmxb4KujNrER0wMUJiEFwECQKFyMJSRRLxguzpS4lPmQaYDIW&X-Amz-Signature=d86b9ccd893dfc8fa9a9dc640c99e7422a65b4ce150799ccd0a4393562f79470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
