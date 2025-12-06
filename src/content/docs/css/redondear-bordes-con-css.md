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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMHCSFAA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAILuhZowCasgqJb2QP0djYZTAsqTaakF7CKwp%2BdUn5oAiBd79N70H1f2q3S3TZg9cmsw1NpBLDqSHnNobD88izzjyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMWMXUCskAYA%2FF2i7LKtwDKzXuU%2FiUlXeWdK%2BZ011UoaC94UMO0R1UnWfMS88gEKxCdaLtD0%2BG0S67XbctudYwXp6118oUZpyiyU2huxFJaQCPaAGAj0kJgHAswPnZ83szuOCBvBf4LK6obSatR8Xtm9lzaNFcancVaATGF47tNTiKeYS3P43cH0bGvnpN2ImVaY933ILxgVnOJvJht7QKO2nd6QJM3usdvM7uO80TGBz9QMozL%2BOF8%2FDGQMWpy9FqxtN7bd8U5S7ABT7WxC8vNbmd77aT2fbPNLygjPucvQr%2FoXlCSzt57M0F0oWhZ%2BWtYf3aP4m7e%2FzHhO7dUhWUafYrA%2BCTWWK%2BeHCc0uvPOKFKjZNHEAyLXEcNbkFjKZQETUYRINPFRFUzYii2ShSYRia1xZDUt1Y5OIaB3wgSauRi9hVPYaottSR1a6MCcZ%2BfBuBqWnD9VuCjXNTNHTHdu9M2PTz6aJN35kk55dv0Aj%2Bl3n74UVCwfS26wjrXwWryOJxiE9Ew4U%2BUMq%2BevVun99BRUO7FoNDjfeoN4TVlTq6j%2B9xS5L7mi6Ku9O6hlpgN2E9ts1KfO%2BnntAfeUyEuDPU8feIgl5ItUKR6cxZmIY7ZfC52QZTmWjyTPQadl%2Fkb5tKMnwab5WD9LUAwh6fQyQY6pgHX8w6dihVPABdMpCA0A4slx8zTcIhbsgaOwIVg8HS9bnVApG34fkTT03Ko27Iv683XPcG4TnT6Iavc21JJcZvf0Yfwlqo4v8NPD5fbxM%2FhEKluZQv8lK%2BLw43DlPFy%2FCI%2Bvg5XoLDZJTsBd0TBTs09U1TA3fuVaS25BlxxjPWhevA%2F1aDUnV7rLKHI5ER8aEf%2BnFOY8qh%2F1O8B%2B9GPuBI3FD2EoPC2&X-Amz-Signature=a6383d4da0e7398c54e5c09f0a20ea64888541800dd174b2d14041db448cc091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMHCSFAA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAILuhZowCasgqJb2QP0djYZTAsqTaakF7CKwp%2BdUn5oAiBd79N70H1f2q3S3TZg9cmsw1NpBLDqSHnNobD88izzjyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMWMXUCskAYA%2FF2i7LKtwDKzXuU%2FiUlXeWdK%2BZ011UoaC94UMO0R1UnWfMS88gEKxCdaLtD0%2BG0S67XbctudYwXp6118oUZpyiyU2huxFJaQCPaAGAj0kJgHAswPnZ83szuOCBvBf4LK6obSatR8Xtm9lzaNFcancVaATGF47tNTiKeYS3P43cH0bGvnpN2ImVaY933ILxgVnOJvJht7QKO2nd6QJM3usdvM7uO80TGBz9QMozL%2BOF8%2FDGQMWpy9FqxtN7bd8U5S7ABT7WxC8vNbmd77aT2fbPNLygjPucvQr%2FoXlCSzt57M0F0oWhZ%2BWtYf3aP4m7e%2FzHhO7dUhWUafYrA%2BCTWWK%2BeHCc0uvPOKFKjZNHEAyLXEcNbkFjKZQETUYRINPFRFUzYii2ShSYRia1xZDUt1Y5OIaB3wgSauRi9hVPYaottSR1a6MCcZ%2BfBuBqWnD9VuCjXNTNHTHdu9M2PTz6aJN35kk55dv0Aj%2Bl3n74UVCwfS26wjrXwWryOJxiE9Ew4U%2BUMq%2BevVun99BRUO7FoNDjfeoN4TVlTq6j%2B9xS5L7mi6Ku9O6hlpgN2E9ts1KfO%2BnntAfeUyEuDPU8feIgl5ItUKR6cxZmIY7ZfC52QZTmWjyTPQadl%2Fkb5tKMnwab5WD9LUAwh6fQyQY6pgHX8w6dihVPABdMpCA0A4slx8zTcIhbsgaOwIVg8HS9bnVApG34fkTT03Ko27Iv683XPcG4TnT6Iavc21JJcZvf0Yfwlqo4v8NPD5fbxM%2FhEKluZQv8lK%2BLw43DlPFy%2FCI%2Bvg5XoLDZJTsBd0TBTs09U1TA3fuVaS25BlxxjPWhevA%2F1aDUnV7rLKHI5ER8aEf%2BnFOY8qh%2F1O8B%2B9GPuBI3FD2EoPC2&X-Amz-Signature=ae596f03516ddc151291b2228e6fcfd8357f928f95a75d06795b9f51fd36eea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
