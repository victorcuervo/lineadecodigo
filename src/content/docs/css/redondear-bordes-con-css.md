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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634EUWHJW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFb%2BiunWI9vA9KZcgeSz0Y%2FB6EWKE1R3yKNs9%2FXHUlfAiA4HGFzzNEK1YGU%2BSTQI%2BH4f7VfStWznf0vyrWTtk3viiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXCWD2wlmgH%2BDm5EKtwDyqp9Y9EFqHVL6JbCSPg5rq%2Fivl7WpFfcgVbJ4IHd8vVTDmO0iyv9JhftRIV%2FGc4rX9y4MZS8eomk8b%2FXiyhcKbQt5RHR7TWcikcB1Xl8HizZ9%2FMreC6f3yucYyH%2BGDtPeDGmmllAWB5w65dStBpWjIZ%2Bz65prZyut2%2FUAhYTG5eUTfc5C%2Fi1JvYX5ux1D9ku6J0JIoZDaUy%2F3t1v97HsMlNQqvH9kiohfZ9uiWzwXaRV9BTerwWTwx%2B431G%2FhLQJQkYSC1MqaWG%2F%2BylRUsWOlFhBNLo%2BVYYMghutsn5dl2E2wLzXZ09mCjMk2AVCoaN1l7CWt173aC6XBRw6uRO2HJFrzb9UFAwo0M%2FIulKOvfrAKzTNWOUw08o6N1KxTZZqPrcMMfAxwiwORUPW55ihPvnmLQ2ziGxHIuofybPk%2BhR02%2BOPK3bjdqVn4jziknnE6uLS%2BWgAWxnOxKMieY8LrB7ZxShbqHJx3EiWKjkyRkqzi%2FvN4tbUB9GRUppvpo5xyHyFPvtL1imGw7smQFFVXVcxVrJAQXhhCM7KRICgd3gOgLvePp0LzE3u0yCfCXHkehHJxxHnKVQ0JCJcEyk3oDQi0K84FdUbnPznov0%2FYBWIuBD1cNEbe3ThE9EwmLTZyQY6pgFp4IuDVc%2FF%2FbYz0nvq7Wnr%2FQAOE%2F75E2%2BHOJC0uym%2F%2Blr06kvaQ6slQ%2Bdf0U9CbkE61uJDr5G6Jzf7LsewICYcf%2FEZLSUCyhucjuwHNsVMZKCrCVwRqe6l%2FCSB8tanH8u8b7k%2B6%2BkLtZ0mYhBBD8mYUBAbCVBV7ZWxsP%2FbzAMeQda2s3M8C6aPMCiOu%2BobxEpw4hQE4ivIgBghn70S%2FRYOMVulJJQl&X-Amz-Signature=d970da10cac843903f500296741f3681eb82584478f6857347c6a178b0d53a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634EUWHJW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFb%2BiunWI9vA9KZcgeSz0Y%2FB6EWKE1R3yKNs9%2FXHUlfAiA4HGFzzNEK1YGU%2BSTQI%2BH4f7VfStWznf0vyrWTtk3viiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXCWD2wlmgH%2BDm5EKtwDyqp9Y9EFqHVL6JbCSPg5rq%2Fivl7WpFfcgVbJ4IHd8vVTDmO0iyv9JhftRIV%2FGc4rX9y4MZS8eomk8b%2FXiyhcKbQt5RHR7TWcikcB1Xl8HizZ9%2FMreC6f3yucYyH%2BGDtPeDGmmllAWB5w65dStBpWjIZ%2Bz65prZyut2%2FUAhYTG5eUTfc5C%2Fi1JvYX5ux1D9ku6J0JIoZDaUy%2F3t1v97HsMlNQqvH9kiohfZ9uiWzwXaRV9BTerwWTwx%2B431G%2FhLQJQkYSC1MqaWG%2F%2BylRUsWOlFhBNLo%2BVYYMghutsn5dl2E2wLzXZ09mCjMk2AVCoaN1l7CWt173aC6XBRw6uRO2HJFrzb9UFAwo0M%2FIulKOvfrAKzTNWOUw08o6N1KxTZZqPrcMMfAxwiwORUPW55ihPvnmLQ2ziGxHIuofybPk%2BhR02%2BOPK3bjdqVn4jziknnE6uLS%2BWgAWxnOxKMieY8LrB7ZxShbqHJx3EiWKjkyRkqzi%2FvN4tbUB9GRUppvpo5xyHyFPvtL1imGw7smQFFVXVcxVrJAQXhhCM7KRICgd3gOgLvePp0LzE3u0yCfCXHkehHJxxHnKVQ0JCJcEyk3oDQi0K84FdUbnPznov0%2FYBWIuBD1cNEbe3ThE9EwmLTZyQY6pgFp4IuDVc%2FF%2FbYz0nvq7Wnr%2FQAOE%2F75E2%2BHOJC0uym%2F%2Blr06kvaQ6slQ%2Bdf0U9CbkE61uJDr5G6Jzf7LsewICYcf%2FEZLSUCyhucjuwHNsVMZKCrCVwRqe6l%2FCSB8tanH8u8b7k%2B6%2BkLtZ0mYhBBD8mYUBAbCVBV7ZWxsP%2FbzAMeQda2s3M8C6aPMCiOu%2BobxEpw4hQE4ivIgBghn70S%2FRYOMVulJJQl&X-Amz-Signature=19054eba2ce74df467ee58e2e1d06834206e87d7d1a6cd48933ab211885e0cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
