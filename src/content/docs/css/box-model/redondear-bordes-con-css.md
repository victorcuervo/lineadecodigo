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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6WTFXNJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzZqJtOdAuDfWXkOAKYd3NQTy2gDC0cW1Fig2KsOYjtAIhAM5cZ%2FSE6ri2Vm2ExarBFt4oqjxM%2BrVOpbMfZaCqF3u6Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxcDulZCwyrOi1%2BxoYq3AMeRnruC3OiJTuhJFlcU6ZXi1NavELKdA0R2zCefw10AeS8L7nFStkC%2F9hbS3uQYW4RCK56da8dFBXHY3iFWzJEERl27yjd%2BGyquifJ3y7f9XmeeK6XLgamYWNjAAw%2F4TtsSRNWdwSE7OYnb0iVkSPbRf0yTeSbSCWSTiUD%2ByLoRq6IE3nmIleyvjEKAFE2ZIvrwXuSZoeHsOxPXQuIq%2FjZKw3AP%2F5rFgZHXOHaMZTEHRc7W8pp78uPuayt7A5LmaxLT9bGvNLCym1v9AyfqhjMgGUSEdxJNHKqUkOiVEhHfr7tBA6vcKMak2ZX2laJqVsVLrV54vxTD40Oz%2Fkn3x%2Bi3QPm2GY1W5mgxOi0PZk38Uq2f%2BhhQyXk9mtZjPVrtz7wx7PKFXxCBXBn54Uxnph7AK3vTKXGumofrRynlGByxlQnpfpidvtapnw%2B6N1%2Fzs57XWa97R72F0oq0%2FD8DJHDleqC9T3znrKLsNX%2BJSr3JljRioFSyFsBv6pqsJ8Ta9GOcfGNi2DOpDq29WN%2B800F%2BN4Ux4PHzBIxLFwwaoJMH8rXj7r8kpBSORVUuO9y5aZIqoA%2FDyhX6Upf7yHMsU2YHtVAu3yKFjkscwiqOARyKD3dmHAjCrpvKn6uozDGzojKBjqkAbnZkhEhpsEpP1qzEg1r8j6%2BtXAtHDRxwK%2FPhxnEnTOpIiw6SCCQlfUNy0BqTr9Pk0%2B743uOEWcQiHYXkD6Keuw3qQC7vIljZv5umNG7n%2BGAVx6Q0QPJJ9UMQNiEd5xjf%2Bl%2BgHrGOHxsXO9cs1%2FwrbPgDLYhpVMoC5iWuzNim3tRjKq7OnLKeh2wJcb%2BeLvpz%2FF7BbgfDHSBKR05Bx6eXjIxrcbv&X-Amz-Signature=ae4e01c238748cdf2bc7aa000b430ee69e4dd12bf88210fc550b7b71cbb19d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6WTFXNJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzZqJtOdAuDfWXkOAKYd3NQTy2gDC0cW1Fig2KsOYjtAIhAM5cZ%2FSE6ri2Vm2ExarBFt4oqjxM%2BrVOpbMfZaCqF3u6Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxcDulZCwyrOi1%2BxoYq3AMeRnruC3OiJTuhJFlcU6ZXi1NavELKdA0R2zCefw10AeS8L7nFStkC%2F9hbS3uQYW4RCK56da8dFBXHY3iFWzJEERl27yjd%2BGyquifJ3y7f9XmeeK6XLgamYWNjAAw%2F4TtsSRNWdwSE7OYnb0iVkSPbRf0yTeSbSCWSTiUD%2ByLoRq6IE3nmIleyvjEKAFE2ZIvrwXuSZoeHsOxPXQuIq%2FjZKw3AP%2F5rFgZHXOHaMZTEHRc7W8pp78uPuayt7A5LmaxLT9bGvNLCym1v9AyfqhjMgGUSEdxJNHKqUkOiVEhHfr7tBA6vcKMak2ZX2laJqVsVLrV54vxTD40Oz%2Fkn3x%2Bi3QPm2GY1W5mgxOi0PZk38Uq2f%2BhhQyXk9mtZjPVrtz7wx7PKFXxCBXBn54Uxnph7AK3vTKXGumofrRynlGByxlQnpfpidvtapnw%2B6N1%2Fzs57XWa97R72F0oq0%2FD8DJHDleqC9T3znrKLsNX%2BJSr3JljRioFSyFsBv6pqsJ8Ta9GOcfGNi2DOpDq29WN%2B800F%2BN4Ux4PHzBIxLFwwaoJMH8rXj7r8kpBSORVUuO9y5aZIqoA%2FDyhX6Upf7yHMsU2YHtVAu3yKFjkscwiqOARyKD3dmHAjCrpvKn6uozDGzojKBjqkAbnZkhEhpsEpP1qzEg1r8j6%2BtXAtHDRxwK%2FPhxnEnTOpIiw6SCCQlfUNy0BqTr9Pk0%2B743uOEWcQiHYXkD6Keuw3qQC7vIljZv5umNG7n%2BGAVx6Q0QPJJ9UMQNiEd5xjf%2Bl%2BgHrGOHxsXO9cs1%2FwrbPgDLYhpVMoC5iWuzNim3tRjKq7OnLKeh2wJcb%2BeLvpz%2FF7BbgfDHSBKR05Bx6eXjIxrcbv&X-Amz-Signature=106de77f7ce6659cdd7880c14488eac9b7120933e450c4bd8e9855af6271278a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
