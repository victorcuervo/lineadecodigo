---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V5DFRTV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCtHmGe2%2B3kYkOXnoyuissmKoRAOrU6TE3oQOofNqZ5AgIhAIcHBveAZFdTLZlNw5gOCpJTAIoY%2FWmEPOXlbOPjir4RKv8DCEcQABoMNjM3NDIzMTgzODA1IgwdCZTKAHjxlqXfBNgq3AMn6k3SUXsQJdRALFGG8ZeH8QYDNreuMKo8ftQxOpJYEluYnLQEEfNXC65mB3Y2Ej6S39deQuLHdLU3bKP%2BTd1Oj8sBbO0J8gfWn9%2B1qsugXx%2BZd9X8SozxShcu5fJosPW4WeNRvcFypygLA85aBGb2zcPOI8eivnHcIYRez2eNevcIVG79W5WJlqSAZ%2BjghmNjfTl%2BODsJXzZBeCUVZa0q0q7scC2TRkIICAw9iqcvNVSS7L5N9B7nWgFqcU3wPaAok3wjefW5MdUKWaAqXPoUeMjivbF4bWVh5tgVlwjShJOdDZxXxFT15S2Jz54J8AYJFu1gEOeR6PvE7BhF06VKwJBxNTKRHbOZryr6eoB00PFprs%2FNKj%2FFCnuCHX2AZUh7Oc21tJTbzT%2BTIlnRSlQvCMbs76bxPb4uu7cRWLxwqXSFgNZKP2ifQ48tYKsNgGl%2BJn%2F1cvhdft5Gq4qRtou4DHzB4HUfNLhUSJGFXMrIUSJRUcErExstvXC0D2YdPduduU4s9iS%2B60CkJIgijDz2dIqf2WmkhPLQH9WchrLu6jOcuJ06t5l7YHexOb4ak%2B0GK2BX0rfOACr%2F1ErxyxZz9uVEoua8uOaeCl2YvEZTQwk%2B0IRHol8CNsP0PjCeocbJBjqkAbColE5sCk1u2Lmj7LZ7%2BKeb3BwqWoP4NISmbo2Fv%2F8DT4ICisgwyAoY5ByzDT%2BpNMCeaMfOu4N8C6RdI0EDF%2Fu4AjRuep9GdjYCkV9V%2BaQPwxXv8pF3bbSpTi3JjBWj0kgTiOpuSPWHIHYmxCFuimYtiUnYglPwW2FrKa9IV3ujDxHEUsyCalikvUM7AMIxIqKx3IbiAFoSwMZBhxNcPy%2ForR%2BO&X-Amz-Signature=14e65d92d9c1cfbda6de4891985b9266f3476098ff082ce6aa0e2ed930b688f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V5DFRTV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCtHmGe2%2B3kYkOXnoyuissmKoRAOrU6TE3oQOofNqZ5AgIhAIcHBveAZFdTLZlNw5gOCpJTAIoY%2FWmEPOXlbOPjir4RKv8DCEcQABoMNjM3NDIzMTgzODA1IgwdCZTKAHjxlqXfBNgq3AMn6k3SUXsQJdRALFGG8ZeH8QYDNreuMKo8ftQxOpJYEluYnLQEEfNXC65mB3Y2Ej6S39deQuLHdLU3bKP%2BTd1Oj8sBbO0J8gfWn9%2B1qsugXx%2BZd9X8SozxShcu5fJosPW4WeNRvcFypygLA85aBGb2zcPOI8eivnHcIYRez2eNevcIVG79W5WJlqSAZ%2BjghmNjfTl%2BODsJXzZBeCUVZa0q0q7scC2TRkIICAw9iqcvNVSS7L5N9B7nWgFqcU3wPaAok3wjefW5MdUKWaAqXPoUeMjivbF4bWVh5tgVlwjShJOdDZxXxFT15S2Jz54J8AYJFu1gEOeR6PvE7BhF06VKwJBxNTKRHbOZryr6eoB00PFprs%2FNKj%2FFCnuCHX2AZUh7Oc21tJTbzT%2BTIlnRSlQvCMbs76bxPb4uu7cRWLxwqXSFgNZKP2ifQ48tYKsNgGl%2BJn%2F1cvhdft5Gq4qRtou4DHzB4HUfNLhUSJGFXMrIUSJRUcErExstvXC0D2YdPduduU4s9iS%2B60CkJIgijDz2dIqf2WmkhPLQH9WchrLu6jOcuJ06t5l7YHexOb4ak%2B0GK2BX0rfOACr%2F1ErxyxZz9uVEoua8uOaeCl2YvEZTQwk%2B0IRHol8CNsP0PjCeocbJBjqkAbColE5sCk1u2Lmj7LZ7%2BKeb3BwqWoP4NISmbo2Fv%2F8DT4ICisgwyAoY5ByzDT%2BpNMCeaMfOu4N8C6RdI0EDF%2Fu4AjRuep9GdjYCkV9V%2BaQPwxXv8pF3bbSpTi3JjBWj0kgTiOpuSPWHIHYmxCFuimYtiUnYglPwW2FrKa9IV3ujDxHEUsyCalikvUM7AMIxIqKx3IbiAFoSwMZBhxNcPy%2ForR%2BO&X-Amz-Signature=0565cadce798d692092eccbbfb4440328363ce876cd1a6264e295a81fbf21209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
