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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDGNPAYX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHlnQkhZIwIreErF0c1%2FL1y2uLx7ozYA0X%2FxhAU83LhAIhALIQeL%2BBUnEfNC8cjZLkUvXhAVpwdmn5364JHx7yeXq%2BKv8DCHIQABoMNjM3NDIzMTgzODA1IgxVHyfyUwHv3lg%2BljAq3ANVLPX3gqefGdyh43TPLqod6B6dMlVMsZiiT2Cd2%2BisvzqeZg%2B5yKz%2FHNp%2BGwBbPBJs0Oje9TmzpsLhYDsfNewVR7KCqj7DL4VrnLYQIs6F6fBmD1pRk8MY1Cpyqsi1blHo%2FtXarEeWGK8Hc1EPWS2MlkpgAZojRB3XqhXw9dR6S%2FJTB5ytS9CO4LAdU%2Bh2y5WJ4IP2q8AwLxklJFL%2FxqolA15z7dnfqry%2BAxNzZiCAnmcS21kLvG8WKxETDXYwQINrJopA5zcCKrkpUvSOD5UID5gzH27AVizI1q77zQaszC%2BDW9KQOqpI1MQUCRzN7QO6ZrLG%2ByUk6kjeWDUxBP4sUe1M7%2B19JCEKoCXwSaPLhqBifJMfI6zqDiO3H9ZHSjLyt%2FDZoHqCQVC%2FroWzqFeICdsIf8qO1owYwLYpbV7wwiuhoY7cIqciUINoJdenupFEEySor90cZ7xsUgTXbMtOsGnDt0XOpMhTT3mSlw5bkB4S%2FRWuY0hNRTuKfXsqQPYtbkn8HbAjP0kUpr9XWueUCzDsmjOPq2UZ7P3k0I4unRLLCxhAQs0fu4NU6wrzGIecWexXRPfsbJH6EqSZlEuLDSCzKKxfvAGA3dlm8JZ5b3LfQFJ8hb6nW8UfDjDk%2B4fKBjqkAVeD4WvktDF%2BAuu4Tufz0R0tBF%2FtUTtzGSZy1le4puUZA4EcCZHmC1SkKKLWoCJtq0YpPnSq%2FnrbOjBiOwGSYLG1R68IAEDebtqR29Fnq%2BwoJr2psWVqlzwTSaIx%2BeoHCLknW2uYqBKkT%2B36GC76wqRBZw53IWsyxCSgSDNTGEOd9RJ8U9LMYP8pqCRKg%2BCFP8JgQazahjdarxz5McrnXKGWh7Ji&X-Amz-Signature=4218f99458fcd6a9b8fd9a246f24ff241809ef460c611e4e0cc5b42eb9daacd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDGNPAYX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHlnQkhZIwIreErF0c1%2FL1y2uLx7ozYA0X%2FxhAU83LhAIhALIQeL%2BBUnEfNC8cjZLkUvXhAVpwdmn5364JHx7yeXq%2BKv8DCHIQABoMNjM3NDIzMTgzODA1IgxVHyfyUwHv3lg%2BljAq3ANVLPX3gqefGdyh43TPLqod6B6dMlVMsZiiT2Cd2%2BisvzqeZg%2B5yKz%2FHNp%2BGwBbPBJs0Oje9TmzpsLhYDsfNewVR7KCqj7DL4VrnLYQIs6F6fBmD1pRk8MY1Cpyqsi1blHo%2FtXarEeWGK8Hc1EPWS2MlkpgAZojRB3XqhXw9dR6S%2FJTB5ytS9CO4LAdU%2Bh2y5WJ4IP2q8AwLxklJFL%2FxqolA15z7dnfqry%2BAxNzZiCAnmcS21kLvG8WKxETDXYwQINrJopA5zcCKrkpUvSOD5UID5gzH27AVizI1q77zQaszC%2BDW9KQOqpI1MQUCRzN7QO6ZrLG%2ByUk6kjeWDUxBP4sUe1M7%2B19JCEKoCXwSaPLhqBifJMfI6zqDiO3H9ZHSjLyt%2FDZoHqCQVC%2FroWzqFeICdsIf8qO1owYwLYpbV7wwiuhoY7cIqciUINoJdenupFEEySor90cZ7xsUgTXbMtOsGnDt0XOpMhTT3mSlw5bkB4S%2FRWuY0hNRTuKfXsqQPYtbkn8HbAjP0kUpr9XWueUCzDsmjOPq2UZ7P3k0I4unRLLCxhAQs0fu4NU6wrzGIecWexXRPfsbJH6EqSZlEuLDSCzKKxfvAGA3dlm8JZ5b3LfQFJ8hb6nW8UfDjDk%2B4fKBjqkAVeD4WvktDF%2BAuu4Tufz0R0tBF%2FtUTtzGSZy1le4puUZA4EcCZHmC1SkKKLWoCJtq0YpPnSq%2FnrbOjBiOwGSYLG1R68IAEDebtqR29Fnq%2BwoJr2psWVqlzwTSaIx%2BeoHCLknW2uYqBKkT%2B36GC76wqRBZw53IWsyxCSgSDNTGEOd9RJ8U9LMYP8pqCRKg%2BCFP8JgQazahjdarxz5McrnXKGWh7Ji&X-Amz-Signature=3b25ac1b7e4874a081d11437835763809ae3270127587749f163ea12742ffdc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
