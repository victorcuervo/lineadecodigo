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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QFPEYXW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH6wWIwReajUt7IoOcTWfhPA8RgdY6MO6FMWCD9bGODAiEArAdO%2BMUfUpZn98NuoQbCiqHU6nGAlvX0b62bbGxj%2FVQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIU%2FG55yncpOvlETXircA8Kw2hreHYmwCeuLqGAVEwp0QIDvHgUOt9%2Ff%2FvOldWn31d2cwA9hb5%2FTjBk8ZaHCZv9N2i7yPhZJ%2BpypEfY9%2BeH%2BAtx%2Bu5eixYJ%2FBm31qvppYLn7eqhzy5tQwcf2039ZPxx0qKx8SBuP9JF59klarl05Zo1NN2mG77Xi4%2FAQibXZY5seRtrPakHDZqSA%2BWfuUUuIOStzYtAgW%2FPm8yByvUWwKk6tmNRUaIZVXlmjO%2BKv8arW2IZBft75hAEg1uGR8CYUAx1TgnCho8tLBsGFP%2Fee5WtjzG9uU60eXeSi7ClQeTc2VEIAa7RkH8Ske7GeYQgoGUiTwciMK2Fz1jZmu6GrPl08TIkNXPgCHqp5OJQ6HN7X9CODpmmmAzS7O%2F%2FXeNljapirN0KLRdxnc%2BEU3znnxnvKPmYR56E%2FcrKGII%2FAP0WBqbXMJSam%2BC%2Fsd1GmKLhbVm8gFwtA76D3oiJcvDoF2je%2FMR%2FUqD4AV0c2GfdYBENYm6AtmjUUwLt9bQ7dWccwndHJwJn9ETKpFA9NPCVIPRqhmrThR2KdJqIw37mSKEHur6QvMUtHRlunddKk%2BVXoboNlepM67LCeChqXCt6Cn0RUGCEXAyI49WOyyl78dXeNY533ku4FLtoJMNyfi8oGOqUB0R1D8mu2ZcRHP61q66xfTeslVwW1bG8s2%2FWg2FttV2JSmjDYNmnvOPI4%2FjUwNBOPqmRzitML0Omg0YDV4Reg9RfX5lNyPK2Q2vesBni4LCsZ0xTWlO1sx5bW8NXGGZlL1y3YT5ks%2FI%2BsPzxkvszPmXESPs5ZsTGNFyEUZqPnNe4DqO%2FQ0vALp0PJs0p6LdqxzmxNDS3D%2F3%2FLz%2FuyIw2UXf8lzOAd&X-Amz-Signature=02563ba0540d6f4fa2352b340c3eb70d841a784b16f4fd7ed9c40cf30cb18d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QFPEYXW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH6wWIwReajUt7IoOcTWfhPA8RgdY6MO6FMWCD9bGODAiEArAdO%2BMUfUpZn98NuoQbCiqHU6nGAlvX0b62bbGxj%2FVQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIU%2FG55yncpOvlETXircA8Kw2hreHYmwCeuLqGAVEwp0QIDvHgUOt9%2Ff%2FvOldWn31d2cwA9hb5%2FTjBk8ZaHCZv9N2i7yPhZJ%2BpypEfY9%2BeH%2BAtx%2Bu5eixYJ%2FBm31qvppYLn7eqhzy5tQwcf2039ZPxx0qKx8SBuP9JF59klarl05Zo1NN2mG77Xi4%2FAQibXZY5seRtrPakHDZqSA%2BWfuUUuIOStzYtAgW%2FPm8yByvUWwKk6tmNRUaIZVXlmjO%2BKv8arW2IZBft75hAEg1uGR8CYUAx1TgnCho8tLBsGFP%2Fee5WtjzG9uU60eXeSi7ClQeTc2VEIAa7RkH8Ske7GeYQgoGUiTwciMK2Fz1jZmu6GrPl08TIkNXPgCHqp5OJQ6HN7X9CODpmmmAzS7O%2F%2FXeNljapirN0KLRdxnc%2BEU3znnxnvKPmYR56E%2FcrKGII%2FAP0WBqbXMJSam%2BC%2Fsd1GmKLhbVm8gFwtA76D3oiJcvDoF2je%2FMR%2FUqD4AV0c2GfdYBENYm6AtmjUUwLt9bQ7dWccwndHJwJn9ETKpFA9NPCVIPRqhmrThR2KdJqIw37mSKEHur6QvMUtHRlunddKk%2BVXoboNlepM67LCeChqXCt6Cn0RUGCEXAyI49WOyyl78dXeNY533ku4FLtoJMNyfi8oGOqUB0R1D8mu2ZcRHP61q66xfTeslVwW1bG8s2%2FWg2FttV2JSmjDYNmnvOPI4%2FjUwNBOPqmRzitML0Omg0YDV4Reg9RfX5lNyPK2Q2vesBni4LCsZ0xTWlO1sx5bW8NXGGZlL1y3YT5ks%2FI%2BsPzxkvszPmXESPs5ZsTGNFyEUZqPnNe4DqO%2FQ0vALp0PJs0p6LdqxzmxNDS3D%2F3%2FLz%2FuyIw2UXf8lzOAd&X-Amz-Signature=cee4639b5d6b8eaa3663624388f49bcf6f89426916000941c9d6fadcab9633e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
