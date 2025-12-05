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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AQ75Q4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWFlX5YBApHj4%2FPgJuF2Obe9gmund1uOWfLtnDbUcHpAiEAyEHbOrry%2FJ062gQxy%2FMnJ3myFMouwAaTBTNJXaJ6V7oq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDAK9%2FPzScRBVO3anCrcA6VWPw%2BXQPD9526%2B2pCNEKM%2Fhl3gNKsms7HPIAgc2o4BFFuNVNOoW8y2JE9eIsAnddUuT5zZVRwnnO4Wlh0ZtWz%2BuWJgYzV5vcRSo4%2FuJxgMug5Zdk6m8agMAAPnfLinflpePz5%2FvZssbsfxHVu%2FdQ7X617zddpv0FsTghKT4g887rVZol00%2F7zuuuCFcx6kDewQTBCxcj9GTpyY6IMZ8hDmaIpZO6Lq%2BVnVvXAHw7wMnzvlRiJ0Aab4TaayNk%2FeBQJhU2NgeJ5%2BXq8fhaYaiPhRJWFqESovBsIxfsRqDsxLuND5t3k0xLTisutHPJIGPujYtXp1MKaRr2BbHxkfeuYGmI5QQPDe22Y9eEiZAZxFyHWfgn6J7VNw4Y7JCQUcVsF1f%2FhsqYy8uGTl%2Fn12QFvnda5hJX%2FtCisIN2plX1aznOpnqXaP%2FIB3uGXOxs2uT%2FXj6OZkHLhCGoo3jmWnGAQ6gKqUpn9Q4jfBPJLg%2BoFf4UfZq2L2BL5tW33N4lny62LmBk4hkA8nFfoeiKybGiuBfxTesMEqdoYZdvmWykozQi0oIUyNLVbPA6juCOQers53hlVoeOZ704tZSCGhHvZ58WQ8q5OAIiTsKlBA4zvSdrscXeT5t1jmPhRKMLzzy8kGOqUBMU3bdgX9ZqGc6GQ8lrtjBmVvD%2F2xiKlPySbe6eSRm3xoQJ%2F1UKqauObXyigXOqKxYEDHWu0gFwFOfaqTUKllHN86r3mkRNLqqiRkiD%2F5SIlLHOF99UcX%2BbIeKi5%2FL9UDzE%2BmMnAYheq44ksS4qVHEJ61gHF%2F%2F0m4eq5fIGYpg3YXqA9M9PRTqxMpsngOWtivLjLufgH2NFg9mKzTD8ytpwlSCTNY&X-Amz-Signature=bc0a709b79617b155ade71acb3413433511cf1ca7584f9a4d3a36fb5be87736c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AQ75Q4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWFlX5YBApHj4%2FPgJuF2Obe9gmund1uOWfLtnDbUcHpAiEAyEHbOrry%2FJ062gQxy%2FMnJ3myFMouwAaTBTNJXaJ6V7oq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDAK9%2FPzScRBVO3anCrcA6VWPw%2BXQPD9526%2B2pCNEKM%2Fhl3gNKsms7HPIAgc2o4BFFuNVNOoW8y2JE9eIsAnddUuT5zZVRwnnO4Wlh0ZtWz%2BuWJgYzV5vcRSo4%2FuJxgMug5Zdk6m8agMAAPnfLinflpePz5%2FvZssbsfxHVu%2FdQ7X617zddpv0FsTghKT4g887rVZol00%2F7zuuuCFcx6kDewQTBCxcj9GTpyY6IMZ8hDmaIpZO6Lq%2BVnVvXAHw7wMnzvlRiJ0Aab4TaayNk%2FeBQJhU2NgeJ5%2BXq8fhaYaiPhRJWFqESovBsIxfsRqDsxLuND5t3k0xLTisutHPJIGPujYtXp1MKaRr2BbHxkfeuYGmI5QQPDe22Y9eEiZAZxFyHWfgn6J7VNw4Y7JCQUcVsF1f%2FhsqYy8uGTl%2Fn12QFvnda5hJX%2FtCisIN2plX1aznOpnqXaP%2FIB3uGXOxs2uT%2FXj6OZkHLhCGoo3jmWnGAQ6gKqUpn9Q4jfBPJLg%2BoFf4UfZq2L2BL5tW33N4lny62LmBk4hkA8nFfoeiKybGiuBfxTesMEqdoYZdvmWykozQi0oIUyNLVbPA6juCOQers53hlVoeOZ704tZSCGhHvZ58WQ8q5OAIiTsKlBA4zvSdrscXeT5t1jmPhRKMLzzy8kGOqUBMU3bdgX9ZqGc6GQ8lrtjBmVvD%2F2xiKlPySbe6eSRm3xoQJ%2F1UKqauObXyigXOqKxYEDHWu0gFwFOfaqTUKllHN86r3mkRNLqqiRkiD%2F5SIlLHOF99UcX%2BbIeKi5%2FL9UDzE%2BmMnAYheq44ksS4qVHEJ61gHF%2F%2F0m4eq5fIGYpg3YXqA9M9PRTqxMpsngOWtivLjLufgH2NFg9mKzTD8ytpwlSCTNY&X-Amz-Signature=f4cdd41bd932bd272d16ff334365bc6485788626224a2b488a76accb8da9dac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
