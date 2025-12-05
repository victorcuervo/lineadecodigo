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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDWO4RK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClSJ5ESCM71buWULdgAR8IGdWQLfs1%2FwJlEXlst3wB9QIgFO5VlrdEhvkMTTwMr9b%2FY8p7z2LKY7RS3buZ3xVPqbUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFHW6bMAQXoVDiIVMircA8iaGhaum2c6HwXLV5L8O4I6ArJGlxDpsctO5DbstIcTQy0NocJgssS3%2Br7QbRi8Jetrk407xUBUHav%2BhJwv%2FbwX3ci%2Bq70iCDPiLbXAy7MrFm9ITTV6bzQ4wVyMd1eI%2BkhhoMuVnUf0OtC0zg3xZU9MSYrKYyQqesdUQS8JWum1RUNz%2FSHns42K%2FCGpcgO2gx5hSSe4iU%2BNxS%2BWSRu0GLIyZDrwL3fATIC%2BHJaICPVz8gRqxX%2Fhb4cHZ1Q%2Bzioatzyez5gKoP8wftq1LOpMR5O3cl%2BdCWuUNRgOJyhdWJeYV220L%2FP%2BSJdX2hiLeiTXPl1jca7A3xIU%2BdFG%2FjfbxDWHY0bOArlXdUvzkc5IClkxK6nxgB9tqdO7w8yYffFINf7UnRJy5bhVKmgRKb3gs2KcEd5nsVxV104f0nu5hHd6HJ8Ek6bqPAFdE1n38Jy%2BtI%2BbKrP9GAytVXpbaavNRMup2jKXAUqsp4G%2B1SC3tv31mwFDdk1BomdsWxAxj7uGHljFDJDak0Q5YwhayYtdD%2Fcn7bnyl8B%2FWWBy8LjVE8CGunBizoNImTmFLFEYrpXugOfb4cUJPI7cdpy0f%2FMiDXcH7CfyJtO%2BpwzyOyUhkwJsIVijXpyLx5BcbIH9MPCLzckGOqUBbIkVsodaYuy5W%2BGSHwytwSx1atk8mZLNNYax3pWDSeB6XgfAG26n3TJyXzwLyNW6yC4fMU3%2BUw78wMYqp8sqqQsXkUGYh8ws%2F%2FNLkhabQC0hyf%2BlJqbDGZ7VYX4iRIhf2ILhuIl1Vsi0k4dcAtoDFl6NZCmwXsXMEyLbqJX33FUDjPmD4TjkfAj7l0Hl9McjkRgcqckLYq6wC5zoGjLRqJBkFhP5&X-Amz-Signature=460c22dc2a47e5c161e6f11c395522c943e2b19a59bfc42f315a7fc172369f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDWO4RK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClSJ5ESCM71buWULdgAR8IGdWQLfs1%2FwJlEXlst3wB9QIgFO5VlrdEhvkMTTwMr9b%2FY8p7z2LKY7RS3buZ3xVPqbUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFHW6bMAQXoVDiIVMircA8iaGhaum2c6HwXLV5L8O4I6ArJGlxDpsctO5DbstIcTQy0NocJgssS3%2Br7QbRi8Jetrk407xUBUHav%2BhJwv%2FbwX3ci%2Bq70iCDPiLbXAy7MrFm9ITTV6bzQ4wVyMd1eI%2BkhhoMuVnUf0OtC0zg3xZU9MSYrKYyQqesdUQS8JWum1RUNz%2FSHns42K%2FCGpcgO2gx5hSSe4iU%2BNxS%2BWSRu0GLIyZDrwL3fATIC%2BHJaICPVz8gRqxX%2Fhb4cHZ1Q%2Bzioatzyez5gKoP8wftq1LOpMR5O3cl%2BdCWuUNRgOJyhdWJeYV220L%2FP%2BSJdX2hiLeiTXPl1jca7A3xIU%2BdFG%2FjfbxDWHY0bOArlXdUvzkc5IClkxK6nxgB9tqdO7w8yYffFINf7UnRJy5bhVKmgRKb3gs2KcEd5nsVxV104f0nu5hHd6HJ8Ek6bqPAFdE1n38Jy%2BtI%2BbKrP9GAytVXpbaavNRMup2jKXAUqsp4G%2B1SC3tv31mwFDdk1BomdsWxAxj7uGHljFDJDak0Q5YwhayYtdD%2Fcn7bnyl8B%2FWWBy8LjVE8CGunBizoNImTmFLFEYrpXugOfb4cUJPI7cdpy0f%2FMiDXcH7CfyJtO%2BpwzyOyUhkwJsIVijXpyLx5BcbIH9MPCLzckGOqUBbIkVsodaYuy5W%2BGSHwytwSx1atk8mZLNNYax3pWDSeB6XgfAG26n3TJyXzwLyNW6yC4fMU3%2BUw78wMYqp8sqqQsXkUGYh8ws%2F%2FNLkhabQC0hyf%2BlJqbDGZ7VYX4iRIhf2ILhuIl1Vsi0k4dcAtoDFl6NZCmwXsXMEyLbqJX33FUDjPmD4TjkfAj7l0Hl9McjkRgcqckLYq6wC5zoGjLRqJBkFhP5&X-Amz-Signature=1d2379b8a2456ff5b99e355d18253e065603b47ce293376776ca3859223087b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
