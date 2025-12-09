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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6E6SL7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU21KgbWIQQQxh7WNKsnovIyw4EB%2FZ9Bq3qo9M7PrXkQIhAMMa%2FIH4sp7RWj94mWermbptCZuIbyxBJsOprwej8d7hKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRjoKPAIrElLjQwtkq3APpVzHr5Xvz910PX4ZLtLdoXfDxTWyrY9gBwEWHYTkG7QF38JHyvgdeTzU6GhU5S0G0kDAi1K9cAO6S7KM1SA1V%2FvH6IAesEwQfdmubu4aZh2ryt7pjwsRVF9UlSzIWgH%2B%2F2%2Ffw2bVqcWSvIbEGa194eUNKnYcT%2FgNU8khQZ4vBKRobeY6t8CsUOIiHlgk40hAy1gk8yfrVENcVTpJE%2Bu1qpbr70JsMIDDwg0TV1ljItVHYFi1XiTtocJvdJtYgZLHGz7iQLqjVMHe7g%2BNfaCqSyqkg5Ct9LBuBPugp5SqH8TFUWtJdzFUiXQIdYqw9DJIiDg%2FcrRdjYGvt1vYtLA0ntLd6vRjXRJTiy7joAfM1kUdmgJ%2BYPlCfgYEXZByxAPu30cxDwemjrk1doudvn1y3o%2Bv5hKZA%2Bqqqdg3MUHLX5Y%2BQRWbeudzl1mHXR9s1rtKzPxnJ4%2BAA4%2Fw2Q46uNIFC6oDtyz7XvHYNxmwQFkYpYOvnwPbpXcu%2BOl0b8RZpBYLCpKMgj0xXuy2PKDGwy7Zd6aEfL8bBOhhK87hl4uMeawgbTZOJuA3M1qo%2FyVXF3UCvqowK1naUro1%2B4ypD0c37lDUVWQklLWx17ldvfgoLTes8m8deUFzO3aJAxDCywt3JBjqkAU1%2F2Z7MLGKH%2BFkrVpL3Z40eefmJ0at6XwMqEVgsesYvSEX%2FvHdeIyJzExJ8hLyiWzkxQOAiwTI5OS087sREq72n4TUxcy0F8QGvmxQqcrrW%2FXy1Lh6%2FEdVhMuH986RCuUPd%2FgClYISADITWc8Uj2oko27c63rd9ZaOOx6TEIzGKnl4clpkhOf2gpOi%2BjjnCN6llVe5wZ%2FYmne581hcyxob25Ve%2F&X-Amz-Signature=3ee25c085df35bf2528d8d88e87c998281a5ab930242e64a7711872a5fbffa1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6E6SL7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU21KgbWIQQQxh7WNKsnovIyw4EB%2FZ9Bq3qo9M7PrXkQIhAMMa%2FIH4sp7RWj94mWermbptCZuIbyxBJsOprwej8d7hKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRjoKPAIrElLjQwtkq3APpVzHr5Xvz910PX4ZLtLdoXfDxTWyrY9gBwEWHYTkG7QF38JHyvgdeTzU6GhU5S0G0kDAi1K9cAO6S7KM1SA1V%2FvH6IAesEwQfdmubu4aZh2ryt7pjwsRVF9UlSzIWgH%2B%2F2%2Ffw2bVqcWSvIbEGa194eUNKnYcT%2FgNU8khQZ4vBKRobeY6t8CsUOIiHlgk40hAy1gk8yfrVENcVTpJE%2Bu1qpbr70JsMIDDwg0TV1ljItVHYFi1XiTtocJvdJtYgZLHGz7iQLqjVMHe7g%2BNfaCqSyqkg5Ct9LBuBPugp5SqH8TFUWtJdzFUiXQIdYqw9DJIiDg%2FcrRdjYGvt1vYtLA0ntLd6vRjXRJTiy7joAfM1kUdmgJ%2BYPlCfgYEXZByxAPu30cxDwemjrk1doudvn1y3o%2Bv5hKZA%2Bqqqdg3MUHLX5Y%2BQRWbeudzl1mHXR9s1rtKzPxnJ4%2BAA4%2Fw2Q46uNIFC6oDtyz7XvHYNxmwQFkYpYOvnwPbpXcu%2BOl0b8RZpBYLCpKMgj0xXuy2PKDGwy7Zd6aEfL8bBOhhK87hl4uMeawgbTZOJuA3M1qo%2FyVXF3UCvqowK1naUro1%2B4ypD0c37lDUVWQklLWx17ldvfgoLTes8m8deUFzO3aJAxDCywt3JBjqkAU1%2F2Z7MLGKH%2BFkrVpL3Z40eefmJ0at6XwMqEVgsesYvSEX%2FvHdeIyJzExJ8hLyiWzkxQOAiwTI5OS087sREq72n4TUxcy0F8QGvmxQqcrrW%2FXy1Lh6%2FEdVhMuH986RCuUPd%2FgClYISADITWc8Uj2oko27c63rd9ZaOOx6TEIzGKnl4clpkhOf2gpOi%2BjjnCN6llVe5wZ%2FYmne581hcyxob25Ve%2F&X-Amz-Signature=2d69d1b263fb8b7a446bb695d83c5c1965d4d022812d6ea0674dff55c9b44936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
