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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVMAUKZ6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTRHaMrhNz85xBpFOfUSRYZFTYKrRBrs8rVTrV0vOunQIhAJ6UI5i1TtzESZ6fQgwwf5kqjeO7L%2F5ZiT6yfNJQ2axuKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCqvLVM1nQgOXw%2BX0q3ANaSPminJmvQ3IfzE%2F4Fx4fh6d3%2FKvX9mMADcDXtNY0zZs48JQkIqNrfzsS9Uvw6cRxlQ7dXVJA%2BbNsyJOMsh9kD%2Btx73sqpVMuCe1sobYYKNIWsF3HGKaPoLUJPXLw277eWtiCStzknGlb8CE4HQte1UM0J5dE5cemZN8z7D%2Fae5Pcb91yj8z4KdK6OgwJX0%2FcOFwEE3UHX7ZWe%2B%2FIy8R7nzRDmipByWzUHrYpssco96fp2TSedgcE%2BVWnrKn4TD32oSOj7mAcVjikqrtPETYR1MF1FURqW8DCJNILK%2B3Eldg37zMUk6ar8Z7%2Fv47GV9RhqONSlDr9tSHZF5w6oWsCNTv7Wkw2x0%2BjLuLDkqYxYlvJmK4MXlLW5uGTmHSiKscjbvuHpiYYhpHsK70NM54k19DeHEI6P5A7GvD%2BxPrpSq69GYmie2xBaHTKshDEQOHBGhU3eF79x%2FQm%2B3%2FH2%2Bknmk4cFJZar1pGGaZeYXoNNHHpmlHEpCSHDYW%2FO0iUaKFBvq7MV64Se3MgmAUCONvh2q6K6GHAwmU5oKpnZIAK2oiNuKmLyKUsxAfq5V%2BO%2Bm4AcVQcObyNcZ394fEUoyH0Am0LTlHxNGa8YxmQ7HzCCYIkUIkYkVR1RoFOtDCK89rJBjqkAbQOhcdihp7PVGje0HmUYdCI%2FGYy2uWPLQABAMUmzGPGRAkbgmi5R3SyKR9VWcyiVJLi7vi1tuhbZzyED3GTtnUAZ%2FPQWp10JHQuLOqnrwodEpbMgErS7t1K4t3Ja6LIXn2e1EjjJm4ZasPNXDJPa0FwPNpvbi4Zad519Dq%2Brg9hTsrVWyNpoWRvyXZnb7qWRAYV7nVYGJjwIrHmYA6tUl7F%2FMmQ&X-Amz-Signature=50d925400212c0664a7053bd4b152f2e4f3fc96dd236bc4bb47d9e2e5ba9e17f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVMAUKZ6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTRHaMrhNz85xBpFOfUSRYZFTYKrRBrs8rVTrV0vOunQIhAJ6UI5i1TtzESZ6fQgwwf5kqjeO7L%2F5ZiT6yfNJQ2axuKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCqvLVM1nQgOXw%2BX0q3ANaSPminJmvQ3IfzE%2F4Fx4fh6d3%2FKvX9mMADcDXtNY0zZs48JQkIqNrfzsS9Uvw6cRxlQ7dXVJA%2BbNsyJOMsh9kD%2Btx73sqpVMuCe1sobYYKNIWsF3HGKaPoLUJPXLw277eWtiCStzknGlb8CE4HQte1UM0J5dE5cemZN8z7D%2Fae5Pcb91yj8z4KdK6OgwJX0%2FcOFwEE3UHX7ZWe%2B%2FIy8R7nzRDmipByWzUHrYpssco96fp2TSedgcE%2BVWnrKn4TD32oSOj7mAcVjikqrtPETYR1MF1FURqW8DCJNILK%2B3Eldg37zMUk6ar8Z7%2Fv47GV9RhqONSlDr9tSHZF5w6oWsCNTv7Wkw2x0%2BjLuLDkqYxYlvJmK4MXlLW5uGTmHSiKscjbvuHpiYYhpHsK70NM54k19DeHEI6P5A7GvD%2BxPrpSq69GYmie2xBaHTKshDEQOHBGhU3eF79x%2FQm%2B3%2FH2%2Bknmk4cFJZar1pGGaZeYXoNNHHpmlHEpCSHDYW%2FO0iUaKFBvq7MV64Se3MgmAUCONvh2q6K6GHAwmU5oKpnZIAK2oiNuKmLyKUsxAfq5V%2BO%2Bm4AcVQcObyNcZ394fEUoyH0Am0LTlHxNGa8YxmQ7HzCCYIkUIkYkVR1RoFOtDCK89rJBjqkAbQOhcdihp7PVGje0HmUYdCI%2FGYy2uWPLQABAMUmzGPGRAkbgmi5R3SyKR9VWcyiVJLi7vi1tuhbZzyED3GTtnUAZ%2FPQWp10JHQuLOqnrwodEpbMgErS7t1K4t3Ja6LIXn2e1EjjJm4ZasPNXDJPa0FwPNpvbi4Zad519Dq%2Brg9hTsrVWyNpoWRvyXZnb7qWRAYV7nVYGJjwIrHmYA6tUl7F%2FMmQ&X-Amz-Signature=9536c5109c46d205584b59ed4d2fe8cdc6637236b6f0550f794038216435ff33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
