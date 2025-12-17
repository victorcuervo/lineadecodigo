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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFMNSDJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRB98Eq0w5IckQ1pHE78%2Bs7VliGZS6JyrKpw%2BjBhAPdAIhAN8JQmQGkIuZ0K4lbyTblW%2Bx5J0fc2kTuVCCpZOsTawMKv8DCHgQABoMNjM3NDIzMTgzODA1Igw7jYbtfemLP0%2FJzX8q3AMnq4s7y2WNnIC%2FVY%2BnLetfiH5XdVuuBoced0huZaN6AOiWpWH8qLs8IOf0CKtsXFnh6RPTkrKAwW78W33AWcA%2BENPQ05VH0SohfFfDGV8VZ3ihkUtQJYtl7UV7Rg2lkMiSMahwhR2GcUl8bJX7bgOfYeqpFzk0u8Z3k%2Bj8twpZH3LdwCregeAZizxxCbT2sfUxaDk63uLLy0KvB2EZkAS%2F2o0DKTnW8tPOtp2CNgGf3UzxbnESohSLcSbrOofjUcL%2BxFcpGihKEmtsK4u%2BH6Al4NXr%2FwEUh9HubSb%2Fl81CGReoGT5iPsvk0x3zVkhRbqtCEbz%2Fv1Wo4%2B9TZVJKuYDyMXE7U832dwpC%2BzBd9Zt9ZaqLHHLlSQ1h%2Fzd34uxlygQuAZVy9ubxaCXRAHWVog1CoUQu9j0tqx0LqEWjbv6CWb9cM%2BioK5Rw8Sykd6ZsLqcUpI40QKctR5Fm9shfm%2BBKsFeJAGbE%2FPSoqPa0mGNauBNznCEdXh%2BMlkSgsGr8qYPdFMza4EOZ4Tl8eNzFSqQ7KagYXcRuNlVw6BDiJpNS6PqIfjWOc%2BgC8vI0hEinkqadPt5A2zizQN8dkQ%2FdrwqjO2mcj17HP6XvX01fXorc6%2FGzs6hcM%2FBAeBqrUTDKnYnKBjqkAa7EMfI4zZhJYCt1NqErcw6mLCmC9lkKAPUME6Qq20ahxwAmJiBr1hcTe2Fgnq9S69Ig4GKnVRot11qyRnO%2FmSZHs8wBO1RyEYtQ7fRa%2BHuV9DesbL2jPCyV6BGJSLy7peFB1fqf2nc43ftyIyZWGMjCka0OQ5OpCTDnWXa5HdbOXjWMG%2FuCFey83ruGJuTk1QWKKs4v4FtD7VeVid7q%2BSahmt7Y&X-Amz-Signature=9b0090f77e0696e040cf1214bdb6b0a8e0c6fd361f8c138847127b9f62422e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFMNSDJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRB98Eq0w5IckQ1pHE78%2Bs7VliGZS6JyrKpw%2BjBhAPdAIhAN8JQmQGkIuZ0K4lbyTblW%2Bx5J0fc2kTuVCCpZOsTawMKv8DCHgQABoMNjM3NDIzMTgzODA1Igw7jYbtfemLP0%2FJzX8q3AMnq4s7y2WNnIC%2FVY%2BnLetfiH5XdVuuBoced0huZaN6AOiWpWH8qLs8IOf0CKtsXFnh6RPTkrKAwW78W33AWcA%2BENPQ05VH0SohfFfDGV8VZ3ihkUtQJYtl7UV7Rg2lkMiSMahwhR2GcUl8bJX7bgOfYeqpFzk0u8Z3k%2Bj8twpZH3LdwCregeAZizxxCbT2sfUxaDk63uLLy0KvB2EZkAS%2F2o0DKTnW8tPOtp2CNgGf3UzxbnESohSLcSbrOofjUcL%2BxFcpGihKEmtsK4u%2BH6Al4NXr%2FwEUh9HubSb%2Fl81CGReoGT5iPsvk0x3zVkhRbqtCEbz%2Fv1Wo4%2B9TZVJKuYDyMXE7U832dwpC%2BzBd9Zt9ZaqLHHLlSQ1h%2Fzd34uxlygQuAZVy9ubxaCXRAHWVog1CoUQu9j0tqx0LqEWjbv6CWb9cM%2BioK5Rw8Sykd6ZsLqcUpI40QKctR5Fm9shfm%2BBKsFeJAGbE%2FPSoqPa0mGNauBNznCEdXh%2BMlkSgsGr8qYPdFMza4EOZ4Tl8eNzFSqQ7KagYXcRuNlVw6BDiJpNS6PqIfjWOc%2BgC8vI0hEinkqadPt5A2zizQN8dkQ%2FdrwqjO2mcj17HP6XvX01fXorc6%2FGzs6hcM%2FBAeBqrUTDKnYnKBjqkAa7EMfI4zZhJYCt1NqErcw6mLCmC9lkKAPUME6Qq20ahxwAmJiBr1hcTe2Fgnq9S69Ig4GKnVRot11qyRnO%2FmSZHs8wBO1RyEYtQ7fRa%2BHuV9DesbL2jPCyV6BGJSLy7peFB1fqf2nc43ftyIyZWGMjCka0OQ5OpCTDnWXa5HdbOXjWMG%2FuCFey83ruGJuTk1QWKKs4v4FtD7VeVid7q%2BSahmt7Y&X-Amz-Signature=16e1778877f8e825e364b1d4daeae0277fdc5b35d850f52e6d35b7419037b481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
