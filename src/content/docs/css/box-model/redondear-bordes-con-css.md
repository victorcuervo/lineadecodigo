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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDX4LYF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiwE1IdfuBpk%2FNLgWuK7o3ckXyKihm5wltHyyNPdhdbAiBERCp0NfPwEDAma7VtA4HEHjbN%2Fyr%2B70J1yWlOBQeR3yqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj4acaOpfk97zQB87KtwDvyX8QnKZk1YzWBgYB2UwnzNsVM%2BidXDP2fYId4pdtxAvoN%2F2ZIy7FO2AhYpBxE8klhjv0qBe1KF%2Blj0nxtryys6j4lSV7049J6v8mPpCDPfc22Ktc3Z8UOj7h5Ch%2FV4VijmPX90uS7EV6BTb1%2FMZOlsIEBLYXe3zjO5m5kSkWjgL8iQ2xbzan4uRpTbpLlbZokic1Z0Dpw9Fw7RBH32qk0VE0%2B%2B7NiYcz35lczOkk9CLh4wKILdpkACZ%2FrY6jCIRutO5J1La4MwWDpiIlXftmk4z%2FyV7LliJMiYj%2FDuT1RAGmcnO1VMoMBjahxzxjc%2F%2BnB%2Fz10ZVNliykiqjip%2BWLQgxMZKY%2FrN5x%2FN%2BhxcMQvoboJwq%2BrOAox0dP8QjSPeL2LRr8pW5mJiUwQONwaR5Wplt3kptRjSukMtGGJmTfde5Dtgc71x%2BMa8oXybzU1K0u%2BQl6JgwjGDDCDtnqgniCDaoa5IZYnaOGqhnj3bVQxDNa%2Fbhu%2BL%2Fl54PAged7F5Preo1ZLooB1hGn9tucGQKVyLclQGcC8oMVhpASNirM47cILEKWSm%2FIa%2FR2hvWhqzfRZdDxm9BehXW0oZY2mNkHBfjsMzap0Iejv1IY7bGyhlWKfDXP0o8bnKZkwsw24qMygY6pgGFUsItHz0YcrFbxxF1jjjfh6n1U7fX7BcYW2OlwdoGPs1Zy1W9Wr%2FCHThhN3VgOcDpI3zz%2FJJLqwMzIwzmtUCrVL4xSyfkyNB%2F7k4EfCH9%2B%2FGmtq0Aw3pogzGAJ4INWmvIULCvBRD7lTJB0u%2BESqj2Hl20DmrzxKcvD9Df8DzBDYidVKsj13ROJYr1NdG9ZMttCFEUymZRiR2vd3rBDzkCmE5sHu5e&X-Amz-Signature=6f9c753b142500e75ec42dd32633f4c50d53d9b44b68948b3501b17aa17e0e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDX4LYF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiwE1IdfuBpk%2FNLgWuK7o3ckXyKihm5wltHyyNPdhdbAiBERCp0NfPwEDAma7VtA4HEHjbN%2Fyr%2B70J1yWlOBQeR3yqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj4acaOpfk97zQB87KtwDvyX8QnKZk1YzWBgYB2UwnzNsVM%2BidXDP2fYId4pdtxAvoN%2F2ZIy7FO2AhYpBxE8klhjv0qBe1KF%2Blj0nxtryys6j4lSV7049J6v8mPpCDPfc22Ktc3Z8UOj7h5Ch%2FV4VijmPX90uS7EV6BTb1%2FMZOlsIEBLYXe3zjO5m5kSkWjgL8iQ2xbzan4uRpTbpLlbZokic1Z0Dpw9Fw7RBH32qk0VE0%2B%2B7NiYcz35lczOkk9CLh4wKILdpkACZ%2FrY6jCIRutO5J1La4MwWDpiIlXftmk4z%2FyV7LliJMiYj%2FDuT1RAGmcnO1VMoMBjahxzxjc%2F%2BnB%2Fz10ZVNliykiqjip%2BWLQgxMZKY%2FrN5x%2FN%2BhxcMQvoboJwq%2BrOAox0dP8QjSPeL2LRr8pW5mJiUwQONwaR5Wplt3kptRjSukMtGGJmTfde5Dtgc71x%2BMa8oXybzU1K0u%2BQl6JgwjGDDCDtnqgniCDaoa5IZYnaOGqhnj3bVQxDNa%2Fbhu%2BL%2Fl54PAged7F5Preo1ZLooB1hGn9tucGQKVyLclQGcC8oMVhpASNirM47cILEKWSm%2FIa%2FR2hvWhqzfRZdDxm9BehXW0oZY2mNkHBfjsMzap0Iejv1IY7bGyhlWKfDXP0o8bnKZkwsw24qMygY6pgGFUsItHz0YcrFbxxF1jjjfh6n1U7fX7BcYW2OlwdoGPs1Zy1W9Wr%2FCHThhN3VgOcDpI3zz%2FJJLqwMzIwzmtUCrVL4xSyfkyNB%2F7k4EfCH9%2B%2FGmtq0Aw3pogzGAJ4INWmvIULCvBRD7lTJB0u%2BESqj2Hl20DmrzxKcvD9Df8DzBDYidVKsj13ROJYr1NdG9ZMttCFEUymZRiR2vd3rBDzkCmE5sHu5e&X-Amz-Signature=85393f1fd0314abf24928a0f064cc62d85987102583c6e6bc89299e653b610a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
