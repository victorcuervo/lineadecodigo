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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625X4FQOD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNtR4dKe%2FW4xBKw9AUzcateQogJGInQXQtCYC%2BAwShhAiEAtX40IaLuZfAq5gtxSmc0K5YJOHazfuWMtnYIlKWcpDEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNrGP7zlL9Uw4HoLsSrcA4SNZuarImQ%2FK6uPsoYsrSU%2BnHXKq1tYJcvv%2ByZKYqlNmLMeKdSOYe3UFPzMIfb%2FMMpjTWiOr6P1PHwmY37UFU%2FhyWg1JI4IIgzE5nW5yWr5%2FXcl%2Fl8XMVHobY5pJhZ48MVV38DBbwfxXCnzjUyW14hoQMHAHgWxw9Y19uvRQrlYdF8QLVtXKFKavKlWm6k2v3xKxqJH2axPA76clqNY0HIy8VMvZWn31WanIJ9oWjvXHueK9kX0LSWKmr8UIECEGVrTr%2B6oTM9n3ySmxL%2FyJUHL%2BqJ%2BlksgOAPeCYbAgrqf9mZBJKx4qrQc1feiyYABz5yT9XlW987xQs2%2F9rFd7OkDOYsO0jdnwZjWTtwNXX2Iee15465S%2FjTFZDXYjUkYzoso7pO4Pr64sc1Ure9lBRAI5UUxIuZELu5W6tqyHi4pbF0cpwKntT8Qg5tdvzPAIpNIVeJJIfOX%2BdFGOxNCdeiz7nmQDzrRsswlWNun1X8c1Q9PDGxIDyLf2cQ78VbjuP9hngCe%2BKO7ehM%2F7L6qTafIxEVycZ63GozbTrh%2BmvIzw%2FYSHugbML4UbPz20O3DzmaEuz7WENzxWj6ns24z4Iv0r1pcDFR9LGYxXflvzW863N6EvXfW7xhkuhYWMLzvicoGOqUBZ2k2Z9Rb8%2BfI3LpCGOks2h9Hp3Bw2Q6Gh0gE1nWdSKYbSuwrhsCXFxvfCAuTI0r3TcZgjefA71xf8mzhY0hlrgxUQn%2BynAzRTBDoux8dmp2%2FRrHK%2Fo7uF9h96QBPpTZOpYpNAuPjSnymfXOqhim%2FdJ9p7jL8DtnBDn2N3JVCWoCzpJtFKjfb7Yq%2BhAO1VlCLlEzGrwZi0r36ZC1aCcJb1uKRQcHX&X-Amz-Signature=51fe87b915130bc26578b6eb13b441dfb46748a8fab55e066e870fac43e99483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625X4FQOD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNtR4dKe%2FW4xBKw9AUzcateQogJGInQXQtCYC%2BAwShhAiEAtX40IaLuZfAq5gtxSmc0K5YJOHazfuWMtnYIlKWcpDEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNrGP7zlL9Uw4HoLsSrcA4SNZuarImQ%2FK6uPsoYsrSU%2BnHXKq1tYJcvv%2ByZKYqlNmLMeKdSOYe3UFPzMIfb%2FMMpjTWiOr6P1PHwmY37UFU%2FhyWg1JI4IIgzE5nW5yWr5%2FXcl%2Fl8XMVHobY5pJhZ48MVV38DBbwfxXCnzjUyW14hoQMHAHgWxw9Y19uvRQrlYdF8QLVtXKFKavKlWm6k2v3xKxqJH2axPA76clqNY0HIy8VMvZWn31WanIJ9oWjvXHueK9kX0LSWKmr8UIECEGVrTr%2B6oTM9n3ySmxL%2FyJUHL%2BqJ%2BlksgOAPeCYbAgrqf9mZBJKx4qrQc1feiyYABz5yT9XlW987xQs2%2F9rFd7OkDOYsO0jdnwZjWTtwNXX2Iee15465S%2FjTFZDXYjUkYzoso7pO4Pr64sc1Ure9lBRAI5UUxIuZELu5W6tqyHi4pbF0cpwKntT8Qg5tdvzPAIpNIVeJJIfOX%2BdFGOxNCdeiz7nmQDzrRsswlWNun1X8c1Q9PDGxIDyLf2cQ78VbjuP9hngCe%2BKO7ehM%2F7L6qTafIxEVycZ63GozbTrh%2BmvIzw%2FYSHugbML4UbPz20O3DzmaEuz7WENzxWj6ns24z4Iv0r1pcDFR9LGYxXflvzW863N6EvXfW7xhkuhYWMLzvicoGOqUBZ2k2Z9Rb8%2BfI3LpCGOks2h9Hp3Bw2Q6Gh0gE1nWdSKYbSuwrhsCXFxvfCAuTI0r3TcZgjefA71xf8mzhY0hlrgxUQn%2BynAzRTBDoux8dmp2%2FRrHK%2Fo7uF9h96QBPpTZOpYpNAuPjSnymfXOqhim%2FdJ9p7jL8DtnBDn2N3JVCWoCzpJtFKjfb7Yq%2BhAO1VlCLlEzGrwZi0r36ZC1aCcJb1uKRQcHX&X-Amz-Signature=8e9a7e8b47f415d5af8b4a21c6b304d2a976e073840fecf1d54c68094464d624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
