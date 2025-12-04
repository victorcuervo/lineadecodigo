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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY45RLEW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIHT5XTKILy9eGjc8qBsgtVqGQsIZtCpmqjl8Z7gfy170AiEA2b4gb7UGsAUNpFoPBApUjsu2yYkGzcbrnWvZyoHUo10q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDITKIOxGoCksVBJfPircA0b7QZ35b994n3ZKEozmYTpDsr8Y7QVac6Q134XTsJLorvr8qX5y25BMBMOPX2QuucIR4xEuDgScNtyhDA8QkF6EWuox8fYN6biBRmIoV3vRvGfMb3B58U5D%2BUvXBzlQrA0KN5OURQytYd5%2F4QVtUcL97sALPJoVqF2mnSVipuAmNH6WgLIlDaypBy9SQQi58mGboPsbcQnhpZ%2BQ5ARPstqSmzwqe%2Bl5KfWgIo%2FKKOj4aCccTmgCWS%2F4HHYJfU4oWzexyaPbGGOI5q2%2FFxWptvKowOmwNK51HLwK5zKfU%2BfQ4McEui%2FoP86ULVxZEb1NewJylaBS3oP1PIHMWCi8704aGrGvFTSZhX7kqoBPc8gMHJIOxSL3MDJ3q3WCu2OjEB7VSlRNZ9tZZjlJDDW7GiJcTu5Ehm2GD8VAe7L%2BWQPICFb2jiU%2FN1Rem61R45LGHbHtPdtnyf8qt%2BvFsjSXjz2a5UwrTlaC9uecWqElqr%2FfTXjw3jTHZxvDxQINPapZ1QYArdfXMxeNKOK%2BIF%2BVT8KD8gSoKmtYiwgT1IzFIXC7QBjIKs%2FC1iEKF8rmRb%2B%2F37yZFzTkPcoNC5Ye5J5sYGO9Ul5ZTOxsTfob3QMp6SjvEYCUybF6tfahRejuMJjoxMkGOqUBuCR5CaG6b%2B%2FyLOB3Mmuw3DN%2FILJWUjNjC7roFoivBOIggzMWKej6Us3Ib89rXbupYKi4quUI6M0biebgHrFNj%2FM3JTTzO8Yk2qz7TjhL5bX6wlf%2FVxXRQ5rJ5SvSZFMqrKR8MikaRqR9uedrmxD2wxRCsDTYzyB7QD%2BYyr6yicr7mOsYe%2BLk6YpsaLP4V9Uung8ulkTxS3HoGWGB6ELjXHDgdjm%2F&X-Amz-Signature=8f1a044e1b48a0d384805d002adc893b716fe052f94a828a047eb876c11386d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY45RLEW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIHT5XTKILy9eGjc8qBsgtVqGQsIZtCpmqjl8Z7gfy170AiEA2b4gb7UGsAUNpFoPBApUjsu2yYkGzcbrnWvZyoHUo10q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDITKIOxGoCksVBJfPircA0b7QZ35b994n3ZKEozmYTpDsr8Y7QVac6Q134XTsJLorvr8qX5y25BMBMOPX2QuucIR4xEuDgScNtyhDA8QkF6EWuox8fYN6biBRmIoV3vRvGfMb3B58U5D%2BUvXBzlQrA0KN5OURQytYd5%2F4QVtUcL97sALPJoVqF2mnSVipuAmNH6WgLIlDaypBy9SQQi58mGboPsbcQnhpZ%2BQ5ARPstqSmzwqe%2Bl5KfWgIo%2FKKOj4aCccTmgCWS%2F4HHYJfU4oWzexyaPbGGOI5q2%2FFxWptvKowOmwNK51HLwK5zKfU%2BfQ4McEui%2FoP86ULVxZEb1NewJylaBS3oP1PIHMWCi8704aGrGvFTSZhX7kqoBPc8gMHJIOxSL3MDJ3q3WCu2OjEB7VSlRNZ9tZZjlJDDW7GiJcTu5Ehm2GD8VAe7L%2BWQPICFb2jiU%2FN1Rem61R45LGHbHtPdtnyf8qt%2BvFsjSXjz2a5UwrTlaC9uecWqElqr%2FfTXjw3jTHZxvDxQINPapZ1QYArdfXMxeNKOK%2BIF%2BVT8KD8gSoKmtYiwgT1IzFIXC7QBjIKs%2FC1iEKF8rmRb%2B%2F37yZFzTkPcoNC5Ye5J5sYGO9Ul5ZTOxsTfob3QMp6SjvEYCUybF6tfahRejuMJjoxMkGOqUBuCR5CaG6b%2B%2FyLOB3Mmuw3DN%2FILJWUjNjC7roFoivBOIggzMWKej6Us3Ib89rXbupYKi4quUI6M0biebgHrFNj%2FM3JTTzO8Yk2qz7TjhL5bX6wlf%2FVxXRQ5rJ5SvSZFMqrKR8MikaRqR9uedrmxD2wxRCsDTYzyB7QD%2BYyr6yicr7mOsYe%2BLk6YpsaLP4V9Uung8ulkTxS3HoGWGB6ELjXHDgdjm%2F&X-Amz-Signature=5df2a0ae1d10ce34cebf3b3a51c634736f5dc6430c7b2aa674f35d48dcf30b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
