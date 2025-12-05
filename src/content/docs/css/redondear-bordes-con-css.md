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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4Q2CLF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS3ZUnxTpJgOJ3J53mNqcf9yy5CSptrYvx1nxnDK6F0wIhAMI5v81GF%2Bzul4Sn7s7tXLWWKWLF3j0Pb6sZTHfEDl%2BVKv8DCE8QABoMNjM3NDIzMTgzODA1IgwHWxm%2B7038e5VJ2Yoq3AOYtVnXsitWadsfbuDCrf2bSiQOIPhFqO9kFE57Cg9w0ivMV70KJB5ZADjBBmegxeA7t%2BeU6Oy7BOvM1HoZn3mvHj6i%2Fb6g1xTBkuIYiBYMXadIJXXta7kz58OvC1gPUxHwL1%2FVqk5EkeH4b8mgIddW9JOZNjYEfTa2gG0ZC7wGeS4BMQ%2BX1Yj7krN68GIWKOv7jkRK9ieGAduxwPJ6bIWI3MBuWx0rBW15fgzUaXMXni1lsMtkEXQWZr%2FzAtas0bwGct3Jm%2FRK3PRDY7QvdlYQTMlfAN8ty5yZDss0xULXX8KSXAr5qyot9P8hL74Xe9qTcngFUskMdi0XmUQs4tOtKbtAA8v6vAOy1yeZZjU%2Fsc7XqmZS2ws1rwZA8ZIr8rtDE%2FEcYbkKdCVSCC2V1Z3bf7erHtIqvnOvqRSog%2B1e2y3gabC5sp%2FbgpbqlavciaShMwr86MpI0OvMKAWQ6mpJ8Y2oku7teI8vbVIsZ%2BUDI1Xf8BuOBuFw7BhUL2lQxM0WbDiWOnzLig5%2FxYkysgsczIxFxB6GB%2FfBBOXCSzUkK4LhLcEB6YCOy5JhDxRA1%2BK15DwVx8H4aTCyDH4buqDl9Cal7qPI9azjLe3BwasuFZ9nUM6JdQ2OndiRdjCejMjJBjqkAbYWpcucOd5vSBsb%2F7uDBPV%2BRrFy8FFNY8sDitweJjnoQ00cac%2FQNZqQGTyshKKrMB7PE2NbgrKCa6eMn4QNuQ0RXWJTxrRVci4wIHjMoeiXUy9obYA%2FU0pzEdORCzc6LCgT8IM9Sob1g%2FNyyelS6kJoKHGNjHk7bmk7oONzGP5i9Wne1YHrLFOmUPKcRxOqVHOjxK%2F4VxRLqxrygAz1YFpAibm5&X-Amz-Signature=f2476fc5bd81ec12897e5518f7e12dbef96a7c66fd4cfcc5a82ee00c7b60683d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4Q2CLF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS3ZUnxTpJgOJ3J53mNqcf9yy5CSptrYvx1nxnDK6F0wIhAMI5v81GF%2Bzul4Sn7s7tXLWWKWLF3j0Pb6sZTHfEDl%2BVKv8DCE8QABoMNjM3NDIzMTgzODA1IgwHWxm%2B7038e5VJ2Yoq3AOYtVnXsitWadsfbuDCrf2bSiQOIPhFqO9kFE57Cg9w0ivMV70KJB5ZADjBBmegxeA7t%2BeU6Oy7BOvM1HoZn3mvHj6i%2Fb6g1xTBkuIYiBYMXadIJXXta7kz58OvC1gPUxHwL1%2FVqk5EkeH4b8mgIddW9JOZNjYEfTa2gG0ZC7wGeS4BMQ%2BX1Yj7krN68GIWKOv7jkRK9ieGAduxwPJ6bIWI3MBuWx0rBW15fgzUaXMXni1lsMtkEXQWZr%2FzAtas0bwGct3Jm%2FRK3PRDY7QvdlYQTMlfAN8ty5yZDss0xULXX8KSXAr5qyot9P8hL74Xe9qTcngFUskMdi0XmUQs4tOtKbtAA8v6vAOy1yeZZjU%2Fsc7XqmZS2ws1rwZA8ZIr8rtDE%2FEcYbkKdCVSCC2V1Z3bf7erHtIqvnOvqRSog%2B1e2y3gabC5sp%2FbgpbqlavciaShMwr86MpI0OvMKAWQ6mpJ8Y2oku7teI8vbVIsZ%2BUDI1Xf8BuOBuFw7BhUL2lQxM0WbDiWOnzLig5%2FxYkysgsczIxFxB6GB%2FfBBOXCSzUkK4LhLcEB6YCOy5JhDxRA1%2BK15DwVx8H4aTCyDH4buqDl9Cal7qPI9azjLe3BwasuFZ9nUM6JdQ2OndiRdjCejMjJBjqkAbYWpcucOd5vSBsb%2F7uDBPV%2BRrFy8FFNY8sDitweJjnoQ00cac%2FQNZqQGTyshKKrMB7PE2NbgrKCa6eMn4QNuQ0RXWJTxrRVci4wIHjMoeiXUy9obYA%2FU0pzEdORCzc6LCgT8IM9Sob1g%2FNyyelS6kJoKHGNjHk7bmk7oONzGP5i9Wne1YHrLFOmUPKcRxOqVHOjxK%2F4VxRLqxrygAz1YFpAibm5&X-Amz-Signature=640564aa8f091b1f01ceba78a5e30912e0767443aabd6d246c439e82459a0031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
