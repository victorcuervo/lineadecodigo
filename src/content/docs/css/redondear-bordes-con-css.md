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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLTVEEM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BciMGj74SygmzX4yPkGwHGiLWyZBFJknSUIla%2FxYS5AIhAJ1gaUfAtd4Orgf4Eym8drj1Z61wBv%2FQSj%2Bm9HdXqThkKv8DCHoQABoMNjM3NDIzMTgzODA1IgybB2yx3Zh1RB%2BLfFoq3ANUIDcKrJmkcbt4KJ%2FZTD7doO%2B5hxSkl2KKg%2BZix12lENRuXhHoezsniXbUktJuLfu27iblXG0AGHUtg%2FtVfrHKjz2GiIdxMWU3NUcXs5cX2dYJ9qSUuhpCJd1fzxw86d7vSI5%2BmfvNnX%2BeS5oUThD7ekyOFDbnQ0nQbajmaeoErjCmZlEFn3pAij1WtNFMZEo3hoanLu7dXWWJXQCKIgAz8tCCuPEXC6%2F69fwvYOXqcWXt2B5vX%2F3%2F4oIf9utus6JiU%2B8QQjCazi2nq7kZt8K2hliEudcKXlOX7w8KIKXZHFkWdRgwJq88J%2BRwRL6Ejvmq5tn1P0DT4W9ScdOs4XwMA3kD%2Bf7%2BclDm50zIMN5Nc9NRlaJnBJRuKb5JyqsYQ9DsPKQLL%2BGHKrrmA6cEOkFdnv42HVAFJdI1dvDgNJPfNG%2FnYu6v%2BHz2%2BQnwTBdfZ%2B52lcwMP0P5is%2FtxYLj7HfgduKj4dpsL2xDoE9LntGHaYYFXBYcAqX5hfbtsSJ7UynPvAkXw7AD%2Bda0kl6Z8r1inb%2BRlcVnNc%2BgM4QCvjPu1tTWkXsCwLU6VRgkM%2Fc5kwOFqB12BCABlydwO3bqTMLa884kou5yHclallz6KaFDlsHD9P4H1EEG%2BXSbDzDvt9HJBjqkAbPzSFRFZ292ALIbibfIElAonXdOHU%2Bmg8iGR1KY%2B9ZvVHM0O9TJeSNSuuqmhk7vE%2FjHg7LSwupkoERE%2FAoeaMOnkw5C4b5da37JuJ5gOwnFl0ulGW%2FrsoDwoyCUb8MpqBrX7gFIc3gGW29CavXo2ZIgqkBqZan7SSd27otC3ZqONFnF0taR9G1ZU%2BrvXDX%2B5s1pPSLNxp%2BaqZ0bQJl%2BV0A%2BD9rH&X-Amz-Signature=06e63a285c24632a0c98d668c8a1a532fb7af77588411907cfbb6c1e8940aae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLTVEEM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BciMGj74SygmzX4yPkGwHGiLWyZBFJknSUIla%2FxYS5AIhAJ1gaUfAtd4Orgf4Eym8drj1Z61wBv%2FQSj%2Bm9HdXqThkKv8DCHoQABoMNjM3NDIzMTgzODA1IgybB2yx3Zh1RB%2BLfFoq3ANUIDcKrJmkcbt4KJ%2FZTD7doO%2B5hxSkl2KKg%2BZix12lENRuXhHoezsniXbUktJuLfu27iblXG0AGHUtg%2FtVfrHKjz2GiIdxMWU3NUcXs5cX2dYJ9qSUuhpCJd1fzxw86d7vSI5%2BmfvNnX%2BeS5oUThD7ekyOFDbnQ0nQbajmaeoErjCmZlEFn3pAij1WtNFMZEo3hoanLu7dXWWJXQCKIgAz8tCCuPEXC6%2F69fwvYOXqcWXt2B5vX%2F3%2F4oIf9utus6JiU%2B8QQjCazi2nq7kZt8K2hliEudcKXlOX7w8KIKXZHFkWdRgwJq88J%2BRwRL6Ejvmq5tn1P0DT4W9ScdOs4XwMA3kD%2Bf7%2BclDm50zIMN5Nc9NRlaJnBJRuKb5JyqsYQ9DsPKQLL%2BGHKrrmA6cEOkFdnv42HVAFJdI1dvDgNJPfNG%2FnYu6v%2BHz2%2BQnwTBdfZ%2B52lcwMP0P5is%2FtxYLj7HfgduKj4dpsL2xDoE9LntGHaYYFXBYcAqX5hfbtsSJ7UynPvAkXw7AD%2Bda0kl6Z8r1inb%2BRlcVnNc%2BgM4QCvjPu1tTWkXsCwLU6VRgkM%2Fc5kwOFqB12BCABlydwO3bqTMLa884kou5yHclallz6KaFDlsHD9P4H1EEG%2BXSbDzDvt9HJBjqkAbPzSFRFZ292ALIbibfIElAonXdOHU%2Bmg8iGR1KY%2B9ZvVHM0O9TJeSNSuuqmhk7vE%2FjHg7LSwupkoERE%2FAoeaMOnkw5C4b5da37JuJ5gOwnFl0ulGW%2FrsoDwoyCUb8MpqBrX7gFIc3gGW29CavXo2ZIgqkBqZan7SSd27otC3ZqONFnF0taR9G1ZU%2BrvXDX%2B5s1pPSLNxp%2BaqZ0bQJl%2BV0A%2BD9rH&X-Amz-Signature=a34d46dca741d2249371fe077bf266ba3aa14658980b48c03651124c93f4756f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
