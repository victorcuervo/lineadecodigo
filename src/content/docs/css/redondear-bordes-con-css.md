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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUUFDOQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZa2%2BboSxWaxRKpeyetf3o4l%2FyyOohWvlnGA4d35%2Fk3AiBp0M7xw5HENYZH5k7CPyPFOrClKdw2kwmvjhj%2Bu2yCuyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvUJIPiu28c7b6CbLKtwDsNrnKirP93Vv%2BPl3q7cAcP9OilDbJIjldu0wBBH1mHUk2VY8HmEm4FPB6ZCLYa%2BFmnlYgA1Hugv1q2%2B6FoFJGOpzBDVl34bfcXKOg9kPDZRMnkd5jDbRJ2yUPLwIu9PXpgUj4gjZW1Dz4%2B9XmR73xbNVctnBktYVL71XyHbBJwII0M1fO5yDmrXhgxnSVCOTH1lkCmO62n9JJkXBa9XYi2J2uMZ7CPszj6igi1ujEa1Ms4M8NYtNay0kiAwOoywK1jnIEzfs351314so7KHeDFUp3EnnZX1%2FUECgiJWatWMymEsmZvf0uvXhLCQGYyTriNZChiU7Ugspvgae74%2Bx34ZccJgruBgCxAxWaikRuI%2F%2F42nEaHPiuzrnwFHID51gti1akdYBqpN8%2Ff0vLyzjdhenCGeNmMCCzY30vIwL2oZhn7ys4Sspck5XgDDOMBVPu3avch8rDFSWoOGjCobDRKC5PRpeLvXa%2BtXx4OrZSqx8iEIi8RErtIr9AgMhUMOeKPZP67tHzJDrqczR5xgPVmilcRTv5%2F%2Fn5maAwfyyB6HnoclqJar83Pt4pLPsh%2BpAViJoJf0YOoFcI1agoVzPlTTzHrQnd61lSL%2F0tuFj73oT01hpMxUgq6%2BYWw0w94TYyQY6pgGq2ZC1RkmosCsbq%2Bs8SXHvvdDWJc%2FZZfU7SXQPVq8YEoGAs1g9ZOFZDJmuhr6%2BrK8HSDiYWm5UwWamZKxSVkZN29V8lNxKdCVTSrdBychLF0RycuNp1bImIsLgSalnlHOVJDBBIYUl6OWq3ut1YBCSOe%2BgTZ2xYeNvKYffqlHYknt70oJPW2RXagYaODjfcJ6ez77FmW%2Ffl8J0dUyjI6bDWJfD%2F3p6&X-Amz-Signature=6efe652f3f3ad3b659822b9b21a7b571e00ec0038a9b40450dcabcf0c6ec2998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUUFDOQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZa2%2BboSxWaxRKpeyetf3o4l%2FyyOohWvlnGA4d35%2Fk3AiBp0M7xw5HENYZH5k7CPyPFOrClKdw2kwmvjhj%2Bu2yCuyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvUJIPiu28c7b6CbLKtwDsNrnKirP93Vv%2BPl3q7cAcP9OilDbJIjldu0wBBH1mHUk2VY8HmEm4FPB6ZCLYa%2BFmnlYgA1Hugv1q2%2B6FoFJGOpzBDVl34bfcXKOg9kPDZRMnkd5jDbRJ2yUPLwIu9PXpgUj4gjZW1Dz4%2B9XmR73xbNVctnBktYVL71XyHbBJwII0M1fO5yDmrXhgxnSVCOTH1lkCmO62n9JJkXBa9XYi2J2uMZ7CPszj6igi1ujEa1Ms4M8NYtNay0kiAwOoywK1jnIEzfs351314so7KHeDFUp3EnnZX1%2FUECgiJWatWMymEsmZvf0uvXhLCQGYyTriNZChiU7Ugspvgae74%2Bx34ZccJgruBgCxAxWaikRuI%2F%2F42nEaHPiuzrnwFHID51gti1akdYBqpN8%2Ff0vLyzjdhenCGeNmMCCzY30vIwL2oZhn7ys4Sspck5XgDDOMBVPu3avch8rDFSWoOGjCobDRKC5PRpeLvXa%2BtXx4OrZSqx8iEIi8RErtIr9AgMhUMOeKPZP67tHzJDrqczR5xgPVmilcRTv5%2F%2Fn5maAwfyyB6HnoclqJar83Pt4pLPsh%2BpAViJoJf0YOoFcI1agoVzPlTTzHrQnd61lSL%2F0tuFj73oT01hpMxUgq6%2BYWw0w94TYyQY6pgGq2ZC1RkmosCsbq%2Bs8SXHvvdDWJc%2FZZfU7SXQPVq8YEoGAs1g9ZOFZDJmuhr6%2BrK8HSDiYWm5UwWamZKxSVkZN29V8lNxKdCVTSrdBychLF0RycuNp1bImIsLgSalnlHOVJDBBIYUl6OWq3ut1YBCSOe%2BgTZ2xYeNvKYffqlHYknt70oJPW2RXagYaODjfcJ6ez77FmW%2Ffl8J0dUyjI6bDWJfD%2F3p6&X-Amz-Signature=86d3482f288dc23372542b09e4ea65dc2633261b81c401720958ef63570d5a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
