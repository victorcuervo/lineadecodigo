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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM32R7R3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD50iUTyaEA9JhIpZWh5ipE9L94fkB7K7%2BuSjt48ppi3AIgUxyAOhh9MygnDUrvFI1Q5fjTrg4fg%2BgENzi5IkZhlcsqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5GxXCOpdcxJJb%2BfircAzD2MGAtFvEND2P3Plvfa3yyydZKGMJxLkZtHSh%2BGD0vBsBHGZMRFq06iCdPdQyaLLDgiEClOntk5YaF9FVqAwd5C1Xn5r5fsxUBp0ksNwrinZAZhNPRMNa4NbbJK9lDq%2B5N7tEEZo2uPG1d0jBXjIFpnnaUUXoBqh5HuDwWY8QPvag6eXsJy942WbGCsH13TngtPZ81aCuIOvKTAmD6MPucdapK%2BqKKRwtyr%2B0wH9zTG1RMJeZtu9p4qXPYTILOxggjp8IfoAIpIdAZ9HgGKoKtjiD7%2BmyiRNQj0kShwFCkWsAXm56hTXMiEVTH%2FMrQynK6s8tqwqQe4LZfb9pI7NHJ3JKkkO%2BO5F9Y1HlxvY3MOlTzX3r9f3S2gS5XRduOvGiwmW2mdKs98yQ9NGg%2BrIywedsxA0CiR5TV%2Fp%2Fyv9n0TI9vqC4ogFFqKfDOOHe%2FFAYuYP0%2FHqBYBDyZTzP9W5%2F0dfCPDojaBWArMPyIGli%2Beqjs3JX5Tp0hGMp7AZGwnungl91O6TAnUYqCFEZfkxBdJx5QAhVQ%2B%2BoStb6%2Bvw7fKeDDNhimsa%2BIgj5MBWtrZhetL75gkY4fGn396Y0o0AP7VCnZ5MD5hdoNKJ3oxL%2FW%2BfeJCwzlomoPf0JGMKfC3ckGOqUBGOdVckRJEdiv4wmFBtv9wXxo689I32dZZYhDDsUBvcGSNOOdR3UynIou0TaqoSIK7%2Bo4dQXgWRQGBpaK9zcr8DVCNlBzChgOWGcWbpwiyxHwP4zgqMy1fiM965hwEu0jZdFSFNrnV%2FNO3VRZw2vliTs47N96FU5tEvq1X9tSBdCi6gurSRAM2SbYyebwSQe6Y2fy%2F4EmCRFYZTLiWJ1IiyUBuEUr&X-Amz-Signature=b5d904f0b774685b1b88258febb080af6f67c5f4a06609a9c7686fcea1f9db47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM32R7R3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD50iUTyaEA9JhIpZWh5ipE9L94fkB7K7%2BuSjt48ppi3AIgUxyAOhh9MygnDUrvFI1Q5fjTrg4fg%2BgENzi5IkZhlcsqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5GxXCOpdcxJJb%2BfircAzD2MGAtFvEND2P3Plvfa3yyydZKGMJxLkZtHSh%2BGD0vBsBHGZMRFq06iCdPdQyaLLDgiEClOntk5YaF9FVqAwd5C1Xn5r5fsxUBp0ksNwrinZAZhNPRMNa4NbbJK9lDq%2B5N7tEEZo2uPG1d0jBXjIFpnnaUUXoBqh5HuDwWY8QPvag6eXsJy942WbGCsH13TngtPZ81aCuIOvKTAmD6MPucdapK%2BqKKRwtyr%2B0wH9zTG1RMJeZtu9p4qXPYTILOxggjp8IfoAIpIdAZ9HgGKoKtjiD7%2BmyiRNQj0kShwFCkWsAXm56hTXMiEVTH%2FMrQynK6s8tqwqQe4LZfb9pI7NHJ3JKkkO%2BO5F9Y1HlxvY3MOlTzX3r9f3S2gS5XRduOvGiwmW2mdKs98yQ9NGg%2BrIywedsxA0CiR5TV%2Fp%2Fyv9n0TI9vqC4ogFFqKfDOOHe%2FFAYuYP0%2FHqBYBDyZTzP9W5%2F0dfCPDojaBWArMPyIGli%2Beqjs3JX5Tp0hGMp7AZGwnungl91O6TAnUYqCFEZfkxBdJx5QAhVQ%2B%2BoStb6%2Bvw7fKeDDNhimsa%2BIgj5MBWtrZhetL75gkY4fGn396Y0o0AP7VCnZ5MD5hdoNKJ3oxL%2FW%2BfeJCwzlomoPf0JGMKfC3ckGOqUBGOdVckRJEdiv4wmFBtv9wXxo689I32dZZYhDDsUBvcGSNOOdR3UynIou0TaqoSIK7%2Bo4dQXgWRQGBpaK9zcr8DVCNlBzChgOWGcWbpwiyxHwP4zgqMy1fiM965hwEu0jZdFSFNrnV%2FNO3VRZw2vliTs47N96FU5tEvq1X9tSBdCi6gurSRAM2SbYyebwSQe6Y2fy%2F4EmCRFYZTLiWJ1IiyUBuEUr&X-Amz-Signature=39c8e849d179b6d167d81f5d51b0408d609c96ea3e2d123047d5629082307be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
