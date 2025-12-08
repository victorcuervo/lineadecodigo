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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6TRNU74%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBE0RJYPqiQiZBSTDKqteOyUA4j7WfY2%2Fdx%2Fzemy6RMuAiANodheCv3RlAEr4yjR5d6zlJfJ5387tYe%2Fz6s%2FCJPxUSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM66btWi9ffx7D0ItEKtwDMct6Y7OZdWqrMqcjFiLQwpeluJLedF8TXXGGnocxFK3Uq5kPQDFvEDoZYYIHpa%2FCDGWZ3Dueink3J2VQZc%2FBjTM%2BO0NDSjYgtYRlxqQyErQgOeAMzTufx5y1oZQY19rqpnr5udBiYWrMD4NkN%2FtKk%2FxXsVBpg5x%2FrkCJtQxZK39GFqrAkCz%2FiXsNjJ8872kHMVuLP2zvTSfr4xzMmtx%2FR32qlYwKBpzKJyVEJxHvnzYEBaiH7KpVrVnvdjHMZv0zJPeg8kQd4N8AAbPfFCbJfmCOv51P%2Flg0jOU7IpeV%2BlC%2BNq%2F93RNv24A6r9MzHroXYFnoU3pB7bLJpGK7lgoTRVFPl766cTw4UqRYynZXGcyYpsGqfIVL74JWrR%2FgtwkfPH%2BHf%2B7x%2BrYArHIPEd6TaJYwjctyz8f6azG8PHCxfXmffEuTd7KAqF9LjWma4F4m3u5DNtHRLTw%2FPMlus8l8kYXS8ZasoTHRJ2BMpeI0UOEd6wbC5DuNCXRORAAosK6hCb%2FQpmElH%2FtcQsOPPD3w2VrlsLvEGRIkLLzPpS3IoxPr4jDJaqFSt7KF0Jdkqn0qL3oCGZN8FR9GAg7CIbTZYth%2FN%2BUZQFKlQKPj%2F3l1YpmVVZaPkfZ7YBsDMGYwuu7ZyQY6pgFNUWN5bjbNGa6v4FL9ne07r3TdlsZ0w1jXKCcwMDDEyOAkLpBevFxurRbi1kiD0JkZLqD49mHH%2BkOv5J7qfRB3iqL5kCqIhTca45ku1fhRwh2nYeoZ2PrP96h52PRz8z0lNBX2VvQ2qQlyckhY3LHzNWhVgeKNZVpl3xDIe5TbZGIby0P%2BG3cvT0cV0X7J0Ci8TEqAuLnbuvWgVNj%2FQ60WzNnTigtR&X-Amz-Signature=eb7ee1f22cbb4a6726153274f8df1c1fa73c67fd16826f924f8de5a261a89af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6TRNU74%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBE0RJYPqiQiZBSTDKqteOyUA4j7WfY2%2Fdx%2Fzemy6RMuAiANodheCv3RlAEr4yjR5d6zlJfJ5387tYe%2Fz6s%2FCJPxUSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM66btWi9ffx7D0ItEKtwDMct6Y7OZdWqrMqcjFiLQwpeluJLedF8TXXGGnocxFK3Uq5kPQDFvEDoZYYIHpa%2FCDGWZ3Dueink3J2VQZc%2FBjTM%2BO0NDSjYgtYRlxqQyErQgOeAMzTufx5y1oZQY19rqpnr5udBiYWrMD4NkN%2FtKk%2FxXsVBpg5x%2FrkCJtQxZK39GFqrAkCz%2FiXsNjJ8872kHMVuLP2zvTSfr4xzMmtx%2FR32qlYwKBpzKJyVEJxHvnzYEBaiH7KpVrVnvdjHMZv0zJPeg8kQd4N8AAbPfFCbJfmCOv51P%2Flg0jOU7IpeV%2BlC%2BNq%2F93RNv24A6r9MzHroXYFnoU3pB7bLJpGK7lgoTRVFPl766cTw4UqRYynZXGcyYpsGqfIVL74JWrR%2FgtwkfPH%2BHf%2B7x%2BrYArHIPEd6TaJYwjctyz8f6azG8PHCxfXmffEuTd7KAqF9LjWma4F4m3u5DNtHRLTw%2FPMlus8l8kYXS8ZasoTHRJ2BMpeI0UOEd6wbC5DuNCXRORAAosK6hCb%2FQpmElH%2FtcQsOPPD3w2VrlsLvEGRIkLLzPpS3IoxPr4jDJaqFSt7KF0Jdkqn0qL3oCGZN8FR9GAg7CIbTZYth%2FN%2BUZQFKlQKPj%2F3l1YpmVVZaPkfZ7YBsDMGYwuu7ZyQY6pgFNUWN5bjbNGa6v4FL9ne07r3TdlsZ0w1jXKCcwMDDEyOAkLpBevFxurRbi1kiD0JkZLqD49mHH%2BkOv5J7qfRB3iqL5kCqIhTca45ku1fhRwh2nYeoZ2PrP96h52PRz8z0lNBX2VvQ2qQlyckhY3LHzNWhVgeKNZVpl3xDIe5TbZGIby0P%2BG3cvT0cV0X7J0Ci8TEqAuLnbuvWgVNj%2FQ60WzNnTigtR&X-Amz-Signature=bc5af8b4d419a2a9690549628224f9d7801de071a1d7da1e53406d3295a027d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
