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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCQS6OBY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBRKwYNJlSyC3sm%2FklJ0qauGwZ7dZm2sCd8k%2BVhkOhNwIhAM%2FhOEq8z85Q5pIQ%2FW2MUMXqErpBk03FQHH6%2F90Zq2UxKv8DCFUQABoMNjM3NDIzMTgzODA1IgyMaUDaDPQoP%2B1As28q3ANchMUdihrGpDw554wfa9e4quhRH7K8dvoOzzg17PqvvGCDM4K%2F%2BDiu7WLwW8ksslnRB24BPkdiGkj7LcG6xLKfU%2FT%2B5CB7yAw3YKmeY0ax8%2BdOjnKd6bGHAS%2BcTG2y0MclMT%2FEH16N%2BdzCxyR0jMMqWwnYgYX1G%2B1jZEnLcqCqkYu1tEroGjbnLfHOfZvJf8nCLU%2B6rY84JqqocbQQrsn3xUPbW9HQ1p%2BlDItnYAU%2BE3kpn%2BYx0S7WBZrB2pCuVOxr5Fo6FB3ejlLIxtzPhxjYMYC43kAd4kR3gAPd37nuqDYAOf1A61zsjtSp7T2574mA9WBj%2BOn2yMifwvEa2IHlq1rQe0I%2B1whkoSOCBADxp31eBu2qFDW3mkc71Z9Tn6MtJ%2BA%2BrW2SZwjbXkaFy4jTf0aXMzoh4ECwWNbYYgqWIBWjM3QYAor4OqTK0TqfYp8X7jWLhzoxwYERp41hdOOX3KPoEP3nj74QX09lfI%2BnZ9RUv%2FWj65CTbvmxQgUI8LWZ9AC8t89UIn5YGf676BCG3ljtEj9PtzKhEz7Z7LKPz5%2FjfsCPiZeE9xRBXa8FUN6fLmjXAQc6K6kB53ilj%2F5mcfsy%2FtLXQRkKhOqCYuivQGL%2BuReo2INeZaCkijCKrMnJBjqkAewTCeq25vadY9dAcxtwbp903Pki7wUk%2F5Z6WIBy1VlEFyZn5j1TTDEtLEuNiKiIq2w1AE%2FLg%2FZrYImY4tTLqIx9rUUWr%2FQp0GEnnNBhSe2AOLwCWc%2B0Oce6G6uh8DWq9EFLZ7M4ycCXTuG6HTBxSqHVI594JNUqCv1vHkiciqnheatHV0EL8IQ0zr1E5P%2BkFy1ACSzM8qhx0Q4y26Ki6EoYDUy%2F&X-Amz-Signature=354e11d604bbc0ed6738da39f3ca61174415e12bccbeea026d2c0b3325f08a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCQS6OBY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBRKwYNJlSyC3sm%2FklJ0qauGwZ7dZm2sCd8k%2BVhkOhNwIhAM%2FhOEq8z85Q5pIQ%2FW2MUMXqErpBk03FQHH6%2F90Zq2UxKv8DCFUQABoMNjM3NDIzMTgzODA1IgyMaUDaDPQoP%2B1As28q3ANchMUdihrGpDw554wfa9e4quhRH7K8dvoOzzg17PqvvGCDM4K%2F%2BDiu7WLwW8ksslnRB24BPkdiGkj7LcG6xLKfU%2FT%2B5CB7yAw3YKmeY0ax8%2BdOjnKd6bGHAS%2BcTG2y0MclMT%2FEH16N%2BdzCxyR0jMMqWwnYgYX1G%2B1jZEnLcqCqkYu1tEroGjbnLfHOfZvJf8nCLU%2B6rY84JqqocbQQrsn3xUPbW9HQ1p%2BlDItnYAU%2BE3kpn%2BYx0S7WBZrB2pCuVOxr5Fo6FB3ejlLIxtzPhxjYMYC43kAd4kR3gAPd37nuqDYAOf1A61zsjtSp7T2574mA9WBj%2BOn2yMifwvEa2IHlq1rQe0I%2B1whkoSOCBADxp31eBu2qFDW3mkc71Z9Tn6MtJ%2BA%2BrW2SZwjbXkaFy4jTf0aXMzoh4ECwWNbYYgqWIBWjM3QYAor4OqTK0TqfYp8X7jWLhzoxwYERp41hdOOX3KPoEP3nj74QX09lfI%2BnZ9RUv%2FWj65CTbvmxQgUI8LWZ9AC8t89UIn5YGf676BCG3ljtEj9PtzKhEz7Z7LKPz5%2FjfsCPiZeE9xRBXa8FUN6fLmjXAQc6K6kB53ilj%2F5mcfsy%2FtLXQRkKhOqCYuivQGL%2BuReo2INeZaCkijCKrMnJBjqkAewTCeq25vadY9dAcxtwbp903Pki7wUk%2F5Z6WIBy1VlEFyZn5j1TTDEtLEuNiKiIq2w1AE%2FLg%2FZrYImY4tTLqIx9rUUWr%2FQp0GEnnNBhSe2AOLwCWc%2B0Oce6G6uh8DWq9EFLZ7M4ycCXTuG6HTBxSqHVI594JNUqCv1vHkiciqnheatHV0EL8IQ0zr1E5P%2BkFy1ACSzM8qhx0Q4y26Ki6EoYDUy%2F&X-Amz-Signature=a498042960d91ff094ab9e1cfc76ba246ddfb529a5c87e2ca1e3c16a1f7da617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
