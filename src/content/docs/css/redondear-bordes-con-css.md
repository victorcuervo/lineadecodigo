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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YVACTYF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBTLqJmGnSuGQJKADe4D9JkTadGM5AvCGFlCokWjz62wAiBjm6yHjTacaJ6ocslZ6qFxoW1Eu6qpktjqNsfAclL5VSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMj8boGapNOapnNUIjKtwD9n8DoDgXLt07tYcdqjWF7Vxb0BmvGKpLcszT4aXDyn3r2Nqx2YhVNHZda9k3A6QP9CSL6smh1rs9eOYh5OEYGTdRT5WEQNgjTt%2FrM8FzkgvSv4jsXXvQ0LG%2Bqtjmlam2ZBpXm%2FcsnGZeY9wHBBEkk0Dd5dvBLBjimNBVvjp3ODtqKIoAhrIsM1CO0uTYnaqok3VCkeExOzarYdLqs1o2BjR6DI8OqEu1Nk2WU%2BKhT1rWQvXa2lrSBrAPEN6A9GDwWu7Ij8AuveqE1wh4joiYCx5n0JvnfoLlca1WUfyu4E6Wm3ClRWMPIsvYYzARMSoUlnf48GGo5wea8NnvnWS4ouYXU92XjbkVUQZA3SjTseoxDuI4YqG0UOTKLmpKJ%2B0Id5%2FEyWQRmmQic9jcIJrlLYm85Q2tuIqNOfE6Uir0s1ItKmRwIExW5FwcCPpNnJkSv7n2SaSPewG%2FRS78gC8J%2BlF0kpHnFlFbZONR5OF8a5SHyAzFvtOBhZzbkdJkS4eVvx%2BNVcaHqwdwjMGw0xw61XrcNl1cZzYVfBpUfKWSnyJ6J1n3lagT1yAsoDE4PkR1E%2FyPP5GeTlY7k0wothTMSbjNRPlLBLQuE%2Fl76tgkAoYSUQagNuH%2FvWe3%2BAgwofjCyQY6pgFsx37EGijb29iexwWSp4lOcVEPrcMJSXUt4yPp%2F2tg6GLmp7frJasVJypJcVMYAZyYsR%2B%2Fnzkzni6bFvT1Hcztnk0zEhaNmP6ys91%2FLThUHTpC%2B7pAYVT7oCO%2BX4FkqLq7OOX4zklU48IXVX3ZUmTfkDjqjRlVVNCOA7weQHKD0LD%2FnlDX8Azk9f%2BRxO3arTasEJNaHd3PimixCGfj4jaoccDnT%2Byi&X-Amz-Signature=31961c60a3e31d39fd1601bd07a44eb7f2185918d396331dab5680e5397e6701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YVACTYF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBTLqJmGnSuGQJKADe4D9JkTadGM5AvCGFlCokWjz62wAiBjm6yHjTacaJ6ocslZ6qFxoW1Eu6qpktjqNsfAclL5VSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMj8boGapNOapnNUIjKtwD9n8DoDgXLt07tYcdqjWF7Vxb0BmvGKpLcszT4aXDyn3r2Nqx2YhVNHZda9k3A6QP9CSL6smh1rs9eOYh5OEYGTdRT5WEQNgjTt%2FrM8FzkgvSv4jsXXvQ0LG%2Bqtjmlam2ZBpXm%2FcsnGZeY9wHBBEkk0Dd5dvBLBjimNBVvjp3ODtqKIoAhrIsM1CO0uTYnaqok3VCkeExOzarYdLqs1o2BjR6DI8OqEu1Nk2WU%2BKhT1rWQvXa2lrSBrAPEN6A9GDwWu7Ij8AuveqE1wh4joiYCx5n0JvnfoLlca1WUfyu4E6Wm3ClRWMPIsvYYzARMSoUlnf48GGo5wea8NnvnWS4ouYXU92XjbkVUQZA3SjTseoxDuI4YqG0UOTKLmpKJ%2B0Id5%2FEyWQRmmQic9jcIJrlLYm85Q2tuIqNOfE6Uir0s1ItKmRwIExW5FwcCPpNnJkSv7n2SaSPewG%2FRS78gC8J%2BlF0kpHnFlFbZONR5OF8a5SHyAzFvtOBhZzbkdJkS4eVvx%2BNVcaHqwdwjMGw0xw61XrcNl1cZzYVfBpUfKWSnyJ6J1n3lagT1yAsoDE4PkR1E%2FyPP5GeTlY7k0wothTMSbjNRPlLBLQuE%2Fl76tgkAoYSUQagNuH%2FvWe3%2BAgwofjCyQY6pgFsx37EGijb29iexwWSp4lOcVEPrcMJSXUt4yPp%2F2tg6GLmp7frJasVJypJcVMYAZyYsR%2B%2Fnzkzni6bFvT1Hcztnk0zEhaNmP6ys91%2FLThUHTpC%2B7pAYVT7oCO%2BX4FkqLq7OOX4zklU48IXVX3ZUmTfkDjqjRlVVNCOA7weQHKD0LD%2FnlDX8Azk9f%2BRxO3arTasEJNaHd3PimixCGfj4jaoccDnT%2Byi&X-Amz-Signature=f84abd441377a598234f8645a0c609b2767436a422575e4a3a61bb92d43d3949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
