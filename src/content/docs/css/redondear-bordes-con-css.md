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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAZAD4IO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkQQuauN5OUsr0%2BbfsSBtE6HPo%2FsLfT7Dt%2B%2FD0gppBMAiBYVBKnaselB9gnwulNpFOrN6P3OVwQ4XjayYdOLHB9oSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9JbqBeOzd7O11uFnKtwD52pKiK7%2Fkp0lH17JL1%2FvtBWeKtkHteH%2FOFgo3icX8rxtV2%2B0FnVn9FzeVKGNJtuBd7DMf4RRpDucSo8UI8RPTNswgDkhP3DQBSCmBIY3flSokwhJU35GoFCh9qlMjN6KF5FDHyI2zi2dwjfI5TCsbHqDfHa1xXj5GBr7afRXvIOZxDZrjJi%2BUbC1kKZyx43Z0bLpZsz3c9pVutfllzlX5h29MQ574Yh4zrXUKjvBZFmUhHCye2qYOtg6SdG6tL1buKLkxtkxcaMN8lw%2BNDTbOOtOY8Fq3wuGgINHHvdJ1Xli%2B%2FZaDElns18GLC1dO6tE1MiX89DwDeUo7XQJMgq9dI1Nt3oMwSsY1YCjXhG%2Bd6J5bAHGqdkK0XOJZPyB1VMxmaOF2e2FEeygCj7BX4K0PalMJnxKhoiKmUYDHpFTQKZpngb%2BsZzalOONLTRJ%2B1gQYUtRQ7gyxE4IsylzcvsMatuo%2FzE1AC3aBbA73hqN77dWjb5mr2H4%2B4iTsZZengd2ymoaafkOzTh8xHusBLlbVU%2FpBNKbczJkub69ltmABSeso8L6nTDXM1u0%2BlN%2FNwBlq8axGNkGUfoVQy%2BLlZ8S13YcFyzSdjYth1OJPjEvoVXLmKGHdzd3xrwzrsAwv73WyQY6pgHScGg8PrFY7eDarpXiOQahUTAbLiFsxMuEIKIpjN17U50RLIUKkPK9SaA8roOvjUyl5sboAgvttVK8fR55vjGzZQ62PMV7r55E5SZkpUSsljtRCj5R7kOpa8GWT1XgCvkTHJhZfCzYf3b4VLz9fbSxXaxeCzFQNf1PjrhlM3K2xUn2hNiy5e9cZSo2VUjLB7Xb4kem8%2B09XPdKIN92aQgyb6giEfWn&X-Amz-Signature=bc2f98008567b68bad3fa1648e7cff1a08e50a59483bb70a947ceb84228a2035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAZAD4IO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkQQuauN5OUsr0%2BbfsSBtE6HPo%2FsLfT7Dt%2B%2FD0gppBMAiBYVBKnaselB9gnwulNpFOrN6P3OVwQ4XjayYdOLHB9oSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9JbqBeOzd7O11uFnKtwD52pKiK7%2Fkp0lH17JL1%2FvtBWeKtkHteH%2FOFgo3icX8rxtV2%2B0FnVn9FzeVKGNJtuBd7DMf4RRpDucSo8UI8RPTNswgDkhP3DQBSCmBIY3flSokwhJU35GoFCh9qlMjN6KF5FDHyI2zi2dwjfI5TCsbHqDfHa1xXj5GBr7afRXvIOZxDZrjJi%2BUbC1kKZyx43Z0bLpZsz3c9pVutfllzlX5h29MQ574Yh4zrXUKjvBZFmUhHCye2qYOtg6SdG6tL1buKLkxtkxcaMN8lw%2BNDTbOOtOY8Fq3wuGgINHHvdJ1Xli%2B%2FZaDElns18GLC1dO6tE1MiX89DwDeUo7XQJMgq9dI1Nt3oMwSsY1YCjXhG%2Bd6J5bAHGqdkK0XOJZPyB1VMxmaOF2e2FEeygCj7BX4K0PalMJnxKhoiKmUYDHpFTQKZpngb%2BsZzalOONLTRJ%2B1gQYUtRQ7gyxE4IsylzcvsMatuo%2FzE1AC3aBbA73hqN77dWjb5mr2H4%2B4iTsZZengd2ymoaafkOzTh8xHusBLlbVU%2FpBNKbczJkub69ltmABSeso8L6nTDXM1u0%2BlN%2FNwBlq8axGNkGUfoVQy%2BLlZ8S13YcFyzSdjYth1OJPjEvoVXLmKGHdzd3xrwzrsAwv73WyQY6pgHScGg8PrFY7eDarpXiOQahUTAbLiFsxMuEIKIpjN17U50RLIUKkPK9SaA8roOvjUyl5sboAgvttVK8fR55vjGzZQ62PMV7r55E5SZkpUSsljtRCj5R7kOpa8GWT1XgCvkTHJhZfCzYf3b4VLz9fbSxXaxeCzFQNf1PjrhlM3K2xUn2hNiy5e9cZSo2VUjLB7Xb4kem8%2B09XPdKIN92aQgyb6giEfWn&X-Amz-Signature=6268e60a57b8aa1a9607176f00489739fa9a3d865601dd828c70434c4df48318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
