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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GMTWGO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDgnvvelslKYeeiutoBraWg%2Fs43K3HDpTLFYSL3VJemkAIhANNkCt%2Fd%2FkmMtmETQX%2BsUI1euVqwDtz2KqoLNDkrIVFDKv8DCEgQABoMNjM3NDIzMTgzODA1Igxr9BBi8O45gnIig4wq3AORco8%2FzUuTmmqrgQdgTA2G2CbIdwyLXCBz3VGUYKN6c2U8qTQjLyzps4%2B%2F8wYpDQHVYqr5YGiRTfkd1VyAje4XkB2oeYDX8Zp74U0YUwOSBGXPGAerLdK28FSoVBM%2BSYckZ%2FKqJNRu2ni187QjUiBvXEbVjFHnm7meU7kkJbV6wnvjY%2B344OX3W8uebEOhoOuk7TWC8yfZUL92fhvxflz2KG7WN7gAxT20RqIltdeCg4Ax64Pk%2Bgij4P5fklKb2g9cCnYzT1jnQR3xGakqCPPosj06EMYce%2FvTC5yJQl6t8hYa64ZlWV%2FzhtKNGdzjuM0hKlYPlo5BZIXnDiYDQCQWfUUu1DL0RElBCdb14LjnQYo0UhdpXK69luecs%2FFBPP749p%2B80JtcPv%2F2WDjO2grTXD9EwScX78HEYonz2A6FrgYNgVeh3lvN%2FZAWwLmzWYPUgfIlRxdR%2BYbWAXQxlqH%2BsEUFGD2LzXoaJObFuq16u9E3XhsFdrpQzFtGsV37n0KQfeUzm0CAy9Ym058H8tjtqC4t2jWZONB6MY8BMBKXuhDw3nOayoH3HrSi0U5ITiZBHgLn4ANk3j73XGYSkLyhq7FWxyjeuOk7GH2TVWsXICo3jzevvs1DlhBwdjCrv8bJBjqkAbhuBEdb4sjyGM929EnEqmOoev2omF3JpXd3UCrV%2B8CTPCqyuzjqutUwZNmN9ytKJ9Eq6StXmw1UYNv3fReBoBHVaZIaM9MhaDle1%2Bwe6JQHi0nlLO%2FJItQ63b6w9ppPfGdsaBPC95MmSS%2B76aGc7tsNCmv62Yixmhr%2BYZRjDQxW1koFJko8ylVWnwnQJZJTHSX9m1%2FMzr2nBqYYdSOTxpEtYMFo&X-Amz-Signature=651580933eb027a57ada2658be0d16dbaa856d08a7fc8aab5fa3137877eddef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GMTWGO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDgnvvelslKYeeiutoBraWg%2Fs43K3HDpTLFYSL3VJemkAIhANNkCt%2Fd%2FkmMtmETQX%2BsUI1euVqwDtz2KqoLNDkrIVFDKv8DCEgQABoMNjM3NDIzMTgzODA1Igxr9BBi8O45gnIig4wq3AORco8%2FzUuTmmqrgQdgTA2G2CbIdwyLXCBz3VGUYKN6c2U8qTQjLyzps4%2B%2F8wYpDQHVYqr5YGiRTfkd1VyAje4XkB2oeYDX8Zp74U0YUwOSBGXPGAerLdK28FSoVBM%2BSYckZ%2FKqJNRu2ni187QjUiBvXEbVjFHnm7meU7kkJbV6wnvjY%2B344OX3W8uebEOhoOuk7TWC8yfZUL92fhvxflz2KG7WN7gAxT20RqIltdeCg4Ax64Pk%2Bgij4P5fklKb2g9cCnYzT1jnQR3xGakqCPPosj06EMYce%2FvTC5yJQl6t8hYa64ZlWV%2FzhtKNGdzjuM0hKlYPlo5BZIXnDiYDQCQWfUUu1DL0RElBCdb14LjnQYo0UhdpXK69luecs%2FFBPP749p%2B80JtcPv%2F2WDjO2grTXD9EwScX78HEYonz2A6FrgYNgVeh3lvN%2FZAWwLmzWYPUgfIlRxdR%2BYbWAXQxlqH%2BsEUFGD2LzXoaJObFuq16u9E3XhsFdrpQzFtGsV37n0KQfeUzm0CAy9Ym058H8tjtqC4t2jWZONB6MY8BMBKXuhDw3nOayoH3HrSi0U5ITiZBHgLn4ANk3j73XGYSkLyhq7FWxyjeuOk7GH2TVWsXICo3jzevvs1DlhBwdjCrv8bJBjqkAbhuBEdb4sjyGM929EnEqmOoev2omF3JpXd3UCrV%2B8CTPCqyuzjqutUwZNmN9ytKJ9Eq6StXmw1UYNv3fReBoBHVaZIaM9MhaDle1%2Bwe6JQHi0nlLO%2FJItQ63b6w9ppPfGdsaBPC95MmSS%2B76aGc7tsNCmv62Yixmhr%2BYZRjDQxW1koFJko8ylVWnwnQJZJTHSX9m1%2FMzr2nBqYYdSOTxpEtYMFo&X-Amz-Signature=852659251476db70371c69e0736a46aef0e50f055ee2d10022c694488f7657f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
