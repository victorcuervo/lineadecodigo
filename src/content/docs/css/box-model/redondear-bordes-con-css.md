---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S6WNSDH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsbKS8j3VL4KaQMJlqWxa1qNbzHKva8BEl%2Br%2B9WFRkEwIhAIaAyvYhH0%2Boij7ZVxLNhK5nS9pKauYId%2B0jXbFltO7RKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa2tZDOZJVhhddM7kq3AN52k2r%2FS%2BRHTxS96OMWZNPMnnGNVYUn%2Bo2sPWC9D9710MZJrMA4okuBoZZOYGu5TxbrscY8eLiMkisiMyVn8f4CCUkbkVaiqwa1bE29YpFifPBmm8pVWroAmiQdvZ7AFQM7Lx0LCxwC52HzrF66IZFaroGqIBlO7azavC07m6J5QjDpvmUHf9txOuonNSmASrZFDZuTVYxGdTzG1w%2FWEszGZDA%2BtL0O5%2BTD3Udka5bijwz3FJ2S7yzKh%2FQV%2FE4Z6IN1kfC4oCVxgM0%2B8%2BUN%2FOT5J7LN2h8D5JOHAphf8pyXU8sBthckl2kwL2FwUi58B7zqVdwIfCk5DUzq3aA7eLoPjjmV9CRvZHZJXhT0CfjzpYpBSegC2pk6gFQtW%2FaTjPxWI3%2FdURX8FWIhyoDiNbgZK3wMoxWHcjGKUxOZpB0256tOKOJnERqVpIHPY9aBkPW1WULUHl2LtNm%2B0EcRXg1Wo9s70LSoE5RB%2FkF7%2BgQdjdIBp5LRhhQiqZxPCZDX4Yxk%2FvUESp8Wj3rBtHPUcY3RAb36OxsUJhy4IDTA%2FZX42sesDayszNIZnsjnfZncQ0dS1%2BzrCaGuA2gujZwbS5zD9fY3A9mdckpQUtzljJOcCmtO5VOpb3pbohhZzDz%2F4rKBjqkAQ5PIl7cLTJQS8dQC1heIdtLXl4DQO7FrjQH8EARlT7fPzeBbXQJa096YF7uBXsKEaAMtb1Ts%2FP%2FrD1KUBPRNydePF7qA193HPHGmucIw3c1o4Yu8n3NhNF38arLS2SHS0F0GC1I36D7H5hTMOmjvMSYmEaxqQVttA7%2Bc1tnerBPEUoOwWXgoc9g78as143xc1chbFWJejy01rFDqaWphszQvg%2Fi&X-Amz-Signature=96aee69bff99ad4f29f3aa7786a6146627bccbf20f7afca5ce67e9d2d693ed4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S6WNSDH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsbKS8j3VL4KaQMJlqWxa1qNbzHKva8BEl%2Br%2B9WFRkEwIhAIaAyvYhH0%2Boij7ZVxLNhK5nS9pKauYId%2B0jXbFltO7RKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa2tZDOZJVhhddM7kq3AN52k2r%2FS%2BRHTxS96OMWZNPMnnGNVYUn%2Bo2sPWC9D9710MZJrMA4okuBoZZOYGu5TxbrscY8eLiMkisiMyVn8f4CCUkbkVaiqwa1bE29YpFifPBmm8pVWroAmiQdvZ7AFQM7Lx0LCxwC52HzrF66IZFaroGqIBlO7azavC07m6J5QjDpvmUHf9txOuonNSmASrZFDZuTVYxGdTzG1w%2FWEszGZDA%2BtL0O5%2BTD3Udka5bijwz3FJ2S7yzKh%2FQV%2FE4Z6IN1kfC4oCVxgM0%2B8%2BUN%2FOT5J7LN2h8D5JOHAphf8pyXU8sBthckl2kwL2FwUi58B7zqVdwIfCk5DUzq3aA7eLoPjjmV9CRvZHZJXhT0CfjzpYpBSegC2pk6gFQtW%2FaTjPxWI3%2FdURX8FWIhyoDiNbgZK3wMoxWHcjGKUxOZpB0256tOKOJnERqVpIHPY9aBkPW1WULUHl2LtNm%2B0EcRXg1Wo9s70LSoE5RB%2FkF7%2BgQdjdIBp5LRhhQiqZxPCZDX4Yxk%2FvUESp8Wj3rBtHPUcY3RAb36OxsUJhy4IDTA%2FZX42sesDayszNIZnsjnfZncQ0dS1%2BzrCaGuA2gujZwbS5zD9fY3A9mdckpQUtzljJOcCmtO5VOpb3pbohhZzDz%2F4rKBjqkAQ5PIl7cLTJQS8dQC1heIdtLXl4DQO7FrjQH8EARlT7fPzeBbXQJa096YF7uBXsKEaAMtb1Ts%2FP%2FrD1KUBPRNydePF7qA193HPHGmucIw3c1o4Yu8n3NhNF38arLS2SHS0F0GC1I36D7H5hTMOmjvMSYmEaxqQVttA7%2Bc1tnerBPEUoOwWXgoc9g78as143xc1chbFWJejy01rFDqaWphszQvg%2Fi&X-Amz-Signature=0fc34d6f2ea07ad69339c7445285760103bdd1ef434d33c5b4e7355c3d828fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
