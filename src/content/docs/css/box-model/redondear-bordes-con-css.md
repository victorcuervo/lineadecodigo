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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIOJWM6M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU4Mu8r8M2axY0JFNm83n6x2XnaCk8vpP3zTwafF2YsAiEAl5tRAM8hTDtloHtKwktsrWZ6K0Ur8SkTvDIP8XomsXEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDONzNZk2E848idjGtircAzhCJIk74q6jUDBaeArgRHMidrJxaaMziKONloXwUPaxn1i5AHX1GPo7Lsj1SGLn9qUtDArBbZBFr51AD%2FWAdkQOqjhwqZHBzQ3zR1XfmT6dsoZN%2FSWwd9h5ysNgzSUXd438h6jfB%2BQ6vfb2XmqWljnt3g3ahzLGOjq77OXUWJGXMH7QBew23jynP98HDTw4zpPk6%2BvOXRqfr4A29QSdOVxGaH3QQzYfkVjxUt3NQifOyq014qwIuK0N%2BuUUw%2BA9E1XUVjGzwz1autc4SJsuVdOlc16Cp4R98zypDdNbSlcZLm%2FK4eDuEhRdY2J%2BB1jJ2Vw9H1KeE64QyLAzvwCx%2FOsRs59NAFQ0ydq70vjGvLNztGlekMGveuAYVeW54Zc0YcqkfYW1wPJ7vDQtVE9yYbtH%2F%2FuJpq%2Fi7DhBEe1Sd9X%2F7dgfejHuZZf0LBb%2BQrK%2Fki7kqN0mmIm8vkMhlUQ01POBuXhcdMNdh%2Fm44muua%2FVcn2AwcrPs2SjXILoN%2BJdOflh3%2F4HjcnCRMxakz%2FwDhiFh2h5UAKDKXI1sE22Uh4n1NYv3yluYGZ1DM%2BqOGAvYBeAtwhUgWIhV9S5WwzB1qvbNYj03JA9h1DWJkBUriLgP6Ztu3iqVm9Fh9TYmMMDhisoGOqUB1tp998b4T5E8jZ4tP6mRu9gfOPI%2BnK76uSWkD0w5d4RBqO4mjsBudMICwjlj6RU4DtTf28LP19VJbIa03YFilASIBqb6E09LCVAyot0qkaq6X62Ke7Mnk8DM5w%2BuLTxC1vk7AvprJRXStbczS34TTaYKxrGMYqx3%2F3SL18v7atyhmEvSuhtQfRbxnd%2BBhVl1BKFByu594InCVfsKe%2BGUpGinkILa&X-Amz-Signature=6ef5fbee345a2efa50afc6cfc0eee26289af45745c17b484ed0af2bed7f2914c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIOJWM6M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU4Mu8r8M2axY0JFNm83n6x2XnaCk8vpP3zTwafF2YsAiEAl5tRAM8hTDtloHtKwktsrWZ6K0Ur8SkTvDIP8XomsXEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDONzNZk2E848idjGtircAzhCJIk74q6jUDBaeArgRHMidrJxaaMziKONloXwUPaxn1i5AHX1GPo7Lsj1SGLn9qUtDArBbZBFr51AD%2FWAdkQOqjhwqZHBzQ3zR1XfmT6dsoZN%2FSWwd9h5ysNgzSUXd438h6jfB%2BQ6vfb2XmqWljnt3g3ahzLGOjq77OXUWJGXMH7QBew23jynP98HDTw4zpPk6%2BvOXRqfr4A29QSdOVxGaH3QQzYfkVjxUt3NQifOyq014qwIuK0N%2BuUUw%2BA9E1XUVjGzwz1autc4SJsuVdOlc16Cp4R98zypDdNbSlcZLm%2FK4eDuEhRdY2J%2BB1jJ2Vw9H1KeE64QyLAzvwCx%2FOsRs59NAFQ0ydq70vjGvLNztGlekMGveuAYVeW54Zc0YcqkfYW1wPJ7vDQtVE9yYbtH%2F%2FuJpq%2Fi7DhBEe1Sd9X%2F7dgfejHuZZf0LBb%2BQrK%2Fki7kqN0mmIm8vkMhlUQ01POBuXhcdMNdh%2Fm44muua%2FVcn2AwcrPs2SjXILoN%2BJdOflh3%2F4HjcnCRMxakz%2FwDhiFh2h5UAKDKXI1sE22Uh4n1NYv3yluYGZ1DM%2BqOGAvYBeAtwhUgWIhV9S5WwzB1qvbNYj03JA9h1DWJkBUriLgP6Ztu3iqVm9Fh9TYmMMDhisoGOqUB1tp998b4T5E8jZ4tP6mRu9gfOPI%2BnK76uSWkD0w5d4RBqO4mjsBudMICwjlj6RU4DtTf28LP19VJbIa03YFilASIBqb6E09LCVAyot0qkaq6X62Ke7Mnk8DM5w%2BuLTxC1vk7AvprJRXStbczS34TTaYKxrGMYqx3%2F3SL18v7atyhmEvSuhtQfRbxnd%2BBhVl1BKFByu594InCVfsKe%2BGUpGinkILa&X-Amz-Signature=b301565a27fea6352fbedba3ed7637c6f517789a0c0cc322c92f4aab5ddc4ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
