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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGVYRJZB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5ZcSQQXoM08XvVDIG6t%2BGz5alSL3Oa9Fiz8Kq5E21XwIgLgKpe8xT7uPAicn1QhC9gNJzTeVryOOYIhuyjfHrpUQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBrZ%2Fx3ZnVgZGy8mqCrcA6aPtnCKKu7luroUcEiMec5ruj%2Fcrlk5gNkK8DqnIKabxzJgwu233MJcHDmzALs%2B9kqCZOGASXFCt0Hp0NwvDDMqDt%2FjDWVleGYrSPBOSOpN%2FnsBBS1Lb%2Fn4HVj1vDV4lIuB1%2BE1xhEAV35W3LBS0ScMq81vZFDZO5ZgxqSBBazE%2B8S%2FMjKoQ9dfzMZvBdkZ%2FD39H235PexGOX6iGmUyOx5%2FachwCXBXRhAV5Q9mNK4waRuhGKQ7%2F5O8vme2Ey7wUeTarESHjbcIrRwei0LoLk5eys7TBH9%2BwQbOE79jhBt6CjmsiFnc5UCcGgD%2FOF05y16XIZeCMCMaf1ZniLUt%2FnBNVP1hyeIPczwda0D4%2BB1pwKRIrMW7ZhrHpFcOwVpNBIJmciz1eplrS35cXYLFHCv9eMQt%2BukROJgDWOuNhlHQqZY325o%2FAGYeZkgq2R7V%2Fq42ODLK6qDKa6VsG2JEx2KhnMK2aKFgCxKOqWl0vN4RvkSuXxRC5hqGJQBpBixbfGZWQiycoDIKUDjdDfahO%2FAQOe4CDgciGV5S%2Bkr%2BGppmMbbkOkUEZIUmeZe%2Fk8ICeV6KqGZ1Mog%2Buxbn%2F9FDKvY3ncN%2Bi8Mn%2BxIrYro3Xs33RWy0WhokhwJYDlvyMMrM0ckGOqUBQFNeNLb%2FBqW5gtFYx1vW2ZBmjbHYt1SIydU5OYTLIqAR49Xf7iwQanBfl%2BbURqlg%2FaoatvQm%2FBvs0MGMD421re%2Fj361BLE4r%2BAX5AJQaGcwW6EK5kuOd9hbG3JS4gTfGTGFv6JwnXfn65lQj3JboeVdY9umG8JKdqcxjVYL7CGwln4VQYwkxOk4x1jH96625xa6mPPWINzflFJ3ZHSDms4mykeOl&X-Amz-Signature=89b2f2b46c73770ceb082569c9693e4a952264454c01e1e6298a699605c2a814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGVYRJZB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5ZcSQQXoM08XvVDIG6t%2BGz5alSL3Oa9Fiz8Kq5E21XwIgLgKpe8xT7uPAicn1QhC9gNJzTeVryOOYIhuyjfHrpUQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBrZ%2Fx3ZnVgZGy8mqCrcA6aPtnCKKu7luroUcEiMec5ruj%2Fcrlk5gNkK8DqnIKabxzJgwu233MJcHDmzALs%2B9kqCZOGASXFCt0Hp0NwvDDMqDt%2FjDWVleGYrSPBOSOpN%2FnsBBS1Lb%2Fn4HVj1vDV4lIuB1%2BE1xhEAV35W3LBS0ScMq81vZFDZO5ZgxqSBBazE%2B8S%2FMjKoQ9dfzMZvBdkZ%2FD39H235PexGOX6iGmUyOx5%2FachwCXBXRhAV5Q9mNK4waRuhGKQ7%2F5O8vme2Ey7wUeTarESHjbcIrRwei0LoLk5eys7TBH9%2BwQbOE79jhBt6CjmsiFnc5UCcGgD%2FOF05y16XIZeCMCMaf1ZniLUt%2FnBNVP1hyeIPczwda0D4%2BB1pwKRIrMW7ZhrHpFcOwVpNBIJmciz1eplrS35cXYLFHCv9eMQt%2BukROJgDWOuNhlHQqZY325o%2FAGYeZkgq2R7V%2Fq42ODLK6qDKa6VsG2JEx2KhnMK2aKFgCxKOqWl0vN4RvkSuXxRC5hqGJQBpBixbfGZWQiycoDIKUDjdDfahO%2FAQOe4CDgciGV5S%2Bkr%2BGppmMbbkOkUEZIUmeZe%2Fk8ICeV6KqGZ1Mog%2Buxbn%2F9FDKvY3ncN%2Bi8Mn%2BxIrYro3Xs33RWy0WhokhwJYDlvyMMrM0ckGOqUBQFNeNLb%2FBqW5gtFYx1vW2ZBmjbHYt1SIydU5OYTLIqAR49Xf7iwQanBfl%2BbURqlg%2FaoatvQm%2FBvs0MGMD421re%2Fj361BLE4r%2BAX5AJQaGcwW6EK5kuOd9hbG3JS4gTfGTGFv6JwnXfn65lQj3JboeVdY9umG8JKdqcxjVYL7CGwln4VQYwkxOk4x1jH96625xa6mPPWINzflFJ3ZHSDms4mykeOl&X-Amz-Signature=3b04672926ddc57509105156fe477547c9d0251c336bea6304b9738bfff9191b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
